import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post.js"
import useStyles from './styles.js';
import { CircularProgress, Grid } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    const classes = useStyles();
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid key={uuidv4()} className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid> 
                ))}; 
            </Grid>
        )
    );
}

export default Posts;