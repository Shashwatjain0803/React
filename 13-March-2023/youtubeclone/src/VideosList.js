function VideosList(props) {
    const renderList = () => {

        var list = props.videos.map (video => {
        return <li><img src={video.snippet.thumbnails.default.url}></img></li>
        })
        return list;
        
    }
    console.log(props);
    return (
        <div>
            <h1>VideosList</h1>
            {props.videos.length}

            <ul>
            {renderList()}
            </ul>
        </div>
    )
}
export default VideosList;