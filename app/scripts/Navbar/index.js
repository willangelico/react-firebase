var React = require('react')

var Navbar = React.createClass({
	render: function(){
		return(
			<div className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a href className="navbar-brand">App</a>
					</div>
					<ul className="nav navbar-nav">
						<li><a href>Home</a></li>
					</ul>
				</div>
			</div>
		)
	}
})

module.exports = Navbar