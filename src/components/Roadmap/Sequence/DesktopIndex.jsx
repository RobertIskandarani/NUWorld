import React, { forwardRef } from 'react';
import DesktopImageArray from './DesktopImageArray';

const ImageSequence = forwardRef(({ progress }, ref) => {
    const newImages = DesktopImageArray();

    let index = Math.round(progress * 1 * (newImages.length - 1));

    if (newImages[index][1] !== undefined) {
        return newImages.map((item, i) => (
            <span
                ref={ref}
                key={i}
                style={{
                    display: i !== index ? 'none' : 'flex',
                    height: '100%',
                    width: '100%',
                    backgroundImage: `url('${item[0] ? item[0].src : null}')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
            />
        ));
    }
});

export default ImageSequence;
