const User = require('../models/user');
const Car = require('../models/car');

module.exports = {
/**
    index: function(){
        User.find({}, function(err, users){

        });

        User.find({})
        .then(function(users){
            console.log(users);
        })
        .catch(function(err){
           console.log(err) 
        });

    },
    index: async function(){
        const users = await User.find({});
        res.json(users);
    },
*/
    index: async (req, res, next) => {
        try{
            const users = await User.find({});
            //throw new Error('dammy error');
            res.status(200).json(users);
        } catch(e){
            console.log(e);
        }
    },

    newUser: async (req, res, next) => {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(200).json(user);
    },

    getUser: async (req, res, next) => {
        const {userID} = req.params;
        const user = await User.findById(userID);
        res.status(200).json(user);
    },

    // PUT method
    replaceUser: async (req, res, next) => {
        const {userID} = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userID, newUser);
        res.status(200).json({success: true});
    },

    // PATCH method
    updateUser: async (req,res,next) => {
        const {userID} = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userID, newUser);
        res.status(200).json({success: true});
    },

    deleteUser: async (req, res, next) => {
        const {userID} = req.params;
        await User.findByIdAndRemove(userID);
        // Falta buscar los carros y eliminarlos tambíen
        res.status(200).json({success: true});
    },

    getUserCars: async (req, res, next) =>{
        const {userID} = req.params;
        const user = await User.findById(userID).populate('Cars');
        res.status(200).json(user);
    },

    newUserCar: async (req, res, next) => {
        const {userID} = req.params;
        const newCar = new Car(req.body);
        const user = await User.findById(userID);
        newCar.seller = user;
        await newCar.save();
        user.cars.push(newCar);
        await user.save();
        res.status(200).json(newCar);
    },

    sendEmail: async (req, res, next) => {
        /** 
        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
          to: 'carolinarpulidog@gmail.com', // Change to your recipient
          from: 'carolinarpulidog@gmail.com', // Change to your verified sender
          subject: 'Sending with SendGrid is Fun',
          text: 'and easy to do anywhere, even with Node.js',
          html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        sgMail
          .send(msg)
          .then(() => {
            console.log('Email sent')
          })
          .catch((error) => {
            console.error(error)
          })
        */
        res.status(200).json({success: true});
    }
};