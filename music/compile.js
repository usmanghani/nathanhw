var asCompiledExpr = function(time, expr) {
    return {
        tag: expr.tag,
        pitch: expr.pitch,
        start: time,
        dur: expr.dur
    };
};

var compileT = function (arr, time, expr) {
    if (expr.tag !== 'seq') {
        arr.push(asCompiledExpr(time, expr));
    }
    else {
        compileT(arr, time, expr.left);
        compileT(arr, endTime(time, expr.left), expr.right);
    }
};

var compile = function (musexpr) {
    var arr = [];
    compileT(arr, 0, musexpr);
    return arr;
};