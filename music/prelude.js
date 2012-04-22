var prelude = function(expr) {
    return {tag:'seq', left: {tag:'note', pitch:'d4', dur:500}, right:expr};
};