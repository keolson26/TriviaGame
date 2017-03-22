var question1 = {
		disp: "Example Q1",
		rightchoice: "right",
		choice1: "wrong",
		choice2: "wrong",
		choice3: "wrong",
		showQuestion: function() {
			$("#question1").html(this.disp);
			$("#firstC1").html(this.choice1);
			$("#secondC1").html(this.rightchoice);
			$("#thirdC1").html(this.choice3);
			$("#fourthC1").html(this.choice2);
		}
	};

var question2 = {
		disp: "Example Q2",
		rightchoice: "right",
		choice1: "wrong",
		choice2: "wrong",
		choice3: "wrong",
		showQuestion: function() {
			$("#question2").html(this.disp);
			$("#firstC2").html(this.choice1);
			$("#secondC2").html(this.choice2);
			$("#thirdC2").html(this.choice3);
			$("#fourthC2").html(this.rightchoice);
		}
	};

var question3 = {
		disp: "Example Q3",
		rightchoice: "right",
		choice1: "wrong",
		choice2: "wrong",
		choice3: "wrong",
		showQuestion: function() {
			$("#question3").html(this.disp);
			$("#firstC3").html(this.rightchoice);
			$("#secondC3").html(this.choice1);
			$("#thirdC3").html(this.choice2);
			$("#fourthC3").html(this.choice3);
		}
	};

var question4 = {
		disp: "Example Q4",
		rightchoice: "right",
		choice1: "wrong",
		choice2: "wrong",
		choice3: "wrong",
		showQuestion: function() {
			$("#question4").html(this.disp);
			$("#firstC4").html(this.rightchoice);
			$("#secondC4").html(this.choice1);
			$("#thirdC4").html(this.choice2);
			$("#fourthC4").html(this.choice3);
		}
	};

var question5 = {
		disp: "Example Q5",
		rightchoice: "right",
		choice1: "wrong",
		choice2: "wrong",
		choice3: "wrong",
		showQuestion: function() {
			$("#question5").html(this.disp);
			$("#firstC5").html(this.choice1);
			$("#secondC5").html(this.choice2);
			$("#thirdC5").html(this.rightchoice);
			$("#fourthC5").html(this.choice3);
		}
	}


var score = 0;
var miss = 0;
var answerArr = [];
var seconds=30;
 

	//Operate timer (second countdown)
$("#startBtn").click(function () {

	showQuestionSet();

	var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

		function timer() {
		
		seconds--;
		$("#timer").html(seconds + " seconds remaining!");

			if (seconds <= 0) {
			  
			    clearInterval(counter);
			     
			    return;
			}

		$("#submitBtn").click(function () {


				clearInterval(counter);

				return;

			
			});

		selectAns();
		finalScreen();

		}
	

});



//Show Questions function


 function showQuestionSet () {

	//Show question and answers
	question1.showQuestion();
	question2.showQuestion();
	question3.showQuestion();
	question4.showQuestion();
	question5.showQuestion();

	setTimeout(selectAns,30*1000);

}


function selectAns () {
	
// 	//Grade quiz

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
	
		for(var i = 0; i < 5; i++) {
			if(answerArr[i]===true){
				score++;
			}
			else if(answerArr[i]===false){
				miss++;
			}
		}
		 console.log(score);
		 console.log(miss);
		 
		$("#correctTotal").html(score);
		$("#wrongTotal").html(miss);
}
	//Open New Page

function finalScreen () {

	
	//window.open("index2.html", "_self");
	
};




