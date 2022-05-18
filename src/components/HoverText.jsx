const HoverText = ({text,stockState}) => {
    return (
        <div className="message hovertext" style={{backgroundColor: stockState}}>
            {text}
        </div>
    );
};

export default HoverText;