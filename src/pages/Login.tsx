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
  // ここではuseStateというHooksの機能を利用している
  // フォームに入力された値を保持する変数を宣言する形
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      // ログインしている場合、ホームへリダイレクト
      //user && props.history.push("/");
    });
  }, []);

  // login 
  const login = async () => {
    console.log("login event");
    await auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        props.history.push("/");
      })
      .catch(e => {
        alert("メールアドレスまたはパスワードが間違っています。");
      })
  }

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            login form
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
                variant="contained"
                color="primary"
                fullWidth
                onClick={login}
                style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
              >
                Login
              </Button>
            </FormControl>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Signup;