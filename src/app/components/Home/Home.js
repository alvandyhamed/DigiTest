import * as React from 'react';
import { Button, Item, Text, View,Input,Container,Content,Spinner} from "native-base"
import { GetCatgory } from '../List/FuncGetCat'
import { Getmovie } from "../Home/FuncGetMovie";
import {CateGorySet}  from './../../redux/actions/Category';
import {MoviesSet}  from './../../redux/actions/Movies';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, SafeAreaView, ToastAndroid } from 'react-native';
import I18n from "react-native-i18n";
import { SliderBox } from "react-native-image-slider-box";

import {Icon,Picker} from "native-base"
import Style from '../Home/Style';
import Video from "../../containers/Video/Video";
import  MyPiker  from "../../containers/MyPiker/MyPiker";



 class Home extends React.Component{
  rendetsub({item}){
    return <Video
    item={item}
    
    />
   
  }; 
  Lang=[{name:"hindi",id:1}, {name:"emglish",id:2}]
   Country = [{name:"IND",id:1}, {name:"USA",id:2},{name :"AUS",id:3}]
    constructor(props){
        super(props)
        this.state={
          images: [
            "https://www.companyfolders.com/blog/media/2015/04/dracula-vs-batman-posters.jpg",
            "https://townsquare.media/site/295/files/2019/10/term.jpg",
            "https://www.femalefirst.co.uk/image-library/land/1000/i/insurgent-comp-quad.jpg",
            "https://townsquare.media/site/295/files/2019/12/bond.jpg?w=980&q=75"
           
             
          ],
         
         SelectedCategory:"documentary",
         filter:"",
         country:"",
         language:"",
         loadinspiner:true
           
        }
        GetCatgory(this)
        Getmovie(this,this.state.SelectedCategory,this.state.filter)

      

   }
   onValueChange(SelectedCategory) {
    this.setState({
      SelectedCategory,
      loadinspiner:true
    });
    Getmovie(this,SelectedCategory,this.state.filter)
  }
  onValueChange_Lang(language){
   
    this.setState({
      language,
      loadinspiner:true,
     

    })
    
    Getmovie(this,this.state.SelectedCategory,this.state.filter+"&language="+language)

  }
  onValueChange_country(country){
    this.setState({
      language,
      loadinspiner:true,
    

    })
    
    Getmovie(this,this.state.SelectedCategory,this.state.filter+"&country="+country)


  }

  //This part for Flatlist index generator
  _keyExtractor=(item,index)=>index.key
    render(){
     
     
    
        
        return (
          <Container>
                <Content>
          <View>
         
          
            <SliderBox
              images={this.state.images}

            >
            </SliderBox>
          
    { this.props.Cats.Cats? <MyPiker
                placeholder={I18n.t('genre')}
                titr={I18n.t('genre')}
              
              selectedValue={this.state.SelectedCategory}
              onValueChange={this.onValueChange.bind(this)}
              Date={this.props.Cats.Cats}
            >
           
           
            </MyPiker>:null
    }
    <MyPiker
    titr={I18n.t('SelectLang')}
    placeholder={I18n.t('SelectLang')}
    selectedValue={this.state.language}
    onValueChange={this.onValueChange_Lang.bind(this)}
    Date={this.Lang}

    ></MyPiker>
   <MyPiker
    titr={I18n.t('SelectContury')}
    placeholder={I18n.t('SelectContury')}
    selectedValue={this.state.country}
    onValueChange={this.onValueChange_Lang.bind(this)}
    Date={this.Country}
   >

   </MyPiker>
    
          
       
    <Item>
    
            <Icon active type='Ionicons' name='search-outline'
            onPress={()=>{
              this.setState({ loadinspiner:true})
             
           
              Getmovie(this,this.state.SelectedCategory,this.state.filter)
            }}
            />
            <Input
            onChangeText={(filter)=>{
              this.setState({
                filter
              })

            }}
            value={this.state.filter}
            style={Style.findStyle} placeholder={I18n.t('Find')}/>
          </Item>
         <SafeAreaView>
         { this.state.loadinspiner? <Spinner color='red' />:null}
         <FlatList
        data={this.props.Movies.Movies}
        renderItem={this.rendetsub.bind(this)}
        keyExtractor={item => item.id}
      />
          </SafeAreaView>
          
            </View>
            </Content>
            </Container>
        )


        
    }

}
const mapStateToProps = state => ({
    
    Cats: state.Cats,
    Movies:state.Movies
  });
const ActionCreators = Object.assign(
    {},
    {CateGorySet},
    {MoviesSet}
  );
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
   export default connect(mapStateToProps, mapDispatchToProps)(Home)

