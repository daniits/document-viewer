import React, { useState } from "react";
import { Documentation, DocPage } from './Types/types';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchBox from './Components/SearchBox';
import ContentArea from './Components/ContentArea';
import SideMenu from './Components/SideMenu';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [docPages, setDocPages] = useState<DocPage[]>([]);
  const [selectedPage, setSelectedPage] = useState<DocPage | null>(null);
  const [searchInitiated, setSearchInitiated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const loadContent = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data: Documentation = await response.json();
      setDocPages(data.Pages);
      setSearchInitiated(true);
    } catch (error) {
      console.error("Error fetching the documentation:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-spinner">Loading...</div> // Replace with your spinner component or animation
      ) : !searchInitiated ? (
        <div className="search-box-area">
          <SearchBox url={url} setUrl={setUrl} loadContent={loadContent} />
        </div>
      ) : (
        <div className="s-layout">
          <SideMenu docPages={docPages} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <ContentArea selectedPage={selectedPage} />
        </div>
      )}
    </div>
  );
};

export default App;
