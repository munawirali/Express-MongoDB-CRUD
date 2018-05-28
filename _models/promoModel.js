const mongoose = require('mongoose');
mongoose.connection.openUri(`${process.env.APPDB}`,(err)=>{
  if (err) {
    console.log(err);
  }
});
var Schema = mongoose.Schema;


var PromoSchema = new Schema({
    name  : { type:String, required:true }
});

module.exports = mongoose.model('Promo', PromoSchema);