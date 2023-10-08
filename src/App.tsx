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

  const loadContent = async () => {
    try {
      const response = await fetch(url);
      console.log(response)
      const data: Documentation = await response.json();
      console.log(data)
      setDocPages(data.Pages);
      setSearchInitiated(true);
    } catch (error) {
      console.error("Error fetching the documentation:", error);
    }
  };
  return (
    <div className="App">
      {!searchInitiated ? (
        <SearchBox url={url} setUrl={setUrl} loadContent={loadContent} />
      ) : (
        <div className="documentation-section">
          <SideMenu docPages={docPages} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <ContentArea selectedPage={selectedPage} />
        </div>
      )}
    </div>
  );
};

export default App;
