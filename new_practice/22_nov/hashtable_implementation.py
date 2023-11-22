class HashTable:
	def __init__(self, size):
		self.data = [None] * size
		self.keys = []
	def set(self, key, value):
		position = hash(key) % len(self.data)
		if (self.data[position] is None):
			self.data[position] = []
		self.data[position].append([key, value])
		self.keys.append(key)
	def get(self, key):
		position = hash(key) % len(self.data)
		if (self.data[position] is None):
			return None
		for item in self.data[position]:
			if item[0] == key:
				return item[1]
		return None
	def keys():
		return self.keys()


hashTable = HashTable(50)

hashTable.set('apple', 20)
value = hashTable.get('apple')

print('hashTable', value)