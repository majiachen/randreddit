import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>

        <div className="ad-container">
            {/* Left Sidebar Ad */}
            <div className="left-ad">
                <script async crossOrigin="anonymous"
                        src=""></script>
                {/* Your first AdSense ad unit script here */}
            </div>
        </div>
        <App/>
        <div className="ad-container">
            {/* Right Sidebar Ad */}
            <div className="right-ad">
                <script async crossOrigin="anonymous"
                        src=""></script>
                {/* Your second AdSense ad unit script here */}
            </div>
        </div>
    </StrictMode>,
)
