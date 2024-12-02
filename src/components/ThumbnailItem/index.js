import './index.css'

const ThumbnailItem = props => {
  const {activeThumbnailImg} = props

  return <img src={activeThumbnailImg} className="thumbnail" alt="match" />
}

// class ThumbnailItem extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       activeThumbnailImg: props.activeThumbnailImg,
//     }
//   }

//   // getThumbnailImgUrl = (thumbnailItem, getThumbnailId) => {
//   //   const thumbnailImgUrl = thumbnailItem.thumbnailUrl
//   //   thumbnailId = thumbnailItem.id
//   //   getThumbnailId(thumbnailId)
//   //   return thumbnailImgUrl
//   // }

//   // getThumbnailItem = () => {
//   //   const {imagesList} = this.state
//   //   const thumbnailItem =
//   //     imagesList[Math.ceil(Math.random() * imagesList.length - 1)]
//   //   return thumbnailItem
//   // }

//   render() {
//     const {activeThumbnailImg} = this.state

//     return <img src={activeThumbnailImg} className="thumbnail" />
//   }
// }

export default ThumbnailItem
