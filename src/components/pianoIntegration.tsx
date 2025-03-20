import { NativeModules } from 'react-native';

const { PianoModule } = NativeModules;

const PianoIntegration = {
  init: (aid: string) => {
    if (PianoModule) {
      PianoModule.init(aid);
    }
  },
};

export default PianoIntegration;
