/**
 * 顺序搜索
 * 时间复杂度：O(n)
 */
Array.prototype.squentialSearch = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) {
      return i;
    }
  }
  return -1;
};

// 功能测试
const arr = [1, 2, 3, 4, 5];
console.log(arr.squentialSearch(2));
