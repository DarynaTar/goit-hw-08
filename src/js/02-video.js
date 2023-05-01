import Player from "@vimeo/player";


const iframe = document.querySelector('iframe')
const player = new Player(iframe)

const onTimeUpdate = function(data){
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds))
}

player.on('onTimeUpdate', onTimeUpdate)

const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'))
    if(savedTime) {
        player.setCurrentTime(savedTime)
    }