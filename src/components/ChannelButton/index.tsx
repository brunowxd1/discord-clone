/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({channelName, selected}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div className='div-2-icons'>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
