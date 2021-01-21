import React, { Component } from 'react';
import {
    
    View,
    Modal,
    ActivityIndicator
} from 'react-native';
import {Text} from "native-base";
import I18n from "react-native-i18n";
import styles from "./styles";
import Color from '../../styles/Color';


const Loader = props => {
    const {
        loading,
        ...attributes
    } = props;

    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => {console.log('close modal')}}>
            <View style={styles.modalBackground}>

                <View style={styles.activityIndicatorWrapper}>
                    <Text style={styles.textLoading}>{I18n.t('PleaseWait')}</Text>
                    <ActivityIndicator
                    size="small"
                    color={Color.primarycolor}
                        animating={loading} />
                </View>
            </View>
        </Modal>
    )
}



export default Loader;