const multiplicationTable = (row, col) =>
    [...Array(row)].map((_, i) => [...Array(col)].map((_, j) => (i + 1) * (j + 1)));
