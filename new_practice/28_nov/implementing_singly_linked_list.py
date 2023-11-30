class Node:
	def __init__(self, data):
		self.data = data
		self.next = None
class LinkedList:
	def __init__(self, head_data):
		node = Node(head_data)
		self.head = node
		self.tail = node
		self.length = 1
	def append(self, data):
		node = Node(data)
		self.tail.next = node
		self.tail = node
		self.length += 1
	def prepend(self, data):
		node = Node(data)
		node.next = self.head
		self.head = node
		self.length += 1

	def insert(self, data, index):
		if index == 0:
			self.prepend(data)
		if index == self.length -1:
			self.append(data)
		if index < 0 or index >= self.length:
			raise Exception("Incorrect Index range")
			return None
		node = Node(data)
		pre_node = self.getPreviousNode(index)
		temp = pre_node.next
		pre_node.next = node
		node.next = temp
		self.length += 1

	def getPreviousNode(self, index):
		node = self.head
		counter = 0
		while (node is not None):
			if (counter == index -1):
				return node
			node = node.next
			counter += 1


	def remove(self, index):
		if index < 0 or index >= self.length:
			raise Exception("Index out of range for function remove")
			return None
		if index == 0:
			temp = self.head
			self.head = self.head.next
			self.length -= 1
			return temp
		pre_node = self.getPreviousNode(index)
		next_node = None
		if index + 1 != self.length:
			next_node = self.getPreviousNode(index + 2)
		curr_node = self.getPreviousNode(index +1)
		pre_node.next = next_node
		if index == self.length - 1:
			self.tail = pre_node
		self.length -= 1
		return curr_node

	def reverse(self):
	    if self.length == 1:
	        return None
	    first = self.head
	    second = self.head.next
	    head = self.head
	    tail = self.tail
	    while(second is not None):
	        temp = second.next
	        second.next = first
	        first.next = temp
	        first = second
	        second = temp
	    self.tail = head
	    self.head = tail
	    return None

	def print_like_list(self):
		array = []
		node = self.head
		while node is not None:
			array.append(node.data)
			node = node.next
		print(array, self.head.data, self.tail.data, self.length)


my_list = LinkedList(5)
my_list.append(20)
my_list.print_like_list()
my_list.prepend(-2)
my_list.print_like_list()
my_list.insert(1200, 1)
my_list.print_like_list()
my_list.remove(3)
my_list.print_like_list()
my_list.remove(1)
my_list.print_like_list()
my_list.reverse()
my_list.print_like_list()
