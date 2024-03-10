import { useRef } from "react";

export const PublishSYS = () => {
  const fileInput = useRef(null);
  const penulisInput = useRef(null);
  const genreInput = useRef(null);
  const imgInput = useRef(null);

  const sendData = () => {
    const form = new FormData();
    form.append(penulisInput.current.name, penulisInput.current.value);
    form.append(genreInput.current.name, genreInput.current.value);
    form.append(imgInput.current.name, imgInput.current.checked);

    for (let i = 0; i < fileInput.current.file.files.length; i++) {
      const element = fileInput.current.file.files[i];
      form.append("files", element);
    }

    fetch(import.meta.env.VITE_API_ADMIN_SYS, {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
      <h1>Publishing...</h1>
      <form
        id="form"
        ref={fileInput}
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" id="file" name="file" multiple />
        <h2>penulis</h2>
        <input
          ref={penulisInput}
          className="input-txt"
          type="text"
          name="penulis"
        />
        <h2>genre</h2>
        <input
          ref={genreInput}
          className="input-txt"
          type="text"
          name="genre"
        />
        <div>
          <input name="imgStat" ref={imgInput} type="checkbox" />
          <span>add img</span>
        </div>
        <input
          onClick={(e) => {
            e.preventDefault();
            sendData();
          }}
          className="input-submit"
          type="submit"
        />
      </form>
      {/* <button onClick={sendData}>click wkwkw</button> */}
    </>
  );
};
{
}
