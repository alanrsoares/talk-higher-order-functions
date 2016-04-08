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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  monk: require("../assets/aethelstan4.gif"),
  monkBadass: require("../assets/aethelstan_badass.gif"),
  monkFinal: require("../assets/no_closer_to_the_truth.gif"),
  city: require("../assets/city.jpg"),
  state: require("../assets/state_meme.jpg"),
  zstr: require("../assets/zstr_count.png"),
  yo: require("../assets/yo_dawg1.jpg")
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
            </Heading>
            <Link href="https://github.com/alanrsoares">
              <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>@alanrsoares</Text>
            </Link>
          </Slide>
          { /* SLIDE  #2 */ }
          <Slide transition={["slide"]} bgColor="secondary" notes="You can even put notes on your slide. How awesome is that?">
            <BlockQuote>
              <Quote>The Functional Programmer sounds rather like a medieval monk,
              denying himself the pleasures of life in the hope that it will make him virtuous</Quote>
            <Cite>John Hughes</Cite>
            </BlockQuote>
          </Slide>
          { /* SLIDE  #3 */ }
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps>Season 1</Heading>
            <Image src={images.monk} margin="20px auto" height="341px"/>
          </Slide>
          { /* SLIDE  #4 */ }
          <Slide transition={["slide"]} bgColor="secondary" notes="You can even put notes on your slide. How awesome is that?">
            <BlockQuote>
              <Quote>But you may eventually become a badass viking warrior</Quote>
              <Cite>Me</Cite>
            </BlockQuote>
          </Slide>
          { /* SLIDE  #5 */ }
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps>Season 3</Heading>
            <Image src={images.monkBadass} margin="20px auto" height="341px"/>
          </Slide>
          { /* SLIDE  #6 */ }
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1} textColor="black">
              What is <Text textFont="secondary" textColor="tertiary">probably</Text>
            </Heading>
            <Heading size={1} caps fit lineHeight={1} textColor="black">
              <Text>one of the most important concepts</Text>
              <Text>in Programming Languages?</Text>
            </Heading>
            <Appear>
              <Heading size={1} fit caps>
                Abstraction
              </Heading>
            </Appear>
          </Slide>
          { /* SLIDE  #7 */ }
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps fit>
              Count a string length in Assembly
            </Heading>
            <Image src={images.zstr} margin="20px auto"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="tertiary">
            <Heading size={1} caps fit textColor="secondary">
              And now in modern javascript
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/example.strCount")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps>
              What is causing all this buzz about Functional Programming?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.state} margin="20px auto" height="600px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps>But, wait!</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps>Can I wwrite functional code in a <Text fit>non-functional</Text> language?</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.yo} margin="20px auto" height="600px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps fit>
              Sum of a numeric array (imperative)
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/example.sum1")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="tertiary">
            <Heading size={1} caps fit textColor="secondary">
              Sum of a numeric array (functional-ish)
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/example.sum2")}
              margin="20px auto"
            />
          </Slide>
          { /* SLIDE  #8 */ }
          <Slide transition={["fade"]} bgColor="primary">
            {
              ["So", "What", "Functional Programming", "Is about?"]
                .map((word, i) => (
                  <Appear>
                    <Heading size={i + 1} caps textFont="primary" textColor={ odd(i) ? "tertiary" : "secondary" }>
                      {word}
                    </Heading>
                  </Appear>
                ))
            }
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            {
              ["Write Functions", "In terms of each other", "by"]
                .map((word, i) => (
                  <Appear>
                    <Heading size={i + 1} caps textFont="primary" textColor={ odd(i) ? "tertiary" : "secondary" }>
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
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/example.upload")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
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
            <CodePane
              lang="jsx"
              source={require("raw!../assets/example.compose")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="secondary">
            <Image src={images.monkFinal.replace("/", "")} margin="0px auto 40px" height="341px"/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Thank you
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
