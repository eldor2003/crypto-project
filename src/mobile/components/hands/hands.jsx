
import {Box, Typography} from "@mui/material";
import ball from '/src/svg/ball.svg';
import leftArm from '/src/svg/leftArm1.svg'
import rightArm from '/src/svg/rightArmMob.svg'
import React from "react";

class Hands extends React.Component {
  
  lastKnownScrollPosition = 0;
  ticking = false;
  
  componentDidMount() {
    const ballEl = document.querySelector("#ball"); //*[@id="root"]/div/div/div[2]/div[1]
    const leftArmEl = document.querySelector('#leftArm');
    const rightArmEl = document.querySelector('#rightArm');
    document.addEventListener("scroll", (event) => {
      console.log(window.scrollY)
      console.log(window.scrollY > 10 && window.scrollY < 350)
      this.lastKnownScrollPosition = window.scrollY;
      if (window.scrollY > 30 && window.scrollY < 350) {
        this.ticking = true;
      } else {
        this.ticking = false;
      }
      // console.log(this.ticking)
      if (this.ticking) {
        window.requestAnimationFrame(() => {
          ballEl.style.transform = 'translate(0, 0) rotate(-30deg) scale(1.43)';
          leftArmEl.style.transform = 'translate(20%, -5%) rotate(3deg) scale(1.05)';
          rightArmEl.style.transform = 'translate(-20%, 20px) rotate(-2deg)';
        });
      } else {
        window.requestAnimationFrame(() => {
          ballEl.style.transform = 'translate(0)';
          leftArmEl.style.transform = 'translate(0)';
          rightArmEl.style.transform = 'translate(0)';
        });
      }
    });
  }
  render() {
    return (
      <Box
        sx={{
          maxWidth: '100%',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          // alignItems: 'center',
          // gap: "30%",
          margin: 17
        }}
      >
        <Box
          sx={{
            width: '33.3%',
            // zIndex: 10,
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            padding: 0,
            position: 'absolute',
            top: '540px',
            left: '-10%'
            // marginBottom: 50
          }}
          id={'leftArm'}
          component={'img'}
          src={leftArm}
        />
        <Box
          sx={{
            height: '100px',
            width: '33.3%',
            zIndex: 9,
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            padding: 0,
            position: 'absolute',
            top: '500px',
            left: '36%'
            // marginBottom: 50
          }}
          id={'ball'}
          component={'img'}
          src={ball}
        />
        <Box
          id={'rightArm'}
          sx={{
            height: '80px',
            zIndex: 8,
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            padding: 0,
            overflow: 'auto',
            // width: '33%',
            position: 'absolute',
            top: '410px',
            left: '75%'
            
            // marginBottom: 50
          }}
          component={'img'}
          src={rightArm}
        />
      </Box>
    )
  }
}

export default Hands;
// import {Box, Typography} from "@mui/material";
// import ball from '/src/svg/ball.svg';
// import leftArm from '/src/svg/leftArm.svg'
// import rightArm from '/src/svg/rightArm.svg'
//
// const Hands = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         height: '300px',
//         // flexDirection: 'row',
//         // margin: 0,
//         // justifyContent: 'center',
//         alignItems: 'center',
//         // gap: "40%"
//       }}
//     >
//       <Box
//         component={'img'}
//         src={leftArm}
//         sx={{
//           marginTop: 'auto',
//           // position: 'sticky',
//           // left: 0,
//           // marginLeft: 'auto',
//           width: '33%',
//           height: '111px'
//         }}
//       />
//       <Box
//         component={'img'}
//         src={ball}
//         sx={{
//           // marginTop: 'auto',
//           // marginBottom: '110px',
//           height: '80px',
//           width: '33%'
//         }}
//       />
//       <Box
//         component={'img'}
//         src={rightArm}
//         sx={{
//           // position: 'sticky',
//           // right: '110px',
//           width: "33%",
//           height: '111px',
//           // height: "111px",
//           // zIndex: 10,
//           // display: "flex",
//           // justifyContent: "end",
//           // alignItems: "end",
//           // padding: 0,
//           // marginBottom: 30
//           marginBottom: 'auto'
//         }}
//       />
//     </Box>
//   )
// }
//
// export default Hands;