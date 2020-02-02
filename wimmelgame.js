document.querySelector('#start').addEventListener("click", function(event){
	pickTasks(); 
	event.target.innerHTML="skip"; 
})

document.querySelector('#wimmelbild').addEventListener("click", shoot);

document.querySelector('#godbless').addEventListener("click", function(event){
	document.querySelector('#wimmelbild').src = "imgs/wimmelbild.solution.png"
})

var task = 0;
var tasks = {   1:"find the humpback whale", 
 				2:"find the anteater", 
 				3:"find the t-rex",
 				4:"find the pufferfish",
 				5:"find the platypus",
 				6:"find the tiger shark",
 				7:"find the krill",
 				8:"find Hobbiton",
 				9:"find Bigfoot"  }

var target = null

function pickTasks(){
	if (task>=9){
		task=0
	}
	task++;
	const taskOutput = tasks[task];
	document.querySelector('#task').innerHTML = taskOutput;
	const targetOutput = taskTarget[task];
	target = targetOutput;
};


var taskTarget = {  1:"humpback",
					2:"anteater",
					3:"trex",
					4:"pufferfish",
					5:"platypus",
					6:"tigershark",
					7:"krill",
					8:"hobbiton",
					9:"sasquatch"  }

var targetAreas = document.querySelectorAll('area');

var wrong = new Audio('sfx/wrong-answer-sound-effect.mp3')
var correct = new Audio('sfx/correct-answer.mp3')
var shootcounter = 0
var solved = 0

function shoot(){
	wrong.play();
	alert("nope");
	shootcounter++;	
}

function yay() {
	correct.play();
	solved++;
	document.querySelector('span#point').innerHTML = solved;
	document.querySelector('#start').innerHTML = "next";
	alert("yay correct!");
	if (solved==9) {
		alert("congrats! you solved all tasks, keep looking if you want some easter eggs")
	}

}

var pokemon = new Audio('sfx/Pokemon Theme Song 1 German (FULL SONG).mp3')

var lost = new Audio('sfx/LOST - Suspense Riser  Thud - Sound Effect.mp3')

for(var targetArea of targetAreas) {
	targetArea.addEventListener("click", function(event){
		event.preventDefault();

		var name = event.target.getAttribute('title')
		if (name =="lucy"){
			document.querySelector('#gurl').style.display="block"
			alert("woo ’\\(•.•)/` hoo")
		}
		if (name =="pikachu"){
			pokemon.play();
			alert("woo ’\\(•.•)/` hoo")
		}
		if (name =="the hatch"){
			lost.play();
			var input = prompt("SYSTEM FAILURE", ">: ");
			if (input==">: 4 8 15 16 23 42") {
			} else { 
			document.querySelector('.death').style.display="block"
			}
		}
			//alert("woo ’\\(•.•)/` hoo")
		
		if(task==0){
			return;
		}
		if (name === target){
			yay();
		} else { 
			shoot();
		}
	})
}
//liebe grüße
