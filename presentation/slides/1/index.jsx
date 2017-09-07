import React from 'react';
import {
  Slide,
  Heading,
  Layout,
  Fill,
  Appear,
  ListItem,
  List,
} from 'spectacle';

export default (
  <Slide>
    <Heading size={5}>
      What we gonna talk?!
    </Heading>
    <Layout>
      <Fill>
        <List>
          <Appear>
            <ListItem>What is React?</ListItem>
          </Appear>
          <Appear>
            <ListItem>Components, Props, State...</ListItem>
          </Appear>
          <Appear>
            <ListItem>JSX?? It's HTML? It's weird?</ListItem>
          </Appear>
          <Appear>
            <ListItem>Event Handling</ListItem>
          </Appear>
          <Appear>
            <ListItem>React's Lifecycle</ListItem>
          </Appear>
          <Appear>
            <ListItem>Some good tools</ListItem>
          </Appear>
          <Appear>
            <ListItem>Building our Reactroduction apps</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Maybe some questions (please be nice, it's my first talk)
            </ListItem>
          </Appear>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
