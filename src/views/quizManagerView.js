/*
 * View
 */

// a view is where the output is created.
var QuizManagerView = function ( model ) {
	var that = this;
	that.model = model;

	return that;
};

// a view might have a function that returns the rendered output.
QuizManagerView.prototype.output = function () {
	// htmlData used to create a template may come from anywhere
	// but in this example template comes from this inline string.
	var instance = this;
	var modelData = instance.model;
	var htmlData;
	var template;
	var tempFunc;
	var html;

	$.ajax({
  		type: 'GET',
  		url: 'src/views/html/manager.html',
  		dataType: 'html',
  		async: false,
  		success: function(data){
 	  		template = data;
 	  		tempFunc = doT.template(template);
 	  		html = tempFunc(modelData);
 	  		// console.log(modelData);
  		},
  		error: function(xhr, type, data){
  			alert("error");
  		}
	});

	return html;
};

// a view might have a function that renders the output.
QuizManagerView.prototype.render = function () {
	// this view renders to the element with the id of "output"
	var outputValue = this.output();
	document.getElementById('mainContainer').innerHTML = outputValue;
	var el = document.getElementById('mainContainer');
	this.setHandlers();
};

QuizManagerView.prototype.setHandlers = function() {
	var that = this;
	var quizzes = document.getElementsByClassName('quizLink');
	for(var i = 0; i < quizzes.length; i++) {
		quizzes[i].addEventListener("click", function(event) {
			var quiz = that.model.getQuiz(event.target.attributes['data-quiz-id'].value);
			that.launchQuiz(quiz);
			// that.hide();
		}, false);
	}

}

// QuizManagerView.prototype.hide = function() {
//     var mainCont = $('#mainContainer');
//     var width = $(window).width();
//     mainCont.css('left', -width);
//     mainCont.css('position', 'absolute');
// };

QuizManagerView.prototype.launchQuiz = function(quiz) {
	Core.publish('quizPlayer', quiz);
}