document.addEventListener("DOMContentLoaded", function(){

	var Cat = function(number, name, count, image){
		this.number = number;
		this.name = name;
		this.count = count;
		this.image = image;
		this.text = `<div id = 'cat${this.number}'><h2>This is ${this.name}</h2><img src = ${this.image}><p>You have clicked ${this.count} times so far.</p></div>`;
	};
	
	Cat.prototype.click = function(){
		this.image.addEventListener('click', function(){
			this.count +=1;
		});
	};
	
	let catOne = new Cat ("One", "Kagami", 0, "images/kagami.jpg"),
		catTwo = new Cat ("Two", "Makai Neko", 0, "images/makai-neko.jpg");
		
	let row = document.getElementById('catHolder');
	
	row.innerHTML = catOne.text + catTwo.text;

});