var cherryPickup = function(grid) {
    const m = grid.length;
    if (m === 0) return 0;
    const n = grid[0].length;
    const dy = [0, -1, 1];
    const memo = new Array(71).fill(null).map(() => new Array(71).fill(null).map(() => new Array(71).fill(-1)));

    const dfs = (i, c1, c2) => {
        if (i === m) return 0;
        if (c1 < 0 || c2 < 0 || c1 >= n || c2 >= n) return Number.MIN_SAFE_INTEGER;
        if (memo[i][c1][c2] !== -1) return memo[i][c1][c2];

        let ans = 0;
        for (let k = 0; k < 3; k++) {
            for (let r = 0; r < 3; r++) {
                ans = Math.max(ans, dfs(i + 1, c1 + dy[k], c2 + dy[r]));
            }
        }

        ans += (c1 === c2) ? grid[i][c1] : grid[i][c1] + grid[i][c2];
        memo[i][c1][c2] = ans;
        return ans;
    };

    return dfs(0, 0, n - 1);
};
