import './WidgetSm.css';
import { Visibility } from '@mui/icons-material';
import { newMembers } from '../../Datas';

export default function WidgetSm() {
    return (
        <div className="WidgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="WidgetSmList">
                {newMembers.map((member) => (
                    <li key={member.id} className="WidgetSmListItem">
                        <img className="WidgetSmImg" src={member.img} />
                        <div className="WidgetSmUser">
                            <span className="WidgetSmUsername">
                                {member.username}
                            </span>
                            <span className="WidgetSmTitle">
                                {member.Title}
                            </span>
                        </div>
                        <button className="WidgetSmButton">
                            <Visibility className="WidgetSmIcon" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
