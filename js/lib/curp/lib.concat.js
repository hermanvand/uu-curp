// define the Curp space
CURP = {};

CURP.Status = {};

CURP.Config = {

	'att': 'val',
	
}

// CURP events
// - TODO how to load? is now called in events.js, but should be installed when installing plugin...
CURP.Event = {

	// from device
	devicePause : function() {
		// try to sync before pause
	},

	deviceResume : function() {
	},

	deviceOffline : function() {
	},

	deviceOnline : function() {
	},

	// from cron
	cron : function(message) {
		switch (message) {
			case "sync":
				break;
		}; 
	},
	
	cronFallback : function(message) {
	},

	// from loadFase3
	// - on init
	load : function() {
		CURP.Data.teachingCards = CURP.Data.getTeachingCards();
		CURP.Data.learningCards = CURP.Data.getLearningCards();
		CURP.Data.outcomeCards = CURP.Data.getOutcomeCards();
		CURP.Data.taskCards = CURP.Data.getTaskCards();
		CURP.Data.wildCards = CURP.Data.getWildCards();
	},

	// from loadFase4
	// - before transition
	loadTransition : function(stage) {
		if (stage == "load") {
		}
		if (stage == "reload") {
		}
	},
	
	// from loadFase5
	// - for every page
	loadPage: function() {
		// add events on 'mcow-touchable'
		var touchables = document.getElementById('page').getElementsByClassName("mcow-touchable");
		for (var i=0;i<touchables.length;i++) {
			touchables[i].addEventListener('touchable', CURP.Event.touchable, false);
		}

		// add onchange event on 'select'
		var selections = document.getElementById('page').getElementsByTagName("select");
		for (var i=0;i<selections.length;i++) {
			if (selections[i].getAttribute("class").indexOf("curp-curriculum-selection") != -1) {
				selections[i].addEventListener('change', CURP.Lib.setPeriod, false);
			}
		}

		// add click events on 'button'
		var buttons = document.getElementById('page').getElementsByTagName("button");
		for (var i=0;i<buttons.length;i++) {
			if (buttons[i].getAttribute("class").indexOf("curp-week-new") != -1) {
				buttons[i].addEventListener('click', CURP.Lib.addWeek, false);
			}
			if (buttons[i].getAttribute("class").indexOf("curp-share-json") != -1) {
				buttons[i].addEventListener('click', CURP.Lib.shareJSON, false);
			}
			if (buttons[i].getAttribute("class").indexOf("curp-share-csv") != -1) {
				buttons[i].addEventListener('click', CURP.Lib.shareCSV, false);
			}
		}

		// add click events on 'menu items' of curriculum
		var menus = document.getElementById('page').getElementsByClassName("curp-content-curriculum-item-edit");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.editCourseName, false);
		}
		var menus = document.getElementById('page').getElementsByClassName("curp-content-curriculum-item-delete");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.deleteCourse, false);
		}

		// add click events on 'menu items' of week
		var menus = document.getElementById('page').getElementsByClassName("curp-content-week-item-up");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.moveWeekUp, false);
		}
		var menus = document.getElementById('page').getElementsByClassName("curp-content-week-item-down");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.moveWeekDown, false);
		}
		var menus = document.getElementById('page').getElementsByClassName("curp-content-week-item-delete");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.deleteWeek, false);
		}

		// add click events on 'menu items' of course
		var menus = document.getElementById('page').getElementsByClassName("curp-content-course-item-weekup");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.moveCardWeekUp, false);
		}
		var menus = document.getElementById('page').getElementsByClassName("curp-content-course-item-weekdown");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.moveCardWeekDown, false);
		}
		var menus = document.getElementById('page').getElementsByClassName("curp-content-course-item-up");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.moveCardUp, false);
		}
		var menus = document.getElementById('page').getElementsByClassName("curp-content-course-item-down");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.moveCardDown, false);
		}
		var menus = document.getElementById('page').getElementsByClassName("curp-content-course-item-edit");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.editCard, false);
		}
		var menus = document.getElementById('page').getElementsByClassName("curp-content-course-item-delete");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.deleteCard, false);
		}

		// add click events on 'menu items' of scenario
		var menus = document.getElementById('page').getElementsByClassName("curp-content-scenario-item-edit");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.editWildcard, false);
		}
		var menus = document.getElementById('page').getElementsByClassName("curp-content-scenario-item-delete");
		for (var i=0;i<menus.length;i++) {
			menus[i].addEventListener('click', CURP.Lib.deleteWildcard, false);
		}

	},
	
	// TOUCHABLES
	touchable: function(e) {
	
		// get details
		var type = e.detail.type;
		var x = e.detail.x;
		var y = e.detail.y;

		var element = MCOW.Util.getEventElement(e);

		// type is tap, swipeleft, swiperight, swipeup, swipedown, press, drag
		// - implemented 'press' to display a menu with actions
		if (type == "tap") {
			// edit course
			if (element.getAttribute("class").indexOf("curp-content-curriculum-item") != -1) {
				CURP.Lib.editCourse(e);
			}
			// set week
			if (element.getAttribute("class").indexOf("curp-content-week-item") != -1) {
				CURP.Lib.setWeek(e);
			}
		}
		if (type == "press") {
			MCOW.Menu.show(element, x, y);
		}
		if (type == "drag") {
			// not used, because not as usefull as press
			// element.style.top = y + "px";
			// element.style.left = x + "px";
		}
		
	}
	
}

// the main lib functions
// - here (and only here) is the connection with the database
CURP.Lib = {

	// PERIOD
	// ======
	initPeriod : function(period) {
		if (localStorage.getItem("CURP.CURRICULUM") === null) {		
			localStorage["CURP.CURRICULUM"] = period;
		}
		
		return CURP.Lib.getPeriod();	
	},
	
	setPeriod : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		
		// set option
        var selectedOption = element.options[element.selectedIndex];
		localStorage["CURP.CURRICULUM"] = selectedOption.value;

		// reload homepage on this change
		MCOW.Event.fire("/Curp/home");
	},

	getPeriod : function() {
		return localStorage["CURP.CURRICULUM"];
	},
	
	getPeriods : function() {
		var numberOfYears = 5;
		var periods = new Array();
		
		var currentDate = new Date();
		var currentYear = currentDate.getFullYear();
		var currentMonth = currentDate.getMonth()+1;
		
		var startYear = currentYear;
		if (currentMonth >= 9) {
			startYear = currentYear - 3;
		}
		else { 
			startYear = currentYear - 4;
		}
		
		for (i=0; i < numberOfYears; i++) {
			for (j=1; j<=4; j++) {
				periods.push((startYear + i) + "/" + (startYear + i + 1) + " - " + j);
			}
		}
		
		//console.log(JSON.stringify(periods));
		
		return periods;
	},

	// CURRICULUM
	// ==========
	getCurriculum : function(period) {
		if (localStorage.getItem("CURP.CURRICULUM." + period) === null) {
			curriculum = new Array();
		}
		else {
			curriculum = JSON.parse(localStorage["CURP.CURRICULUM." + period]);
		}
		return curriculum
	},

	setCurriculum : function(period, curriculum) {
		localStorage["CURP.CURRICULUM." + period] = JSON.stringify(curriculum);
	},

	// COURSE
	// ======	
	setCourse : function(course) {
		localStorage["CURP.COURSE." + course["id"]] = JSON.stringify(course);
	},

	getCourse : function(courseId) {
		return JSON.parse(localStorage["CURP.COURSE." + courseId]);
	},
	
	getCourses : function() {
		var period = localStorage["CURP.CURRICULUM"];
		var curriculum = CURP.Lib.getCurriculum(period);
		
		var courses = new Array();
		for (i=0; i < curriculum.length; i++) {
				courses.push(JSON.parse(localStorage["CURP.COURSE." + curriculum[i]]));
		}
		
		return courses;
	},

	editCourse : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var courseId = element.getAttribute("data-course");
		
		// goto edit page
		MCOW.Event.fire("/Curp/courseEdit?course="+courseId);		
	},

	editCourseName : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var courseId = parent.getAttribute("data-course");
		
		// goto edit page
		MCOW.Event.fire("/Curp/courseEditName?course="+courseId);		
	},

	deleteCourse : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var courseId = parent.getAttribute("data-course");
		
		// remove course
		localStorage.removeItem("CURP.COURSE." + courseId);

		// remove course from curriculum
		var period = localStorage["CURP.CURRICULUM"];
		var curriculum = CURP.Lib.getCurriculum(period);
		var index = curriculum.indexOf(courseId);
		if (index > -1) {
			curriculum.splice(index, 1);
		}
		CURP.Lib.setCurriculum(period, curriculum)
		
		// update view
		MCOW.Event.fire("/Curp/home");		
	},
	
	// WEEK
	// ====		
	addWeek : function(e) {
			
		// course is set: MCOW.Session.Response.param["course"]
		var course = MCOW.Session.Response.param["course"];
		var weekNumber = course["weeks"].length + 1;
		
		var week = new CURP.Week(weekNumber);
		course["weeks"].push(week);
		course["currentWeek"] = weekNumber;
		
		// save
		CURP.Lib.setCourse(course);
		
		// update view
		// - could add a week here, without reloading page
		//var weekItems = document.getElementById('curp-content-week-container').getElementsByTagName("div");
		MCOW.Event.fire("/Curp/courseEdit?course="+course["id"]);

	},
	
	setWeek : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		
		// go
		var course = MCOW.Session.Response.param["course"];

		course["currentWeek"] = parseInt(element.getAttribute("data-week"));
		
		// save
		CURP.Lib.setCourse(course);

		// update view
		MCOW.Event.fire("/Curp/courseEdit?course="+course["id"]);		
	},
	
	moveWeekUp : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var weekNumber = parseInt(parent.getAttribute("data-week"));
		
		// go
		var course = MCOW.Session.Response.param["course"];

		if (weekNumber != 1) {
			var tempWeek = course["weeks"][weekNumber-1];
			course["weeks"][weekNumber-1] = course["weeks"][weekNumber-2];
			course["weeks"][weekNumber-2] = tempWeek;
			
			course["currentWeek"] = weekNumber-1;
		}
		
		// save
		CURP.Lib.setCourse(course);

		// update view
		MCOW.Event.fire("/Curp/courseEdit?course="+course["id"]);		
	},

	moveWeekDown : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var weekNumber = parseInt(parent.getAttribute("data-week"));
		
		// go
		var course = MCOW.Session.Response.param["course"];

		if (weekNumber != course["weeks"].length) {
			var tempWeek = course["weeks"][weekNumber-1];
			course["weeks"][weekNumber-1] = course["weeks"][weekNumber];
			course["weeks"][weekNumber] = tempWeek;
			
			course["currentWeek"] = weekNumber+1;
		}
		
		// save
		CURP.Lib.setCourse(course);

		// update view
		MCOW.Event.fire("/Curp/courseEdit?course="+course["id"]);		
	},

	deleteWeek : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var weekNumber = parseInt(parent.getAttribute("data-week"));
		
		// go
		var course = MCOW.Session.Response.param["course"];
		
		// - reset weeknumber
		if (weekNumber == course["weeks"].length) {		
			course["currentWeek"] = weekNumber-1;
		}

		// - delete week
		course["weeks"].splice(weekNumber-1, 1);
		
		// save
		CURP.Lib.setCourse(course);

		// update view
		MCOW.Event.fire("/Curp/courseEdit?course="+course["id"]);		
	},
	
	// CARD
	// ====
	addCard : function(courseId, color, cardId) {	
		var cards = [];

		var course = CURP.Lib.getCourse(courseId);
		
		var cardNumber = course["weeks"][course["currentWeek"]-1].cards.length + 1;

		if (color == "orange") { cards = CURP.Data.teachingCards; }
		if (color == "blue") { cards = CURP.Data.learningCards; }
		if (color == "green") { cards = CURP.Data.outcomeCards; }
		if (color == "grey") { cards = CURP.Data.taskCards; }
		var title = cards[cardId];
	
		var card = new CURP.Card(cardNumber, color, title, "");
		course["weeks"][course["currentWeek"]-1].cards.push(card);
		
		// save
		CURP.Lib.setCourse(course);
	},

	setCard : function(courseId, cardId, card) {
		var course = CURP.Lib.getCourse(courseId);
		
		// update card
		course["weeks"][course["currentWeek"]-1].cards[cardId] = card;
		
		// save
		CURP.Lib.setCourse(course);
	},

	moveCardWeekUp : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var cardNumber = parseInt(parent.getAttribute("data-card"));
		
		// go
		var course = MCOW.Session.Response.param["course"];

		if (course["currentWeek"] != 1) {
			var tempCard = course["weeks"][course["currentWeek"]-1].cards[cardNumber];

			course["weeks"][course["currentWeek"]-2].cards.push(tempCard);
			course["weeks"][course["currentWeek"]-1].cards.splice(cardNumber,1)

			course["currentWeek"] = course["currentWeek"]-1;
		}
		
		// save
		CURP.Lib.setCourse(course);

		// update view
		MCOW.Event.fire("/Curp/courseEdit?course="+course["id"]);		
	},

	moveCardWeekDown : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var cardNumber = parseInt(parent.getAttribute("data-card"));
		
		// go
		var course = MCOW.Session.Response.param["course"];

		if (course["currentWeek"] != course["weeks"].length) {
			var tempCard = course["weeks"][course["currentWeek"]-1].cards[cardNumber];

			course["weeks"][course["currentWeek"]].cards.push(tempCard);
			course["weeks"][course["currentWeek"]-1].cards.splice(cardNumber,1)
			
			course["currentWeek"] = course["currentWeek"]+1;			
		}
		
		// save
		CURP.Lib.setCourse(course);

		// update view
		MCOW.Event.fire("/Curp/courseEdit?course="+course["id"]);		
	},
	
	moveCardUp : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var cardNumber = parseInt(parent.getAttribute("data-card"));
		
		// go
		var course = MCOW.Session.Response.param["course"];

		if (cardNumber != 0) {
			var tempCard = course["weeks"][course["currentWeek"]-1].cards[cardNumber];
			course["weeks"][course["currentWeek"]-1].cards[cardNumber] = course["weeks"][course["currentWeek"]-1].cards[cardNumber-1];
			course["weeks"][course["currentWeek"]-1].cards[cardNumber-1] = tempCard;
		}
		
		// save
		CURP.Lib.setCourse(course);

		// update view
		MCOW.Event.fire("/Curp/courseEdit?course="+course["id"]);		
	},

	moveCardDown : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var cardNumber = parseInt(parent.getAttribute("data-card"));
		
		// go
		var course = MCOW.Session.Response.param["course"];

		if (cardNumber != course["weeks"][course["currentWeek"]-1].cards.length-1) {
			var tempCard = course["weeks"][course["currentWeek"]-1].cards[cardNumber];
			course["weeks"][course["currentWeek"]-1].cards[cardNumber] = course["weeks"][course["currentWeek"]-1].cards[cardNumber+1];
			course["weeks"][course["currentWeek"]-1].cards[cardNumber+1] = tempCard;
		}
		
		// save
		CURP.Lib.setCourse(course);

		// update view
		MCOW.Event.fire("/Curp/courseEdit?course="+course["id"]);		
	},

	editCard : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var cardNumber = parseInt(parent.getAttribute("data-card"));
		
		// go
		var course = MCOW.Session.Response.param["course"];
		
		// goto edit page
		MCOW.Event.fire("/Curp/cardEdit?course="+course["id"]+"&card="+cardNumber);		
	},

	deleteCard : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var cardNumber = parseInt(parent.getAttribute("data-card"));
		
		// go
		var course = MCOW.Session.Response.param["course"];
		
		// - delete card
		course["weeks"][course["currentWeek"]-1].cards.splice(cardNumber,1);
		
		// save
		CURP.Lib.setCourse(course);

		// update view
		MCOW.Event.fire("/Curp/courseEdit?course="+course["id"]);		
	},
	
	// WILDCARD
	// ========
	addWildcard : function(courseId, color, cardId) {
		var cards = [];

		var course = CURP.Lib.getCourse(courseId);
		
		var cardNumber = course.wildcards.length + 1;

		cards = CURP.Data.wildCards;
		var title = cards[cardId];
	
		var card = new CURP.Card(cardNumber, color, title, "");
		course.wildcards.push(card);
		
		// save
		CURP.Lib.setCourse(course);
	},


	setWildcard : function(courseId, cardId, card) {
		var course = CURP.Lib.getCourse(courseId);
		
		// update card
		course.wildcards[cardId] = card;
		
		// save
		CURP.Lib.setCourse(course);
	},


	editWildcard : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var cardNumber = parseInt(parent.getAttribute("data-card"));
		
		// go
		var course = MCOW.Session.Response.param["course"];
		
		// goto edit page
		MCOW.Event.fire("/Curp/cardEdit?course="+course["id"]+"&card="+cardNumber+"&type=scenario");		
	},

	deleteWildcard : function(e) {
		// get element (=request)
		var element = MCOW.Util.getEventElement(e);
		var parent = MCOW.Util.getClosestParent(element,"UL");
		var cardNumber = parseInt(parent.getAttribute("data-card"));
		
		// go
		var course = MCOW.Session.Response.param["course"];
		
		// - delete card
		course.wildcards.splice(cardNumber,1);
		
		// save
		CURP.Lib.setCourse(course);

		// update view
		MCOW.Event.fire("/Curp/scenarioEdit?course="+course["id"]);		
	},

	
	// SHARE
	// =====
	shareJSON : function() {
		// go
		var course = MCOW.Session.Response.param["course"];
		
		alert(JSON.stringify(course, undefined, 2));	
	},

	shareCSV : function() {
		// go
		var course = MCOW.Session.Response.param["course"];
		
		var csv = "";
		csv = csv + "\"week\"," + "\"item\"," + "\"type\"," + "\"topic\"\n";
		for (var i=0;i<course["weeks"].length;i++) {
			for (var j=0;j<course["weeks"][i]["cards"].length;j++) {
				var title = course["weeks"][i]["cards"][j]["title"];
				var description = course["weeks"][i]["cards"][j]["description"];
			
				csv = csv + "\"";
				csv = csv + (i+1);
				csv = csv + "\",";
				csv = csv + "\"";
				csv = csv + (j+1);
				csv = csv + "\",";
				csv = csv + "\"";
				csv = csv + title;
				csv = csv + "\",";
				csv = csv + "\"";
				csv = csv + description;
				csv = csv + "\"\n";
			}
		}
		alert(csv);
	},
	
}

// the list of objects
// - the curriculum is a list of courses stored in the local store
// - the course & week is defined here
// - NOTE: methods like this.save are not defined here, but in CURP.lib setCourse
// -       because the JSON.parse cannot parse into this specific object, only in a general javascript object
CURP.Course = function(version, id, title, period) {

	this.version = version;
	this.id = id;
	this.title = title;
	this.period = period;
	
	this.currentWeek = 0;
	this.weeks = new Array();
	this.wildcards = new Array();
	
}

CURP.Week = function(number) {

	this.number = number;
	this.cards = new Array();
	
}

CURP.Card = function(number, color, title, description) {

	this.number = number;
	this.color = color;
	this.title = title;
	this.description = description;
	
}

// data sources
CURP.Data = {
	
	teachingCards : [],
	learningCards : [],
	outcomeCards : [],
	taskCards : [],
	wildCards : [],
	
	// orange = teaching
	getTeachingCards : function() {
		var teachingCards = new Array();

		teachingCards.push("Introduction Session");
		teachingCards.push("Lecture");
		teachingCards.push("External Speaker");
		teachingCards.push("External Visit");
		teachingCards.push("Tutorials");
		teachingCards.push("Seminar");
		teachingCards.push("Performance");
		teachingCards.push("Student Presentations");
		teachingCards.push("Film");
		teachingCards.push("Debate");
		teachingCards.push("Discussion");
		teachingCards.push("Practical");
		teachingCards.push("Class");
		teachingCards.push("Library Session");
		teachingCards.push("Fieldwork");
		teachingCards.push("Formative Assessment");

		return teachingCards;
	},
	
	// blue = learning
	getLearningCards : function() {
		var learningCards = new Array();

		learningCards.push("Multiple Choice Questions");
		learningCards.push("Open Questions");
		learningCards.push("Seminar");
		learningCards.push("Preparation");
		learningCards.push("Problems to Solve");
		learningCards.push("Set Reading");
		learningCards.push("Online Research");
		learningCards.push("Library");
		learningCards.push("Research");
		learningCards.push("Peer Review");
		learningCards.push("Self Assessment");
		learningCards.push("Podcasts");
		learningCards.push("Online Learning");

		return learningCards;
	},
	
	// green = outcome
	getOutcomeCards : function() {
		var outcomeCards = new Array();

		outcomeCards.push("Analyse real world situations critically");
		outcomeCards.push("Demonstrate professionalism & ethical awareness");
		outcomeCards.push("Communicate effectively using a range of media");
		outcomeCards.push("Apply teamwork and leadership skills");
		outcomeCards.push("Manage own professional development reflectively");
		outcomeCards.push("Find, evaluate, synthesise and use information");
		outcomeCards.push("Work within social, environmental and community contexts");
		outcomeCards.push("Use systems and scenario thinking");
		outcomeCards.push("Engage with stakeholder / interdisciplinary perspectives");

		return outcomeCards;
	},

	// grey = assesments/task
	getTaskCards : function() {
		var taskCards = new Array();

		taskCards.push("Bibliography");
		taskCards.push("Biography");
		taskCards.push("Article");
		taskCards.push("Essay");
		taskCards.push("Assessment of Practice");
		taskCards.push("Blog");
		taskCards.push("Case Study");
		taskCards.push("Open Book Exam");
		taskCards.push("Poster");
		taskCards.push("Synthesis Portfolio");
		taskCards.push("Competence Portfolio");
		taskCards.push("Interview");
		taskCards.push("Unseen Exam");
		taskCards.push("Seen Exam");

		return taskCards;
	},
	
	// pink = wildcards
	getWildCards : function() {
		var wildCards = new Array();

		wildCards.push("One student on this unit has mobility difficulties");
		wildCards.push("10% of the students on this unit have a Personal Learning Plan because they are dyslexic");
		wildCards.push("Ten students on this unit have Personal Learning Plans because they are dyslexic");
		wildCards.push("One student on this unit is hard of hearing");
		wildCards.push("One student on this unit is registered blind");
		wildCards.push("One student on this unit has a Personal Learning Plan because they suffer from severe depression");
		wildCards.push("One student on this unit has a Personal Learning Plan because they suffer from severe anxiety");
		wildCards.push("Retention on this programme is 78%");
		wildCards.push("NSS data shows that students are unhappy with the speed of feed-back on this programme");
		wildCards.push("Your team teach this unit with two colleagues who’ve used the same assessment method for ten years");
		wildCards.push("There are 300 students on this unit and you are the only tutor");
		wildCards.push("There are 100 students on this unit");
		wildCards.push("The PSRB* are involved in accrediting this programme and they have a traditional approach to assessment (*Professional, Statutory and Regulatory Body)");

		return wildCards;
	}

}
