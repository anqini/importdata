const fs = require('fs');
const webs = require('./data.json');
const length = webs.length;
// console.log(length);
for (let i = 0; i < length; i++) {
	// delete webs[i]."";
	if (webs[i].school.length > 0) {
		webs[i].school = convert2Obj(webs[i].school);
	}
	let category = [];
	let index = detectGreaterThan(webs[i].category);
	if (index) {
		category.push(webs[i].category.substring(index + 1));
	} else {
		category.push(webs[i].category);
	}
	webs[i].category = category;
	if (webs[i].post_tag.length > 0) {
		webs[i].post_tag = [webs[i].post_tag];
	} else {
		webs[i].post_tag = [];
	}
	
}

console.log(webs[2]);
const jsonString = JSON.stringify(webs);

fs.writeFile('./final_data.json', jsonString, err => {     
	if (err) {         
		console.log('Error writing file', err)     
	} else {         
		console.log('Successfully wrote file')     
	} 
})


function detectGreaterThan(category) {
	let length = category.length;
	for (let i = 0; i < length; i++) {
		if (category.charAt(i) == '>') {
			return i;
		}
	}
	return 0;
}

function convert2Obj(content) {
	str_length = content.length;
	arr = [];
	for (let i = 0; i < str_length; i++) {
		if (content.charAt(i) == '@') {
			arr.push(i + 2);
		} else if (content.charAt(i) == '$') {
			arr.push(i);
		}
	}
	if (arr.length >= 16) {
		return {
			"学院列表":  content.substring(arr[0], arr[1]),
			"本科专业列表":  content.substring(arr[2], arr[3]),
			"研究生专业列表":  content.substring(arr[4], arr[5]),
			"研究生院": content.substring(arr[6], arr[7]),
			"国际学生本科申请": content.substring(arr[8], arr[9]),
			"国际学生本科申请截止日期": content.substring(arr[10], arr[11]),
			"英语能力要求": content.substring(arr[12], arr[13]),
			"本科学费": content.substring(arr[14], arr[15])
		}
	} else {
		return;
	}
	
}



