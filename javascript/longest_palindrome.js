function longestPalindrome(s) {
    const isPal = function(t) {
        return t === t.reverse();
    };

    const longestFromBeg = function(t) {
        return isPal(t) ? t : longestFromBeg(t.slice(0, -1));
    };

    const longest = function(t, l) {
        var m;
        if (s.length === 0) {
            return l;
        } else {
            m = longestFromBeg(s).length;
            return longestPalindrome(s.slice(1), Math.max(l, m));
        }
    };

    return longest(s, 0);
}
