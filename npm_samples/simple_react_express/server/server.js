const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({"users": ["user0", "user1", "user2", "user3", "user4"]});
})

app.listen(5000, () => {console.log("server listening on port 5000")})