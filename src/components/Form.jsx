import RegularButton from './RegularButton'

export default function Form({ handleSubmit }) {
    return (
        <div className="form-container">
            <form className="wrapper">
                <div className="form__inner-wrapper">
                    <label for="category">Choose a category for memory cards</label>
                    <select name='category' id='category' onChange={handleChange}>
                        <option>animals and nature</option>
                        <option>food and drink</option>
                        <option>travel and places</option>
                        <option>objects</option>
                        <option>symbols</option>
                    </select>
                </div>
                <div className="form__inner-wrapper">
                    <label for="number">Select number of memory cards</label>
                    <select name='number' id='number' onChange={handleChange}>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                    </select>
                </div>
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}