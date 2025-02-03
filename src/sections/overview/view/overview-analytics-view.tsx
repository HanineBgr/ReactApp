import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { _tasks, _posts, _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
import { UserView } from 'src/sections/user/view';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsStations } from '../analytics-available_stations';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsTasks } from '../analytics-tasks';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back 👋
      </Typography>
      <Grid container spacing={3}>
        {/* First AnalyticsStations Component */}
        <Grid xs={12} md={6} lg={5}>
          <AnalyticsStations
            title="Available Stations"
            chart={{
              categories: ['7 am', '8 am', '9 am', '10 am', '11 am', '12 pm'],
              series: [
                { name: 'Per day', data: [43, 33, 22, 37, 67, 68] },
                { name: 'Per hour', data: [51, 70, 47, 67, 40, 37] },
              ],
            }}
          />
        </Grid>

        {/* Spacer Grid */}
        <Grid xs={12} md={6} lg={1} /> {/* Spacer */}

        {/* Second AnalyticsStations Component */}
        <Grid xs={12} md={6} lg={5}>
          <AnalyticsStations
            title="Stations in use"
            chart={{
              categories: ['1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'],
              series: [
                { name: 'Per day', data: [60, 52, 46, 34, 55, 70] },
                { name: 'Per hour', data: [70, 80, 64, 58, 48, 40] },
              ],
            }}
          />
        </Grid>

        {/* User View Card (integrated into layout) */}
        <Grid xs={10} > {
          }
          <UserView />  {/* Add User View here */}
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsNews title="News" list={_posts.slice(0, 5)} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsOrderTimeline title="Order timeline" list={_timeline} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsTrafficBySite
            title="Traffic by site"
            list={[
              { value: 'facebook', label: 'Facebook', total: 323234 },
              { value: 'google', label: 'Google', total: 341212 },
              { value: 'linkedin', label: 'Linkedin', total: 411213 },
              { value: 'twitter', label: 'Twitter', total: 443232 },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsTasks title="Tasks" list={_tasks} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
