import './Feature.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function Feature() {
    return (
        <>
            <div className="features">
                <div className="featureItem">
                    <span className="featureItemTitle">Revanue</span>
                    <div className="featureContainer">
                        <span className="featureMoney">$2,415</span>
                        <span className="featureRate">
                            -11.4
                            <ArrowDownward className="featureIcon negative" />
                        </span>
                    </div>
                    <span className="featureSub">Compared to last month</span>
                </div>

                <div className="featureItem">
                    <span className="featureItemTitle">Sales</span>
                    <div className="featureContainer">
                        <span className="featureMoney">$4,415</span>
                        <span className="featureRate">
                            -1.4
                            <ArrowDownward className="featureIcon negative" />
                        </span>
                    </div>
                    <span className="featureSub">Compared to last month</span>
                </div>

                <div className="featureItem">
                    <span className="featureItemTitle">Cost</span>
                    <div className="featureContainer">
                        <span className="featureMoney">$2,415</span>
                        <span className="featureRate">
                            +2.4
                            <ArrowUpward className="featureIcon" />
                        </span>
                    </div>
                    <span className="featureSub">Compared to last month</span>
                </div>
            </div>
        </>
    );
}
