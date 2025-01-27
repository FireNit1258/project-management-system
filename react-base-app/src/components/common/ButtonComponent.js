import { Button } from "@mui/material";

function ButtonComponent(props) {
  
    const { buttonVariant = 'contained',
            clickHandler,
            buttonColor = 'primary',
            buttonSize = 'medium',
            disabled = false,
            style={margin:5},
            buttonLabel } = props;
  return (
   
      <Button variant={buttonVariant} color={buttonColor} size={buttonSize} onClick={clickHandler} disabled={disabled} style={style} >
        {buttonLabel}
      </Button>
    
  );
}

export default ButtonComponent;
