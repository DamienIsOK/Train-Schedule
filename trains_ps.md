1. When button is clicked, grab the input from the form fields
	- Add an event listener to the button called on click
	- Save the form field .val() to new variables

2. ...Save the form fields to the database
	- Create a new object that we can push to the db
	- Push that object to the db
	- Log the results of that db to make sure it works
	- Clear out the form fields
	
3. Take the object in the database and push it to the table
	- Create a new function on the db.ref that takes child_added (the previous child added) and a function as arguments
	- The function should take the snapshot of your child and prevChildKey as arguments --- WHY???
	- Create variables that set each of your objects' values to that of the childSnapshot

4. The nextTain and timeAway is calculated by how much further away the next train
	- firstTrain = 12:00 (24 hour time)
	- frequency = 5 mins
	- nextTrain = currentTime / 5