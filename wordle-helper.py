from array import array
import sys
import string

usage_str = """
Error - usage! Please use as described below.
e.g. `python wordle-helper.py ----- abc def`

Argument 1. A five character "regex" containing the positions of correctly placed characters
    - ----- means we know no correctly placed characters
    - -t--- means we know that "t" is the second character
Argument 2. A list of characters that are in the word but we don't know the position
    - This argument must only contain letters
    - If there are no characters we know are in the word, enter "-"
Argument 3. A list of characters that are not in the word
    - This argument must only contain letters
    - If there are no characters we know are not in the word, enter "-"
"""


def check_regex(regex): # returns a bool
    __allowed = set(string.ascii_lowercase + '-')
    return len(regex) == 5 and set(regex) <= __allowed


def check_allowed_dissallowed(allowed, disallowed): # returns a bool
    return (allowed.isalpha() or allowed == "-") and (disallowed.isalpha() or disallowed == "-")


def filter_fixed_chars(fixed_chars, word_list):
    for i in range(0,5):
        if fixed_chars[i] != "-":
            word_list = filter(lambda word: word[i] == fixed_chars[i], word_list)

    return word_list
    

def filter_allowed_chars(allowed_chars, word_list):
    if allowed_chars == "-":
        return word_list

    for i in range(0,len(allowed_chars)):
        word_list = filter(lambda word: allowed_chars[i] in word, word_list)

    return word_list


def filter_disallowed_chars(disallowed_chars, word_list):
    if disallowed_chars == "-":
        return word_list

    for i in range(0,len(disallowed_chars)):
        word_list = filter(lambda word: disallowed_chars[i] not in word, word_list)

    return word_list


def main():
    argv = list(map(str.lower, sys.argv))

    if len(argv) != 4:
        print(usage_str)
        print("Incorrect number of arguments!")
        sys.exit(1)

    if not check_regex(argv[1]):
        print(usage_str)
        print("Incorrect fixed characters argument!")
        sys.exit(1)

    if not check_allowed_dissallowed(argv[2], argv[3]):
        print(usage_str)
        print("Incorrect allowed or disallowed characters argument!")
        sys.exit(1)

    word_file = open("data/five-letter-words.txt", "r")
    word_list = word_file.read().splitlines()

    word_list = filter_fixed_chars(argv[1], word_list)
    word_list = filter_allowed_chars(argv[2], word_list)
    word_list = filter_disallowed_chars(argv[3], word_list)

    if len(word_list) != 0:
        print("The following words satisfy the criteria:")
        print("\n".join(word_list))
    else:
        print("Valid input, but no words with this combo!")
        print("Let me know if you solve this and I need to update the dictionary")


if __name__ == "__main__":
    main()