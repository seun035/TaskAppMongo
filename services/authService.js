const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {client} = require('../database/connection');

module.exports.registerUser = async ({email, password}) => {
    try {
        let user = await client.db("Task").collection("users").findOne({email: email}); //await User.findOne({ where: { email: email } });

        if (user) {
            return {
                message: "user already exist",
                status: 200,
                data: null
            }
        }
    
        const hash = await bcrypt.hash(password, 10);
        user = {
            email: email,
            password: hash,
            createdDate: Date.now(),
            lastModifiedDate: Date.now()
        };

        const newUser = await client.db("Task").collection("users").insertOne(user)//await User.create(user);
        return {
            message: "success",
            status: 200,
            data: {
                id: newUser.insertedId
            }
        }
    } catch (error) {
        console.log(error)
        return {
            message: "something went wrong",
            status: 200,
            data: null
        }
    }   
}

module.exports.signInUser = async ({email, password}) => {
    try {
        let user = await User.findOne({ where: { email: email } });

        if (!user) {
            return {
                message: "invalid email or password",
                status: 200,
                data: null
            }
        }
    
        const result = await bcrypt.compare(password, user.password);

        if(!result){
            return {
                message: "invalid email or password",
                status: 200,
                data: null
            }
        }

        const token = jwt.sign({email: user.email},"myverylongsecretprivatekey",{expiresIn: '1h'});

        return {
            message: "success",
            status: 200,
            data: {
                token: token
            }
        }
    } catch (error) {
        console.log(error)
        return {
            message: "something went wrong",
            status: 500,
            data: null
        }
    }   
}