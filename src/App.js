import React from "react";
import {
  Image,
  Input,
  Header,
  Container,
  Divider,
  Icon,
  Button,
  Grid,
  Label,
} from "semantic-ui-react";
import {} from "semantic-ui-react";

import Comments from "./comments.js";
import Jenny from "./jenny.jpg";

function App() {
  return (
    <div>
      <Header as="h1" dividing>
        <Container textAlign="center">제니의 첫 솔로곡 SOLO</Container>
      </Header>
      <Grid centered>
        <Grid.Row>
          <Image src={Jenny} size="medium" rounded centered />
        </Grid.Row>
        <Grid.Row>
          <Button as="div" labelPosition="right">
            <Button color="red">
              <Icon name="heart" />
              Like
            </Button>
            <Label as="a" basic color="red" pointing="left">
              2,048
            </Label>
          </Button>
          <Button as="div" labelPosition="right">
            <Button basic color="blue">
              <Icon name="fork" />
              Share
            </Button>
            <Label as="a" basic color="blue" pointing="left">
              2,048
            </Label>
          </Button>
        </Grid.Row>
      </Grid>
      <br />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="paperclip" />
          Description
        </Header>
      </Divider>
      <Container textAlign="center">
        <br />
        천진난만 청순가련
        <br />
        새침한 척 이젠 지쳐 나 <br />
        귀찮아 <br />
        매일 뭐 해? 어디야? 밥은? 잘 자 <br />
        Baby, 자기, 여보 보고 싶어 <br />
        다 부질없어 <br />
        You got me like <br />
      </Container>
      <Comments />
      <br />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="external share" />
          Share with
        </Header>
      </Divider>
      <br />
      <br />
      <div>
        <Grid centered>
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="instagram" icon="instagram" />
          <Button circular color="google plus" icon="google plus" />
          <Button circular color="kakao talk" icon="kakao talk" />
        </Grid>
      </div>
      <br />)
    </div>
  );
}

export default App;
