const User = require('../models/user');

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
        res.status(200).json({success: true});
    }
};