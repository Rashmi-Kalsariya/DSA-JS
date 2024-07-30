

const arr = [1, 2, 4, 5, 6];

const findMissing = () => {
    let n = arr.length + 1;

    let expectedSum = (n * (n + 1)) / 2;

    let actualSum = arr.reduce((sum, num) => sum+num ,0);

    console.log(actualSum);

    let missingNumber = expectedSum - actualSum;

    return missingNumber;
}


console.log(findMissing());
