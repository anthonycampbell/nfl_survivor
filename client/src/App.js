import { React } from 'react';
import { useState } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import Leagues from './routes/Leagues';

const App = function () {
	const [user, setUser] = useState(
		localStorage.getItem('user')
		? localStorage.getItem('user')
		: null);
	if(user){
		return (
			<>
				<Leagues user={user}/>
				<Logout setUser={setUser}/>
			</>
		)
	}
	return (
		<Login setUser={setUser}/>
	);
};
export default App