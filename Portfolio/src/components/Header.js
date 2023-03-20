import React from "react";

function Navigation({ currentPage, pageChange }) {
  return (
      <section>
      <nav className="navbar navbar-dark navbar-expand-md py-3" style={{background: '#EC8513', marginBottom: '0'}}>
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span>Daniel Reilly</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-5"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navcol-5">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home" onClick={() => pageChange('About')}>About Me</a></li>
              <li className="nav-item"><a className="nav-link" href="#resume" onClick={() => pageChange('Resume')}>Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/daniel-reilly-052212120/" onClick={() => pageChange('Resume')}>Linkedin</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;
