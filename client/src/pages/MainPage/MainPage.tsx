import React from 'react';
import './MainPage.scss';
import NavBar from '../../components/NavBar/NavBar';
import MainComponent from '../../components/PageComponents/WelcomePageComponents/MainComponent/MainComponent';
import HeaderHistoryComponent from '../../components/PageComponents/HistoryPageComponents/HeaderHistoryComponent/HeaderHistoryComponent';

export default function MainPage() {
	return (
		<div className='container'>
			<div className='background'>
				<div className='container__welcome'>
					<NavBar />
					<MainComponent />
				</div>
			</div>

			<div className='container__history'>
				<HeaderHistoryComponent />
			</div>
		</div>
	);
}
