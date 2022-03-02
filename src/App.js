import { useEffect, useState } from "react";
import Header from './Components/Header';
import ChatWindow from './Components/ChatWindow';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import user from './Images/user.png';

function App() {
  const [messages,setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    if (savedMessages) {
      return JSON.parse(savedMessages);
    }
    else {
      return[];
    }
  });
  const [message,setMessage] = useState("");
  
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  },[messages]);

  function handleSend(event) {
    event.preventDefault();
    if(message !== "") {
      setMessages([
        ...messages,
        {
          id: new Date(),
          text:message.trim()
        }
      ]);
    }
    setMessage("");
  }
  
function handleChange(event) {
    if(event.key === 'Enter'){
	handleSend(event);
    }
    setMessage(event.target.value);
  }


  return (
    <div className="App">
      <Header/>,
      <Box sx={{ m: 2 , paddingBottom: 50 }} position='flex' >
      <ul className="chat">
        {messages.map((message) => (
          <ChatWindow message = {message}/>
        ))}
      </ul>

      </Box>
      <Box  sx={{ flexGrow: 1 }} background="primarys">
            <Grid container  position='fixed' bottom='0'>
              <Grid item xs={8} md={11} sm={10} lg={11} xl={11}>
                    <TextField
                     margin="dense" 
                    fullWidth
		    background-color= "#3CBC8D"
                    minwidth='100%'
                    label="Enter message Here"
                    id="message" 
                    variant="outlined"
                    color="primary"
                    onChange={handleChange}
                    value = {message}
                    focused/>
              </Grid>
              <Grid item xs md sm lg xl>
                <Button variant="contained" onClick={handleSend}>
                    Send
                </Button>
              </Grid>
            </Grid>
          </Box>
          </div>
    
  );
}

export default App;
