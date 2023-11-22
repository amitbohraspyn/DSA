def first_repeating_character(string):
	stored_char = {}
	first_index =  None
	for index, value in enumerate(string):
		string_index = stored_char.get(value)
		if string_index is not None:
		    if first_index is None:
		        first_index = string_index
		    else:
			    if string_index > first_index:
				    first_index = string_index
		    continue
		stored_char[value] = index
	if first_index == None:
	    return first_index
	return string[first_index]

rep_char = first_repeating_character('leetcode')
print(rep_char)
