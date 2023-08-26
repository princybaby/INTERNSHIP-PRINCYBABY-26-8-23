const mongoose=require('mongoose')


const classSchema=mongoose.Schema(
    {
        standard: {
            type:String,
            required:(true,"please enter a standard")
        },
        division: {
            type:String,
            required:(true,"please enter a  division")
        }
        },

        {
            timestamps: true
        }
        )
        const classes =mongoose.model('student',classSchema);
        module.exports=classes;