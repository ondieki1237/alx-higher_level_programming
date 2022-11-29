#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
n = ['last digit of', 'is', 'and is 0', 'and is greater than 5','and is less than 6 and not 0']
m = number % 10 if number >= 0 else(abs(number) % 10) * -1
print(n[0], number, n[1], m, n[2] if m == 0 else n[3] if m > 5 else n[4])
#prints the lat digit of number
#let n be the value of to be checked