import React from 'react'

import Category from '../../containers/Category/Category'
import { Button, Item, Text, View,Input,Container,Content,Spinner} from "native-base"
import { FlatList, SafeAreaView, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';


class List extends React.Component{
    rendetsub({item}){
        return <Category
        item={item}
        
        />
       
      };
    constructor(props){
        super(props)
        this.state={
           
        }
      

   }
  
    render(){
        console.log("CHCHICHI",this.props)
        return (
            <Container>
                <Content>
          <View>
          <SafeAreaView>
         { this.state.loadinspiner? <Spinner color='red' />:null}
         <FlatList
        data={this.props.Cats.Cats}
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
  
  });

  
   export default connect(mapStateToProps, null)(List)