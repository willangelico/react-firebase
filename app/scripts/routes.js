var React = require('react')
var ReactRouter = require('react-router')
var Main = require('./Main')
var Frame = require('./Frame')

var Router = ReactRouter.Router
var Route = ReactRouter.Route

module.exports = (
	<Router history={ReactRouter.hashHistory}>
		<Route component={Frame}>
			<Route path="/" component={Main} />
		</Route>
	</Router>
)