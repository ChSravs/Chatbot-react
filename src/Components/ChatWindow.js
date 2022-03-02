import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import infeedo from '../Images/avatar.png';
import user from '../Images/user.png';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import '../App.css';

const UserItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#7FFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomRightRadius: 50
  }));

const InfeedoItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FF7F7F',
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 50,
	display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'right'
  }));


function ChatWindow({message}) {
    return (
        <Grid container  item xs sm md lg xl>
          <List >
            <Grid class ="user-msg">
              <ListItem key={message.id}>
                <ListItemAvatar>
                  <Avatar alt="user" src={user}/>
                </ListItemAvatar>
		&nbsp;
                <UserItem>{message.text}</UserItem>
                </ListItem>
            </Grid>
            <Grid item xs={{textAlign:'right'}} sm md lg xl class="infeedo-msg" >
                
                <ListItem  textAlign= 'right' position='fixed' right='0' key={message.id}>
                
                <InfeedoItem>{message.text}</InfeedoItem>
		&nbsp; &nbsp;
		<ListItemAvatar>
                  <Avatar alt="inFeedo" src={infeedo}/>
                </ListItemAvatar> 
		
              </ListItem>
              </Grid>
          </List>
          </Grid>
    );
}
export default ChatWindow;

