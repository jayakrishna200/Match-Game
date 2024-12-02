import './index.css'

import ProjectItem from '../ProjectItem'

import {Component} from 'react'

const EachTab = props => {
  const {eachTab, isActive, updateActiveTabId} = props
  const {tabId, displayText} = eachTab
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  const onUpdateActiveTabId = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li className="tab-item" key={eachTab.id}>
      <button
        className={`button ${activeTabClassName}`}
        onClick={onUpdateActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

class TabItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabsList: props.tabsList,
      activeTabId: props.tabsList[0].tabId,
      imagesList: props.imagesList,
      getProjectId: props.getProjectId,
    }
  }

  sendProjectId = id => {
    const {getProjectId} = this.state
    console.log('sendProjectId() is triggered', id)
    getProjectId(id)
  }

  getFilteredProjectsList = () => {
    const {activeTabId, imagesList} = this.state
    const filteredProjectsList = imagesList.filter(
      eachItem => eachItem.category === activeTabId,
    )
    return filteredProjectsList
  }
  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  render() {
    const {activeTabId, tabsList, imagesList} = this.state
    const filteredProjectsList = this.getFilteredProjectsList()
    console.log(filteredProjectsList)
    return (
      <>
        <div>
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <EachTab
                eachTab={eachTab}
                key={eachTab.tabId}
                isActive={activeTabId === eachTab.tabId}
                updateActiveTabId={this.updateActiveTabId}
              />
            ))}
          </ul>
          <div className="projects-container">
            <ul className="projects-list">
              {filteredProjectsList.map(eachItem => (
                <ProjectItem
                  projectItem={eachItem}
                  key={eachItem.id}
                  sendProjectId={this.sendProjectId}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default TabItem
