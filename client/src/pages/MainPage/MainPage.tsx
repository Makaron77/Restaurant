import React from 'react';
import './MainPage.scss';
import NavBar from '../../components/NavBar/NavBar';
import MainComponent from '../../components/PageComponents/WelcomePageComponents/MainComponent/MainComponent';
import HeaderHistoryComponent from '../../components/PageComponents/HistoryPageComponents/HeaderHistoryComponent/HeaderHistoryComponent';
import MainHistoryComponent from '../../components/PageComponents/HistoryPageComponents/MainHistoryComponent/MainHistoryComponent';
import OfferPageComponent from '../../components/PageComponents/OfferPageComponent/OfferPageComponent';
import DishesPageComponent from '../../components/PageComponents/DishesPageComponent/DishesPageComponent';
import MenuPageComponent from '../../components/PageComponents/MenuPageComponent/MenuPageComponent'
import CarouselComponent from '../../components/Carousel/CarouselComponent';
import CommentPageComponent from '../../components/PageComponents/CommentPageComponent/CommentPageComponent';
import GalleryPageComponent from '../../components/PageComponents/GalleryPageComponent/GalleryPageComponent';

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

				<MainHistoryComponent />
			</div>
			<div className='container__offer'>
				<OfferPageComponent />
			</div>
			<div className='container__dishes'>
				<DishesPageComponent />
			</div>
			<div className='container__menu'>
				<MenuPageComponent />
			</div>

			<div className='container__comments'>
				<CommentPageComponent />
			</div>

			<div className='container__gallery'>
				<GalleryPageComponent/>
			</div>
		</div>
	);
}
