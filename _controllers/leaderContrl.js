const leader = require('../_models/leaderModel')
const send = require('../_lib/response')

module.exports.findAll = (req,res) => {
  leader.find({})
  .then(data => {
    send.success(res,null,'Fetch Data Success', data)
  })
  .catch(err=> {
    console.log(err);
    send.error(res,null,err)
  })
}

module.exports.findById = (req,res) => {
  leader.findById(req.params.id)
  .then(data => {
    send.success(res,null,'Fetch Data Success', data)
  })
  .catch(err=> {
    console.log(err);
    send.error(res,err.reason!='' ? 404 : null,err)
  })
}

module.exports.create = (req,res) => {
  // you can add validation manually error or you can add in model required true
  // leader.create(req.body)
  if (!req.body.name || req.body.name.trim === '') send.error(res,null,'field name not found / is null')
  else
  leader.create({name:req.body.name})
  .then(data => {
    send.success(res,null,'Create Data Success', data)
  })
  .catch(err=> {
    console.log(err);
    send.error(res,null,err)
  })
}

module.exports.update = (req,res) => {
  if (!req.body.name || req.body.name.trim === '') send.error(res,null,'field name not found / is null')
  else
  leader.findOneAndUpdate({
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
  leader.findOneAndRemove({
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