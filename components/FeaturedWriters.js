import { featuredWriter } from "../bookData.js";
const getId = (id) => {
  return document.getElementById(id);
};

const writers = {
  writers: getId("featured-writers"),
};


featuredWriter.map((writer) => {
  writers.writers.innerHTML += `
  <li class="col-sm-6 d-flex mb-3 align-items-center">
  <div class="icon iq-icon-box mr-3">
    <a href="javascript:void();"
      ><img
        class="img-fluid avatar-60 rounded-circle"
        src=${writer.img}
        alt=""
    /></a>
  </div>
  <div class="mt-1">
    <h6>${writer.name}</h6>
    <p class="mb-0 text-primary">
      Publish Books: <span class="text-body">${writer.bookPublished}</span>
    </p>
  </div>
</li>

 
  `;
});
