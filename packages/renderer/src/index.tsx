import * as React from 'react'
// import * as ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'

//ReactDOM.render(
//  <App />,
//  document.getElementById('root')
//)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)

