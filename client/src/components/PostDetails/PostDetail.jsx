import React,{useEffect} from 'react'
import {Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {useParams, useHistory} from 'react-router-dom';

import useStyles from './styles';
const PostDetail = () => {
  const classes = useStyles();
  const {post, posts, isLoading} = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  return (
    <div>
      
    </div>
  )
}

export default PostDetail
