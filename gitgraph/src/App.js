import * as React from 'react';
import { Gitgraph, templateExtend, TemplateName } from '@gitgraph/react';

const options =
{
    template: templateExtend(TemplateName.Metro, { colors: ["red", "blue", "orange"]}),
    orientation: "vertical-reverse"
};

function CreateGraph()
{
  return (
      <Gitgraph options={options}>
        {(gitgraph) =>
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

            master.commit("Hotfix a bug");
            newFeature.commit("Fix tests");

            // Merge `newFeature` into `master`
            master.merge(newFeature, "Release new version");
        }}
      </Gitgraph>
  );
}

export default CreateGraph;