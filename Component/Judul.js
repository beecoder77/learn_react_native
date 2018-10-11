import React from 'react';
import {Text} from 'react-native';

export default class Judul extends React.Component{
	render(){
		return(
		<Text style={liat.judul}>BIODATA</Text>
		)
	}
}

const liat= {
	judul: {
		backgroundColor: 'yellow',
		color: '#f00',
		fontSize: 36,
	}
}