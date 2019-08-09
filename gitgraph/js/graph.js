// Get the graph container HTML element.
const graphContainer = document.getElementById("graph-container");

// Define options.
const options =
{
    template: "metro",
    orientation: "vertical-reverse",
    author: "Fethi Isfarca",
    mode: "extended",
};

// Instantiate the graph.
const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);

// GIT FLOW GRAPH DEFINITION:

var master = gitgraph.branch({
    name: 'master',
    style: {
        label: {
            bgColor: '#ffce52',
            color: 'black',
            strokeColor: '#ce9b00',
            borderRadius: 0,
            font: 'italic 12pt serif',
        },
    },
});

//const master = gitgraph.branch("master");
master.commit("Initial commit");

const develop = gitgraph.branch("develop");
develop.commit("Add TypeScript");

const flow = gitgraph.branch("flow");
flow
    .commit("Make it work")
    .commit("Make it right")
    .commit("Make it fast");

const test = gitgraph.branch("test");
test.commit("Test commit");

flow.merge(test);

develop.merge(flow);
develop.commit("Prepare V 1.0");

master.merge(develop);
master.tag("V 1.0");