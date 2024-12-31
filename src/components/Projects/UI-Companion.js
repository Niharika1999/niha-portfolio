import React from "react";
import './Individual-project.css';
import { FaArrowLeft } from "react-icons/fa";

const Uicompanion = () => {
  return (
    <section className="layout-container">
        
        <div className="header-row">
        <a
          href="/projects" 
          className="back-button"
        >
          <FaArrowLeft />
        </a>
        <h1 className="project-name">Ui Companion Tool</h1>
      </div>

    <div className="content-wrapper">
      {/* Left Column */}
      <div className="left-column">
        <h2>Project Info</h2>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="section-content">
          <h3>About</h3>
          <p>
          Streamline your web development with our all-in-one front-end code repository! Browse, select, and integrate components like Navbars, Forms, and Dropdowns effortlessly. Use our dynamic checklist to generate ready-to-use templates with your chosen elements. Everything you need for fast, efficient web design—all in one place! 🚀
          </p>
        </div>
        <div className="button-group">
            <a
              href="https://gmuedu-my.sharepoint.com/:w:/g/personal/supadhy2_gmu_edu/EYx6SK8Jw3xHrqBEefGenWYBY5DUPHGuytovTcRL13r5Bw?e=v7iwni"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Tool Sketch
            </a>
            <a
              href="https://angular-ui-tool-2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Live Website
            </a>
            {/* <a
            href="https://gmuedu-my.sharepoint.com/:w:/g/personal/supadhy2_gmu_edu/EYx6SK8Jw3xHrqBEefGenWYBY5DUPHGuytovTcRL13r5Bw?e=v7iwni"
            target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >Documentation</a> */}
          </div>
          <div className="section-content">
          <h3>How does it help users? </h3>
          <h4>Centralized Repository</h4>
          <p>
          UICompanion addresses fragmentation by providing a comprehensive and centralized collection of frequently used front-end components. This repository allows developers to quickly find what they need without hopping between multiple sites. </p>
                <h4>Curated and Standardized Code </h4>
                <p>All code snippets and components in UICompanion are curated for quality and consistency. Each component comes with clear documentation, usage examples, and best practices, ensuring developers have reliable and understandable resources. </p>
        <h3>Usage</h3>
        <h4>Code Snippet Usage</h4>
        <p> Web developers and designers benefit from the ability to select individual components via radio buttons, streamlining the process. This ensures the delivery of precise code snippets tailored to the chosen component, enhancing efficiency and workflow for professionals in the field. </p>
        <h4>Complete Code Usage</h4>
        <p>This feature addresses the challenge of simplifying webpage creation, especially for beginners or those with limited web development experience. Users can select elements with ease, triggering the automatic generation of code and making web development more accessible to a broader audience. </p>
        </div>

      </div>
    </div>
  </section>
  );
};

export default Uicompanion;
