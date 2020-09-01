import { NativeModules } from 'react-native';

type BraintreeViewType = {
  multiply(a: number, b: number): Promise<number>;
};

const { BraintreeView } = NativeModules;

export default BraintreeView as BraintreeViewType;
