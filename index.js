$(document).ready( $("#button").click(function() {
	var weight = document.getElementById("originalWeight").value;
	var weightMultiplier = document.getElementById("planetSelection").value;
	var newWeight = weight*weightMultiplier;
	$("#results").text("Your weight on this planet is " + newWeight );

}));