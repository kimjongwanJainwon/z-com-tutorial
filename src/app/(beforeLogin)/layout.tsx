import styles from '@/app/(beforeLogin)/_component/main.module.css';

interface Props {
    children: React.ReactNode;
    modal: React.ReactNode;
}

export default function Layout({ children, modal }: Props) {
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    );
}