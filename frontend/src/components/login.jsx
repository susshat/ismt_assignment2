import { ThemeProvider } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { textState } from "../App";
import { useFormik } from 'formik';
import ReCAPTCHA from "react-google-recaptcha";


export const loginUser = async (data) =>
  axios.post('/api/user/login', data);

export const logOut = async (data) =>
  axios.post('/api/user/logout', data);

export const getSessionUser = () =>
  axios.get('/api/user/profile');

const theme = createTheme();

const Login = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [failedMessage, setFailedMessage] = useState('');
  // const [text, setText] = useRecoilState(textState);
  const [captcha, setCaptcha] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      captcha: ''
    },
    onSubmit: values => {
      setLoading(true);
      axios.post('/api/user/login',values).then((res) => {
        setLoading(false)
        localStorage.setItem('user', JSON.stringify(res.data))
        navigate('/dashboard');
      }).finally(setLoading(false))
    }
  })


  const handleNavigate = () => {
    navigate('/register');
  }
  const handleCaptcha = (value) => {
    formik.setFieldValue('captcha',value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
         <ReCAPTCHA
              sitekey="6LcXw8sgAAAAAIihp9OjCWbQEgjAO0v4xbgvY6wv"
              onChange={handleCaptcha}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!formik.values.email || !formik.values.password || !formik.values.captcha}
            >
              Sign In
            </Button >
            <Grid container>
              <Grid item>
                <Button onClick={handleNavigate}>
                  {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
