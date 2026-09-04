const express = require('express');

function crearRutasCartaQr(controlador) {
  const rutas = express.Router();

  rutas.post(
    '/api/v1/publico/carta/:codigoQr/pedidos-temporales',
    controlador.crearPedidoTemporal
  );

  return rutas;
}

module.exports = crearRutasCartaQr;
