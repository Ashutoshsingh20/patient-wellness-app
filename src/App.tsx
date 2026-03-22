import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import HealthMetrics from './components/HealthMetrics'
import MedicationTracker from './components/MedicationTracker'
import WellnessPlan from './components/WellnessPlan'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="app">
      <header className="app-header">
        <h1>🏥 Patient Wellness App</h1>
        <p className="tagline">Your personalized health companion</p>
      </header>

      <nav className="nav-tabs">
        <button 
          className={activeTab === 'dashboard' ? 'active' : ''} 
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button 
          className={activeTab === 'metrics' ? 'active' : ''} 
          onClick={() => setActiveTab('metrics')}
        >
          💓 Health Metrics
        </button>
        <button 
          className={activeTab === 'medications' ? 'active' : ''} 
          onClick={() => setActiveTab('medications')}
        >
          💊 Medications
        </button>
        <button 
          className={activeTab === 'plan' ? 'active' : ''} 
          onClick={() => setActiveTab('plan')}
        >
          📋 Wellness Plan
        </button>
      </nav>

      <main className="app-content">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'metrics' && <HealthMetrics />}
        {activeTab === 'medications' && <MedicationTracker />}
        {activeTab === 'plan' && <WellnessPlan />}
      </main>

      <footer className="app-footer">
        <p>💡 AI-powered health insights • Built with React + TypeScript</p>
      </footer>
    </div>
  )
}

export default App
