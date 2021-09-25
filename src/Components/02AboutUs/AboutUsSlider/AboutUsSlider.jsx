import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './AboutUsSlider.module.scss'
import './AboutUsSliderDots.scss'

export const AboutUsSlider = ({ slides }) => {
	const slider = useRef(null)
	const socus = () => {
		console.log(slider)
		slider.current.focus()
	}

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
		onSwipe: () => {socus()}
	}

	return (
		<div className={styles.aboutUsSliderContainer} ref={slider} tabIndex={1}>
			<Slider {...settings} className={styles.aboutUsSlider}>
				{slides.map(slide => <div className={styles.slideItem} key={slide.id}>
					<img src={slide.img} alt={`slide${slide.id}`} />
				</div>)}
			</Slider>
		</div>
	)
}