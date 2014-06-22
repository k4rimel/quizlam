var core = core || {};

'use strict';

core.start = function (moduleId, args) {

}
core.bootstrapper = function() {
	var controller = new QuizManagerController();
	controller.loadQuizzes("QuizA", "QuizB");
	this.QuizPlayer.load('a');
}
