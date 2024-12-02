import './index.css'

const ProjectItem = props => {
  const {projectItem, sendProjectId} = props
  const {id, imageUrl, thumbnailUrl, category} = projectItem
  const onClickImage = () => {
    sendProjectId(id)
  }
  return (
    <li className="project-item">
      <button className="project-btn">
        <img
          src={thumbnailUrl}
          className="project-image"
          alt="thumbnail"
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default ProjectItem
