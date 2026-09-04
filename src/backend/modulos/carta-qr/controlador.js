class PedidoTemporalControlador {
  constructor(servicio) {
    this.servicio = servicio;
    this.crearPedidoTemporal = this.crearPedidoTemporal.bind(this);
  }

  crearPedidoTemporal(req, res, next) {
    try {
      const pedidoTemporal = this.servicio.crearPedidoTemporal(
        req.params.codigoQr,
        req.body
      );

      return res.status(201).json(pedidoTemporal);
    } catch (error) {
      if (error.codigo === 'PEDIDO_INVALIDO') {
        return res.status(400).json({
          codigo: error.codigo,
          mensaje: error.message
        });
      }

      return next(error);
    }
  }
}

module.exports = PedidoTemporalControlador;
