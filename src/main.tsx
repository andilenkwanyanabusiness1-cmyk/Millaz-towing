import React from 'react'
import ReactDOM from 'react-dom/client'
import { LogosSection } from '@/components/ui/hero-1'

// We only want to replace the LogosSection (Trust Bar) for now as requested.
// The user asked for the round robin animation in the trust bar.

const trustBarRoot = document.getElementById('trust-bar-root')
if (trustBarRoot) {
    ReactDOM.createRoot(trustBarRoot).render(
        <React.StrictMode>
            <LogosSection />
        </React.StrictMode>,
    )
}

// We could also replace the Header if needed, but let's stick to the request first.
const headerRoot = document.getElementById('header-root')
if (headerRoot) {
    // If we want to replace the existing nav with the React Header:
    // ReactDOM.createRoot(headerRoot).render(
    //   <React.StrictMode>
    //     <Header />
    //   </React.StrictMode>,
    // )
}
