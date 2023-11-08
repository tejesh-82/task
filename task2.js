const express=require('express')
const app=express();
app.use(express.json())

const acc=[];

app.post('/post',(req,res)=>{
    const {name,type,balance}=req.body;
    const header=req.headers['authorization'];
    if(!header){
        res.json('authorization failed');
    }
    else{
        
        const num=Math.floor(Math.random()*10000);
        //limit checking 
        const repeat=[];
        acc.forEach((obj) => {
            if(obj.name===name && obj.type===type){
                repeat.push(obj);
            }
        });
        //limit reached
        if(repeat.length>0){
            res.json('limit reached')
        }
        //limit not reached
        else{
            const newAcc={
                accNo:num,
                name:name,
                type:type,
                status:"pending",
                balance:balance
            }
            //account does not exist 
            //pushing
            acc.push(newAcc);
            res.json(acc)
        }
    }
})
app.get('/get',(req,res)=>{
    const header=req.headers['authorization'];
    if(!header){
        res.json('authorization failed');
    }
    else{
        res.json(acc)
    }
})

app.put('/update',(req,res)=>{
    const {accNo,status}=req.body;
    const header=req.headers['authorization'];
    if(!header){
        res.json('authorization failed');
    }
    else{
        acc.forEach((obj) => {
            if(obj.accNo===accNo){
                obj.status=status;
            }
        });
        res.json(acc)
    }
})
app.listen(2000,()=>{
    console.log('server running');
})
