import Head from "next/head";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import { Button, Flex, Input, Heading } from "@chakra-ui/react";
import { VFXSpan } from "react-vfx";

let socket = io("https://icm-socket.herokuapp.com", {
  transports: ["websocket", "polling", "flashsocket"],
});

export default function Home() {
  const [textValue, updateTextValue] = useState("");
  useEffect(() => {
    console.log(socket);
  }, []);
  socket.on("connect", function () {
    console.log("connected");
    socket.emit("emoji", "smile");
  });
  const handleSubmit = () => {
    socket.emit("text", textValue);
  };

  const pushButton = (command) => {
    socket.emit("emoji", command);
  };
  return (
    <Main
      css={css`
        animation: ${bgAnime} 5s ease infinite;
      `}
    >
      <Head>
        <title>ICM Audience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        alignItems="center"
        justifyContent="center"
        height="100vh"
        flexWrap="wrap"
      >
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          width="80%"
        >
          <Heading>
            🤟
            <VFXSpan
              shader="rainbow"
              style={{ fontSize: "40px", color: "#fff", fontWeight: "bold" }}
            >
              Party Time!!!
            </VFXSpan>
            🤟
          </Heading>

          <Input
            type="text"
            value={textValue}
            onChange={(e) => updateTextValue(e.target.value)}
            width="100%"
            m={2}
            color="#fff"
          />
          <Button onClick={handleSubmit} colorScheme="pink" marginTop="">
            Send!!
          </Button>
        </Flex>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          width="80%"
        >
          <Button
            m={3}
            variant="solid"
            colorScheme="purple"
            onClick={() => pushButton("hi")}
          >
            👋
          </Button>
          <Button
            m={3}
            variant="solid"
            colorScheme="purple"
            onClick={() => pushButton("hoo")}
          >
            🤟
          </Button>
          <Button
            m={3}
            variant="solid"
            colorScheme="purple"
            onClick={() => pushButton("yay")}
          >
            🤘
          </Button>
          <Button
            m={3}
            variant="solid"
            colorScheme="purple"
            onClick={() => pushButton("glass")}
          >
            😎
          </Button>
          <Button
            m={3}
            variant="solid"
            colorScheme="purple"
            onClick={() => pushButton("pretty")}
          >
            😍
          </Button>
          <Button
            m={3}
            variant="solid"
            colorScheme="purple"
            onClick={() => pushButton("shine")}
          >
            ✨
          </Button>
          <Button
            m={3}
            variant="solid"
            colorScheme="purple"
            onClick={() => pushButton("heart")}
          >
            💗
          </Button>
          <Button
            m={3}
            variant="solid"
            colorScheme="purple"
            onClick={() => pushButton("poop")}
          >
            💩
          </Button>
          <Button
            m={3}
            variant="solid"
            colorScheme="purple"
            onClick={() => pushButton("horn")}
          >
            📣
          </Button>
          <Button
            m={3}
            variant="solid"
            colorScheme="purple"
            onClick={() => pushButton("scream")}
          >
            😱
          </Button>
        </Flex>
      </Flex>
    </Main>
  );
}
const bgAnime = keyframes`
    0% {
      background-position:0% 0%
    }
    50%{background-position:93% 100%}
    100%{background-position:0% 0%}
`;

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(143deg, #bd29ed, #309dff, #ff30e0);
  background-size: 600% 600%;
  animation: ${bgAnime} 30s infinite;
`;
