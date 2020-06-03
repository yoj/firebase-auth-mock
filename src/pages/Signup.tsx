import React, {Fragment, useEffect, useState} from 'react';
import {
  Button,
  Container,
  FormControl,
  Grid,
  Link,
  TextField,
  Typography
} from "@material-ui/core";

import auth from '../config/firebase'

type Props = {}

const Signup:React.FC<Props> = (props: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && props.history.push("/");
    });
  }, []);

  const singup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      props.history.push("/login");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            SignIn form
            <FormControl margin="normal" fullWidth>
              <TextField
                style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                name="email"
                label="E-mail"
                fullWidth
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value);
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                name="password"
                label="Password"
                fullWidth
                type="password"
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(event.target.value);
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <Button
                fullWidth
                variant="contained"
                color="default"
                onClick={singup}
                style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
              >
                Sign up
              </Button>
              <Typography align="center">
                <Link href="/login">to login</Link>
              </Typography>
            </FormControl>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Signup;