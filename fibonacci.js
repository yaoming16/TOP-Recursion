function fibs(max) {
    if (max <= 0) return undefined;
    let result = [0];

    if (max >= 2) {
        result.push(1);
        for (let i = 0; i < max - 2; i++) {
            result.push(result.at(-2) + result.at(-1));
        }
    }
    return result;
}

//Test fibs
/*for (let i = -2; i <= 15; i++) {
    console.log(fibs(i));
}
*/

function fibsRec(max) {
    if (max < 0) return undefined;
    
    if (max === 0) return [];
    if (max === 1) return [0];
    if (max === 2) return [0, 1];

    let res = fibsRec(max - 1);
    let valueToAdd = res.at(-2) + res.at(-1);
    res.push(valueToAdd);
    return res;
}

//Test fibsRec
for (let i = -2; i <= 15; i++) {
    console.log(fibsRec(i));
}