import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image'

// Icons
import styles from '../styles/Sidebar.module.scss'
import phone_icon from '../public/images/phone-icon.png'
import zalo_icon from '../public/images/zalo-icon.svg'

// import User from 'models/User';
import { CategoryWithSub } from 'lib/prisma';

import { isPageActive } from 'lib/utils';
import { Category } from '@prisma/client';

type SidebarProps = {
    open?: boolean;
    onSelection: () => void;
    handleClose: () => void;
    categories?: CategoryWithSub[];
}

// const getImageStaticImport = (image: string) => {
//     return require(`../public/images/${image}`)
// }

type LinkGeneratorProps = {
    subPages?: CategoryWithSub[] | Category[];
    onSelection: () => void;
}

type Page = {
    name: string;
    link: string;
    subPages?: CategoryWithSub[];

}
function LinkGenerator({subPages, onSelection}: LinkGeneratorProps) {
    return (
        <>
            {subPages && subPages.map((subPage, index) => (
                <div key={index} className={styles.linkGroup}>
                    <span key={subPage.slug} className={`${styles.link} ${styles.subLink} `}>
                        <Link 
                            key={index} 
                            href={'/san-pham/' + subPage.slug} 
                            onClick={()=> {
                            onSelection() 
                            }}>
                            {subPage.name}
                        </Link>
                    </span>
                    {   subPage.children &&
                        <LinkGenerator subPages={subPage.children} onSelection={onSelection}/>
                    }
                </div>
            ))}
        </>
    );
}

const Sidebar: React.FC<SidebarProps> = ({ open = false, onSelection, handleClose, categories }) => {
    const router = useRouter()
    const activeLink = router.pathname
    var pages: Page[] = [
        {name: 'Trang chủ', link: '/'},
        {name: 'Sản phẩm', link: '/san-pham'},
        {name: 'Dự án', link: '/du-an'},
    ]
    return (
        <>  
            <div className={`${styles.sidebar} ${open ? styles.open : styles.close}`}>
                <div className={styles.links}>
                    {pages.map((page, index) => (
                        <div key={index}>
                            <span className={`${styles.link} ${isPageActive(activeLink, page.link) ? styles.active : ''}`}>
                                <Link 
                                    href={page.link} 
                                    onClick={()=> {
                                    // handleClose();
                                    onSelection() 
                                    }}>
                                    {page.name}
                                </Link>
                                {page.subPages && 
                                    <button type='button'>&#9660;</button>
                                }
                            </span>
                            <LinkGenerator subPages={page.subPages} onSelection={onSelection}/>
                        </div>
                        
                    ))}
                </div>
            </div>
            {/* {open && <div className={styles.sidebar__cover} onClick={handleClose} />} */}
        </>
    );
}

export default Sidebar;