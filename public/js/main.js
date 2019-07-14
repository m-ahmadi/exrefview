const log = console.log;
var gdata;
var ndata;
$.get("./js/treedata.json", data => {
	gdata = data;
	createJstree(data);
	ndata = convert(data);
	
	log( search(ndata, 392) );
	log( c );
});

var c = 0;

function convert(arr) {
	const res = {};
	const len = arr.length;
	for (let i=0; i<len; i+=1) {
		const obj = arr[i];
		res[obj.id] = obj;
	}
	return res;
}

function search(obj, id, path=[]) {
	c+=1;
	let target = obj[id];
	path.push(target.text);
	if (target.parent === "#") {
		return path.reverse().join("/");
	} else {
		return search(obj, target.parent, path)
	}
}















function createJstree(data) {
	const o = f => ({ "icon": f ? `images/${f}.png` : "jstree-file", "valid_children": [] });
	$('#tree-container').jstree({
		core: {
			data: data
		},
		// jstree-file
		types: {
			"": o(),
			"txt":  o("txt"),
			"js":   o("js"),
			"jsx":  o("js"),
			"ts":   o("ts"),
			"vue":  o("vue"),
			"html": o("html"),
			"htm":  o("html"),
			"md":   o("md"),
			"css":  o("css"),
			"scss": o("scss"),
			"php":  o("php"),
			"c":    o("c"),
			"rb":   o("rb"),
			"sql":  o("sql"),
			"bat":  o("bat"),
			"ps1":  o("ps1"),
			"json": o("json"),
			"xml":  o("xml"),
			"conf": o("conf"), //
			"yaml": o("yml"),
			"yml":  o("yml"),
			"ai":   o("ai"),
			"png":  o("png"),
			"jpg":  o("jpg"),
			"gif":  o("gif"),
			"ico":  o("ico"),
			"lnk":  o("lnk"),
			"pdf":  o("pdf"),
			"xls":  o("xlsx"),
			"xlsx": o("xlsx"),
			"xlsm": o("xlsx"),
			"csv":  o("csv"),
			"doc":  o("docx"),
			"docx": o("docx"),
			"pptx": o("pptx"),
			"ppt":  o("pptx"),
			"zip":  o("zip"),
			"rar":  o("zip"),
			"7zip": o("zip"),
			"handlebars": o("handlebars"),
			"hbs": o("handlebars")
		},
		plugins: ["types"]
	});
	$('#tree-container').on("changed.jstree", function (e, data) {
		log(data.selected);
	});
}
/*
.browserslistrc
.bowerrc
.jshintrc
.env
.mwb
.bak
.jade
.rtlsrc
.babelrc
.sublime-color-scheme
.DS_Store
.db
.conf
.vpp
.rb
FileWithNoExtension
*/