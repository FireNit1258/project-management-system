import AlertTitle from '@mui/material/AlertTitle';
import { Alert } from "@mui/material";
function AlertComponent(props) {
  
  const { show = false,
          severity = 'success',
          variant = 'filled',
          color = 'success',
          alerttitle= 'Success!',
          alertmessagetext = 'Something groing wrong',
          onCloseHandler
          } = props;

  return (
 
    <>
      {show && (
    <Alert severity = {severity}
    variant = {variant}
    color={color}
       onClose = {onCloseHandler} sx={{ width: '100%', marginTop:'10px', marginBottom:'10px' }} >
  <AlertTitle>{alerttitle}</AlertTitle>
  {alertmessagetext}
  </Alert>
)}
    </>


  );
}

export default AlertComponent;
