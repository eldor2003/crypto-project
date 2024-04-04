import {Box, Button, Grid, Typography} from "@mui/material";
import star from '/src/svg/star.svg';
import bird from '/src/svg/bird.svg';
import telegram from '/src/svg/telegram.svg';
const RightColumn = () => {
  const blocks = [
    {
      title: 'Extensive community',
      subTitle: 'Large community with a large development team',
      icon: star
    },
    {
      title: 'Security',
      subTitle: 'Guarantees of security and safety of your finances',
      icon: bird,
      borderRadius: '20px',
      // backgroundColor: 'gray',
      background: 'linear-gradient(to top, #1b1724, #333039)',
    },
    {
      title: 'Integration on telegram',
      subTitle: 'Tight integration into the Telegram ecosystem and with the TON ecosystem',
      icon: telegram
    }

  ]
  return (
    <Grid item xs={12} md={6}>
      {
        blocks.map(({
          title,
          subTitle,
          icon,
          border,
          borderRadius,
          background
        }) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 2,
              border,
              borderRadius,
              background,
              padding: '15px',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 64,
                width: 64,
                marginRight: 1,
              }}
              src={icon}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left'
              }}
            >
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Regular',
                  lineHeight: '140%',
                  fontSize: '18px',
                  color: '#FFFFFF40'
                }}
              >
                {subTitle}
              </Typography>
            </Box>
          </Box>
        ))
      }
    </Grid>
  );
};

export default RightColumn;