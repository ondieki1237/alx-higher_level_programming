#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    new = {k: v for k, v in a_dictionary.items() if v == value}
    for key in new:
        a_dictionary.pop(key)
    return a_dictionary
