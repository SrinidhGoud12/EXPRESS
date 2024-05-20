const express = require('express');
const app =express();
app.use(express.json())

// app.get('/api/students/:id',(req,res)=>
// {
//    console.log(req.params.id)
//    const student = students.find(student=> student.id === parseInt(req.params.id))
//    if(!student) res.status(404).send(`${req.params.id} doesnot exist`)
//    res.status(200).json(student)
// });

app.get('/api/students',(req,res)=>
{
    res.status(200).send(students)
})

app.post('/api/students',(req,res)=>
{
    const student={
        id:req.body.id,
        name:req.body.name
    }
    students.push(student);
    res.status(200).json(student)
})
app.put('/api/students/:id',(req,res)=>
{
   console.log(req.params.id)
   let student = students.find(student=> student.id === parseInt(req.params.id))
   if(!student) res.status(404).send(`${req.params.id} doesnot exist`)
    student={
        name:req.body.name
    }
    // students.push(student);
    res.status(200).send(student)
})
app.delete('/api/students/:id',(req,res)=>
{
    console.log(req.params.id)
    const student = students.find(student=> student.id === parseInt(req.params.id))
    if(!student) res.status(404).send(`${req.params.id} doesnot exist`)
    var index= students.indexOf(student);
    students.splice(index,1);
    res.status(200).json(student)
})
app.listen(3000);