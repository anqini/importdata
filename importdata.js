const mongodb = require('mongodb');
const data = require('./final_data.json');
async function run() {
	var client;
	try {
		client = await mongodb.MongoClient.connect('mongodb://localhost/navSiteBackend', {useNewUrlParser: true});
		console.log("connected...");
	} catch(err) {
		console.error(err);
		return;
	}
	client.db('navSiteBackend').collection('websites').insertMany(data)
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	const names = ['加州大学洛杉矶分校','北卡罗来纳大学教堂山分校', '华盛顿大学西雅图分校', '哈佛大学', '哥伦比亚大学', '圣路易斯华盛顿大学', '宾西法尼亚大学', '密歇根大学安娜堡分校', '康奈尔大学', '斯坦福大学', '杜克大学', '约翰霍普金斯大学', '纽约大学','耶鲁大学','芝加哥大学', '范德堡大学', '西北大学'];
	for (const name of names) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "医学"}})
		.then(data => console.log('data imported.'))
		.catch(err => console.error(err));
	}
	const names2 = ['德克萨斯大学奥斯汀分校','南加州大学','卡内基梅隆大学', '弗吉尼亚大学', '密歇根大学安娜堡分校', '纽约大学', '加州大学伯克利分校', '加州大学洛杉矶分校', '耶鲁大学', '哥伦比亚大学', '麻省理工学院', '斯坦福大学', '宾夕法尼亚大学', '达特茅斯学院', '西北大学', '康奈尔大学', '哈佛大学', '芝加哥大学'];
	for (const name of names2) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "商学"}})
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	}
	const names3 = ['德克萨斯大学达拉斯分校', '加州大学圣地亚哥分校', '加州大学戴维斯分校', '加州大学伯克利分校', '圣路易斯华盛顿大学', '芝加哥大学', '耶鲁大学', '哥伦比亚大学', '麻省理工学院', '斯坦福大学', '杜克大学', '加州理工学院', '约翰霍普金斯大学', '康奈尔大学', '哈佛大学', '普林斯顿大学'];
	for (const name of names3) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "生物"}})
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	}
	const names4 = ['普渡大学西拉法耶分校', '卡内基梅隆大学', '加州大学伯克利分校', '密歇根大学安娜堡分校', '佐治亚理工学院', '普林斯顿大学', '麻省理工学院', '斯坦福大学', '加州理工学院']
	for (const name of names4) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "电子电气"}})
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	}
	const names5 = ['明尼苏达大学双城分校', '加州大学圣地亚哥分校', '威斯康辛大学麦迪逊分校', '加州大学伯克利分校', '加州大学洛杉矶分校', '卡内基梅隆大学', '密歇根大学安娜堡分校', '纽约大学', '哈佛大学', '康奈尔大学', '普林斯顿大学', '芝加哥大学', '耶鲁大学', '哥伦比亚大学', '麻省理工学院', '斯坦福大学', '宾夕法尼亚大学', '杜克大学', '西北大学', '布朗大学'];
	for (const name of names5) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "经济"}})
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	}
	const names6 = ['罗格斯大学', '加州大学欧文分校', '加州大学伯克利分校', '加州大学洛杉矶分校', '弗吉尼亚大学', '密歇根大学安娜堡分校', '纽约大学', '北卡罗来纳大学教堂山分校', '芝加哥大学', '耶鲁大学', '哥伦比亚大学', '斯坦福大学', '宾夕法尼亚大学', '杜克大学', '约翰霍普金斯大学', '西北大学', '布朗大学', '哈佛大学', '康奈尔大学', '普林斯顿大学'];
	for (const name of names6) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "文学"}})
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	}
	const names7 = ['华盛顿大学西雅图分校', '马里兰大学公园分校', '德克萨斯大学奥斯汀分校', '加州大学圣地亚哥分校', '威斯康辛大学麦迪逊分校', '伊利诺伊大学香槟分校', '普渡大学西拉法耶分校', '加州大学伯克利分校', '加州大学洛杉矶分校', '南加州大学', '卡内基梅隆大学', '密歇根大学安娜堡分校','佐治亚理工学院', '哈佛大学', '普林斯顿大学', '耶鲁大学','麻省理工学院', '斯坦福大学', '宾夕法尼亚大学', '加州理工学院'];
	for (const name of names7) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "计算机"}})
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	}
	const names8 = ['麻省理工学院', '斯坦福大学', '加州理工学院', '哈佛大学', '普林斯顿大学', '加州大学伯克利分校', '康奈尔大学', '芝加哥大学', '伊利诺伊大学香槟分校', '哥伦比亚大学', '加州大学圣芭芭拉分校', '耶鲁大学', '密歇根大学安娜堡分校', '科罗拉多大学波尔得分校', '马里兰大学公园分校', '宾西法尼亚大学', '约翰霍普金斯大学', '加州大学洛杉矶分校', '加州大学圣地亚哥分校', '德克萨斯大学奥斯汀分校', '威斯康辛大学麦迪逊分校'];
	for (const name of names8) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "物理"}})
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	}
	const names9 = ['加州理工学院', '哈佛大学', '麻省理工学院', '斯坦福大学', '加州大学伯克利分校', '西北大学', '伊利诺伊大学香槟分校', '哥伦比亚大学', '康奈尔大学', '普林斯顿大学', '威斯康辛大学麦迪逊分校','耶鲁大学', '芝加哥大学', '加州大学洛杉矶分校', '密歇根大学安娜堡分校','北卡罗来纳大学教堂山分校', '德克萨斯大学奥斯汀分校', '宾西法尼亚大学','佐治亚理工学院'];
	for (const name of names8) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "化学"}})
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	}
	const names10 = ['加州大学伯克利分校','伊利诺伊大学香槟分校', '斯坦福大学','密歇根大学安娜堡分校', '德克萨斯大学奥斯汀分校', '弗吉尼亚理工学院', '卡内基梅隆大学', '科罗拉多大学波尔得分校', '麻省理工学院', '杜克大学', '华盛顿大学西雅图分校', '威斯康辛大学麦迪逊分校', '康奈尔大学', '约翰霍普金斯大学', '宾西法尼亚大学', '莱斯大学', '加州大学戴维斯分校', '明尼苏达大学双城分校', '北卡罗来纳大学教堂山分校'];
	for (const name of names8) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "环境工程"}})
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	}
	const ivyleague = ['布朗大学', '斯坦福大学', '哈佛大学', '哥伦比亚大学', '耶鲁大学', '康奈尔大学', '普林斯顿大学', '达特茅斯学院']
	for (const name of ivyleague) {
		client.db('navSiteBackend').collection('websites').findOneAndUpdate({title: name}, {$push: {category: "ivy"}})
		.then(() => console.log('data imported.'))
		.catch(err => console.error(err));
	}
}
run();
console.log('the end.');