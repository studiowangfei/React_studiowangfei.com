http://www.studiowangfei.com/

Personal website, mostly academic and research projects.
A customizable framework built with web-component, handling both standard and customized interactive components. 
All data is JSON-based and linked with components.

Component Type & Structure:
  MetaComponent (header, footer, project title, brief, image, slideshow, blog, map, video, etc.)
  SectionComponent (home, project, about, blog, contact, etc.)
  ProjectComponent (project page)
    
  - SectionComponent
    - HeaderContainer
    - MainContainer
      - TileContainer
      - TitleContainer
      - BreifContainer
      - ImageContainer
      - BlogContainer
    - FooterContainer
    
  - ProjectComponent  
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

