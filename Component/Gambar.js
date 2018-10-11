import React from 'react';
import {Image} from 'react-native';

export default class Gambar extends React.Component{
	render(){
		return(
            <Image style={foto.gambar} source={require('../assets/fotoku.jpg')} />
		)
	}
}

const foto= {
	gambar: {
		width: 250, 
  	    height: 250,
	}
}