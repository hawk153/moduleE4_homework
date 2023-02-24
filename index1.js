function myFunction(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} --> ${obj[key]}`)
        }
    }
}
x = { '1': 'One', '2': 'Two' }
myFunction(x)