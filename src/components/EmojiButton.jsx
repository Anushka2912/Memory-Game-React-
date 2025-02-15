export default function EmojiButton ({ content, handleClick, selectedCardEntry, matchedCardEntry }) {

    const btnContent = 
        selectedCardEntry || matchedCardEntry ? content : 
        "?"

    const btnStyle = 
        matchedCardEntry ? "btn--emoji__back--matched" :
        selectedCardEntry ? "btn--emoji__back--selected" : 
        "btn--emoji__front"

    const btnDisabled = matchedCardEntry ? true : false;

    return (
        <button
            className={`btn btn--emoji ${btnStyle}`}
            onClick={selectedCardEntry ? null : handleClick}
            disabled={btnDisabled}
        >
            {btnContent}
        </button>
    )
}