class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){ // Write a method called addVertex, which accepts a name of a vertex
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; // It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    }
    addEdge(v1,v2){ // This function should accept two vertices, we can call them vertex1 and vertex2
        this.adjacencyList[v1].push(v2); // The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
        this.adjacencyList[v2].push(v1); // The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    }
    removeEdge(vertex1,vertex2){ // This function should accept two vertices, we'll call them vertex1 and vertex2
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( // The function should reassign the key of vertex1 to be an array that does not contain vertex2
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( // The function should reassign the key of vertex2 to be an array that does not contain vertex1
            v => v !== vertex1
        );
    }
    removeVertex(vertex){ // The function should accept a vertex to remove
        while(this.adjacencyList[vertex].length){ // The function should loop as long as there are any other vertices in the adjacency list for that vertex
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex); // Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
        }
        delete this.adjacencyList[vertex] // Delete the key in the adjacency list for that vertex
    }
}

let graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong")
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Hong Kong", "Tokyo");
graph.addEdge("Hong Kong", "Dallas");
graph.addEdge("Los Angeles", "Hong Kong");
graph.addEdge("Los Angeles", "Aspen");






