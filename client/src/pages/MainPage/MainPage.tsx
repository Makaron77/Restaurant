import React, { useContext, useRef } from 'react';
import './MainPage.scss';
import NavBar from '../../components/NavBar/NavBar';
import MainComponent from '../../components/PageComponents/WelcomePageComponents/MainComponent/MainComponent';
import HeaderHistoryComponent from '../../components/PageComponents/HistoryPageComponents/HeaderHistoryComponent/HeaderHistoryComponent';
import MainHistoryComponent from '../../components/PageComponents/HistoryPageComponents/MainHistoryComponent/MainHistoryComponent';
import OfferPageComponent from '../../components/PageComponents/OfferPageComponent/OfferPageComponent';
import DishesPageComponent from '../../components/PageComponents/DishesPageComponent/DishesPageComponent';
import MenuPageComponent from '../../components/PageComponents/MenuPageComponent/MenuPageComponent';
import CommentPageComponent from '../../components/PageComponents/CommentPageComponent/CommentPageComponent';
import GalleryPageComponent from '../../components/PageComponents/GalleryPageComponent/GalleryPageComponent';
import { UserContext } from '../../context/context';

export default function MainPage() {
	const { registerRef } = useContext(UserContext);

	return (
		<div className='container'>
			<div className='background'>
				<NavBar />
				<div
					className='container__welcome'
					ref={ref => registerRef('#home', ref)}
				>
					<MainComponent />
				</div>
			</div>

			<div className='container__history'>
				<HeaderHistoryComponent />
				<MainHistoryComponent />
			</div>

			<div className='container__offer'>
				<OfferPageComponent />
			</div>

			<div className='container__dishes'>
				<DishesPageComponent />
			</div>

			<div className='container__menu' ref={ref => registerRef('#menu', ref)}>
				<MenuPageComponent />
			</div>

			<div
				className='container__comments'
				ref={ref => registerRef('#reviews', ref)}
			>
				<CommentPageComponent />
			</div>

			<div className='container__gallery'>
				<GalleryPageComponent />
			</div>

			<div className='container__footer'></div>
		</div>
	);
}
