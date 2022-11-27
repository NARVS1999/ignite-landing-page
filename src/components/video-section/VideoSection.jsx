import React from 'react'
import './VideoSection.css'

const headingVideo = 'Click the video to know more about our services';
const subHeadingVideo = 'We  are the  go to place of small Business owners to Manage their work, Build  a strong identity, attractive website, and captivate clients through social media and digital marketing.';

const VideoSection = () => {
  return (
    <div className='main-section'>
      <div className='img-container'>
        <iframe id='img-video' src="https://www.youtube.com/embed/11cta61wi0g" title="NewJeans (뉴진스) 'Hype Boy' Official MV (Performance ver.1)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='heading-video'>{headingVideo}</div>
      <div className='sub-heading-video'>{subHeadingVideo}</div>
    </div>
  )
}

export default VideoSection