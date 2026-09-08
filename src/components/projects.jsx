import Card from './card.jsx';
import { useState } from 'react';
import projectData from '../data/projects.json';

function Projects() {
    const cards = projectData;

    const NbCards = cards.length;

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const goToNextCard = () => {
        if (currentCardIndex < cards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
        } else {
            setCurrentCardIndex(0); // Reset to the first card if at the end
        }
    };

    const goToPreviousCard = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
        } else {
            setCurrentCardIndex(cards.length - 1); // Go to the last card if at the beginning
        }
    };

    return (
        <div className="site-body">
            <h2 className="section-title">
                <span className="text-muted">01.</span> Projects
            </h2>
            <div className="card-selector">
                <button onClick={goToPreviousCard} className="arrow-button">
                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div className="card-stack">
                    <div className="phantomcard phantom-back"></div>
                    <div className="phantomcard phantom-middle"></div>
                    <div className="main-card">
                        <Card id={cards[currentCardIndex].id} tags={cards[currentCardIndex].tags} title={cards[currentCardIndex].title} description={cards[currentCardIndex].description} gitLink={cards[currentCardIndex].gitLink} liveDemoLink={cards[currentCardIndex].liveDemoLink} nb={NbCards} />
                    </div>
                </div>
                <button onClick={goToNextCard} className="arrow-button">
                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Projects;