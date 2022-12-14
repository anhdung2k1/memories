import React, {useState} from 'react';
import {Container, Grow,Grid, Paper, AppBar,TextField, Button} from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import { useDispatch } from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import Spacer from 'react-spacer';
import ChipInput from 'material-ui-chip-input';
import {getPostsBySearch} from '../../actions/posts';
import Pagination from '../Pagination';
import useStyles from './styles.js';
function useQuery(){
    return new URLSearchParams(useLocation().search);
}
const Home = () => {

    const [currentId,setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const classes = useStyles();
    const [search,setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const searchPost = () => {
        if(search.trim() || tags) {
            // use redux dispatch -> fetch search post
            dispatch(getPostsBySearch({search, tags: tags.join(',')}));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        }
        else{
            history.push('/');
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13){
            // Searching post
            searchPost();
        }
    }
    const handleAdd = (tag) => setTags([...tags, tag]); // Seperate the previous tag before adding new tag
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

  return ( 
    <Grow in>
        <Container maxWidth = "xl">
            <Grid className = {classes.gridContainer} container justify = "space-between" alignItems = "stretch" spacing={3}>
                <Grid item xs = {12} sm ={6} md = {9}>
                    <Posts setCurrentId = {setCurrentId}/>
                </Grid>
                <Grid item xs = {12} sm ={6} md = {3}>
                <AppBar className = {classes.appBarSearch} position = "static" color = "inherit">
                    <TextField 
                        name = "search" 
                        variant = "outlined" 
                        label = "Search Memory" 
                        onKeyPress = {handleKeyPress}
                        fullWidth 
                        value = {search} 
                        onChange = {(e) => setSearch(e.target.value)}
                    />
                    <Spacer height = '12px'/>
                    <ChipInput
                        styles = {{margin: '10px 0'}}
                        value = {tags}
                        onAdd = {handleAdd}
                        onDelete = {handleDelete}
                        label = "Search Tags"
                        variant = "outlined"
                    />
                    <Spacer height = '12px'/>
                    <Button
                        className = {classes.searchButton}
                        onClick = {searchPost}
                        variant = "contained"
                        color = "primary"
                    >
                        Search
                    </Button>
                </AppBar>
                    <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
                    {(!searchQuery && !tags.length) && (
                        <Paper elevation = {6}>
                            <Pagination page = {page}/>
                        </Paper>
                    )}
                </Grid>
            </Grid>
        </Container>
    </Grow>
  )
}

export default Home;