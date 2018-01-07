// for loop
for(let i = 0; i < 10; i++){
    console.log('Number ' + i)
}

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number');
        continue;
    }

    if (i === 5){
        console.log("stop the loop");
        break;
    }
    console.log("number " + i)
}

// While loop
let i = 0;
while(i < 10){
    console.log("Number " + i);
    i++;
}

//----->// do while it'll always run no matter what
// let i = 0;
// do {
//     console.log("Number " + i);
//     i++;
// }
// while(i < 10);


// Loops though Array
const cars =['Honda', 'Toyota', 'Mitsubishi', 'Ford'];
for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// For each
const colors =['Blue', 'Red', 'Green', 'Yellow'];
colors.forEach(function(color, index, array){
    console.log(`${index} : ${color}`);
    console.log(array);
})

// Map
const users = [
    {id: 1, name: 'Jhon'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Rose'},
    {id: 4, name: 'Karen'}
]
const ids = users.map(function(user){
    return user.id
});
console.log(ids);

// For in loop
const user ={
    firstName : 'John',
    lastName : 'Doe',
    age : 43
}

for (let x in user){
    console.log(`${x} : ${user[x]}`);
}




