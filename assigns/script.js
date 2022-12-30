function divideArray(nums){


  var even=[];

  var odd=[];

  for(var i=0;i<nums.length;i++){

    if (nums[i]%2===0)

        even.push(nums[i]);

    else

        odd.push(nums[i])

  }

  console.log("Even numbers:")

  if (even.length===0){

      console.log("None");

  }

  else{
	  even.sortArray();
      for(i=0;i<even.length;i++){

          console.log(even[i]);

      }

  }

  console.log("Odd numbers:")
  

  if (odd.length === 0){

      console.log("None");

  }

  else{
	  odd.sortArray();
      for(i=0;i<odd.length;i++){

          console.log(odd[i]);

      }

  }

  return 0;

}

var nums = [2,9,7,4,1,5];

divideArray(nums);