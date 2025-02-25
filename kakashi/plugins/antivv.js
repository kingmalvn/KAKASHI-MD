const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': 'vv',
  'alias': ['retrive', 'viewonce'],
  'desc': "Fetch and resend a ViewOnce message content (image/video/voice).",
  'category': 'misc',
  'use': "<query>",
  'filename': __filename
}, async (_0x5a104f, _0x1d2e0c, _0x1759df, {
  from: _0x4d7a74,
  reply: _0x5545e9
}) => {
  try {
    const _0x1c9e5c = _0x1759df.msg.contextInfo.quotedMessage;
    if (_0x1c9e5c && _0x1c9e5c.viewOnceMessageV2) {
      const _0x3798cf = _0x1c9e5c.viewOnceMessageV2;
      if (_0x3798cf.message.imageMessage) {
        let _0x18b540 = _0x3798cf.message.imageMessage.caption;
        let _0x345d25 = await _0x5a104f.downloadAndSaveMediaMessage(_0x3798cf.message.imageMessage);
        return _0x5a104f.sendMessage(_0x4d7a74, {
          'image': {
            'url': _0x345d25
          },
          'caption': _0x18b540
        }, {
          'quoted': _0x1d2e0c
        });
      }
      if (_0x3798cf.message.videoMessage) {
        let _0x4fb901 = _0x3798cf.message.videoMessage.caption;
        let _0x2e752e = await _0x5a104f.downloadAndSaveMediaMessage(_0x3798cf.message.videoMessage);
        return _0x5a104f.sendMessage(_0x4d7a74, {
          'video': {
            'url': _0x2e752e
          },
          'caption': _0x4fb901
        }, {
          'quoted': _0x1d2e0c
        });
      }
      if (_0x3798cf.message.audioMessage) {
        let _0x137019 = await _0x5a104f.downloadAndSaveMediaMessage(_0x3798cf.message.audioMessage);
        return _0x5a104f.sendMessage(_0x4d7a74, {
          'audio': {
            'url': _0x137019
          }
        }, {
          'quoted': _0x1d2e0c
        });
      }
    }
    if (!_0x1759df.quoted) {
      return _0x5545e9("hy sup just wanted to remind you u need to replie to view once message.");
    }
    if (_0x1759df.quoted.mtype === "viewOnceMessage") {
      if (_0x1759df.quoted.message.imageMessage) {
        let _0x4e23b1 = _0x1759df.quoted.message.imageMessage.caption;
        let _0x14d7c9 = await _0x5a104f.downloadAndSaveMediaMessage(_0x1759df.quoted.message.imageMessage);
        return _0x5a104f.sendMessage(_0x4d7a74, {
          'image': {
            'url': _0x14d7c9
          },
          'caption': _0x4e23b1
        }, {
          'quoted': _0x1d2e0c
        });
      } else {
        if (_0x1759df.quoted.message.videoMessage) {
          let _0x4cf2b0 = _0x1759df.quoted.message.videoMessage.caption;
          let _0x5655fd = await _0x5a104f.downloadAndSaveMediaMessage(_0x1759df.quoted.message.videoMessage);
          return _0x5a104f.sendMessage(_0x4d7a74, {
            'video': {
              'url': _0x5655fd
            },
            'caption': _0x4cf2b0
          }, {
            'quoted': _0x1d2e0c
          });
        }
      }
    } else {
      if (_0x1759df.quoted.message.audioMessage) {
        let _0x5dfa37 = await _0x5a104f.downloadAndSaveMediaMessage(_0x1759df.quoted.message.audioMessage);
        return _0x5a104f.sendMessage(_0x4d7a74, {
          'audio': {
            'url': _0x5dfa37
          }
        }, {
          'quoted': _0x1d2e0c
        });
      } else {
        return _0x5545e9("> *This is not a ViewOnce message.*");
      }
    }
  } catch (_0x23e307) {
    console.log('Error:', _0x23e307);
    _0x5545e9("An error occurred while fetching the ViewOnce message.");
  }
});
