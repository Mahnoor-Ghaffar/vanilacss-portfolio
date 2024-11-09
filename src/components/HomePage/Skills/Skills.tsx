import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, perspiciatis iure distinctio quidem aperiam necessitatibus omnis possimus excepturi amet quos rerum? Perferendis repellat natus saepe quaerat quibusdam neque recusandae optio?
      </div>

      <div className="cells">
        <div className="cell">
          <img src="images/html-logo.webp" alt="html logo">
          <span>HTML</span>
        </div>
        
        <div className="cell">
          <img src="images/css-logo.webp" alt="css logo">
          <span>CSS</span>
        </div>
        
        <div className="cell">
          <img src="images/javascript-logo.webp" alt="javascript logo">
          <span>JavaScript</span>
        </div>
        
        <div className="cell">
          <img src="images/node-logo.webp" alt="node logo">
          <span>Node.js</span>
        </div>
        
        <div className="cell">
          <img src="images/react-logo.webp" alt="react logo">
          <span>React.js</span>
        </div>
      </div>
    </section>
  )
}

export default Skills