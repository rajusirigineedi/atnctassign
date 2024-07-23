import React from "react";
import { Toaster } from "react-hot-toast";

// Default config options from documentation. react-hot-toast.
// [ not customizing more, as it is out of scope for this assignment ]
const ToastConfig = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  );
};

export default ToastConfig;
