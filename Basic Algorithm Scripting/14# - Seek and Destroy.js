// My funy solution - should use for loop... but it works for max 3 args.
function destroyer(arr) {

    var target = [];
    target.push(arguments[1]);
    target.push(arguments[2]);
    target.push(arguments[3]);

    var filterd = arr.filter(function (val) {

        if (val !== target[0] && val !== target[1] && val !== target[2]) {
            return val;
        }

    });


    return filterd;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
