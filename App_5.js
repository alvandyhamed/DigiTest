/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
 import {changeCount}  from './src/app/redux/actions/counts';
 import {CateGorySet}  from './src/app/redux/actions/Category';

import { bindActionCreators } from 'redux';


class App extends Component {
  decrementCount() {
    let { count, actions } = this.props;
    count--;
    actions.changeCount(count);
    actions.CateGorySet(545);
  }
  incrementCount() {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
    actions.CateGorySet(545);
  }
  render() {
    const { count } = this.props;
    return (
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text>{count}</Text>
       
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  count: state.count.count,
});

const ActionCreators = Object.assign(
  {},
  {changeCount},
  {CateGorySet}
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)