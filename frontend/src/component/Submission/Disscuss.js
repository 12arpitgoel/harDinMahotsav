import { Avatar } from '@mui/material';
import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const Disscuss = () => (
    <Comment.Group>
        <Header as='h3' dividing>
            Comments  ({(34)})
        </Header>


        <Comment>
            {/* <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                    R
                </Avatar> */}
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>Elliot Fu</Comment.Author>
                <Comment.Metadata>
                    <div>Yesterday at 12:30AM</div>
                </Comment.Metadata>
                <Comment.Text>
                    <p>This has been very useful for my research. Thanks as well!</p>
                </Comment.Text>
                <Comment.Actions>
                    <div >
                        <Comment.Action>Reply</Comment.Action>
                        <Comment.Action>Delete</Comment.Action>
                    </div>

                </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
                <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>Jenny Hess</Comment.Author>
                        <Comment.Metadata>
                            <div>Just now</div>
                        </Comment.Metadata>
                        <Comment.Text>Elliot you are always so right :)</Comment.Text>
                        <Comment.Actions>
                            <div >
                                <Comment.Action>Reply</Comment.Action>
                                <Comment.Action>Delete</Comment.Action>
                            </div>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </Comment>

        <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                <Comment.Metadata>
                    <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                <Comment.Actions>
                    <div >
                        <Comment.Action>Reply</Comment.Action>
                        <Comment.Action>Delete</Comment.Action>
                    </div>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
        <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                <Comment.Metadata>
                    <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                <Comment.Actions>
                    <div >
                        <Comment.Action>Reply</Comment.Action>
                        <Comment.Action>Delete</Comment.Action>
                    </div>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
        <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                <Comment.Metadata>
                    <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                <Comment.Actions>
                    <div >
                        <Comment.Action>Reply</Comment.Action>
                        <Comment.Action>Delete</Comment.Action>
                    </div>
                </Comment.Actions>
            </Comment.Content>
        </Comment>



    </Comment.Group>
)

export default Disscuss;
