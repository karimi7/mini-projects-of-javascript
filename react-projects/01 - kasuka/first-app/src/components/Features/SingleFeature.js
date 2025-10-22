function SingleFeature(props) {
    return (
        <div>
            <div>{props.urlSVG}</div>
            <div>
                <h3>{props.featureTitle}</h3>
                <span>{props.featureSpan}</span>
            </div>
        </div>
    );
}

export default SingleFeature;
