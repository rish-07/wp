const express =require('express');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
const nodemon=require('nodemon');

const app=express();
const port=3000;

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'student'
});

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to mysql: ',err);
        return ;
    }
    console.log('Connected to mysql');
    
});

app.use(bodyParser.json());
app.get('/getAllStudentInfo',(req,res)=>{
    connection.query('select * from student_info',(err,results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.get('/getSpecifiedStudentInfo/:id',(req,res)=>{
    const stdId=req.params.id;
    connection.query('select * from student_info where id=?',[stdId],(err,results)=>{
        if(err) throw err;
        res.json(results[0]);
    });
});

app.post('/addStudent',(req,res)=>{
    const {id,name,age}=req.body;
    connection.query('insert into student_info values(?,?,?)',[id,name,age],(err,results)=>{
        if(err) throw err;
        res.json({id,name,age});
    });
});

app.put('/updateStudentInfo/:id',(req,res)=>{
    const stdId=req.params.id;
    const {name,age}=req.body;
    connection.query('update student_info set name=?, age=? where id=?',[name,age,stdId],(err)=>{
        if(err) throw err;
        res.json({id:stdId ,name,age});
    });
});

app.delete('/deleteStudentInfo/:id',(req,res)=>{
    const stdId=req.params.id;
    connection.query('delete from student_info where id=?',[stdId],(err)=>{
        if(err) throw err;
        res.json({message:'Student info deleted successfully',id:stdId});
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
