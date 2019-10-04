const express = require("express");

const ActionDataBase = require("../data/helpers/actionModel");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  ActionDataDase.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log(err);
      res .status(500).json({ error: "There was an error fetching these actions." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  ActionDataDase.get(id)
  .then(action => {
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ error: "No action with this ID exists." });
    }
  });
});

router.post("/", (req, res) => {
  const action = req.body;
  ActionDataBase.insert(action)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was a problem posting this action." });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { project_id, description, notes } = req.body;
  ActionData.get(id)
  .then(action => {
    if (action) {
      ActionData.update(id, { project_id, description, notes })
        .then(updated => {
          res.status(200).json(updated);
        })
        .catch(err => {
          console.log(err);
          res
            .status(500)
            .json({ error: "There was an error editing this action." });
        });
    } else {
      res.status(404).json({ error: "No action with this ID exists." });
    }
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  ActionData.get(id)
  .then(action => {
    if (action) {
      ActionData.remove(id)
        .then(removed => {
          res.status(200).json(removed);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: "There was an error deleting this action." });
        });
    } else {
      res.status(404).json({ error: "No action with this ID exists." });
    }
  });
});

module.exports = router;
