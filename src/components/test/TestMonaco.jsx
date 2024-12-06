import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";

function TestMonaco() {
  const [snippet, setSnippet] = useState(
    'function helloWorld() {\n\tconsole.log("Hello World");\n}'
  );

  useEffect(() => {
    console.log(snippet);
  },[]);

  return (
    <div className="h-screen flex items-center justify-center">
      <MonacoEditor
        width="400px"
        height="400px"
        language="python"
        defaultValue={snippet}
        onChange={(e) => setSnippet(value)}
      />
    </div>
  );
}

export default TestMonaco;
