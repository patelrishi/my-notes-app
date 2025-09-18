
export const findNotesInArchive=(archive,id)=>{
 return archive.some((note)=> note.id === id) // means this is find card is there in archive or not
}