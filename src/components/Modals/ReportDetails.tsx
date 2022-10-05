
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import ReportViewLandline from '../Report/ReportViewLandline';
import ReportViewMobile from '../Report/ReportViewMobile';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '98%',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

export default function BasicModal() {
  const { reportId } = useParams();

  const rId = reportId?.slice(0, reportId.length - 12)

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
            {
              rId === '41' ? <ReportViewLandline /> : <ReportViewMobile />
            }
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