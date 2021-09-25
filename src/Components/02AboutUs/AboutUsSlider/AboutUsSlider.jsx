import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './AboutUsSlider.module.scss'
import './AboutUsSliderDots.scss'

export const AboutUsSlider = ({ slides }) => {

	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 1,
		autoplay: true,
		customPaging: () => <div className='dotItemAboutUs'></div>,
		dotsClass: 'slick-dots dotsListAboutUs',
	}

	return (
		<div className={styles.aboutUsSliderContainer}>
			<Slider {...settings} className={styles.aboutUsSlider}>
				{slides.map(slide => <div className={styles.slideItem} key={slide.id}>
					<img src={slide.img} alt={`slide${slide.id}`} />
				</div>)}
			</Slider>
		</div>
	)
}