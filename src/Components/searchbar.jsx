import './searchbar.css'

const searchbar = () => {
    return (
        <div className="searchbar">
            <input type="text" placeholder="Search" className='Search' />
            <button className='Searchbutton'>Search</button>
        </div>
    )
}

export default searchbar