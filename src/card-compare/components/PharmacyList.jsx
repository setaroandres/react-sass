import { ArrowForward, LocalPharmacy } from '@mui/icons-material';
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export const PharmaciesList = () => {

  const id = '123';//Temp id to link 

  return (

    <List>
      {/* For each from API */}
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar>
            <LocalPharmacy />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Single-line item"
          secondary={'Secondary text'}
        />
        <IconButton edge="end" aria-label="delete">
          <ArrowForward />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <Link 
          to={`/search/${id}`}
          className='link-wrapper'
        >
          <ListItemAvatar>
            <Avatar>
              <LocalPharmacy />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={'Secondary text'}
          />
          <IconButton edge="end" aria-label="delete">
            <ArrowForward />
          </IconButton>
        </Link>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar>
            <LocalPharmacy />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Single-line item"
          secondary={'Secondary text'}
        />
        <IconButton edge="end" aria-label="delete">
          <ArrowForward />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar>
            <LocalPharmacy />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Single-line item"
          secondary={'Secondary text'}
        />
        <IconButton edge="end" aria-label="delete">
          <ArrowForward />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar>
            <LocalPharmacy />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Single-line item"
          secondary={'Secondary text'}
        />
        <IconButton edge="end" aria-label="delete">
          <ArrowForward />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar>
            <LocalPharmacy />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Single-line item"
          secondary={'Secondary text'}
        />
        <IconButton edge="end" aria-label="delete">
          <ArrowForward />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar>
            <LocalPharmacy />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Single-line item"
          secondary={'Secondary text'}
        />
        <IconButton edge="end" aria-label="delete">
          <ArrowForward />
        </IconButton>
      </ListItem>
    </List>
  )
}
