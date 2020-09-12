import React from 'react'
import {View,FlatList, StyleSheet} from 'react-native'
import imgData from '../Helpers/imgData'
import SingleImage from './SingleImage'

class ListImg extends React.Component{

    _toggleImage=()=>{
        this.props.navigation.navigate('Gallerie')
    }

    render(){
        return(
           <View style={Style.main}>
                <FlatList contentContainerStyle={Style.list} 
                 data={imgData} 
                 keyExtractor={(item)=>item.id.toString()}
                 renderItem={(item)=><SingleImage navigate={this._toggleImage} image={item}/>}
                />
           </View>
        )
    }
}
const Style=StyleSheet.create({
    main:{
        flex: 1,
    },
    list:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    }
})
export default ListImg;