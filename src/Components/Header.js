import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import infeedo from '../Images/avatar.png';

function Header() {
    return (
        <Box sx={{ flexGrow: 2 }}>
          <AppBar position="fixed">
            <Toolbar>
              <Avatar  alt="inFeedo" src={infeedo}/>
		&nbsp; &nbsp;
              <Typography  align = 'left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                inFeedo Chatbot
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
  }
  
  export default Header;