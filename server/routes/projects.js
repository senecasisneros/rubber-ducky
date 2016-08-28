'use strict';

const express = require('express');
const router = express.Router();

const Project = require('../models/project');

router.get('/:id', (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if(err || !project) {
      return res.status(400).send(err || "Project not found");
    }
    res.send(project)
  })
})
// router.route('/')
// .get((req, res) => {
//   Project.find({}, (err, projects) => {
//     res.status(err ? 400 : 200).send(err || projects);
//   })
// })


.post('/', (req, res) => {
  Project.create(req.body, (err, newProject) => {
    res.status(err ? 400 : 200).send(err || newProject);
  });
});

// router.get('/addproject', User.authMiddleware, (req, res) => {
//   res.send(req.user);
// });



// router.put('/:projectId/addUser/:userId', (req, res) => {
//   Project.findById(req.params.projectId, (err, project) => {
//     if(err || !project) {
//       return res.status(400).send(err || "Project not found");
//     }
//
//     let userId = req.params.userId;
//     project.user = userId;
//     project.save((err, savedProject) => {
//       return res.status(400).send(err || savedProject);
//     })
//   })
// })


router.route('/:id')
.get((req, res) => {
  Project.findById(req.params.id, (err, project) => {
    res.status(err ? 400 : 200).send(err || project);
  });
})
.delete((req, res) => {
  Project.findByIdAndRemove(req.params.id, err => {
    res.status(err ? 400 : 200).send(err);
  })
})
.put((req, res) => {
  Project.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, project) => {
    if(err) {
      return res.status(400).send(err);
    }
    Project.find({}, (err, projects) => {
      res.status(err ? 400 : 200).send(err || projects);
    });
  });
})

module.exports = router;
