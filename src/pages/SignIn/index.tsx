import React, {useState} from 'react';
import { MainContainer, 
  LeftContainer, 
  RightContainer, 
  LeftContainerBackground,
  RightContainerContent, 
  WelcomeText,
  LoginInstructionsText,
  InputsArea,
  LoadingIcon,
  SignInButton, 
  SignInButtonText, 
  ForgetPasswordArea, 
  ForgetPasswordText, 
  ForgetPasswordButton, 
  ForgetPasswordButtonTextUnderline,
  LeftContainerBottom
} from './styles';


import { Dimensions } from 'react-native';



import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { loginRequest, setIsLoadingChars }  from '../../redux/core/actions/AuthActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const useLoginFormState = (props: IAuth) => {
   
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [submit, setSubmit] = useState(false);


    
    const submitForm = () => {
      setSubmit(true);
      
      if(isEmailValid && isPasswordValid){
        props.setIsLoadingChars();
        props.loginRequest({email: emailField, password: passwordField});
        setSubmit(false);
      }

    }
  
    let isEmailValid = false;
    let isPasswordValid = false;

    var emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(emailField)) {
      isEmailValid = true;
    }
  
    if (passwordField !== '') {
      isPasswordValid = true;
    }
    
    return {
        emailField: {
        value: emailField,
        set: setEmailField,
        valid: isEmailValid,
      },
      passwordField: {
        value: passwordField,
        set: setPasswordField,
        valid: isPasswordValid,
      },
      submit: {
        value: submit,
        set: submitForm,
      },
     
    };
  };
  
const SignIn: React.FC<IAuth> = (props: IAuth) => {

    const { emailField, passwordField, submit } = useLoginFormState(props);
    const deviceWidth = Dimensions.get('window').width;

    const isPhone = deviceWidth > 420 ? false : true;

    return (
    <MainContainer>
        <LeftContainer >
            <LeftContainerBackground source={require('../../assets/images/login-background.jpeg')}>
                <LinearGradient locations={[0.1,0.5]} colors={["rgba(105, 57, 153, 0)", isPhone ? "rgba(19, 5, 37, 0.95)" : "rgba(19, 5, 37, 0.85))"]} style={styles.linearGradient}></LinearGradient>
            </LeftContainerBackground>
            {isPhone && <LeftContainerBottom/>}
        </LeftContainer>
        <RightContainer>
            <RightContainerContent>
                <WelcomeText>Olá, seja bem-vindo!</WelcomeText>
                <LoginInstructionsText>Para acessar a plataforma, faça seu login.</LoginInstructionsText>
                <InputsArea>
                    <CustomInput
                      placeholder={"user.name@mail.com"}
                      value={emailField.value}
                      label={"E-MAIL"}
                      onChangeText={(text: string) => emailField.set(text)}
                      error={submit.value && !emailField.valid}
                      errorMessage={"Digite um e-mail válido"}
                    />
                    <CustomInput
                      placeholder={"*******"}
                      value={passwordField.value}
                      label={"SENHA"}
                      onChangeText={(text: string) => passwordField.set(text)}
                      secureTextEntry={true}
                      error={submit.value && !passwordField.valid}
                      errorMessage={"Digite uma senha"}
                    />
                    {props.isLoading && (
                      <LoadingIcon size="large" color={'#383E71'} />
                    )}
                </InputsArea>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["#9D25B0", "#383E71"]} 
                style={isPhone ? styles.linearGradientButtonPhone : styles.linearGradientButtonTablet}>
                    <SignInButton onPress={submit.set}>
                        <SignInButtonText>ENTRAR</SignInButtonText>
                    </SignInButton>
                </LinearGradient>
            </RightContainerContent>
            <ForgetPasswordArea>
                <ForgetPasswordText>Esqueceu seu login ou senha?</ForgetPasswordText>
                <ForgetPasswordButton>
                    <ForgetPasswordText>Clique</ForgetPasswordText>
                    <ForgetPasswordButtonTextUnderline>aqui</ForgetPasswordButtonTextUnderline>
                </ForgetPasswordButton>
            </ForgetPasswordArea>
        </RightContainer>
        
    </MainContainer> 
    );
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      opacity: 1,
    },
    linearGradientButtonPhone: {
      position: 'absolute',
      width: 170,
      bottom: -55,
      borderRadius: 8,
      shadowColor: '#CF99DB',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 25},
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: 'transparent'
    },
    linearGradientButtonTablet: {
      borderRadius: 8,
      shadowColor: '#CF99DB',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 25},
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: 'transparent'
    }
  });


const mapStateToProps = (state: any) => {
  const { auth } = state;
  return auth;
};


const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    loginRequest, setIsLoadingChars
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);