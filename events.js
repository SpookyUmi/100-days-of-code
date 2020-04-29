const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('It got clicked !!');
}

const hooray = () => console.log('HOORAY !');

butts.addEventListener('click', function() {
  console.log('Im an anon !');
});
coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('You clicked on a button !');
  // console.log('You are buying it !');
  // console.log(event.target.dataset.price);
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.currentTarget === event.target);
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('You clicked the window');
    console.log(event.target);
    // event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', function(event) {
  console.log(event.currentTarget);
  console.log(this);
});

// ? Loop function

/* buyButtons.forEach(pizza => {
  pizza.addEventListener('click', () => {
    console.log('You clicked it');
  });
}); */
