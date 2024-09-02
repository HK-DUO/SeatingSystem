import React from "react";


type Type = {
  alert: (message?: string, subMessage?: string) => Promise<boolean>
  prompt: (message?: string, subMessage?: string) => Promise<object | undefined>
};

const DialogContext = React.createContext<Type>({
  alert: () => new Promise((_, reject) => reject()),
  prompt: () => new Promise((_, reject) => reject()),
});


function useDialog(){
  const context = React.useContext(DialogContext);
  if(context == undefined){
    console.log("useDialog must be used inside a DialogProvider")
  }
  return context;
}

export {useDialog, DialogContext};
