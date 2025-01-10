import { Schema,model } from "mongoose";

const CompostBinSchema=new Schema({

User:{type:Schema.Types.ObjectId,ref:'User',required:true},
CreatedDate:{type:Date,required:true},
EstimatedDate:{type:Date,required:true},
Events:{type:Schema.Types.ObjectId,ref:'CompostingEvent',required:true}



})

export default model('CompostBin',CompostBinSchema);


