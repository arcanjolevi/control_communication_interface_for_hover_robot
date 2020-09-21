import {
  Container,
  Gradient,
  InformationText,
  InfoContainer,
  Information,
} from './styles';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { View, Text, Image } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { RouteProp } from '@react-navigation/native';
import { DataContext } from '../../contexts/dataContext';
import { ComunicationContext } from '../../contexts/comunication';
import ButtonControl from '../../components/buttonControl';
import { Button, ButtonText } from '../../globalStyles/styles';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import React, { useState, useCallback, useContext } from 'react';
import RouteTypesDefinition from '../router/RouterTypesDefinition';
import ConnectedIndicator from '../../components/connectedIndicator';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Application from 'expo-application';
const sponsors = require('../../../assets/sponsors.png');

type ProfileScreenRouteProp = RouteProp<RouteTypesDefinition, 'Info'>;
type ProfileScreenNavigationProp = DrawerNavigationProp<
  RouteTypesDefinition,
  'Info'
>;
type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const Info = ({ navigation, route }: Props) => {
  const { connected } = useContext(ComunicationContext);

  return (
    <>
      <StatusBar backgroundColor='transparent' style='light' />
      <Gradient colors={['#8E2DE2', '#4A00E0']} />
      <View
        style={{
          marginTop: Constants.statusBarHeight + 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <MaterialIcons
          onPress={() => navigation.openDrawer()}
          name='menu'
          size={35}
          color='#FFF'
        />
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
          Informações da aplicação
        </Text>
      </View>
      <Container>
        <InfoContainer
          style={{
            width: widthPercentageToDP(80),
          }}
        >
          <Information>
            <InformationText>Version: 0.7.0</InformationText>
          </Information>
        </InfoContainer>
      </Container>
    </>
  );
};

export default Info;
