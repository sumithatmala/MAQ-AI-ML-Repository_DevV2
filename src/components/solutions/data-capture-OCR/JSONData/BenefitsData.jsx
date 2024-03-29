import accuracy from "../img/icons8-target-100 1.svg"
import Visibility from "../img/icons8-visible-100 1.svg"
import productivity from "../img/icons8-learning-100 (2) 1.svg"
import costReduce from "../img/icons8-cost-100 1.svg"
import time from "../img/icons8-delivery-time-100 1.svg"

const benefitsData = [
{
    title: "Improved Accuracy",
    desc: "Manual processes can be tedious and repetitive, leading to employee overload. To prevent this, automating data input procedures can enhance the accuracy of information for further processing and optimize workload.",
    img: <img src={accuracy} alt="Accuracy" width={100}></img>
},

{
    title: "Improved Visibility.",
    desc: "Automating data extraction and processing enables employees to access all business-critical data immediately and at any time, enhancing efficiency and decision-making.",
    img: <img src={Visibility} alt="Accuracy" width={100}></img>
},
{
    title: "Increased Productivity",
    desc: "Automating data entry eliminates errors and boosts employee productivity by allowing them to focus on tasks requiring human involvement and allocate more time to value-added activities within the organization.",
    img: <img src={productivity} alt="Accuracy" width={100}></img>
},
{
    title: "Reduced Costs",
    desc: "Business owners are constantly seeking ways to enhance cost-efficiency and invest in improved productivity. Automating manual work can quickly deliver the desired results by streamlining processes and reducing operational costs.",
    img: <img src={costReduce} alt="Accuracy" width={100}></img>
},
{
    title: "Time-Saving Approach",
    desc:"Time is crucial in business processes. To save time on manual tasks, employees can utilize data automation and extraction tools, freeing up time for more intellectually demanding work.",
    img: <img src={time} alt="Accuracy" width={100}></img>
},
]

export default benefitsData;