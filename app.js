const express = require('express');
const dbConnection = require('./database/connection');
const bodyParser = require('body-parser');
const app = express();

//const sequelize = require('./database/connection');
//const relationship = require('./database/model-relationship');

const taskRouter = require('./routes/task');
const authRouter = require('./routes/auth');


app.use(bodyParser.json())

//app.use('/auth', authRouter.authRoutes);
app.use('/task', taskRouter.taskRoutes);
app.use('/auth', authRouter.authRoutes);
app.use('/health-check', (req, res) => {
    res.status(200);
})

dbConnection.connection().then(result => {
        app.listen(3000, () => {
            console.log('listening');
        });
    }).catch(err => {
        console.log(err);
    });
// sequelize.sync().then(result => {
//     app.listen(3000, () => {
//         console.log('listening');
//     });
// }).catch(err => {
//     console.log(err);
// });