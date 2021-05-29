const INITIAL_STATE = {
    galleryImages: []
}

const galleryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_GALLERY_IMAGES':
            return{
                ...state,
                galleryImages: action.payload
            }
        default:
            return state
    }
}

export default galleryReducer