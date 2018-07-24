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
};

//select random cats from array	
function getRandomCat(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//define variables needed to create and display cat images and names
let catsDisplay = [], cat, catsHTML = [], catCount = 5;

//create cats		
function createCat() {
    for (let i = 0; i < catCount; i++) {
        let cat = getRandomCat(catArray);
        num = i;
        name = cat.name;
        image = cat.image;
        cat = new Cat(num,name,image);
        catsDisplay.push(cat);
    }
}

createCat();

//cat HTML created	
for (var i = 0; i < catsDisplay.length; i++) {
    cat = catsDisplay[i];
    let catInfo = `<div class = 'clickCat hidden'><h3>${cat.name}</h3><img src = ${cat.image} id = "clickHere" /><p class = "holderText">0 clicks</p></div>`;
    catsHTML.push(catInfo);
}

//create list of cat names for list
let catsName = [];
for (let i = 0; i < catsDisplay.length; i++) {
    catName = catsDisplay[i].name;
    let catNameHTML = `<div class = "catNameList"><h2>${catName}</h2></div>`;
    catsName.push(catNameHTML);
}

//VIEW		

let catListHolder = document.getElementById('catList');
catListHolder.innerHTML = catsName.join(" ");

let box = document.getElementById('catHolder');
box.innerHTML = catsHTML.join(" ");


//OCTOPUS

//add event listener to images and update number of clicks	
for (let i = 0; i < catsHTML.length; i ++){
	let pics = box.getElementsByTagName("img"),
		pic = pics[i],
		clickCat = document.getElementsByClassName('clickCat'),
		countText = clickCat[i],
		catText = document.createElement('p'),
		holderText = document.getElementsByClassName('holderText'),
		tempText = holderText[i],
		count = 0;
	countText.appendChild(catText);
	pic.addEventListener('click', function(e){
		count += 1;
		tempText.classList.add('hidden');
		catText.textContent = count + " clicks";
	});
};

//add click listener to cat names to display one cat and count

for (let i = 0; i < catsName.length; i ++){
	let names = catListHolder.getElementsByTagName('div'),
		nameLink = names[i],
		catsList = document.getElementsByClassName('clickCat'),
		displayCat = catsList[i]
		displayedCat = [];
	nameLink.addEventListener('click', function(){
		displayCat.classList.remove('hidden');
		displayedCat.push(displayCat);
		if(displayedCat.length == 2){
			displayedCat[0].classList.add('hidden');
			displayedCat.splice(0, 1);
		}
	});
};