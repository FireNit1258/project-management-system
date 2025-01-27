import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

export default function TextareaComponent(props) {
  const {
    maxRows,
    minRows,
    ariaLabel = "maximum height",
    placeHolder = "Enter description",
    defaultSetValue,
    handleChange,
    txtname,
    txtid,
    txtvalue
  } = props;

  return (
    <BaseTextareaAutosize
      maxRows={maxRows}
      minRows={minRows}
      aria-label={ariaLabel}
      placeholder={placeHolder}
      onChange={handleChange}
      name={txtname}
      id={txtid}
      value={txtvalue}
      style={{
        width: '100%',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '2px',
        borderColor: '#ccc',
        marginTop:'10px',
        borderBlockWidth:'2px'
      }}
    />
  );
}
