if ('webkitSpeechRecognition' in window) {

	const checkouts = {
		"170": [
			"20",
			"T20",
			"Bull"
		],
		"167": [
			"20",
			"T19",
			"Bull"
		],
		"164": [
			"19",
			"T19",
			"Bull"
		],
		"161": [
			"20",
			"T17",
			"Bull"
		],
		"160": [
			"20",
			"T20",
			"D20"
		],
		"158": [
			"20",
			"T20",
			"D19"
		],
		"157": [
			"19",
			"T20",
			"D20"
		],
		"156": [
			"20",
			"T20",
			"D18"
		],
		"155": [
			"20",
			"T19",
			"D19"
		],
		"154": [
			"20",
			"T18",
			"D20"
		],
		"153": [
			"20",
			"T19",
			"D18"
		],
		"152": [
			"20",
			"T20",
			"D16"
		],
		"151": [
			"20",
			"T17",
			"D20"
		],
		"150": [
			"20",
			"T18",
			"D18"
		],
		"149": [
			"20",
			"T19",
			"D16"
		],
		"148": [
			"20",
			"T20",
			"D14"
		],
		"147": [
			"20",
			"T17",
			"D18"
		],
		"146": [
			"20",
			"T18",
			"D16"
		],
		"145": [
			"20",
			"T15",
			"D20"
		],
		"144": [
			"20",
			"T20",
			"D12"
		],
		"143": [
			"20",
			"T17",
			"D16"
		],
		"142": [
			"20",
			"T14",
			"D20"
		],
		"141": [
			"20",
			"T15",
			"D18"
		],
		"140": [
			"20",
			"T16",
			"D16"
		],
		"139": [
			"20",
			"T13",
			"D20"
		],
		"138": [
			"20",
			"T16",
			"D15"
		],
		"137": [
			"18",
			"T17",
			"D16"
		],
		"136": [
			"20",
			"T20",
			"D8"
		],
		"135": [
			"20",
			"T13",
			"D18"
		],
		"134": [
			"20",
			"T14",
			"D16"
		],
		"133": [
			"20",
			"T19",
			"D8"
		],
		"132": [
			"T20",
			"T16",
			"D12"
		],
		"131": [
			"T20",
			"T13",
			"D16"
		],
		"130": [
			"T20",
			"T18",
			"D8"
		],
		"129": [
			"T19",
			"T16",
			"D12"
		],
		"128": [
			"T20",
			"T20",
			"D4"
		],
		"127": [
			"T20",
			"T17",
			"D8"
		],
		"126": [
			"T19",
			"19",
			"Bull"
		],
		"125": [
			"T20",
			"T19",
			"D4"
		],
		"124": [
			"T20",
			"T16",
			"D8"
		],
		"123": [
			"T20",
			"T13",
			"D12"
		],
		"122": [
			"T18",
			"18",
			"Bull"
		],
		"121": [
			"T19",
			"14",
			"Bull"
		],
		"120": [
			"T20",
			"20",
			"D20"
		],
		"119": [
			"T20",
			"19",
			"D20"
		],
		"118": [
			"T20",
			"18",
			"D20"
		],
		"117": [
			"T20",
			"17",
			"D20"
		],
		"116": [
			"T20",
			"16",
			"D20"
		],
		"115": [
			"T20",
			"15",
			"D20"
		],
		"114": [
			"T20",
			"14",
			"D20"
		],
		"113": [
			"T20",
			"13",
			"D20"
		],
		"112": [
			"T20",
			"12",
			"D20"
		],
		"111": [
			"T20",
			"19",
			"D16"
		],
		"110": [
			"T20",
			"10",
			"D20"
		],
		"109": [
			"T19",
			"12",
			"D20"
		],
		"108": [
			"T20",
			"16",
			"D16"
		],
		"107": [
			"T19",
			"10",
			"D20"
		],
		"106": [
			"T20",
			"10",
			"D18"
		],
		"105": [
			"T20",
			"13",
			"D16"
		],
		"104": [
			"T20",
			"12",
			"D16"
		],
		"103": [
			"T19",
			"10",
			"D18"
		],
		"102": [
			"T20",
			"10",
			"D16"
		],
		"101": [
			"T17",
			"10",
			"D20"
		],
		"100": [
			"T20",
			"D20"
		],
		"99": [
			"T19",
			"10",
			"D16"
		],
		"98": [
			"T20",
			"D19"
		],
		"97": [
			"T19",
			"D20"
		],
		"96": [
			"T20",
			"D18"
		],
		"95": [
			"T19",
			"D19"
		],
		"94": [
			"T18",
			"D20"
		],
		"93": [
			"T19",
			"D18"
		],
		"92": [
			"T20",
			"D16"
		],
		"91": [
			"T17",
			"D20"
		],
		"90": [
			"T18",
			"D18"
		],
		"89": [
			"T19",
			"D16"
		],
		"88": [
			"T16",
			"D20"
		],
		"87": [
			"T17",
			"D18"
		],
		"86": [
			"T18",
			"D16"
		],
		"85": [
			"T15",
			"D20"
		],
		"84": [
			"T16",
			"D18"
		],
		"83": [
			"T17",
			"D16"
		],
		"82": [
			"T14",
			"D20"
		],
		"81": [
			"T15",
			"D18"
		],
		"80": [
			"T16",
			"D16"
		],
		"79": [
			"T13",
			"D20"
		],
		"78": [
			"T18",
			"D12"
		],
		"77": [
			"T15",
			"D16"
		],
		"76": [
			"T20",
			"D8"
		],
		"75": [
			"T13",
			"D18"
		],
		"74": [
			"T14",
			"D16"
		],
		"73": [
			"T19",
			"D8"
		],
		"72": [
			"T16",
			"D12"
		],
		"71": [
			"T13",
			"D16"
		],
		"70": [
			"T18",
			"D8"
		],
		"69": [
			"19",
			"Bull"
		],
		"68": [
			"T20",
			"D4"
		],
		"67": [
			"T17",
			"D8"
		],
		"66": [
			"T10",
			"D18"
		],
		"65": [
			"T19",
			"D4"
		],
		"64": [
			"T16",
			"D8"
		],
		"63": [
			"T13",
			"D12"
		],
		"62": [
			"T10",
			"D16"
		],
		"61": [
			"T15",
			"D8"
		],
		"60": [
			"20",
			"D20"
		],
		"59": [
			"19",
			"D20"
		],
		"58": [
			"18",
			"D20"
		],
		"57": [
			"17",
			"D20"
		],
		"56": [
			"16",
			"D20"
		],
		"55": [
			"15",
			"D20"
		],
		"54": [
			"14",
			"D20"
		],
		"53": [
			"13",
			"D20"
		],
		"52": [
			"12",
			"D20"
		],
		"51": [
			"19",
			"D16"
		],
		"50": [
			"10",
			"D20"
		],
		"49": [
			"17",
			"D16"
		],
		"48": [
			"16",
			"D16"
		],
		"47": [
			"15",
			"D16"
		],
		"46": [
			"6",
			"D20"
		],
		"45": [
			"13",
			"D16"
		],
		"44": [
			"12",
			"D16"
		],
		"43": [
			"3",
			"D20"
		],
		"42": [
			"10",
			"D16"
		],
		"41": [
			"9",
			"D16"
		],
		"40": [
			"D20"
		]
	}

	const speech = new webkitSpeechRecognition();
	speech.lang = "de-DE";
	speech.continuous = false;
	speech.interimResults = false;
	speech.maxAlternatives = 10;

	speech.onresult = function (event) {

		for (let i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				const alternatives = event.results[i];
				for (let j = 0; j < alternatives.length; ++j) {
					const sTranscript = alternatives[j].transcript;
					console.log(`Result received: ${sTranscript}`);
					if (isInGramar(alternatives[j].transcript)) {
						processTranscript(sTranscript);
						console.log(`PROCESSED: ${sTranscript}`);
						break;
					}
				}
			}
		}
	}

	let numbers = [];
	for (let n = 0; n <= 180; n++) {
		numbers.push(n);
	}

	const actions = ["ZURÜCK", "NEUES SPIEL", "NEUES SPIEL 501", "NEUES SPIEL 301"];

	function isInGramar(sTranscript) {
		console.log(`CHECKING: ${sTranscript}`)
		if (Number.isInteger(Number(sTranscript))) {
			const number = Number(sTranscript);
			console.log(`INCLUDES IN NUMBER: ${numbers.includes(number)}`)
			return numbers.includes(number);
		} else {
			const string = sTranscript.trim().toUpperCase();
			console.log(`INCLUDES IN ACTIONS: ${actions.includes(string)}`)
			return actions.includes(string);
		}
	};

	const voice = document.querySelector("#voice");

	speech.onaudiostart = function () {
		console.log('Audio capturing started');
		voice.textContent = "Listening...";
	}

	speech.onaudioend = function () {
		console.log('Audio capturing ended');
		voice.textContent = "";
	}

	speech.onsoundstart = function () {
		console.log('Some sound is being received');
		voice.textContent = "Sound receiving...";
	}

	speech.onsoundend = function () {
		console.log('Sound has stopped being received');
		voice.textContent = "";
	}

	speech.onspeechstart = function () {
		console.log('Speech has been detected');
		voice.textContent = "Speech receiving...";
	}

	speech.onspeechend = function () {
		this.stop();
		console.log('Speech has stopped being detected');
		voice.textContent = "";
	}

	speech.onstart = function () {
		console.log('Speech recognition service has started');
	}

	speech.onend = function () {
		console.log('Speech recognition service disconnected');
		voice.textContent = "";
		this.start();
	}

	speech.onerror = function (event) {
		console.log('Speech recognition error detected: ' + event.error);
	}

	const synth = window.speechSynthesis;

	let start = 501;
	const BOGEYS = [169, 168, 166, 165, 163, 162, 159];
	let throws = [];

	const counter = document.querySelector("#counter");
	const average = document.querySelector("#average");
	const list = document.querySelector("#list");
	const startBtn = document.querySelector("#startBtn");
	const game = document.querySelector("#game");


	const noScoreSound = document.querySelector("#noScoreSounc");
	const gameOnSound = document.querySelector("#gameOnSound");
	const gameShot = document.querySelector("#gameShot");
	const checkoutsRow = document.querySelector("#checkouts");

	startBtn.onclick = () => {
		speech.start();
		startBtn.style.display = "none";
		game.style.display = "block";
		gameOnSound.play();
	}

	function processTranscript(sTranscript) {
		if (Number.isInteger(parseInt(sTranscript))) {
			console.log("NUMBER");
			processScore(parseInt(sTranscript));
		} else {
			console.log("NO NUMBER");
			processAction(sTranscript.trim().toUpperCase());
		}
	}

	function processScore(score) {
		if (score >= 0 && score <= 180) {
			if ((getRest() - score) < 0 || (getRest() - score) === 1) {
				console.log("Bust");
				noScoreSound.play();
			} else if ((getRest() - score) === 0) {
				throws.unshift(score);
				updateCounter();
				console.log("WIN");
				gameShot.play();
				return;
			} else {
				throws.unshift(score);
				updateCounter();
			}
		} else {
			console.log(`No valid dart score: ${score}`);
			noScoreSound.play();
		}
	}

	function processAction(sAction) {
		switch (sAction) {
			case "ZURÜCK":
				throws.shift();
				updateCounter();
				break;
			case "NEUES SPIEL":
				throws = [];
				updateCounter();
				gameOnSound.play();
				break;
			case "NEUES SPIEL 301":
				start = 301;
				throws = [];
				updateCounter()
				gameOnSound.play();
				break;
			case "NEUES SPIEL 501":
				start = 501;
				throws = [];
				updateCounter();
				gameOnSound.play();
				break;

			default:
				break;
		}
	}

	function updateCounter() {
		const rest = getRest();
		// counter
		counter.textContent = rest;
		// average
		average.textContent = `Ø ${getAverage().toFixed(1)}`;
		// list
		list.innerHTML = "";
		throws.forEach((i) => {
			const listNode = document.createElement("li");
			listNode.textContent = i;
			listNode.className = "list-group-item";
			list.appendChild(listNode);
		});

		checkoutsRow.innerHTML = "";
		if (rest <= 170 && rest >= 41) {
			const checkout = checkouts[rest.toString()];
			if (checkout) {
				console.log(`Checkout: ${checkout.join(" | ")}`);

				checkout.forEach((c) => {
					const spanNode = document.createElement("span");
					spanNode.textContent = c;
					spanNode.className = "col-sm badge badge-success";
					checkoutsRow.appendChild(spanNode);
				});
			}
		}
		if (BOGEYS.includes(rest)) {
			const spanNode = document.createElement("span");
			spanNode.textContent = "Bogey";
			spanNode.className = "col-sm badge badge-warning";
			checkoutsRow.appendChild(spanNode);
		}
	};

	function getRest() {
		return start - throws.reduce((a, b) => a + b, 0);
	};

	function getAverage() {
		return throws.length > 0 ? throws.reduce((a, b) => a + b) / throws.length : 0;
	};

}
