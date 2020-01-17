const argv = require('minimist')(process.argv.slice(2));

module.exports = (options) => {
    let argvString = '';

    if (argv && Object.keys(argv).length) {
        for (arg in argv) {
            if (arg === '_') {
                argvString += 'react-scaffolding<br/>';
                continue;
            }
            argvString += `&nbsp;&nbsp;-- ${arg}=${argv[arg]}<br/>`;
        }
    }

    return (
            `import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ${options.reactClassName} extends Component {
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
                <h3>React custom container for class ${options.reactClassName}</h3>
                <div className="container">
                    <p>This container have been generated with <b>react-scaffolding</b> using a custom template and the following arguments:</p>
                    <code>
                    ${argvString}
                    </code>
                </div>
            </div>
        );
    }
}

${options.reactClassName}.propTypes = {
    // Class propTypes
};

export default ${options.reactClassName};
`
        );
};
