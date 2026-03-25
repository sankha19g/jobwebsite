import './cards.css';
import { Bookmark } from 'lucide-react';

const Cards = (props) => {
    return (
        <div className="card">
            <div className="header">
                <div className="cardlogo">
                    <img src={props.company_logo} alt={`${props.company_name} logo`} />
                </div>
                <div className="savebutton">
                    <span>Save</span>
                    <Bookmark size={18} />
                </div>
            </div>
            
            <div className="body">
                <div className="company">
                    <div className="name">{props.company_name}</div>
                    <div className="time">• {props.time}</div>
                </div>
                <div className="jobrole">{props.position}</div>
                <div className="jobtags">
                    <span className="tag">{props.job_tag1}</span>
                    <span className="tag">{props.job_tag2}</span>
                </div>
            </div>
            
            <div className="footer">
                <div className="text">
                    <div className="wage">{props.wage}</div>
                    <div className="location">{props.location}</div>
                </div>
                <div className="action">
                    <button className='apply'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;