import React, { useState } from 'react';
import './NavBar.scss';
import Button from '../Buttons/Button/Button';
import navData from './navData.js';
import BurgerMenuComponent from './BurgerMenuComponent/BurgerMenuComponent.js';
export default function NavBar() {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<div className='nav'>
			<div className='nav__logo'>
				<a href='#'>
					<img src='images/logo.svg' alt='Лого' />
				</a>
			</div>

			<div className='nav__list'>
				{navData.map((item, i) => (
					<a key={i} href={item.href}>
						{item.label}
					</a>
				))}
			</div>

			<div className='nav__basket'>
				<a href='#'>
					<svg
						className='nav__basket--svg'
						height='1698.268px'
						version='1.1'
						viewBox='0 0 1489.733 1698.268'
						width='1489.733px'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='shopping_bag_2'>
							<path d='M1489.668,1540.226l-50.734-1145.759c-0.896-84.585-70.35-153.199-155.591-153.199h-257.892   C1004.523,106.268,886.593,0,744.689,0C602.747,0,484.784,106.268,463.85,241.268H206.313   c-85.217,0-154.649,68.616-155.543,153.202L0.064,1540.188C0.022,1541.16,0,1542.146,0,1543.121   c0,85.543,69.797,155.146,155.592,155.146h1178.556c85.79,0,155.586-69.583,155.586-155.127   C1489.733,1542.166,1489.712,1541.2,1489.668,1540.226z M744.689,132.141c68.746,0,126.941,46.126,145.617,109.126H598.998   C617.684,178.268,675.908,132.141,744.689,132.141z M1334.147,1566.268H155.592c-12.811,0-22.917-9.645-23.43-22.062   l50.674-1145.048c0.043-0.971,0.064-2.111,0.064-3.084c0-12.695,10.283-22.806,23.412-22.806H460v241.459   c0,36.49,29.51,66.07,66,66.07s66-29.58,66-66.07V373.268h304v241.459c0,36.49,29.51,66.07,66,66.07s66-29.58,66-66.07V373.268   h255.343c13.153,0,23.457,10.095,23.457,22.79c0,0.974,0.021,2.023,0.064,2.998l50.706,1145.117   C1357.057,1556.586,1346.953,1566.268,1334.147,1566.268z' />
						</g>
						<g id='Layer_1' />
					</svg>
				</a>
			</div>

			<div className='nav__contacts'>
				<div className='nav__contacts--numPhone'>
					<div className='nav__contacts--images'>
						<svg
							className='nav__contacts--svg'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z' />
							<path d='M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z' />
						</svg>
					</div>

					<div className='nav__contacts--number'>
						<a href='#'>+999-888-76-54</a>
					</div>
				</div>

				<div className='nav__contacts--text'>
					Свяжитесь с нами для бронирования
				</div>
			</div>
			<Button className='nav__btn'>ЗАКАЗ СТОЛИКА</Button>

			<div
				onClick={() => setMenuActive(!menuActive)}
				className='nav__burgerMenu'
			>
				<svg
					className='nav__burgerMenu--svg'
					width='31'
					height='18'
					viewBox='0 0 31 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<rect width='30.875' height='3.25' rx='1.625' fill='#FF7400' />
					<rect
						y='7.25'
						width='30.875'
						height='3.25'
						rx='1.625'
						fill='#FF7400'
					/>
					<rect y='14.5' width='30.875' height='3.25' rx='1.625' fill='none' />
				</svg>
			</div>
			<div className='burger__component'>
				<BurgerMenuComponent active={menuActive} setActive={setMenuActive} />
			</div>
		</div>
	);
}
