import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

function PostEditor(): JSX.Element {
  return (
    <Editor
      initialValue=""
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
}

export default PostEditor;
