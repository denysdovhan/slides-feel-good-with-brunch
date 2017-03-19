import React, { Component } from 'react';
import {
  S,
  Spectacle,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Link,
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
  primary: "primary",
  secondary: "#1F2022",
  tertiary: "#4fac5d",
  quartenary: "#CECCAE",
}, {
  primary: "Open Sans",
  secondary: "Helvetica"
});

const images = {
  denysdovhan: './images/denysdovhan-logo.png',
  hellyeah: './images/hellyeah-logo.svg',
  chernivtsijsBg: './images/chernivtsijs-bg.jpg',
  chernivtsijs: './images/chernivtsijs-logo.png',
  lambdabooks: './images/lambdabooks-logo.png',
  brunch: './images/brunch-logo.svg',
};

preloader(images);

export default class extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={300}>
          <Slide>
            <Link href="https://twitter.com/denysdovhan">
              <Image src={images.denysdovhan} width="500px" margin="-5rem auto 0"/>
              <Heading size={2} textColor="secondary">@denysdovhan</Heading>
            </Link>
          </Slide>

          <Slide>
            <Image src={images.hellyeah} width="100%" margin="-20% auto 0"/>
          </Slide>

          <Slide bgImage={images.chernivtsijsBg} bgDarken={0.6}>
            <Link href="https://www.facebook.com/chernivtsijs/" target="_blank">
              <Image src={images.chernivtsijs} width="80%" margin="5rem auto 0" />
              <Text bold textColor="white">May 27, 2017</Text>
              <Text textColor="white" margin="7rem 0 0">facebook.com/chernivtsijs</Text>
            </Link>
          </Slide>

          <Slide bgColor="#EAF0CE">
            <Image src={images.lambdabooks} width="300px"/>
            <Heading size={2} textColor="#3F334D">LambdaBooks</Heading>
            <Text textColor="#3F334D" margin="5rem 0 0">github.com/LambdaBooks</Text>
          </Slide>


          <Slide>
            <Image src={images.brunch} width="100%"/>
          </Slide>

          <Slide>
            <Heading size={3}>brunch</Heading>
            <S type="italic">|brən(t)SH|</S>
            <Text margin="2rem 0" lineHeight="1.5">a late morning meal eaten instead of breakfast and lunch.</Text>
          </Slide>

          <Slide>
            <CodePane
              lang="js"
              textSize="5rem"
              source={require('./examples/test.raw')}
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
