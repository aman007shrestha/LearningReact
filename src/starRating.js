import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

// individual star component
const Star = ({selected = false, onSelect = f => console.log("kkk") }) => (
	<FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
);

/*
export default function StarRating() {
	return [
		<FaStar color="red" />,
		<FaStar color="red" />,
		<FaStar color="red" />,
		<FaStar color="grey" />,
		<FaStar color="grey" />
			
	];
}
*/

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
	const [selectedStars, setSelectedStars] = useState(0);
	console.log(selectedStars)
	console.log(typeof selectedStars)
	console.log(typeof setSelectedStars)

	return (
		<>
			{
				createArray(totalStars).map(
					(n, i) => (
						<Star 
							key={i} 
							selected={selectedStars > i}
							onSelect={()=> setSelectedStars(i+1)}

						/>
					)
				)
			}
			<p>
				{selectedStars} of {totalStars} Stars
			</p>
			<button onClick={()=> setSelectedStars(0)}>Restart</button>
		</>

	);
}