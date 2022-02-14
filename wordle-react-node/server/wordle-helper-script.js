const fs = require("fs");
const path = require("path");

module.exports = {
    findValidWords: function (query) {
        let greenLetters = query.greenLetters.split(",");
        let yellowLetters = query.yellowLetters;

        // TODO: derive the grey letters from a list of previous guesses
        // i.e. if they are not in the green or yellow they are disallowed
        let greyLetters = query.greyLetters;


        console.log(`Got request for: ${JSON.stringify(query)}`);
        
        // TODO: probably do some error checking of our query object here.
        // This could also be done inside of the 

        let data = fs.readFileSync(
            path.resolve("five-letter-words.txt"),
            { encoding: "utf8", flag: "r"}
        );

        let words = data.split("\n");

        words = filterFixedLetters(words, greenLetters);
        words = filterContainingLetters(words, yellowLetters);
        words = filterDisallowedLetters(words, greyLetters);

        return words[0]
    }
}

var filterFixedLetters = function (wordList, greenLetters) {
    for (let i = 0; i < 5; i++) {
        if (greenLetters[i].length === 1) {
            wordList = wordList.filter(word => word[i] === greenLetters[i]);
        }
    }

    return wordList;
}

var filterContainingLetters = function (wordList, yellowLetters) {
    for (let char of yellowLetters) {
        wordList = wordList.filter(word => word.includes(char));
    }

    return wordList
}

var filterDisallowedLetters = function (wordList, greyLetters) {
    for (let char of greyLetters) {
        wordList = wordList.filter(word => !word.includes(char));
    }

    return wordList
}
