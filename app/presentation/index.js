import React from 'react';
import {
  S,
  Spectacle,
  Appear,
  CodePane,
  Deck,
  Link,
  Heading,
  Image,
  Slide,
  Text,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#4fac5d',
  quartenary: '#CECCAE',
}, {
  primary: 'Open Sans',
  secondary: 'Helvetica',
});

const images = {
  denysdovhan: './images/denysdovhan-logo.png',
  hellyeah: './images/hellyeah-logo.svg',
  chernivtsijsBg: './images/chernivtsijs-bg.jpg',
  chernivtsijs: './images/chernivtsijs-logo.png',
  lambdabooks: './images/lambdabooks-logo.png',
  brunch: './images/brunch-logo.svg',
  bike: './images/bike.jpg',
  webpack: './images/i-hate-webpack.jpg',
  react: './images/react-everywhere.jpg',
  depsAutoinstalling: './images/deps-autoinstalling.gif',
  configReloading: './images/config-reloading.gif',
};

preloader(images);

export default () => (
  <Spectacle theme={theme}>
    <Deck transition={['fade']} transitionDuration={300}>
      <Slide>
        <Link href="https://twitter.com/denysdovhan">
          <Image src={images.denysdovhan} width="500px" margin="-5rem auto 0" />
          <Heading size={2} textColor="secondary">@denysdovhan</Heading>
        </Link>
      </Slide>

      <Slide>
        <Link href="http://hellyeah.is">
          <Image src={images.hellyeah} width="100%" margin="-20% auto 0" />
        </Link>
      </Slide>

      <Slide bgImage={images.chernivtsijsBg} bgDarken={0.5}>
        <Link href="https://www.facebook.com/chernivtsijs/" target="_blank">
          <Image src={images.chernivtsijs} width="80%" margin="5rem auto 0" />
          <Text bold textColor="white">May 27, 2017</Text>
          <Text textColor="white" margin="7rem 0 0">
            facebook.com/chernivtsijs
          </Text>
        </Link>
      </Slide>

      <Slide bgColor="#EAF0CE">
        <Image src={images.lambdabooks} width="300px" />
        <Heading size={2} textColor="#3F334D">LambdaBooks</Heading>
        <Text textColor="#3F334D" margin="5rem 0 0">
          github.com/LambdaBooks
        </Text>
      </Slide>


      <Slide>
        <Image src={images.brunch} width="100%" />
      </Slide>

      <Slide>
        <Heading size={2}>
          Тулза для тих, в кого бомбить
        </Heading>
      </Slide>

      <Slide>
        <Heading size={3} textColor="tertiary">brunch</Heading>
        <S type="italic">|brən(t)SH|</S>
        <Text margin="2rem 0" lineHeight={1.5}>
          a late morning meal eaten instead of breakfast and lunch.
        </Text>
      </Slide>

      <Slide bgImage={images.bike} bgDarken={0.7}>
        <Heading size={2} textColor="primary">
          Для чого нам велосипед?
        </Heading>
      </Slide>

      <Slide>
        <Text margin="1rem 0 0">
          <S type="underline bold">Brunch (2011)</S>
        </Text>
        <Text margin="1rem 0 0">Grunt (2011)</Text>
        <Text margin="1rem 0 0">Browserify (2012)</Text>
        <Text margin="1rem 0 0">Webpack (2012)</Text>
        <Text margin="1rem 0 0">Gulp (2013)</Text>
        <Text margin="1rem 0 0">Broccoli (2013)</Text>
        <Text margin="1rem 0 0">Fly (2015)</Text>
      </Slide>

      <Slide>
        <Link href="https://github.com/nikgraf" textColor="secondary">
          <Heading>@nikgraf</Heading>
        </Link>
        <br />
        <Link href="https://github.com/tosh" textColor="secondary">
          <Heading>@tosh</Heading>
        </Link>
      </Slide>

      <Slide>
        <Heading size={2}>
          Слайд про те, як все <S type="italic">було</S> погано
        </Heading>
      </Slide>

      <Slide>
        <Link href="https://github.com/paulmillr">
          <Heading>@paulmillr</Heading>
        </Link>
        <br />
        <Link href="https://github.com/es128">
          <Heading>@es128</Heading>
        </Link>
      </Slide>

      <Slide>
        <Heading size={2}>
          Слайд про те, як все <S type="italic">стало</S> круто
        </Heading>
      </Slide>

      <Slide>
        <Link href="https://github.com/paulmillr/chokidar">
          <Heading>chokidar</Heading>
        </Link>
        <Text lineHeight={1.1}>
          gulp, webpack, browserify, fly
        </Text>
      </Slide>

      <Slide>
        <Heading size={2}>Комерційна підтримка*</Heading>
        <Appear>
          <Text margin="2rem auto 0">*опенсорс за бабки</Text>
        </Appear>
      </Slide>

      <Slide bgImage={images.webpack} bgDarken={0.5}>
        <Heading size={2} textColor="primary">
          Простота
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2}>Прості</Heading>
        <Text margin="1rem auto 0">конфіг</Text>
        <Text margin="1rem auto 0">pipeline</Text>
        <Text margin="1rem auto 0">API</Text>
        <Text margin="1rem auto 0">хуки</Text>
        <Text margin="1rem auto 0">код</Text>
      </Slide>

      <Slide>
        <Heading size={2}>Декларативний конфіг</Heading>
      </Slide>

      <Slide>
        <CodePane
          lang="js"
          textSize="2rem"
          source={require('./examples/config.raw')}
        />
      </Slide>

      <Slide bgImage={images.depsAutoinstalling}>
        {/* Auto installing of deps */}
      </Slide>

      <Slide bgImage={images.configReloading}>
        {/* Auto reloading on config change */}
      </Slide>

      <Slide bgImage={images.react} bgDarken={0.5}>
        <Heading size={2} textColor="primary">
          React
        </Heading>
      </Slide>
    </Deck>
  </Spectacle>
);
