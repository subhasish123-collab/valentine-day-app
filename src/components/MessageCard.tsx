'use client';

import { useState } from 'react';
import './MessageCard.css';

interface Message {
    title: string;
    content: string;
    emoji: string;
}

const messages: Message[] = [
    {
        emoji: "💖",
        title: "You Make Me Smile",
        content: "Every moment with you fills my heart with joy. Your smile brightens my darkest days, and your laughter is my favorite sound in the world."
    },
    {
        emoji: "🌹",
        title: "My Forever Love",
        content: "You are not just my Valentine, but my forever. With you, I've found my home, my peace, and my greatest adventure."
    },
    {
        emoji: "✨",
        title: "You Are My Everything",
        content: "In your eyes, I see my future. In your arms, I find my comfort. In your heart, I've found my home. You are my everything."
    },
    {
        emoji: "💝",
        title: "Thank You For Being You",
        content: "Thank you for being patient, kind, and understanding. Thank you for the little things and the grand gestures. Most of all, thank you for being you."
    }
];

export default function MessageCard() {
    const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());

    const handleReveal = (index: number) => {
        setRevealedCards(prev => new Set([...prev, index]));
    };

    return (
        <section className="messages-section">
            <div className="container">
                <h2 className="messages-title gradient-text">Messages From My Heart</h2>
                <p className="messages-subtitle">Click each card to reveal my feelings for you</p>

                <div className="messages-grid">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message-card ${revealedCards.has(index) ? 'revealed' : ''}`}
                            onClick={() => handleReveal(index)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="message-card-inner">
                                <div className="message-card-front">
                                    <div className="card-emoji">{message.emoji}</div>
                                    <h3 className="card-title">{message.title}</h3>
                                    <p className="card-hint">Click to reveal</p>
                                </div>
                                <div className="message-card-back">
                                    <p className="card-content">{message.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
