interface SearchBoxProps {
    url: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    loadContent: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ url, setUrl, loadContent }) => (
    <div className="search-box">
        <button className="btn-search" onClick={loadContent}><i className="fa fa-search"></i></button>
        <input className="input-search" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" />
    </div>
);

export default SearchBox;