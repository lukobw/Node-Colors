var os = require('os');
var timeformat = require('./timeformat');
var colors = require('colors');

function showSystemInfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }

    console.log('System:'.america, type);
    console.log('Release:'.red, release);
    console.log('CPU Model:'.blue, cpu);
    console.log('Uptime: '.green, timeformat.print(uptime));
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.rainbow, userInfo.homedir);
}

exports.print = showSystemInfo;