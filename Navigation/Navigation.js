import {createStackNavigator} from 'react-navigation-stack'
import  { createAppContainer } from 'react-navigation'
import ListImg from '../Components/ListImg'
import Gallerie from '../Components/Gallerie'

const ListNavigation=createStackNavigator({
    ListImg:{
        screen:ListImg,
        navigationOptions:{
            title:'SKing Walpapers'
        }
    },
    Gallerie:{
        screen:Gallerie,
        navigationOptions:{
            title:'Gallerie'
        }
    }
})
export default createAppContainer(ListNavigation)