
// Particles js
particlesJS.load('particles-js', 'js/particles2.json', function() {
    console.log('callback - particles.js config loaded');
});

// Flip js
function handleTickInit(tick) {
    let dt = new Date();
    //let to = '2021-' + (dt.getUTCMonth() + 1) + '-' + (dt.getUTCDate() + 1);
    let to = '2021-07-08 21:00:00';
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
  location.hash = '';
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Presale
const PRESALE_PRICE = 25000000;
const CONTRACT_ADDRESS = '0x3bBAB7B21Cc1DAf1Efc6060c66b5207F67Da506b';

document.getElementById("presale-amount").oninput = function() {
  let receive = parseInt(parseFloat(this.value) * PRESALE_PRICE);
  document.getElementById("presale-contribute").innerText = this.value;
  document.getElementById("presale-receive").innerText = receive;
  buyReactionText(parseFloat(this.value));
}

document.getElementById('buy-now').addEventListener('click', pay);

async function connectWallet() {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
        } catch (err) {
          let msg = '😢 It seems that something went wrong or you just canceled the payment.' + errToStr(err);
          alert(msg);
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider)
    } else {
      let msg = '😢 No Metamask (or other wallet) installed. Please install https://metamask.io for you browser and come back!';
        alert(msg);
    }
}

async function pay() {
    const amount = document.getElementById('presale-amount').value;

    await connectWallet();

    if (parseFloat(amount) < 0.1 || parseFloat(amount) > 3) {
        alert('⚠ Allowed values between 0.1 and 3 BNB.');
        return;
    }

    web3.eth.getAccounts().then((res) => {
        transaction(res[0], CONTRACT_ADDRESS, amount)
    });
}

function transaction(from, to, value) {
    web3.eth.sendTransaction({
        from: from,
        to: to,
        value: web3.utils.toWei(value, 'ether')
    }, (err, transactionId) => {
        if (err) {
          let msg = '😢 Payment failed.' + errToStr(err);
          alert(msg);
        } else {
          let link = 'https://bscscan.com/tx/' + transactionId;
          let msg = '🍒🍒🍒 Congratulations! You will receive your tokens after the completion of the presale. View transaction: ' + link;
          alert(msg);
        }
    })
}

function errToStr(err) {
  if (typeof err === 'object' && err !== null) {
    if ('message' in err && typeof err['message'] === 'string') {
      return ' Error: ' + err['message'];
    }
  }
  try {
    return ' Error: ' + JSON.stringify(err);
  } catch (error) {}

  return '';
}

function buyReactionText(amount) {
  let smile = '';
  if (amount === 3) {
    smile = '😍';
  } else if (amount >= 2) {
    smile = '😘';
  } else if (amount > 1.5) {
    smile = '😄';
  } else {
    smile = '';
  }
  document.getElementById('amount-reaction').innerText = smile;
}
