export default function Social(props) {
    return (
        <>
            <li>
                <a href={props.href} target="_blank">
                    <img src={props.img} />
                </a>
            </li>
        </>
    );
}
