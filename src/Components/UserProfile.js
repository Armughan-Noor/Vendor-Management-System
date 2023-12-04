import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Container,
  Paper,
  Button,
} from '@material-ui/core';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    username: '',
    accessRights: {
      setup: false,
      maintain: false,
      view: false,
    },
    // ... other user profile fields
  });

  const handleCheckboxChange = (accessRight) => {
    setUserProfile({
      ...userProfile,
      accessRights: {
        ...userProfile.accessRights,
        [accessRight]: !userProfile.accessRights[accessRight],
      },
    });
  };

  return (
    <Container component="main" maxWidth="xs" style={{
        marginTop: '20px'
    }}>
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          User Profile
        </Typography>
        {/* Form to set up or update user profile */}
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={userProfile.username}
          onChange={(e) => setUserProfile({ ...userProfile, username: e.target.value })}
        />
        {/* Add more fields as needed */}
        <FormControlLabel
          control={
            <Checkbox
              checked={userProfile.accessRights.setup}
              onChange={() => handleCheckboxChange('setup')}
              color="primary"
            />
          }
          label="Setup"
        />
        {/* Repeat for other access rights */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
          onClick={() => console.log('Save button clicked')}
        >
          Save
        </Button>
      </Paper>
    </Container>
  );
};

export default UserProfile;
