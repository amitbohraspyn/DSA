array = [1, 2, 3, 4, 2]
dictionary = {1: True, 2: True, 3: True, 4: True}

if 2 in array:
    print('Found in Array') #O(n)

if 2 in dictionary:
    print('Found in Dictionary') # O(1)


for index, i in enumerate(array):
    for index2 in range(index+1, len(array)):
         if i == array[index2]:
            print('found in O(n^2)', i)

dicty = {}
for index, i in enumerate(array):
    if i in dicty:
        print('found in O(n)', i)
        break
    dicty[i] = True

