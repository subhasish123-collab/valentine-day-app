'use client';

import { useEffect, useState } from 'react';
import './FloatingHearts.css';

interface Heart {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
}

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const newHearts: Heart[] = [];
        for (let i = 0; i < 15; i++) {
            newHearts.push({
                id: i,
                left: Math.random() * 100,
                size: 20 + Math.random() * 30,
                duration: 10 + Math.random() * 10,
                delay: Math.random() * 10,
            });
        }
        setHearts(newHearts);
    }, []);

    return (
        <div className="floating-hearts">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="heart"
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                        animationDuration: `${heart.duration}s`,
                        animationDelay: `${heart.delay}s`,
                    }}
                >
                    ❤️
                </div>
            ))}
        </div>
    );
}
