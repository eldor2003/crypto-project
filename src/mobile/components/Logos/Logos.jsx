import logos from '/src/svg/logos.svg';
import {Box, Stack} from '@mui/material';

const Logos = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px'
      }}
      direction={'column'}
      spacing={2}
    >
      <Box
        width={'90%'}
        component={'img'}
        src={logos}
      />
    </Stack>
  );
}

export default Logos;