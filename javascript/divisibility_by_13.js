const seq = [1, 10, 9, 12, 3, 4];

const thirt = n => {
  const sum = [...String(n)]
        .reverse()
        .reduce((s, e, i) => s + e * seq[i % seq.length], 0);
  return sum == n ? sum : thirt(sum);
};
