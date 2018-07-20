
	let catArray = [{name: "Kagami", image: "images/kagami.jpg"}, {name: "Makai Neko", image: "images/makai-neko.jpg"}, {name: "Belly Rubb", image: "images/belly.jpg"}, {name: "Bleper", image: "images/blep.jpg"}, {name: "Boss Cat",  image: "images/boss.jpg"}, {name: "Gardener", image: "images/garden.jpg"}, {name: "Hostess", image: "images/greeting.jpg"}, {name: "Fascinator", image: "images/hat.jpg"}, {name: "Helper", image: "images/helping.jpg"}, {name: "Cyborg", image: "images/laser-eye.jpg"}, {name: "Gravity Assist", image: "images/papasan.jpg"}, {name: "Super Spy", image: "images/spying.jpg"}];

	let Cat = function(num, name, image){
		this.num = num;
		this.name = name;
		this.image = image;
		this.count = 0;
		this.text = `You have clicked ${this.name} ${this.count} times!`;
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
		row = document.getElementById('catHolder');
	
	startButton.addEventListener('click', function(){
		startButton.classList.add('hidden');
		startText.classList.add('hidden');
		
	});