var qrImage = require('qr-image');
var fs = require('fs');

qrImage
    .image('https://www.npmjs.org', {type : 'png', size : 20})
    .pipe(fs.createWriteStream('qrCode.png'));