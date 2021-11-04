const { Router } = require('express');
const router = Router();

// routes
router.get('/', (req, res) =>{
    const data = {
        "name": "Carolina",
        "lastname": "Pulido"
    };
    res.json(data);
});

module.exports = router;