import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Layout from './components/Layout';

// pages
import Home from './pages/Home';
import Characters from './pages/Characters';

function App() {

	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/all-characters" component={Characters} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);

}

export default App;
