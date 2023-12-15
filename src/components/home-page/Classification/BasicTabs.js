import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { Title } from '@mui/icons-material';
import ProductCard from '../../ui-elements/common/Product-Card';

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

export default function BasicTabs() {
 const [value, setValue] = React.useState(0);
 const BinaryClassificationProducts = [
    {
        title: "Binary Classification",
        description: "Binary classification is the process of classifying data into two distinct categories. It is the simplest form of classification problem where the response variable can only take two distinct values.",
    },
    {
        title: "Binary Classification",
        description: "Binary classification is the process of classifying data into two distinct categories. It is the simplest form of classification problem where the response variable can only take two distinct values.",
    },
    {
        title: "Binary Classification",
        description: "Binary classification is the process of classifying data into two distinct categories. It is the simplest form of classification problem where the response variable can only take two distinct values.",
    }
];

const MultiClassClassificationProducts = [
    {
        title: "Multi-Class Classification",
        description: "Multi-class classification is a type of classification in which a single class label is predicted for each instance. In multi-class classification, a class label should be predicted for each sample. For example, classification of fruits into its respective type.",
    },
    {
        title: "Multi-Class Classification",
        description: "Multi-class classification is a type of classification in which a single class label is predicted for each instance. In multi-class classification, a class label should be predicted for each sample. For example, classification of fruits into its respective type.",
    },
    {
        title: "Multi-Class Classification",
        description: "Multi-class classification is a type of classification in which a single class label is predicted for each instance. In multi-class classification, a class label should be predicted for each sample. For example, classification of fruits into its respective type.",
    }
]

 const handleChange = (event, newValue) => {
 setValue(newValue);
 };

 return (
 <Box sx={{ width: '100%' }}>
   <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
        }}
        TabIndicatorProps={{style: {backgroundColor: "#951015"}}}
     >
       <Tab label="Binary Classification" {...a11yProps(0)} />
       <Tab label="Multi-Class Classification" {...a11yProps(1)} />
     </Tabs>
   </Box>
   <CustomTabPanel value={value} index={0}>
        {
            BinaryClassificationProducts.map((product, index) => (
                <ProductCard 
                    key={index}
                    title={product.title}
                    description={product.description}
                />
            ))
        }
   </CustomTabPanel>
   <CustomTabPanel value={value} index={1}>
        {
            MultiClassClassificationProducts.map((product, index) => (
                <ProductCard 
                    key={index}
                    title={product.title}
                    description={product.description}
                />
            ))
        }
   </CustomTabPanel>
   {/* <CustomTabPanel value={value} index={2}>
     Item Three
   </CustomTabPanel> */}
 </Box>
 );
}
