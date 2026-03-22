import { useState } from 'react'

interface Metric {
  date: string
  bloodPressure: string
  glucose: number
  weight: number
  temperature: number
}

function HealthMetrics() {
  const [metrics] = useState<Metric[]>([
    { date: '2026-03-22', bloodPressure: '120/80', glucose: 95, weight: 70, temperature: 36.8 },
    { date: '2026-03-21', bloodPressure: '118/78', glucose: 92, weight: 70.2, temperature: 36.7 },
    { date: '2026-03-20', bloodPressure: '135/85', glucose: 110, weight: 70.5, temperature: 37.1 }
  ])

  const [newMetric, setNewMetric] = useState({
    bloodPressure: '',
    glucose: '',
    weight: '',
    temperature: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Metric logged! (Demo mode - not saved)')
  }

  return (
    <div className="health-metrics">
      <h2>Health Metrics Tracker</h2>
      
      <div className="metric-form-section">
        <h3>Log New Metrics</h3>
        <form onSubmit={handleSubmit} className="metric-form">
          <div className="form-group">
            <label>Blood Pressure (systolic/diastolic)</label>
            <input 
              type="text" 
              placeholder="120/80"
              value={newMetric.bloodPressure}
              onChange={(e) => setNewMetric({...newMetric, bloodPressure: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Blood Glucose (mg/dL)</label>
            <input 
              type="number" 
              placeholder="95"
              value={newMetric.glucose}
              onChange={(e) => setNewMetric({...newMetric, glucose: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Weight (kg)</label>
            <input 
              type="number" 
              step="0.1"
              placeholder="70.0"
              value={newMetric.weight}
              onChange={(e) => setNewMetric({...newMetric, weight: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Temperature (°C)</label>
            <input 
              type="number" 
              step="0.1"
              placeholder="36.8"
              value={newMetric.temperature}
              onChange={(e) => setNewMetric({...newMetric, temperature: e.target.value})}
            />
          </div>
          
          <button type="submit" className="submit-btn">📊 Log Metrics</button>
        </form>
      </div>

      <div className="metrics-history">
        <h3>Recent Readings</h3>
        <div className="metrics-table">
          <div className="table-header">
            <div>Date</div>
            <div>BP</div>
            <div>Glucose</div>
            <div>Weight</div>
            <div>Temp</div>
            <div>Status</div>
          </div>
          {metrics.map((metric, idx) => (
            <div key={idx} className="table-row">
              <div>{metric.date}</div>
              <div>{metric.bloodPressure}</div>
              <div>{metric.glucose} mg/dL</div>
              <div>{metric.weight} kg</div>
              <div>{metric.temperature}°C</div>
              <div>
                {metric.glucose > 100 || metric.bloodPressure.startsWith('13') ? 
                  <span className="status-warning">⚠️ Review</span> : 
                  <span className="status-good">✅ Normal</span>
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ai-insights">
        <h3>🤖 AI Health Insights</h3>
        <div className="insight-card">
          <p><strong>Pattern Detected:</strong> Your blood glucose tends to spike on March 20th. Consider reviewing your diet and activity level for that day.</p>
        </div>
        <div className="insight-card">
          <p><strong>Recommendation:</strong> Your blood pressure readings show improvement over the past week. Keep up your current exercise routine!</p>
        </div>
      </div>
    </div>
  )
}

export default HealthMetrics
