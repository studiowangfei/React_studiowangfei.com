http://www.studiowangfei.com/

Personal website, mostly academic and research projects.
A customizable framework built with web-component, handling both standard and customized interactive components. 
All data is JSON-based and linked with components.

- Component Type: header, footer, project title, brief, image, slideshow, blog, map, video, etc.

- Structure:

  - SectionComponent (home, project, about, blog, contact, etc.)
    - HeaderContainer
    - MainContainer
      - TileContainer
      - TitleContainer
      - BreifContainer
      - ImageContainer
      - BlogContainer
    - FooterContainer
    
  - ProjectComponent (each project)  
    - HeaderContainer
    - ProjectContainer
      - TitleContainer
      - BreifContainer
      - ImageContainer
      - WeblinkContainer
    - FeatureContainer
      - MapContainer (optional)
      - VideoContainer (optional)
      - GraphContainer (optional)
      - AppContainer (optional)
    - FooterContainer

