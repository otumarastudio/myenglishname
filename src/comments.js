import React from "react";
import {
  Button,
  Input,
  Comment,
  Form,
  Header,
  Divider,
  Icon,
} from "semantic-ui-react";

import avatar from "./avatar.png";
import avatar2 from "./avatar2.png";

function SingleComment (detail){
  return(
    <Comment>
      <Comment.Avatar src={avatar} />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>{detail.content}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  )
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      commentsList : []
    };
  }

  render() {
    return (
      <Comment.Group style = {{marginLeft:"10%"}}>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="comment alternate" />
            Comment
          </Header>
        </Divider>

        {this.state.commentsList.map(comments => <SingleComment content = {comments}/>)}
      <SingleComment/>

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="댓글을 입력해주세요."
            onChange={(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() => this.setState( (prevState) => {return{commentsList: [...prevState.commentsList, this.state.inputContent]}}  )}
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
