const test = require('node:test');
const assert = require('node:assert/strict');

process.env.PEDIDO_TEMPORAL_VIGENCIA_MINUTOS = '1';

const app = require('../src/backend/servidor');

test('POST crea un pedido temporal QR y responde 201', async (t) => {
  const servidor = app.listen(0, '127.0.0.1');

  await new Promise((resolve, reject) => {
    servidor.once('listening', resolve);
    servidor.once('error', reject);
  });

  t.after(() => new Promise((resolve, reject) => {
    servidor.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  }));

  const { port } = servidor.address();

  const respuesta = await fetch(
    `http://127.0.0.1:${port}/api/v1/publico/carta/QR-PRUEBA/pedidos-temporales`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          {
            productoId: '11111111-1111-4111-8111-111111111111',
            cantidad: 1
          }
        ]
      })
    }
  );

  assert.equal(respuesta.status, 201);

  const pedidoTemporal = await respuesta.json();

  assert.ok(pedidoTemporal.referencia);
  assert.equal(pedidoTemporal.estado, 'PENDIENTE');
  assert.ok(!Number.isNaN(Date.parse(pedidoTemporal.venceEn)));
  assert.equal(pedidoTemporal.mesaId, null);
  assert.equal(pedidoTemporal.items.length, 1);
  assert.equal(
    pedidoTemporal.items[0].productoId,
    '11111111-1111-4111-8111-111111111111'
  );
  assert.equal(pedidoTemporal.items[0].cantidad, 1);
});
