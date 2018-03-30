const revrot = (str, sz) => {
  if (sz <= 0 || sz > str.length) return '';

  const chunks = s => s.length < sz ? [] : [s.slice(0, sz)].concat(chunks(s.slice(sz)));
  const f = ch => [...ch].reduce((s, d) => s + d * d * d, 0) % 2 === 0;
  const rev = ch => [...ch].reverse().join('');
  const rotL = ch => ch.slice(1) + ch[0];
  return chunks(str).map(ch => f(ch) ? rev(ch) : rotL(ch)).join('');
};
