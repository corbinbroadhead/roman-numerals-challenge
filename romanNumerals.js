const toRoman = (num) => {
    let solution = [];
    if (num > 9999) {
        return console.log('Please give a number less than 10,000');
    }
    while (num > 999) {
        solution.push('M');
        num -= 1000;
    }
    while (num > 499) {
        solution.splice(solution.length+1 , 0, 'D');
        num -= 500;
    }
    while (num > 99) {
        solution.splice(solution.length+1 , 0, 'C');
        num -= 100;
    }
    while (num > 49) {
        solution.splice(solution.length+1 , 0, 'L');
        num -= 50;
    }
    while (num > 9) {
        solution.splice(solution.length+1 , 0, 'X');
        num -= 10;
    }
    while (num > 4) {
        solution.splice(solution.length+1 , 0, 'V');
        num -= 5;
    }
    while (num > 0) {
        solution.splice(solution.length+1 , 0, 'I');
        num -= 1;
    }

    let romanNum = solution.join("");
    return romanNum;
}

console.log(toRoman(40))
console.log(toRoman(527))
console.log(toRoman(8811))