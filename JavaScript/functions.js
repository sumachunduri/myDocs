    // const  interestRate = 0.3;
    //interestRate = 0.1;
    // console.log(interestRate);

    var person = {
        name: 'SumaChand',
        age: '24'
    };
    
    console.log(person);
    person.name = 'SumaChunduri';
    console.log(person);
    delete person.age;
    console.log(person);
    
    let selectedColor = ['red', 'blue', '2'];    
    selectedColor[3] = 'green';
    //console.log(selectedColor.length);

    function greet(name, lastName){
        console.log("Hello " + name + ' ' + lastName );
    }
    greet('Suma');

    function square(number){
        return number * number;
    }

    console.log(square(2));
    console.log();

    // let isApproved = true; //Boolean
    // let firstName = undefined;
    // let selectedColor = null; //explictly clear the value 

var mystring = "Jello World!!";
mystring[0] = "H"; // This will not work, gonna work in array;
console.log(mystring);

//Layered Arrays

var myArray = [["22", ,1], ["Suma", "Chunduri"]];
//myArray[0][2].push("Hello");
myArray.push([2, "Hello"]);
console.log(myArray);
//myArray.pop() // Deletes only the last element
myArray.shift();
console.log(myArray);
myArray.unshift(["22", ,1])

console.log(myArray);


var myGlobal = 10;

function fun1(){
     oopsGlobal = 11 ;
}

function fun2(){
    var output = "";
    console.log (output);
    if (typeof myGlobal != "undefined"){
        output+= "MyGlobal is: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output+= " oopsGlobal is: " + oopsGlobal;
    }
   // console.log(output);

}

fun1();
fun2();
//console.log(oopsGlobal);

var magic = () => new Date(); //arrow function
const myConcat = (arr1, arr2) =>  (arr1.concat(arr2));

//console.log(myConcat([1,2], [3,4,5]));

const INPUT = [2, 3, 7, 4 , 2];
const myFunction = (arr) => {
    const OUTPUT = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return OUTPUT;
}

//console.log (myFunction(INPUT));

const increment = (function(){
    return function increment(num , value = 1){
        return num + value;
    };
})();
//console.log(increment(5,2));
//console.log(increment(5));
 
const sum = (function(){
    return function sum(...args){   //spread operator unlimited args
        return args.reduce((a,b) => a + b , 0);
    }
})();
//console.log(sum());

const arr1 = [1 , 2, 3, 4]
var arr2;
var arr3;
(function(){
    arr3 = arr1;
    arr2 = [...arr1];
    arr1[0] = 10;
})();
//console.log(arr2);
//console.log(arr3);

const stats = {
    max: 1.9,
    min: 1,
    mode: 1.5
};

const half = (function() {
    return function half ({ max , min }){
        return (max + min) / 2.0 ;

    }
})();

//console.log(half(stats));
const createPerson = (name, age ) => ({ name ,age});
console.log(createPerson("suma", 25))

var myInput = [];
for (i = 0; i < 5 ; i++){
    myInput.push(i);
}
//console.log(myInput);



    var Lookup  = {
        alpha : "1",
        beta : "2",
        gamma : {
            wv : "200"
        }
    };
//console.log(Lookup.gamma.wv);

function check(checkProp){
    if(Lookup.hasOwnProperty(checkProp)){
         
        return "I have it";
    }
}


//console.log(check("alpha"));


//Manuplating Complex Objects  --- inside the array we have objects like[ { prop : val},{}]




