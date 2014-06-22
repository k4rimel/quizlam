/*
 * Controller
 */

var QuizManagerController = function () {
	return this;
};

if(QuizManagerController.prototype.initializer === true) return;


QuizManagerController.prototype.initializer = true;

QuizManagerController.prototype.init = function () {
	that = this;
	that.loadQuizzes("QuizA", "QuizB","QuizC","QuizD","QuizE","QuizF","QuizG","QuizH");
};

QuizManagerController.prototype.loadQuizzes = function () {
	var model = ManagerModel.find(arguments);
	var view = new QuizManagerView(model);

	view.render();
};
Core.register('QuizManager', function()
{
   var controller = new QuizManagerController();
   return controller;
});


