import React, {useState} from 'react';

const SearchTerm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [meaning, setMeaning] = useState('');
    const [example, setExample] = useState('');

    const handleSearch = () => {
        setMeaning(meaning);
        setExample(example);
    }

    return (
        <div>
            <h1>Tra cứu từ điển</h1>
            <input type='text'
                   value={searchTerm}
                   onChange={e => setSearchTerm(e.target.value)}/>
            <button onClick={handleSearch}>Tra cứu</button>

            <div>
                <h2>Nghĩa:</h2>
                <p>{meaning}</p>
            </div>

            <div>
                <h2>Ví dụ:</h2>
                <p>{example}</p>
            </div>
        </div>
    );

}

export default SearchTerm;