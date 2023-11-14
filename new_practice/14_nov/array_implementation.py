class MyArray:
	def __init__(self):
		self.data = {}
		self.length = 0
	def append(self, item):
		self.data[self.length] = item
		self.length += 1
	def pop(self):
		if self.length == 0:
			return "List is Empty"
		item = self.data[self.length -1]
		self.data[self.length -1] = None
		del self.data[self.length -1]
		self.length -= 1
		return item
	def insert(self, index, item):
		if index < 0 or index > self.length:
			return "Index out of Range"
		for i in range(self.length -1, index +1, -1):
			self.data[i + 1] = self.data[i]
		self.data[index] = item
		self.length +=1
	def remove(self, index):
		if index < 0 or index >= self.length:
			return "Index out of Range"
		for i in range(index, self.length -1, 1):
			self.data[i] = self.data[i+1]
		self.data[self.length -1] = None
		del self.data[self.length -1]
		self.length -= 1
	def copy(self):
		new_array = MyArray()
		for i in self.data.keys():
			new_array.append(self.data[i])
		return new_array
	def count(self, item):
		counter = 0
		for i in range(0, self.length,1):
			if self.data[i] == item:
				counter += 1
		return counter
	def extend(self, new_list):
		for i in new_list:
			self.append(i)
	def min(self):
		min  = self.data[0]
		for i in range(1, self.length):
			if self.data[i] < min:
				min = self.data[i]
		return min
	def max(self):
		max = self.data[0]
		for i in range(1, self.length):
			if self.data[i] > max:
				max = self.data[i]
		return max
	def get_index(self, index):
		if index < 0 or index >= self.length:
			return "Index out of bound"
		return self.data[index]
	def index(self, item, start=None, end=None):
		if start == None:
			start = 0
		if end == None:
			end = self.length
		if start < 0 or end > self.length:
			return "Start or End out of length of Array"
		for i in range(start, end):
			if self.data[i] == item:
				return i
	def __str__(self):
	    string = ",".join([f"{key}: {value}" for key,value in vars(self).items()])
	    return f'MyArray {string}'


myArray = MyArray()
myArray.append('First')
myArray.append('Second')
myArray.append('Third')
myArray.append('Fourth')
myArray.append('Fifth')
print('my_array', myArray)
returned_element = myArray.pop()
print('returned_element', returned_element, myArray)
myArray.insert(1, 'new_fifth')
print('my_array', myArray)
myArray.remove(10)
myArray.remove(0)
print('my_array', myArray)
newArray = myArray.copy()
print('new_array', newArray)
newArray.extend(['First', 'Second', 'Second', 'Second'])
print('new_array', newArray)
count = newArray.count('First')
print('count', count)
# min = newArray.min()
# max = newArray.max()
# print('min', min, 'max', max)
element = newArray.get_index(0)
print('0th element', element)
index = newArray.index('Second')
print('index of Second', index)



'''
Learning:
1. Forgetting "self"
2. No comments added
3. Repeated multiple code (it can be converted into function)
4. Didn't check just submitted
5. Loop reverse (-1) forget
6. Loop starting and ending condition bit tricky
7. Forgot syntax "delete"
8. Used min/max for strings (silly mistake)
9. No error handling like assertion/error messages used string
10. Incorrect style of choosing a method, start with basic and common to use in future
'''