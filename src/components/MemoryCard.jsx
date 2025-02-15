
import EmojiButton from "./EmojiButton";

export default function MemoryCard({ handleClick, data, selectedCards, matchedCards }) {
    
    const cardEl = data.map((emoji, index) => {

        const selectedCardEntry = selectedCards.find(emoji => emoji.index === index);
        const matchedCardEntry = matchedCards.find(emoji => emoji.index === index);

        const cardStyle = 
            selectedCardEntry ? "card-item--selected" : 
            matchedCardEntry ? "card-item--matched" : 
            ""

        return (
            <li key={index} className={`card-item ${cardStyle}`}>
                <EmojiButton
                    emoji={emoji}
                    handleClick={() => handleClick(emoji.name, index)}
                    selectedCardEntry={selectedCardEntry}
                    matchedCardEntry={matchedCardEntry}
                >
                </EmojiButton>
            </li>
        )
    })
    
    return <ul className="card-container">{cardEl}</ul>
}