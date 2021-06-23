
// Current winner balance
const WINNER_ADDRESS = '0x7924e056ed2dd76bbd4cec8c3ed050e759b1dfef';
const BSC_URL = 'https://data-seed-prebsc-1-s1.binance.org:8545'; // https://bsc-dataseed1.binance.org:443

let web3 = new Web3(BSC_URL);
let contract = new web3.eth.Contract(ABI, '0xf06E879C00f227F0674857676A4dc5103e12aBE0');
contract.methods.balanceOf(WINNER_ADDRESS).call().then((res) => {
    console.log('Winner balance', res);
});


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
