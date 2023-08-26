const express=require('express')
const mongoose=require('mongoose')
const student = require('./models/studentmodel')
const classes=require('./models/classmodel')


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res) => {
    res.send('hello crud new')
})

app.get('/blog',(req,res) => {
    res.send('hello Blog')
})


app.get('/student',async(req,res)=>{
    try {
        const student = await student.find({});
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    app.get('/student/:id', async(req, res) =>{
        try {
            const {id} = req.params;
            const student = await student.findById(id);
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })

    app.post('/student', async(req, res) =>{
        try {
            const {id} = req.params;
            const student = await student.create(id);
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })

    app.put('/student/:id', async(req, res) => {
        try {
            const {id} = req.params;
            const student = await student.findByIdAndUpdate(id, req.body);
            // we cannot find any student in database
            if(!student){
                return res.status(404).json({message: `cannot find any product with ID ${id}`})
            }
            const updatestudent = await student.findById(id);
            res.status(200).json(updatedstudent);
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })

    app.delete('/student/:id', async(req, res) => {
        try {
            const {id} = req.params;
            const student = await student.findByIdAndDelete(id, req.body);
            // we cannot find any student in database
            if(!student){
                return res.status(404).json({message: `cannot find any product with ID ${id}`})
            }
            
            res.status(200).json(updatedstudent);
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    })


    //console.log(req.body);
    //res.send(req.body)
}
)

mongoose.set('strictQuery',false)
mongoose.connect('mongodb+srv://princybaby46:princy123@project0.p4rhgqv.mongodb.net/API?retryWrites=true&w=majority')
.then(() =>{
    app.listen(3000, ()=>{
        console.log("App is running on 3000")
    });
    console.log('connected to mongoDB')
}).catch(()=>{
    console.log('error')
})