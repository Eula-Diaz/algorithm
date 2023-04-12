/**
 * 二分搜索
 * 时间复杂度：O(logN)
 */
Array.prototype.binarySearch = function (item) {
  let low = 0,
    high = this.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let element = this[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

// 功能测试
const arr = [1, 2, 3, 4, 5];
console.log(arr.binarySearch(2));
