startTime = moment('23:00','hh:mm')			// time that the train initially starts
o {_isAMomentObject: true, _i: "23:00", _f: "hh:mm", _isUTC: false, _pf: Object…}

frequency = 5								// frequency that the train runs on
5

currentTime = moment('23:21','hh:mm')		// current time - this will be moment() for you
o {_isAMomentObject: true, _i: "23:21", _f: "hh:mm", _isUTC: false, _pf: Object…}

currentTime.diff(startTime, 'minutes')		// how many minutes have passed since startTime
21

numberOfTripsFinishedUnrounded = currentTime.diff(startTime, 'minutes')/frequency
4.2

numberOfTrips = Math.floor(numberOfTripsFinishedUnrounded)		// always round down number of trips
4

totalMinutesFromStartToNextTrip = (numberOfTrips+1)*frequency
25											// How many minutes are there to the next train starting from startTime?

nextTripTime = startTime					// Clone the original object because .add() mutates the original object
o {_isAMomentObject: true, _i: "23:00", _f: "hh:mm", _isUTC: false, _pf: Object…}

nextTripTime.add(totalMinutesFromStartToNextTrip, 'minutes')	// Add number of minutes to next trip from initial start time to
																// find out when the next train will arrive. READ DOCS TO BE SURE
																// http://momentjs.com/docs/#/manipulating/add/

o {_isAMomentObject: true, _i: "23:00", _f: "hh:mm", _isUTC: false, _pf: Object…}_d: Sun Aug 14 2016 23:25:00 GMT-0700 (PDT)_f: "hh:mm"_i: "23:00"_isAMomentObject: true_isUTC: false_isValid: true_locale: A_pf: Object__proto__: Object

nextTripTime.diff(currentTime, 'minutes')						// Get the difference (in minutes) between the expected next train time and
4																// current time


