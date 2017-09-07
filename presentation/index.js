// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  Code,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  ComponentPlayground,
  CodePane,
} from 'spectacle';

// Slides
import slide0 from './slides/0/index.jsx';
import slide1 from './slides/1/index.jsx';
import slide2 from './slides/2/index.jsx';

import componentEx from './codeEx/component.example';
import stateEx from './codeEx/state.example';
import state2Ex from './codeEx/state2.example';
import constructorEx from './codeEx/constructor.example';
import willReceivePropsEx from './codeEx/willReceiveProps.example';
import shoudlUpdate from './codeEx/shouldUpdate.example';
import webEx from './codeEx/webApp.example';
import nativeEx from './codeEx/nativeApp.example';
import vrEx from './codeEx/vrApp.example';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

import VDOMImg from './slides/VDOM.png';
import ReconciliationImg from './slides/reconciliation.png';

// Import theme
// import createTheme from "spectacle/lib/themes/default";
import theme from '../themes/formidable/index.js';

// Require CSS
require('normalize.css');
require('../themes/style.css');
require('spectacle/lib/themes/default/index.css');
require('../themes/prim.css');
// Best way to include fonts rite
require('../fonts/worksans.css');
require('../fonts/biorhyme.css');
require('../fonts/silkscreen.css');

const listItemStyle = {
  fontSize: '2rem',
};

const headerStyle = {
  textAlign: 'left',
};

const slide3 = (
  <Slide align="center center">
    <Heading margin="0.25rem auto 1rem auto" size={5}>
      What is React?
    </Heading>
    <Layout>
      <Fill>
        <iframe
          src="https://facebook.github.io/react/"
          width="100%"
          height="400px"
        />
      </Fill>
    </Layout>
  </Slide>
);

const slide4 = (
  <Slide align="center center">
    <Heading style={headerStyle} size={6}>
      What is React?
    </Heading>
    <Layout>
      <Fill>
        <Text>
          React is an open-source library in javascript to build user
          interfaces. It was created by Jordan Walke (from Facebook) and is
          currently mantained by Facebook, Instagram and the community. The
          first release was on March 2013.
        </Text>
        <Appear>
          <Text>
            React doesn't deal with models, beeing only the V (view) of an MVC.
            We can bind any model library to our React project.
          </Text>
        </Appear>
        <Appear>
          <Text>
            React was made to create web user interfaces but some other variants
            of react are being created. For now we have react-native for mobile
            apps and react-vr for virtual reality. (and others created by the
            community)
          </Text>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide41 = (
  <Slide align="center center">
    <Heading style={headerStyle} size={6}>
      What is React?
    </Heading>
    <Layout>
      <Fill>
        <Fill style={{ textAlign: 'center' }}>
          <Image src={VDOMImg} />
        </Fill>
        <Text>
          React intereacts with the <b>DOM</b> using an abstraction called{' '}
          <b>Virtal DOM</b>.
        </Text>
        <Text>
          <b>DOM</b> manipulations are <b>very expensive</b> and using an
          abstraction reduces the cost of <b>DOM</b> changes.
        </Text>
      </Fill>
    </Layout>
  </Slide>
);

const slide42 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={6}>
      What is React?
    </Heading>
    <Layout>
      <Fill>
        <Fill style={{ textAlign: 'center', marginTop: '5rem' }}>
          <Image src={ReconciliationImg} />
        </Fill>
        <Appear>
          <Text>
            For more information on <b>Reconciliation</b> you can check{' '}
            <a href="https://facebook.github.io/react/docs/reconciliation.html">
              here
            </a>.
          </Text>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide5 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      <b>Components</b>, Props, State, ...
    </Heading>
    <Layout style={{ marginTop: '100px' }}>
      <Fill>
        <Fit>
          <ComponentPlayground code={componentEx} />
        </Fit>
        <Fit>
          <Appear>
            <Text>
              There are 3 types of Components in React. We are going to see that
              later...
            </Text>
          </Appear>
        </Fit>
      </Fill>
    </Layout>
  </Slide>
);

const slide6 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      Components, <b>Props</b>, State, ...
    </Heading>
    <Layout style={{ marginTop: '100px' }}>
      <Fill>
        <Text>
          Components have input values called <b>props</b>. You can think of
          props as if a component is a function and the props are the arguments.
        </Text>
        <Appear>
          <Text>
            On React documentation you can read:{' '}
            <i>
              "All React components must act like pure functions with respect to
              their props."
            </i>. <b>Props</b> are ready-only. We cannot change props. What we
            can do is send new props to a component (new arguments).
          </Text>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide7 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      Components, <b>Props</b>, State, ...
    </Heading>
    <Layout style={{ marginTop: '100px' }}>
      <Fill>
        <ComponentPlayground code={componentEx} />
      </Fill>
    </Layout>
  </Slide>
);

const slide8 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      Components, Props, <b>State</b>, ...
    </Heading>
    <Layout style={{ marginTop: '100px' }}>
      <Fill>
        <Text>
          Unlike props, the <b>state</b> "lives" inside of the component. It is
          not passed by props but it is constructed when the component is
          initialized.
        </Text>

        <Appear>
          <Text>
            We can mutate the state calling the function <b>setState()</b>.
            Remember, a state is owned by the instance. Different instances of
            the same component have different states.
          </Text>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide9 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      Components, Props, <b>State</b>, ...
    </Heading>
    <Layout style={{ marginTop: '100px' }}>
      <Fill>
        <ComponentPlayground code={stateEx} />
      </Fill>
    </Layout>
  </Slide>
);

const slide91 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      Components, Props, <b>State</b>, ...
    </Heading>
    <Layout style={{ marginTop: '100px' }}>
      <Fill>
        <ComponentPlayground code={state2Ex} />
      </Fill>
    </Layout>
  </Slide>
);

const slide10 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      JSX?? It's HTML? It's weird?
    </Heading>
    <Layout style={{ marginTop: '100px' }}>
      <Fill>
        <Heading style={headerStyle} size={6}>
          Why are you writing a weird XML/HTML inside javascript code? That is
          so weird and confusing! WHY GOD, WHY???! I hate react!!
        </Heading>
        <Appear>
          <Text>
            Please wait a moment... JSX is really good and improves
            productivity. Lets dig on it a little bit.
          </Text>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide11 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={6}>
      JSX?? It's HTML? It's weird?
    </Heading>
    <Layout style={{ marginTop: '100px' }}>
      <Fill>
        <Text>
          <b>JSX</b> it's a tag style syntax extension for Javascript. JSX
          produces React "elements".
        </Text>
        <Appear>
          <Text>
            It's not required to use <b>JSX</b> to build an app in React but
            elements are not so "readable" and are verbose to write. For this
            reason it is recommended to use <b>JSX</b>.
          </Text>
        </Appear>
        <Appear>
          <Text>Nothing better than to see JSX in action...</Text>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide12 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      Handling Events
    </Heading>
    <Layout>
      <Fill>
        <Text>
          The way React deals with events is really close to how <b>DOM</b>{' '}
          handles. The differences is that event names are written on{' '}
          <b>camelCase</b> and the event value is a function (not a string), in
          opposition to <b>DOM</b>.
        </Text>
        <Appear>
          <div style={{ height: 200 }}>
            <CodePane
              source="const component = <button onClick={() => {console.log('Hey')}}>Click me</button>;"
              lang="javascript"
            />
          </div>
        </Appear>

        <Appear>
          <Text>
            You can see that event handlers can be passed by props to built-in
            components (button, input, div, etc)
          </Text>
        </Appear>
        <Appear>
          <Text>
            React calls the handler with a <b>synthetic event</b> as the
            argument to insure browser compatibility. You can read more on{' '}
            <b>synthetic events</b>{' '}
            <a href="https://facebook.github.io/react/docs/events.html">
              here
            </a>.
          </Text>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide13 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      React's Lifecycle
    </Heading>
    <Layout>
      <Fill>
        <Text>
          React has a great API that gives us a lot of control on the component
          life cycle. We can configure handlers to be called at a precise time,
          when the component was mounted or is about to be updated.
        </Text>
        <Appear>
          <Text>
            This hooks are component methods. There is 9 (10... maybe more if we
            include Fiber) methods:
          </Text>
        </Appear>
        <Layout>
          <Fill>
            <Appear>
              <List>
                <ListItem textSize={32}>constructor()</ListItem>
                <ListItem textSize={32}>componentWillMount()</ListItem>
                <ListItem textSize={32}> render()</ListItem>
                <ListItem textSize={32}> componentDidMount()</ListItem>
              </List>
            </Appear>
          </Fill>
          <Fill>
            <Appear>
              <List>
                <ListItem textSize={32}> componentWillReceiveProps()</ListItem>
                <ListItem textSize={32}> shouldComponentUpdate()</ListItem>
                <ListItem textSize={32}> componentWillUpdate()</ListItem>
                <ListItem textSize={32}> componentDidUpdate()</ListItem>
              </List>
            </Appear>
          </Fill>
        </Layout>
        <Appear>
          <List>
            <ListItem textSize={32}> componentWillUnmount()</ListItem>
          </List>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide14 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      React's Lifecycle
    </Heading>
    <Heading size={6}>constructor()</Heading>
    <Layout>
      <Fill>
        <Text>
          The <b>constructor</b> method is called before the component is
          mounted. It's the recommended method to initialize the component state
          and bind other methods.
        </Text>
        <Appear>
          <div>
            <CodePane lang="javascript" source={constructorEx} />
          </div>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide15 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      React's Lifecycle
    </Heading>

    <Layout>
      <Fill>
        <Heading size={6}>componentWillMount()</Heading>
        <Text>
          The <b>componentWillMount</b> method is called right before the
          component is mounted. <b>setState()</b> on this method does not
          trigger a rerender.
        </Text>

        <Appear>
          <Fill>
            <Heading size={6}>componentDidMount()</Heading>
            <Text>
              The <b>componentDidMount</b> method is called immediately after
              the component is mounted. Code that uses <b>DOM</b> nodes or async
              calls must be written in this method.
            </Text>
            <Text>This method does not run on server side rendering.</Text>
          </Fill>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide16 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      React's Lifecycle
    </Heading>

    <Layout>
      <Fill>
        <Heading size={6}>render()</Heading>
        <Text>
          The <b>render</b> method returns an unique React element (Fiber can
          change this). The method should be pure in regarding to state and
          props. In other words, the output of the render should be the same for
          equal props and state.
        </Text>

        <Appear>
          <Text>
            This method should not change state or interact with DOM elements.
            If you really need to do this, use <b>componentDidMount()</b>{' '}
            instead.
          </Text>
        </Appear>
        <Appear>
          <Text>
            Although the render method is required, if it returns false or null
            nothing is rendered.
          </Text>
        </Appear>

        <Appear>
          <Fill>
            <Heading size={6}>componentWillUnmount()</Heading>
            <Text>
              The <b>componentWillUnmount</b> method is called right before the
              component is unmounted and destroyed. This can be useful to clean
              timers, remove event listeners, etc...
            </Text>
          </Fill>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide17 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      React's Lifecycle
    </Heading>
    <Heading size={6}>componentWillReceiveProps()</Heading>
    <Layout>
      <Fill>
        <Text>
          The <b>componentWillReceiveProps</b> method is called when a mounted
          component receives new props. This can be useful to map new props to
          the component state.
        </Text>
        <Appear>
          <div>
            <CodePane lang="javascript" source={willReceivePropsEx} />
          </div>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide18 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      React's Lifecycle
    </Heading>
    <Heading size={6}>shouldComponentUpdate()</Heading>
    <Layout>
      <Fill>
        <Text>
          The <b>shouldComponentUpdate</b> method is called when component's
          props or state change. This method tells React if it needs to run the
          render method. If this method returns false, the render method is not
          called, otherwise the render method is called.
        </Text>
      </Fill>
    </Layout>
  </Slide>
);

const slide182 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      React's Lifecycle
    </Heading>
    <Layout>
      <Fill>
        <div>
          <CodePane lang="javascript" source={shoudlUpdate} />
        </div>
      </Fill>
    </Layout>
  </Slide>
);

const slide19 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      React's Lifecycle
    </Heading>

    <Layout>
      <Fill>
        <Heading size={6}>componentWillUpdate()</Heading>
        <Text>
          The <b>componentWillUpdate</b> method is called right before rendering
          the new props or state.
        </Text>

        <Appear>
          <Fill>
            <Heading size={6}>componentDidUpdate()</Heading>
            <Text>
              The <b>componentDidUpdate</b> method is called immediately after
              the component is updated.
            </Text>
          </Fill>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide20 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      Some good tools
    </Heading>

    <Layout>
      <Fill>
        <List>
          <Appear>
            <ListItem>
              <a href="https://github.com/ReactTraining/react-router">
                react-router
              </a>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <a href="https://github.com/reactjs/react-redux">react-redux</a>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <a href="https://github.com/apollographql/react-apollo">
                react-apollo
              </a>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <a href="https://facebook.github.io/jest/">jest</a>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <a href="https://flow.org/">flow</a>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <a href="https://github.com/facebook/react-devtools">
                react-devtools
              </a>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <a href="https://github.com/styleguidist/react-styleguidist">
                react-styleguidist
              </a>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <a href="https://github.com/enaqx/awesome-react">awesome-react</a>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <a href="https://github.com/FormidableLabs/spectacle">
                spectacle
              </a>
            </ListItem>
          </Appear>
        </List>

        <Appear>
          <Text>
            Join{' '}
            <a href="https://discordapp.com/invite/0ZcbPKXt5bZiQhB5">
              Reactiflux
            </a>
          </Text>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);

const slide21 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      Building our Reactroduction apps
    </Heading>
    <Heading size={6}>Web App</Heading>
    <Layout>
      <Fill style={{ marginTop: '10rem' }}>
        <div>
          <CodePane source={webEx} />
        </div>
      </Fill>
    </Layout>
  </Slide>
);

const slide22 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      Building our Reactroduction apps
    </Heading>
    <Heading size={6}>Native App</Heading>
    <Layout>
      <Fill style={{ marginTop: '10rem' }}>
        <div>
          <CodePane source={nativeEx} />
        </div>
      </Fill>
    </Layout>
  </Slide>
);

const slide23 = (
  <Slide align="top left">
    <Heading style={headerStyle} size={5}>
      Building our Reactroduction apps
    </Heading>
    <Heading size={6}>VR App</Heading>
    <Layout>
      <Fill style={{ marginTop: '10rem' }}>
        <div>
          <CodePane source={vrEx} />
        </div>
      </Fill>
    </Layout>
  </Slide>
);

const slide24 = (
  <Slide align="center center">
    <Heading style={headerStyle} size={1}>
      Questions?
    </Heading>
  </Slide>
);

const slide25 = (
  <Slide align="center center">
    <Heading size={2} textAlign="center">
      Thanks
    </Heading>
    <Heading size={6} textAlign="center">
      Hope you had a good time.
    </Heading>
  </Slide>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        controls={false}
        progress="none"
        theme={theme}
        transition={['fade']}
        transitionDuration={500}
      >
        {slide0}
        {slide1}
        {slide2}
        {slide3}
        {slide4}
        {slide41}
        {slide42}
        {slide5}
        {slide6}
        {slide7}
        {slide8}
        {slide9}
        {slide91}
        {slide10}
        {slide11}
        {slide12}
        {slide13}
        {slide14}
        {slide15}
        {slide16}
        {slide17}
        {slide18}
        {slide182}
        {slide19}
        {slide20}
        {slide21}
        {slide22}
        {slide23}
        {slide24}
        {slide25}
      </Deck>
    );
  }
}
