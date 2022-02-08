def main():
    input_file = open("words.txt", "r")
    lines = input_file.readlines()
    input_file.close()
    
    # account for the newline character at the end.
    filtered_lines = list(filter(lambda line: len(line) == 6, lines))

    output_file = open("five-letter-words.txt", "w")
    output_file.writelines(filtered_lines)
    output_file.close()


if __name__ == "__main__":
    main()