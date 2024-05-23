let reviews = [
    {
      id: 1,
      name: 'susan smith',
      profession: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      profession: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      profession: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      profession: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

let img = document.querySelector('img');
let name = document.getElementById('name');
let profession = document.getElementById('profession');
let info = document.getElementById('info');

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const randomBtn = document.querySelector('.random-btn');

let currentvalue=0;
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentvalue];
    img.src = item.img;
    name.textContent = item.name;
    profession.textContent = item.profession;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    name.textContent = item.name;
    profession.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  leftBtn.addEventListener('click', function () {
    currentvalue++;
    if (currentvalue > reviews.length - 1) {
      currentvalue = 0;
    }
    showPerson(currentvalue);
  });
  // show prev person
  rightBtn.addEventListener('click', function () {
    currentvalue--;
    if (currentvalue < 0) {
      currentvalue = reviews.length - 1;
    }
    showPerson(currentvalue);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentvalue = Math.floor(Math.random() * reviews.length);
    showPerson(currentvalue);
  });