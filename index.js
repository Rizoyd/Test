var searchInsert = function (nums, target) {
  let result = 0;
  if (nums[nums.length - 1] < target) {
    result = nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result = i;
    }
    if (nums[i] < target && target < nums[i + 1]) {
      result = i + 1;
    }
  }
  return result;
};

nums = [1, 3];

console.log(searchInsert(nums, 2));
