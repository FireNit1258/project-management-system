import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TexteditorComponent(props) {
    const {
        editorValue,
        editorName,
        editorId,
        editorPlaceHolder,
        handleChange,
        editorStyle
      } = props;

  return (
      <ReactQuill theme="snow" value={editorValue} name={editorName} id={editorId} placeholder={editorPlaceHolder} onChange={handleChange} style={editorStyle} />
  );
}

export default TexteditorComponent;
