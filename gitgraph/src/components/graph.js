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
        const master = gitgraph.branch("master");
        master.commit("Init the project");
        master
            .commit("Add README")
            .commit("Add tests")
            .commit("Implement feature");
        master.tag("v1.0");

        const newFeature = gitgraph.branch("new-feature");
        newFeature.commit("Implement an awesome feature");

        const bla = gitgraph.branch("bla");
        bla.commit("Implement an awesome bla");
        newFeature.merge(bla);

        const xd = gitgraph.branch("xd");
        xd.commit("Implement an awesome xd");
        bla.merge(xd);

        master.commit("Hotfix a bug");
        newFeature.commit("Fix tests");

        // Merge `newFeature` into `master`
        master.merge(newFeature, "Release new version");
    }
}

export default Graph;