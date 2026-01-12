import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

const StyledResearchSection = styled.section`
  max-width: 900px;

  .research-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const StyledPublication = styled.div`
  position: relative;
  margin-bottom: 50px;
  padding: 25px;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
  }

  .publication-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .title {
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    font-weight: 600;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: var(--fz-xl);
    }
  }

  .publication-links {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;

    a {
      display: flex;
      align-items: center;
      
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .journal {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin-bottom: 5px;
  }

  .date {
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    margin-bottom: 15px;
  }

  .description {
    color: var(--slate);
    font-size: var(--fz-md);
    line-height: 1.5;
  }
`;

const Research = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const publications = [
    {
      title: 'Advanced Retrieval-Based Code Summarization using Meta Learning',
      journal: 'Mukt Shabd Journal',
      date: 'Apr 2025',
      description:
        'Developed meta-learning framework using MAML algorithm for automated code summarization across Python to improve adaptability with minimal fine-tuning. Applied transfer learning and data augmentation techniques on CodeSearchNet dataset achieving 12\% improvement in BLEU-4 scores over baseline Seq2Seq models',
      link: 'https://drive.google.com/file/d/1xz7wxIcJEaT1-i6X1PM1wPIxrqS0Xab8/view', 
    },
    {
      title: 'Serverless Computing and Its Impact on Application Development',
      journal: 'International Journal of Technology Engineering Arts Mathematics Science',
      date: 'Jul 2024',
      description:
        'Analyzed serverless architectures (AWS, Lambda and Google Cloud Functions) across scalability, cost efficiency, and developer productivity demonstrating 40% cost reduction and 3x faster deployment cycles. Explored the role of serverless architectures in modern cloud application development, covering theoretical and practical aspects including methodology, advantages, challenges, application design patterns, existing models, and security considerations.',
      link: 'https://aissmsioitresearch.com/wp-content/uploads/2024/01/IJTEAMS-ISS2_04.pdf',
    },
  ];

  return (
    <StyledResearchSection id="research" ref={revealContainer}>
      <h2 className="numbered-heading">Research & Publications</h2>

      <div className="research-list">
        {publications.map((pub, i) => (
          <StyledPublication key={i}>
            <div className="publication-header">
              <div>
                <div className="title">{pub.title}</div>
                <div className="journal">{pub.journal}</div>
                <div className="date">{pub.date}</div>
              </div>
              {pub.link && (
                <div className="publication-links">
                  <a href={pub.link} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                    <Icon name="External" />
                  </a>
                </div>
              )}
            </div>
            <div className="description">{pub.description}</div>
          </StyledPublication>
        ))}
      </div>
    </StyledResearchSection>
  );
};

export default Research;