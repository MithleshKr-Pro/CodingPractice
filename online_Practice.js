// // let mode="dark";
// // let color;
// // if (mode="dark"){
// //     color="black"
// // }else if(mode="pink"){
// //     color="pink"
// // }else if(mode="yellow"){
// //     color="yellow"
// // }else{
// //     color="white"
// // }
// // console.log("Mode is",color);
// // // if(mode==="dark") console.log(mode)

// // let age=15;
// // (age>=18)?console.log("adult"):console.log("not-adult");
// bhbnk


// let input=prompt("Enter a No.");
// // if (input%5===0){
// //     console.log(input,"is multiple of 5");
// // }else{
// //     console.log(input,"is not multiple of 5");
// // }
// let marks_Obtained=prompt("Enter Your Marks");
// let grades;
// if (marks_Obtained>=80 && marks_Obtained<=100){
//     grades="A"; 
// }else if(marks_Obtained>=70 && marks_Obtained<=89){
//     grades="B";
// }else if(marks_Obtained>=60 && marks_Obtained<=69){
//     grades="C";
// }else if (marks_Obtained>=50 && marks_Obtained<=59){
//     grades= "D"
// }else if(marks_Obtained>=0 && marks_Obtained<=49){
//     grades="F"
// }
// console.log("Grade Obtained =",grades); 


// let marks=[85,97,44,37,76,60];
// //arrays used for   same type of data
// console.log(marks);
// console.log(marks.length);
// let heroes=['ironman','thor','hulk','ironman'];
// console.log(heroes);
// console.log(heroes[0]);
// console.log(marks[0]);
// console.log(heroes[3]);
// console.log(heroes[1]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// console.log(heroes[0]);
// marks[0]=45;
// console.log(marks);
// for (let idx=0;idx<marks.length;idx++){
//     console.log(marks[idx]);
// }
// for (let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }
// //for of
// for (let hero of heroes){
//     console.log(hero);
// }
// let cities=['Delhi','Pune','Mumbai','Hyderabad','Chennai','Kolkata'];
// for (let city of cities){
//     console.log(city.toUpperCase());
// }
// let marks2=[85,97,44,37,76,60];
// let Sum=0;
// for (let i=0;i<marks2.length;i++){
//     Sum=Sum+marks2[i];
// }
// console.log("Sum of Marks= ",Sum);
// console.log('Average Marks= ',Sum/marks2.length);
// //for of Q 1
// let sum=0;
// for (let val of marks2){
//     sum+=val;
// }
// console.log("Sum Of Marks=",sum)
// console.log("Avg Marks=",sum/marks2.length);
// let Avg=sum/marks2.length;
// console.log(`AVg Marks = ${Avg}`);
// //Q No-2
// let price=[250,645,300,900,50];
// let i=0;
// for(let val of price){
//     price[i]=price[i]-price[i]/10;
//     //console.log(`value after offer=${price[i]}`);
//     console.log(price[i]);
//     i++;
// }
// console.log(price);

// Solving Q no2 by For loop
// let price=[250,645,300,900,50];
// for (let i=0;i<price.length;i++){
//     price[i]=price[i]-price[i]/10;
//     console.log('Price after offer= ',price[i]);

// }
// console.log('Price Array after offer', price);

// let veggies=["potato","brinjal","ladyfinger","tomato"];
// console.log(veggies);
// //push
// console.log(veggies.push("onion"),veggies);
// veggies.push("chips","apple","mango");
// console.log(veggies);
// let k=veggies.pop();
// console.log(veggies);
// console.log('deleted',k);
// console.log(veggies.toString());
// let marvel_heroes=["thor","spiderman","ironman"];
// let dc_heroes=["superman",'batman'];
// let indian_Heroes=['Krish','Shaktiman'];
// let heroes=marvel_heroes.concat(dc_heroes,indian_Heroes);
// console.log(heroes);
// marvel_heroes.shift('antman')
// console.log(marvel_heroes);

// let marvelHeroes=['thor','spiderman','ironman','antman','Dr Strange'];
// console.log(marvelHeroes.slice(1,4));
// console.log(marvelHeroes.splice(2,0,'marvel'));
// console.log(marvelHeroes);
// console.log(marvelHeroes.splice(2,2));
// console.log(marvelHeroes);
// marvelHeroes.splice(2)
// console.log(marvelHeroes)

// //Practice Q1
// let companies=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
// console.log('Companies : ',companies.toString());
// companies.shift();
// console.log('Companies : ',companies.toString());
// companies.splice(1,1,'Ola');
// console.log('Companies : ',companies.toString());
// companies.push('Amazon');
// console.log('Companies : ',companies.toString());

// Chapter 5 Functions

// function myFunction(msg){
//     console.log("Welcome to Apna College!! ");
//     console.log("learning JS");
//     console.log(msg)
// }
// myFunction("I love Myself");
// myFunction(67);
 
// //function for sum of 2 no.
// function sumOfNo(a,b){
//     console.log('Sum =',a+b);
// }
// sumOfNo(3,476);
// myFunction();

// //sum Function
// function sum(a,b){
//     return(a+b)
// }
// //arrowFunction
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }
// arrowSum(9,5)
// function mul(a,b){
//     return(a*b)
// }
// //arrowFunction modernJS
// const arrowMul=(a,b)=>{
//     console.log(a*b);
// }
// arrowMul(9,5);

// //practiceQ1
// function noOfVowels(string){
//     //let string=prompt("enter a word : ");
//     let vowels=('a','e','i','o','u');
//     let index=0;
//     let vowelno=0;
//     for (let index of string){
//         for(let indx of vowels){
//             if(vowels[indx]=!string[index])
//              {
//              vowelno++;
//              }
//             }
//         }
//         index++;
//         console.log(vowelno);
//     }
// noOfVowels('apple');

// function countVowels(str){
//     let count=0;
//     for (let i of str){
//         if (i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
//             count++;
//         }
//     }
//     return(count);
// }
// //arrowFunction for same
// let countingVowels=(str)=>{
//     let count=0;
//     for (let i of str){
//         if (i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
//             count++;
//         }
//     }
//     return(count);
// }

// let cities=["Pune","Mumbai","Delhi","Patna"];
// cities.forEach((val)=>{
//     console.log(val.toUpperCase());
// },2,cities)
// cities.forEach(function printVal(val){
//     console.log(val);
// })
// cities.forEach((val,id,cities)=>{
//     console.log(val.toUpperCase(),id,cities);
// })

// //practiceQ 2
// noArray=[67,52,39];
// noArray.forEach((no,idx,noArray)=>{
//     console.log(idx,'Square=',no*no,noArray);
// })
// //other method to pass callback
// let calcSquare=(no,idx,noArray)=>{
//     console.log(idx,'Square=',no*no,noArray);
// }
// noArray.forEach(calcSquare);
// let newNoArray=noArray.map((no)=>{
//     console.log(no*no);
//     return (no*no);
// })
// console.log(noArray,newNoArray);

// let num=[1,2,3,4,5,6,7,8,9,10];
// let evenNum=num.filter((val)=>{
//     return(val%2==0);
// })
// console.log(evenNum);
// //reduce Method For Array
//   //findAverage
// let arr=[5,6,2,1,3];
// const output=arr.reduce((prev,curr)=>{
//     return (prev+curr);
// })
// console.log(output/arr.length);
// //findGreatestVal
// let newOutput=arr.reduce((prev,curr)=>{
//     if(prev>=curr){
//         return prev;
//     }
//     else{
//         return curr;
//     }
// })
// console.log(newOutput);
// let newOutput1=arr.reduce((prev,curr)=>{
//     return prev<=curr ? prev:curr;
// })
// console.log(newOutput1);
// //practiceQ3
// studMarks=[87,93,64,99,86];
// let above90=studMarks.filter((val)=>{
//     return val>90 ;
// })
// console.log("Students Scoring 90+ = ",above90)
// //practiceQ4
// let n=[prompt("Enter a No. :")]
// let newArray=[]
// for(let i=1;i<=n;i++){
//     newArray[i-1]=i;
// }
// console.log(newArray);
// practiceQ5
// let sumArray=newArray.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log('Sum = ',sumArray);
// //practicQ6
// let prodArray=newArray.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log('factorial =',prodArray);
// let btn=document.querySelectorAll("button");
// console.log(btn);
// console.dir(btn);
// //document.body.style.backgroundColor="green";
// console.dir(document.body.childNodes[3]);
// console.dir(document.getElementsByClassName("signupbar"));
// console.dir(window.document.getElementsByTagName("section"));
// let elements=document.querySelector("a");

// console.dir(elements);
// console.dir(elements.tagName);
// console.dir(elements.innerText);
// console.dir(elements.innerHTML);
// console.dir(document.querySelector("section").innerText);
// console.dir(document.querySelector("section").innerHTML);
// console.dir(document.querySelector("section").textContent);
// console.dir(document.body.children);
// elements.innerText="ABCDE";


// let elem1=document.querySelector("div");
// let id=elem1.setAttribute("class","class1")
// console.log(elem1);
// elem1.style.backgroundColor="dodgerblue";
// let id2=elem1.getAttribute("class");
// console.log(id2);
// let body=document.querySelector("body");
// body.style.backgroundColor="dodgerblue"
// body.style.color="white"
// body.style.fontSize="40px";
// body.style.visibility=""
// let newBtn=document.createElement("button");
// console.log(newBtn);
// newBtn.innerText="click me"
// elem1.append(newBtn);
// let elem2= document.querySelector("p")
// elem2.append(newBtn);
// elem2.before(newBtn);
// let newHeading=document.createElement("h5");
// newHeading.innerText="Practice Hour";
// body.prepend(newHeading);
// newHeading.remove();

//PracticeQ1
// let newBtn=document.createElement("button");
// let body=document.querySelector("body");
// newBtn.innerText="click me";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";
// body.prepend(newBtn);

//**PracticeQ2**
// let para1=document.querySelector("p");
// console.dir(para1.classList);
// //para1.setAttribute("class","parah"); //this overwites the previous class
// para1.classList.add("parah")

// newBtn.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }

// let newBtnFn=(e)=>{
//     console.log("Button was Clicked");
//     console.dir(e);
// }

// newBtn.addEventListener("click",newBtnFn)
// newBtn.addEventListener("click",(evt)=>{
//     console.log("Button was Clicked");
// })
// newBtn.removeEventListener("click",newBtnFn);

// //practiceQ3**
// let btn2=document.createElement("button");
// btn2.innerText="Change Modes"
// body.append(btn2);
// btn2.classList.add("newClass");
// let currMode="light";
// let modeFn=()=>{
//     if (currMode==="light"){
//         currMode="dark";
//         body.style.backgroundColor="black";
//         body.style.color="white";
//     }
//     else{
//         currMode="light";
//         body.style.backgroundColor="white";
//         body.style.color="black";
//         }
// }
// btn2.onclick=modeFn;

// let btn3=document.createElement("button");
// btn3.innerText="Changing Modes";
// body.append(btn3);
// btn3.style.margin="20px";
// btn3.style.color="red";
// let modeChg=()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// }
// btn3.onclick=modeChg;

// TIC TAC TOE starts
let h1=document.querySelector("h1");
h1.style.color="dodgerblue"
h1.style.fontFamily="sans-serif"
let Row1=document.querySelectorAll(".child1");
let Row2=document.querySelectorAll(".child2");
let Row3=document.querySelectorAll(".child3");
let resetBtn=document.querySelector("#reset");
let btns=document.querySelectorAll(".btn");
let Btn=document.getElementsByTagName("button");
let parent=document.querySelector(".parent_div");
let winnerMsg=document.createElement("div");
let resetGame=document.querySelector("#reset");
let newGame=document.querySelector(".newGame")
// console.dir(Btn);
// let btnText="O";
// let gameLogic=()=>{
//     if(btnText==="O"){
//         btnText="X";
//         this.innerText="X";
//         console.log("X");
//     }else{
//         btnText="O";
//         this.innerText="O";
//         console.log("O");
//     }
// }
// btns.forEach(btn=>{
//     btn.addEventListener("click",gameLogic);
// })

let turn0=true;//playerX,//player0
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
btns.forEach((bt)=>{
    bt.addEventListener("click",()=>{
        console.log("Button was Clicked");
        if(turn0){
            bt.innerText="O";
            bt.style.color="black";
            turn0=false;
        }else{
            bt.innerText="X";
            bt.style.color="red";
            turn0=true;
        }
        bt.disabled="true";
        let winner=checkWinner();
        if (!winner){
            const alldisabled=Array.from(btns).every(btn => btn.disabled);
            if(alldisabled){  
                parent.prepend(winnerMsg);        
                winnerMsg.classList.add("winnerMssg");
                winnerMsg.innerText="NoBody Wins Play Again!!";
                newGame.classList.add("hide");
                newGame.classList.remove("newGame");
            }
        }
    })
})

const disableBtn=()=>{
    for (Button of btns){
        Button.disabled="true";
    }
}
const resetButn=()=>{
    for (button of btns){ //needs to understand more
        button.disabled=false;
        button.innerText="";
        winnerMsg.classList.remove("winnerMssg");
        winnerMsg.innerText="";
        newGame.classList.add("newGame");

    }
}

const checkWinner=()=>{
    for (pattern of winPatterns){
        let pos1Val=btns[pattern[0]].innerText;
        let pos2Val=btns[pattern[1]].innerText;
        let pos3Val=btns[pattern[2]].innerText;
        if(pos1Val!=""&& pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner-Winner Chicken Dinner !!","Player",pos1Val);
                parent.prepend(winnerMsg);
                // winnerMsg.setAttribute("class",".winnerMssg");
                winnerMsg.classList.add("winnerMssg");
                winnerMsg.innerText="WINNER-WINNER Player " + pos1Val + ", Chicken Dinner !!";
                newGame.classList.add("hide");
                newGame.classList.remove("newGame");
                disableBtn();
                return true;
            }
        }
    } 
    return false;
}

const gameDraw=()=>{
    
    if (checkWinner()===false){
        winnerMsg.classList.add("winnerMssg");
        winnerMsg.innerText="draw Play Again!!";
        newGame.classList.add("hide");
        newGame.classList.remove("newGame");
    }
}

resetGame.addEventListener("click",resetButn);
newGame.addEventListener("click",resetButn);


// TIC TAC TOE ends