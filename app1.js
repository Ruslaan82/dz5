// -написать функцию, которая принимает неограниченное кол-во чисел
// и возвращает их среднюю арифметическую

function getAllSum2(...args){
    console.log(args)
    let sum = args.reduce((a, b) => a += b);
    let length = args.length;
    let total = sum/length;
    console.log(total)
}
getAllSum2(2, 3, 4, 5, 6)
