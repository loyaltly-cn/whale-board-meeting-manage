let index = 0

function FifoCache(limit){
  this.limit = limit || 10
  this.data = []
}

FifoCache.prototype.set = function(value){
	if(this.data.length > this.limit){
		this.data.shift();
	}
	this.data.push(value);
	// console.log(value);
}

FifoCache.prototype.reget = function(){
  return this.data.shift();
}

FifoCache.prototype.get = function(){
  return this.data[0];
}
FifoCache.prototype.len = function(){
  return this.data.length;
}

FifoCache.prototype.clear = function(){
	this.data.splice(0,this.data.length)
}


function syncFifoCache(limit){
  this.limit = limit || 10
  this.data= []
}

syncFifoCache.prototype.set = function(value){
	if(this.data.length > this.limit){
		this.data.shift();
	}
	// console.log("FIFO插入:"+index++);
	this.data.unshift(value);
}

syncFifoCache.prototype.reget = function(){
  return this.data.pop();
}

syncFifoCache.prototype.get = function(){
  return this.data[0];
}
syncFifoCache.prototype.len = function(){
  return this.data.length;
}

syncFifoCache.prototype.clear = function(){
	this.data.splice(0,this.data.length)
}

export{
	FifoCache,
	syncFifoCache
}