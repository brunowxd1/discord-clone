/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import ChannelButton from '../ChannelButton';

import { Container, Category, CategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <CategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="react-js" />
      <ChannelButton channelName="react-native" />
      <ChannelButton channelName="typescript" />
      <ChannelButton channelName="css" />
    </Container>
  );
};

export default ChannelList;
