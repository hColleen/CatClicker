
	let catArray = [{name: "Kagami", image: "images/kagami.jpg"}, {name: "Makai Neko", image: "images/makai-neko.jpg"}, {name: "Belly Rubb", image: "images/belly.jpg"}, {name: "Bleper", image: "images/blep.jpg"}, {name: "Boss Cat",  image: "images/boss.jpg"}, {name: "Gardener", image: "images/garden.jpg"}, {name: "Hostess", image: "images/greeting.jpg"}, {name: "Fascinator", image: "images/hat.jpg"}, {name: "Helper", image: "images/helping.jpg"}, {name: "Cyborg", image: "images/laser-eye.jpg"}, {name: "Gravity Assist", image: "images/papasan.jpg"}, {name: "Super Spy", image: "images/spying.jpg"}];

	let Cat = function(num, name, image){
		this.num = num;
		this.name = name;
		this.image = image;
	};
	
	function getRandomCat(arr){
		return arr[Math.floor(Math.random() * arr.length)];
	}
	
	let catsDisplay = [],
		row = document.getElementById('catHolder'),
		cat,
		catsHTML=[];
	
	function createCat (){
		for (let i = 0; i < 5; i ++){
			let cat = getRandomCat(catArray);
			num = i;
			name = cat.name;
			image = cat.image;
			cat = new Cat (num, name, image);
			catsDisplay.push(cat);
		}
	}
	
	createCat();
	
	for (var i = 0; i < catsDisplay.length; i ++){
		cat = catsDisplay[i];
		let catInfo = `<div class = 'clickCat'><h3>${cat.name}</h3><img src = ${cat.image} /><p class = "clickText">0 clicks</p></div>`;
		catsHTML.push(catInfo);
	}
	
	row.innerHTML = catsHTML.join(" ");
	
	//TODO: loop
	
	let pics = document.querySelectorAll('.clickCat');
	pics.forEach(function(pic){
		let count = 0;
			let catText = document.querySelector('.clickText');
			let clickText = document.createElement('div');
			clickText.text = count + " clicks";
		pic.addEventListener('click', function(e){
			count += 1;
			//catText.classList.add('hidden');
			console.log(clickText);
		});
	});

	let startButton = document.getElementById('gameStart'),
		startText = document.getElementById('startText');
	
	startButton.addEventListener('click', function(){
		startButton.classList.add('hidden');
		startText.classList.add('hidden');
		row.classList.remove('hidden');
		row.classList.add('show');
	});
	
	
	
	
