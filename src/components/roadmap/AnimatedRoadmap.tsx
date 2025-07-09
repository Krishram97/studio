'use client';

import { CheckCircle } from 'lucide-react';
import './AnimatedRoadmap.css';

const roadmapData = [
  {
    year: '2024',
    title: 'Foundation & Initial Traction',
    description: 'Launch Post My Property MVP and achieve 850+ listings. Secure pre-seed funding.',
    status: 'completed',
  },
  {
    year: '2025',
    title: 'Platform Expansion',
    description: 'Launch VAMSIRAM AI Plugins (OCR, NLP) and V-SENSE MCP. Begin development of VAM-GPT.',
    status: 'inprogress',
  },
  {
    year: '2026',
    title: 'Advanced Technologies',
    description: 'Beta launch of Sonic Radar Simulator. Achieve 10,000 active users across platforms.',
    status: 'planned',
  },
];

export default function AnimatedRoadmap() {
  return (
    <div className="roadmap-container">
      <div className="roadmap">
        <div className="roadmap-line"></div>
        {roadmapData.map((item, index) => (
          <div key={index} className={`roadmap-item roadmap-item-${item.status}`}>
            <div className="roadmap-dot"></div>
            <div className="roadmap-content">
              <div className="roadmap-year">{item.year}</div>
              <h3 className="roadmap-title">{item.title}</h3>
              <p className="roadmap-description">{item.description}</p>
              {item.status === 'completed' && (
                <div className="roadmap-status">
                  <CheckCircle className="h-4 w-4" />
                  <span>Completed</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
