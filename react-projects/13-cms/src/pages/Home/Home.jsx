import Feature from '../../components/Features/Feature';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <Feature />
            {/* <Chart/> */}
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
