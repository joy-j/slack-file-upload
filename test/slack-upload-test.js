const assert = require('assert');

describe('Slack', function() {

  describe('Slack upload image', function() {
    it('should success upload image by slack bot.', function() {
      const token = process.env.SLACK_TESTBOT_TOKEN;

      const fs = require('fs');

      const slackFileUpload = require('../src/slack-file-upload');

      slackFileUpload.upload({
          token: token,
          channels: 'joy-private',
          filename: 'package.json'
      });
   });
 });
});
