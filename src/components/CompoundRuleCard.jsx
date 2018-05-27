import React from 'react';
import { Button, Card, CardBody } from 'mdbreact';
import { fieldsMapping } from './utils.jsx';

import RuleDisplay from './RuleDisplay.jsx';

const CompoundRuleCard = (props) => (
    <Card style={{width: '23rem', marginLeft: '5rem', marginBottom: '20px'}} className="col-sm-4">
            <CardBody>
            <div className="row horizontal-divider" style={{marginTop: "2rem"}}>
                <div className="col-xs-7" style={{marginRight: "2rem"}}>
                    <h5 className='cyan-text'>{fieldsMapping()[props.leftSide.field]}</h5>
                    <RuleDisplay key={props.leftSide.field} constraints={props.leftSide.constraints}/>
                </div>
                <div className="col-xs-7">
                    <h5 className='cyan-text'>{fieldsMapping()[props.rightSide.field]}</h5>
                    <RuleDisplay key={props.rightSide.field} constraints={props.rightSide.constraints}/>
                </div>
            </div>
            <div style={{ alignContent: "center"}}>
                <Button color="blue-grey" href="#">REMOVE</Button>
                <Button color="blue-grey" href="#">UPDATE</Button>
            </div>
        </CardBody>
    </Card>
);

export default CompoundRuleCard;