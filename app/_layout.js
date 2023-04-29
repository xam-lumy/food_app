import { Provider } from 'react-redux';
import store from '../redux/store';
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { useCallback } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ProductDetails from './product/[id]';


SplashScreen.preventAutoHideAsync();

const LayOut= () => {
  const [fontsLoaded] = useFonts({
    'RobotoBold': require('../assets/fonts/RobotoCondensed-Bold.ttf'),
    'RobotoRegular': require('../assets/fonts/RobotoCondensed-Regular.ttf'),
    'OswaldBold': require('../assets/fonts/Oswald-SemiBold.ttf'),
    'OswaldMedium': require('../assets/fonts/Oswald-Medium.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const queryClient = new QueryClient()

  return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Stack onLayoutRootView={onLayoutRootView} />
          {/* <ReactQueryDevtools initialIsOpen /> */}
        </QueryClientProvider> 
      </Provider>
      
   
      
       
    
  );
}

export default LayOut