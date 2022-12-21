
const que=[22,33,44,112,43,23,54,66,55,51,61,76,53];
//odd
const  res=que.filter((ele)=>ele%2!==0);
console.log(res)


const maap=que.reduce((acc,ele)=>acc+ele)
console.log(maap)


//prime number

const prim=que.filter((ele)=>{

    for(let i=2;i<ele;i++){
        if (ele % i===0) return false;

    }
    return ele !==1;

})
console.log(prim)

//palindrome
const pal=["madams","raja","kamak",443,"ragah",68786];

const valu=()=>{

    let myval=pal.toString().split("").reverse().join("");
let myrev=pal.toString()
    for(let i=0;i<pal.length;i++){
if(myval==myrev){
    console.log("palindrome")
}else{
    console.log("Not a palindrome")
}
    }
  console.log(myval)

}
valu()



//anonymous function



const fun=function(){
    for (var i=0;i<que.length;i++){
        if (que[i]%2!==0){
            console.log(que[i])
        }
    }
}

fun()
