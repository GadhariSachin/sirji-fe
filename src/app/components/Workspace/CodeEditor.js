import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import LoadingSkeleton from "../Loaders/LoadingSkeleton";

function CodeEditor({ file, setFile }) {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function handleEditorChange(value, event) {
    setFile(value);
  }

  return (
    <>
      <Editor
        height="80vh"
        defaultLanguage="javascript"
        defaultValue={file}
        theme="vs-dark"
        onMount={handleEditorDidMount}
        loading={<LoadingSkeleton height={"80vh"} />}
        onChange={handleEditorChange}
      />
    </>
  );
}

export default CodeEditor;
