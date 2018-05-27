import React, { Component } from 'react';
import Category from './Category.jsx';

export default class ExistingCategories extends Component {
    constructor() {
        super();
        this.state = { categories: [] };
    }
    componentDidMount = () => {
        try {
                fetch(`http://dvm-vproto.aws.talentwise.com/product/`) 
                .then(result => {
                    return result.json();
                }).then(data => {
                    this.setState({categories: data})
                });
        } catch (ex) {

        }
    };
    render() {
        return (
            <div>
                {this.state.categories.map( (category) => {
                    if (category.name === this.props.selectedCategory) {
                        console.log(category);
                        return <Category key={category.id} categoryName={category.name} ruleSets={category.rulesets} />
                    } else {
                        return (<div key={Math.random()}></div>);
                    }
                })}
            </div>
        );
    }
}