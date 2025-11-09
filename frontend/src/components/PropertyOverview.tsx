import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography';
import { OverviewProperty } from '../interfaces/property';

export default function PropertyOverview(props: { property: OverviewProperty }) {
  const { property } = props;
  console.log("🚀 ~ PropertyOverview ~ property:", property)

  return (
    <Box>
      <Stack spacing={2} sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.beds}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.bath}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.rooms}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.square_footage}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.lot_size}</Typography>
      </Stack>
    </Box>
  )
}