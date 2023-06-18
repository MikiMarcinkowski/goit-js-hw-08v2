import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const storageTimeKey = 'videoplayer-current-time';

const onPlay = function (timeUpdate) {
  localStorage.setItem(storageTimeKey, timeUpdate.seconds);
};

player.on('play', onPlay);

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
