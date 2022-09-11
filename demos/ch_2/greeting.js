function displayGreeting(name){
return `Hello ${name}`;
}

var userName = process.argv[2]; 
var msg = displayGreeting(userName);
console.log(msg);
process.stdout.write(`The result of function ${msg} `);

// console.log(process);