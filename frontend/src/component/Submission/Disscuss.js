import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { useAlert } from 'react-alert';
import axios from 'axios';

const Disscuss = ({setReplyingTo,submissionId,comments}) =>{
    const alert= useAlert();


    const onReply=(comm)=>{
        setReplyingTo(comm);
    }

    return  (
        <Comment.Group>
            <Header as='h3' dividing>
                Comments  ({comments.length})
            </Header>

            {
                comments?.map((comment,idx)=>{
                    return (
                        <Comment>
                            <Comment.Avatar src={comment.user?.avatar?.url} />
                            <Comment.Content>
                                <Comment.Author as='a'>{comment.user?.name}</Comment.Author>
                                <Comment.Metadata>
                                    <div>{comment.createdAt?.split("T")[0]}</div>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <p>{comment.comment}</p>
                                </Comment.Text>
                                <Comment.Actions>
                                    <div >
                                        <Comment.Action onClick={()=>onReply(comment)}>Reply</Comment.Action>
                                        <Comment.Action>Delete</Comment.Action>
                                    </div>
                
                                </Comment.Actions>
                            </Comment.Content>
                            <Comment.Group>
                                {
                                
                                    comment.replies?.map((reply,idx)=>{
                                        return ( 
                                            <Comment>
                                                <Comment.Avatar src={reply.user?.avatar?.url} />
                                                <Comment.Content>
                                                    <Comment.Author as='a'>{reply.user?.name}</Comment.Author>
                                                    <Comment.Metadata>
                                                        <div>{reply.createdAt?.split("T")[0]}</div>
                                                    </Comment.Metadata>
                                                    <Comment.Text><b>{reply.repliedTo && `@ ${reply.repliedTo}`}</b> {reply.comment}</Comment.Text>
                                                    <Comment.Actions>
                                                        <div >
                                                            <Comment.Action onClick={()=>onReply(reply)}>Reply</Comment.Action>
                                                            <Comment.Action>Delete</Comment.Action>
                                                        </div>
                                                    </Comment.Actions>
                                                </Comment.Content>
                                            </Comment>
                                        )
                                    })
                                }
                            </Comment.Group>
                        </Comment>
                    );
                })
            }
    
        </Comment.Group>
    )
}

export default Disscuss;
