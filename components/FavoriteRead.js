import { favoritesReads } from "../bookData.js";
const getId = (id) => {
    return document.getElementById(id);
  };
  
  const reads = {
     reads: getId('favorites-slider')
  };
 
  favoritesReads.map((read) => {
    reads.reads.innerHTML +=`
    <li class="col-md-4">
    <div class="d-flex align-items-center">
      <div class="col-5 p-0 position-relative">
        <a href="javascript:void();">
          <img
            src=${ read.img}
            class="img-fluid rounded w-100"
            alt=""
          />
        </a>
      </div>
      <div class="col-7">
        <h5 class="mb-2">
      ${ read.title}
        </h5>
        <p class="mb-2">Author : ${ read.title}</p>
        <div
          class="d-flex justify-content-between align-items-center text-dark font-size-13"
        >
          <span>Reading</span>
          <span class="mr-4">${ read.progress}%</span>
        </div>
        <div
          class="iq-progress-bar-linear d-inline-block w-100"
        >
          <div class="iq-progress-bar iq-bg-primary">
            <span class=${ read.progress < '20' ? 'bg-danger' : read.progress < '50' ? 'bg-secondary':'bg-primary'} data-percent=${ read.progress}></span>
          </div>
        </div>
        <a href="#" class="text-dark"
          >Read Now<i class="ri-arrow-right-s-line"></i
        ></a>
      </div>
    </div>
  </li>
  
  
    `
  })
