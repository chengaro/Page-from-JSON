import React from 'react'
import PropTypes from 'prop-types'

function FormComponent({
  data: { title, fields, field_groups, submit_button }
}) {
  const styles = {
    submit: {
      padding: '12px 24px',
      background: 'linear-gradient(98.3deg, #93E08C -1.93%, #78CEBF 97.03%)',
      borderRadius: '3px',
      fontWeight: '600',
      fontSize: '15px',
      color: '#323232'
    },
    label: {
      fontSize: '12px',
      lineHeight: '15px',
      color: '#323232'
    },
    checkbox: {}
  }

  fields.forEach(field => {
    field.group = field.group || 'undefined'
  })
  field_groups.undefined = 'col'

  const submitHandler = evt => {
    evt.preventDefault()
  }

  function groupBy(list, keyGetter) {
    const map = new Map()
    list.forEach(item => {
      const key = keyGetter(item)
      const collection = map.get(key)
      if (!collection) {
        map.set(key, [item])
      } else {
        collection.push(item)
      }
    })
    return map
  }

  const grouped = groupBy(fields, field => field.group)

  return (
    <form method='POST' action='/' onSubmit={submitHandler}>
      <h2>{title}</h2>
      <div className='row'>
        {Object.keys(field_groups).map(groupKey => (
          <div className={field_groups[groupKey]} key={groupKey}>
            <div className='row mb-2'>
              {grouped.get(groupKey).map(field => (
                <div
                  className={`form-group mb-2 ${
                    grouped.get(groupKey).length > 1 ? 'col-md-6' : 'col'
                  }`}
                  key={field.name}
                >
                  {field.type !== 'textarea' && field.type !== 'checkbox' ? (
                    <>
                      <label htmlFor={field.name} style={styles.label}>
                        {field.label}
                      </label>
                      <input
                        className='form-control form-control-lg'
                        type={field.type}
                        name={field.name}
                        required={field.required}
                      />
                    </>
                  ) : field.type === 'textarea' ? (
                    <>
                      <label htmlFor={field.name} style={styles.label}>
                        {field.label}
                      </label>
                      <textarea
                        className='form-control form-control-lg'
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        rows='4'
                      />
                    </>
                  ) : (
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name={field.name}
                        value={field.name}
                        id={`checkbox_${field.name}`}
                        style={styles.checkbox}
                      />
                      <label
                        htmlFor={`checkbox_${field.name}`}
                        style={styles.label}
                        className='form-check-label'
                        dangerouslySetInnerHTML={{ __html: field.label }}
                      ></label>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {submit_button && (
        <button type='submit' style={styles.submit}>
          {submit_button.text}
        </button>
      )}
    </form>
  )
}

FormComponent.propTypes = {
  data: PropTypes.object.isRequired
}

export default FormComponent
