import React, { useContext } from 'react'
import {Box, Typography} from '@mui/material'
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({data,bodyPart,setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item)=>(<Box
        key={item.id||item}map
        itemID={item.id||item}
        title={item.id||item}
        p={{sm:'20px 0px',xs:'10px 10px'}}
        mt="0px 40px">
            <BodyPart item={item} 
            setBodyPart={setBodyPart} bodyPart={bodyPart}/>
            </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar