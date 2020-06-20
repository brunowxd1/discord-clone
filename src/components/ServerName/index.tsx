/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import { Container, Title, ExpandIcon } from "./styles";

const ServerName: React.FC = () => {
  return (
    <Container>
      <Title>
        Servidor Rocketseat <span role="img">🚀</span>
      </Title>
      <ExpandIcon />
    </Container>
  );
};

export default ServerName;
