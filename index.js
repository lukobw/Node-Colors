var OSinfo = require('./modules/osInfo');
var timeformat = require('./modules/timeformat');

console.log("\nChoose:\n\n 1. Node version\n 2. User interface language\n 3. User machine information\n 4. Time\n 5. Exit this superb app\n");

process.stdin.setEncoding('UTF-8');

process.stdin.on('readable', function(){
    var input = process.stdin.read();

    if(input !== null) {
        var instruction = input.toString().trim();
             
        switch(instruction) {
            case '1':
                process.stdout.write('Node version: ' + process.versions.node + '\n');
                break;
            case '2':
                process.stdout.write('Language: ' + process.env.LANG + '\n');
                break;
            case '3':
                OSinfo.print();
                break;
            case '4':
            console.log('125 seconds = ' + timeformat.print(125));
            console.log('3700 seconds = ' + timeformat.print(3700));
            break;

            case '5':
                process.stdout.write('Goodbye!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});

