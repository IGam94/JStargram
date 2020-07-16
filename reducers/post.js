export const initialState = {
  mainPosts:[{
    id:1,
    User:{
      id:1,
      nickname:'JS',
    },
    content:'첫번째 게시글 #해시태그 #리액트',
    Images:[{src:'1.jpg'},{src:'2.jpg'},{src:'3.jpg'}],
    Comments:[{
      User:{
        nickname:'1quiz',
      },
      content:'하이하이',
      },
      {
      User:{
        nickname:'gogo',
      },
      content:'안녕안녕'
      }
    ],
    
  }],
  imagePaths:[],
  postAdded:false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
    id:2,
    User:{
      id:1,
      nickname:'JS',
    },
    content:'테스트 데이터입니다.',
    Images:[],
    Comments:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_POST:
      return{
      ...state,
      mainPosts:[dummyPost,...state.mainPosts],
      postAdded:true,
      }
    default:
      return state;
      
  } 
};

export default reducer;