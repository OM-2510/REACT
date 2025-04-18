import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './mainbody.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
    <>
      <Header/>
      <Main />
      <Footer />
    </>
    
)
