import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import './Home.css';

const experiences = [
  {
    id: 1,
    company: 'BrainRidge Consulting',
    role: 'Software Engineer',
    dates: 'Jan 2026 – Apr 2026',
    description: '',
    logo: '/assets/ExperiencePhotos/BrainRidge.jpeg',
    url: 'https://pulse.brainridge.ai',
  },
  {
    id: 2,
    company: 'Telora',
    role: 'Founder-in-Residence',
    dates: '2025 – 2026',
    description: 'Worked with app devs to solve the disconnect between user analytics and UX.',
    logo: '/assets/ExperiencePhotos/Telora.jpeg',
    url: 'https://telora.com',
  },
  {
    id: 3,
    company: 'Penseum',
    role: 'Product Engineer',
    dates: 'May 2026 – Aug 2026',
    description: 'Onboarding, Referral Systems',
    logo: '/assets/ExperiencePhotos/Penseum.png',
    url: 'https://penseum.com',
  },
];

const featureCards = [
  {
    id: 0,
    content:
      "I study Computing and Financial Management at the University of Waterloo, where I recently won my cohort's stock pitch competition!",
    media: '/assets/FeaturePhotos/1.png',
    mediaType: 'image',
    label: '2b cs + finance @ uwaterloo',
  },
  {
    id: 1,
    content:
      'I was a Product Engineering Intern at Penseum, an EdTech startup, where I owned the user acquisition and onboarding funnels (focused on increasing numbers.)',
    media: '/assets/FeaturePhotos/2.png',
    mediaType: 'image',
    label: 'prev product @ penseum',
  },
  {
    id: 2,
    content:
      'I won 10 consecutive hackathons and case competitions by typing fast and building out cool ideas targeted at solving a problem.',
    media: '/assets/FeaturePhotos/3.png',
    mediaType: 'image',
    label: '10x hackathon winner',
  },
  {
    id: 3,
    content:
      'NYT Games start my morning workflow, so I thought, why not build one myself! Converted 100k+ impressions on social media → 10k unique visits, and ',
    linkText: "here's what I did next",
    linkUrl: '/projects/onthedot',
    media: '/assets/FeaturePhotos/4.mp4',
    mediaType: 'video',
    label: 'shipped a game to 3k users in < 1 week',
  },
  {
    id: 4,
    content:
      "Didn't like the existing math events, so I campaigned, won, and pushed my own ideas to 9000+ happy math students.",
    media: '/assets/FeaturePhotos/5.png',
    mediaType: 'image',
    label: 'math faculty rep',
  },
  {
    id: 5,
    content:
      'I love playing soccer, basketball, table tennis, ultimate, and more. Would be a great addition to a company sports team.',
    media: '/assets/FeaturePhotos/6.png',
    mediaType: 'image',
    label: 'Varsity Athlete',
  },
];

function Home() {
  return (
    <div className="home-page">
      <NavBar />

      <main className="home-container">
        <section className="hero-section">
          <h1 className="hero-name">Hi, I'm Daniel</h1>
          <p className="hero-subtitle">Computing & Financial Management @ UWaterloo</p>
          <p className="hero-bio">
            I build products people use and ideas that spread. I've won 10 hackathons, shipped a
            trivia game to 3k users in under a week, and worked as a Product Engineering Intern. I
            love moving fast, competing, and making things that matter.
          </p>
          <div className="social-row">
            <a
              href="https://linkedin.com/in/dnlwu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/dnl_wu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/dnl-wu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Github size={20} />
            </a>
            <a href="mailto:daniel.wu@uwaterloo.ca" className="social-icon-link">
              <Mail size={20} />
            </a>
          </div>
        </section>

        <section className="experience-section">
          <h2 className="section-heading">Experience</h2>
          <div className="experience-list">
            {experiences.map((exp) => (
              <div className="experience-item" key={exp.id}>
                <a href={exp.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="experience-logo"
                  />
                </a>
                <div className="experience-body">
                  <p className="experience-company">
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="experience-company-link">
                      {exp.company}
                    </a>
                  </p>
                  <p className="experience-role">{exp.role}</p>
                  {exp.description && (
                    <p className="experience-description">{exp.description}</p>
                  )}
                </div>
                <p className="experience-dates">{exp.dates}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="highlights-section">
          <div className="highlights-grid">
            {featureCards.map((card) => (
              <div className="highlight-card" key={card.id}>
                {card.media && (
                  <div className="highlight-media">
                    {card.mediaType === 'video' ? (
                      <video
                        src={card.media}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="highlight-img"
                      />
                    ) : (
                      <img src={card.media} alt={card.label} className="highlight-img" />
                    )}
                  </div>
                )}
                <div className="highlight-body">
                  <span className="highlight-badge">{card.label}</span>
                  <p className="highlight-text">
                    {card.content}
                    {card.linkText && card.linkUrl && (
                      <Link to={card.linkUrl} className="highlight-link">
                        {card.linkText}
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>
          Found me interesting?{' '}
          <a href="mailto:daniel.wu@uwaterloo.ca" className="footer-link">
            daniel.wu@uwaterloo.ca
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
