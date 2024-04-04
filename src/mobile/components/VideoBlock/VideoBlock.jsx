import {Box, Typography} from "@mui/material";
import 'mui-player/dist/mui-player.min.css'
import ReactPlayer from "react-player";
import {useRef} from "react";
import PageStore from "../../../store/PageStore";

const VideoBlock = () => {
  const playerRef = useRef(null);
  const {videoLink} = PageStore;
  const handlePlayPause = () => {
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px'
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins medium",
          fontSize: '35px'
        }}
      >
        What is The Gate?
      </Typography>
      <Box
        // className="player-wrapper"
        
      >
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          url={videoLink}
          width="100%"
          height="200px"
          controls={true}
          playing={false}
          // onPlay={handlePlayPause}
        />
      </Box>
    </Box>
  );
};

export default VideoBlock;