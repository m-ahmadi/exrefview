const path = require('path');
const dirTree = require("directory-tree");
const u = require("util-ma");
const args = process.argv.slice(2);

// const glob = require("glob");
// const filePaths = glob.sync("./**/*");
// filePaths.forEach(path => {
	// // console.log(path)
// });

let dirPath = "";
if ( args.includes("--path") ) {
	dirPath = args[ args.indexOf("--path") + 1 ];
} else {
	console.log("--path argument was not porivded.");
	return;
}

const tree = dirTree(dirPath, {
	normalizePath: true,
	exclude: /(node_modules|#.(css|scss|js|ts|html|htm|vue|yaml|yml|sql|php|))/
});
const newTree = {};
let counter = 0;

function processJstree(input, ctx) {
	if ( u.isObj(input) ) { // an entity to process
		const children = input.children;
		if (children) { // a folder
			ctx.id = (counter+=1);
			ctx.text = input.name;
			ctx.children = [];
			processJstree(children, ctx.children);
		} else { // a file
			ctx.id = (counter+=1);
			ctx.text = input.name;
			ctx.type = path.extname(input.path).slice(1);
		}
	} else if ( u.isArr(input) ) {
		input.forEach( (child, index) => {
			ctx.push({});
			processJstree(child, ctx[index]);
		});
	}
}

processJstree(tree, newTree);
console.log( JSON.stringify(newTree.children) );

// processDhtmlx(tree, newTree);
// console.log( JSON.stringify(newTree.items) );

function processDhtmlx(input, ctx) {
	if ( u.isObj(input) ) { // an entity to process
		const children = input.children;
		if (children) { // a folder
			ctx.value = input.name;
			ctx.id = (counter+=1);
			ctx.items = [];
			processDhtmlx(children, ctx.items);
		} else { // a file
			ctx.value = input.name;
			ctx.id = (counter+=1);
		}
	} else if ( u.isArr(input) ) {
		input.forEach( (child, index) => {
			ctx.push({});
			processDhtmlx(child, ctx[index]);
		});
	}
}