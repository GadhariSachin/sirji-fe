import React, { useEffect, useRef } from "react";
import { Terminal as XtermTerminal } from "@xterm/xterm";
// import { AttachAddon } from "xterm-addon-attach";
import { FitAddon } from "xterm-addon-fit";
import "@xterm/xterm/css/xterm.css";

function Shell(): JSX.Element {
  const terminalRef = useRef<HTMLDivElement>(null);
  const WS_URL = process.env.VITE_TERMINAL_WS_URL;
  useEffect(() => {
    const terminal = new XtermTerminal({
      cols: 0,
      fontFamily: "Menlo, Monaco, 'Courier New', monospace",
      fontSize: 16,
    });

    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);

    terminal.open(terminalRef.current as HTMLDivElement);

    setTimeout(() => {
      fitAddon.fit();
    }, 1);

    terminal.writeln("Hello, World!");

    // if (!WS_URL) {
    //   throw new Error(
    //     "The environment variable REACT_APP_TERMINAL_WS_URL is not set. Please set it to the WebSocket URL of the terminal server."
    //   );
    // }
    // const attachAddon = new AttachAddon(new WebSocket(WS_URL as string));
    // terminal.loadAddon(attachAddon);

    return () => {
      terminal.dispose();
    };
  }, []);

  return <div ref={terminalRef} style={{ width: "100%", height: "100%" }} />;
}

export default Shell;
