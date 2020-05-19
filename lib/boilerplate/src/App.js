import React from 'react';
import Graph from "react-graph-vis";
import './App.css';
// import "./network.css";

function App() {
  const graph = {
    nodes: [
      { id: 1, label: "HTML", title: "node 1 tootip text" },
      { id: 2, label: "CSS", title: "node 2 tootip text" },
      { id: 3, label: "JAVASCRIPT", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" }
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ]
  };

  const options = {
    width: '100%',
    height: '100%',
    layout: {
      randomSeed: undefined,
      improvedLayout:true,
      // hierarchical: {
      //   enabled: true,
      //   levelSeparation: 150,
      //   nodeSpacing: 100,
      //   treeSpacing: 200,
      //   blockShifting: true,
      //   edgeMinimization: true,
      //   parentCentralization: true,
      //   direction: 'UD',        // UD, DU, LR, RL
      //   sortMethod: 'directed',  // hubsize, directed
      //   shakeTowards: 'leaves'  // roots, leaves
      // }
    },
    // configure: {
    //   enabled: true,
    //   filter: 'nodes,edges',
    //   container: undefined,
    //   showButton: true
    // },
    // "physics": false,
    "nodes": {
      "borderWidthSelected": null,
      // "fixed": {
      //   "x": true,
      //   "y": true
      // },
      "font": {
        "size": 11
      },
      "size": 23,
      "shape": "dot",
    },
    edges: {
      color: "#000000"
    }
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  return (
    <div className="App">
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
    </div>
  );
}
export default App;
