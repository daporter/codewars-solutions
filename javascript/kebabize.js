const kebabize = s =>
  s.replace(/[^a-z]/ig, '')
   .replace(/[A-Z]/g, (m, o) => (o ? '-' : '') + m.toLowerCase());
