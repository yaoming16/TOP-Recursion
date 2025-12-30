function merge(leftPart, rightPart) {
    let result = [];
    let i = 0;
    let j = 0;

    // Order array and merge
    while (i < leftPart.length && j < rightPart.length) {
        if (leftPart[i] < rightPart[j]) {
            result.push(leftPart[i]);
            i++;
        } else {
            result.push(rightPart[j]);
            j++;
        }
    }

    //Add remaining indexs
    if (i < leftPart.length) {
        result.push(...leftPart.slice(i));
    } 
    if (j < rightPart.length) {
        result.push(...rightPart.slice(j));
    }
    
    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let length = arr.length;
    let mid = Math.round(arr.length / 2);
    
    // Divide array in half
    let leftPart = [];
    let rightPart = [];
    for (let i = 0; i < length; i++) {
        if (i < mid) {
            leftPart.push(arr[i]);
        } else {
            rightPart.push(arr[i]);
        }
    }
    //could use this but prefered manual loop above, just to show the logic
    // let leftPart = arr.slice(0, mid);
    // let rightPart = arr.slice(mid);

    return merge(mergeSort(leftPart), mergeSort(rightPart));
}

console.log(mergeSort([12,11,88,22,2,478,1,0,5,34,23]));