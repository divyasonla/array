// const input=require("readline-sync")
// let n=input.questionInt("enter a size of array:")
// let arr=[];
// let i=0;
// while(i<n)
// {
// let t=input.questionInt("enter a element");
// arr[i]=t;
// i++;
// }console.log(arr);
// let k=input.questionInt("reverse:")
// let l=arr.length-1;
// while(l>=0)
// {
// console.log(arr[l]);
// l--;
// }


// Write a program to print all the numbers from the given array using a loop.
// L = {23, 45, 32, 25, 46,33, 71, 90}




// const input=require("readline-sync")
// let n=input.questionInt("enter the size of array:")
// let arr=[];
// let i=0;
// while(i<n){
//     let k =input.questionInt("enter a element:")
//     arr[i]=k;
//     arr.push(i);
//     i++;
// }console.log(arr)


// Write a program to create an array of natural numbers till 20 and print it.



// const input=require("readline-sync")
// let n=input.questionInt("enter the size of element:")
// let arr=[];
// let i=0;

// let j=0;
// while(i<n)
// {
// let k=input.questionInt("enter a element");
// arr[i]=k;
// i++;
// }
// console.log(arr)

// Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.



// const input=require("readline-sync")
// let n=input.questionInt("enter the size of element:")
// let arr=[];
// let i=0;

// let j=0;
// while(i<n)
// {
// let k=input.questionInt("enter a element");
// arr[i]=k;
// i++;
// }
// let l=input.questionInt("enter a excite no,::=");
// while (j<n) 
// {
    

// if(arr[j]==l)
// {
//     console.log("yes")
//     break;
// }

// else{
//     console.log("no");
//      j++;
// }
// }


// Write a program to print the sum of all the odd numbers and even numbers in the given array.
// Note: In the output, you should print odd numbers sum and even numbers sum in this order only.

// const input=require("readline-sync")
// let n =input.questionInt("enter the size of element:");
// let arr=[];
// let i=0;
// while(i<n){
//    let k =input.questionInt("enter a number") ;
//    arr[i]=k;
//    i++
// }
// console.log(arr);
// let j=0;
// s=0;
// s1=0;
// while(j<n){
//         if(arr[j]%2==0){
//             s=s+arr[j];
//             j++;
//         }
//         else{
//             s1=s1+arr[j]; 
//             j++
//         }
//     }console.log(s,s1)

// Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.



// const input=require("readline-sync")
// let n=input.questionInt("enter the size of array")
// let arr=[];
// let i=0;
// let c = 1;
// while(i<n){
// let k=input.questionInt("enter a number");
// arr[i]=k;
// i++;
// }
// i=0;
// while(i<n){
   
//     j=i+1;
//     while(j<n){
//         if
//         (arr[i]==arr[j]){
//             c=c+1;
//             r=j;
//         while(r<n-1){
//             arr[r]=arr[r+1];
//             r+=1;
//         }
//         n=n-1;
//     }
// j++;
// }
//   if(c>=1)  
//   {
  
//     console.log(arr[i])

//   } 
//     i++;
//     c=1;
// }    


      
// Write a program to take value N from the user and print the following pattern based on the user input.
// array = [2, 3, 5, 2, 1]
// >>
// >>>
// >>>>>
// >>
   
    

// const input=require("readline-sync")
// let n =input.questionInt("enter a element")
// let i=0;
// let j=1;
// let arr=[];
// while(i<n){
//     let k = input.questionInt("enter a number")
//     arr[i]=k;
//     i++;
// }
// console.log("ORG",arr);
// i=0;
// while(i<arr.length){
//     console.log("<".repeat(arr[i]));
//     i++;
// }

// const input=require("readline-sync")
// let n =input.questionInt("enter a size of array:")
// let arr=[];
// let i=0;
// while(i<n){
//     let t=input.questionInt("enter a elelment")
//     arr[i]=t;
//     i++
// }
// i=0;
// while(i<n){
//     j=i+1;
//     c=1;
//     while(j<n)
//     {
//       if  (arr[i]==arr[j])
//       {
//             c=c+1
//             let k=j;
//             while(k<n-1){
//                 arr[k]=arr[k+1];
//                   k++;
//             }
//             n=n-1;
            
//     }
//     c=c;
//     j++;
//     }
//     console.log(arr[i],"-",c)
//    i++;
// }
// ###frequency//Write a program to take N numbers from the user and print the frequency of every number.


// const input=require("readline-sync")
// let n=input.questionInt("enter a number")

// arr=[];
// let i=0;
// while(i<n){
//    let t=input.questionInt("enter a element") 
//    arr[i]=t;
//    i++;
// }
// i=0;
// while(i<n)
// {
//     j=i+1;
//     let c=1;
//     while(j<n)
//     {
//         if(arr[i]==arr[j])
//         {
//           c=c+1;
//           k=j;
//           while(k<n-1)
//           {
//             arr[k]=arr[k+1];
//             k++;
//           }
//              n=n-1;
             
//         }
//         c=c;
//         j++;
//     }
//     console.log(arr[i],"-",c)
// i++;
// }


// Write a program to take an unsorted array of size N that contains only non-negative integers, and find a contiguous subarray that adds to a given number S. In case of multiple subarrays, return the subarray which comes first on moving from left to right. Let us say the array is 3, 6, 7, 5, 10. And the value of S = 12. The output should be: 7, 5


// const input=require("readline-sync")
// let n =input.questionInt("enter a number")
// let i=0;
// arr=[];
// s=12;
// while (i<n)
// {
// t=input.questionInt("enter a element:-")
// arr[i]=t
    
//     i++;
// }
// i=0;
// while(i<n)
// {
//     j=i+1;
//     while(j<n)
//     {
//         while(arr[i]+arr[j]==s)
//         {
//             console.log(arr[i],arr[j]);
//             break;
//         }
//         j++;
//     }
//     i++;
// }

// [4,5,6,8,9]
// [2,2,2,2,2]

// const input =require("readline-sync")
// let n=input.questionInt("enter a number:--")
// i=0;
// arr=[];
// while(i<n)
// {
//     k=input.questionInt("enter a element:--")
//     arr[i]=k;
//     i++;
// }
//     i=0;
//    let c=input.questionInt("index");
//    while(i<n)
//   {
//     arr[i]=c;
//     i++;
//   }
//   console.log(arr)



/////////marge///////////////////////////////////////////////////////////////////////

// const input = require("readline-sync");

// let n = input.questionInt("Enter the length of array:");
// let m = input.questionInt("Enter the length of array:");


// let a = [];
// let b = [];
// let d=[]
// for(let i=0; i<n; i++)
// {
//     a[i] = input.questionInt(`enter the  aaray element :`);
// }

// for(let j=0; j<m; j++)
// {
//     b[j] = input.questionInt(`enter the secand aaray element : `);
// }
// let i=0;
// let j=0;
// let k=0;
// while(k<n+m)
// {
//     while(i<n)
//     {
//         while(j<m)
//         {
//             if(a[i]<b[j])
//             {
//                 console.log(a[i])
//                 i++;
//                 k++;
//             }
//             else
//             {
//                 console.log(b[j])
//                 j++;
//                 k++;
//             }
//         }
//     }
// }

//********************BUBBLE SORT********************//
// const input=require("readline-sync")
// let n=input.questionInt("enter a element:-")
// a=[];
// for(let i=0;i<n;i++)
// {
//    t=input.questionInt("enter a numbers in array:=")
//    a[i]=t;
   
// }
// for(let i=0;i<n-1;i++)
// {
//    for(let j=0;j<n-i-1;j++)
//    {
//     if(a[j]>a[j+1])
//     {
//       temp=a[j];
//       a[j]=a[j+1];
//       a[j+1]=temp;
//    }
// }
// }
// console.log(a)

//========================SELECTION SORT=================

/*const input=require("readline-sync")
// let n=input.questionInt("enter a number:")
a=[7,8,3,1,2];
for(let i=0;i<a.length-1;i++)
{
    small=i;
    
    for(let j=i+1;j<a.length;j++)
    {
      if(a[i]>a[j]){
        small=j;

      
      temp=a[small];
      a[small]=a[i];
      a[i]=temp;
    }
}
}console.log(a)*/

// In a certain hospital, the weights of newborn babies are recorded each month and then processed at the end of the month to determine the following:
// 1. Mean weight of the babies
// 2. maximum of the weights
// 3. Minimum the weights.
// Write a program to show how the weights can be stored as an array first and then processed to determine the desired outputs. Input n from the user where n is the number of babies born in a particular month.





// const input=require("readline-sync")
// let n=input.questionInt("enter a array size:-")
// a=[];
// for(let i=0;i<n;i++)
// {
//   k=input.questionInt("enter a element:-")
//   a[i]=k
// }
// console.log(a)
// for(i=0;i<n-1;i++)
// {

// for (let j=0;j<n-i-1;j++)
//  {
//   if(a[j]>a[j+1])
//   {
//      temp=a[j];
//      a[j]=a[j+1];
//      a[j+1]=temp;
     
//   }
// }
// }
// console.log("sorted",a)
// s=0
// for(i=0;i<n;i++)
// {
//  s+=a[i];
// }
// Mean=s/n;
// console.log("mean:",Mean)
// for(i=0;i<n-1;i++)
// {
//    if(n%2==0)
//    {
//        median= (a[n/2]+a[(n/2-1)])/2;
//    }
//    else
//    {
//     median =a [Math.floor((n)/2)];
//    }
// }console.log("median:",median)
// mode=3*median-2*Mean;
// console.log("mode:",mode)

// Write a program, take two sorted arrays of size m and n from the user as input and return the median of the two sorted arrays.


// const input=require("readline-sync")
// let n=input.questionInt("enter a number:")
// a=[];
// for(let i=0;i<n;i++){
//     k=input.questionInt("enter a element:")
//     a[i]=k
// }
// for(i=0;i<n-1;i++)
// {
//    if(n%2==0)
//    {
//        median= (a[n/2]+a[(n/2-1)])/2;
//    }
//    else
//    {
//     median =a [Math.floor((n)/2)];
//    }
// }console.log(median)


// // 

