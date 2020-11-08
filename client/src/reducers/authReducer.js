const INITIAL_STATE = {
    isSignedIn: null,
    UserId: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return { ...state, isSignedIn: true, UserId: action.payload };
        
      case 'SIGN_OUT':
        return { ...state, isSignedIn: false, UserId: null };
    
      default:
        return state
    }
}