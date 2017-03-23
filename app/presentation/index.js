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
  List,
  ListItem,
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
  brunchNew: './images/brunch-new.gif',
  depsAutoinstalling: './images/deps-autoinstalling.gif',
  configReloading: './images/config-reloading.gif',
  betterFrontent: './images/better-frontend.jpg',
  brunchServer: './images/brunch-server.gif',
  notifications: './images/notifications.gif',
  shitDiagram: './images/shit-diagram.jpg',
  // images before real world goes here
  realworld: './images/real-world.jpeg',
  phoenix: './images/phoenix.png',
  delicious: './images/delicious.png',
  redBull: './images/red-bull.png',
  uber: './images/uber.png',
};

preloader(images);

Link._ = ({ ...props, children }) => (
  <Link target="_blank" {...props}>{children}</Link>
);

export default () => (
  <Spectacle theme={theme}>
    <Deck transition={['fade']} transitionDuration={300}>
      <Slide>
        <Link._ href="https://twitter.com/denysdovhan">
          <Image src={images.denysdovhan} width="500px" margin="-5rem auto 0" />
          <Heading size={2} textColor="secondary">@denysdovhan</Heading>
        </Link._>
      </Slide>

      <Slide>
        <Link._ href="http://hellyeah.is">
          <Image src={images.hellyeah} width="100%" margin="-20% auto 0" />
        </Link._>
      </Slide>

      <Slide bgImage={images.chernivtsijsBg} bgDarken={0.5}>
        <Link._ href="https://www.facebook.com/chernivtsijs/" target="_blank">
          <Image src={images.chernivtsijs} width="80%" margin="5rem auto 0" />
          <Text bold textColor="white">May 27, 2017</Text>
          <Text textColor="white" margin="7rem 0 0">
            facebook.com/chernivtsijs
          </Text>
        </Link._>
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
          Інструмент для тих, в кого бомбить
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
        <Link._ href="https://github.com/nikgraf" textColor="secondary">
          <Heading>@nikgraf</Heading>
        </Link._>
        <br />
        <Link._ href="https://github.com/tosh" textColor="secondary">
          <Heading>@tosh</Heading>
        </Link._>
      </Slide>

      <Slide>
        <Heading size={2}>
          Слайд про те, як все <S type="italic">було</S> погано
        </Heading>
      </Slide>

      <Slide>
        <Link._ href="https://github.com/paulmillr">
          <Heading>@paulmillr</Heading>
        </Link._>
        <br />
        <Link._ href="https://github.com/es128">
          <Heading>@es128</Heading>
        </Link._>
      </Slide>

      <Slide>
        <Heading size={2}>
          Слайд про те, як все <S type="italic">стало</S> круто
        </Heading>
      </Slide>

      <Slide>
        <Link._ href="https://github.com/paulmillr/chokidar">
          <Heading>chokidar</Heading>
        </Link._>
        <Text lineHeight={1.2}>
          gulp, webpack, browserify, fly
        </Text>
        <Appear>
          <Text margin="2rem auto 0">7.5M встановлень/місяць</Text>
        </Appear>
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
        <Text margin="1rem auto 0">пайплайн</Text>
        <Text margin="1rem auto 0">API</Text>
        <Text margin="1rem auto 0">хуки</Text>
      </Slide>

      <Slide>
        <Heading size={2}>
          Декларативний конфіг
        </Heading>
      </Slide>

      <Slide>
        <Text>brunch-config.js</Text>
        <CodePane
          lang="js"
          textSize="2rem"
          source={require('./examples/config.raw')}
        />
      </Slide>

      <Slide>
        <Heading size={2}>
          Валідація конфіга
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2}>
          Три команди
        </Heading>
        <Text margin="2rem auto 0">new, build, watch</Text>
      </Slide>

      <Slide>
        <Heading size={2}>
          Зрозумілий пайплайн
        </Heading>
      </Slide>

      <Slide>
        <Text margin="1rem auto 0">
          file
        </Text>
        ↓
        <Text margin="1rem auto 0">
          lint(file): Boolean
        </Text>
        ↓
        <Text margin="1rem auto 0">
          getDependencies(file): Array[Path]
        </Text>
        ↓
        <Text margin="1rem auto 0">
          compile(file): File
        </Text>
        ↓
        <Text margin="1rem auto 0">
          optimize(file): File
        </Text>
        ↓
        <Text margin="1rem auto 0">
          onCompile(files, assets)
        </Text>
      </Slide>

      <Slide>
        <Heading size={2}>
          Прозорий API для плагінів
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2}>
          Хуки
        </Heading>
      </Slide>

      <Slide>
        <CodePane
          lang="js"
          textSize="2rem"
          source={require('./examples/hooks.raw')}
        />
      </Slide>

      <Slide>
        <Heading size={2}>
          Супершвидкий
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2}>
          Маленький розмір
        </Heading>
      </Slide>

      <Slide bgImage={images.betterFrontent} bgDarken={0.5}>
        <Heading size={2} textColor="primary">
          Зручність
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2}>
          Скелети
        </Heading>
        <Link href="http://brunch.io/skeletons">
          <Text margin="2rem auto 0">brunch.io/skeletons</Text>
        </Link>
      </Slide>

      <Slide bgImage={images.brunchNew}>
        {/* Usage of skeletons */}
      </Slide>

      <Slide>
        <Heading size={2}>
          Сервер з коробки
        </Heading>
      </Slide>

      <Slide bgImage={images.brunchServer}>
        {/* Server out of the box */}
      </Slide>

      <Slide>
        <Heading size={2}>
          Перезапуск при зміні конфігів
        </Heading>
      </Slide>

      <Slide bgImage={images.configReloading}>
        {/* Auto reloading on config change */}
      </Slide>

      <Slide>
        <Heading size={2}>
          Встановлення загублених залежностей
        </Heading>
      </Slide>

      <Slide bgImage={images.depsAutoinstalling}>
        {/* Auto installing of deps */}
      </Slide>

      <Slide>
        <Heading size={2}>
          Системні сповіщення про помилки
        </Heading>
      </Slide>

      <Slide bgImage={images.notifications}>
        {/* System notification about errors */}
      </Slide>

      <Slide>
        <Heading size={2}>
          Плагіни працюють з коробки
        </Heading>
        <Text margin="2rem auto 0">
          Без додаткових налаштувань, відразу після встановлення
        </Text>
      </Slide>

      <Slide bgImage={images.react} bgDarken={0.5}>
        <Heading size={2} textColor="primary">
          Brunch + React
        </Heading>
      </Slide>

      <Slide>
        <Link._ href="https://github.com/brunch/with-react">
          <Heading>with-react</Heading>
        </Link._>
        <Text margin="2rem auto 0">
          brunch new -s brunch/with-react
        </Text>
      </Slide>

      <Slide>
        <Text>brunch-cofig.js</Text>
        <CodePane
          lang="js"
          textSize="2rem"
          source={require('./examples/with-react.raw')}
        />
      </Slide>

      <Slide>
        <Heading size={2}>
          Ці слайди на React + Brunch
        </Heading>
        <Link._ href="https://github.com/denysdovhan/slides-feel-good-with-brunch">
          <Text margin="1rem auto 0">
            denysdovhan/slides-feel-good-with-brunch
          </Text>
        </Link._>
      </Slide>

      <Slide>
        <Link._ href="https://github.com/brunch/with-redux">
          <Heading>with-redux</Heading>
        </Link._>
        <Text margin="2rem auto 0">
          brunch new -s brunch/with-redux
        </Text>
      </Slide>

      <Slide>
        <Heading>HMR*</Heading>
        <Appear>
          <Text margin="2rem auto 0">
            *він там є
          </Text>
        </Appear>
      </Slide>

      <Slide>
        <Text>brunch-cofig.js</Text>
        <CodePane
          lang="js"
          textSize="2rem"
          source={require('./examples/with-redux.raw')}
        />
      </Slide>

      <Slide bgImage={images.shitDiagram} bgDarken={0.5}>
        <Heading size={2} textColor="primary">
          Обмеження
        </Heading>
      </Slide>

      <Slide>
        <Appear>
          <Text margin="1rem auto 0">
            SPA — бро 👍🏻
          </Text>
        </Appear>
        <Appear>
          <Text margin="1rem auto 0">
            сайтики на вордпресі — бро 👍🏻
          </Text>
        </Appear>
        <Appear>
          <Text margin="1rem auto 0">
            статика — бро ☝🏻
          </Text>
        </Appear>
        <Appear>
          <Text margin="1rem auto 0">
            бібліотеки — не бро 🖕🏻
          </Text>
        </Appear>
      </Slide>

      <Slide>
        <Heading size={2}>Немає тестів*</Heading>
        <Appear>
          <Text margin="2rem auto 0">*якби є, але написані на ava</Text>
        </Appear>
      </Slide>

      <Slide>
        <Heading size={2}>Немає require.ensure</Heading>
      </Slide>

      <Slide>
        <Heading size={2}>Обмежені інструменти для оптимізації бандла</Heading>
      </Slide>

      <Slide bgImage={images.realworld} bgDarken={0.5}>
        <Heading size={2} textColor="primary">
          Реальні користувачі
        </Heading>
      </Slide>

      <Slide>
        <Image src={images.phoenix} width="100%" />
      </Slide>

      <Slide bgColor="rgba(0,0,0,0.15)">
        <Image src={images.delicious} width="100%" />
      </Slide>

      <Slide>
        <Image src={images.redBull} width="100%" />
      </Slide>

      <Slide>
        <Image src={images.uber} width="100%" />
      </Slide>

      <Slide>
        <Text bold>Матеріали</Text>
        <List>
          <ListItem>
            <Link._ textColor="secondary" href="http://brunch.io/">
              brunch.io
            </Link._>
          </ListItem>
          <ListItem>
            <Link._ textColor="secondary" href="https://medium.com/@andrew_cox/diving-into-brunch-5b9ece32cc49#.e1qqkwwh6">
              Andrew Cox — Diving into Brunch
            </Link._>
          </ListItem>
          <ListItem>
            <Link._ textColor="secondary" href="https://www.youtube.com/watch?v=u902_BROjbI">
              WSD — Алексей Швайка: «Про Brunch и как мы его делаем»
            </Link._>
          </ListItem>
        </List>
      </Slide>

      <Slide>
        <Link._ href="https://github.com/denysdovha/slides-feel-good-with-brunch" textColor="secondary">
          <Heading size={2}>Слайди</Heading>
          <Text margin="1rem auto 0">
            denysdovhan/slides-feel-good-with-brunch
          </Text>
        </Link._>
      </Slide>

      <Slide>
        <Link href="https://twitter.com/denysdovhan">
          <Image src={images.denysdovhan} width="500px" margin="-5rem auto 0" />
          <Heading size={2} textColor="secondary">@denysdovhan</Heading>
        </Link>
      </Slide>

    </Deck>
  </Spectacle>
);
