const heroTextScram_1 = document.getElementById("hero-text-scram-1");
const heroTextScram_2 = document.getElementById("hero-text-scram-2");
const heroTextNoScram_1 = document.getElementById("hero-text-noscram-1");
const heroTextNoScram_2 = document.getElementById("hero-text-noscram-2");

const mindMapTitle = document.getElementById("mindMapTitle");

var scrambleText_1 = new ScrambleText(
	heroTextScram_1,
	{
		timeOffset : 80,
		chars:["b", "B","r", "R","a", "A","n", "N","d", "D",]
	}
).stop();

var scrambleText_2 = new ScrambleText(
	heroTextScram_2,
	{
		timeOffset : 100,
		chars:["b", "B","r", "R","a", "A","n", "N","d", "D",]
	}
).stop();

let tl_hero = gsap.timeline();

tl_hero
    .add( ()=> scrambleText_1.play().start())
    .add( ()=> scrambleText_2.play().start())
    .from(heroTextNoScram_1, {delay: 1, y: "2rem", duration:".5"})
    .from(heroTextNoScram_2, {y: "2rem", duration:".5"},"<")
