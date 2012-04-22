// this is all you
var endTime = function (time, expr) {
    
    if (expr.tag === 'note') {
        return time + expr.dur;
    }
    else if (expr.tag === 'seq') {
        endTime(endTime(time, expr.left), expr.right);
    }
    else if (expr.tag === 'par') {
        return Math.max(endTime(time, expr.left), endTime(time, expr.right));
    }
    
};
var asCompiledExpr = function(time, expr) {
    return {
        tag: expr.tag,
        pitch: expr.pitch,
        start: time,
        dur: expr.dur
    };
};

var compileT = function (arr, time, expr) {
    if (expr.tag === 'note') {
        arr.push(asCompiledExpr(time, expr));
    }
    else if (expr.tag === 'seq'){
        compileT(arr, time, expr.left);
        compileT(arr, endTime(time, expr.left), expr.right);
    }
    else if (expr.tag === 'par') {
        compileT(arr, time, expr.left);
        compileT(arr, time, expr.right);
    }
};

var compile = function (musexpr) {
    var arr = [];
    compileT(arr, 0, musexpr);
    return arr;
};