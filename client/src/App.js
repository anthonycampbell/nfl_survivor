import { React } from 'react';
import { useState } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import Leagues from './routes/Leagues';

const App = function () {
	const storedUser = JSON.parse(localStorage.getItem('user'))
	const [user, setUser] = useState(storedUser ? storedUser: null)
	
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