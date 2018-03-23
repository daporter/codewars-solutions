const findUniq = a => {
    a.sort((x, y) => x - y);
    return a[0] === a[1] ? a[a.length - 1] : a[0];
};
