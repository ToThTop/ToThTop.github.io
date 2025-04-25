
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.medifoodconnect',
  appName: 'medifood-connect-arabic',
  webDir: 'dist',
  server: {
    url: "https://5b1b2ffd-f637-4f86-b854-a5ab93cf5f1f.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#FFFFFF",
      showSpinner: true,
      spinnerColor: "#0EA5E9"
    }
  },
  android: {
    buildOptions: {
      keystorePath: 'medifood-keystore.jks',
      keystoreAlias: 'medifood-key-alias',
      minSdkVersion: 21,
      targetSdkVersion: 33
    }
  }
};

export default config;
