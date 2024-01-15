import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import "./stackthumbnail.css"

const StackThumbnail = ({ src, size, stack, count }) => {
    const styles = {
        width: `${size}px`,
        height: `${size}px`,
        marginRight: stack ? `-${size / 2}px` : "0",
        borderRadius: "50%",
        objectFit: "cover",
    };

    const renderAvatars = () => {
        const avatars = [];
        for (let i = 0; i < count; i++) {
            avatars.push(
                <Image key={i} className="stack-thumbnail" src={src} style={styles} />
            );
        }
        return avatars;
    };

    return <div className="avatar-container">{renderAvatars()}</div>;
};

StackThumbnail.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    stack: PropTypes.bool,
    count: PropTypes.number,
};

StackThumbnail.defaultProps = {
    stack: false,
    count: 1,
};

export default StackThumbnail;
