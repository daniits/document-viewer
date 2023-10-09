import { DocPage } from '../Types/types';


interface SideMenuProps {
    docPages: DocPage[];
    selectedPage: DocPage | null;
    setSelectedPage: React.Dispatch<React.SetStateAction<DocPage | null>>;
}

const SideMenu: React.FC<SideMenuProps> = ({ docPages, selectedPage, setSelectedPage }) => (
    <div>

        <nav className="s-sidebar__nav" >
            <ul>
                {docPages.map((page, index) => (
                    <li key={index}
                        className={`${selectedPage?.title === page.title ? "active" : ""}`}
                        onClick={() => setSelectedPage(page)}>
                        <a className="s-sidebar__nav-link" href="#0">
                            <em>{page.title}</em>
                        </a>
                    </li>

                ))}
            </ul>
        </nav>
    </div>

);
export default SideMenu;