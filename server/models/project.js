'use strict';

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true,  },
  createdAt: { type: Date, required: true, default: Date.now },
  body: { type: String, required: true }
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
