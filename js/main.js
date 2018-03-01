'use strict';

// envelope animation
function envelopeOpen ()  {
    let envelope = document.querySelector('.envelope');
    envelope.innerHTML = '&#xf0e0;';

    setTimeout(() => {
        envelope.innerHTML = '&#xf2b6;';
    }, 2000);
};

// call animation
envelopeOpen();

// animate every 3 sec
setInterval(envelopeOpen, 3000);

// hand animation

function handMoves() {
    let hand = document.querySelector('.hand');
    hand.innerHTML = '&#xf0a6;';

    setTimeout(() => {
        hand.innerHTML = '&#xf25b;';
    }, 1000);

    setTimeout(() => {
        hand.innerHTML = '&#xf256;';
    }, 2000);

    setTimeout(() => {
        hand.innerHTML = '&#xf259;';
    }, 3000);
};

// call animation
handMoves();

// animate every 3 sec
setInterval(handMoves, 4000);