import Feature from '../../components/Features/Feature';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import './Home.css';
import Chart from '../../components/Chart/Chart';
import { xAxisData } from '../../Datas';

export default function Home() {
    return (
        <div className="home">
            <Feature />
            <Chart grid title='Month Sale' data={xAxisData} dataKey='Sale'/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
