import { useEffect, useState} from 'react';
import { DEVICE_TYPES, MIN_MOBILE_WIDTH_PX } from '../utils/constants';

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState(DEVICE_TYPES.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MIN_MOBILE_WIDTH_PX) {
        setDeviceType(DEVICE_TYPES.mobile);
      } else {
        setDeviceType(DEVICE_TYPES.desktop);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}
