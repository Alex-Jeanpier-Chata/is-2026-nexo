const express = require('express');

const PedidoTemporalRepositorio = require('./modulos/carta-qr/repositorio');
const PedidoTemporalServicio = require('./modulos/carta-qr/servicio');
const PedidoTemporalControlador = require('./modulos/carta-qr/controlador');
const crearRutasCartaQr = require('./modulos/carta-qr/rutas');

const app = express();
const puerto = process.env.PORT || 3000;

const vigenciaMinutos = Number.parseInt(
  process.env.PEDIDO_TEMPORAL_VIGENCIA_MINUTOS,
  10
);

const repositorio = new PedidoTemporalRepositorio();
const servicio = new PedidoTemporalServicio(repositorio, vigenciaMinutos);
const controlador = new PedidoTemporalControlador(servicio);

app.use(express.json());
app.use(crearRutasCartaQr(controlador));

if (require.main === module) {
  app.listen(puerto, () => {
    console.log(`HELA API disponible en http://localhost:${puerto}`);
  });
}

module.exports = app;
