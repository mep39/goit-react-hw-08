import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <Button component={Link} to="/register" variant="contained" color="primary">
        Registration
      </Button>
      <Button component={Link} to="/login" variant="contained" color="primary">
        Log In
      </Button>
    </div>
  );
}