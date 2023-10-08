type Documentation = {
    Pages: DocPage[];
  };
  
  type DocPage = {
    title: string;
    bodyText: string;
  };
  
  export type { Documentation, DocPage };