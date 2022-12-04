import { useEffect } from "react";
import "./Youtube.css";

function Youtube(): JSX.Element {

    async function getVideos(){
        // const videos = await fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZicw263xuSvE1bbBYeVkZIdTaaYaOQl8", {
        // const videos = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=maccabi&key=AIzaSyDZicw263xuSvE1bbBYeVkZIdTaaYaOQl8&type=video", {
        const videos = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=maccabi%20haifa-psg&key=AIzaSyDZicw263xuSvE1bbBYeVkZIdTaaYaOQl8&type=video")
        .then(res => res.json()).catch(e => console.log(e));

        console.log(videos.items[0].id.videoId);
        // console.log(videos);
        
    }

    useEffect(() => {
        getVideos()
    })
    return (
        <div className="Youtube">
			
        </div>
    );
}

export default Youtube;
