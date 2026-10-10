import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import UseCon from './useContextFuncrion/UseCon.jsx'

createRoot(document.getElementById('root')).render(
  <div>

    {/* <App /> */}
    <UseCon></UseCon>

  </div>


)
