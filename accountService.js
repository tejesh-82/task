const acc = []; 
function post(account) {
    const num = Math.floor(Math.random() * 10000);
    // Limit checking 
    const repeat = acc.filter(obj => obj.name === account.name && obj.type === account.type);

    // Limit reached
    if (repeat.length > 0) {
        return "limit reached";
    }
    //limit not reached
    else {
        const newAcc = {
            accNo: num,
            name: account.name,
            type: account.type,
            status: "pending",
            balance: account.balance
        };
        // pushing new account
        acc.push(newAcc);
    }
    return acc;
}

function get(){
    return acc;
}

function update(account){
    const {accNo,status}=account;
    acc.forEach((obj) => {
        if(obj.accNo===accNo){
            obj.status=status;
        }
    });
    return acc;
}

module.exports = { post , get ,update};
