import { View } from "native-base"
import React,{ Component } from "react"
import { TouchableOpacity ,Text,Image} from "react-native"
import Style from "./Style"
import I18n from "react-native-i18n";

import { Rating } from "react-native-rating-element";
import  {getDirectorName}  from "./../../utilities/GetSubstring";



export default class Video extends Component {
    constructor(props){
        super(props)
        this.state={
            isrtl:false
        }
    }
    render(){
        return (
            <View
            style={Style.containerView}
            >
                <TouchableOpacity>
                <View>
                <View style={Style.TouchableOpacity}>
                <Image
                            style={Style.imageStyle}
                            
                            source={require('./../../assets/img/viode_placeholder.png')}
                            resizeMode="contain"
                            >

                            </Image>

                        </View>
                        <Text style={Style.txtTiltle}>{this.props.item.title}</Text>
                        <Text style={Style.txtDirector}>{getDirectorName(this.props.item.director)}</Text>
                        <Text style={Style.txtDate}>{this.props.item.date_of_release}</Text>
                      <View style={Style.viewContainerRating}>
                       <View style={Style.viewchips}>
                        {
                            this.props.item.tags?
                            this.props.item.tags.map(item=>{
                                return <Text style={Style.txtchips}> {I18n.t(item)} </Text>
                            }):null
                        }
                        </View>
                        <Rating
                             rated={this.props.item.rating}
                             totalCount={5}
                              ratingColor="#f1c644"
                              ratingBackgroundColor="#d4d4d4"
                              size={20}
                              readonly 
                              icon="ios-star"
                             direction="row" 
                        />
                        </View>
                   
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}