import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { TopPage } from './components/pages/TopPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopPage />
  </StrictMode>,
)
