import React, { Component } from 'react';
import OptionsDisplay from './OptionsDisplay.jsx';

export default class RuleDisplay extends Component {
    render() {
        let constraints = [];
        if (this.props.constraints) {
            constraints = this.props.constraints;
        }
        return(
            <div key={Math.random()}>
            {
                constraints.map(
                    (constraint) => {
                        let type = constraint.type;
                        if (constraint.type === 'type') {
                            type = constraint.options[0];
                        }
                        if (constraint.options) {
                            return (<div key={Math.random()}>
                                        <OptionsDisplay key={constraint.options} options={constraint.options} type={type} />
                                    </div>
                                   );
                        }
                        return <p key={Math.random()}><b>{'Mandatory/Optional: '}</b>{constraint.type}</p>;
                    }
                )
            }
            </div>
        );

    }
}