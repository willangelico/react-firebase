var React = require('react')
var List = require('./../List')
var firebase = require('firebase')
 var ReactFireMixin = require('reactfire')

var Main = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function(){
		return	{
			data: [],
			name: '',
			age: '',
			key: ''
		}
	},
	onChangeName: function(e){
		this.setState({
			name: e.target.value
		})
	},
	onChangeAge: function(e){
		this.setState({
			age: e.target.value
		})
	},
	removeItem: function(key){
		this.fireBaseRef.child(key).remove()
	},
	updateItem: function(key){
		var self = this	
		this.fireBaseRef.child(key).once('value').then(function(snapshot) {			
		 	self.setState({
				name: snapshot.val().name,
				age: snapshot.val().age,
				key: key
			})
		})		
	},
	handleSubmit: function(e){
		e.preventDefault()
		if(!this.state.name || !this.state.age){
			alert('Please fill in the fields');
		}
		if(!this.state.key){
			this.fireBaseRef.push({
				name: this.state.name,
				age: this.state.age
			})	
		}else{
			this.fireBaseRef.child(this.state.key).update({
				name: this.state.name,
				age: this.state.age
			})	
		}
		this.setState({
			name: '',
			age: ''
		})
	},
	componentWillMount: function(){
		this.fireBaseRef =  firebase.database().ref('data')
		this.bindAsArray(this.fireBaseRef, 'data')		
	},

	render: function(){
		return (
			<div>
				
				<div className="col-md-6">
					<h4>Create</h4>
					<form>
						<div className="form-group">
							<input type="text" value={this.state.name} onChange={this.onChangeName} className="form-control" placeholder="Name" />
						</div>
						<div className="form-group">
							<input type="number" value={this.state.age} onChange={this.onChangeAge} className="form-control" placeholder="Age" />
						</div>
						<div className="form-group">
							<button className="btn btn-default" type="button" onClick = { this.handleSubmit }>Add</button>
						</div>
					</form>
				</div>
				<div className="col-md-6">
					<List items={this.state.data} removeItem={this.removeItem} updateItem={this.updateItem} />
				</div>
			</div>
		)
	}
})

module.exports = Main