import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DemoCustomContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // TODO my magic initial state
        };
    }

    componentDidMount() {
        // Do some stuff here
    }

    render() {
        // TODO write some logic before the render

        return (
            <div>
                <h3>React custom container for class DemoCustomContainer</h3>
                <div className="container">
                    <p>This container have been generated with <b>react-scaffolding</b> using a custom template and the following arguments:</p>
                    <code>
                    react-scaffolding<br/>&nbsp;&nbsp;-- name=DemoCustomContainer<br/>&nbsp;&nbsp;-- path=src<br/>&nbsp;&nbsp;-- template=customContainer<br/>&nbsp;&nbsp;-- templatePath=scaffold_templates<br/>
                    </code>
                </div>
            </div>
        );
    }
}

DemoCustomContainer.propTypes = {
    // Class propTypes
};

export default DemoCustomContainer;
