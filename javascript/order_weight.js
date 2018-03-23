const orderWeight = s => {
    const sum = w => [...w].reduce((s, d) => s + +d, 0);
    const compare = (a, b) => sum(a) - sum(b) || a.localeCompare(b);

    return s.split(' ').sort(compare).join(' ');
};
