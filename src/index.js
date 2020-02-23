import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const url = 'https://api.github.com/gists/4840b5d324bbf88acf8e9aeadcb85bb8'
const filename = 'page.json'

fetch(url, {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json; charset=utf-8'
  })
})
  .then(res => res.json())
  .then(json => JSON.parse(json.files[filename].content))
  .then(content =>
    ReactDOM.render(<App schema={content} />, document.getElementById('root'))
  )
