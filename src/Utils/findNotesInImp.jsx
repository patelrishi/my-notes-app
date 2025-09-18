
export const findNotesInImp = (impes, id) => {
    return impes.some((note) => note.id === id) // means this is find card is there in archive or not
  }