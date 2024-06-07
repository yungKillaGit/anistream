import { IconHome } from '@tabler/icons-react';
import { Navbar, NavbarIcon } from '@/shared/ui/navbar';
import classes from './page.module.css';

const HomePage = () => {
  return (
    <main className={classes.homePageContainer}>
      <Navbar
        data={[
          {
            link: '/',
            label: 'Home',
            icon: (
              <NavbarIcon>
                <IconHome />
              </NavbarIcon>
            ),
          },
        ]}
      />
    </main>
  );
};

export default HomePage;
