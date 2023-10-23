// let age: number = 23;
// if(age < 50)
//     age += 10;
// console.log(age);

// let sales = 24_35_4345;
// let course = "TypeScript";
// let is_published = true;
// let label;
// label = 1;
// label = "khan";

// function render(document){
//     console.log(document)
// }

// let numbers: number[] = []
// numbers[0] = 1;
// numbers.forEach((element => element.toFixed));
// let user: [number, string, boolean, number] = [3, "khan", true, 0]
// user.push(1)

// const small = 1;
// const medium = 2;
// const large = 3;
// PascalCase
// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number, taxYear = 2022): number {
//     if(taxYear <  2023)
//         return income * 1.2
//     return income * 1.3
// }
// calculateTax(10_000)

// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }
// let employee:Employee = {
//     id: 1, 
//     name: 'khan', 
//     retire: (date: Date) => {
//     console.log(date)
// }}

// function kgTobs(weight: number | string): number {
//     if(typeof weight === 'number')
//     return weight = 2.2
// else 
// return parseInt(weight) * 2.2;
// }
// kgTobs(10);
// kgTobs("30kg")

// type Draggable = {
//     drag: () => void
// }
// type Resizable = {
//     resize: () => void
// }
// type UIWidget = Draggable & Resizable
// let textBox: UIWidget = {
//     drag: ()=> {},
//     resize: ()=> {}
// }

// Literal exact, specific
type Quantity = 50 | 100
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';


