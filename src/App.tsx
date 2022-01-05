import './filterWarnings';
import './polyfills';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider as ThemeProvider } from 'exoflex';
import { StatusBar } from 'react-native';
import {Provider as PaperProvider} from "react-native-paper"
import { Provider as AuthProvider } from '../src/helpers/useAuth';

import { client } from './graphql/client';
import { CustomTheme } from './constants/theme';
import AppNavigator from './navigation/AppNavigator';

function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <ThemeProvider theme={CustomTheme}>
        <AuthProvider>
          <PaperProvider>
          <AppNavigator />
          </PaperProvider>
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
