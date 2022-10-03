
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

import ReportView from '../Report/ReportView';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '98%',
  maxWidth: 480,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

export default function BasicModal() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => navigate('/');

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
          >
            <ReportView />
            <IconButton style={{ float: 'right', marginTop: '.5rem' }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Modal>
      </div>
      <Outlet />
    </>
  );
}