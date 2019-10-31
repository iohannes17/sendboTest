import {createAppContainer,createSwitchNavigator,} from 'react-navigation';
import SignedOutNavigator from './SignedOutNavigator'
import main from './MainTabNavigator'







export const createRootNavigator = (signedIn) => {
  return createAppContainer(createSwitchNavigator(
    {
      SignedIn: {
        screen: main
      },
      SignedOut: {
        screen: SignedOutNavigator
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  ));
};