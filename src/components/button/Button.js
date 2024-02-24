const Button = ({newItemLoading, style, onClickFunction, offset, text = 'load more'}) => {
    return (
        <button 
            className="button button__main button__long"
            disabled={newItemLoading}
            style={{'display': style ? 'none' : 'block'}}
            onClick={() => onClickFunction(offset)}>
            <div className="inner">{text}</div>
        </button>
    );
};

export default Button;