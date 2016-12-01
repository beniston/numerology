'use strict'

var prompt = require('prompt');

prompt.start();

var num1 = ['a', 'j', 'i', 'y', 'q']
var num2 = ['b', 'k', 'r']
var num3 = ['c', 'g', 'l', 's']
var num4 = ['d', 'm', 't']
var num5 = ['e', 'h', 'n', 'x']
var num6 = ['u', 'v', 'w']
var num7 = ['o', 'z']
var num8 = ['f', 'p']
var resultNumerology = 0
var final = 0

prompt.get(['Name'], function (err, result) {
	if (err) {
		return onErr(err);
	}
	var resultName = result.Name.toLowerCase().split("")
	for (var i = 0; i < resultName.length; i++) {
		if (num1.includes(resultName[i]))
			resultNumerology = resultNumerology + 1
		else if (num2.includes(resultName[i]))
			resultNumerology = resultNumerology + 2
		else if (num3.includes(resultName[i]))
			resultNumerology = resultNumerology + 3
		else if (num4.includes(resultName[i]))
			resultNumerology = resultNumerology + 4
		else if (num5.includes(resultName[i]))
			resultNumerology = resultNumerology + 5
		else if (num6.includes(resultName[i]))
			resultNumerology = resultNumerology + 6
		else if (num7.includes(resultName[i]))
			resultNumerology = resultNumerology + 7
		else if (num8.includes(resultName[i]))
			resultNumerology = resultNumerology + 8
		else
			resultNumerology = resultNumerology + 9
	}
	if (resultNumerology > 9) {
		final = addnum(resultNumerology)
	} else {
		final = resultNumerology
	}
	console.log('Numerology: ' + final)
});

function onErr(err) {
	console.log(err);
	return 1;
}

function addnum(numer) {
	var finalnum = 0
	var numering = numer.toString().split("")
	for (var j = 0; j < numering.length; j++) {
		finalnum = finalnum + parseInt(numering[j])
	}
	return finalnum
}