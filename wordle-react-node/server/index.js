const express = require("express");

// The namespace where our wordle methods live
const wordle = require("./wordle-helper-script");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    let words = wordle.findValidWords(req.query)
    res.json({ message: `${words}` });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});