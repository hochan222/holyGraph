export default {
    nodes: [
      { id: 1, label: "ME", title: "node 1 tootip text" },
     
      { id: 2, label: "FrontEnd", title: "node 2 tootip text" },
      { id: 3, label: "BackEnd", title: "node 3 tootip text" },
      { id: 4, label: "DevOps", title: "node 4 tootip text" },
      
      { id: 5, label: "Internet", title: "node 4 tootip text" },
      
      { id: 6, label: "HTML", title: "node 4 tootip text" },
      { id: 7, label: "CSS", title: "node 4 tootip text" },
      { id: 8, label: "Javascript", title: "node 4 tootip text" },
     
      { id: 9, label: "Version Control System", title: "node 4 tootip text" },
      
      { id: 10, label: "Web Security Knowledge", title: "node 4 tootip text" },
      { id: 11, label: "HTTPS", title: "node 4 tootip text" },
      { id: 12, label: "Content Security Policy", title: "node 4 tootip text" },
      { id: 13, label: "CORS", title: "node 4 tootip text" },
      { id: 14, label: "OWASP Security Risks", title: "node 4 tootip text" },
      
      { id: 15, label: "Package Managers", title: "node 4 tootip text" },
    
      { id: 16, label: "CSS Architecture", title: "node 4 tootip text" },
      
      { id: 17, label: "CSS Preprocessors", title: "node 4 tootip text" },
      { id: 18, label: "Sass", title: "node 4 tootip text" },

      { id: 19, label: "Build Tools", title: "node 4 tootip text" },

      { id: 20, label: "Framework", title: "node 4 tootip text" },
      { id: 21, label: "React", title: "node 4 tootip text" },
      { id: 22, label: "Vue", title: "node 4 tootip text" },

    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 2, to: 5 },
      { from: 5, to: 6 },
      { from: 5, to: 7 },
      { from: 5, to: 8 },
      { from: 6, to: 9 },
      { from: 7, to: 9 },
      { from: 8, to: 9 },
      { from: 9, to: 10 },
      { from: 10, to: 11 },
      { from: 10, to: 12 },
      { from: 10, to: 13 },
      { from: 10, to: 14 },
      { from: 10, to: 15 },
      /*CSS Architecture*/
      { from: 15, to: 16 },
      /*CSS Preprocessors*/
      { from: 16, to: 17 },
      { from: 17, to: 18 },
      /*Build Tools*/
      { from: 18, to: 19 },
      /*Framework*/
      { from: 19, to: 20 },
      { from: 20, to: 21 },
      { from: 20, to: 22 },

    ]
  };