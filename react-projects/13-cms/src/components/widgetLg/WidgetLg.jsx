import './WidgetLg.css';
import { transActions } from '../../Datas';

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <Button className={'widgetLgButton ' + type}>{type}</Button>;
    };

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest TransActions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh widgetLgTh-status">Status</th>
                </tr>

                {transActions.map((user) => (
                    <tr key={user.id} className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img className="widgetLgImg" src={user.img} />
                            <span className="widgetLgName">
                                {user.customer}
                            </span>
                        </td>
                        <td className="widgetLgDate">{user.date}</td>
                        <td className="widgetLgAmount">{user.amout}</td>
                        <td className="widgetLgStatus">
                            {/* <Button type={user.status}/> */}
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
