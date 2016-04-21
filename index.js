$(document).ready( $("#button").click(function() {
	var weight = $("#originalWeight").val();
	var weightMultiplier = $("#planetSelection").val();
	var newWeight = weight*weightMultiplier;
	$("#results").text("Your weight on this planet is " + newWeight );

}));