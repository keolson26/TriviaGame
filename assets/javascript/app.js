var question1 = {
	disp: "What is the average temperature in North Carolina?",
	rightchoice: "59.8°F",
	choice1: "67.4",
	choice2: "49.1",
	choice3: "70.3",
	showQuestion: function () {
		$("#question1").html(this.disp);
		$("#firstC1").html("<label class='radio-inline'><input type='radio' name='optradio1' id = 'wrong'>" + this.choice1 + "</label>");
		$("#secondC1").html("<label class='radio-inline'><input type='radio' name='optradio1' id = 'wrong'>" + this.choice2 + "</label>");
		$("#thirdC1").html("<label class='radio-inline'><input type='radio' name='optradio1' id = 'wrong'>" + this.choice3 + "</label>");
		$("#fourthC1").html("<label class='radio-inline'><input type='radio' name='optradio1' id = 'correct1'>" + this.rightchoice + "</label>");
	}
};

var question2 = {
	disp: "If the groundhog see its shadow, how many weeks until spring?",
	rightchoice: "6",
	choice1: "10",
	choice2: "4",
	choice3: "None!",
	showQuestion: function () {
		$("#question2").html(this.disp);
		$("#firstC2").html("<label class='radio-inline'><input type='radio' name='optradio2' id = 'wrong'>" + this.choice1 + "</label>");
		$("#secondC2").html("<label class='radio-inline'><input type='radio' name='optradio2' id = 'wrong'>" + this.choice2 + "</label>");
		$("#thirdC2").html("<label class='radio-inline'><input type='radio' name='optradio2' id = 'correct2'>" + this.rightchoice + "</label>");
		$("#fourthC2").html("<label class='radio-inline'><input type='radio' name='optradio2' id = 'wrong'>" + this.choice3 + "</label>");
	}
};

var question3 = {
	disp: "The first day of spring is traditionally marked by what event?",
	rightchoice: "Vernal Equinox",
	choice1: "Solar Eclipse",
	choice2: "Summer Solstice",
	choice3: "Easter",
	showQuestion: function () {
		$("#question3").html(this.disp);
		$("#firstC3").html("<label class='radio-inline'><input type='radio' name='optradio3' id = 'correct3'>" + this.rightchoice + "</label>");
		$("#secondC3").html("<label class='radio-inline'><input type='radio' name='optradio3' id = 'wrong'>" + this.choice1 + "</label>");
		$("#thirdC3").html("<label class='radio-inline'><input type='radio' name='optradio3' id = 'wrong'>" + this.choice2 + "</label>");
		$("#fourthC3").html("<label class='radio-inline'><input type='radio' name='optradio3' id = 'wrong'>" + this.choice3 + "</label>");
	}
};

var question4 = {
	disp: "In 2016 the most popular American spring break destination was where?",
	rightchoice: "Key West",
	choice1: "Panama City Beach",
	choice2: "Las Vegas",
	choice3: "Miami",
	showQuestion: function () {
		$("#question4").html(this.disp);
		$("#firstC4").html("<label class='radio-inline'><input type='radio' name='optradio4' id = 'correct4'>" + this.rightchoice + "</label>");
		$("#secondC4").html("<label class='radio-inline'><input type='radio' name='optradio4' id = 'wrong'>" + this.choice1 + "</label>");
		$("#thirdC4").html("<label class='radio-inline'><input type='radio' name='optradio4' id = 'wrong'>" + this.choice2 + "</label>");
		$("#fourthC4").html("<label class='radio-inline'><input type='radio' name='optradio4' id = 'wrong'>" + this.choice3 + "</label>");
	}
};

var question5 = {
	disp: "April showers bring May flowers! What year did NC see 7 inches of rain in one day?",
	rightchoice: "1895",
	choice1: "1936",
	choice2: "2002",
	choice3: "1989",
	showQuestion: function () {
		$("#question5").html(this.disp);
		$("#firstC5").html("<label class='radio-inline'><input type='radio' name='optradio5' id = 'wrong'>" + this.choice1 + "</label>");
		$("#secondC5").html("<label class='radio-inline'><input type='radio' name='optradio5' id = 'wrong'>" + this.choice2 + "</label>");
		$("#thirdC5").html("<label class='radio-inline'><input type='radio' name='optradio5' id = 'correct5'>" + this.rightchoice + "</label>");
		$("#fourthC5").html("<label class='radio-inline'><input type='radio' name='optradio5' id = 'wrong'>" + this.choice3 + "</label>");
	}
}


var score = 0;
var miss = 0;
var answerArr = [];
var seconds = 30;

//Operate timer (second countdown)
$("#startBtn").click(function () {

	$("#finalMessage").html("");
	$("#correctCount").html("");
	$("#missCount").html("");

	showQuestionSet();

	var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

	function timer() {

		seconds--;
		$("#timer").html(seconds + " seconds remaining!");

		if (seconds <= 0) {

			clearInterval(counter);

			return;

			selectAns();
		}
	}

	$("#submitBtn").click(function () {

		selectAns();

		clearInterval(counter);

		return;
	});
});


//Show question and answers

function showQuestionSet() {

	question1.showQuestion();
	question2.showQuestion();
	question3.showQuestion();
	question4.showQuestion();
	question5.showQuestion();

	setTimeout(selectAns, 30 * 1000);

}

//Grade quiz

function selectAns() {


	var check1 = document.getElementById("correct1").checked;
	var check2 = document.getElementById("correct2").checked;
	var check3 = document.getElementById("correct3").checked;
	var check4 = document.getElementById("correct4").checked;
	var check5 = document.getElementById("correct5").checked;

	answerArr.push(check1);
	answerArr.push(check2);
	answerArr.push(check3);
	answerArr.push(check4);
	answerArr.push(check5);

	console.log(answerArr);

	for (var i = 0; i < 5; i++) {
		if (answerArr[i] === true) {
			score++;
		} else if (answerArr[i] === false) {
			miss++;
		}
	}
	console.log(score);
	console.log(miss);
	finalScreen(score, miss);

}

//Open New Page

function finalScreen() {
	$("#question1").html("");

	$("#finalMessage").html("Here's how you did!");
	$("#correctCount").html("Correct: " + score);
	$("#missCount").html("Missed: " + miss);
	$("#firstC1").html("");
	$("#secondC1").html("");
	$("#thirdC1").html("");
	$("#fourthC1").html("");
	$("#question2").html("");
	$("#firstC2").html("");
	$("#secondC2").html("");
	$("#thirdC2").html("");
	$("#fourthC2").html("");
	$("#question3").html("");
	$("#firstC3").html("");
	$("#secondC3").html("");
	$("#thirdC3").html("");
	$("#fourthC3").html("");
	$("#question4").html("");
	$("#firstC4").html("");
	$("#secondC4").html("");
	$("#thirdC4").html("");
	$("#fourthC4").html("");
	$("#question5").html("");
	$("#firstC5").html("");
	$("#secondC5").html("");
	$("#thirdC5").html("");
	$("#fourthC5").html("");

};




