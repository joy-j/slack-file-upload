const request = require('request');
const fs = require('fs');
const uploadApiUrl = 'https://slack.com/api/files.upload';

module.exports = {
    upload : (token, channels, filename) => {
        fileupload(token, channels, filename);
    }
}

const fileupload = (token, channels, filename) => {

    const imageStream = fs.createReadStream(filename);

    request.post({
      url: uploadApiUrl,
      formData: {
        token: token,
        channels: channels,
        file: imageStream
      }}, function(err, res, body){
        // console.log(res);
        console.log(err);
      });
}
