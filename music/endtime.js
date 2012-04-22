var endTime = function (time, expr) {
    
    if (expr.tag !== 'seq') {
        return time + expr.dur;
    }
    
    return endTime(time, expr.left) + endTime(time, expr.right);
};