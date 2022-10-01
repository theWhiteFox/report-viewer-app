
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { Card, IconButton } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
// import BasicTabs from './BasicTabs';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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

            <Card className="poke-card" variant="outlined">
              <CardContent>
                <Typography
                  className="poke-number"
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  # report number
                </Typography>
                <CardMedia
                  style={{ width: 'unset', margin: 'auto' }}
                  component="img"
                  height="194"
                  image=''
                  alt='report'
                />
              </CardContent>
              <CardContent className="poke-card-content">
                <Typography variant="h5" component="div">
                  Report Name
                </Typography>
                <Typography>Type: report type</Typography>
                {/* <BasicTabs /> */}
              </CardContent>
            </Card>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Modal>
      </div>
      <Outlet />
    </>
  );
}