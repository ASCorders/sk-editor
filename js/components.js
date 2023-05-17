const ALLOWTYPES = ["html", "css", "js"];

function AddFileHtml(name) {
  return `  <form id="add-file-form">
    <div class="form-content-wrapper">
      <img
        src="./images/file.svg"
        alt="file-plus"
        class="basic-icon"
      />
      <input type="text" value="${name}"  />
      
    </div>
  </form>`;
}
