
import mongoose from 'mongoose';

const { Schema } = mongoose;

const dataSchema = new Schema({

   tags:Array
},{timestamps:true});

export default mongoose.model('Data',dataSchema);