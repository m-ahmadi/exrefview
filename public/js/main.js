const log = console.log;
var gdata;
var ndata;
$.get("./js/treedata.json", data => {
	gdata = data;
	createJstree(data);
	ndata = convert(data);
	
	var t0 = performance.now();
	var x = search(ndata, 1322);
	var t1 = performance.now();
	console.log("Call to search took " + (t1 - t0) + " milliseconds.")

	log( x );
	// log( search(gdata, 1322) );
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

function search1(arr, id, path=[]) {
	c+=1;
	let target = arr.filter(i => {
		c+=1;
		return i.id === id ? i : undefined;
	})[0];
	path.push(target.text);
	if (target.parent === "#") {
		return path.reverse().join("/");
	} else {
		return search1(arr, target.parent, path)
	}
}





/* function search(arr, id, prev=[]) {
	let found;
	const len = arr.length;
	
	
	for (let i=0; i<len; i+=1) {
		if (found) break;
		c+=1;
		const obj = arr[i];
		if (obj.id === id) {
			found = obj;
			prev.push(obj.text);
			break;
		}
		
		const children = obj.children;
		if (children) {
			prev.push(obj.text);
			found = search(children, id, prev);
		}
	}
	
	if (found && found.id) {
		return { found, path: prev.join("/") };
	} else {
		prev.pop();
		return found;
	}
} */















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