'use strict';

const Chance      = require('chance'),
  chance      = new Chance();

const md5 = require('md5');


module.exports = {
  generateRandomUser: () => {
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = `${firstName  } ${  lastName}`;
    
    let userHandle = '@';
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace('.', '');
      userHandle += prefix;
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }
   
    const avatars = {
    
      Female: ['/images/avatars/woman.png', '/images/avatars/woman2.png', '/images/avatars/woman3.png', '/images/avatars/woman4.png'],
      Male: ['/images/avatars/boy.png', '/images/avatars/man2.png', '/images/avatars/man2.png', '/images/avatars/man3.png', '/images/avatars/man4.png']
    
    };
    
    const avatarArray = avatars[gender];
    const userAvatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];
  

    return {
      name: userName,
      handle: userHandle,
      avatars: userAvatar
    };
  }
};