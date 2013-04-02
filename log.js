define(function(require) {
    if(!window.console) console = { log: function(){}, error: function(){}};
    function createLog(level) {
        return function(str) {
            var args;
            args = Array.prototype.slice.call(arguments, 1);
            str = level+': '+str;
            args.unshift(str);
            var log = Function.prototype.bind.call(console.log, console);
            log.apply && log.apply(console, args);
        }
    }

    function createError(level) {
        return function(str) {
            var args;
            args = Array.prototype.slice.call(arguments, 1);
            str = level+': '+str;
            args.unshift(str);
            var error = Function.prototype.bind.call(console.error, console); 
            error.apply && error.apply(console, args);
        }
    }

    var logger = {
        insecure : createLog('insecure'),
        finest : createLog('finest'),
        finer : createLog('finer'),
        fine : createLog('fine'),
        info : createLog('info'),
        warn : createError('warn'),
        error : createError('error')
    };

    return logger;
});