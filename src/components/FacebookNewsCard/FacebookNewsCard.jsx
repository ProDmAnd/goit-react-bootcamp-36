import { Avatar, Box, Button, Paper, styled, Typography } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import asusImage from 'assets/Asus_ads.jpeg';
import React from 'react';
import RowCenteredBox from 'components/RowCenteredBox/RowCenteredBox';

const CardHeader = styled(RowCenteredBox)({
  padding: '12px 16px 0px',
  marginBottom: 12,
  justifyContent: 'space-between',
});

const Image = styled(props => <img {...props} />)({
  width: '100%',
});

const MoreButton = styled(Button)({
  borderRadius: 8,
  backgroundColor: '#',
});

const FacebookNewsCard = () => {
  return (
    <Paper elevation={3} style={{ paddingBottom: 12 }}>
      <CardHeader>
        <RowCenteredBox>
          <Avatar style={{ marginRight: 6 }}>N</Avatar>
          <Box>
            <Typography variant="subtitle1">ASUS</Typography>
            <Typography variant="body2">Реклама</Typography>
          </Box>
        </RowCenteredBox>
        <MoreHorizRoundedIcon size={20} />
      </CardHeader>
      <Image src={asusImage} />
      <RowCenteredBox>
        <Box sx={{ px: 1 }}>
          <Typography variant="body2">ASUS.COM</Typography>
          <Typography variant="subtitle1">
            Zenbook Pro 14 Duo OLED (UX8402)
          </Typography>
        </Box>
        <Button>Подробнее</Button>
      </RowCenteredBox>
    </Paper>
  );
};

export default FacebookNewsCard;
