
// Particles js
particlesJS.load('particles-js', 'js/particles2.json', function() {
    console.log('callback - particles.js config loaded');
});

// Flip js
function handleTickInit(tick) {
    let dt = new Date();
    //let to = '2021-' + (dt.getUTCMonth() + 1) + '-' + (dt.getUTCDate() + 1);
    let to = '2021-06-25';
    Tick.count.down(to).onupdate = function(value) {
        tick.value = value;
    };
}
