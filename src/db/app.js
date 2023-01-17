const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const {connectDb} = require('./db_util')
const mongoose = require('mongoose')
const verifyJwt = require('./middlewares/verifyJwt')
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cookieParser())

connectDb()

app.use(cors());

const UsersRouter = require('./routes/Users.route')
const InventorysRouter = require('./routes/Inventorys.route')
const BonusRouter = require('./routes/Bonus.route')
const ScoresRouter = require('./routes/Scores.route')
const MulipliersRouter = require('./routes/Multipliers.route')

app.use('/multipliers',MulipliersRouter)
app.use('/bonus',BonusRouter)
app.use('/register',require('./routes/register'))
app.use('/login',require('./routes/login'))
app.use('/refresh',require('./routes/refresh'))
app.use('/logout',require('./routes/logout'))

app.use(verifyJwt)
app.use('/pingAuth',UsersRouter)
app.use('/scores',ScoresRouter)
app.use('/inventorys',InventorysRouter)



mongoose.connection.once('open',()=>{
    
    app.listen(process.env.PORT_NUM,()=>{
        console.log('port listen to port '+process.env.PORT_NUM)
    })
})




/*
****************************  CONNECTION  **************************
*/


/*
******************************  CRUD    ****************************
*/


/*
get user id from user_name + password
 */


/*
get user score from user id
 */

/*
get user eventory
 */

/*
get bonnus from_id
 */

/*

 */

/*

 */


/*

 */

// get user score 