const abbreviate = s =>
      s.replace(/\w{4,}/g, m => m[0] + m.length + (m.length - 1));
