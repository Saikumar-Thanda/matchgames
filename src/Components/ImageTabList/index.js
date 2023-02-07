const ImageTabList = props => {
  const {imageList, onChangeThumbnail} = props
  const {thumbnailUrl, imageUrl} = imageList

  const onClickTab = () => {
    onChangeThumbnail(imageUrl)
  }

  return (
    <li>
      <button type="button">
        <img src={thumbnailUrl} alt="thumbnail" onClick={onClickTab} />
      </button>
    </li>
  )
}

export default ImageTabList
