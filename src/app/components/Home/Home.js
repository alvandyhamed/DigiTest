import * as React from 'react';
import { Button, Item, Text, View,Input,Container,Content} from "native-base"
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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const renderItem = ({ item }) => (
  <Item title={item.title} />
);


 class Home extends React.Component{
  rendetsub({item}){
    console.log(item)
    return <Text>{item.title}</Text>
  };
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
         filter:""
           
        }
        GetCatgory(this)
        Getmovie(this,this.state.SelectedCategory,this.state.filter)

      

   }
   onValueChange(SelectedCategory) {
    this.setState({
      SelectedCategory
    });
    Getmovie(this,SelectedCategory,this.state.filter)
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
          
           <Text style={Style.stylegenre}>{I18n.t("genre")}</Text>
            { this.props.Cats.Cats? <Picker
                placeholder="Select your SIM"
              note
              mode="dropdown"
             
              textStyle={{ color: "#5cb85c" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined }}
              selectedValue={this.state.SelectedCategory}
              onValueChange={this.onValueChange.bind(this)}
            >
           
              {this.props.Cats.Cats.map((item,key)=>{
                return(<Picker.item
                  label={I18n.t(item.name)}
                  value={item.name}
                  key={item.id}
                />)
               
              })}
           
            </Picker>:null
    }
    
          
       
    <Item>
    
            <Icon active type='Ionicons' name='search-outline'
            onPress={()=>{
              //TODO ImplimentSerach
              console.log("TAGSIR",this.state.filter)
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
           {console.log("Movies",this.props.Movies)}
         <FlatList
        data={this.props.Movies.Movies}
        renderItem={this.rendetsub.bind(this)}
        keyExtractor={item => item.id}
      />
          </SafeAreaView>
          <Text>TEst</Text>
            <Button 
            onPress={()=>{
            
              console.log("JITTT",this.props.Cats)
              console.log("JITTT",this.props.Movies)
            }}
           
            >
               <Text>Click Me!</Text>
            </Button>
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

