import PropTypes from 'prop-types';

import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CardModalStyle, { ButtonStyle, HeaderModalStyle } from './modal.style';

const CardModal = ({open, setOpen, index}) => {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}
      >
        <CardModalStyle>
          <HeaderModalStyle>
            <ButtonStyle onClick={handleClose}>
              <CloseIcon />
            </ButtonStyle>
          </HeaderModalStyle>
        </CardModalStyle>
      </Modal>
    </>
  );
};

CardModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  index: PropTypes.number,
};

CardModal.defaultProps = {
  open: false,
  setOpen: () => {},
  index: 0,
};

export default CardModal;
