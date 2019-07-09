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
			ctx.push({});
			processJstree(child, ctx[index]);
		});
	}
}

processJstree(tree, newTree);
console.log( JSON.stringify(newTree.children) );

// processDhtmlx(tree, newTree);
// console.log( JSON.stringify(newTree.items) );
/*
function processDhtmlx(input, ctx) {
	if ( u.isObj(input) ) { // an entity to process
		ctx.value = input.name;
		ctx.id = (counter+=1);
		if (input.children) { // a folder
			ctx.items = [];
			processDhtmlx(input.children, ctx.items);
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
*/