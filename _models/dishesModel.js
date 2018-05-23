const mongoose = require('mongoose');
mongoose.connection.openUri(`${process.env.APPDB}`,(err)=>{
  if (err) {
    console.log(err);
  }
});
var Schema = mongoose.Schema;


var DishesSchema = new Schema({
    name  : { type:String }
});

module.exports = mongoose.model('Dishes', DishesSchema);