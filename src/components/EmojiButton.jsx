export default function EmojiButton () {
    return (
        <button
            className="btn btn--emoji"
                onClick={() => handleClick(emoji.name, index)}
        >
            {decodeEntity(emoji.htmlCode[0])}
        </button>
    )
}