import React, {Component} from 'react'
import CardContainer from '../CardContainer'

class UserContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickerNumber: 0
		}
	}


	render() {
		return (
			<React.Fragment>
				<h2> User Container</h2>
				<div> This is an element</div>
				<p> {this.state.clickerNumber} </p>
				<button className='tester' onClick={ () => this.setState({clickerNumber: this.state.clickerNumber + 1})}> Click Here </button>
				<CardContainer />
			</React.Fragment>
		)
	}
}

export default UserContainer 