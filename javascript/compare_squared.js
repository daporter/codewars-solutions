const comp = (a1, a2) => {
    const comp_asc = (a, b) => a - b;
    const is_equal = (a1, a2) =>
          a1.length === a2.length && a1.every((e, i) => e * e === a2[i]);
    return !!a1 && !!a2 && is_equal([...a1].sort(comp_asc), [...a2].sort(comp_asc));
};
