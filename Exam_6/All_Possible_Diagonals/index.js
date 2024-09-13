let Matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]


let n = Matrix.length;
let m = Matrix[0].length;


for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
        console.log(Matrix[i - j][j]);
    }
}

for (let i = 1; i < m; i++) {
    for (let j = 0; j < n - i; j++) {
        console.log(Matrix[n - 1 - j][i + j]);
    }
}