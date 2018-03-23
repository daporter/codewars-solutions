const sortArray = ns => {
    const odds = ns.filter(n => n % 2).sort((a, b) => a - b);
    return ns.map(n => n % 2 ? odds.shift() : n);
};
