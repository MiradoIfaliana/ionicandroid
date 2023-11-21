import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nba.com',
  appName: 'nba',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
