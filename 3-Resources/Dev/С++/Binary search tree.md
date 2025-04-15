---
tags:
  - CPP
---
## Trees

A tree is a structure where each node can have zero or more child nodes. For example, a tree might look like this:

![Algorithms and Data Structures for Beginners: Binary Search Tree 1](https://media.tproger.ru/uploads/2015/08/data_structures_022.jpg)

This tree represents the structure of a company. Nodes represent people or departments, and lines represent connections and relationships. A tree is the most efficient way to represent and store such information.

The tree in the image above is very simple. It only reflects the hierarchical relationship of categories but imposes no restrictions on its structure. The CEO might have one direct subordinate, several, or none. In the image, the sales department is to the left of the marketing department, but the order doesn't actually matter. The only restriction in a tree is that each node can have no more than one parent. The topmost node (the board of directors, in this case) has no parent. This node is called the "root."

Questions about trees are even asked during [Apple interviews](https://tproger.ru/translations/sobesedovanie-v-apple-top-30-voprosov-i-otvetov).

## Binary Search Tree

A binary search tree is similar to the tree in the example above but is built according to specific rules:

- Each node has no more than two children.
- Any value less than the node's value becomes the left child or a child of the left child.
- Any value greater than or equal to the node's value becomes the right child or a child of the right child.

Let's look at a tree built according to these rules:

![Algorithms and Data Structures for Beginners: Binary Search Tree 2](https://media.tproger.ru/uploads/2015/08/data_structures_023.jpg)

Notice how the specified constraints affect the tree's structure. Every value to the left of the root (8) is less than eight, and every value to the right is greater than or equal to the root. This rule applies to any node in the tree.

Given this, let's imagine how such a tree can be built. Since the tree is initially empty, the first value added—eight—becomes its root.

We don't know the exact order in which the remaining values were added, but we can imagine one possible path. Nodes are added using the `Add` method, which takes the value to be added.

```cpp
BinaryTree tree = new BinaryTree();
tree.Add(8);
tree.Add(4);
tree.Add(2);
tree.Add(3);
tree.Add(10);
tree.Add(6);
tree.Add(7);
```

Let's examine the first steps in detail.

First, 8 is added. This value becomes the root of the tree. Then, we add 4. Since 4 is less than 8, we place it as the left child, according to rule 2. Since the node with 8 has no left child, 4 becomes the only left child.

Next, we add 2. 2 is less than 8, so we move to the left. Since there is already a value to the left, we compare it with the value being inserted. 2 is less than 4, and since 4 has no left child, 2 becomes the left child of 4.

Then, we add 3. It goes to the left of 8 and 4. But since 3 is greater than 2, it becomes the right child of 2, according to rule 3.

The sequential comparison of the inserted value with potential parents continues until a place for insertion is found, and this repeats for each inserted value until the entire tree is built.

### BinaryTreeNode Class

The `BinaryTreeNode` class represents a single node in a binary tree. It contains references to the left and right subtrees (if a subtree doesn't exist, the reference is `null`), the node's data, and the `IComparable.CompareTo` method for comparing nodes. This is useful for determining which subtree the node should go into. As you can see, the `BinaryTreeNode` class is very simple:

```cpp
class BinaryTreeNode : IComparable
    where TNode : IComparable
{
    public BinaryTreeNode(TNode value)
    {
        Value = value;
    }
 
    public BinaryTreeNode Left { get; set; }
    public BinaryTreeNode Right { get; set; }
    public TNode Value { get; private set; }
 
    /// 
    /// Compares the current node with the given node.
    /// 
    /// Comparison is based on the Value field.
    /// The method returns 1 if the current node's value is greater than
    /// the value passed to the method, -1 if it is less, and 0 if they are equal.
    public int CompareTo(TNode other)
    {
        return Value.CompareTo(other);
    }
}
```

### BinaryTree Class

The `BinaryTree` class provides basic methods for manipulating data: inserting an element (`Add`), removing (`Remove`), the `Contains` method to check if a value exists in the tree, several methods for traversing the tree in different ways, the `Count` method, and `Clear`.

Additionally, the class has a reference to the root node of the tree and a field for the total number of nodes.

```cpp
public class BinaryTree : IEnumerable
    where T : IComparable
{
    private  BinaryTreeNode _head;
    private int _count;
 
    public void Add(T value)
    {
        throw new NotImplementedException();
    }
 
    public bool Contains(T value)
    {
        throw new NotImplementedException();
    }
 
    public bool Remove(T value)
    {
        throw new NotImplementedException();
    }
 
    public void PreOrderTraversal(Action action)
    {
        throw new NotImplementedException();
    }
 
    public void PostOrderTraversal(Action action)
    {
        throw new NotImplementedException();
    }
 
    public void InOrderTraversal(Action action)
    {
        throw new NotImplementedException();
    }
 
    public IEnumerator GetEnumerator()
    {
        throw new NotImplementedException();
    }
 
    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        throw new NotImplementedException();
    }
 
    public void Clear()
    {
        throw new NotImplementedException();
    }
 
    public int Count
    {
        get;
    }
}
```

### Add Method

- **Behavior:** Adds an element to the tree in the correct position.
- **Complexity:** O(log n) on average; O(n) in the worst case.

Adding a node is not particularly complicated. It becomes even simpler if solved recursively. There are only two cases to consider:

1. The tree is empty.
2. The tree is not empty.

If the tree is empty, we simply create a new node and add it to the tree. In the second case, we compare the given value with the value in the node, starting from the root. If the value to be added is less than the value of the current node, we repeat the same procedure for the left subtree. Otherwise, we do the same for the right subtree.

```cpp
public void Add(T value)
{
//Case 1: If the tree is empty, simply create the root node.
    if (_head == null)
    {
        _head = new BinaryTreeNode(value);
    }
//Case 2: The tree is not empty => 
//find the correct place to insert.
    else
    {
        AddTo(_head, value);
    }
 
    _count++;
}
 
//Recursive insertion.
private void AddTo(BinaryTreeNode node, T value)
{
//Case 1: The value to be inserted is less than the node's value.
    if (value.CompareTo(node.Value) < 0)
    {
//If there is no left subtree, add the value as the left child.
        if (node.Left == null)
        {
            node.Left = new BinaryTreeNode(value);
        }
        else
        {
//Otherwise, repeat for the left subtree.
            AddTo(node.Left, value);
        }
    }
//Case 2: The value to be inserted is greater than or equal to the node's value.
    else
    {
//If there is no right subtree, add the value as the right child.
        if (node.Right == null)
        {
            node.Right = new BinaryTreeNode(value);
        }
        else
        {
//Otherwise, repeat for the right subtree.
            AddTo(node.Right, value);
        }
    }
}
```

### Remove Method

- **Behavior:** Removes the first node with the given value.
- **Complexity:** O(log n) on average; O(n) in the worst case.

Removing a node from a tree is one of those operations that seem simple but actually hide many pitfalls.

In general, the algorithm for removing an element looks like this:

- Find the node to be removed.
- Remove it.

The first step is simple enough. We will look at finding the node in the `Contains` method below. After finding the node to be removed, we have three possible cases.

Case 1: The node to be removed has no right child.

![Algorithms and Data Structures for Beginners: Binary Search Tree 3](https://media.tproger.ru/uploads/2015/08/data_structures_024.jpg)

In this case, we simply move the left child (if it exists) to the place of the removed node. The tree will then look like this:

![Algorithms and Data Structures for Beginners: Binary Search Tree 4](https://media.tproger.ru/uploads/2015/08/data_structures_025.jpg)

Case 2: The node to be removed has only a right child, which in turn has no left child.

![Algorithms and Data Structures for Beginners: Binary Search Tree 5](https://media.tproger.ru/uploads/2015/08/data_structures_026.jpg)

In this case, we move the right child of the node to be removed (6) to its place. After removal, the tree will look like this:

![Algorithms and Data Structures for Beginners: Binary Search Tree 6](https://media.tproger.ru/uploads/2015/08/data_structures_027.jpg)

Case 3: The node to be removed has a right child, which in turn has a left child.

![Algorithms and Data Structures for Beginners: Binary Search Tree 7](https://media.tproger.ru/uploads/2015/08/data_structures_028.jpg)

In this case, the leftmost child of the right child of the node to be removed takes its place.

Let's see why this is the case. We know the following about the subtree starting from the node to be removed:

- All values to the right of it are greater than or equal to the node's value.
- The smallest value in the right subtree is the leftmost.

We need to place a node with a value less than or equal to any node to the right of it. To do this, we need to find the smallest value in the right subtree. Therefore, we take the leftmost node of the right subtree.

After removing the node, the tree will look like this:

![Algorithms and Data Structures for Beginners: Binary Search Tree 8](https://media.tproger.ru/uploads/2015/08/data_structures_029.jpg)

Now that we know how to remove nodes, let's look at the code that implements this algorithm.

Note that the `FindWithParent` method (see the `Contains` method) returns the found node and its parent because we need to replace the left or right child of the parent of the node to be removed.

We could avoid this by storing a reference to the parent in each node, but this would increase memory usage and the complexity of all algorithms, even though the parent reference is only used in one place.

```cpp
public bool Remove(T value)
{
    BinaryTreeNode current, parent;
 
    // Find the node to be removed.
    current = FindWithParent(value, out parent);
 
    if (current == null)
    {
        return false;
    }
 
    _count--;
 
//Case 1: If there is no right child,
//the left child takes the place of the removed node.
    if (current.Right == null)
    {
        if (parent == null)
        {
            _head = current.Left;
        }
        else
        {
            int result = parent.CompareTo(current.Value);
            if (result > 0)
            {
//If the parent's value is greater than the current node's value,
//the left child of the current node becomes the left child of the parent.
                parent.Left = current.Left;
            }
            else if (result < 0) {
//If the parent's value is less than the current node's value,
//the left child of the current node becomes the right child of the parent.
               parent.Right = current.Left;
             }
         }
    }
//Case 2: If the right child has no left child,
//it takes the place of the removed node.
            else if (current.Right.Left == null) {
               current.Right.Left = current.Left;
               if (parent == null) {
                 _head = current.Right;
               } else {
                 int result = parent.CompareTo(current.Value);
                 if (result > 0)
            {
//If the parent's value is greater than the current node's value,
//the right child of the current node becomes the left child of the parent.
                parent.Left = current.Right;
            }
            else if (result < 0) {
//If the parent's value is less than the current node's value,
//the right child of the current node becomes the right child of the parent.
               parent.Right = current.Right;
            }
       }
   }
//Case 3: If the right child has a left child,
//the leftmost child of the right subtree replaces the removed node.
            else {
//Find the leftmost node.
               BinaryTreeNode leftmost = current.Right.Left;
               BinaryTreeNode leftmostParent = current.Right;
               while (leftmost.Left != null) {
                  leftmostParent = leftmost; leftmost = leftmost.Left;
               }
//The left subtree of the parent becomes the right subtree
//of the leftmost node.
               leftmostParent.Left = leftmost.Right;
//The left and right children of the current node become the left
//and right children of the leftmost node.
               Left = current.Left;
               leftmost.Right = current.Right;
               if (parent == null) {
                  _head = leftmost;
               } else {
                  int result = parent.CompareTo(current.Value);
                  if (result > 0)
            {
//If the parent's value is greater than the current node's value,
//the leftmost node becomes the left child of the parent.
                parent.Left = leftmost;
            }
            else if (result < 0)
            {
//If the parent's value is less than the current node's value,
//the leftmost node becomes the right child of the parent.
                parent.Right = leftmost;
            }
        }
    }
 
    return true;
}
```

### Contains Method

- **Behavior:** Returns `true` if the value is contained in the tree. Otherwise, returns `false`.
- **Complexity:** O(log n) on average; O(n) in the worst case.

The `Contains` method is implemented using the `FindWithParent` method, which traverses the tree, performing the following steps at each node:

1. If the current node is `null`, return `null`.
2. If the current node's value equals the target value, return the current node.
3. If the target value is less than the current node's value, set the left child as the current node and go to step 1.
4. Otherwise, set the right child as the current node and go to step 1.

Since `Contains` returns a boolean value, it is determined by comparing the result of `FindWithParent` with `null`. If `FindWithParent` returns a non-null node, `Contains` returns `true`.

The `FindWithParent` method is also used in the `Remove` method.

```cpp
public bool Contains(T value)
{
//Node search is performed by another method.
    BinaryTreeNode parent;
    return FindWithParent(value, out parent) != null;
}
  
//Finds and returns the first node with the given value.
//If the value is not found, returns null.
//Also returns the parent of the found node (or null)
//for use in the Remove method.
private BinaryTreeNode FindWithParent(T value,
                            out BinaryTreeNode parent)
{
//Try to find the value in the tree.
    BinaryTreeNode current = _head;
    parent = null;
 
//Until we find it...
    while (current != null)
    {
        int result = current.CompareTo(value);
 
        if (result > 0)
        {
//If the target value is less, go left.
            parent = current;
            current = current.Left;
        }
        else if (result < 0)
        {
//If the target value is greater, go right.
            parent = current;
            current = current.Right;
        }
        else
        {
//If equal, stop.
            break;
        }
    }
 
    return current;
}
```

### Count Method

- **Behavior:** Returns the number of nodes in the tree or 0 if the tree is empty.
- **Complexity:** O(1)

This field is incremented by the `Add` method and decremented by the `Remove` method.

```cpp
public int Count
{
    get
    {
        return _count;
    }
}
```

### Clear Method

- **Behavior:** Removes all nodes from the tree.
- **Complexity:** O(1)

```cpp
public void Clear()
{
    _head = null;
    _count = 0;
}
```

## Tree Traversal

Tree traversals are a family of algorithms that allow processing each node in a specific order. For all traversal algorithms below, the following tree will be used as an example:

![Algorithms and Data Structures for Beginners: Binary Search Tree 9](https://media.tproger.ru/uploads/2015/08/data_structures_030.jpg)

The traversal methods in the examples will take an `Action<T>` parameter, which defines the action to be performed on each node.

Additionally, besides describing the behavior and algorithmic complexity of the method, the order of values obtained during traversal will be indicated.

### Preorder Traversal

- **Behavior:** Traverses the tree in preorder, performing the specified action on each node.
- **Complexity:** O(n)
- **Traversal Order:** 4, 2, 1, 3, 5, 7, 6, 8

In preorder traversal, the algorithm retrieves the value of the current node before moving to the left subtree and then to the right subtree. Starting from the root, we first get the value 4. Then, the left child and its children are traversed in the same way, followed by the right child and all its children.

Preorder traversal is typically used to copy a tree while preserving its structure.

```cpp
public void PreOrderTraversal(Action action)
{
    PreOrderTraversal(action, _head);
}
 
private void **PreOrderTraversal**(Action action, BinaryTreeNode node)
{
    if (node != null)
    {
        action(node.Value);
        PreOrderTraversal(action, node.Left);
        PreOrderTraversal(action, node.Right);
    }
}
```

### Postorder Traversal

- **Behavior:** Traverses the tree in postorder, performing the specified action on each node.
- **Complexity:** O(n)
- **Traversal Order:** 1, 3, 2, 6, 8, 7, 5, 4

In postorder traversal, we visit the left subtree, the right subtree, and then, after traversing all children, move to the node itself.

Postorder traversal is often used to completely delete a tree, as in some programming languages, it is necessary to explicitly remove all nodes from memory, or to delete a subtree. Since the root is processed last, this reduces the work required to remove nodes.

```cpp
public void PostOrderTraversal(Action action)
{
    PostOrderTraversal(action, _head);
}
 
private void PostOrderTraversal(Action action, BinaryTreeNode node)
{
    if (node != null)
    {
        PostOrderTraversal(action, node.Left);
        PostOrderTraversal(action, node.Right);
        action(node.Value);
    }
}
```

### Inorder Traversal

- **Behavior:** Traverses the tree in inorder, performing the specified action on each node.
- **Complexity:** O(n)
- **Traversal Order:** 1, 2, 3, 4, 5, 6, 7, 8

Inorder traversal is used when we need to traverse the tree in an order corresponding to the node values. In the example above, the tree contains numeric values, so we traverse them from smallest to largest. That is, from the left subtrees to the right through the root.

The example below shows two ways to perform inorder traversal. The first is recursive. It performs the specified action on each node. The second uses a stack and returns an iterator for direct iteration.

```cpp
Public void InOrderTraversal(Action action)
{
    InOrderTraversal(action, _head);
}
 
private void InOrderTraversal(Action action, BinaryTreeNode node)
{
    if (node != null)
    {
        InOrderTraversal(action, node.Left);
 
        action(node.Value);
 
        InOrderTraversal(action, node.Right);
    }
}
 
public IEnumerator InOrderTraversal()
{
// This is a non-recursive algorithm.
// It uses a stack to avoid recursion.
    if (_head != null)
    {
// Stack to store skipped nodes.
        Stack stack = new Stack();
 
        BinaryTreeNode current = _head;

// When we eliminate recursion, we need to
// remember which direction we should move.
        bool goLeftNext = true;
 
// Push the root onto the stack.
        stack.Push(current);
 
        while (stack.Count > 0)
        {
// If we are going left...
            if (goLeftNext)
            {
// Push everything except the leftmost node onto the stack.
// The leftmost node will be returned using yield.
                while (current.Left != null)
                {
                    stack.Push(current);
                    current = current.Left;
                }
            }
 
// Inorder: left->yield->right.
            yield return current.Value;
 
// If we can go right, go.
            if (current.Right != null)
            {
                current = current.Right;
 
// After going right once,
// we must go left again.
                goLeftNext = true;
            }
            else
            {
// If we cannot go right, we must pop the parent node
// from the stack, process it, and go to its right child.
                current = stack.Pop();
                goLeftNext = false;
            }
        }
    }
}
```

### GetEnumerator Method

- **Behavior:** Returns an iterator for inorder traversal of the tree.
- **Complexity:** Getting the iterator — O(1). Traversing the tree — O(n).

```cpp
public IEnumerator GetEnumerator()
{
    return InOrderTraversal();
}
 
System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
{
    return GetEnumerator();
}
```