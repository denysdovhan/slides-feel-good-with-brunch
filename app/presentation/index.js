import React, { Component } from 'react';
import {
  Spectacle,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';

import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Open Sans",
  secondary: "Helvetica"
});

const images = {
  brunch: './images/brunch-logo.svg',
  hellyeah: './images/hellyeah-logo.svg',
};

preloader(images);

export default class extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Бранч
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              open the presentation/index.js file to get started
            </Text>
          </Slide>

          <Slide>
            <Image src={images.brunch}/>
          </Slide>

          <Slide>
            <Image src={images.hellyeah} width="100%" margin="-20% auto 0"/>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>Typography</Heading>
            <Heading size={1} textColor="secondary">Heading 1</Heading>
            <Heading size={2} textColor="secondary">Heading 2</Heading>
            <Heading size={3} textColor="secondary">Heading 3</Heading>
            <Heading size={4} textColor="secondary">Heading 4</Heading>
            <Heading size={5} textColor="secondary">Heading 5</Heading>
            <Text size={6} textColor="secondary">Standard text</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>Standard List</Heading>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </Slide>
          <Slide>
            <CodePane
              lang="js"
              textSize="5rem"
              source={require('./examples/test.raw')}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Example Quote</Quote>
              <Cite>Author</Cite>
            </BlockQuote>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
