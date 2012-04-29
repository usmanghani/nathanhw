var evalScheem = function (expr, env) {
    // Numbers evaluate to themselves
    if (typeof expr === 'number') {
        return expr;
    }
    // Strings are variable references
    if (typeof expr === 'string') {
        return env[expr];
    }
    
    // Look at head of list for operation
    switch (expr[0]) {
        case 'define':
            env[expr[1]] = evalScheem(expr[2], env);
            return 0;
        case 'set!':
            if (!(expr[1] in env)) {
                throw expr[1] + " not defined.";
            }
            env[expr[1]] = evalScheem(expr[2], env);
            return 0;
        case '+':
            return evalScheem(expr[1], env) +
                   evalScheem(expr[2], env);
    }
};