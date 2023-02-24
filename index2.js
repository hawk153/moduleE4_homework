function myFunction(str, obj) {
    return obj.hasOwnProperty(str)
}

x = { '1': 'One', '2': 'Two' };
console.log(myFunction('2', x))
