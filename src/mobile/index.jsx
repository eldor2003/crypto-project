import Header from "./components/header/Header.jsx";
import {Container} from "@mui/material";
import First from './components/First/First.jsx';
import Hands from "./components/hands/hands.jsx";
import VideoBlock from "./components/VideoBlock/VideoBlock.jsx";
import Third from "./components/Third/Third.jsx";
import Four from "./components/Four/Four.jsx";
import Calculator from "./components/Calculator/Calculator.jsx";
import Referal from "./components/Referal/Referal.jsx";
import Faq from "./components/Faq/Faq";
import Logos from "./components/Logos/Logos.jsx";
import './index.css'

const Mobile = () => {
  return (
    
    <>
      <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
      <Container
        maxWidth={'md'}
        sx={{
          // overflowX: 'hidden'
          //  paddingLeft: 0,
          //  paddingRight: 0
        }}
      >
        <Header />
        <First />
        
        <Hands />
        
        <VideoBlock />
        <Third />
        <Four />
        <Calculator />
        <Referal />
        <Logos />
        <Faq />
      </Container>
       {/*<Container*/}
       {/*  maxWidth={'md'}*/}
       {/*  sx={{*/}
       {/*    overflow: 'hidden'*/}
       {/*     paddingLeft: 0,*/}
       {/*     paddingRight: 0*/}
       {/*  }}*/}
       {/*>*/}
       {/*  <Hands />*/}
       {/*</Container>*/}
       {/*<Container*/}
       {/*  maxWidth={'md'}*/}
       {/*>*/}
       {/*  */}
       {/*  <VideoBlock />*/}
       {/*  <Third />*/}
       {/*  <Four />*/}
       {/*  <Calculator />*/}
       {/*</Container>*/}
     </>
  );
}

export default Mobile;