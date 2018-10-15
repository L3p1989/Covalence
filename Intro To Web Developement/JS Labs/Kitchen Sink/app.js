var name = 'Patrick';
const usa = 50;
var sum1 = 5 + 4;
var L = 'L';
var index = 0;

if (name.charCodeAt(index) > L.charCodeAt(index)) {
    console.log('Back of the line!');//if your name starts with a letter after L in the alphabet you'll be sent to the back of the line
} else if (name.charCodeAt(index) <= L.charCodeAt(index)) {
    console.log('Next!');//if your name starts with the letter L or a letter before it you're next
}

function sayHello(msg) {
    console.log('Hello World!');
}

sayHello();

function checkAge(name, age) {
    if(age < 21) {
        console.log("Sorry" + " " + name + " " + "you aren't old enough to view this page!")
    }
}

checkAge('Charles', 21)
checkAge('Abby', 27)
checkAge('James', 18)
checkAge('John', 17)

var veg = ['Cucumber', 'Potato', 'Broccoli', 'Peppers']

for(var i = 0; i < veg.length; i++) {
    console.log(veg[i]);
}

var friends = [friend1 = {
    name: 'Steph',
    age: 27
}, friend2 = {
    name: 'Julius',
    age: 35
}, friend3 = {
    name: 'Gavine',
    age: 19
}, friend4 = {
    name: 'Saoirse',
    age: 3
}, friend5 = {
    name: 'Namira',
    age: 14
}]

friends.forEach(checkAge);

function getLength(msg) {
    console.log(msg.length)
} if(getLength % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}

getLength('Hello World')