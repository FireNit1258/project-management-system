import ButtonComponent from "../common/ButtonComponent";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DialogBoxComponent(props) {
  
  const { opendialog = false,
          onclosefunction,
          oncancelfunction,
          onconfirmfunction,
          alerttitle= 'Success!',
          alertmessagetext = 'Something groing wrong',
          okbuttontext = 'Confirm',
          cancelbuttontext = 'Cancel',
          formfields
          } = props;


  return (
 
    <Dialog
    open={opendialog}
    onClose={onclosefunction}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {alerttitle}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
       {alertmessagetext}
      </DialogContentText>
      {formfields}
    </DialogContent>
    <DialogActions>
      <ButtonComponent buttonLabel={cancelbuttontext} clickHandler={oncancelfunction} buttonColor='primary' />
      <ButtonComponent buttonLabel={okbuttontext} clickHandler={onconfirmfunction} buttonColor='secondary' />
    </DialogActions>
  </Dialog>


  );
}

export default DialogBoxComponent;
