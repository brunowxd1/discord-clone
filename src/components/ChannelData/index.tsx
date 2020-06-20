/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Bruno Jagmin"
            date="20/06/2020"
            content="Discord interface clone"
          />
        ))}

        <ChannelMessage
          author="Rocketseat"
          date="20/06/2020"
          content={
            <>
              <Mention>@Bruno Jagmin</Mention>, using TypeScript and ReactJS!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
