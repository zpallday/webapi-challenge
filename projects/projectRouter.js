const express = require('express');
const projectDatebase = require('../data/helpers/projectModel');
const router = express.Router();
router.use(express.json());

router.get('/:id', validateProjectID, (req,res) => {
    const id = req.params.id;
    projectDatebase.get(id)
    .then(results => {
        res.status(200).json(results)
    })
    .catch(err => {
        res.status(500).json({error: "error"})
    })
})

router.put('/:id', validateProjectID, ValiditeProject, (req,res) => {
    const id = req.params.id
    const project = req.body;
    projectDatebase.update(id, project)
    .then(results => {
        res.status(200).json(results)
    })
    .catch(err => {
        res.status(500).json({error: 'errors'})
    })
})
