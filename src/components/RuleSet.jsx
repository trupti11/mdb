import React from 'react';
import RuleCard from './RuleCard.jsx';
import CompoundRuleCard from './CompoundRuleCard.jsx';

const RuleSet = (props) => (
    <div>
        <h3 style={{ marginLeft:'5rem', fontWeight:'bold', marginTop: '2rem', marginBottom: '1rem'}} className='light-blue-text'>{props.ruleSetName}</h3>
            <div className="row">
                {
                    props.rules.map( (rule) => {
                        if (rule.dtype === "compound") {
                            return (
                                <CompoundRuleCard key={rule.id} leftSide={rule.left_side} rightSide={rule.right_side} />
                            );
                        } else {
                            return <RuleCard key={rule.id} fieldName={rule.field} constraints={rule.constraints} />
                        }
                    })
                }
            </div>
            <hr className="blue"/>
     </div>
);

export default RuleSet;