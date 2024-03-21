function deleteElement() {
	let currentValue = $(".menu").val();
	$(".menu").val(currentValue.substring(0, currentValue.length - 1));
}

function insertElement(char) {
	char = char.toString();

	let current = $(".menu").val();
  
	let length = current.length;
	let flag = false;
	if (char == "+" || char == "-" || char == "/" || char == "*") {
		flag = true;
	}
	if (length == 0) {
		if (flag) return;
	}
 
	let new_flag = false;
	let lastElement = current[current.length - 1];
	if (
		lastElement == "+" ||
		lastElement == "-" ||
		lastElement == "/" ||
		lastElement == "*"
	) {
		new_flag = true;
	}
	if (flag && new_flag) {
		$(".menu").val(current.substring(0, length-1 ) + char);
	} else {
		$(".menu").val(current +char);
	}
}
function clearMenu() {
	$('.menu').val(' ');
}
function resultMath(){
  let current=$('.menu').val();
  let length=current.length;
  let flag=false;
  let char=current[length-1];
  if(char=='+'||char=='-'||char=='*'||char=='/'){
    flag=true;
  }
  if(flag){
    $('.menu').val("ERROR");
  } else {
    $('.menu').val(eval($('.menu').val()));
  }
}

