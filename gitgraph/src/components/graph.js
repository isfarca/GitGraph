import { Component } from 'react';
import { templateExtend, TemplateName } from "@gitgraph/core";

// Output git flow graph.
class Graph extends Component
{
    // Get git graph options.
    static GetOptions()
    {
        // Options.
        return {
            template: templateExtend(TemplateName.Metro, {
                colors: ["#008B8B", "#556B2F", "#8B4500", "#8B008B"],
                commit: { message: { displayHash: false, displayAuthor: false } }
            }),
            orientation: "vertical-reverse"
        };
    }

    // Create the git flow graph.
    static CreateGraph(gitgraph)
    {
        const flow = gitgraph.branch({name: "flow", from: null});
        const master = gitgraph.branch({name: "master", from: null});

        master.commit("Initialize master commit without project files.");
        flow.commit("Initialize flow commit.");
        flow.commit("Git flow graph added.");

        const develop = gitgraph.branch({name: "develop", from: master});
        develop.commit("Initialize develop commit with project files.");
        develop.commit("Add developed feature.");
        develop.commit("Fix bug");

        master.merge(develop);
        master.tag("Version number");
    }
}

export default Graph;