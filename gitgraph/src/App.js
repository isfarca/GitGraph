import React, { Component } from 'react';
import { Gitgraph } from "@gitgraph/react";
import Graph from './components/graph';

class Main extends Component
{
    // Output.
    render()
    {
        return (
            <Gitgraph options={Graph.GetOptions()}>
                {(gitgraph) => {Graph.CreateGraph(gitgraph);}}
            </Gitgraph>
        );
    }
}

export default Main;