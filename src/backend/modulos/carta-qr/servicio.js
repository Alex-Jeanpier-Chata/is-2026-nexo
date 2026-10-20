
const { randomUUID } = require('node:crypto');

class PedidoTemporalServicio {
  constructor(repositorio, vigenciaMinutos) {
    if (!Number.isInteger(vigenciaMinutos) || vigenciaMinutos <= 0) {
      throw new Error('La vigencia del pedido temporal debe configurarse en minutos.');
    }

    this.repositorio = repositorio;
    this.vigenciaMinutos = vigenciaMinutos;
  }

  generarError(mensaje) {
    const error = new Error(mensaje);
    error.codigo = 'PEDIDO_INVALIDO';
    return error;
  }

  esUuidValido(valor) {
    return typeof valor === 'string' &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(valor);
  }

  validarObservacion(valor, campo) {
    if (valor !== undefined &&
        (typeof valor !== 'string' || Array.from(valor).length > 500)) {
      throw this.generarError(`${campo} debe ser texto de hasta 500 caracteres.`);
    }
  }

  validarPedido(datos) {
    if (!datos || typeof datos !== 'object' ||
        Array.isArray(datos) ||
        !Array.isArray(datos.items) ||
        datos.items.length === 0) {
      throw this.generarError('El pedido temporal debe contener al menos un item.');
    }

    if (datos.mesaId !== undefined &&
        datos.mesaId !== null &&
        !this.esUuidValido(datos.mesaId)) {
      throw this.generarError('mesaId debe ser un UUID válido.');
    }

    this.validarObservacion(datos.observacion, 'observacion');

    for (const item of datos.items) {
      if (!item || typeof item !== 'object' || Array.isArray(item)) {
        throw this.generarError('Cada item debe ser un objeto válido.');
      }

      if (!this.esUuidValido(item.productoId)) {
        throw this.generarError('productoId debe ser un UUID válido.');
      }

      if (!Number.isInteger(item.cantidad) || item.cantidad < 1) {
        throw this.generarError('cantidad debe ser un entero mayor o igual a 1.');
      }

      this.validarObservacion(item.observacion, 'observacion del item');

      if (item.opciones !== undefined) {
        if (!Array.isArray(item.opciones)) {
          throw this.generarError('opciones debe ser un arreglo.');
        }

        for (const opcion of item.opciones) {
          if (!opcion || typeof opcion !== 'object' ||
              Array.isArray(opcion) ||
              (opcion.nombre !== undefined &&
               typeof opcion.nombre !== 'string') ||
              (opcion.valor !== undefined &&
               typeof opcion.valor !== 'string')) {
            throw this.generarError('Cada opción debe cumplir el contrato OpenAPI.');
          }
        }
      }
    }
  }

  crearPedidoTemporal(codigoQr, datos) {
    this.validarPedido(datos);

    const venceEn = new Date(
      Date.now() + this.vigenciaMinutos * 60 * 1000
    ).toISOString();

    const pedidoTemporal = {
      referencia: randomUUID(),
      estado: 'PENDIENTE',
      venceEn,
      mesaId: datos.mesaId ?? null,
      items: structuredClone(datos.items)
    };

    this.repositorio.guardar({
      ...pedidoTemporal,
      codigoQr,
      observacion: datos.observacion ?? null
    });

    return structuredClone(pedidoTemporal);
  }
}

module.exports = PedidoTemporalServicio;
