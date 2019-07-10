$.get("./js/treedata.json", data => {
	createJstree(data);
});
// createJstree(data);
function createJstree(data) {
	const r = f => `images/${f}.png`;
	$('#tree-container').jstree({
		core: {
			data: data
		},
		// jstree-file
		types: {
			"":     { "icon": "jstree-file",  "valid_children": [] },
			"txt":  { "icon": r("txt-16"),  "valid_children": [] },
			"js":   { "icon": r("js-16"),  "valid_children": [] },
			"ts":   { "icon": r("png-16"),  "valid_children": [] },
			"html": { "icon": r("html-16"),  "valid_children": [] },
			"htm":  { "icon": r("html-16"),  "valid_children": [] },
			"md":   { "icon": r("png-16"),  "valid_children": [] },
			"css":  { "icon": r("css-16"),  "valid_children": [] },
			"scss": { "icon": r("png-16"),  "valid_children": [] },
			"php":  { "icon": r("png-16"),  "valid_children": [] },
			"c":    { "icon": r("png-16"),  "valid_children": [] },
			"rb":   { "icon": r("png-16"),  "valid_children": [] },
			"sql":  { "icon": r("png-16"),  "valid_children": [] },
			"bat":  { "icon": r("png-16"),  "valid_children": [] },
			"ps1":  { "icon": r("png-16"),  "valid_children": [] },
			"json": { "icon": r("png-16"),  "valid_children": [] },
			"xml":  { "icon": r("png-16"),  "valid_children": [] },
			"conf": { "icon": r("png-16"),  "valid_children": [] },
			"yml":  { "icon": r("png-16"),  "valid_children": [] },
			"ai":   { "icon": r("png-16"),  "valid_children": [] },
			"png":  { "icon": r("png-16"),  "valid_children": [] },
			"jpg":  { "icon": r("jpg-16"),  "valid_children": [] },
			"ico":  { "icon": r("png-16"),  "valid_children": [] },
			"xlsm": { "icon": r("png-16"),  "valid_children": [] },
			"zip":  { "icon": r("png-16"),  "valid_children": [] },
			"handlebars": { "icon": r("png-16"),  "valid_children": [] }
		},
		plugins: ["types"]
	});
}
/*
.browserslistrc
.bowerrc
.hbs
.jshintrc
.JPG
.jsx
.env
.sql
.mwb
.bak
.jade
.handlebars
.zip
.rtlsrc
.xml
.babelrc
.ico
.yml
.pdf
.sublime-color-scheme
.doc
.pptx
.xls
.gif
.vue
.yaml
.ps1
.DS_Store
.db





.js
.html
.txt
.bat
.htm
.png
.c
.ts
.conf
.ai
.vpp
.css
.scss
.lnk
.xlsm
.md
.json
.rb
.php
.jpg
FileWithNoExtension
*/