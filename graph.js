'use strict';

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

let a = graph.addVertex('a');
let b = graph.addVertex('b');
let c = graph.addVertex('c');
let d = graph.addVertex('d');
let e = graph.addVertex('e');
let f = graph.addVertex('f');
let g = graph.addVertex('g');
let h = graph.addVertex('h');

graph.addEdge(a, b);
graph.addEdge(a, c);
graph.addEdge(a, f);
graph.addEdge(b, d);
graph.addEdge(b, e);
graph.addEdge(c, f);
graph.addEdge(c, h);
graph.addEdge(d, g);
graph.addEdge(d, h);
graph.addEdge(f, h);
graph.addEdge(g, d);
graph.addEdge(g, h);
graph.addEdge(h, d);
graph.addEdge(h, e);

console.log('****MY GRAPH****: ', graph);
console.log('****BREADTH-FIRST TRAVERSAL****', graph.breadthFirst(a));
console.log('****NEIGHBORS****', graph.getNeighbors(f));

// Problems to solve:
// Get Size
// Return edge values / neighbors

module.exports = { Vertex, Edge, Graph };
