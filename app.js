let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Removes item
secretMessage.pop();

//add items to array
secretMessage.push('to', 'Program');

//Changing item in an array-zeroindex
secretMessage[0] = 'Knowledge';

//removing first string from array
secretMessage.shift();

//adding a first string
secretMessage.unshift('Programming');

//removing multiples and adding a singular (index position number of spots following and new item)
secretMessage.splice(6, 5, 'know');

//Length check
console.log(secretMessage.length);

//lists array
console.log(secretMessage);

//making list into sentence with a space
console.log(secretMessage.join(' '));