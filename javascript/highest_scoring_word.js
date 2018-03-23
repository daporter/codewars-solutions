const high = ws => {
    const score = cs => [...cs].reduce((s, c) => s + c.charCodeAt() - 96, 0);
    return ws.split(' ').sort((a, b) => score(b) - score(a))[0];
};
