const router = require("express").Router();

router.get("/usertest", (req,res) => {
  res.send("usertest is sucessfull")
});

router.post("/userposttest", (req,res) => {
    const username = req.body.username;
    res.send("ypur username is " + username);
})

module.exports = router;
