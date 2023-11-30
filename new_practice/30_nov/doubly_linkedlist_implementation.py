class Node:
	def __init__(self, data):
		self.data = data
		self.next = None
		self.prev = None

class LinkedList:
	def __init__(self, element):
		node = Node(element)
		self.head = node
		self.tail = node
		self.length = 1
	def append(self, element):
		node = Node(element)
		self.tail.next = node
		node.prev = self.tail
		self.tail = node
		self.length += 1
	def prepend(self, element):
		node = Node(element)
		node.next = self.head
		self.head.prev = node
		self.head = node
		self.length += 1
	def print_like_list(self):
		array = []
		element = self.head
		while(element is not None):
			array.append(element.data)
			element = element.next
		print(array, self.head.data, self.tail.data, self.length)
	def insert(self, index, element):
		if index == 0:
			self.append(element)
			return None
		elif index == self.length - 1:
			self.prepend(element)
			return None
		elif index < 0 or index >= self.length:
			raise Exception("Insert Index out of range")
			return None
		node = Node(element)
		prev_node = self.get_previous_node(index)
		temp = prev_node.next
		prev_node.next = node
		node.prev = prev_node
		node.next = temp
		temp.prev = node
		self.length += 1
		return None

	def get_previous_node(self, index):
		counter = 0
		node = self.head
		while(counter < index - 1):
			node = node.next
			counter += 1
		return node

	def remove(self, index):
		if index < 0 or index >= self.length:
			raise Exception("Remove Index out of range")
			return None
		if index == 0:
			next_node = self.head.next
			if (next_node is not None):
				next_node.prev = None
				self.head = next_node
				return None
		prev_node = self.get_previous_node(index)
		curr_node = prev_node.next
		next_node = curr_node.next
		prev_node.next = next_node
		if(next_node is not None):
			next_node.prev = prev_node
		if index == self.length - 1:
			self.tail = prev_node
		self.length -= 1
		return None



my_list = LinkedList(2)
my_list.print_like_list()
my_list.append(3)
my_list.prepend(1)
my_list.print_like_list()
my_list.insert(1, 1200)
my_list.print_like_list()
my_list.remove(1)
my_list.print_like_list()
