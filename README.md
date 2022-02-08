# Wordle Helper Script

This is a script to use when you're struggling with wordle and need some help.

### Instructions

The script is run with three arguments:
1. A five character "regex" containing the positions of correctly placed characters
    - ----- means we know no correctly placed characters
    - -t--- means we know that "t" is the second character
2. A list of characters that are in the word but we don't know the position
    - If there are no characters we know are in the word, enter "-"
3. A list of characters that are not in the word
    - If there are no characters we know are not in the word, enter "-"

An example of correct use is: 
`python wordle-helper.py ----- abc def`

### Output

This script simply outputs a list of words that satisfy the conditions that you have set. 
If there are no matches, it will tell you.

### Things to consider

In wordle we also know the positions in a word that a character is not in, for example A is in a word but not in the second position.
This information could be captured, but the difficulty here is finding an elegant way to pass this into the program.

The list of words in the dictionary that I use may contain words that are not in wordle's dictionary. Hopefully this doesn't cause any confusion!
