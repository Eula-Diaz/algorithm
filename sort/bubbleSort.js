/**
 * 冒泡排序
 * 时间复杂度：O(n^2)
 */
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }
};

// 功能测试
const arr = [5, 4, 3, 2, 1];
arr.bubbleSort();
console.log(arr);
