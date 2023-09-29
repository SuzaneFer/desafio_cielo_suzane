import { DEVICE_TYPES } from '../../../utils/constants';
import useDeviceType from '../../../hooks/useDeviceType';


const Device = ({ children }) => {
  const currentDevice = useDeviceType();

  if (DEVICE_TYPES !== currentDevice) return null;

  return (
    <>
      {children}
    </>
  );
};

export default Device;
