export default function Book(props) {
    return (
        <>
            <tr>
                <th>{props.title}</th>
                <th>{props.auther}</th>
                <th>{props.year}</th>
            </tr>
        </>
    );
}
