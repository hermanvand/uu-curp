MCOW.Model.Curp.cardEdit = {

	run: function() {

		// which course?	
		var courseId = MCOW.Session.Request.param["course"];		
		var course = CURP.Lib.getCourse(courseId);

		var cardId = MCOW.Session.Request.param["card"];
		var type = MCOW.Session.Request.param["type"];

		var form = document.forms["cardEditForm"];
		if (form && MCOW.Util.getParentElementById(form, "page") != null) {

			// which card?
			if (type == "scenario") {
				var card = course.wildcards[cardId];
			}
			else {
				var card = course["weeks"][course["currentWeek"]-1].cards[cardId];
			}
			var form_description = form.elements["description"].value;
			card["description"] = form_description;

			//card.save();
			if (type == "scenario") {
				CURP.Lib.setWildcard(courseId, cardId, card);
			}
			else {
				CURP.Lib.setCard(courseId, cardId, card);
			}

			// break
			//MCOW.Event.fire("/Curp/home");
			MCOW.Model.Curp.cardEdit.callback();
		} 
		else {
			// display form
			MCOW.Session.Response.param["course"] = course;
			MCOW.Session.Response.param["cardId"] = cardId;
			MCOW.Session.Response.param["type"] = type;

			MCOW.Model.Curp.cardEdit.callback();
		}	

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
MCOW.Model.Curp.cardNew = {

	run: function() {

		var courseId = MCOW.Session.Request.param["course"];
		var color = MCOW.Session.Request.param["color"];
		var card = MCOW.Session.Request.param["card"];
		var type = MCOW.Session.Request.param["type"];
		
		if (typeof card != 'undefined') {

			if (type == "scenario") {
				CURP.Lib.addWildcard(courseId, color, card);
			}
			else {
				CURP.Lib.addCard(courseId, color, card);
			}
				
			MCOW.Model.Curp.cardNew.callback();
		} 
		else {
			
			// which course?
			var course = CURP.Lib.getCourse(courseId);
			MCOW.Session.Response.param["course"] = course;
			MCOW.Session.Response.param["random"] = 0;

			// display cards
			if (color == "orange") {
				MCOW.Session.Response.param["cards"] = CURP.Data.teachingCards;
			}
			if (color == "blue") {
				MCOW.Session.Response.param["cards"] = CURP.Data.learningCards;
			}
			if (color == "green") {
				MCOW.Session.Response.param["cards"] = CURP.Data.outcomeCards;
			}
			if (color == "grey") {
				MCOW.Session.Response.param["cards"] = CURP.Data.taskCards;
			}
			if (color == "pink") {
				MCOW.Session.Response.param["cards"] = CURP.Data.wildCards;
				// random from 0 to length -1
				MCOW.Session.Response.param["random"] = Math.floor(Math.random() * MCOW.Session.Response.param["cards"].length); 
			}

			MCOW.Session.Response.param["color"] = color;
			MCOW.Session.Response.param["type"] = type;

			MCOW.Model.Curp.cardNew.callback();

		}	

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
MCOW.Model.Curp.courseEdit = {

	run: function() {

		// which course?
		var courseId = MCOW.Session.Request.param["course"];		
		var course = CURP.Lib.getCourse(courseId);
		MCOW.Session.Response.param["course"] = course;

		// display period
		var currentPeriod = CURP.Lib.getPeriod();		
		MCOW.Session.Response.param["currentPeriod"] = currentPeriod;

		MCOW.Model.Curp.courseEdit.callback();

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
MCOW.Model.Curp.courseEditName = {

	run: function() {

		// which course?	
		var courseId = MCOW.Session.Request.param["course"];		
		var course = CURP.Lib.getCourse(courseId);
		var title = course["title"];

		var form = document.forms["courseEditNameForm"];
		if (form && MCOW.Util.getParentElementById(form, "page") != null) {
			var form_name = form.elements["name"].value;
			course["title"] = form_name;

			//course.save();
			CURP.Lib.setCourse(course);

			// break
			MCOW.Model.Curp.courseEditName.callback();
		} 
		else {
			// display form
			currentPeriod = CURP.Lib.getPeriod();		
			MCOW.Session.Response.param["currentPeriod"] = currentPeriod;

			MCOW.Session.Response.param["course"] = course;
			MCOW.Session.Response.param["title"] = title;

			MCOW.Model.Curp.courseEditName.callback();
		}	

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
MCOW.Model.Curp.courseNew = {

	run: function() {

		var form = document.forms["courseNewForm"];
		if (form && MCOW.Util.getParentElementById(form, "page") != null) {
			var form_name = form.elements["name"].value;

			// store values
			// - c is new course
			// - add c to curriculum
			// - create course object & store
			for (var c = ''; c.length < 16;) { c += Math.random().toString(36).substr(2, 1); }

			var period = CURP.Lib.getPeriod();
			var curriculum = CURP.Lib.getCurriculum(period);
			curriculum.push(c);
			CURP.Lib.setCurriculum(period, curriculum);
					
			var course = new CURP.Course("1.0", c, form_name, period);
			//course.save();
			CURP.Lib.setCourse(course);
			
			// break
			//MCOW.Event.fire("/Curp/home");
			MCOW.Model.Curp.courseNew.callback();
		} 
		else {
			// display form
			// - calculate periods
			currentPeriod = CURP.Lib.getPeriod();		
			MCOW.Session.Response.param["currentPeriod"] = currentPeriod;

			MCOW.Model.Curp.courseNew.callback();
		}	

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
MCOW.Model.Curp.courseShare = {

	run: function() {

		// which course?
		var courseId = MCOW.Session.Request.param["course"];		
		var course = CURP.Lib.getCourse(courseId);
		MCOW.Session.Response.param["course"] = course;

		// display period
		var currentPeriod = CURP.Lib.getPeriod();		
		MCOW.Session.Response.param["currentPeriod"] = currentPeriod;

		MCOW.Model.Curp.courseShare.callback();

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
MCOW.Model.Curp.courseView = {

	run: function() {

		// which course?
		var courseId = MCOW.Session.Request.param["course"];		
		var course = CURP.Lib.getCourse(courseId);
		MCOW.Session.Response.param["course"] = course;

		// display period
		var currentPeriod = CURP.Lib.getPeriod();		
		MCOW.Session.Response.param["currentPeriod"] = currentPeriod;

		MCOW.Model.Curp.courseView.callback();

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
MCOW.Model.Curp.home = {

	run: function() {
		// the curriculum is selected on the homepage
		var periods = CURP.Lib.getPeriods();
		
		// make sure the period is set!
		var currentPeriod = CURP.Lib.initPeriod(periods[0]);
		
		MCOW.Session.Response.param["currentPeriod"] = currentPeriod;
		MCOW.Session.Response.param["periods"] = periods;

		// courses from the selected curriculum are shown
		var courses = CURP.Lib.getCourses();
		MCOW.Session.Response.param["courses"] = courses;

		MCOW.Model.Curp.home.callback();
	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
MCOW.Model.Curp.scenarioEdit = {

	run: function() {

		// which course?
		var courseId = MCOW.Session.Request.param["course"];		
		var course = CURP.Lib.getCourse(courseId);
		MCOW.Session.Response.param["course"] = course;

		// display period
		var currentPeriod = CURP.Lib.getPeriod();		
		MCOW.Session.Response.param["currentPeriod"] = currentPeriod;

		MCOW.Model.Curp.scenarioEdit.callback();

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
