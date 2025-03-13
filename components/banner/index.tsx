import React from 'react';
import TransformingColors from './transforming-colors';
import ImageBg from './image-bg';
import PlainBgBanner from './plain-bg';

type BannerType = 'transforming' | 'image' | 'plain';

interface BannerProps {
    type: BannerType;
    title: string;
    subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ type, title, subtitle }) => {
    const renderBanner = () => {
        switch (type) {
            case 'transforming':
                return <TransformingColors title={title} subtitle={subtitle} />;
            case 'image':
                return <ImageBg title={title} subtitle={subtitle} />;
            case 'plain':
                return <PlainBgBanner title={title} subtitle={subtitle} />;
            default:
                return null;
        }
    };

    return (
        <div className='w-full'>
            {renderBanner()}
        </div>
    );
};

export default Banner;