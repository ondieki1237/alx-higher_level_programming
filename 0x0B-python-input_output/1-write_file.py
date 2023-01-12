#!/usr/bin/python3
def write_file(filename="", text=""):
    """returns the number of strings in a file"""
    lines = 0
    with open(filename, "w", encoding="utf-8") as f:
        f.write(text)
    return len(text)
