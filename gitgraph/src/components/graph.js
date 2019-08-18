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
        flow.commit("Initialize flow commit.");
        master.commit("Initialize master commit.");

        const develop = gitgraph.branch({name: "develop", from: master});
        develop.commit("Initialize develop commit.");

        const feature = gitgraph.branch({name: "feature", from: develop});
        feature.commit("Initialize feature commit.");
        const feature1 = gitgraph.branch({name: "feature1", from: feature});
        const hotfix = gitgraph.branch({name: "hotfix", from: develop});
        hotfix.commit("Initialize hotfix commit.");
        const hotfix1 = gitgraph.branch({name: "hotfix1", from: hotfix});

        feature1.commit("Initialize feature1 commit.");
        feature.merge(feature1);

        develop.merge(feature);

        hotfix1.commit("Initialize hotfix1 commit.");
        hotfix.merge(hotfix1);

        develop.merge(hotfix);

        master.merge(develop);
        master.tag("Version number");

        flow.commit("Expand git flow.");
    }
}

export default Graph;