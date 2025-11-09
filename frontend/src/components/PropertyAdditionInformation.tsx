import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography';
import { AdditionalInformationProperty } from '../interfaces/property'
import { format } from 'date-fns'

export default function PropertyAdditionalInformation(props: { property: AdditionalInformationProperty }) {
  const { property } = props;

  return (
    <Box>
      <Stack spacing={2} sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: '0.95rem' }}>{format(property.last_sale_date, 'M-d-yyyy')}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>$ {property.last_sale_price}</Typography>
        <Typography sx={{ fontSize: '0.95rem' }}>$ {property.hoa_fee}</Typography>
      </Stack>
    </Box>
  )
}