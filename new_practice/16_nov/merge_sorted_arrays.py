def merge_sorted_arrays(array1, array2):
	if type(array1) != list or type(array2) != list:
		raise Exception("Arguments should be of type 'List'")
		return
	new_array = []
	i = 0
	j = 0
	while(i < len(array1) or j < len(array2)):
		if i < len(array1):
			element_one = array1[i]
		else:
			element_one = 1000000000000000000
		if j < len(array2):
			element_two = array2[j]
		else:
			element_two = 1000000000000000000
		if (element_one < element_two):
			new_array.append(element_one)
			i += 1
		else:
			new_array.append(element_two)
			j += 1
	return new_array

result = merge_sorted_arrays([1,1, 4,7, 9], [1, 2, 3, 6, 9])
print(result)