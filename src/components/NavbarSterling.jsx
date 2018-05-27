import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import Image from 'react-image-resizer';
import { BrowserRouter as Router } from 'react-router-dom';

export default class NavbarSterling extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleOptionSelection = this.handleOptionSelection.bind(this);

        this.state = {
            categories: [],
            productOptions: [
                {
                    value: "Select Product",
                    name: -1
                }
            ],
            value: "Select Product",
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleOptionSelection = (e) => {
        e.preventDefault();
        this.setState({ value: e.target.value });
        this.props.handleOptionSelection(e.target.value);
    }

    componentDidMount = () => {
        try {
                fetch(`http://dvm-vproto.aws.talentwise.com/product/`) 
                .then(result => {
                    return result.json();
                }).then(data => {
                    this.setState({categories: data})
                    this.state.categories.forEach((category) => {
                        this.state.productOptions.push(
                            {
                                name: category.name,
                                value: category.id
                            }
                        );
                    })
                });
        } catch (ex) {

        }
    };

    render() {
        return (
            <div>
            <Router>
                <Navbar color="grey" dark expand="sm" scrolling>
                    <NavbarBrand href="/">
                        <Image  src={require ("../images/sterling-talent-solutions-187x70.png")} height={35} width={100} />
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem>
                              <NavLink to="#">Admin</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#"></NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} value={this.state.value}>
                              <DropdownToggle nav caret onChange={this.handleOptionSelection}>{this.state.value}</DropdownToggle>
                              <DropdownMenu>
                                  {this.state.categories.map( (category) => {
                                    console.log(category);
                                        return <DropdownItem key={category.id} onClick={this.handleOptionSelection} value={category.name}>{category.name}</DropdownItem>
                                  })}
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
            </div>
        );
    }
}