let catClicker = document.getElementById('clicker');
let counter = document.getElementById('counter');
count = 0;

catClicker.addEventListener('click', function(){
	count += 1;
	counter.innerHTML = `You have clicked ${count} times so far`;
});
	