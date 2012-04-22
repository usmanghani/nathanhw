var reverse = function(expr) {
    if (expr.tag !== 'seq'){
        return expr;
    }
    
    return {tag: expr.tag, left: reverse(expr.right), right: reverse (expr.left) };    
};