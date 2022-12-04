import "./ModalVideoComponent.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LiveScore } from "../../interfaces/LiveScoreInterface";
// import { useEffect } from "react";
import { useEffect, useState } from "react";


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 570,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function ModalVideoComponent({ game }: { game: LiveScore }): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [embed, setEmbed] = useState<string | undefined>(undefined);


    async function getVideos() {
        let search = game.event_home_team + " - " + game.event_away_team + " highlights";

        // if(open){

          
          const videos = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${search}&key=AIzaSyDZicw263xuSvE1bbBYeVkZIdTaaYaOQl8&type=video`)
        .then(res => res.json()).catch(e => console.log(e));
        // (videos.items[0].id.videoId);
        const videoId = (videos.items[0].id.videoId);
        const embedVideo:string = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
        console.log(embedVideo);
        
        return  setEmbed(embedVideo);
      // } else {
      //   return
      // }
        
    }
    // useEffect(() => {
    //     // const Search = getVideos();
    //     getVideos()
    //     // const embed:string = `https://www.youtube.com/embed/` + videoId + `?autoplay=1&mute=1`
    //     // console.log(embed);
        
    //     // setEmbed(`https://www.youtube.com/embed/` + videoId + `?autoplay=1&mute=1`)
    // }, [])
    return (
        <div className="ModalVideoComponent">
          <div>
           
          <Button className="video-icon-button" onClick={handleOpen} onMouseDown={getVideos}> <img className="video-icon" src="https://i.ibb.co/xqWJ1Bp/youtube.png" alt="" /></Button>
          </div>
          <Modal 
          
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                
                <div id="row">
                  <div className="modal-team-header">{game.event_home_team}</div>
                  <div className="modal-team-header"> VS</div>
                  <div className="modal-team-header">{game.event_away_team}</div>
                </div>
              </Typography>
              <Typography id="modal-video-description" sx={{ mt: 2 }}>
                {embed? 
              <iframe id="video-section" src={embed} allowFullScreen title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               : <></> }


              </Typography>
            </Box>
          </Modal>
        </div>
      );
}

export default ModalVideoComponent;

