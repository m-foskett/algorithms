const permutations = (els) => {
    // Base Case
    if (els.length === 0) return [[]];
    const firstEl = els[0];
    const rest = els.slice(1);
    const permsWithoutFirst = permutations(rest);
    const totalPerms = [];
    // Loop through each permutation without first element
    permsWithoutFirst.forEach(perm => {
        // For each position in that permutation
        // Note: <= to insert at the tail end
        for (let i = 0; i <= perm.length; i++){
            // Insert the first element and push result to total permutations
            totalPerms.push([...perm.slice(0,i), firstEl, ...perm.slice(i)]);
        }
    })
    return totalPerms;
}
console.log(permutations(['a', 'b', 'c', 'd', 'e']))