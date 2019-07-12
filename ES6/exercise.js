//Exercise 1
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function print(array){
    array.forEach(ele=>{
        if(ele%3 == 0){
            console.log(ele);
        }
    });
}
print(array);

//Exercise 2
const meta = {
    title: 'Destructuring Assignment',
    authors: [ { firstname: 'Craig', lastname: 'Buckler' } ],
    publisher: {
    name: 'SitePoint',
    url: 'http://www.sitepoint.com/'
    }
}; 

let {title:doc,authors:[{firstname:name}=author],publisher:{url:web}} = meta;
console.log(doc, name, web);

//Exercise 3
const books = [
    { title: 'Full Stack JavaScript', author: 'Colin Ihrig and Adam Bretz', url: 'http://www.sitepoint.com/store/full-stack-javascript/' },
    { title: 'JavaScript: Novice to Ninja', author: 'Darren Jones', url: 'http://www.sitepoint.com/store/leaern-javascript/' },
    { title: 'Jump Start CSS', author: 'Louis Lazaris', url: 'http://www.sitepoint.com/store/jump-start-css/' },
];


books.forEach(({title, author, url})=>{
    console.log(title, author, url);
});

//Exercise 4
var prices = [1.1, 2.32, 3.68, 4.9];

function NewTaxCalculator(taxRate){
    return function pricesAfterTax(prices){
        return prices.map(price=>price+price*taxRate);
    };
}

console.log(NewTaxCalculator(0.07)(prices));

//Exercise 5
let mapperFns = (number, index)=>{
    return {
        isEven:number%2==0,
        number,
        squared:number*number
    }
}
console.log([1,2,3].map(mapperFns));

//Exercise 6

const first = 'Mohan';
const last = 'Singh';
const person = new Object();
person.first = first;
person.last = last;
person.favouriteColor = 'blue';
person.address = new Object();
person.address.city = 'Gurgaon';
person.address.street = 'Sector 21';
person.address.state = 'HR';


personLiteral = {
    first,
    last,
    favouriteColor:'blue',
    address:{
        city:'Gurgaon',
        street:'Sector 21',
        state:'HR'
    }
}

//Exercise 7
function request({url, method}){
    console.log(url);
    console.log(method);
}

request({url: 'http://www.google.com', method: 'GET' });


//Exercise 8
const person = {
    first: 'Mohan',
    last: 'Singh',
    address: {
        lines: ['Sector 47', 'Chestor Lane', 'Apt 23'],
        city: 'Gurgaon',
        state: 'Haryana'
    }
}
let { address:{lines:[,redValue]} } = person;
console.log(redValue);

//Exercise 9
let text = '';
let nodes = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
for ( let node of nodes ) {
    let textContent = node.textContent.split(" ")[0];
    if( textContent && textContent.trim().length){
        text += textContent.trim()+ ' ';
    }
};
console.log( text ); 



//Exercise 10
function exceptFirst([,...rest]){
    return rest;
}

console.log(exceptFirst([1,2,3,4,5,6]));

//Excercise 11
function wrap(str){
    return [str];
}
function unwrap([str]){
    return str;
}
wrap("package");

unwrap(["package"]);

//Excercise 12

var date = '2025-09-26';

function parseDate(dateStr){
    let [year, month, date] = dateStr.split("-");
    return {year, month, date};
}
console.log(parseDate(date));


//Excercise 13
let x = { A: ['t', 'e', 's', 't']};
let { A:[,,value]} = x;

console.log(value);


//Excercise 14

function drawChart({
    chartType=0,
    bullColor='green',
    bearColor='red',
    days=30,
    ...rest
    }={} ) {
    // do not implement the function body
    return {chartType,bullColor,bearColor,days,...rest};
}; 

drawChart({
    chartType : 0,
    bullColor : 'green',
    bearColor : 'red',
    days : 30
});

//Excercise 15
let allEles = [1,2,3,4,5,6,7,8];

console.log(allEles.slice(Math.max(allEles.length - 4, 1)));



//Excercise 16

function maxCommon(str1, str2, head1, head2, highest){
    if(!str1[head1]){
        return highest;
    }
    else if(!str2[head2]){
        return highest;
    }
    if(str1[head1] == str2[head2]){
        return maxCommon(str1, str2, head1+ 1, head2 + 1, highest+1);
    }
    else {
        return Math.max(maxCommon(str1, str2, head1+ 1, head2,0), maxCommon(str1, str2, head1, head2+1,0))
    }
}

maxCommon( '523', '5' ); // 1
maxCommon( '55444', '55f444g'); // 3
maxCommon( 'abc', '334cab' ); // 2 


//Excercise 17
let matrix = Array(10).fill(null).map(()=>Array(10).fill(null))

console.log(matrix);

//Excercise 18

function apiCall(callback,delay=1000){
    setTimeout(callback,delay);
}

apiCall(()=>{
    console.log("hello")
},1900);


//Excercise 19
function joiner(token, ...rest){
    return rest.join(token);
}

console.log(joiner('-',1,2,3,4,5));
//
function createList(type='u'){
    const tag = type == 'o'?'ul':'ol';
    return `<${tag}>
            <li></li>
            <li></li>
        </${tag}>            
    `
}

createList('o');
//
function factorial(number){
    if(number <= 1){
        return 1;
    }
    return number*factorial(number-1);
}

console.log(factorial(5));

//
var str = '1234';

String.prototype.substr = function substr(start,length){
    let string = '';
    let lastIndex = start+length;
    if(start >= this.length || lastIndex >= this.length){
        return string;
    }
    
    while(start<lastIndex){
        string += this[start];
        ++start;
    }
    return string;
}

String.prototype.firstN = function firstN(n){
    return this.substr(0,n);
}

String.prototype.firstChar = function firstChar(){
    return this.substr(0,1);
}

console.log(str.substr(1, 7));
console.log(str.firstN(2));
console.log(str.firstChar());