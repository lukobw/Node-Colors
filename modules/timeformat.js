process.stdin.setEncoding('utf-8');

function timeFormat(time) {
    var seconds = Math.floor((time % 3600) % 60);
    var minutes = Math.floor((time % 3600) / 60);
    var hours = Math.floor(time / 3600);

    return `${hours} hour(s), ${minutes} minute(s), ${seconds} second(s)`;
}

exports.print = timeFormat;

