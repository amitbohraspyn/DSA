def reverseString(string):
    if (type(string) != str):
        raise Exception('Wrong Input provided')
    reversed_string = ""
    for i in range(len(string) -1, -1, -1):
        reversed_string += string[i]
    return reversed_string

rev = reverseString('1')
print(rev)


'''
Learning:

1. Loop reversing end point incorrect it has to be '-1' by used 1
basically interchanged (-1, -(len(string) + 1), 1) to (len(string)-1, -1, -1)
2. Incorrect exception raising
3. Using mix casing (camel and snake)
4. Irregular indentation
5. Copying code from google doc has different types of inverted commas
'''