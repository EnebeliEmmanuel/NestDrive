const getId = (id) => {
    return document.getElementById(id);
  };
  
  const admin = {
     category: getId('category-details')
  };

  admin.category.innerHTML=`        <table class="data-tables table table-striped table-bordered" style="width:100%">
  <thead>
      <tr>
          <th width="5%">No</th>
          <th width="20%">Category Name</th>
          <th width="65%">Category Description</th>
          <th width="10%">Action</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>1</td>
          <td>General Books</td>
          <td>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
          </td>
          <td>
             <div class="flex align-items-center list-user-action">
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
            </div>
          </td>
      </tr>
      <tr>
          <td>2</td>
          <td>History Books</td>
          <td>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
          </td>
          <td>
             <div class="flex align-items-center list-user-action">
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
            </div>
          </td>
      </tr>
      <tr>
          <td>3</td>
          <td>Horror Story</td>
          <td>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
          </td>
          <td>
             <div class="flex align-items-center list-user-action">
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
            </div>
          </td>
      </tr>
      <tr>
          <td>4</td>
          <td>Arts Books</td>
          <td>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
          </td>
          <td>
             <div class="flex align-items-center list-user-action">
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
            </div>
          </td>
      </tr>
      <tr>
          <td>5</td>
          <td>Film & Photography</td>
          <td>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
          </td>
          <td>
             <div class="flex align-items-center list-user-action">
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
            </div>
          </td>
      </tr>
      <tr>
          <td>6</td>
          <td>Business & Economics</td>
          <td>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
          </td>
          <td>
             <div class="flex align-items-center list-user-action">
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
            </div>
          </td>
      </tr>
      <tr>
          <td>7</td>
          <td>Comics & Mangas</td>
          <td>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
          </td>
          <td>
             <div class="flex align-items-center list-user-action">
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
            </div>
          </td>
      </tr>
      <tr>
          <td>8</td>
          <td>Computers & Internet</td>
          <td>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
          </td>
          <td>
             <div class="flex align-items-center list-user-action">
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
            </div>
          </td>
      </tr>
      <tr>
          <td>9</td>
          <td>Sports</td>
          <td>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
          </td>
          <td>
             <div class="flex align-items-center list-user-action">
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
            </div>
          </td>
      </tr>
      <tr>
          <td>10</td>
          <td>Travel & Tourism</td>
          <td>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
          </td>
          <td>
             <div class="flex align-items-center list-user-action">
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
               <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
            </div>
          </td>
      </tr>
  </tbody>
</table>`