import React from 'react';
import './MainPage.scss';
import NavBar from '../../components/NavBar/NavBar';
import MainComponent from '../../components/PageComponents/WelcomePageComponents/MainComponent/MainComponent';

export default function MainPage() {
	return (
		<div className='container'>
			
			<div className='container__welcome'>
				<NavBar />
				<MainComponent />
			
			</div>
		</div>
	);
}
