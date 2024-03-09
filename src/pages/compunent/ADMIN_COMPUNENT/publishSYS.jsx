export const PublishSYS = () => {
  return (
    <>
      <h1>Publishing...</h1>
      <form
        id="form"
        action="http://localhost:8000/admin/publish"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" id="file" name="file" multiple />
        <h2>penulis</h2>
        <input className="input-txt" type="text" name="penulis" />
        <h2>genre</h2>
        <input className="input-txt" type="text" name="genre" />
        <input className="input-submit" type="submit" />
      </form>
    </>
  );
};
{
}
