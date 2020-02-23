import React from 'react'
import PropTypes from 'prop-types'
import GalleryComponent from './components/GalleryComponent'
import GridComponent from './components/GridComponent'
import FormComponent from './components/FormComponent'
import Footer from './components/Footer'

const Factory = {
  GalleryComponent,
  GridComponent
}

function App({ schema }) {
  return (
    <>
      <div className='container-fluid px-3 px-sm-5'>
        {schema.components &&
          schema.components.map((v, k) =>
            React.createElement(Factory[v.type], {
              key: k,
              metadata: v.metadata
            })
          )}
        {schema.form && <FormComponent data={schema.form} />}
      </div>
      <Footer />
    </>
  )
}

App.propTypes = {
  schema: PropTypes.object.isRequired
}

export default App
