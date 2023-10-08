import React from 'react';
import { DocPage } from '../Types/types';
import Markdown from 'react-markdown';

interface ContentAreaProps {
    selectedPage: DocPage | null;
}

const ContentArea: React.FC<ContentAreaProps> = ({ selectedPage }) => (
    <div className="content-area">
        <h2>{selectedPage?.title}</h2>
        <Markdown>{selectedPage?.bodyText || ""}</Markdown>
    </div>
);

export default ContentArea;
