import styles from "./PropsTable.module.css";

interface PropItem {
    name: string;
    type: string;
    default?: string;
    description: string;
}

interface PropsTableProps {
    title?: string;
    props: PropItem[];
}

export function PropsTable({ title = "Props", props }: PropsTableProps) {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Prop</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.map((prop) => (
                            <tr key={prop.name}>
                                <td><span className={styles.propName}>{prop.name}</span></td>
                                <td><code className={styles.propType}>{prop.type}</code></td>
                                <td><span className={styles.propDefault}>{prop.default || "—"}</span></td>
                                <td>{prop.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
