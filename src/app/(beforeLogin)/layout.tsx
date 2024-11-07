import {ReactNode} from "react";
import styles from '@/app/(beforeLogin)/_component/main.module.css';

type Props = {
    children: ReactNode;
    modal: ReactNode;
}
export default function Layout({children, modal}: { children: React.ReactNode, modal: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}