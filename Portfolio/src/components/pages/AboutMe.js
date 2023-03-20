import React from 'react';


const About = () => {
  const sectionStyle = {
    backgroundSize: 'cover',
    position: 'relative',
    height: '1000px',
    backgroundColor: 'rgba(19,122,236)'
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(4,32,84,1)',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const textContainerStyle = {
    flex: '1',
    textAlign: 'center',
    padding: '0 20px',
    color: 'white',
  };

  const headerStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
  };
  

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 style={headerStyle}>About Me</h1>
        <p style={paragraphStyle}>
          I am a United States Nav Veteran who decided to find a new path for himself. After spending 6 years as an Interior Communications Electrician in the navy I wanted to do something else with my life, after a while of thought and searching (and plenty of convincing from my siblings) I decided that becomeing a developer is the next step I want to take</p>
      </div>
      
    </div>
    </section>
  );
}

export default About;