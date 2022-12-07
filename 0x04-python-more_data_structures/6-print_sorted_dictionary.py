#!/usr/bin/python3
def print_sorted_dictionary(a_dictionary):
    for akey in sorted([key for key in my_dict]):
        print("{}: {}".format(akey, my_dict[akey]))
