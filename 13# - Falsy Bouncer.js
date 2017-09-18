function bouncer(arr) {

    var filterd = arr.filter(function (word) {

        return Boolean(word);
    });

    return filterd;

}

bouncer([7, "ate", "", false, 9]);
