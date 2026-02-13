'use client';

import Image from 'next/image';
import './PhotoGallery.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const photos = [
    {
        src: `${basePath}/images/photo1.jpg`,
        caption: 'Beautiful Moments Together',
        alt: 'Couple at the beach'
    },
    {
        src: `${basePath}/images/photo2.jpg`,
        caption: 'By The Sea',
        alt: 'Romantic beach photo'
    },
    {
        src: `${basePath}/images/photo3.jpg`,
        caption: 'Our Special Day',
        alt: 'Happy couple at the beach'
    },
    {
        src: `${basePath}/images/photo4.jpg`,
        caption: 'Forever & Always',
        alt: 'Love at the seaside'
    },
    {
        src: `${basePath}/images/photo5.jpg`,
        caption: 'Sweet Moments with Roses',
        alt: 'Couple with beautiful roses'
    },
    {
        src: `${basePath}/images/photo6.jpg`,
        caption: 'Love & Flowers',
        alt: 'Romantic selfie with pink roses'
    },
    {
        src: `${basePath}/images/photo7.jpg`,
        caption: 'Precious Memories',
        alt: 'Happy together with roses'
    }
];

export default function PhotoGallery() {
    return (
        <section className="gallery-section">
            <div className="container">
                <h2 className="gallery-title gradient-text">Our Memories Together</h2>
                <p className="gallery-subtitle">Every picture tells our story of love</p>

                <div className="gallery-grid">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="gallery-image-wrapper">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="gallery-image-real"
                                />
                                <div className="gallery-overlay">
                                    <p className="gallery-caption">{photo.caption}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
