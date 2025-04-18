function Projects() {
    return  <div className='projectsContainer'>
            <div className='projectsHeader'>
            <h2>Projects</h2>
            <p>Here are some of the projects I have worked on:</p>
            </div>
            <div className='projects'>
            <div className='spotifyApp'>
            <p id='spotifyText'>Spotify Lyrics Web App</p>
            <a id='deploy' href='https://glittering-croquembouche-e880b3.netlify.app/'>Live Demo</a>
            <a id='github' href='https://github.com/JasonRahimi2/SpotifyLyrics'>Source Code</a>
            </div>
            <div className='flask'>
            <p>Stress Detection Flask API</p>
            <a id='flaskDeploy' href='https://d2rhpbdpauukkk.cloudfront.net'>Live Demo</a>
            <a id='flaskGithub' href='https://github.com/JasonRahimi2/StressDetection'>Source Code</a>
            </div>
            <div className='smartphonePredictions'>
            <p>Python Smartphone Price Predictions</p>
            <a href='https://github.com/JasonRahimi2/INST414_Project'>Source Code</a>
            </div>
            <div className='rProject'>
            <p>R Visualizations and Statistics</p>
            <a href='https://github.com/JasonRahimi2/Statistics_R'>Source Code</a>
            </div>
            <div className='pythonVisualization'>
            <p>Python Visualization Generator Application</p>
            <a href='https://github.com/JasonRahimi2/CPAM_Program'>Source Code</a>
            </div>
            </div>
            </div>
}

export default Projects