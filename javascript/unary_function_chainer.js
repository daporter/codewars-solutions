const chained = fs => x => fs.reduce((v, f) => f(v), x);
