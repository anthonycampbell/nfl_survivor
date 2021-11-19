const express = require('express');
const router = express.Router()
const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})
router.post('/', async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email, given_name, family_name, name, sub } = ticket.getPayload();
    const userObject = {
        email: email,
        givenName: given_name,
        familyName: family_name,
        name: name,
        userId: sub
    }
    const newUser = new User(userObject)
    newUser.save()
        .then(() => {
            res.json({
                message: "Created account successfully",
                user: userObject
            })
        })
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})
module.exports = router 
