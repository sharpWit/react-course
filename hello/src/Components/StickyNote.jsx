import Note from "./Note";
function StickyNote() {
  const notesData = [
    { title: "Title #1", content: "Text Content #1" },
    { title: "Title #2", content: "Text Content #2" },
    { title: "Title #3", content: "Text Content #3" },
    { title: "Title #4", content: "Text Content #4" },
    { title: "Title #5", content: "Text Content #5" },
    { title: "Title #6", content: "Text Content #6" },
    { title: "Title #7", content: "Text Content #7" },
  ];

  const notes = notesData.map((note, index) => (
    <Note key={index} title={note.title} content={note.content} />
  ));


  return <ul>{notes}</ul>;
}
export default StickyNote;
