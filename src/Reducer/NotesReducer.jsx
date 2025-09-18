import { v4 as uuid } from "uuid";

export const NotesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'TITLE':
      return {
        ...state,
        title: payload
      }
    case 'TEXT':
      return {
        ...state,
        text: payload
      }
    case 'ADD_NOTES':
      return {
        ...state,
        notes: [...state.notes, { title: state.title, text: state.text, id: uuid(), ispinned: false }]
      }                                                 // 2nd below logic is changed in Notes false changed to true
    case 'CLEAR':
      return {
        ...state,
        title: '',
        text: '',
        message:'',
      }
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) => note.id === payload.id ? { ...note, ispinned: true } : note) //1st is Archive true means is changed in notes
      }
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) => note.id === payload.id ? { ...note, ispinned: false } : note)
      }
    case "ADD_TO_ARCHIVE":
      return {
        ...state, // find logic means it check ur clicked imp id and notes card id both are same the it is stored to archive page
        archive: [...state.archive, state.notes.find(({ id }) => id === payload.id)], //this is Add the archive card to ARCHIVE PAGE
        notes: state.notes.filter(({ id }) => id !== payload.id), //it is delete from 'notes' array means home page 
        message:'Added To Archive !'
      }
    case "REMOVE_FROM_ARCHIVE":
      return {
        ...state,
        notes: [...state.notes, state.archive.find(({id}) => id === payload.id)], //first add to home page 
        archive: state.archive.filter(({id}) => id !== payload.id), //then delete from archive
        message:'Removed From Archive !'
      }
      case "ADD_TO_BIN":
        return {
          ...state,
          bin: [...state.bin, state.notes.find(({id}) => id === payload.id) ], //this is Add the bin card to BIN PAGE
          notes: state.notes.filter(({id})=> id !== payload.id), //it is delete from 'notes' array means home page
          message:'Deleted The Card !'
         }
      case "REMOVE_FROM_BIN":
        return {
          ...state,
          bin: state.bin.filter(({id})=> id !== payload.id), //delete from bin permanantly
          message:'Permanantely Deleted !'
        }
        case "ADD_TO_IMPORTANT":
        return {
           ...state,
          impes: [...state.impes, state.notes.find(({id}) => id === payload.id)], //this is Add the import card to IMPORTANT PAGE
          notes: state.notes.filter(({id})=> id !== payload.id), //it is delete from 'notes' array means home page
          message:'Added to Important !'
        }
        case "REMOVE_FROM_IMP":
          return {
            ...state,
            notes: [...state.notes, state.impes.find(({id}) => id === payload.id)],
            impes: state.impes.filter(({id}) => id !== payload.id),
            message:'Removed from important !'
          }
        case "RESTORE":
          return {
            ...state, // restore logic which card there in bin that id and i am clicking card id is same then stored to notes array
            notes: [...state.notes, state.bin.find(({id}) => id === payload.id)],
            bin: state.bin.filter(({id})=> id !== payload.id), //remove from bin and goto notes page
            message:'Restored your Card !'
            }
    default:
      return state;
  }
}
