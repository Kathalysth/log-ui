function Search() {
    return (
        <form className="w-full h-full flex justify-center items-center">
            <label className="hidden" htmlFor="search">search</label>
            <input className="w-full max-w-[40rem] p-2 outline-none rounded-lg" type="search" name="search" id="search" />
        </form>
    )
}

export default Search