import { Box } from '@mui/material';

const Wrapper = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Box sx={{ padding: 2, maxWidth: 1120, margin: '0 auto' }}>
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
