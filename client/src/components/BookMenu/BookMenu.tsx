import React from 'react'
import  './BookMenu.css';

export default function BookMenu() {
	return (
		<div className='container__book'>
			<div className='book'>
				<input className='input__book' type='checkbox' id='c1' />
				<input className='input__book' type='checkbox' id='c2' />
				<input className='input__book' type='checkbox' id='c3' />
				<div className='cover' id='cover'>
					<img className='book__img' src='images/menuPage1.jpg' alt='' />
				</div>
				<div className='flipBook'>
					<div className='flip' id='p1'>
						<div className='back'>
						
							<label className='backBtn' htmlFor='c1'>
								назад
							</label>
						</div>
						<div className='front'>
						
							
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
								вперед
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
