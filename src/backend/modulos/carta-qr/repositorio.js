class PedidoTemporalRepositorio {
  constructor() {
    this.pedidos = new Map();
  }

  guardar(pedidoTemporal) {
    this.pedidos.set(pedidoTemporal.referencia, structuredClone(pedidoTemporal));
    return structuredClone(pedidoTemporal);
  }

  buscarPorReferencia(referencia) {
    const pedidoTemporal = this.pedidos.get(referencia);

    return pedidoTemporal ? structuredClone(pedidoTemporal) : null;
  }
}

module.exports = PedidoTemporalRepositorio;
