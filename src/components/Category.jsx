import React from 'react';
import RuleSet from './RuleSet.jsx';

const Category = (props) => (
    <div>
        <div>
            <div className="card mb-3 blue lighten-4">
                {props.ruleSets.map( (ruleSet) => {
                        return <RuleSet key={ruleSet.id} ruleSetName={ruleSet.name} rules={ruleSet.rules} />
                })}
            </div>
        </div>
    </div>
);

export default Category;