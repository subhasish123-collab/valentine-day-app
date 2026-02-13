'use client';

import './LoveTimeline.css';

interface TimelineEvent {
    date: string;
    title: string;
    description: string;
    icon: string;
}

const events: TimelineEvent[] = [
    {
        date: "First Meeting",
        title: "The Day We Met",
        description: "The moment our eyes met, I knew something special was beginning. ✨",
        icon: "👀"
    },
    {
        date: "First Date",
        title: "Our First Date",
        description: "Nervous butterflies, endless conversation, and the start of something beautiful. 🦋",
        icon: "🌹"
    },
    {
        date: "Special Moment",
        title: "A Memory to Cherish",
        description: "That moment when we realized we were meant to be together. Every second with you is precious. 💫",
        icon: "⭐"
    },
    {
        date: "Today",
        title: "Forever & Always",
        description: "Every day with you is a new adventure. Here's to many more beautiful moments together! 💕",
        icon: "💖"
    }
];

export default function LoveTimeline() {
    return (
        <section className="timeline-section">
            <div className="container">
                <h2 className="timeline-title gradient-text">Our Love Story</h2>
                <p className="timeline-subtitle">Every moment with you is a memory I treasure</p>

                <div className="timeline">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-icon">{event.icon}</div>
                            <div className="timeline-content">
                                <div className="timeline-date">{event.date}</div>
                                <h3 className="timeline-event-title">{event.title}</h3>
                                <p className="timeline-description">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
