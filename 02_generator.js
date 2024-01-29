function* simpleGenerator() {

    let i = 100;
    while (true) {
        i++
        yield i
    }
}
let sG = simpleGenerator()
console.log(sG.next().value);
console.log(sG.next().value);
console.log(sG.next().value);
console.log(sG.next().value);

/*
function* simpleGenerator() {
    console.log("Function Called");
    let x = 100
    yield "first Step";
    yield x;
    let y = "other"
    yield y;
    console.log("Function Called !!!!!");
}

let sG = simpleGenerator()

console.log(sG.next().value);
console.log(sG.next());
console.log(sG.next());
console.log(sG.next());
*/