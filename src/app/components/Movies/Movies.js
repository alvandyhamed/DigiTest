import React from 'react'
import { Text,Spinner} from "native-base"
import {GetAllMoveis} from "./FuncGetAllMoveis";
import { AllMoviesSet } from "./../../redux/actions/AllMoveis";
import { MoviesSet } from "./../../redux/actions/Movies";
import { _MoviesSet } from "./../../redux/actions/_Movies";
import { VideoSet } from "./../../redux/actions/Videos";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, SafeAreaView,RefreshControl} from 'react-native';
import Video from "../../containers/Video/Video";




class Movies extends React.Component{
    constructor(props){
        super(props)
        this.state={
          refreshing: false,
          next:"",
          prev:"",
          loadinspiner:true
        }
     

     
       GetAllMoveis(this,"","",0)
      
   }
   onEndReachedCalledDuringMomentum = true
   componentDidMount() {
     /// 0 means the first 50
     /// 1 means the next 
     /// -1 means the priviuse

   // GetAllMoveis(this,"","",0)
   
  }
  rendetsub({item}){
    return <Video
    item={item}
    
    />
   
  };

    render(){
      console.log("MoviesRender",this.props)
        return (
          
          <SafeAreaView>
          { this.state.loadinspiner? <Spinner color='red' />:null}
        
        {this.props._Movies._Movies?<FlatList
       data={this.props._Movies._Movies}
       renderItem={this.rendetsub.bind(this)}
       keyExtractor={item => item.id}
       refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._refreshData}
        />
      }
      onEndReached={this.handleLoadMore}
      onEndReachedThreshold={0.1}
      onMomentumScrollBegin={() => {
        this.onEndReachedCalledDuringMomentum = false;
      }}




     />:null}
     
         </SafeAreaView>
        )

        
    }
    _refreshData = async () => {
      this.setState({ refreshing: true});
      if(this.state.prev==""||this.state.prev==undefined)
      GetAllMoveis(this,"","",0)
      else GetAllMoveis(this,"",this.state.prev,-1)
      
    }
    handleLoadMore = async () => {
      this.setState({ loadinspiner:true});

      if (!this.onEndReachedCalledDuringMomentum) {
      
        console.log("EndOFFFFF",this.state.next)
        GetAllMoveis(this,this.state.next,"",1)
        this.onEndReachedCalledDuringMomentum = true;
      }
    }

}
const mapStateToProps = state => (
  
  {   
  Video:state.Video,
   Next:state.Next,
   Prev:state.Prev,
   
   _Movies:state._Movies,
  });
const ActionCreators = Object.assign(
    {},
    {_MoviesSet},{MoviesSet},{VideoSet},{AllMoviesSet}
  );
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
   export default connect(mapStateToProps, mapDispatchToProps)(Movies)
