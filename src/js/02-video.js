import Player from '@vimeo/player';
let throttle = require('lodash.throttle');


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const storageTimeKey = "videoplayer-current-time";

const onPlay = function (timeupdate) {
  localStorage.setItem(storageTimeKey, timeupdate.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const actualTime = localStorage.getItem(storageTimeKey);


player
  .setCurrentTime(actualTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });


