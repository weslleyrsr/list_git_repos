const express = require('express');
const router = express.Router();
const gitHelper = require("../helpers/git")

router.get('/loadRepositories', async function (req, res) {
    res.send(
        await gitHelper.getUserRepositories(req.query.user)
    );
});

module.exports = router;