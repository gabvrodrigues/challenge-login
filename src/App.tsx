import React from 'react';
import SignIn from './pages/SignIn';
import { setCustomText } from 'react-native-global-props';
import { Provider } from 'react-redux';
import {store} from './redux/core/store'

const App: React.FC = () => {
    const customTextProps = {
        style: {
          fontFamily: 'Montserrat-Regular',
        },
      };
    
    setCustomText(customTextProps);
      
    return ( 
      <Provider store={store}>
          <SignIn/>
      </Provider>
    );
}

export default App;