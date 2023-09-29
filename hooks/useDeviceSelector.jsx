import { DEVICE_TYPES } from "../utils/constants";
import useDeviceType from "./useDeviceType";

export default function useDeviceSelector(valueIfMobile, valueIfDesktop) {
  const deviceType = useDeviceType();

  if (deviceType === DEVICE_TYPES.mobile) {
    return valueIfMobile;
  }
  return valueIfDesktop;
}

export const useDeviceSelectorNoDefault = (valueIfMobile, valueIfDesktop) => {
  const deviceType = useDeviceType();

  if (deviceType === DEVICE_TYPES.mobile) {
    return valueIfMobile;
  }
  if (deviceType === DEVICE_TYPES.desktop) {
    return valueIfDesktop;
  }
  return null;
};
