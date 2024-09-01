let pv = document.getElementById('prev');
let nt = document.getElementById('next');
let hand = document.getElementById('s2');
images = [
  'https://www.svgrepo.com/show/29542/fist.svg',
  'https://www.svgrepo.com/show/31368/palm.svg',
  'https://www.svgrepo.com/show/314121/hand-peace.svg',
];

myArray = [0, 0, 0];

let reset = document.getElementById('reset');
reset.addEventListener('click', function () {
  let niw = document.getElementById('niw');
  let sol = document.getElementById('sol');
  let ward = document.getElementById('ward');
  niw.textContent = 0;
  sol.textContent = 0;
  ward.textContent = 0;
  myArray[0] = 0;
  myArray[1] = 0;
  myArray[2] = 0;
  localStorage.setItem('result', JSON.stringify(myArray));
  window.location.href = 'index.html';
});

let imag1 = function () {
  let img2 = document.getElementById('img2');
  hand.textContent = '';
  img2.src = images[0];
  img2.alt = 'i1';
  img2.style.width = '170px';
  img2.style.rotate = '90deg';
  img2.style.transform = 'scale(-1)';
  hand.appendChild(img2);
};
let imag2 = function () {
  let img2 = document.getElementById('img2');
  hand.textContent = '';
  img2.src = images[1];
  img2.alt = 'i2';
  img2.style.rotate = '360deg';
  img2.style.transform = 'scaleX(-1)';
  img2.style.width = '200px';
  hand.appendChild(img2);
};
let imag3 = function () {
  let img2 = document.getElementById('img2');
  hand.textContent = '';
  img2.src = images[2];
  img2.alt = 'i3';
  img2.style.rotate = '360deg';
  img2.style.transform = 'scaleX(-1)';
  img2.style.width = '200px';
  hand.appendChild(img2);
};

let r2 = document.getElementById('RPSN2');

pv.addEventListener('click', function () {
  let img2 = document.getElementById('img2');
  if (img2.alt == 'i1') {
    imag2();
    r2.textContent = 'Paper';
  } else if (img2.alt == 'i2') {
    imag3();
    r2.textContent = 'Scicssors';
  } else if (img2.alt == 'i3') {
    imag1();
    r2.textContent = 'Rock';
  }
});
nt.addEventListener('click', function () {
  let img2 = document.getElementById('img2');
  if (img2.alt == 'i1') {
    imag3();
    r2.textContent = 'Scicssors';
  } else if (img2.alt == 'i3') {
    imag2();
    r2.textContent = 'Paper';
  } else if (img2.alt == 'i2') {
    imag1();
    r2.textContent = 'Rock';
  }
});

let SB = document.getElementById('SB');
let hand1 = document.getElementById('RPS1');
let ig1 = function () {
  let img1 = document.getElementById('img1');
  hand1.textContent = '';
  img1.src = images[0];
  img1.alt = 't1';
  img1.style.width = '170px';
  img1.style.rotate = '90deg';
  img1.style.transform = 'scale(-1)';
  hand1.appendChild(img1);
};
let ig2 = function () {
  let img1 = document.getElementById('img1');
  hand1.textContent = '';
  img1.src = images[1];
  img1.alt = 't2';
  img1.style.rotate = '360deg';
  img1.style.transform = 'scaleX(-1)';
  img1.style.width = '200px';
  hand1.appendChild(img1);
};
let ig3 = function () {
  let img1 = document.getElementById('img1');
  hand1.textContent = '';
  img1.src = images[2];
  img1.alt = 't3';
  img1.style.rotate = '360deg';
  img1.style.transform = 'scaleX(-1)';
  img1.style.width = '200px';
  hand1.appendChild(img1);
};

const MOB = [ig1, ig2, ig3];

let f0 = function () {
  pv.style.display = 'none';
  nt.style.display = 'none';
  let ani1 = document.getElementById('img1');
  ani1.style.animation = 'shake 3s ease';
  imag1();
  let ani2 = document.getElementById('img2');
  ani2.style.animation = 'shake1 3s ease';
};

let f1 = function () {
  let img2 = document.getElementById('img2');
  if (img2.alt == 'i1') {
    f0();
    imag1();
  } else if (img2.alt == 'i2') {
    f0();
    imag2();
  } else {
    f0();
    imag3();
  }
};

let RN1 = function () {
  let RPSN1 = document.getElementById('RPSN1');
  let img1 = document.getElementById('img1');
  if (img1.alt == 't1') {
    RPSN1.textContent = 'Rock';
  } else if (img1.alt == 't2') {
    RPSN1.textContent = 'Paper';
  } else {
    RPSN1.textContent = 'Scissors';
  }
};
let ret = function () {
  let returnedAr = localStorage.getItem('result');
  let niw = document.getElementById('niw');
  let sol = document.getElementById('sol');
  let ward = document.getElementById('ward');
  if (!returnedAr) {
    console.log('Creating New Array in localStorage.');
    niw.textContent = 0;
    sol.textContent = 0;
    ward.textContent = 0;
    myArray[0] = 0;
    myArray[1] = 0;
    myArray[2] = 0;
    localStorage.setItem('result', JSON.stringify(myArray));
  } else {
    let returnedAr = localStorage.getItem('result');
    let itemAr = JSON.parse(returnedAr);
    console.log(itemAr);
    let niw = document.getElementById('niw');
    let sol = document.getElementById('sol');
    let ward = document.getElementById('ward');
    niw.textContent = itemAr[0];
    sol.textContent = itemAr[1];
    ward.textContent = itemAr[2];
  }
};
ret();

let draw = function () {
  let ani1 = document.getElementById('img1');
  ani1.style.animation = 'shake 3s ease';
  imag1();
  let ani2 = document.getElementById('img2');
  ani2.style.animation = 'shake1 3s ease';
  let bd = document.getElementById('board');
  bd.style.color = 'grey';
  let ward = document.getElementById('ward');
  let niw = document.getElementById('niw');
  let sol = document.getElementById('sol');
  wd = ward.textContent;
  nw = niw.textContent;
  sl = sol.textContent;
  ward.textContent = parseInt(wd) + 1;
  myArray[2] = ward.textContent;
  niw.textContent = parseInt(nw) + 0;
  myArray[0] = niw.textContent;
  sol.textContent = parseInt(sl) + 0;
  myArray[1] = sol.textContent;
  console.log(myArray);
  localStorage.setItem('result', JSON.stringify(myArray));
};
let wan = function () {
  let won1 = document.getElementById('won');
  won1.style.animation = 'aon 1s ease';
  won1.style.animationFillMode = 'forwards';
  let rp = document.getElementById('RPS2');
  rp.style.backgroundColor = 'green';
  let rp2 = document.getElementById('RPS1');
  rp2.style.backgroundColor = 'red';
};
let win = function () {
  let ani1 = document.getElementById('img1');
  ani1.style.animationPlayState = 'Paused';
  imag1();
  let ani2 = document.getElementById('img2');
  ani2.style.animation = 'shake1 3s ease';
  wan();
  let ward = document.getElementById('ward');
  let niw = document.getElementById('niw');
  let sol = document.getElementById('sol');
  wd = ward.textContent;
  nw = niw.textContent;
  sl = sol.textContent;
  ward.textContent = parseInt(wd) + 0;
  myArray[2] = ward.textContent;
  niw.textContent = parseInt(nw) + 1;
  myArray[0] = niw.textContent;
  sol.textContent = parseInt(sl) + 0;
  myArray[1] = sol.textContent;
  console.log(myArray);
  localStorage.setItem('result', JSON.stringify(myArray));
};

let los = function () {
  let won1 = document.getElementById('won');
  won1.style.backgroundColor = 'red';
  won1.style.animation = 'aon 1s ease';
  won1.style.animationFillMode = 'forwards';
  let rp = document.getElementById('RPS2');
  rp.style.backgroundColor = 'red';
  let rp2 = document.getElementById('RPS1');
  rp2.style.backgroundColor = 'green';
};
let lose = function () {
  let ani1 = document.getElementById('img1');
  ani1.style.animation = 'shake 3s ease';
  imag1();
  let ani2 = document.getElementById('img2');
  ani2.style.animationPlayState = 'paused';
  let bd = document.getElementById('board');
  bd.style.color = 'red';
  los();
  let ward = document.getElementById('ward');
  let niw = document.getElementById('niw');
  let sol = document.getElementById('sol');
  wd = ward.textContent;
  nw = niw.textContent;
  sl = sol.textContent;
  ward.textContent = parseInt(wd) + 0;
  myArray[2] = ward.textContent;
  niw.textContent = parseInt(nw) + 0;
  myArray[0] = niw.textContent;
  sol.textContent = parseInt(sl) + 1;
  myArray[1] = sol.textContent;
  console.log(myArray);
  localStorage.setItem('result', JSON.stringify(myArray));
};

let f2 = function () {
  let img1 = document.getElementById('img1');
  let img2 = document.getElementById('img2');
  if (img1.alt == 't1' && img2.alt == 'i1') {
    let bd = document.getElementById('board');
    bd.textContent = 'DRAW';
    draw();
    imag1();
  } else if (img1.alt == 't2' && img2.alt == 'i2') {
    let bd = document.getElementById('board');
    bd.textContent = 'DRAW';
    draw();
    imag2();
  } else if (img1.alt == 't3' && img2.alt == 'i3') {
    let bd = document.getElementById('board');
    bd.textContent = 'DRAW';
    draw();
    imag3();
  } else if (img1.alt == 't1' && img2.alt == 'i2') {
    let bd = document.getElementById('board');
    bd.textContent = 'ViCTORY';
    win();
    imag2();
  } else if (img1.alt == 't1' && img2.alt == 'i3') {
    let bd = document.getElementById('board');
    bd.textContent = 'LOSE';
    lose();
    imag3();
  } else if (img1.alt == 't2' && img2.alt == 'i1') {
    let bd = document.getElementById('board');
    bd.textContent = 'LOSE';
    lose();
    imag1();
  } else if (img1.alt == 't2' && img2.alt == 'i3') {
    let bd = document.getElementById('board');
    bd.textContent = 'ViCTORY';
    win();
    imag3();
  } else if (img1.alt == 't3' && img2.alt == 'i1') {
    let bd = document.getElementById('board');
    bd.textContent = 'ViCTORY';
    win();
    imag1();
  } else if (img1.alt == 't3' && img2.alt == 'i2') {
    let bd = document.getElementById('board');
    bd.textContent = 'LOSE';
    lose();
    imag2();
  } else {
    let bd = document.getElementById('board');
    bd.textContent = 'ERROR';
  }
  RN1();
};
let RM = function () {
  const randomIndex = Math.floor(Math.random() * MOB.length);
  MOB[randomIndex]();
  f2();
};

let dr = function () {
  let sn = document.getElementById('SN');
  SB.style.display = 'none';
  let rel = document.createElement('div');
  rel.id = 'rd';
  sn.appendChild(rel);
  let img = document.createElement('img');
  img.src = 'https://www.svgrepo.com/show/20284/refresh.svg';
  img.alt = 'kalo';
  img.style.width = '85px';
  img.style.height = '85px';
  rel.appendChild(img);
  if (img.alt == 'kalo') {
    img.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
  }
};

SB.addEventListener('click', function () {
  f1();
  dr();
  setTimeout(function () {
    RM();
  }, 3000);
});
