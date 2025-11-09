import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import PropertyOverview from './PropertyOverview';
import PropertyFeature from './PropertyFeature'
import PropertyAdditionalInformation from './PropertyAdditionInformation';
import { AdditionalInformationProperty, PropertyData, FeaturesProperty, OverviewProperty } from '../interfaces/property';

type Response = {
  provider_1: PropertyData,
  provider_2: PropertyData
}

export default function PropertyInformation(props: { data: Response }) {
  const { data } = props;
  const address = data.provider_1.address.normalized;
  const price = data.provider_1.overview.price ?? data.provider_2.overview.price;
  const provision_1_overview: OverviewProperty = data.provider_1.overview;
  const provision_1_feature: FeaturesProperty = data.provider_1.features;
  const provider_1_additional_info: AdditionalInformationProperty = data.provider_1.additional_information;
  const provision_2_overview: OverviewProperty = data.provider_2.overview;
  const provision_2_feature: FeaturesProperty = data.provider_2.features;
  const provider_2_additional_info: AdditionalInformationProperty = data.provider_2.additional_information;


  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant='h1' sx={{ fontSize: '2rem', mb: 2 }}>{address} ${price}</Typography>

      <Paper elevation={2} sx={{ width: 1200, borderRadius: 2, textAlign: 'center' }}>
        <Typography sx={{ fontSize: '1.25rem', textAlign: 'center', fontWeight: 'bold', paddingTop: 2 }}>Overview</Typography>
        <Grid container columns={12} sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: -4 }}>
          <Grid size={2} sx={{ padding: 5 }}></Grid>
          <Grid size={5}>Provision 1</Grid>
          <Grid size={5}>Provision 2</Grid>
        </Grid>
        <Grid container columns={12}>
          <Grid size={2} sx={{ padding: 5 }}>
            <Stack spacing={2} sx={{ textAlign: 'right', marginTop: -4.5 }}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Bedrooms</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Bathrooms</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Total Rooms</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Square Footage</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Lot Size (sqft)</Typography>
            </Stack>
          </Grid>
          <Grid size={5}>
            <PropertyOverview property={provision_1_overview} />
          </Grid>
          <Grid size={5}>
            <PropertyOverview property={provision_2_overview} />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ width: 1200, borderRadius: 2, textAlign: 'center', marginTop: 2 }}>
        <Typography sx={{ fontSize: '1.25rem', textAlign: 'center', fontWeight: 'bold', paddingTop: 2 }}>Features</Typography>
        <Grid container columns={12} sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: -4 }}>
          <Grid size={2} sx={{ padding: 5 }}></Grid>
          <Grid size={5}>Provision 1</Grid>
          <Grid size={5}>Provision 2</Grid>
        </Grid>
        <Grid container columns={12}>
          <Grid size={2} sx={{ padding: 5 }}>
            <Stack spacing={2} sx={{ textAlign: 'right', marginTop: -4.5 }}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Home Style</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Year Built</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Cooling</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Heating</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Garage</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Septic System</Typography>
            </Stack>
          </Grid>
          <Grid size={5}>
            <PropertyFeature property={provision_1_feature} />
          </Grid>
          <Grid size={5}>
            <PropertyFeature property={provision_2_feature} />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ width: 1200, borderRadius: 2, textAlign: 'center', marginTop: 2 }}>
        <Typography sx={{ fontSize: '1.25rem', textAlign: 'center', fontWeight: 'bold', paddingTop: 2 }}>Additional Information</Typography>
        <Grid container columns={12} sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: -4 }}>
          <Grid size={2} sx={{ padding: 5 }}></Grid>
          <Grid size={5}>Provision 1</Grid>
          <Grid size={5}>Provision 2</Grid>
        </Grid>
        <Grid container columns={12}>
          <Grid size={2} sx={{ padding: 5 }}>
            <Stack spacing={2} sx={{ textAlign: 'right', marginTop: -4.5 }}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Last Sold</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Last Sold Price</Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>HOA Fee</Typography>
            </Stack>
          </Grid>
          <Grid size={5}>
            <PropertyAdditionalInformation property={provider_1_additional_info} />
          </Grid>
          <Grid size={5}>
            <PropertyAdditionalInformation property={provider_2_additional_info} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}