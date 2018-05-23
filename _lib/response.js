module.exports.error = (res, code, err) => {
  res.status(code||400).json({
    status: false,
    message: err,
    data:[]
  })
}

module.exports.success = (res, code, message, data) => {
  res.status(code||200).json({
    status: true,
    message: message,
    data:data
  })
}