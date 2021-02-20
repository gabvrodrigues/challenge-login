import React from 'react';
import styled from 'styled-components/native';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomInputArea = styled.View`
margin-top: 15px
`;

const InputArea =  styled.View`
  width: 297px;
  height: 48px;
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 5px;
  
  border: 1px solid ${props => props.theme.borderColor};
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 10px;
  margin-left: 10px;
  color: #989FDB;
`;

const Label = styled.Text`
  font-size: 10px;
  color: #383E71;
  margin-bottom: 8px;
  margin-left: 10px
`;

const ErrorMessage = styled.Text`
  color: #FF377F;
  font-size: 10px
  margin-bottom: 15px;
`;

interface InputProps {
  placeholder: string, value: string, label: string, 
  secureTextEntry?: boolean, 
  error: boolean, 
  errorMessage?: string, 
  onChangeText: (text: string) => void
}

const CustomInput: React.FC<InputProps> = ( props ) => {
  

  const defaultTheme : DefaultTheme = {
    borderColor: '#989FDB',
  };

  const errorTheme : DefaultTheme = {
    borderColor: '#FF377F',
  };

  return (
    <CustomInputArea>
      <Label>{props.label}</Label>
      <ThemeProvider theme={props.error ? errorTheme : defaultTheme}>
        <InputArea>
          <Input
            {...props}
            autoCapitalize="none"
          />
          {props.error && <Icon name="close" size={18} color="#FF377F" style={{marginRight: 15}}/>}
          
        </InputArea>
      </ThemeProvider>
    {props.error && <ErrorMessage>{props.errorMessage}</ErrorMessage>}

    </CustomInputArea>
    
    );
}

export default CustomInput;
