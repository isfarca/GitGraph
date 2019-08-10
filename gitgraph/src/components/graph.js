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
        flow.commit("Define git flow.");
        master.commit("Initialize master commit.");

        const develop = gitgraph.branch({name: "develop", from: master});
        develop.commit("Initialize develop commit.");

        const feature = gitgraph.branch({name: "feature", from: develop});
        feature.commit("Initialize feature commit.");
        const feature1 = gitgraph.branch({name: "feature1", from: feature});
        const feature2 = gitgraph.branch({name: "feature2", from: feature});
        const feature3 = gitgraph.branch({name: "feature3", from: feature});
        const hotfix = gitgraph.branch({name: "hotfix", from: develop});
        hotfix.commit("Initialize hotfix commit.");
        const hotfix1 = gitgraph.branch({name: "hotfix1", from: hotfix});
        const hotfix2 = gitgraph.branch({name: "hotfix2", from: hotfix});
        const hotfix3 = gitgraph.branch({name: "hotfix3", from: hotfix});

        feature1.commit("Initialize feature1 commit.");
        feature1
            .commit("feature1 commit 1.")
            .commit("feature1 commit 2.")
            .commit("feature1 commit 3.");
        feature2.commit("Initialize feature2 commit.");
        feature2
            .commit("feature2 commit 1.")
            .commit("feature2 commit 2.")
            .commit("feature2 commit 3.");
        feature3.commit("Initialize feature3 commit.");
        feature3
            .commit("feature3 commit 1.")
            .commit("feature3 commit 2.")
            .commit("feature3 commit 3.");
        feature.merge(feature1);
        feature.merge(feature2);
        feature.merge(feature3);

        develop.merge(feature);

        hotfix1.commit("Initialize hotfix1 commit.");
        hotfix1
            .commit("hotfix1 commit 1.")
            .commit("hotfix1 commit 2.")
            .commit("hotfix1 commit 3.");
        hotfix2.commit("Initialize hotfix2 commit.");
        hotfix2
            .commit("hotfix2 commit 1.")
            .commit("hotfix2 commit 2.")
            .commit("hotfix2 commit 3.");
        hotfix3.commit("Initialize hotfix3 commit.");
        hotfix3
            .commit("hotfix3 commit 1.")
            .commit("hotfix3 commit 2.")
            .commit("hotfix3 commit 3.");
        hotfix.merge(hotfix1);
        hotfix.merge(hotfix2);
        hotfix.merge(hotfix3);

        develop.merge(hotfix);

        master.merge(develop);
        master.tag("V 1.0");

        flow.commit("Expand git flow.");
    }
}

export default Graph;