import Color from "./../../styles/Color";
import Font from "./../../styles/Font";

export default{
    containerView:{
        padding:10,
        borderRadius:2,
        margin:5,
        bordercolor:Color.bordercolor,
        backgroundColor:Color.white,
        borderWidth:2
       
    },
    stuchableStyle:{
        alignItems:'center',
        alignContenet:'center'

    },
    imageStyle:{
        width:undefined,
        height:200,
        alignItems:'center',
        alignContenet:'center'

    },
    txtchips:{
        fontFamily:Font.main,
                                backgroundColor:Color.primarycolor,
                                fontSize:10,
                                borderRadius:8

    },
    txtTiltle:{fontSize:16, fontWeight: "bold"},
    txtDirector:{color:Color.green},
    txtDate:{color:Color.circleblu},
    viewContainerRating:{flexDirection:'row',justifyContent:'space-between'},
    viewchips:{flexDirection:'row'}
    
    

}