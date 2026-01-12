import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledEducationSection = styled.section`
  max-width: 900px;

  .education-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const StyledEducation = styled.div`
  margin-bottom: 60px;

  .education-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .degree {
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    font-weight: 600;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: var(--fz-xl);
    }
  }

  .date {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    white-space: nowrap;

    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }

  .school {
    color: var(--green);
    font-size: var(--fz-xl);
    margin-bottom: 10px;
    font-weight: 500;
  }

  .gpa {
    color: var(--slate);
    font-size: var(--fz-lg);
    margin-bottom: 15px;
  }

  .courses {
    color: var(--slate);
    font-size: var(--fz-lg);
    line-height: 1.5;
    
    strong {
      color: var(--lightest-slate);
    }
  }
`;

const Education = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const education = [
    {
      degree: 'Master of Science, Computer Science',
      school: 'Northeastern University',
      location: 'Boston, MA',
      date: 'Aug 2025 - Dec 2027',
      gpa: '3.83/4.0',
      courses: 'Algorithms (CS 5800), Database Management Systems (CS 5200) , Deep Learning(CS 7150), Programming Design Paradigms(CS 5010)',
    },
    {
      degree: 'Bachelor of Engineering, Artificial Intelligence and Data Science',
      school: 'Savitribai Phule Pune University',
      location: 'Pune, India',
      date: 'Aug 2021 - May 2025',
      gpa: '8.65/10',
      courses: 'Machine Learning, Pattern Recognition, Computer Vision, Data Structures, Discrete Mathematics, Statistics, Probability, Linear Algebra',
    },
  ];

  return (
    <StyledEducationSection id="education" ref={revealContainer}>
      <h2 className="numbered-heading">Education</h2>

      <div className="education-list">
        {education.map((edu, i) => (
          <StyledEducation key={i}>
            <div className="education-header">
              <div className="degree">{edu.degree}</div>
              <div className="date">{edu.date}</div>
            </div>
            <div className="school">{edu.school}</div>
            <div className="gpa">GPA: {edu.gpa}</div>
            <div className="courses">
              <strong>Relevant Courses:</strong> {edu.courses}
            </div>
          </StyledEducation>
        ))}
      </div>
    </StyledEducationSection>
  );
};

export default Education;