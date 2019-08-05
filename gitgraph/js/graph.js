// Get the graph container HTML element.
const graphContainer = document.getElementById("graph-container");

// Define options.
const options =
    {
        template: "metro",
        orientation: "vertical-reverse"
    };

// Instantiate the graph.
const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);

// GIT FLOW GRAPH DEFINITION:

const master = gitgraph.branch("master");
master.commit("Initial commit");

const develop = gitgraph.branch("develop");
develop.commit("Add TypeScript");

const flow = gitgraph.branch("flow");
flow
    .commit("Make it work")
    .commit("Make it right")
    .commit("Make it fast");

develop.merge(flow);
develop.commit("Prepare V 1.0");

master.merge(develop);
master.tag("V 1.0");