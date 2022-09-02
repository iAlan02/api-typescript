
async function hello() {
    return "Hello World";
}


interface Person {
    firstName: string;
    lastName: string;
    [key: string]: any;
}

const person = { 
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Jane",
    lastName: "Doe", 
    fast: true
}

function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}

pow(10, 20);

type MyList = [number?, string?, boolean?]

const arr: MyList  = [];

arr.push(1)
arr.push('asdf')
arr.push(true)


class Observable<T> {
    constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23);