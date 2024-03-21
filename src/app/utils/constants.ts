export const SKELETON_VARIANTS = {
  CIRCULAR: "circular",
  RECTANGLE: "rectangular",
  ROUNDED: "rounded",
} as const;

export type SkeletonVariantType = typeof SKELETON_VARIANTS[keyof typeof SKELETON_VARIANTS];


export const SAMPLE_CODE = `
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LoadingSkeleton from "../Loaders/LoadingSkeleton";

function CodeEditor() {
  const [file, setFile] = useState();
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
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
      />
    </>
  );
}

export default CodeEditor;
`;
