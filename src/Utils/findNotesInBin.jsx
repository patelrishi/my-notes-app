
export const findNotesInBin = (bin, id) => {
    return bin.some((note) => note.id === id) // means this is find card is there in archive or not
}