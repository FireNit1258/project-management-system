import { TextField } from "@mui/material";
function ButtonComponent(props) {
  
  const { margin = 'normal',
                  required,
                  fullWidth,
                  name = '',
                  label,
                  type = 'text',
                  id,
                  autoComplete,
                  value,
                  handleChange
                } = props;
  return (
      <TextField margin = {margin}
      required = {required}
      fullWidth={fullWidth}
      name = {name}
      label = {label}
      type = {type}
      id = {id}
      autoComplete = {autoComplete}
      value = {value}
      onChange={handleChange}/>
  );
}

export default ButtonComponent;
