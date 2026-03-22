import { useState } from 'react'

interface Medication {
  id: number
  name: string
  dosage: string
  frequency: string
  time: string
  taken: boolean
}

function MedicationTracker() {
  const [medications, setMedications] = useState<Medication[]>([
    { id: 1, name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', time: '09:00', taken: true },
    { id: 2, name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', time: '09:00', taken: true },
    { id: 3, name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily', time: '21:00', taken: false },
    { id: 4, name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', time: '21:00', taken: false }
  ])

  const toggleMedication = (id: number) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, taken: !med.taken } : med
    ))
  }

  const todayMeds = medications.filter(med => !med.taken)
  const completedMeds = medications.filter(med => med.taken)

  return (
    <div className="medication-tracker">
      <h2>Medication Schedule</h2>
      
      <div className="medication-summary">
        <div className="summary-card">
          <div className="summary-value">{completedMeds.length}/{medications.length}</div>
          <div className="summary-label">Taken Today</div>
        </div>
        <div className="summary-card">
          <div className="summary-value">{todayMeds.length}</div>
          <div className="summary-label">Pending</div>
        </div>
      </div>

      {todayMeds.length > 0 && (
        <div className="medication-section">
          <h3>⏰ Upcoming Medications</h3>
          {todayMeds.map(med => (
            <div key={med.id} className="medication-card pending">
              <div className="med-info">
                <div className="med-name">{med.name}</div>
                <div className="med-details">{med.dosage} • {med.frequency} • {med.time}</div>
              </div>
              <button 
                className="take-btn"
                onClick={() => toggleMedication(med.id)}
              >
                ✓ Mark Taken
              </button>
            </div>
          ))}
        </div>
      )}

      {completedMeds.length > 0 && (
        <div className="medication-section">
          <h3>✅ Completed Today</h3>
          {completedMeds.map(med => (
            <div key={med.id} className="medication-card completed">
              <div className="med-info">
                <div className="med-name">{med.name}</div>
                <div className="med-details">{med.dosage} • {med.frequency} • {med.time}</div>
              </div>
              <button 
                className="undo-btn"
                onClick={() => toggleMedication(med.id)}
              >
                ↺ Undo
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="add-medication">
        <h3>Add New Medication</h3>
        <button className="add-btn">+ Add Medication</button>
      </div>

      <div className="medication-reminders">
        <h3>🔔 Smart Reminders</h3>
        <div className="reminder-card">
          <p>Reminders are set based on your daily routine and past adherence patterns</p>
          <div className="reminder-settings">
            <label>
              <input type="checkbox" defaultChecked /> Enable push notifications
            </label>
            <label>
              <input type="checkbox" defaultChecked /> Smart timing (adjust based on routine)
            </label>
            <label>
              <input type="checkbox" /> Remind caregivers if missed
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicationTracker
