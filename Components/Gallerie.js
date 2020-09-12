import React from 'react'
import {View, Text,StyleSheet }from 'react-native'

class Gallerie extends React.Component{
    render(){
        return(
            <View style={Style.main}>
                <Text>hello</Text>
            </View>
        )
    }
}
const Style=StyleSheet.create({
    main:{
        flex:1
    }
})
export default Gallerie;