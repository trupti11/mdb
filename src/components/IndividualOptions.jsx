import React, { Component } from 'react';

export default class IndividualOptions extends Component {
    render() {
        let optionKey = this.props.optionKey;
        let displayOptions = "";

        return(
            <div>
                {
                    Object.keys(optionKey.options).forEach( (opKey) => {
                        displayOptions += optionKey.options[opKey] + ", ";
                    })
                }
                <div><b>Values: </b>{displayOptions}</div>
            </div>

            );
    }
}