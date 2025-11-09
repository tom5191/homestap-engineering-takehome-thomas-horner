import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography';
import { FeaturesProperty } from '../interfaces/property';

export default function PropertyFeature(props: { property: FeaturesProperty }) {
  const { property } = props;

  return (
    <Box>
      <Stack spacing={2} sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.type}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.year_built}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.cooling}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.heating}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.garage}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>{property.septic ? "Yes" : "No"}</Typography>
      </Stack>
    </Box>
  )
}