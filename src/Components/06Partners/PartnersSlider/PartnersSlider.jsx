import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar} from '@fortawesome/free-regular-svg-icons'


import styles from './PartnersSlider.module.scss'
import './PartnersSliderDots.scss'
import prevArrow from '../img/prevArrow.png'
import nextArrow from '../img/nextArrow.png'


const SliderInfoNextArrow = (props) => {
	const { onClick } = props;
	return (
		<div className={styles.SliderInfoNextArrow}
			onClick={onClick}>
			<img src={nextArrow} alt='SliderInfoNextArrow' />
		</div>
	);
}

const SliderInfoPrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div className={styles.SliderInfoPrevArrow}
			onClick={onClick}>
			<img src={prevArrow} alt='SliderInfoPrevArrow' />
		</div>
	);
}

export const PartnersSlider = ({ partnersArr }) => {
	const [nav1, setNav1] = useState(null)
	const [nav2, setNav2] = useState(null)

	useEffect(() => {
		setNav1()
		setNav2()
	}, [])

	const settingsSliderPhoto = {
		dots: true,
		arrows: false,
		initialSlide: 1,
		infinite: true,
		customPaging: () => <div className='dotItemPartners'></div>,
		dotsClass: 'slick-dots dotsListPartners',
	}

	const settingsSliderInfo = {
		arrows: true,
		initialSlide: 1,
		infinite: true,
		nextArrow: <SliderInfoNextArrow />,
		prevArrow: <SliderInfoPrevArrow />
	}

	const showRating = (maxRating, currentRating) => {
		let goodPoins, badPoints, totalPoints = []
		for (let i = 0; i < currentRating; i++) {
			goodPoins = <span className={styles.goodPoins} key={i}>
				<FontAwesomeIcon icon={fullStar} />
			</span>
			totalPoints.push(goodPoins)
		}
		for (let i = 0; i < maxRating - currentRating; i++) {
			badPoints = <span className={styles.badPoints} key={currentRating + i}>
				<FontAwesomeIcon icon={emptyStar} />
			</span>
			totalPoints.push(badPoints)
		}
		return totalPoints
	}

	return (
		<div className={styles.partnersSlider}>
			<div className={styles.sliderPhotoWrapper}>
				<Slider
					{...settingsSliderPhoto}
					className={styles.sliderPhoto}
					asNavFor={nav2}
					ref={(slider1) => setNav1(slider1)}>
					{partnersArr.map(partner => <div key={partner.id}
						className={styles.partnerPhoto}>
						<img src={partner.img} alt={`partner${partner.id}`} />
					</div>)}
				</Slider>
			</div>
			<div className={styles.sliderInfoWrapper}>
				<Slider
					{...settingsSliderInfo}
					className={styles.sliderInfo}
					asNavFor={nav1}
					ref={(slider2) => setNav2(slider2)}>
					{partnersArr.map(partner => <div key={partner.id}
						className={styles.partnerInfo}>
						<h4>{partner.name}
							<span> / {partner.position}</span>
						</h4>
						<p>{partner.phrase}</p>
						<div className={styles.partnerPoints}>
							{showRating(partner.maxRating, partner.currentRating)}
						</div>
					</div>)}
				</Slider>
			</div>
		</div>
	)
}