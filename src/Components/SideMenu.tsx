import { DocPage } from '../Types/types';


interface SideMenuProps {
    docPages: DocPage[];
    selectedPage: DocPage | null;
    setSelectedPage: React.Dispatch<React.SetStateAction<DocPage | null>>;
}

const SideMenu: React.FC<SideMenuProps> = ({ docPages, selectedPage, setSelectedPage }) => (
    <div className="side-menu">
        {docPages.map((page, index) => (
            <div
                key={index}
                className={`menu-item ${selectedPage?.title === page.title ? "active" : ""}`}
                onClick={() => setSelectedPage(page)}
            >
                {page.title}
            </div>
        ))}
    </div>
);
export default SideMenu;