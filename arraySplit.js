// split = divide;
const nums = [2,3,4,5,6,7];
// const divide = nums.slice(3,7);
// console.log(divide);
const remove = nums.splice(3,3,33,444);
console.log(remove);
console.log(nums);
const join = nums.join(" and ");
console.log(join);