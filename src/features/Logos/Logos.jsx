import firstLogos from '/src/svg/firstLogos.svg';
import secondLogos from '/src/svg/secondLogos.svg';
import {Box, Stack} from '@mui/material';

const Logos = () => {
  return (
    <Stack
      sx={{
        marginTop: '100px'
      }}
      direction={'column'}
      spacing={2}
    >
      <Box
        component={'img'}
        src={firstLogos}
      />
      <Box
        component={'img'}
        src={secondLogos}
      />
    </Stack>
  );
}

export default Logos;