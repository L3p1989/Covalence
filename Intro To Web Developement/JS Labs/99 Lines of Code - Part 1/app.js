var friends = ['Steph', 'Julius', 'Glenn', 'Tyler', 'Jason'];

for (i = 0; i < friends.length; i++){
    var friend = friends[i]; {
        for (s = 99; s > 0; s--) {
            var minusOne = s - 1;
            if (s > 1) {
                console.log(s + ' lines of code in the file, ' + s + ' lines of code; ' + friend + ' strikes one out, clears it all out, ' + minusOne + ' lines of code in the file');
            } else {
                console.log('1 line of code in the file, 1 line of code; ' + friend + ' strikes one out, clears it all out, no more lines of code in the file');
            }
        }
    }
};