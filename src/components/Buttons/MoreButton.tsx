import ArrowIcon from "../Icons/Arrow";

interface MoreButtonProps { 
    text: string;  
}

const MoreButton: React.FC<MoreButtonProps> = ({ text })  => { 
    return (
        <button className="more-button">
            <ArrowIcon/>
            <span className="text">{text}</span>
            <span className="circle"></span>
            <ArrowIcon/>
        </button>

    );
};

export default MoreButton;
