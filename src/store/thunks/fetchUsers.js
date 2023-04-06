import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {  //as we create thunk like this there is 3 props added manually ( .pending, .fulfilled, .rejected) 
    const response = await axios.get('http://localhost:3005/users');
    
    return response.data;  //the returned response will be automatically fitched to the payload of action
});

export {fetchUsers};