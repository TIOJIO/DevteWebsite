import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Logout from '@mui/icons-material/Logout';
import { clearSession} from 'utils/session'

import { useTranslation } from "react-i18next";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: "rgb(17, 141, 65)",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function AlertDialog() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [openn, setOpenn] = React.useState(false);

  const handleClose1 = () => {
    setOpenn(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = () => {
    setOpen(false);
    setOpenn(!openn);
    clearSession();
    window.location.href="/app";
  };

  

  return (
    <div>

    <StyledMenuItem  onClick={handleClickOpen} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("logout")} />
        </StyledMenuItem>
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {t("logout")} 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {t("logout_warning")} 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button 
           style={{backgroundColor:'rgb(17, 141, 65)',width:'120px',color:'white'}}
          onClick={handleDeleteClick} autoFocus
          >
             {t("logout")}
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openn}
        onClick={handleClose1}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}