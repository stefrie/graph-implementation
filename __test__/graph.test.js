'use strict';

const { Vertex, Edge, Graph } = require('../graph.js');

////// ----- TESTING THE TESTS -----//////
test('Vertex is a class', () => {
	expect(typeof Vertex.prototype.constructor).toEqual('function');
});

test('Edge is a class', () => {
	expect(typeof Edge.prototype.constructor).toEqual('function');
});

test('Graph is a class', () => {
	expect(typeof Graph.prototype.constructor).toEqual('function');
});

////// ----- PROVING FUNCTIONALITY -----//////
test('A node can be successfully added to the graph', () => {
	const g = new Graph();
	const v = g.addVertex(5);
	console.log('===============>>>>>>>>>>>   ', g);
	expect(g.adjacencyList.has(v)).toBeTruthy();
});

test('An edge can be successfully added to the graph', () => {
	const g = new Graph();
	const e = g.addEdge();
	console.log(g);
	expect(e.adjacencyList.has(e)).toBeTruthy();
});

xtest('A collection of all nodes can be properly retrieved from the graph', () => {
	const g = new Graph();
	console.log(g);
	expect().toBe();
});

xtest('All appropriate neighbors can be retrieved from the graph', () => {
	const g = new Graph();
	console.log(g);
	expect().toBe();
});

xtest('Neighbors are returned with the weight between nodes included', () => {
	const g = new Graph();
	console.log(g);
	expect().toBe();
});

xtest('The proper size is returned, representing the number of nodes in the graph', () => {
	const g = new Graph();
	console.log(g);
	expect().toBe();
});

xtest('A graph with only one node and edge can be properly returned', () => {
	const g = new Graph();
	console.log(g);
	expect().toBe();
});

xtest('An empty graph properly returns null', () => {
	const g = new Graph();
	console.log(g);
	expect().toBe();
});
