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

const Logout:React.FC<Props> = (props: any) => {
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

  // logout 
  const logout = async () => {
    await auth.signOut()
      .then(result => {
        props.history.push("/login");
      })
      .catch(e => {
          alert("エラーが発生しました");
      });
  }

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            logout
            <FormControl fullWidth>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={logout}
                style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
              >
                Logout
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

export default Logout;