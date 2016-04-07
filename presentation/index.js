// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  monk: require("../assets/aethelstan4.gif"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#3cf"
});

const odd = n => n % 2;

export default class Presentation extends React.Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          { /* SLIDE #1 */ }
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Functional Programming 101
            </Heading>
            <Heading size={1} fit caps>
              Higher Order Functions
            </Heading>
            <Link href="https://github.com/alanrsoares">
              <Text textSize="1.5em" margin="20px 0px 0px" bold>@alanrsoares</Text>
            </Link>
          </Slide>
          { /* SLIDE  #2 */ }
          <Slide transition={["slide"]} bgColor="secondary" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.monk.replace("/", "")} margin="0px auto 40px" height="341px"/>
            <Heading size={5} caps  textColor="primary" textFont="primary">
              "The Functional Programmer sounds rather like a medieval monk,
              denying himself the pleasures of life in the hope that it will make him virtuous"
            </Heading>
            <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>Hughes, John</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.monk.replace("/", "")} margin="0px auto 40px" height="341px"/>
            <Heading size={5} caps  textColor="primary" textFont="primary">
              "The Functional Programmer sounds rather like a medieval monk,
              denying himself the pleasures of life in the hope that it will make him virtuous"
            </Heading>
            <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>Hughes, John</Text>
          </Slide>
          { /* SLIDE  #3 */ }
          <Slide transition={["fade"]} bgColor="primary">
            {
              ["So", "What", "Functional Programming", "Is about?"]
                .map((word, i) => (
                  <Appear>
                    <Heading size={i+1} caps textFont="primary" textColor={ odd(i) ? "tertiary" : "secondary" }>
                      {word}
                    </Heading>
                  </Appear>
                ))
            }
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            {
              ["Write Functions", "In terms of each other", "by"]
                .map((word, i) => (
                  <Appear>
                    <Heading size={i+1} caps textFont="primary" textColor={ odd(i) ? "tertiary" : "secondary" }>
                      {word}
                    </Heading>
                  </Appear>
                ))
            }
            <List>
              <Appear><ListItem>Abstracting common patterns</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
              <Appear><ListItem>Composing them</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={4} caps>
              Currying is the key to
            </Heading>
            <Heading size={1} caps>
              composition
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/example.curry")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="tertiary" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="tertiary" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
