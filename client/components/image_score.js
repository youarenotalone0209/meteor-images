import React from 'react';

const ImageScore = (props) => {
    // props.up is the number of upvotes
    // prop.down is the number of downvotes

    // this line is a shorthand for
    // const ups = props.up;
    // const downs = props.downs;
    const { ups, downs } = props;

    const upsPercent = `${100 * (ups/ (ups + downs))}%`;
    const downsPercent = `${100 * (downs/ (ups + downs))}%`;

    return (
        <div>
            Ups/Downs
            <div className="progress">
                <div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped"></div>
                <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped"></div>
            </div>
        </div>
    );
};

export default ImageScore;