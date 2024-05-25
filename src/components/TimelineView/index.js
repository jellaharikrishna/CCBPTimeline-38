import {Component} from 'react'

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="app-container">
        <div className="heading-container">
          <h1 className="myjourney-heading">
            MY JOURNEY OF <br />
            <span className="ccbp-heading">CCBP 4.0</span>
          </h1>
        </div>

        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(eachItem =>
            eachItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
            ) : (
              <ProjectTimelineCard
                key={eachItem.id}
                projectDetails={eachItem}
              />
            ),
          )}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
