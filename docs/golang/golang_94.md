---
title: 排序算法举例
---

![](/golang/03_排序算法时空复杂度.jpeg)

## 冒泡排序

``` go
func BubbleSort(arr []int) {
	end := len(arr)
	for i := 0; i < end - 1; i++ {
		for j := 0; j < end - i - 1; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
}
```

## 快速排序

``` go
func quicksort(a []int) []int {
	if len(a) < 2 {
		return a
	}

	left, right := 0, len(a)-1

	for i, _ := range a {
		if a[i] < a[right] {
			a[left], a[i] = a[i], a[left]
			left++
		}
	}

	a[left], a[right] = a[right], a[left]

	quicksort(a[:left])
	quicksort(a[left+1:])

	return a
}
```

## 选择排序

``` go
func SelectionSort(arr []int) {
    var min int = 0
    var tmp int = 0

    for i := 0; i < len(arr); i++ {
        min = i
        for j := i + 1; j < len(arr); j++ {
            if arr[j] < arr[min] {
                min = j
            }
        }

        tmp = arr[i]
        arr[i] = arr[min]
        arr[min] = tmp
    }
}
```

## 插入排序

``` go
func InsertionSort(arr []int) {
	var i, j int
	for i = 1; i < len(arr); i++ {
		for j = 0; j < i; j++ {
			if arr[j] > arr[i] {
				arr[i], arr[j] = arr[j], arr[i]
			}
		}
	}
}
```

## 归并排序

``` go
func mergeSort(arr []int) []int {
   if len(arr) < 2 {
      return arr
   }
   i := len(arr) / 2
   left := mergeSort(arr[:i])
   right := mergeSort(arr[i:])
   result := merge(left, right)
   return result
}

func merge(left, right []int) []int {
   result := make([]int, 0)
   m, n := 0, 0
   l, r := len(left), len(right)
   for m < l && n < r {
      if left[m] > right[n] {
         result = append(result, right[n])
         n++
         continue
      }
      result = append(result, left[m])
      m++
   }
   result = append(result, right[n:]...)
   result = append(result, left[m:]...)
   return result
}
```
