//the last one
let randNumber = ['a','b','c','d','e','f','j','i','l','r','s'];
for(let i = 0; i < randNumber.length; i++){
    console.log(i + '.' + randNumber[i]);
}


//push
function push() {
    let a = ['uzb', 'russ', 'eng','tajik'];
    let b = a.join(',') + ',' + 'ukr';
    console.log(b.split(','));
}
push();


// pop
function pop() {
    let v = ['damas','spark','nexia','malibu'];
    let g = v.length -1;
    console.log(v.slice('').slice(0,g));
}
pop();
