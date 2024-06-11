import { Button, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './page.module.css';

const LoginPage = () => {
  return (
    <div className={classes.loginPageContainer}>
      <div className={classes.loginForm}>
        <Image src="/anime-pic.png" width={300} height={300} alt="Picture of the author" />
        <Title>AniStream</Title>
        <Button fullWidth className={classes.loginButton} component="span">
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
