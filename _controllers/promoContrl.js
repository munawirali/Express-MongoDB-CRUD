const dishes = require('../_models/promoModel')
const send = require('../_lib/response')

module.exports.findAll = (req,res) => {
  dishes.find({})
  .then(data => {
    send.success(res,null,'Fetch Data Success', data)
  })
  .catch(err=> {
    console.log(err);
    send.error(res,null,err)
  })
}

module.exports.findById = (req,res) => {
  dishes.findById(req.params.id)
  .then(data => {
    send.success(res,null,'Fetch Data Success', data)
  })
  .catch(err=> {
    console.log(err);
    send.error(res,err.reason!='' ? 404 : null,err)
  })
}

module.exports.create = (req,res) => {
  dishes.create({name:req.body.name})
  .then(data => {
    send.success(res,null,'Create Data Success', data)
  })
  .catch(err=> {
    console.log(err);
    send.error(res,null,err)
  })
}

module.exports.update = (req,res) => {
  dishes.findOneAndUpdate({
    _id:req.params.id
  },{
    name:req.body.name
  })
  .then(data => {
    send.success(res,null,'Update Data Success', data)
  })
  .catch(err=> {
    console.log(err);
    send.error(res,err.reason!='' ? 404 : null,err)
  })
}

module.exports.remove = (req,res) => {
  dishes.findOneAndRemove({
    _id:req.params.id
  })
  .then(data => {
    send.success(res,null,'Remove Data Success', data)
  })
  .catch(err=> {
    console.log(err);
    send.error(res,err.reason!='' ? 404 : null,err)
  })
}