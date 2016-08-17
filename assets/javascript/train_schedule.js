// Initialize Firebase
var config = {
	apiKey: "AIzaSyAGlt4ojK2YZSYW1Pqa_U0F63UULhRgLDc",
	authDomain: "trainschedule-1db9e.firebaseapp.com",
	databaseURL: "https://trainschedule-1db9e.firebaseio.com",
	storageBucket: "trainschedule-1db9e.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

// When I click the submit button, do the following:
$("#addTrainBtn").on("click", function(){
	// Set up new variables that get tha value from the form
	// I will need to use those variables later
	var newName = $("#trainName").val().trim();
	var newDestination = $("#destination").val().trim();
	var newFirstTime = $("#firstTime").val().trim();
	var newFrequency = $("#frequency").val().trim();

	// Create a new object and push it to the database
	var newTrain = {
		name: newName,
		dest: newDestination,
		first: newFirstTime,
		freq: newFrequency,
	}


	database.ref().push(newTrain);

	// Clear out the form fields
	$("#trainName").val("");
	$("#destination").val("");
	$("#firstTime").val("");
	$("#frequency").val("");

	console.log("newTrain: " + newTrain);
	console.log("Name: " + newTrain.name);
	console.log("Destination: " + newTrain.dest);
	console.log("First Time: " + newTrain.first);
	console.log("Frequency: " + newTrain.freq);



	return false;
});


database.ref().on("child_added", function(childSnapshot, prevChildKey){
	// What is childSnapshot and prevChild doing? 
	
	console.log("Child Snapshot Value: " + childSnapshot.val());

	var newName = childSnapshot.val().name;
	var newDestination = childSnapshot.val().dest;
	var newFirstTime = childSnapshot.val().first;
	var newFrequency = childSnapshot.val().freq;

	console.log('newFirstTime', newFirstTime)
	console.log("newName: " + newName);
	console.log("newDestination: " + newDestination);
	console.log("newFrequency: " + newFrequency);

	// Why can't I save the following variable to moment().format("hh:mm")
	var currentTime = moment();
	console.log(moment(currentTime).format("hh:mm"));

	var firstTimeConverted = moment(newFirstTime, "hh:mm").subtract(1, "days");
	
	// Get the difference between now and the time of the first train
	// by subtracting the current time from the first train time
	timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
	console.log("Difference in time: " + timeDiff);

	// Time apart
	var remainder = timeDiff % newFrequency;
	console.log("Remainder: ", remainder);

	// Minutes until the next train calculated by subtracting the the remainder from the frequency
	var timeUntilTrain = newFrequency - remainder;
	console.log("Time Til Train: " + timeUntilTrain);

	var nextTrainTime = moment().add(timeUntilTrain, "minutes");
	console.log("Next arrival: " + moment(nextTrainTime).format("hh:mm"));

	$("#trainTable > tbody").append("<tr><td>" + newName + "</td><td>" + newDestination + "</td><td>" + newFrequency + "</td><td>" + moment(nextTrainTime).format("hh:mm") + "</td><td>" + timeUntilTrain);

	return false;
});
