import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Profile',
    path: '/user',
    icon: icon('ic-user'),
  },
  {
    title: 'Messages',
    path: '/products',
    icon: icon('ic-messages'),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
  },
  
];
