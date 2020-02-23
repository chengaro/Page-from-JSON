import React from 'react'
import PropTypes from 'prop-types'
import RichTextComponent from './RichTextComponent'

function GridComponent({ metadata }) {
  return (
    <section className='grid'>
      <div className='row'>
        {metadata.components.map((v, k) => (
          <div className={`col-${v.col}`} key={k}>
            <RichTextComponent metadata={v.metadata} />
          </div>
        ))}
      </div>
    </section>
  )
}

GridComponent.propTypes = {
  metadata: PropTypes.object.isRequired
}

export default GridComponent
