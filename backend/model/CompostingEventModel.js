import { Schema,model } from "mongoose";

const CompostingEventSchema=new Schema({

EventType:{type:String,required:true},
Status:{type:String,required:true,default:"Pending"},
OccurDate:{type:Date,required:true},
User:{type:Schema.Types.ObjectId,ref:'User',required:true,default:'1'},
doneDate:{type:Date},
DaysPast:{type:Number}




})

export default model('CompostingEvent',CompostingEventSchema);