const express = require('express');
const app = express();
const accountsController = require('./accountController');

app.use(express.json());

app.post('/account/create',accountsController.open);

app.get('/acounts/get',accountsController.get);

app.put('/accounts/update',accountsController.update);

app.listen(3000, () => {
  console.log(`Server running`);
});
