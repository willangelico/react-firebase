var React = require('react')

var List = React.createClass({
	render: function(){
		var self = this
		var create = function(item, index){			
			return(
				<tr key={ index }>
					<td>
						{item.name}
					</td>
					<td>
						{item.age}
					</td>
					<td>
						<button type="button" className="btn btn-danger" onClick={self.props.removeItem.bind(null, item['.key'])}>
							<i className="fa fa-trash"></i>
						</button>
					</td>
				</tr>
			)
		}
		return(
			<div>
				<h4>Listing...</h4>
				<table className="table table-border">
					<thead>
						<tr>
							<th>Name</th>
							<th>Age</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.props.items.map(create)}
					</tbody>
				</table>
			</div>
		)
	}
});
module.exports = List