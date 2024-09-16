import React from 'react';
import './BookMenu.css';
// import styles from './BookMenu.module.scss';
import specialOffers from './bookMenuData';

export default function BookMenu() {
	return (
		<div className='container__book'>
			<div className='book'>
				<input className='input__book' type='checkbox' id='c1' />
				<input className='input__book' type='checkbox' id='c2' />
				<input className='input__book' type='checkbox' id='c3' />
				<div id='cover'></div>
				<div className='flipBook'>
					<div className='flip' id='p1'>
						<div className='back'>
							<img className='book__img' src='/images/menu2.jpg' alt='menu2' />
							<label className='backBtn' htmlFor='c1'>
								назад
							</label>
						</div>
						<div className='front'>
							<img className='book__img' src='/images/menu3.jpg' alt='menu2' />
							<label className='nextBtn' htmlFor='c1'>
								вперед
							</label>
						</div>
					</div>

					<div className='flip' id='p2'>
						<div className='back'>
							<label className='backBtn' htmlFor='c2'>
							назад
							</label>
						</div>
						<div className='front'>
							<img className='book__img' src='/images/menu4.jpg' alt='menu2' />
							<label className='nextBtn' htmlFor='c2'>
								вперед
							</label>
						</div>
					</div>
					<div className='flip' id='p3'>
						<div className='back'>
							<label className='backBtn' htmlFor='c3'>
								назад
							</label>
						</div>
						<div className='front'>
							<label className='nextBtn' htmlFor='c3'>
								вперед
							</label>
						</div>
					</div>
					<div className='flip' id='p4'>
						<div className='back'>
							<label className='backBtn' htmlFor='c4'>
								назад
							</label>
						</div>
						<div className='front'>
							<label className='nextBtn' htmlFor='c4'>
							
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
