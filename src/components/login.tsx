import { Dialog, DialogTitle, List } from "@mui/material";

export interface DialogProps {
  open: boolean;
}

const Login = (props: DialogProps) => {
  const { open } = props;

  return (
    <>
      <Dialog open={open}>
              <DialogTitle>Welcome to login</DialogTitle>
             
      </Dialog>
    </>
  );
};

export default Login;
