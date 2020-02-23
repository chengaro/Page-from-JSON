import React from 'react'
import PropTypes from 'prop-types'
import './GalleryComponent.css'

function GalleryComponent({ metadata: { title, images, slidesPerView } }) {
  const numViews = Math.ceil(images.length / slidesPerView)

  const styles = {
    innerCol: {
      MsFlex: `0 0 ${100 / slidesPerView}%`,
      flex: `0 0 ${100 / slidesPerView}%`,
      maxWidth: `${100 / slidesPerView}%`
    }
  }

  return (
    <section className='gallery'>
      <h2 className='gallery-title py-4'>{title}</h2>
      <div id='galleryCarousel' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          {[...Array(numViews).keys()].map(v => (
            <li
              data-target='#galleryCarousel'
              data-slide-to={v}
              key={v}
              className={v === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
        <div className='carousel-inner'>
          {[...Array(numViews).keys()].map(outer => (
            <div
              className={outer === 0 ? 'carousel-item active' : 'carousel-item'}
              key={outer}
            >
              <div className='row'>
                {[...Array(slidesPerView).keys()].map(inner => (
                  <div
                    className='col pb-3'
                    key={(inner + 1) * (outer + 1)}
                    style={styles.innerCol}
                  >
                    {images[outer * slidesPerView + inner] ? (
                      <img
                        src={images[outer * slidesPerView + inner]}
                        alt='...'
                        className='rounded'
                      />
                    ) : (
                      ''
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a
          className='carousel-control-prev'
          href='#galleryCarousel'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#galleryCarousel'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </section>
  )
}

GalleryComponent.propTypes = {
  metadata: PropTypes.object.isRequired
}

export default GalleryComponent
