const path = require('path');
const dirTree = require("directory-tree");
const u = require("util-ma");

// const glob = require("glob");
// const filePaths = glob.sync("./**/*");
// filePaths.forEach(path => {
	// // console.log(path)
// });

const tree = dirTree("./", {
	normalizePath: true,
	exclude: /(node_modules|#.(css|scss|js|ts|html|htm|vue|yaml|yml|sql|php|))/
});
var newTree = {};
var counter = 0;

function processJstree(input, ctx) {
	if ( u.isObj(input) ) { // an entity to process
		if (input.children) { // a folder
			ctx.id = (counter+=1);
			ctx.text = input.name;
			ctx.children = [];
			processJstree(input.children, ctx.children);
		} else { // a file
			ctx.id = (counter+=1);
			ctx.text = input.name;
			ctx.type = "file";
		}
	} else if ( u.isArr(input) ) {
		input.forEach( (child, index) => {
			ctx.push({ id: (counter+=1), text: child.name });
			processJstree(child, ctx[index]);
		});
	}
}

processJstree(tree, newTree);

console.log( JSON.stringify(newTree.children) );

/*
function processDhtmlx(input, ctx) {
	if ( u.isObj(input) ) { // an entity to process
		ctx.value = input.name;
		ctx.id = input.name;
		if (input.children) { // a folder
			ctx.items = [];
			processDhtmlx(input.children, ctx.items);
		} else { // a file
			ctx.value = input.name;
			ctx.id = input.name;
		}
	} else if ( u.isArr(input) ) {
		input.forEach( (child, index) => {
			ctx.push({ value: child.name, id: child.name });
			processDhtmlx(child, ctx[index]);
		});
	}
}
*/