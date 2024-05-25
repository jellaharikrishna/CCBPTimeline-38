import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} =
    courseDetails

  return (
    <div className="course-container">
      <div className="course-duration-card">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="clock-card">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="tagslist-container">
        {tagsList.map(eachTag => (
          <p className="taglist-item" key={eachTag.id}>
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
