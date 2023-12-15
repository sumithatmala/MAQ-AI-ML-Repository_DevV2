import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
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
 const DataProcessingProducts = [
    {
        title: "Pandas",
        description: "Binary classification is the process of classifying data into two distinct categories. It is the simplest form of classification problem where the response variable can only take two distinct values, for example, either 0 or 1, true or false, spam or no spam, etc.",
    },
    {
        title: "NumPy",
        description: "Binary classification is the process of classifying data into two distinct categories. It is the simplest form of classification problem where the response variable can only take two distinct values, for example, either 0 or 1, true or false, spam or no spam, etc.",
    },
    {
        title: "Apache Spark",
        description: "Binary classification is the process of classifying data into two distinct categories. It is the simplest form of classification problem where the response variable can only take two distinct values, for example, either 0 or 1, true or false, spam or no spam, etc.",
    },
    {
        title: "Dask",
        description: "Binary classification is the process of classifying data into two distinct categories. It is the simplest form of classification problem where the response variable can only take two distinct values, for example, either 0 or 1, true or false, spam or no spam, etc.",
    },
];

const MLModelsProducts = [
    {
        title: "Scikit Learn",
        description: "Multi-class classification is a type of classification in which a single class label is predicted for each instance. In multi-class classification, a class label should be predicted for each sample. For example, classification of fruits into its respective type.",
    },
    {
        title: "Regression",
        description: "Multi-class classification is a type of classification in which a single class label is predicted for each instance. In multi-class classification, a class label should be predicted for each sample. For example, classification of fruits into its respective type.",
    },
    {
        title: "Classification",
        description: "Multi-class classification is a type of classification in which a single class label is predicted for each instance. In multi-class classification, a class label should be predicted for each sample. For example, classification of fruits into its respective type.",
    },
]
const DataVisualizationProducts = [
    {
        title: "Matplotlib",
        description: "Multi-class classification is a type of classification in which a single class label is predicted for each instance. In multi-class classification, a class label should be predicted for each sample. For example, classification of fruits into its respective type.",
    },
    {
        title: "Seaborn",
        description: "Multi-class classification is a type of classification in which a single class label is predicted for each instance. In multi-class classification, a class label should be predicted for each sample. For example, classification of fruits into its respective type.",
    },
    {
        title: "Plotly",
        description: "Multi-class classification is a type of classification in which a single class label is predicted for each instance. In multi-class classification, a class label should be predicted for each sample. For example, classification of fruits into its respective type.",
    },
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
       <Tab label="Data Processing" {...a11yProps(0)} />
       <Tab label="ML Models" {...a11yProps(1)} />
       <Tab label="Data Visualization" {...a11yProps(2)} />
     </Tabs>
   </Box>
   <CustomTabPanel value={value} index={0}>
        {
            DataProcessingProducts.map((product, index) => (
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
            MLModelsProducts.map((product, index) => (
                <ProductCard 
                    key={index}
                    title={product.title}
                    description={product.description}
                    onClick={()=>{
                      // "location.href='http://localhost:3000/productdetails'"
                    }}
                />
            ))
        }
   </CustomTabPanel>
   <CustomTabPanel value={value} index={2}>
        {
            DataVisualizationProducts.map((product, index) => (
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
