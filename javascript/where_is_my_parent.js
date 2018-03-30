const findChildren = ps =>
      [...ps].sort((a, b) => a.localeCompare(b, 'kf', { caseFirst: 'upper'})).join('');
