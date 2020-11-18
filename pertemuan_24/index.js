//array

let nilai = [90, 80, 70, 100, 85];
for (let i = 0; i < nilai.length; i++) {
    console.log("Nilai =", nilai[i] + 5);
    
}

console.log(nilai);


//nilai[2] = 90;
//console.log(nilai[nilai.length - 1]);

let john = ["john", "Doe", 33, true];
let bororing = ["hiskia", "Doe", 17, true];
let hiskia = ["hiskia", "Doe", 18, true];
console.log(john[john.length -1]);
console.log(john);

//toString()
console.log(john.toString());
//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));

//push()
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift()
john.shift()
console.log(john.join(" - "));

//unshift()
john.unshift("john");
john.unshift("Prof");
console.log(john.join(" - "));

//splice()
john.splice("john");
console.log(john.join(" - "));

//concat()
let nama = john.concat(bororing, hiskia);
console.log(nama);

//slice()
let boy = ["boy", "Doe", 18, true];
let tommy = ["tommy", "Doe", 19, true];
let bororingmentang = ["bororingmentang", "Doe", 17, true];

console.log(tommy);
console.log(bororing);

//sort()
let boywilliam = ["boywilliam", "Doe", 18, true];
hiskia.sort();

console.log(hiskia);

let umur = [18, 17, 20, 30, 19];

umur.sort();
console.log(umur);

//reverse()
let boymarince = ["boy", "Doe", 18, true];

hiskia.reverse();

console.log(hiskia);