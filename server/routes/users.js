'use strict';
const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/profile', User.authMiddleware, (req, res) => {
  res.send(req.user);
});


router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(err || !user) {
      return res.status(400).send(err || "User not found");
    }
    res.send(user)
  }).populate('project')
})

router.put('/:userId/addProject/:projectId', (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if(err || !user) {
      return res.status(400).send(err || "User not found");
    }

    let projectId = req.params.projectId;

    user.project = projectId;

    user.save((err, savedUser) => {
      return res.status(err ? 400 : 200).send(err || savedUser);
    })
  })
})
router.post('/register', (req, res) => {
  User.register(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.post('/login', (req, res) => {
  User.authenticate(req.body, (err, token) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.cookie('authtoken', token).send();
    }
  });
});


router.post('/logout', (req, res) => {
  res.clearCookie('authtoken').send();
});

router.put('/profile', User.authMiddleware, (req, res) => {
  User.findByIdAndUpdate(req.user._id, {$set: req.body}, {new: true}, (err, user) => {
    req.user.save(err => {
      res.status(err ? 400: 200).send(err);
    })
  }).populate('user')
})





// router.get('/', (req, res) => {
//   User.find((err, users) => {
//     res.send(users);
//   })
// })

module.exports = router;
