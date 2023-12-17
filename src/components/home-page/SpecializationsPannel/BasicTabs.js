import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ScrollButton from '@mui/material/TabScrollButton';
// import { Title } from '@mui/icons-material';
import ProductCard from '../../ui-elements/common/Product-Card';
// console.log(CategoryToolsData.allExports[0], CategoryToolsData.AIData.ArtificialIntelligenceData);
function CustomTabPanel(props) {
 const { children, value, index, ...other } = props;

 return (
 <div
   role="tabpanel"
   hidden={value !== index}
   id={`simple-tabpanel-${index}`}
   aria-labelledby={`simple-tab-${index}`}
   {...other}
 >
   {value === index && (
     <Box sx={{ p: 3 }}>
       <Typography>{children}</Typography>
     </Box>
   )}
 </div>
 );
}

CustomTabPanel.propTypes = {
 children: PropTypes.node,
 index: PropTypes.number.isRequired,
 value: PropTypes.number.isRequired,
};

function a11yProps(index) {
 return {
 id: `simple-tab-${index}`,
 'aria-controls': `simple-tabpanel-${index}`,
 };
}

export default function BasicTabs(props) {
 const [value, setValue] = React.useState(0);

 const handleChange = (event, newValue) => {
 setValue(newValue);
 };

 return (
 <Box sx={{  maxHeight: '100vh', overflowY: 'auto'}}>
   <Box sx={{ 
                borderBottom: 1, borderColor: 'divider',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: 'white', 
                }}>
     <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        sx={{
          "& .MuiTab-root": {
            fontSize: "16px",
            fontWeight: "bold",
          },
          "& .Mui-selected": {
            color: "#951015 !important",
            fontSize: "16px",
          }, 
          maxWidth: "100vh",
        }}
        TabIndicatorProps={{style: {backgroundColor: "#951015"}}}
        variant="scrollable"
        scrollButtons={{ end: <ScrollButton /> }}
     >

       {props.items.map((tab, index) => (
            <Tab key={index} label={tab.title} {...a11yProps(index)} />
          ))}
     </Tabs>
   </Box>
   {props.items.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.subLinks.map((subLink, subIndex) => (
            <ProductCard
              key={subIndex}
              title={subLink.title}
              description={subLink.description}
            />
          ))}
        </CustomTabPanel>
      ))}
 </Box>
 );
}
