import { useTheme } from '@mui/styles';
import { navigation } from '../../../service';
import { footer } from '../../../service/pages/Common/dataManagment/data_eng';
import { Navigation } from '../../tree/molecule';
import { Footer } from '../../tree/organism';
import style from './style.module.css';

export default function LayoutOne({ children }: any) {
  const theme: any = useTheme();

  const styleComponent = {
    backgroundColor: theme.palette.neutral.light
  };
  return (
    <div style={styleComponent} className={style.layout_one}>
      <Navigation data={navigation} />
      {children}
      <Footer data={footer} />
    </div>
  );
}
