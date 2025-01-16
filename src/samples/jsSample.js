console.log("Çalıştım")
const String1 = "Merhaba"
const number1 = 12
let boolean1 = true
let array1 = [12, 10, "asd", true, [1]]
let object = {

    key: "value",
    kerem: "kerem", // string bir ifadeyi tek tırnak içindede yazılabilir (' ')
    age: 18,
    isWork: true,
    hobbies: ["codeing"],
    other: {
        city: "İstanbul",
        cityCode: 34
    },
    sayhello: () => {
        console.log("Hello")
    }
}

// Function

// Yukarıfa gösterilen functionların yapıları aynıdır

const name1 = "Kerem"
// name1 ="Kerem Taşdemir"  // const değiştirilemez bir yapı oldugundan hata vericektir , 
// bu yuzden let ile yazmak daha saglıklıdır
console.log(name1)

let name2 = "Kerem"
name2 = "Kerem Taşdemir"

console.log(name2)

{
    const team = "Fenerbahçe"
    let team2 = "Beşiktaş"
    var team3 = "Eternal Fair" // var scope ayırtetmeksizin çalışır
    console.log(name1)
}

if (name1 == "Kerem") {
    console.log("Eşittir")
}
else {
    console.log("Eşit Değildir")
}

let number2 = 18
if (number2 == "18") {
    console.log("Eşittir")
} else {
    console.log("Eşit Değildir")
}

let sampleNull = null
let sampleUnd = undefined

// null ve undefined Değer taşımadığı için else düşer

if (sampleNull) {
    console.log("İf'e Düştüm")
} else {
    console.log("Else'e Düştüm")
}


if (sampleUnd) {
    console.log("İf'e Düştüm")
} else {
    console.log("Else'e Düştüm")
}

let number3 = 2006
if (number3) {
    console.log("İf'e Düştüm")
} else {
    console.log("Else'e Düştüm")
}


let name3 = "Kerem"
if (name3) {
    console.log("İf'e Düştüm")
} else {
    console.log("Else'e Düştüm")
}

let hobbies = []
if (hobbies) {
    console.log("İf'e Düştüm")
} else {
    console.log("Else'e Düştüm")
}

if (!sampleNull) {
    console.log("İf'e Düştüm")
}
else {
    console.log("Else'e Düştüm")
}

let date = new Date()
console.log(date.getDate())

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]

if (arr1 == arr2) {
    console.log("Eşitler")
}
else {
    console.log("Eşit Değiller") // Burada Farklı array dızılerı oldugu için aynı değerleri işaret etmıyorlar 
    // bu yuzden eşit değil
}

let obj1 =
{
    one: 1
}
let obj2 =
{
    one: 1
}

if (obj1 == obj2) {
    console.log("Eşitler")
} else {
    console.log("Eşit Değiller") // Burada Farklı array dızılerı oldugu için aynı değerleri işaret etmıyorlar 
    // bu yuzden eşit değil
}

let obj3 = {
    one: 1
}
let obj4 = obj3

if (obj3 == obj4) {
    console.log("Eşitler")
} else {
    console.log("Eşit Değiller")
}

