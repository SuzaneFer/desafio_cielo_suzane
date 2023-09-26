import { DEVICE_TYPES } from '../utils/constants';
import useDeviceType from './useDeviceType';

export default function useDeviceSelector(valueIfMobile: any, valueIfDesktop: any) {
  const deviceType = useDeviceType();

  if (deviceType === DEVICE_TYPES.mobile) {
    return valueIfMobile;
  }
  return valueIfDesktop;
}

export const useDeviceSelectorNoDefault = (valueIfMobile: any, valueIfDesktop: any) => {
  const deviceType = useDeviceType();

  if (deviceType === DEVICE_TYPES.mobile) {
    return valueIfMobile;
  }
  if (deviceType === DEVICE_TYPES.desktop) {
    return valueIfDesktop;
  }
  return null;
};
