import streams from '../apis/streams';
import history from '../history';

export const signIn=(userId)=>{
    return{
        type:'SIGN_IN',
        payload:userId
    };
};

export const signOut=()=>{
    return{
        type:'SIGN_OUT'
    };
};

// redux thunk gives us two callback functions dispatch and getstate
export const createStream= (formValues)=>{
    return async (dispatch,getstate) =>{
        const {userId}=getstate().auth;
        const response= await streams.post('/streams',{...formValues, userId});

        dispatch({type:'CREATE_STREAM', payload:response.data});
        // programatic navigation
        history.push('/');
    };
};

export const fetchStreams= ()=>{
    return async (dispatch) =>{
        const response= await streams.get('/streams');

        dispatch({type:'FETCH_STREAMS', payload:response.data});
    };
};

export const fetchStream= (id)=>{
    return async (dispatch) =>{
        const response= await streams.get(`/streams/${id}`);

        dispatch({type:'FETCH_STREAM', payload:response.data});
    };
};

//patch for updating some while put replaces all getting rid of userID
export const editStream= (id,formValues)=>{
    return async (dispatch) =>{
        const response= await streams.patch(`/streams/${id}`,formValues);

        dispatch({type:'EDIT_STREAM', payload:response.data});
        history.push('/');
    };
};

export const deleteStream= (id)=>{
    return async (dispatch) =>{
         await streams.delete(`/streams/${id}`);

        dispatch({type:'DELETE_STREAM', payload:id });
        history.push('/');
    };
};