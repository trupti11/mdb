import React, { Component } from 'react';

import IndividualOptions from './IndividualOptions.jsx';

export default class OptionsDisplay extends Component {
    render() {
        let optionsFromResponse = [{ options: this.props.options} ];
        return(
            <div>
                <p key={this.props.type}><b>{'Type: '}</b>{this.props.type}</p>
                {
                    
                    optionsFromResponse.map( (optionKey) => {
                        let optionsStr = JSON.stringify(optionKey.options);
                        if (optionsStr.indexOf(",") > -1) {    
                            return  (<IndividualOptions key={optionKey} optionKey={optionKey} />);
                        } else {
                            return (<div key={Math.random()}></div>);
                        }
                    })
                }
            </div>
        );

    }
}