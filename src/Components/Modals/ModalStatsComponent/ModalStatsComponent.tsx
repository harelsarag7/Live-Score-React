import "./ModalStatsComponent.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LiveScore } from "../../../interfaces/LiveScoreInterface";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalStatsComponent({ game }: { game: LiveScore }): JSX.Element {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="ModalStatsComponent">
      <div>
       
      <Button className="stats-icon-button" onClick={handleOpen}> <img className="stats-icon" src="https://i.ibb.co/xfFn4fq/pie-chart.png" alt="" /></Button>
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
          <Typography id="modal-stats-description" sx={{ mt: 2 }}>

                <div className="stats-container">
                    <div id="row" className="row1">
                        <div>{game.statistics[0].home}</div>
                        <div id="stat-text">SHOTS</div>
                        <div>{game.statistics[0].away}</div>
                    </div>
                    <div id="row" className="row2">
                        <div>{game.statistics[1].home}</div>
                        <div id="stat-text">SHOTS ON TARGET</div>
                        <div>{game.statistics[1].away}</div>
                    </div>
                    <div id="row" className="row3">
                        <div>{game.statistics[11].home}</div>
                        <div id="stat-text">YELLOW CARDS</div>
                        <div>{game.statistics[11].away}</div>
                    </div>
                    <div id="row" className="row4">
                        <div>{game.statistics[9].home}</div>
                        <div id="stat-text">OFFSIDES</div>
                        <div>{game.statistics[9].away}</div>
                        </div>
                    <div id="row" className="row5">
                        <div>{game.statistics[8].home}</div>
                        <div id="stat-text">CORNERS</div>
                        <div>{game.statistics[8].away}</div>
                    </div>
                    <div id="row" className="row6">
                        <div>{game.statistics[10].home}</div>
                        <div id="stat-text">POSSESION</div>
                        <div>{game.statistics[10].away}</div>
                    </div>


                </div>


          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalStatsComponent;
