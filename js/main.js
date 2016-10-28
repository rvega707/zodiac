// array of object to store data 
var signArray = [
	{
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.jpg"
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.jpg"

	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, unyielding",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		fortune: "Security, Subtke Strength, Appreciation, Instruction, Patience",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reactive, Observation, Thoughtful",
		image: "img/virgo.jpg"
	}


]
// function to determine user horoscope.
function getInfo(){
//store the tag with id="input"
var input = document.getElementById("input")
// loop through signArray on the item at a time
	for(var i = 0; i < signArray.length; i++){
// if the value the user typed in, chaged to all lowercase letter
		if(input.value.toLowerCase() === signArray[i].sign){
// get element with id="input" and change the text to the user input
			document.getElementById("yourSign").textContent = input.value
// get element with id="icon" and change source attribute to current signArray image path
			document.getElementById("icon").src = signArray[i].image
// get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + signArray[i].fortune
			return 
		}
// if no match is found
		document.getElementById("yourSign").textContent = "Not one of the signs. Try again!"
		document.getElementById("icon").src = ""
		document.getElementById("yourHoroscope").textContent = ""
	}
}