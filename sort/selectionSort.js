/**
 * 选择排序
 * 时间复杂度：O(n^2)
 */
Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let indexMin = i;
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) [this[i], this[indexMin]] = [this[indexMin], this[i]];
  }
};

// 功能测试
const arr = [5, 4, 3, 2, 1];
arr.selectionSort();
console.log(arr);
