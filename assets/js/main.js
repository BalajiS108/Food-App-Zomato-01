const restaurantData = [
  {
    id: 1,
    rName: 'Hotel Ronita Paratha',
    rDetails: 'North Indian,Rajasthani, Beverages,Snackes',
    rating: 3.7,
    dTime: 18,
    price: 100,
    proOff: 'Pro extra 25% OFF',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/chains/3/18349083/33ef24cb9691b41497da9f04e87efff5_o2_featured_v2.jpg? output-format=webp ',
    promoted: 'Promoted',
  },
  {
    id: 2,
    rName: 'Ashapuri Dining Hall',
    rDetails: 'North Indian',
    rating: 3.9,
    dTime: 34,
    price: 100,
    proOff: '',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/7/6506247/2295d76b2833e20360172156bccedf0e_o2_featured_v2.jpg?output-format=webp',
    promoted: 'Promoted',
  },
  {
    id: 3,
    rName: "MacDonald's",
    rDetails: 'Burger, Fast Food',
    rating: 4.3,
    dTime: 25,
    price: 100,
    proOff: 'Pro extra 25% OFF',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/chains/1/10571/a153257d68de3a60406ac31c98f39ccc_o2_featured_v2.jpg?output-format=webp',
    promoted: '',
  },
  {
    id: 4,
    rName: 'Bebe Di Rasoi-Punjabi',
    rDetails: 'North Indian,Chinese, Biryani',
    rating: 3.7,
    dTime: 29,
    price: 100,
    proOff: 'Pro extra 25% OFF',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/chains/0/19035820/311db57e8ccaf1f085fa5efb96c701f9_o2_featured_v2.jpg?output-format=webp',
    promoted: '',
  },
  {
    id: 5,
    rName: 'Burger King',
    rDetails: 'Burger, Fast food, Beverages,Snackes',
    rating: 4.1,
    dTime: 24,
    price: 100,
    proOff: '',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/chains/8/6506108/a60387cca3992269b628f69c17745d19_o2_featured_v2.jpg?output-format=webp',
    promoted: 'Promoted',
  },
  {
    id: 6,
    rName: "Domino's Pizza",
    rDetails: 'Pizza,Italian,Beverages,Snackes',
    rating: 3.6,
    dTime: 20,
    price: 100,
    proOff: '',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/chains/6/10506/e8cf1c58f2bb217f3d85ff50b7fe39a3_o2_featured_v2.jpg?output-format=webp',
    promoted: '',
  },
  {
    id: 1,
    rName: 'Ashapuri Dining Hall',
    rDetails: 'North Indian,Rajasthani, Beverages,Snackes',
    rating: 3.7,
    dTime: 18,
    price: 100,
    proOff: 'Pro extra 25% OFF',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/chains/3/18349083/33ef24cb9691b41497da9f04e87efff5_o2_featured_v2.jpg? output-format=webp ',
    promoted: 'Promoted',
    href: './card1.html',
  },
  {
    id: 2,
    rName: 'Hotel Ronita Paratha',
    rDetails: 'North Indian',
    rating: 3.9,
    dTime: 34,
    price: 100,
    proOff: '',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/7/6506247/2295d76b2833e20360172156bccedf0e_o2_featured_v2.jpg?output-format=webp',
    promoted: 'Promoted',
  },
  {
    id: 3,
    rName: "MacDonald's",
    rDetails: 'Burger, Fast Food',
    rating: 4.3,
    dTime: 25,
    price: 100,
    proOff: 'Pro extra 25% OFF',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/chains/1/10571/a153257d68de3a60406ac31c98f39ccc_o2_featured_v2.jpg?output-format=webp',
    promoted: '',
  },
  {
    id: 4,
    rName: 'Bebe Di Rasoi-Punjabi',
    rDetails: 'North Indian,Chinese, Biryani',
    rating: 3.7,
    dTime: 29,
    price: 100,
    proOff: 'Pro extra 25% OFF',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/chains/0/19035820/311db57e8ccaf1f085fa5efb96c701f9_o2_featured_v2.jpg?output-format=webp',
    promoted: '',
  },
  {
    id: 5,
    rName: 'Burger King',
    rDetails: 'Burger, Fast food, Beverages,Snackes',
    rating: 4.1,
    dTime: 24,
    price: 100,
    proOff: '',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/chains/8/6506108/a60387cca3992269b628f69c17745d19_o2_featured_v2.jpg?output-format=webp',
    promoted: 'Promoted',
  },
  {
    id: 6,
    rName: "Domino's Pizza",
    rDetails: 'Pizza,Italian,Beverages,Snackes',
    rating: 3.6,
    dTime: 20,
    price: 100,
    proOff: '',
    standardOff: '50% OFF up to 100',
    src: 'https://b.zmtcdn.com/data/pictures/chains/6/10506/e8cf1c58f2bb217f3d85ff50b7fe39a3_o2_featured_v2.jpg?output-format=webp',
    promoted: '',
  },
];

const rList = document.getElementById('main-card-container');
for (let i = 0; i < restaurantData.length; i++) {
  const cards = document.createElement('div');
  // var href = `./cards/card${i}`;
  cards.id = 'cards';
  cards.innerHTML = `
   <a style="text-decoration:none"  href="./cards/card${i}.html" >
  <div class="image">
  <img
    alt="Restaurant Card"
    src="${restaurantData[i].src}"
    loading="lazy"
    class="sc-s1isp7-5 fyZwWD"
  />
</div>
<div class="promoted">${restaurantData[i].promoted}</div>
<div class="pro-off">${restaurantData[i].proOff}</div>
<div class="standard-off">${restaurantData[i].standardOff}</div>
<div class="d-time">${restaurantData[i].dTime} min</div>
<div class="r-name-ratings">
  <div class="r-name">${restaurantData[i].rName}</div>
  <div class="ratings">
    <div>${restaurantData[i].rating}</div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        width="0.6rem"
        height="0.6rem"
        viewBox="0 0 20 20"
        aria-labelledby="icon-svg-title- icon-svg-desc-"
        role="img"
        class="sc-rbbb40-0 fauQLv"
      >
        <title>star-fill</title>
        <path
          d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"
        ></path>
      </svg>
    </div>
  </div>
</div>
<div class="r-details-price">
  <div class="r-details">${restaurantData[i].rDetails}</div>
  <div class="price">
    <span class="material-symbols-outlined" style="font-size: 14px">
      currency_rupee
    </span>
    <div>${restaurantData[i].price} for one </div>
  </div>
</div>
<div class="safe-protocol">
  <div class="incr-img">
    <img
      width="18px"
      height="18px"
      alt="image"
      src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp"
      loading="lazy"
      class="sc-s1isp7-5 fyZwWD"
    />
  </div>
  <div class="last-msg">5425+ orders placed from here recently</div>
  <div class="safety-img">
    <img
      width="48px"
      height="18px"
      alt="image"
      src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp"
      loading="lazy"
      class="sc-s1isp7-5 fyZwWD"
    />
  </div>
</div>
<a>`;

  rList.appendChild(cards);
}

/** ---Slider-1 cards--- */
const cardsForSlider1 = [
  {
    id: 1,
    src: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
    itemName: 'Pizza',
  },

  {
    id: 2,
    src: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
    itemName: 'Biryani',
  },

  {
    id: 3,
    src: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',
    itemName: 'Thali',
  },

  {
    id: 4,
    src: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
    itemName: 'Rolls',
  },

  {
    id: 5,
    src: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
    itemName: 'Burger',
  },

  {
    id: 6,
    src: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',
    itemName: 'Cake',
  },

  {
    id: 7,
    src: 'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png',
    itemName: 'Paneer',
  },

  {
    id: 8,
    src: 'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png',
    itemName: 'Paratha',
  },
];

const sliderbox1 = document.getElementById('tabs-box');
for (let i = 0; i < cardsForSlider1.length; i++) {
  const slider1cards = document.createElement('li');
  slider1cards.className = 'tab';
  slider1cards.innerHTML = `<img
style="border-radius: 50%"
height="150 px"
;
width="150 px"
;
alt="image"
src="${cardsForSlider1[i].src}"
loading="lazy"
class="sc-s1isp7-5 fyZwWD"
/>
<span>${cardsForSlider1[i].itemName}</span>`;
  sliderbox1.appendChild(slider1cards);
}

/** ---Slider-2 cards rendering logic--- */
const cardsForSlider2 = [
  {
    id: 1,
    src: 'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252811.png?output-format=webp',
    Name: "Domino's Pizza",
    time: 51,
  },

  {
    id: 2,
    src: 'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png?output-format=webp',
    Name: 'Burger King',
    time: 22,
  },

  {
    id: 3,
    src: 'https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png?output-format=webp',
    Name: 'KFC',
    time: 40,
  },

  {
    id: 4,
    src: 'https://b.zmtcdn.com/data/brand_creatives/logos/5a27a3f43344ecdb49c575d0284ebc40_1629438578.png?output-format=webp',
    Name: 'Rolls Mania',
    time: 25,
  },

  {
    id: 5,
    src: 'https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp',
    Name: 'Pizza Hut',
    time: 35,
  },

  {
    id: 6,
    src: 'https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471832.png?output-format=webp',
    Name: 'Subway',
    time: 30,
  },

  {
    id: 7,
    src: 'https://b.zmtcdn.com/data/brand_creatives/logos/d3c593271933bba9027ab27e60e7e9c9_1605068098.png?output-format=webp',
    Name: 'Haldiram ',
    time: 22,
  },
];

const sliderbox2 = document.getElementById('tabs-box1');
for (let j = 0; j < cardsForSlider2.length; j++) {
  const slider2cards = document.createElement('li');
  slider2cards.className = 'tab1';
  slider2cards.innerHTML = `<div class="card2">
  <img
    style="width: 140px; height: 140px; border-radius: 50%"
    alt="McDonald's"
    src="${cardsForSlider2[j].src}"
    loading="lazy"
    class="sc"
  />
</div>
<div class="brand-name">${cardsForSlider2[j].Name}</div>
  <div class="card2-time">${cardsForSlider2[j].time}min</div>
  `;
  sliderbox2.appendChild(slider2cards);
}

/** ---slider-1 Logic--- */
const tabsBox = document.querySelector('#tabs-box');
const allTabs = tabsBox.querySelectorAll('.tab');
const arrowIcons = document.querySelectorAll('.icon i');

let isDragging = false;

const handleIcons = (scrollVal) => {
  const maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? 'none' : 'flex';
  arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex';
};

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
    tabsBox.scrollLeft += icon.id === 'left' ? -180 : 180;
    const scrollWidth = tabsBox.scrollLeft;
    handleIcons(scrollWidth);
  });
});

allTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabsBox.querySelector('.active').classList.remove('active');
    tab.classList.add('active');
  });
});

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add('dragging');
  tabsBox.scrollLeft -= e.movementX; // Not understood
  handleIcons(tabsBox.scrollLeft);
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove('dragging');
};

// const dragStart = (e) => {
//   isDragging = true;
//   dragging(e);
// };

// eslint-disable-next-line no-return-assign
tabsBox.addEventListener('mousedown', () => (isDragging = true)); // Not understood
tabsBox.addEventListener('mousemove', dragging); // Not understood
document.addEventListener('mouseup', dragStop); // Not understood

/** ---Slider-2--- */
const tabsBox1 = document.querySelector('#tabs-box1');
const allTabs1 = tabsBox1.querySelectorAll('.tab1');
const arrowIcons1 = document.querySelectorAll('.icon1 i');

const handleIcons1 = (scrollVal) => {
  const maxScrollableWidth = tabsBox1.scrollWidth - tabsBox1.clientWidth;
  arrowIcons1[0].parentElement.style.display = scrollVal <= 0 ? 'none' : 'flex';
  arrowIcons1[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex';
};

arrowIcons1.forEach((icon1) => {
  icon1.addEventListener('click', () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
    // const iconId1 = icon1.id === 'left' ? -180 : 180;
    tabsBox1.scrollLeft += icon1.id === 'left' ? -180 : 180;
    const scrollWidth = tabsBox1.scrollLeft;
    handleIcons1(scrollWidth);
  });
});

allTabs1.forEach((tab1) => {
  tab1.addEventListener('click', () => {
    tabsBox1.querySelector('.active').classList.remove('active');
    tab1.classList.add('active');
  });
});

let isDragging1 = false;

const dragging1 = (e) => {
  if (!isDragging1) return;
  tabsBox1.classList.add('dragging1');
  tabsBox1.scrollLeft -= e.movementX; // Not understood
  handleIcons1(tabsBox1.scrollLeft);
};

const dragStop1 = () => {
  isDragging1 = false;
  tabsBox1.classList.remove('dragging');
};

const dragStart1 = () => {
  isDragging1 = true;
  return isDragging1;
};

tabsBox1.addEventListener('mousedown', dragStart1); // Not understood
tabsBox1.addEventListener('mousemove', dragging1); // Not understood
document.addEventListener('mouseup', dragStop1); // Not understood

// ---Responsive code-----
const logInDisplay = () => {
  const login = document.getElementById('log-in');
  login.classList.toggle('log-in-display-responsive');
  const elem1 = document.getElementById('service-type');
  const elem2 = document.getElementById('l-d');
  const elem3 = document.getElementById('sp');
  const elem4 = document.getElementById('wmc');
  const elem5 = document.getElementById('wm');
  const elem6 = document.getElementById('dr');
  const elem7 = document.getElementById('acc');
  const elem8 = document.getElementById('foot');

  elem1.classList.toggle('empty');
  elem2.classList.toggle('empty');
  elem3.classList.toggle('empty');
  elem4.classList.toggle('empty');
  elem5.classList.toggle('empty');
  elem6.classList.toggle('empty');
  elem7.classList.toggle('empty');
  elem8.classList.toggle('empty');
};

const btn = document.getElementById('btn');
btn.addEventListener('click', logInDisplay);
