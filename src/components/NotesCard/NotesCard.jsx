import { Consumer } from "../../Context/Context";
import { createClearMsg } from "../../Utils/createClearMsg";
import { findNotesInArchive } from "../../Utils/findNotesInArchive";
import { findNotesInBin } from "../../Utils/findNotesInBin";
import { findNotesInImp } from "../../Utils/findNotesInImp";

export const NotesCard = ({ title, text, id, ispinned }) => { // this all are coming from Home comp <NotesCard value={......} />
   

  const { notesDispatch, archive, bin, impes } = Consumer();

  const clearMsg = createClearMsg(notesDispatch) //shortcut of clear Msg and we pass "notesDispatch" by props.

  // archive logic
  const isNotesInArchive = findNotesInArchive(archive, id) // while calling pass the values through props
  //Bin logic
  const isNotesInBin = findNotesInBin(bin, id)
  //Imp logic
  const isNotesInImp = findNotesInImp(impes, id)

  const onPinClick = (id) => {
    !ispinned ? notesDispatch({  //ispinned initially false so !ispinned means "true";
      type: 'PIN',
      payload: { id }
    }) :
      notesDispatch({
        type: 'UNPIN',
        payload: { id }
      })
  }
  const onArchiveClick = (id) => {
    !isNotesInArchive ? notesDispatch({ //that card is not there in archive then 'ADD'  otherwise 'REMOVE'
      type: 'ADD_TO_ARCHIVE',
      payload: { id }
    }) : notesDispatch({
      type: 'REMOVE_FROM_ARCHIVE',
      payload: { id }
    })
    clearMsg();
  }
  const onDeleteClick = (id) => {
    !isNotesInBin ? notesDispatch({
      type: 'ADD_TO_BIN',
      payload: { id }
    }) : notesDispatch({
      type: 'REMOVE_FROM_BIN',
      payload: { id }
    })
    clearMsg();
  }
  const onImportantClick = (id) => {
    !isNotesInImp ? notesDispatch({
      type: 'ADD_TO_IMPORTANT',
      payload: { id }
    }) : notesDispatch({
      type: 'REMOVE_FROM_IMP',
      payload: { id }
    })
    clearMsg();
  }
  const onRestoreClick = (id) => {
    notesDispatch({
      type: 'RESTORE',
      payload: { id }
    })
    clearMsg();
  }
  return (
    <>
      <div className=' m-2 md:m-5 rounded-2xl  shadow-xl border bg-green-100  md:w-[300px]'>
        <div className=' flex flex-wrap justify-between h-[55px] '>
          <p className="p-3" >{title}</p>
          { //this logic is card is there in ARCHIVE or IMP or BIN  then "pin symbol" is not visble otherwise visisble
            !isNotesInArchive && !isNotesInImp && !isNotesInBin ? <button className='flex flex-col my-4 ' onClick={() => onPinClick(id)}>
              <span className={ispinned ? 'material-icons text-blue-800' : 'material-icons-outlined'}>push_pin</span>
            </button> : <> </>  /*initial ispinned false so 'BLACK color showing', whenever click then true so 'BLUE color showing' */
          }
        </div><hr />

        <div className='flex flex-col'>
          <p className="p-3" >{text}</p>
          {//this logic is card is there in IMP or BIN  then "Archiv symbol" is not visble otherwise visisble
            !isNotesInImp && !isNotesInBin ? <button className='flex place-content-end ' onClick={() => onArchiveClick(id)}>
              <span className={isNotesInArchive ? 'material-icons text-blue-800' : 'material-icons-outlined'}>archive</span>
            </button> : <> </>
          }
          {//this logic is card is there in ARCHIVE or BIN  then "imp symbol" is not visble otherwise visisble
            !isNotesInArchive && !isNotesInBin ? <button className='flex place-content-end' onClick={() => onImportantClick(id)}>
              <span className={isNotesInImp ? 'material-icons text-blue-800' : 'material-icons-outlined'}>label_important</span>
            </button> : <></>
          }
          {//this logic is card is there in ARCHIVE or IMP then "delete symbol" is not visble otherwise visisble
            !isNotesInImp && !isNotesInArchive ? <button className='flex place-content-end' onClick={() => onDeleteClick(id)}>
              <span className={isNotesInBin ? 'material-icons text-blue-800 ' : 'material-icons-outlined'}>delete</span>
            </button> : <></>
          }
          
          {
            isNotesInArchive && isNotesInImp ? <button className="flex place-content-end" onClick={() => onRestoreClick(id)} >
              <span className="material-icons-outlined">settings_backup_restore</span>
            </button> : <> </>
          }
          {//this is not there in bin not visible  "Restore symbol" otherwise there in bin it is Visible.
            !isNotesInBin ? <></> : <button className="flex place-content-end" onClick={() => onRestoreClick(id)}>
              <span className={isNotesInBin ? 'material-icons text-blue-800' : 'material-icons-outlined'}>settings_backup_restore</span>
            </button>
          }

        </div>

      </div>
    </>
  )
}
