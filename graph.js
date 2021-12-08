'use strict';

const util = require('util');

// our data object
class Vertex {
	constructor(value) {
		this.value = value;
	}
}

class Edge {
	constructor(vertex, weight) {
		this.vertex = vertex;
		this.weight = weight;
	}
}

class Graph {
	constructor() {
		this.adjacencyList = new Map();
	}

	// adding a value to our adjacency
	addVertex(nodeValue) {
		let payload = new Vertex(nodeValue);
		this.adjacencyList.set(payload, []);

		// for sake of simplicity
		return payload;
	}

	addEdge(startVertex, endVertex, weight = 0) {
		// check if vertex exists in our list of vertices
		if (!this.adjacencyList.has(startVertex) && !this.adjacencyList.has(endVertex)) {
			throw new Error('Vertex Error');
		}
		// how to add to adjacency values? grab all edges connected to the starting vertex
		let neighbors = this.adjacencyList.get(startVertex);
		// create new edge from endVertex, push into list of neighbors
		let newEdge = new Edge(endVertex, weight);
		neighbors.push(newEdge);
	}

	getNeighbors(vertex) {
		if (!this.adjacencyList.has(vertex)) {
			throw new Error('GET NEIGHBOR ERROR :: Invalid vertex');
		}

		return [...this.adjacencyList.get(vertex)];
	}

	getEdges() {
		let getVertices = this.adjacencyList.keys();
		for (let i of getVertices) {
			let getValues = this.adjacencyList.get(i);
			let neighbors = '';

			for (let j of getValues) {
				neighbors += j + ' ';
			}
			console.log(i + ' => ' + neighbors);
		}
	}

	breadthFirst(startVertex) {
		const queue = [];
		const visitedNodes = new Set();

		queue.push(startVertex);
		visitedNodes.add(startVertex);

		while (queue.length) {
			const current = queue.shift();
			let neighbors = this.getNeighbors(current);

			for (let edge of neighbors) {
				let neighbor = edge.vertex;
				if (!visitedNodes.has(neighbor)) {
					queue.push(neighbor);
					visitedNodes.add(neighbor);
				} else {
					continue;
				}
			}
		}
		return visitedNodes;
	}
}

let graph = new Graph();

let neo = graph.addVertex('neo');
let trinity = graph.addVertex('trinity');
let morpheus = graph.addVertex('morpheus');
let dozer = graph.addVertex('dozer');
let tank = graph.addVertex('tank');
let oracle = graph.addVertex('oracle');
let sw1tch = graph.addVertex('sw1tch');
let mouse = graph.addVertex('mouse');

graph.addEdge(neo, morpheus);
graph.addEdge(neo, oracle);
graph.addEdge(neo, trinity);
graph.addEdge(trinity, dozer);
graph.addEdge(trinity, tank);
graph.addEdge(morpheus, mouse);
graph.addEdge(morpheus, oracle);
graph.addEdge(dozer, sw1tch);
graph.addEdge(dozer, mouse);
graph.addEdge(sw1tch, mouse);
graph.addEdge(oracle, mouse);
graph.addEdge(mouse, dozer);
graph.addEdge(mouse, tank);

console.log('****MY GRAPH****: ', graph);
console.log('****BREADTH-FIRST TRAVERSAL****', graph.breadthFirst(neo));
console.log(graph.getNeighbors(mouse));
// console.log('****Get Edges****', graph.getEdges(mouse));

// for (const ver of graph.adjacencyList) {
// 	console.log(ver[0]);
// 	console.log(ver[1]);
// }
// console.log(util.inspect(graph, false, null, true));

module.exports = { Vertex, Edge, Graph };
