import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const url = 'https://api.github.com/gists/7f353ca822d074d7ce22d3af3d13696f'
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
