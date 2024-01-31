// Filename - loader.js

import { TailSpin } from "react-loader-spinner";
const LoaderComp = () => {
	return (
		<div  style={{height: "88vh", display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", flexWrap: "wrap"}}>
		<TailSpin
			height="80"
			width="80"
			color="#453c90"
			ariaLabel="tail-spin-loading"
			radius="1"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
		/>
		</div>
	);
}; 
export default LoaderComp;
