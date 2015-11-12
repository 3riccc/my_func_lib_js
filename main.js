/**
* 获取当前时间
* @return {[array]} 含有秒，分，时，年，月，日的数组<----注意这个顺序
*/
function getTime () {
	var date = new Date();
	var now = [0,0,0,0,0,0];
	now[2] = date.getHours();
	now[1] = date.getMinutes();
	now[0] = date.getSeconds();
	now[3] = date.getFullYear();
	now[4] = date.getMonth();
	now[5] = date.getDate();
	return now;
}

/**
* 获取随机颜色值
* @return {[array]} rgb的三个值组成的数组
*/
function randomColor () {
	var colorArr = [0,0,0];
	for(var i=0;i<3;i++){
		colorArr[i] = Math.floor(Math.random()*255);
	}
	return colorArr;
}

/**
 * 复制对象，由于直接给对象赋值赋值过去的是引用，这个函数可以复制一个全新的对象
 * @param  {[object]} obj 原始对象
 * @return {[object]}     复制过的对象
 */
function copyObject (obj){
	var cp = {}
	for(var index in obj){
		cp[index] = obj[index];
	}
	return cp;
}
