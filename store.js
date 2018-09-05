import { createStore } from 'redux'  

const AppReducer = (state = {
  selectedPlace: {
    title: 'Machu Picchu',
    img: 'machuIcon.png',
    background: 'machupicchu.jpg',
  },
  places: {
    0: {
      id: 0,
      title: 'Machu Picchu', 
      img: 'machuIcon.png',
      background: 'machupicchu.jpg',
      description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery.'
    },
    1: { 
      id: 1,
      title: 'Cihuatán ruins', 
      img: 'cihuatanIcon.jpg',
      background: 'cihuatan.jpg',
      description: 'Cihuatán is a major pre-Columbian archaeological site in central El Salvador. It was a very large city located in the extreme south of the Mesoamerican cultural area, and has been dated to the Early Postclassic period of Mesoamerican chronology.'
    },
    2: { 
      id: 2,
      title: 'Tikal', 
      img: 'tikalIcon.png',
      background: 'tikal.jpg',
      description: 'Tikal is the ruin of an ancient city, which was likely to have been called Yax Mutal, found in a rainforest in Guatemala. Ambrosio Tut, a gum-sapper, reported the ruins to La Gaceta, a Guatemalan newspaper, which named the site Tikal'
    },
    3: {
      id: 3,
      title: 'Eiffel Tower',
      img: 'eiffelIcon.png',
      background: 'eiffel2.jpg ',
      description: 'The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower'
    }
  }
}, action) => {
  switch (action.type) {
    case 'SET_PLACE':
      return {
        ...state,
        selectedPlace: action.payload
      }
      default: {
        return state
      }
  }
}

const store = createStore(AppReducer)


export default store;