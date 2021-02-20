import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const isPhone = deviceWidth > 420 ? false : true;

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LeftContainer = styled.View`
  flex: 40%;
  ${isPhone && 'flex: 100%'}
`;

export const LeftContainerBottom = styled.View`
  height: 40%;
  background-color: #130525;
`;

export const LeftContainerBackground = styled.ImageBackground`
  resize-mode: contain;
  width: 100%;
  height: 100%;
  ${isPhone && 'resize-mode: contain; height: 60%'}
`;

export const RightContainer = styled.View`
  background-color: #faf5ff;
  flex: 60%;
  align-items: center;
  justify-content: center;

  ${isPhone &&
  'padding: 28px; position: absolute; flex: 100%; min-height: 360px; border-radius: 8px;'}
`;

export const RightContainerContent = styled.View`
  align-items: flex-start;
  ${isPhone && 'align-items: center; position: relative'}
`;

export const WelcomeText = styled.Text`
  font-size: 40px;
  color: #383e71;
  width: 231px;
  line-height: 48px;
  ${isPhone && 'text-align:center; line-height: 32px; font-size: 24px;'}
`;

export const LoginInstructionsText = styled.Text`
  font-size: 17px;
  color: #989fdb;
  width: 235px;
  line-height: 20px;
  margin-top: 10px;
  ${isPhone && 'text-align:center;  font-size: 12px; width: 255px'}
`;

export const InputsArea = styled.View`
  width: 300px;
  margin-top: 60px;
  align-items: center;
  margin-bottom: 10px;
  ${isPhone && 'margin-top: 20px;margin-bottom: 30px;'}
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 15px;
`;

export const SignInButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 297px;
  height: 48px;
  border-radius: 8px;

  ${isPhone && 'width: 170px;'};
`;
export const SignInButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const ForgetPasswordArea = styled.View`
  align-items: center;
  margin-top: 25px;
  ${isPhone && 'position: absolute; bottom: -90px;'}
`;

export const ForgetPasswordText = styled.Text`
  color: #989fdb;
  font-size: 14px;
`;

export const ForgetPasswordButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ForgetPasswordButtonTextUnderline = styled.Text`
  color: #bb74cb;
  font-size: 14px;
  text-decoration: underline;
  margin-left: 5px;
`;
