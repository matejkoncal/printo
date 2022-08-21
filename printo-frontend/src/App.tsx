import { useMemo, useRef, useState } from "react";
import "./App.css";
import FileList from "./file-list/fileList";
import FileListItem from "./list-item/listItem";
import FloatingButtons from "./floating-buttons/floatingButtons";
import PrintingFileBackDrope from "./printing-back-drope/printingBackDrope";

function App() {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [backDropeText, setBackDropeText] = useState("Printing...");
  const [backDropeDone, setBackDropeDone] = useState(false);

  const renderedFiles = useMemo(() => {
    return files.map((file) => (
      <FileListItem
        onDelete={(deletingFile) => {
          setFiles(files.filter((file) => file !== deletingFile));
        }}
        key={file.name}
        file={file}
      />
    ));
  }, [files]);

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = [];
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        newFiles.push(e.target.files[i]);
      }
      setFiles(newFiles);
    }
  };

  const onPrintFakeHandler = () => {
    setOpenBackdrop(true);
    setTimeout(() => {
      setBackDropeDone(true);
      setBackDropeText("Done!");
      setTimeout(() => {
        setOpenBackdrop(false);
        setTimeout(() => {
          setBackDropeDone(false);
          setBackDropeText("Printing...");
        }, 1000);
      }, 3000);
    }, 3000);
  };

  const onAddButtonClickHandler = () =>
    fileInputRef.current && fileInputRef.current.click();

  return (
    <div className="App">
      <PrintingFileBackDrope
        done={backDropeDone}
        text={backDropeText}
        open={openBackdrop}
      />
      <input
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        multiple
        onChange={onInputChangeHandler}
      />
      {files.length > 0 && <FileList>{renderedFiles}</FileList>}
      <FloatingButtons
        onAdd={onAddButtonClickHandler}
        onPrint={onPrintFakeHandler}
        showPrintButton={files.length > 0}
      />
    </div>
  );
}

export default App;
