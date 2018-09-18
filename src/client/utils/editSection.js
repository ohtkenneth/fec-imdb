import axios from 'axios';

const makeEditable = (movieId, section, headerSectionId, editSectionId, editButtonId, saveButtonId) => {
  // need to define vars in here since nodes have not been rendered yet
  const header = document.getElementById(headerSectionId);
  const editSectionText = document.getElementById(editSectionId);

  // remove edit button
  header.removeChild(document.getElementById(editButtonId));

  // add button to save changes
  editSectionText.contentEditable = true;
  const saveButton = document.createElement('button');
  saveButton.innerHTML = 'Save Changes';
  saveButton.id = saveButtonId;
  saveButton.addEventListener('click', () => {
    saveEdit(movieId, section, headerSectionId, editSectionId, editButtonId, saveButtonId);
  });
  header.appendChild(saveButton);
};

const saveEdit = (movieId, section, headerSectionId, editSectionId, editButtonId, saveButtonId) => {
  console.log('saving edits');
  const header = document.getElementById(headerSectionId);
  const editSectionText = document.getElementById(editSectionId);

  // remove button
  header.removeChild(document.getElementById(saveButtonId));

  // add edit button
  editSectionText.contentEditable = false;
  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  editButton.id = editButtonId;
  editButton.addEventListener('click', () => {
    makeEditable(movieId, section, headerSectionId, editSectionId, editButtonId, saveButtonId);
  });
  header.appendChild(editButton);

  const options = {
    url: `/api/movie/${movieId}`,
    method: 'post',
    data: {
      section: section,
      text: editSectionText.innerHTML,
    }
  }
  axios(options)
    .then(result => {
      // refresh page?
      // or have app request movie again
      console.log('done')
    });
}

const postEdit = (movieId, section, text) => {

}

export default makeEditable;