(function() {
  var canvas, ctx;

  canvas = document.getElementById("miCanvas");

  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
    ctx.fillRect(5, 5, 20, 20);
    ctx.strokeRect(30, 5, 20, 20);
    ctx.arc(68, 18, 10, 0, 2.5);
    ctx.stroke();
    ctx.arc(100, 18, 10, 0, 2.5);
    ctx.fill();
  } else {
    alert("Cambia de navegador!");
  }

}).call(this);





var videoPlayButton,
  videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
        this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
  }

videoMethods.renderVideoPlayButton()



$(document).ready(function() {
    $('#CarouselVideo').carousel({
        interval: 5000
    })
});