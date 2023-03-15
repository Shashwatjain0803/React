function VideosList(props) {
    const renderList = () => {
        
    }
    console.log(props);
    return (
        <div>
            <h1>VideosList</h1>
            {props.videos.length}

            {renderList()}
        </div>
    )
}
export default VideosList;