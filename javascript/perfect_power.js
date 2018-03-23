const isPP = (n, m = 2, k = 2) => {
    if (Math.pow(m, 2) > n) {
        return null;
    } else if (Math.pow(m, k) === n) {
        return [m, k];
    } else if (Math.pow(m, k) < n) {
        return isPP(n, m, k + 1);
    } else {
        return isPP(n, m + 1, 1);
    }
};
