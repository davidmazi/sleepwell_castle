function f = i => {
    return new Promise ((resolve, reject) => {
        if (i) {
            return resolve (true)
        }
 
        return reject (false)
    })
}
 
// -----------------------------------------------------------------------------
 
function f = async i => {
    if (i) {
        return true
    }
 
    throw false
}
 
// -----------------------------------------------------------------------------
 
let x = 42
console.log ({ x })
 
'10.5' / 1 => 10.5
'10.5' | 1 => 10
 
true && 42 || 0 => 42
false && 42 || 0 => 0
 
// ---
true && false || 42 => 42
true ? false : 42 => false
// ---
 
// protection si name/data est null
name = (name || '').toUpperCase ()
x = (data || {}).x
 
console.log (`name: ${name}`)
console.log (`\
name: ${name}
first_name: ${first_name}`)
 
// -----------------------------------------------------------------------------
await {
    received_label,
    received_run,
    received_deposit
}[`received_${category}`] ()
 
 
// la magie
let x = {
    a: 1
}
let y = {
    b: 2
}
let z = false
 
console.log ({
    ...x,
    ...(z && y || { })
})
 
// concatainer un tableau
let x = {
    a: 1,
    c: 4
}
let y = {
    a: 3,
    b: 2
}
 
console.log (Object.assign (x, y))