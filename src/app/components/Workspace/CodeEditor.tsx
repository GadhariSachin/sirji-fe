import React from "react";
import Editor from "@monaco-editor/react";
import LoadingSkeleton from "../Loaders/LoadingSkeleton";

function CodeEditor({ file, setFile }): JSX.Element {
  function handleEditorChange(value: string | undefined) {
    setFile(value);
  }

  return (
    <>
      <Editor
        height="80vh"
        defaultLanguage="javascript"
        defaultValue={file}
        theme="vs-dark"
        loading={<LoadingSkeleton height={"80vh"} />}
        onChange={handleEditorChange}
      />
    </>
  );
}

export default CodeEditor;
