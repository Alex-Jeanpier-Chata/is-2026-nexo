const { randomUUID } = require('node:crypto');

class PedidoTemporalServicio {
  constructor(repositorio, vigenciaMinutos) {
    if (!Number.isInteger(vigenciaMinutos) || vigenciaMinutos <= 0) {
      throw new Error('La vigencia del pedido temporal debe configurarse en minutos.');
    }

    this.repositorio = repositorio;
    this.vigenciaMinutos = vigenciaMinutos;
  }

  crearPedidoTemporal(codigoQr, datos) {
    if (!datos || !Array.isArray(datos.items) || datos.items.length === 0) {
      const error = new Error('El pedido temporal debe contener al menos un item.');
      error.codigo = 'PEDIDO_INVALIDO';
      throw error;
    }

    // La vigencia permanece configurable hasta resolver la deuda funcional.
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
