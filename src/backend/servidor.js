const express = require('express');

const app = express();
const puerto = process.env.PORT || 3000;

app.use(express.json());

if (require.main === module) {
  app.listen(puerto, () => {
    console.log(`HELA API disponible en http://localhost:${puerto}`);
  });
}

module.exports = app;
