import React from "react";
import {DialogContext} from "../hooks/useDialog";
import Overlay from "./Overlay";
import Alert from "../components/Alert";
import Prompt from "../components/Prompt";

type AlertState = {
  type: "alert",
  message: string;
  subMessage: string,
  onClickOk: () => void
};

type PromptState = {
  type: "prompt",
  message: string;
  subMessage: string,
  onClickOk: (input: object) => void,
  onClickCancel: () => void
};

type PropsType = {
  children: React.ReactNode;
};

function DialogProvider({children}: PropsType) {
  const [state, setState] = React.useState<AlertState | PromptState>();

  const alert = (message?: string, subMessage?:string): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({
        type: "alert",
        message: message ?? '',
        subMessage: subMessage ?? "",
        onClickOk: () => {
          setState(undefined);
          resolve(true);
        },
      });
    });
  };

  const prompt = (message?: string, subMessage?:string): Promise<object | undefined> => {
    return new Promise((resolve) => {
      setState({
        type: "prompt",
        message: message ?? '',
        subMessage: subMessage ?? "",
        onClickOk: (input: object) => {
          setState(undefined);
          resolve(input);
        },
        onClickCancel: () => {
          setState(undefined);
          resolve(undefined);
        },
      });

    });
  }

  return <DialogContext.Provider value={{alert, prompt}}>
    {children}
    {state && <Overlay>
      {state.type == "alert" &&
          <Alert type={state.type} message={state.message} subMessage={state.subMessage} onClickOk={state.onClickOk}/>}
      {state.type == "prompt" &&
          <Prompt type={state.type} message={state.message} subMessage={state.subMessage} onClickOk={state.onClickOk}
                  onClickCancel={state.onClickCancel}/>}
    </Overlay>}
  </DialogContext.Provider>;
}

export default DialogProvider;
