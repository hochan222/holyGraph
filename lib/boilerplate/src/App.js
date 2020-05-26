import React from 'react';
import Graph from "react-graph-vis";
import './App.css';
import _data from './_data';
// import "./network.css";

function App() {
  const graph = _data;

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
