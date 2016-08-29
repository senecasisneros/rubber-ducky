'use strict';

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true,  },
  notes: { type: String },
  createdAt: { type: Date, required: true, default: Date.now }
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
