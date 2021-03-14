function ask(question,...handlers){
	let isYes = confirm(question);
	for(let handler of handlers){
		if(handler.length==0){
			if(isYes) handler();
		}else{
			handler(isYes);
		}
	}
}

ask('question?',()=>console.log('you said yes'),()=>console.log(result));
	let arr = [1,2,3,4];
	arr.concat(3,4);
	console.log(arr);