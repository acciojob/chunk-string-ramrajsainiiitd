function stringChop(str, length) {
  // your code here
	arr = [];
	if (str.length == 0) {
		return arr;
	}
	else{
		return str.match(new RegExp('.{1,' + length + '}', 'g'));
		console.log("wer");
	}
}
// Do not change the code belo
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
