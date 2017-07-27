var React = require('react')
var Navbar = require('./../Navbar')

var Frame = React.createClass({
	render: function(){
		return(
			<div className="container">
				<div className="row">
					<Navbar />
				</div>

				<div className="row">
					<main className="content">
						{this.props.children}
					</main>
				</div>
			</div>
		)
	}
});

module.exports = Frame