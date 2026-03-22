import { useState, useEffect } from 'react'

interface HealthAlert {
  id: number
  type: 'warning' | 'info' | 'success'
  message: string
}

function Dashboard() {
  const [alerts, setAlerts] = useState<HealthAlert[]>([
    { id: 1, type: 'warning', message: 'Blood pressure reading above normal - consider checking with your doctor' },
    { id: 2, type: 'info', message: 'Time for your daily medication reminder' },
    { id: 3, type: 'success', message: 'Great job! You hit your daily step goal' }
  ])

  const [stats] = useState({
    steps: 8234,
    heartRate: 72,
    sleep: 7.5,
    waterIntake: 6
  })

  return (
    <div className="dashboard">
      <h2>Today's Overview</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👣</div>
          <div className="stat-value">{stats.steps.toLocaleString()}</div>
          <div className="stat-label">Steps</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">💓</div>
          <div className="stat-value">{stats.heartRate} bpm</div>
          <div className="stat-label">Heart Rate</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">😴</div>
          <div className="stat-value">{stats.sleep}h</div>
          <div className="stat-label">Sleep</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">💧</div>
          <div className="stat-value">{stats.waterIntake}/8</div>
          <div className="stat-label">Water (glasses)</div>
        </div>
      </div>

      <div className="alerts-section">
        <h3>Health Alerts & Reminders</h3>
        {alerts.map(alert => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            <span className="alert-icon">
              {alert.type === 'warning' ? '⚠️' : alert.type === 'info' ? 'ℹ️' : '✅'}
            </span>
            <span className="alert-message">{alert.message}</span>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn">📝 Log Symptoms</button>
          <button className="action-btn">💊 Take Medication</button>
          <button className="action-btn">🏃 Start Workout</button>
          <button className="action-btn">🩺 Schedule Checkup</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
