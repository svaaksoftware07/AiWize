import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
const App = React.lazy(() => import('./App.jsx'))
import './index.css'
import Loader from './components/loader/Loader.jsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
)
