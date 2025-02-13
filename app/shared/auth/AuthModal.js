import LoginForm from "@/app/login/component/LoginForm";
import RegisterForm from "@/app/register/component/RegisterForm";
import { Dialog, DialogContent } from "@mui/material";
import React from "react";

const AuthModal = ({
  visible,
  setVisible,
  showComponent,
  setShowComponent,
}) => {
  console.log("showComponent", showComponent);
  return (
    <Dialog
      open={visible}
      onClose={() => setVisible(false)}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>
        {showComponent === "login" ? (
          <LoginForm
            setShowComponent={setShowComponent}
            setVisible={setVisible}
          />
        ) : (
          <RegisterForm
            setShowComponent={setShowComponent}
            setVisible={setVisible}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
