import { Dispatch, SetStateAction } from 'react';
import UsersAdmin from '../../pages/admin/AdminUsersTable';
import { Link } from 'react-router-dom';
import ArticlesAdmin from './ArticlesAdmin';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useCookies } from 'react-cookie';
import Forbidden from "../forbidden/Forbidden";


export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  return (
    <Box style={{ marginLeft: "40px", marginTop: "100px", display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
      <Button color="inherit">
        <Link to="/admin/articles" className="navbar-link">Articles Partenaire</Link>
      </Button>
      <Button color="inherit">
        <Link to="/admin/users" className="navbar-link">Utilisateurs</Link>
      </Button>
    </Box>
  );
}

interface MainComponentProps {
  userType: 'users' | 'articles';
}

const Admin: React.FC<MainComponentProps> = ({ userType }) => {
  const [cookies] = useCookies(['token']);

  return (!cookies.token ? <Forbidden /> :
    <div>
      <Navbar />
      <Box marginTop="-150px" height="calc(90vh)" overflow="hidden">
        {userType === 'users' && <UsersAdmin />}
        {userType === 'articles' && <ArticlesAdmin />}
      </Box>
    </div>

  );

};

export default Admin;
