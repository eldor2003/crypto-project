import {Box, Typography} from "@mui/material";
import 'mui-player/dist/mui-player.min.css'
import ReactPlayer from "react-player";
import {useRef} from "react";
import PageStore from "../../store/PageStore";

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
        marginBottom: '90px'
      }}
    >
      <Typography
        sx={{
          fontSize: '48px',
          fontWeight: '500',
          fontFamily: 'Poppins SemiBold',
          marginBottom: '50px'
        }}
      >
        What is The Gate?
      </Typography>
      <Box className="player-wrapper">
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          url={videoLink}
          width="960px"
          height="499px"
          controls={true}
          playing={false}
          onPlay={handlePlayPause}
        />
      </Box>
    </Box>
  );
};

export default VideoBlock;