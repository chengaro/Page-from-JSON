import React from 'react'
import PropTypes from 'prop-types'

function RichTextComponent({ metadata: { title, text } }) {
  const styles = {
    header: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#323232'
    },
    text: {
      fontSize: '14px'
    }
  }
  return (
    <>
      <h2 style={styles.header}>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </>
  )
}

RichTextComponent.propTypes = {
  metadata: PropTypes.object.isRequired
}

export default RichTextComponent
