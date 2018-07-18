	var Cat = function(num, name, image){
		this.num = num;
		this.name = name;
		this.image = image;
		this.count = 0;
	};
	
	let catOne = new Cat ("One", "Kagami", "images/kagami.jpg");
		catTwo = new Cat ("Two", "Makai Neko", "images/makai-neko.jpg");
		
	let row = document.getElementById('catHolder');
	
	row.innerHTML = `<div id = 'catOne'><h2>This is ${catOne.name}</h2><img src = '${catOne.image}'><p>You have clicked <span id = '${catOne.num}'>${catOne.count}</span> times so far.</p></div><div id = 'catTwo'><h2>This is ${catTwo.name}</h2><img src = '${catTwo.image}'><p>You have clicked <span id = '${catTwo.num}'>${catTwo.count}</span> times so far.</p></div>`;
	
	let clickOne = document.getElementById('catOne'),
		clickTwo = document.getElementById('catTwo'),
		counterOne = document.getElementById('One'),
		counterTwo = document.getElementById('Two');
	
	clickOne.addEventListener('click', function(){
		catOne.count += 1;
		counterOne.innerHTML = `${catOne.count}`;
	});
	
	clickTwo.addEventListener('click', function(){
		catTwo.count += 1;
		counterTwo.innerHTML = `${catTwo.count}`;
	});