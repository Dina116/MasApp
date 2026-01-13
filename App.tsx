import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/services/queryClient ';
import NetInfo from '@react-native-community/netinfo';
import { onlineManager } from '@tanstack/react-query';
import { LoadingProvider } from './src/loading';
import MainStack from './src/navigation/Stack/MainStack/MainStack';
import { initGrpcClient } from './src/services/client';
import { useEffect, useState } from 'react';
import { Database } from './src/db/SQLite/database';

function App() {
  const [isClientReady, setClientReady] = useState(false);
  onlineManager.setEventListener(setOnline =>
    NetInfo.addEventListener(state => {
      setOnline(!!state.isConnected);
    }),
  );
  useEffect(() => {
    const initializeApp = async () => {
      try {
        await Database();
        console.log('database was built successfully');
        console.log('Initializing gRPC client...');
        await initGrpcClient();
        console.log('gRPC client initialized successfully.');
        setClientReady(true);
      } catch (error) {
        console.error('Failed to initialize gRPC client:', error);
      }
    };

    initializeApp();
  }, []);
  if (!isClientReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </LoadingProvider>
    </QueryClientProvider>
  );
}

export default App;
