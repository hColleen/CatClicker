
	let catArray = [{name: "Kagami", image: "images/kagami.jpg"}, {name: "Makai Neko", image: "images/makai-neko.jpg"}, {name: "Belly Rubb", image: "images/belly.jpg"}, {name: "Bleper", image: "images/blep.jpg"}, {name: "Boss Cat",  image: "images/boss.jpg"}, {name: "Gardener", image: "images/garden.jpg"}, {name: "Hostess", image: "images/greeting.jpg"}, {name: "Fascinator", image: "images/hat.jpg"}, {name: "Helper", image: "images/helping.jpg"}, {name: "Cyborg", image: "images/laser-eye.jpg"}, {name: "Gravity Assist", image: "images/papasan.jpg"}, {name: "Super Spy", image: "images/spying.jpg"}];

	let Cat = function(num, name, image){
		this.num = num;
		this.name = name;
		this.image = image;
		this.count = 0;
		this.text = `You have clicked ${this.name}<br />${this.count} times!`;
	};
	
	function getRandomCat(arr){
		return arr[Math.floor(Math.random() * arr.length)];
	}
	
	let catsDisplay = [];
	
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
	
	let startButton = document.getElementById('gameStart'),
		startText = document.getElementById('startText'),
		row = document.getElementById('catHolder'),
		cat,
		catsHTML=[];
		
	for (var i = 0; i < catsDisplay.length; i ++){
		cat = catsDisplay[i];
		let catInfo = `<div class = 'clickCat'><h3>${cat.name}</h3><img src = ${cat.image} /> <p>${cat.text}</div>`;
		catsHTML.push(catInfo);
	}
	
	let pics = document.querySelectorAll('.clickCat');
	
	pics.forEach(function(pic){
		pic.addEventListener('click', function(e){
			count += 1;
		});
	});

	row.innerHTML = catsHTML.join(" ");
	
	startButton.addEventListener('click', function(){
		startButton.classList.add('hidden');
		startText.classList.add('hidden');
		row.classList.remove('hidden');
		row.classList.add('show');
	});
	
	
	
	
