const app = require('express')()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => res.send('Server'))

// user defined
const dishes = require('./_routes/dishesRoute')

app.use('/api/dishes', dishes)

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Listening from port 3000');
})