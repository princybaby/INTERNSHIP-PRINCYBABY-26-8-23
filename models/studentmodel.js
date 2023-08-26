const mongoose=require('mongoose')


const studentSchema=mongoose.Schema(
    {
name: {
    type:String,
    required:(true,"please enter a student name")
},
rollno: {
    type:String,
    required:(true,"please enter a  rollno")
},
nmobileno: {
    type:String,
    required:(true,"please enter a mobile no")
},
classid: {
    type:String,
    required:(true,"please enter a classid")
}
    },

{
    timestamps: true
}
)
const student =mongoose.model('student',studentSchema);
module.exports=student;




