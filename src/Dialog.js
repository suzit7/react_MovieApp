import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useStyles } from "./Style";

import ImageAvatars from "./Avatar";

import { logout, Signup } from "./firebase";
import { useRef } from "react";
import { useState } from "react";
import { useAuth } from "./firebase";
import { Login } from "./firebase";

export default function FormDialog() {
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);

  async function handleSignup() {
    setLoading(true);
    try {
      await Signup(emailRef.current.value, passwordRef.current.value); // try catch problem
    } catch (error) {
      alert("error");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await Login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert("Account not registered");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}

      {currentUser !== null ? (
        <Button
          className={classes.buttop}
          variant="contained"
          color="error"
          onClick={handleLogout}
        >
          Sign Out
        </Button>
      ) : (
        <Button
          className={classes.buttop}
          variant="contained"
          color="error"
          onClick={handleClickOpen}
        >
          Sign In
        </Button>
      )}

      {/* <Button className={classes.buttop} variant = "contained" color = "error" 
      onClick={handleClickOpen}>Sign In</Button> */}

      {/*      
        <Button className={classes.buttop} variant = "contained" color = "error" 
      onClick={handleClickOpen}>Sign Out</Button> */}

      <h3 style={{ color: "red", size: "20px", textDecoration: "underline" }}>
        {" "}
        {currentUser?.email}
      </h3>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.subscription}>SUBSCRIPTION</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            inputRef={emailRef}
            margin="dense"
            // id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={passwordRef}
            margin="dense"
            // id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            disabled={loading || currentUser != null}
            onClick={handleSignup}
          >
            Register
          </Button>
          <Button
            disabled={loading || currentUser != null}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button disabled={loading || !currentUser} onClick={handleLogout}>
            Logout{" "}
          </Button>

          {/* <Button onClick={handleClose}>Cancel</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
