import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'mdbreact';
import { fieldsMapping } from './utils.jsx';
import {Icon, Fa} from 'react-fa';

import RuleDisplay from './RuleDisplay.jsx';

const RuleCard = (props) => (
    <Card style={{width: '23rem', marginLeft: '5rem', marginBottom: '20px'}} className="col-sm-4">
        <CardBody>
            <CardTitle className="cyan-text">{fieldsMapping()[props.fieldName]}</CardTitle>
            <RuleDisplay key={props.fieldName} constraints={props.constraints}/>
            <Button color="blue-grey" className="" href="#">REMOVE</Button>
            <Button color="blue-grey" href="#">UPDATE</Button>
            {/* <Icon icon="edit"/> */}
        </CardBody>
    </Card>
);

export default RuleCard;
