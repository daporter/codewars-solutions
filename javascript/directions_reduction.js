const opps = { 'SOUTH': 'NORTH', 'NORTH': 'SOUTH', 'WEST': 'EAST', 'EAST': 'WEST' };
const dirReduc = dirs =>
      dirs.reduce((a, d) => d === opps[a.slice(-1)] ? a.slice(0, -1) : a.concat(d), []);
