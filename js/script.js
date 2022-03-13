// 2. change h2 color
const h2Tags = document.getElementsByTagName('h2');
for (const h2 of h2Tags) {
    h2.style.color = 'lightblue';
}

// 3. change Bagpack section background color
const bagpack = document.getElementById('sectionBagpack');
bagpack.style.backgroundColor = 'tomato';

// 4. Change card border radius
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

// 5. Add onclick handler on a button. card name : Supoly 350
function supply350() {
    console.log('supply 350 juta');
}

// 6. select all Buy Now, after click then hide button
const buyNowButtons = document.getElementsByClassName('panda-btn-buy-now');
for (const buyNowButton of buyNowButtons) {
    buyNowButton.addEventListener('click', function () {
        buyNowButton.style.display = 'none';
    });
}

// 7. disable submit button & enable when input value 'email'
document.getElementById('confirm-email').addEventListener('keyup', function (event) {
    const submitButton = document.getElementById('submit-btn');

    if (event.target.value == 'email') {
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', true);
    }
});

// 8. change supply 350 image when mouseenter
const shoe1Image = document.getElementById('shoe-1');
shoe1Image.addEventListener('mouseenter', function () {
    shoe1Image.src = 'images/shoes/shoe-3.png';
});
shoe1Image.addEventListener('mouseout', function () {
    shoe1Image.src = 'images/shoes/shoe-1.png';
})

// 9. LET'S STAY IN TOUCH section e double click korle background color change hoye jabe
const bgDbclick = document.getElementById('subscribe');
bgDbclick.addEventListener('dblclick', function () {
    bgDbclick.style.backgroundColor = 'green';

});
bgDbclick.addEventListener('mouseout', function(){
    bgDbclick.style.backgroundColor='#fceae8'
})