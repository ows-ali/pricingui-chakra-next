import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Practice() {
  return (
    <>
      <h1 style={{ color: "blue", fontSize: "20px" }}>Hello heading by h1</h1>
      <h2>World heading by h2</h2>
      <p>This is a paragraph</p>
      <Heading>this is default heading by chakra</Heading>
      <Heading as="h1" color="red" fontSize="48px">
        this is h1 heading by chakra
      </Heading>
      <Heading as="h3" color={"blue"}>
        this is h3 heading by chakra
      </Heading>
      <Text fontWeight="bold">This is paragraph by chakra</Text>
      <Heading> Flexbox in HTML/CSS</Heading>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          height: "500px",
        }}
      >
        <div
          style={{ backgroundColor: "red", padding: "50px", height: "100px" }}
        >
          div1
        </div>
        <div
          style={{ backgroundColor: "blue", padding: "50px", height: "100px" }}
        >
          div2
        </div>
        <div
          style={{
            backgroundColor: "orange",
            padding: "50px",
            height: "100px",
          }}
        >
          div3
        </div>
      </div>
    </>
  );
}
