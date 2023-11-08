const accountsService = require('./accountService');

function open(req, res) {
  const account = req.body;
  
  // Passing the account data to the service
  const result = accountsService.post(account);
  
  // Sending the result back as a response
  res.send(result);
}
function get(req,res){
  const getdata=accountsService.get();
  res.send(getdata);
}
function update(req,res){
  const accounts = req.body;

  const edit=accountsService.update(accounts);
  res.send(edit)
}
module.exports = { open, get, update};
