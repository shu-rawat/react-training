import productActionTypes from './productActionTypes';

export function updateSearchTerm(term=''){
    return {
        type:productActionTypes.UPDATE_SEARCH_TERM,
        payload:term
    }
}