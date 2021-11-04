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
        const user = await User.findById(userId);
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => {
        const {userID} = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userIde, newUser);
        res.status(200).json({success: true});
    },

    updateUser: async (req,res,next) => {
        const {userID} = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userIde, newUser);
        res.status(200).json({success: true});
    }
};