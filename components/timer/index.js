import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from "react-dom" 
import {View, Text} from "react-native"
import Moment from 'react-moment';
// import "moment/locale/ru";
import moment from 'moment';

Moment.globalElement = Text;


function Timer({lasttime}) {

	let diffSec = (Date.now() - lasttime)/1000;
	let interval;


	if(diffSec < 60) {
		interval = 1000
	} else {
		interval = 60000
	}

	let [inter, changeInter] = useState(interval)

	useEffect(() => {
		if(interval == 1000) {
			let int = setInterval(() => {
				let diff = (Date.now() - lasttime)/1000;

				if(diff < 60) {
					return 
				} else {
					changeInter(60000)
					clearInterval(int)
				}

			}, 1000)
		}

	}, [])

	return (
		<View style={{alignItems: 'center'}}>
			<Text>Passed since the given time:</Text>
			<View style={{flexDirection:"row"}}>
				<Moment 
	      	date={lasttime} 
	      	interval={inter} 
	      	format={inter == 1000 ? "ss" : "mm"} 
	      	durationFromNow 
      	/>
     	  <Text>{inter == 1000 ? " seconds ago" : " minutes ago"} </Text>
			</View>
      
		</View>
	)
}

export default Timer

























