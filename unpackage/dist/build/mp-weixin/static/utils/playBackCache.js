let index = 0

function cacheFifo(){
	this.cache = []
}

cacheFifo.prototype.set = function(data){
	this.cache.push(data)
	// console.log("FIFO插入"+index+++" data:"+data.timeStamp);
}

cacheFifo.prototype.getSync = function(index){
	let tmp = []
	for(let i = 0;i<index;i++){
		tmp[i] = this.cache[i]
	}
	console.log(tmp.length);
	return tmp
}

cacheFifo.prototype.getFifo = function(index){
	let tmp = []
	for(let i = index;i<this.cache.length;i++){
		tmp[i-index] = this.cache[i]
	}
	console.log(tmp.length);
	return tmp
}

cacheFifo.prototype.getIndex = function(index){
	return this.cache[index]
}


export{
	cacheFifo
}