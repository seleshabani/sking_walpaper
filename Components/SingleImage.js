import React from 'react'
import {Image, StyleSheet,TouchableOpacity} from 'react-native'

class SingleImage extends React.Component{
   
    _toggleClick(){
       // console.log(this.props.navigate())
        this.props.navigate()
    }

    render(){
        const {image}=this.props
        return(
            <TouchableOpacity onPress={()=>this._toggleClick()} style={Style.main}>
                <Image style={Style.img} source={require('../img/'+image.item.nom)}/>
            </TouchableOpacity>
        )
    }
}
const Style=StyleSheet.create({
    main:{
        height:120,
        width:120
    },
    img:{
        height:120,
        width:120,
    },
    img2:{
        height:500,
        width:500,
    }

})
export default SingleImage;
