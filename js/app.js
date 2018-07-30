//MODEL
//array of possible cat names and images
let catArray = [{
    name: "Kagami",
    image: "images/kagami.jpg"
}, {
    name: "Makai Neko",
    image: "images/makai-neko.jpg"
}, {
    name: "Belly Rubb",
    image: "images/belly.jpg"
}, {
    name: "Bleper",
    image: "images/blep.jpg"
}, {
    name: "Boss Cat",
    image: "images/boss.jpg"
}, {
    name: "Gardener",
    image: "images/garden.jpg"
}, {
    name: "Hostess",
    image: "images/greeting.jpg"
}, {
    name: "Fascinator",
    image: "images/hat.jpg"
}, {
    name: "Helper",
    image: "images/helping.jpg"
}, {
    name: "Cyborg",
    image: "images/laser-eye.jpg"
}, {
    name: "Gravity Assist",
    image: "images/papasan.jpg"
}, {
    name: "Super Spy",
    image: "images/spying.jpg"
}];

//Cat object
let Cat = function(num, name, image) {
    this.num = num;
    this.name = name;
    this.image = image;
	this.count = 0;
};
Cat.prototype.countUpdate = function(){
	this.count += 1;
}
//select random cats from array, preventing repeats (tutorial from here: https://inteist.com/javascript-generate-pseudo-random-set/ )

function numArr(limit){
	list = [];
	for (let i = 0; i < limit; i ++){
		list.push(i);
	}
	return list;
}

function shuffle(array){
	let i = array.length,
		j = 0,
		temp;
	while (i --){
		j = Math.floor(Math.random() * (i + 1))
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}


let getRandomCat = shuffle(numArr(catArray.length));

//define variables needed to create and display cat images and names
let catsDisplay = [], cat, catsHTML = [], catCount = 5;

//create cats		
function createCat() {
    for (let i = 0; i < catCount; i++) {
        let cat = catArray[getRandomCat[i]];
        num = i;
        name = cat.name;
        image = cat.image;
        cat = new Cat(num,name,image);
        catsDisplay.push(cat);
    }
}

createCat();

//VIEW	

//cat HTML created	
for (var i = 0; i < catsDisplay.length; i++) {
    cat = catsDisplay[i];
    let catInfo = `<div class = 'clickCat hidden'><h3 id = '${cat.num}'>${cat.name}</h3><img src = ${cat.image} id = "clickHere" /><p>${cat.count} clicks</p></div>`;
    catsHTML.push(catInfo);
}

//create list of cat names for list
let catsName = [];
for (let i = 0; i < catsDisplay.length; i++) {
    catName = catsDisplay[i].name;
    let catNameHTML = `<div class = "catNameList"><h2>${catName}</h2></div>`;
    catsName.push(catNameHTML);
}

let catListHolder = document.getElementById('catList');
catListHolder.innerHTML = catsName.join(" ");

let box = document.getElementById('catHolder');
box.innerHTML = catsHTML.join(" ");


//OCTOPUS

//add event listener to images and update number of clicks	

for (let i = 0; i < catsHTML.length; i++) {
    let pics = box.getElementsByTagName("img")
      , pic = pics[i]
      , clickCat = document.getElementsByClassName('clickCat')
      , countText = box.getElementsByTagName("p")
      , catText = countText[i];
    pic.addEventListener('click', function(e) {
        catsDisplay[i].countUpdate();
		catText.textContent =  catsDisplay[i].count + " clicks";
    });
}

//add click listener to cat names to display one cat and count

let displayedCat = []

for (let i = 0; i < catsName.length; i++) {
    let names = catListHolder.getElementsByTagName('div')
      , nameLink = names[i]
      , catsList = document.getElementsByClassName('clickCat')
      , displayCat = catsList[i];
    nameLink.addEventListener('click', function() {
        displayCat.classList.remove('hidden');
        displayCat.classList.add('show');
        displayedCat.push(displayCat);
        if (displayedCat.length == 2) {
            displayedCat[0].classList.remove('show');
            displayedCat[0].classList.add('hidden');
            displayedCat.splice(0, 1);
        }
    });
}

//add listener to admin button and show input area

let catIDTextArr = []
  , catIDText
  , currentCat = document.getElementsByClassName('show')
  , adminButton = document.getElementById('adminButton')
  , adminInput = document.getElementById('adminInput')
  , catNameChange = document.getElementById('catNameChange')
  , catPicChange = document.getElementById('picChange')
  , catClickChange = document.getElementById('countChange');
  
checkCat = function (){
	if (displayedCat.length !== 1){
		alert("Select Cat");
	} else {
    adminInput.classList.remove('hidden');
    adminButton.classList.add('hidden');
	let currentCatHTML = currentCat.item(0).innerHTML
	  , catIdNumArr = currentCatHTML.split("");
	  catIDTextArr.push(catIdNumArr.splice(8,1));
	  catIDText = catIDTextArr[0];
	  let currentCatName = catsDisplay[catIDText].name
	  , currentCatImage = catsDisplay[catIDText].image
	  , currentCatCount = catsDisplay[catIDText].count;
	  catNameChange.value = currentCatName;
	  catPicChange.value = currentCatImage;
	  catClickChange.value = currentCatCount;
	}
};
  
  
adminButton.addEventListener('click', checkCat);


//clear entries to admin form and hide it
let cancelButton = document.getElementById("cancel");
cancelButton.addEventListener('click', function () {
    adminButton.classList.remove('hidden');
    adminInput.classList.add('hidden');
});

//take entries from form and update display
let updateButton = document.getElementById('update');
updateButton.addEventListener('click', function () {
	catsDisplay[catIDText].name = catNameChange.value;
	catsDisplay[catIDText].image = catPicChange.value;
	let countChangeNum = parseFloat( catClickChange.value);
	catsDisplay[catIDText].count = countChangeNum;
	let catName = document.getElementsByClassName("catNameList");
	catName[catIDText].innerHTML = `<h2>${catsDisplay[catIDText].name}</h2>`;
	let catHTML = document.getElementsByClassName("clickCat");
	catHTML[catIDText].innerHTML = `<div class = "clickCat show"><h3 id = "${catsDisplay[catIDText].num}">${catsDisplay[catIDText].name}</h3><img src = ${catsDisplay[catIDText].image} id ="clickHere" /><p>${catsDisplay[catIDText].count} clicks</p></div>`;
	let pics = box.getElementsByTagName("img")
	, pic = pics[catIDText]
	, countText = box.getElementsByTagName("p")
	, catText = countText[catIDText];
	pic.addEventListener('click', function() {
        catsDisplay[catIDText].countUpdate();
		catText.textContent =  catsDisplay[catIDText].count + " clicks";
    });
	catIDTextArr.splice(0, 1);
	currentCat[0].remove;
	adminButton.classList.remove('hidden');
	adminInput.classList.add('hidden');
});