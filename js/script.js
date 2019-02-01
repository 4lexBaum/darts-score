if ('webkitSpeechRecognition' in window) {

	const speech = new webkitSpeechRecognition();
	speech.lang = "en-US";
	speech.continuous = true;
	speech.interimResults = true;
	speech.maxAlternatives = 10;

	speech.onresult = function (event) {
		for (let i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				const sTranscript = event.results[i][0].transcript;
				processTranscript(sTranscript);
				console.log(`Result received: ${sTranscript}`);
				console.log(`Confidence: ${event.results[i][0].confidence}`);
			}
		}
	}

	// speech.onerror = function (event) {
	// 	console.log(event);
	// }

	// speech.onaudioend = function () {
	// 	console.log('Audio capturing ended');
	// }

	// speech.onspeechend = function () {
	// 	console.log('Speech ended');
	// }

	// speech.onend = function () {
	// 	console.log('Ended');
	// 	this.start();
	// }

	let start = 501;
	const BOGEYS = [169, 168, 166, 165, 163, 162, 159];
	let throws = [];

	const counter = document.querySelector("#counter");
	const list = document.querySelector("#list");

	function processTranscript(sTranscript) {
		if (Number.isInteger(parseInt(sTranscript))) {
			console.log("NUMBER");
			processScore(parseInt(sTranscript));
		} else {
			console.log("NO NUMBER");
			processAction(sTranscript.trim());
		}
	}

	function processScore(score) {
		if (score >= 0 && score <= 180) {
			if ((getRest() - score) < 0 || (getRest() - score) === 1) {
				console.log("Bust");
				return;
			} else if ((getRest() - score) === 0) {
				throws.push(score);
				updateCounter()
				console.log("WIN");
				return;
			} else {
				throws.push(score);
				updateCounter()
			}
		} else {
			console.log(`No valid dart score: ${score}`);
		}
	}

	function processAction(sAction) {
		switch (sAction) {
			case "back":
				throws.pop();
				updateCounter()
				break;
			case "reset":
				throws = [];
				updateCounter()
				break;
			case "game 301":
				start = 301;
				throws = [];
				updateCounter()
				break;
			case "game 501":
				start = 501;
				throws = [];
				updateCounter()
				break;

			default:
				break;
		}
	}

	function updateCounter() {
		counter.textContent = getRest();
		list.innerHTML = "";
		throws.forEach((i) => {
			const listNode = document.createElement("li");
			listNode.textContent = i;
			listNode.className = "list-group-item";
			list.appendChild(listNode);
		});
	};

	function getRest() {
		return start - throws.reduce((a, b) => a + b, 0);
	};

	speech.start();
}
