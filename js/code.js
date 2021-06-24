
// Particles js
particlesJS.load('particles-js', 'js/particles2.json', function() {
    console.log('callback - particles.js config loaded');
});

// Flip js
function handleTickInit(tick) {
    let dt = new Date();
    //let to = '2021-' + (dt.getUTCMonth() + 1) + '-' + (dt.getUTCDate() + 1);
    let to = '2021-06-28';
    Tick.count.down(to).onupdate = function(value) {
        tick.value = value;
    };
}

// Scroll
let scrollBtn = document.getElementById('scroll-top');
scrollBtn.addEventListener('click', scrollTop);
window.onscroll = function() {
    scrollDisplay();
};

function scrollDisplay() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function scrollTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
