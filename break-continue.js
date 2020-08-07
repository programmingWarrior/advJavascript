// const nums = [4,5,6,7,8,89];
// for(let i = 0; i<nums.length; i++){
    
//     if(nums[i] > 6){
//         break;
//     }
//     console.log(nums[i]);
// }

const nums = [4,-5,6,-7,8,-89];
for(let i = 0; i<nums.length; i++){
    
    if(nums[i] < 0){
        continue;
    }
    console.log(nums[i]);
}

// continue = skip the value of the array
// break = break the loop if condition apply.