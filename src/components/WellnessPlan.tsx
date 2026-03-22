import { useState } from 'react'

interface Exercise {
  id: number
  name: string
  duration: string
  completed: boolean
}

function WellnessPlan() {
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: 1, name: 'Morning Walk', duration: '30 minutes', completed: true },
    { id: 2, name: 'Stretching Exercises', duration: '10 minutes', completed: false },
    { id: 3, name: 'Blood Sugar Check', duration: '5 minutes', completed: true },
    { id: 4, name: 'Evening Walk', duration: '20 minutes', completed: false }
  ])

  const toggleExercise = (id: number) => {
    setExercises(exercises.map(ex => 
      ex.id === id ? { ...ex, completed: !ex.completed } : ex
    ))
  }

  const completionRate = Math.round((exercises.filter(e => e.completed).length / exercises.length) * 100)

  return (
    <div className="wellness-plan">
      <h2>Your Personalized Wellness Plan</h2>
      
      <div className="plan-overview">
        <div className="overview-card">
          <div className="progress-circle">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray={`${completionRate}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">{completionRate}%</text>
            </svg>
          </div>
          <div className="overview-text">
            <h3>Today's Progress</h3>
            <p>{exercises.filter(e => e.completed).length} of {exercises.length} tasks completed</p>
          </div>
        </div>
      </div>

      <div className="daily-plan">
        <h3>Today's Activities</h3>
        {exercises.map(exercise => (
          <div key={exercise.id} className={`activity-card ${exercise.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={exercise.completed}
              onChange={() => toggleExercise(exercise.id)}
              className="activity-checkbox"
            />
            <div className="activity-info">
              <div className="activity-name">{exercise.name}</div>
              <div className="activity-duration">{exercise.duration}</div>
            </div>
            {exercise.completed && <span className="check-icon">✓</span>}
          </div>
        ))}
      </div>

      <div className="ai-recommendations">
        <h3>🤖 AI-Powered Recommendations</h3>
        
        <div className="recommendation-card">
          <div className="rec-header">
            <span className="rec-icon">💪</span>
            <span className="rec-title">Exercise Adjustment</span>
          </div>
          <p>Based on your recent blood pressure readings, consider adding 10 minutes to your evening walk. Your morning walks have shown positive impact!</p>
        </div>

        <div className="recommendation-card">
          <div className="rec-header">
            <span className="rec-icon">🥗</span>
            <span className="rec-title">Dietary Suggestion</span>
          </div>
          <p>Your glucose levels spike after lunch. Try incorporating more fiber-rich foods like oats, vegetables, and whole grains in your midday meal.</p>
        </div>

        <div className="recommendation-card">
          <div className="rec-header">
            <span className="rec-icon">😴</span>
            <span className="rec-title">Sleep Optimization</span>
          </div>
          <p>Your sleep quality improves when you exercise in the morning. Try to maintain your morning walk routine for better rest.</p>
        </div>
      </div>

      <div className="health-goals">
        <h3>Health Goals</h3>
        <div className="goals-list">
          <div className="goal-item">
            <span className="goal-icon">🎯</span>
            <div className="goal-info">
              <div className="goal-name">Reduce HbA1c to 6.5%</div>
              <div className="goal-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '60%'}}></div>
                </div>
                <span className="goal-status">60% to target</span>
              </div>
            </div>
          </div>

          <div className="goal-item">
            <span className="goal-icon">💓</span>
            <div className="goal-info">
              <div className="goal-name">Maintain BP below 130/85</div>
              <div className="goal-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '85%}}></div>
                </div>
                <span className="goal-status">85% consistent</span>
              </div>
            </div>
          </div>

          <div className="goal-item">
            <span className="goal-icon">🏃</span>
            <div className="goal-info">
              <div className="goal-name">10,000 steps daily</div>
              <div className="goal-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '82%}}></div>
                </div>
                <span className="goal-status">8,200 / 10,000 today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WellnessPlan
