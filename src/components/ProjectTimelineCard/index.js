import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} =
    projectDetails

  return (
    <div className="project-container">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="project-duration-card">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="calender-card">
          <AiFillCalendar className="calender-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="visit-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
