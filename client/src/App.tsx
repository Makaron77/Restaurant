import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePageComponent from './PageComponents/WelcomePageComponent/WelcomePageComponent';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<WelcomePageComponent/>}></Route>
			</Routes>
		</>
	);
}

export default App;
