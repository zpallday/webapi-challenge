const express = require('express');
const actionDatebase = require('../data/helpers/actionModel');
const router = express.Router();
router.use(express.json());

router.get('/:actionid', validateActionID, (req, res) => {
    const actionId = req.params.actionId;
    actionDatebase.get(actionId)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({err: error})
    })
})

router.post('/', validateActionProjectID, validateAction, (req, res) => {
    const action = req.body;
    actionDatebase.insert(action)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({err: error})
    })
})

router.put('/:action', validateActionID, validateAction, validateActionProjectID, ( req,res) => {
    const actionId = req.params.actionid;
    const action = req.body;
    actionDatebase.update(actionId, action)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({err: error})
    })
})

router.delete('/actionid', validateActionID, (req,res) => {
    const actionId = req.params.actionid;
    actionDatebase.remove(actionId)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

function validateActionID (req, res, next) {
    const actionId = req.params.actionid
    actionDatebase.get(actionId)
    .then(result => {
        if(result) {
            next();
        } else {
            res.status(404).json({ message: " The specifed action doesn't exist"})
        }
    })
    .catch(error => {
        res.status(500).json({err: error})
    })
}

function validateAction(req, res, next) {
    const action = req.body;
    console.log(action)
    if(!action.project_id) {
        res.status(400).json({message: " Project_Id requirded"})
    } else if(!action.notes) {
        res.status(400).json({message: " Notes required, add them"})
    } else if(!action.description) {
        res.status(400).json({message: "Description required"})

    } else {
        next()
    }
}

function validateActionProjectID (req, res, next) {
    const projectId = req.params.project_id
    projectsDatebase.get(projectId)
    .then(result => {
        if(result) {
            next();
        } else {
            res.status(404).json({ message: " The specifed actionPro doesn't exist"})
        }
    })
    .catch(error => {
        res.status(500).json({err: error})
    })
}

module.exports = router

