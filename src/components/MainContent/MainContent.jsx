import React from "react";
import PropTypes from "prop-types";
import { MainContainer, Breadcrumbs, ContentContainer } from "./MainContent.styles";

const MainContent = ({ isSidebarExpanded, children }) => {
  return (
    <MainContainer isSidebarExpanded={isSidebarExpanded}>
      <Breadcrumbs>
        {/* Os breadcrumbs podem ser gerados dinamicamente */}
        <span>Home</span> / <span>Dashboard</span>
      </Breadcrumbs>
      <ContentContainer>{children}</ContentContainer>
    </MainContainer>
  );
};

MainContent.propTypes = {
  isSidebarExpanded: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default MainContent;
