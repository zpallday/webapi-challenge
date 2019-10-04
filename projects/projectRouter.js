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
        res.status(500).json({error: err})
    })
})

router.put('/:id', validateProjectID, validateProject, (req,res) => {
    const id = req.params.id
    const project = req.body;
    projectDatebase.update(id, project)
    .then(results => {
        res.status(200).json(results)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

router.post('/', validateProject, (req,res) => {
    const project = req.body;
    projectDatebase.insert(project)
    .then(results => {
        res.status(200).json(results)
    })
    .catch(error => {
        res.status(500).json({err: error})
    })
})

function validateProjectID (req,res,next) {
    const id =req.params.id
    projectDatebase.get(id)
    .then(results => {
        if(results) {
            next()
    } else {
        res.status(404).json({message: "The specified Project doesn't exist"})
    }
})
.catch(error => {
    res.status(500).json({error: "error"})
})
}

function validateProject(req, res, next) {
    const project = req.body;
    console.log(project)
    if(!project.name) {
        res.status(400).json({message: "Name require"})
    } else if(!project.description) {
        res.status(400).json({message: " Description require"})
    } else if(!project) {
        res.status(400).json({message: "Invaild project details"})

    } else {
        next()
    }
}

module.exports = router;