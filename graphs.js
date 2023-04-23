// edges list + vertices list ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const vertices = ['A', 'B', 'C', 'D', 'E'];

// const edges = [
//     ['A', 'B'],
//     ['A', 'D'],
//     ['B', 'C'],
//     ['C', 'D'],
//     ['C', 'E'],
//     ['D', 'E'],
// ]
// findAdjacentNodes
// const findAdjacentNodes = (node) => {
//     // Loop through edges
//     // Is node in edge
//     // If yes, push the other node in pair into adjacent array
//     // If no, keep looping
//     const adj = []

//     for(let edge of edges){
//         const nodeIdx = edge.indexOf(node)
//         if(nodeIdx > -1){
//             adjacentNode = nodeIdx === 0 ? edge[1] : edge[0]
//             adj.push(adjacentNode)
//         }
//     }
//     return adj;
// }
// console.log(findAdjacentNodes('C'));
// isConnected
// const isConnected = (node1, node2) => {
//     return edges.some((edge) => {
//         return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1
//     })
// }
// console.log(isConnected('C', 'D'));
// Adj Matrix ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const vertices = ['A', 'B', 'C', 'D', 'E'];
// const vertexIdxs = {
//     'A': 0,
//     'B': 1,
//     'C': 2,
//     'D': 3,
//     'E': 4,
// }
// const adjMatrix = [
//     [0, 1, 0, 1, 0],
//     [1, 0, 1, 0, 0],
//     [0, 1, 0, 1, 1],
//     [1, 0, 1, 0, 1],
//     [0, 0, 1, 1, 0],
// ];
// findAdjacentNodes
// const findAdj = (node) => {
//     const adj = [];
//     // Get row in matrix
//     // loop through row
//     // if there is a 1, push that node
//     // otherwise skip
//     for(let i=0; i <vertices.length; i++){
//         nodeVertex = vertexIdxs[node]
//         if(adjMatrix[nodeVertex][i] === 1){
//             adj.push(vertices[i])
//         }
//     }
//     return adj;
// }
// console.log(findAdj('A'))
// console.log(findAdj('E'))
// console.log(findAdj('C'))
// isConnected
// const isConn = (node1, node2) => {
//     const nodeIdx1 = vertexIdxs[node1]
//     const nodeIdx2 = vertexIdxs[node2]
//     return !!adjMatrix[nodeIdx1][nodeIdx2]
// }
// console.log(isConn('A', 'B'));
// console.log(isConn('C', 'E'));
// console.log(isConn('E', 'B'));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// class GraphNode {
//     constructor(val){
//         this.val = val;
//         this.edgesList = []
//     }
//     connect(node) {
//         this.edgesList.push(node)
//         node.edgesList.push(this)
//     }
//     getAdjacentNode(){
//         // return this.edgesList.map(edge => edge.val)
//         return this.edgesList // BFS and DFS
//     }

//     isConnected(node){
//         // BFS
//         // return this.edgesList.map(edge => edge.val).indexOf(node.val) > -1
//         // DFS
//         return !!this.edgesList.find(edge => edge.val === node.val)
//     }
// }
// class Graph {
//     constructor(nodes){
//         this.nodes = [...nodes]
//     }
//     addToGraph(node) {
//         this.nodes.push(node)
//     }

//     reconstructPath (visitedNodes, startNode, endNode){
//         // Start at the end node
//         let currNode = endNode
//         const shortestPath = []
//         // While we arent at the start node
//         while(currNode !== null){
//             shortestPath.push(currNode)
//             // Update the next node (increment up the path)
//             currNode = visitedNodes[currNode.val]
//         }
//         return(shortestPath.reverse())
//     }

//     breadthFirstTraversal(start, end){
//         // Use a queue: FIFO
//         // Adjacencies first
//         const queue = [start]
//         // Keep track of nodes visited: if unique then Set
//         // For paths, {}
//         const visitedNodes = {}
//         visitedNodes[start.val] = null;

//         while(queue.length > 0){
//             // pull node off queue to visit
//             const node = queue.shift()
//             // Check if the node is the end node
//             if(node.val === end.val){
//                 console.log('End')
//                 return this.reconstructPath(visitedNodes, start, end)
//             }
//             // For each adjacency
//             for (const adjacency of node.edgesList){
//                 // If the node is not already in visited
//                 if(!visitedNodes.hasOwnProperty(adjacency.val)){
//                     // Push it to the queue to visit
//                     queue.push(adjacency)
//                     // Mark it with its parent node
//                     visitedNodes[adjacency.val] = node
//                 }
//             }
//             console.log(visitedNodes)
//             // console.log(node.val)
//         }
//     }

//     depthFirstTraversal(start, end, visited){
//         // If no visited set
//         if(!visited){
//             visited = new Set()
//         }
//         // Keep going down branch until leaf node or target node found

//         // Base Case
//         if (start.val === end.val){
//             console.log('Found')
//             return
//         }
//         // Add the start node
//         visited.add(start)
//         // Adjacencies loop
//         for (const adjacency of start.edgesList){
//             // If not visited yet
//             if(!visited.has(adjacency)){
//                 // Recursive call to go deeper down branch
//                 this.depthFirstTraversal(adjacency, end, visited)
//             }
//         }
//         // Final Base Case

//     }
// }

// const DFW = new GraphNode('DFW')
// const JFK = new GraphNode('JFK')
// const LAX = new GraphNode('LAX')
// const HNL = new GraphNode('HNL')
// const SAN = new GraphNode('SAN')
// const EWR = new GraphNode('EWR')
// const BOS = new GraphNode('BOS')
// const MIA = new GraphNode('MIA')
// const MCO = new GraphNode('MCO')
// const PBI = new GraphNode('PBI')

// const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI])
// DFW.connect(LAX)
// DFW.connect(JFK)
// LAX.connect(EWR)
// LAX.connect(SAN)
// JFK.connect(BOS)
// JFK.connect(MIA)
// MIA.connect(MCO)
// MIA.connect(PBI)
// MCO.connect(PBI)

// for(let node of graph.nodes){
//     console.log(`Node ${node.val}`)
//     for(let connectedNode of node.edgesList){
//         console.log(`Node ${node.val} is connected to ${connectedNode.val}`)
//     }
// }

// console.log(nodeC.getAdjacentNode())
// console.log(nodeA.isConnected(nodeE));



// console.log(graph.breadthFirstTraversal(HNL, BOS))


// Depth First Traversal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(graph.depthFirstTraversal(HNL, BOS));

class GraphNode {
    constructor(val){
        this.val = val;
        this.edgesList = []
    }
    connect(node) {
        this.edgesList.push(node)
        node.edgesList.push(this)
    }
    getAdjacentNode(){
        // return this.edgesList.map(edge => edge.val)
        return this.edgesList // BFS and DFS
    }

    isConnected(node){
        // BFS
        // return this.edgesList.map(edge => edge.val).indexOf(node.val) > -1
        // DFS
        return !!this.edgesList.find(edge => edge.val === node.val)
    }
}
class Graph {
    constructor(nodes){
        this.nodes = [...nodes]
    }
    addToGraph(node) {
        this.nodes.push(node)
    }

    topologicalSort(){
        const visited =new Set()
        const topOrdering = []
        for (const node of this.nodes){
            this.depthFirstTraversal(node, visited, topOrdering)
        }
        console.log(topOrdering.reverse())
    }

    depthFirstTraversal(start, visited, topOrdering){
        if(visited.has(start)) return
        visited.add(start)

        for(const adjacency of start.edgesList) {
            this.depthFirstTraversal(adjacency, visited, topOrdering)
        }
        // About to pop start off the stack
        topOrdering.push(start.val)
    }
}

const DFW = new GraphNode('DFW')
const JFK = new GraphNode('JFK')
const LAX = new GraphNode('LAX')
const HNL = new GraphNode('HNL')
const SAN = new GraphNode('SAN')
const EWR = new GraphNode('EWR')
const BOS = new GraphNode('BOS')
const MIA = new GraphNode('MIA')
const MCO = new GraphNode('MCO')
const PBI = new GraphNode('PBI')
const HKG = new GraphNode('HKG')

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI])
DFW.connect(LAX)
DFW.connect(JFK)
LAX.connect(EWR)
LAX.connect(SAN)
JFK.connect(BOS)
JFK.connect(MIA)
MIA.connect(MCO)
MIA.connect(PBI)
MCO.connect(PBI)
HNL.connect(LAX)
HKG.connect(SAN)
graph.topologicalSort()