interface ReadButtonProps { 
    text: string; 
    link?: string; 
}

const ReadButton: React.FC<ReadButtonProps> = ({ text, link })  => { 
    return (
        <button className="readButton">                  
            {text}
        </button>
    );
};

export default ReadButton;