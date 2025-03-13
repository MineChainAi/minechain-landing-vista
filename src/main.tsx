
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'

// Wrap Analytics in a proper React component to avoid hooks errors
const AppWithAnalytics = () => {
  return (
    <>
      <App />
      <Analytics />
    </>
  );
};

createRoot(document.getElementById("root")!).render(<AppWithAnalytics />);
