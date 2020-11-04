---
title: golang面试题(二)
---

### 1. web服务器 helloworld

``` go
http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "hello world")
})
http.ListenAndServe("0.0.0.0:8000", nil)
```

### 2. 反转链表

``` go
func reverseList(head *ListNode) *ListNode {
    var pre *ListNode = nil
    for head!=nil {
        next := head.Next   // 先存下下一个节点，不然一会就没了
        head.Next = pre     // 当前节点指向上一个节点
        pre = head          
        head = next
    }
    return pre
}
```

### 3. 二分查找

``` go
func BinaryFind(nums []int, target int) int {
	left, right := 0, len(nums)-1
	for left <= right {
		mid := (left + right) / 2
		if nums[mid] == target {
			return mid
		} else if nums[mid] > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return -1
}
```

### 4. 斐波那契

``` go
func fib(n int) int {
	if n < 1 {return 0}
	if n == 1 {return 1}
	return fib(n - 1) + fib(n - 2)
}
```

### 5. 单例模式

``` go
type singleton struct {}

var ins *singleton
var mu sync.Mutex

func GetIns() *singleton {
	if ins == nil {
		mu.Lock()
		defer mu.Unlock()
		if ins == nil {
			ins = &singleton{}
		}
	}
	return ins
}
```

### 6. 二叉树翻转

``` go
func invertTree(root *TreeNode) *TreeNode {
    // 递归终止条件
    if root == nil {
        return nil
    }

    // 递归过程
    root.Left, root.Right = root.Right, root.Left
    root.Left = invertTree(root.Left)
    root.Right = invertTree(root.Right)

    return root
}
```

### 7. 控制goroutine的并发数量

``` go
func RestrictParallel(restrict int, fns ...func()) func() {
	var channel = make(chan struct{}, restrict)
	return func() {
		var wg sync.WaitGroup
		for _, fn := range fns {
			wg.Add(1)
			go func(fn func()) {
				defer wg.Done()
				channel <- struct{}{}
				fn()
				<-channel
			}(fn)
		}
		wg.Wait()
		close(channel)
	}
}
```

### LRU

``` go
type kv struct {
	k int
	v int
}

type LRUCache struct {
	capacity int
	data map[int]*list.Element
	hits *list.List
}

func Constructor(capacity int) LRUCache {
	return LRUCache{
		capacity: capacity,
		data:     make(map[int]*list.Element),
		hits:     list.New(),
	}
}

func (c *LRUCache) Get(key int) int {
	if el, ok := c.data[key]; ok {
		c.hits.MoveToFront(el)
		return el.Value.(kv).v
	}
	return -1
}

func (c *LRUCache) Put(key int, value int) {
	if el, ok := c.data[key]; ok {
		el.Value = kv{k: key, v: value}
		c.hits.MoveToFront(el)
		return
	}

	if c.hits.Len() == c.capacity {
		last := c.hits.Back()
		delete(c.data, last.Value.(kv).k)
		c.hits.Remove(last)
	}

	c.data[key] = c.hits.PushFront(kv{k: key, v: value})
}
```

### 队列(queue)

``` go
type IQueue interface{
	Enqueue(interface{})
	Dequeue() *interface{}
	Front() *interface{}
	IsEmpty() bool
	Size() int
}

type Queue struct {
	items	[]interface{}
	lock 	sync.RWMutex
}

func (q *Queue) New() *Queue {
	q.items = []interface{}{}
	return q
}

func (q *Queue) Enqueue(v interface{}) {
	q.lock.Lock()
	defer q.lock.Unlock()
	q.items = append(q.items, v)
}

func (q *Queue) Dequeue() *interface{} {
	q.lock.Lock()
	defer q.lock.Unlock()
	item := q.items[0]
	q.items = q.items[1:len(q.items)]
	return &item
}

func (q *Queue) Front() *interface{} {
	q.lock.RLock()
	defer q.lock.RUnlock()
	item := q.items[0]
	return &item
}

func (q *Queue) IsEmpty() bool {
	return len(q.items) == 0
}

func (q *Queue) Size() int {
	return len(q.items)
}
```

### 堆栈(stack)

``` go
type IStack interface{
	Push(interface{})
	Pop() *interface{}
}

type Stack struct {
	items	[]interface{}
	lock	sync.RWMutex
}

func (s *Stack) New() *Stack {
	s.items = []interface{}{}
	return s
}

func (s *Stack) Push(v interface{}) {
	s.lock.Lock()
	defer s.lock.Unlock()
	s.items = append(s.items, v)
}

func (s *Stack) Pop() *interface{} {
	s.lock.Lock()
	defer s.lock.Unlock()
	item := s.items[len(s.items)-1]
	s.items = s.items[0:len(s.items)-1]
	return &item
}
```
