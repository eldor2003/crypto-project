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
      border: '5px',
      borderRadius: '20px',
      // backgroundColor: 'gray',
      background: 'linear-gradient(to top, #1b1724, #333039)'
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
              padding: '5px',
              // backgroundColor: 'blue',
              border,
              borderRadius,
              background
              // border: '5px',
              // borderRadius: '10px',
              // borderColor: 'red'
            }}
          >
            <Box
              component="img"
              sx={{
                height: 64,
                width: 64,
                marginRight: 1
              }}
              src={icon}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                marginLeft: 3
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'SemiBold',
                  fontSize: '18px',
                  lineHeight: '130%'
                }}
                // variant="h6"
                gutterBottom
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Regular',
                  lineHeight: '140%',
                  fontSize: '16px',
                  color: '#FFFFFF40'
                }}
                // variant='subtitle1'
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