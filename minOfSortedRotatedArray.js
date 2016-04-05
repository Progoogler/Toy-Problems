/*
* Find the minimum element in a sorted array that is rotated at some 
* unknown point. This can be achieved in O(log n) time using Binary Search.
*/

"use strict";
const findMin = (array, start = 0, end = array.length-1) => {

  if (start === end) return array[start];

  let mid = end + Math.floor((start - end) / 2);

  if (mid < end && array[mid+1] < array[mid]) {
  	return array[mid+1];
  }

  if (mid > start && array[mid] < array[mid-1]) {
  	return array[mid];
  }
  
  if (array[start] > array[mid]) {
  	return findMin(array, start, mid-1);
  } else {
  	return findMin(array, mid+1, end);
  }

  return -1;
};

findMin([5, 6, 7, 1, 2, 3, 4]);