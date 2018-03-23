const encrypt = (text, n) => {
    if (text === null || n <= 0) return text;

    const evens = [...text].filter((_, i) => i % 2 === 0).join('');
    const odds  = [...text].filter((_, i) => i % 2 === 1).join('');
    return encrypt(odds + evens, n - 1);
};

const decrypt = (encryptedText, n) => {
    if (encryptedText === null || n <= 0) return encryptedText;

    const odds  = encryptedText.slice(0, encryptedText.length / 2);
    const evens = encryptedText.slice(encryptedText.length / 2);
    return decrypt([...evens].reduce((a, e, i) => a + e + (odds[i] || '')), n - 1);
};
