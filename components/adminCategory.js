const getId = (id) => {
    return document.getElementById(id);
  };
  
  const admin = {
     category: getId('admin-category')
  };

  admin.category.innerHTML =`<form action="https://templates.iqonic.design/Starlybook/html/admin-category.html">
  <div class="form-group">
     <label>Category Name:</label>
     <input type="text" class="form-control">
  </div>
  <div class="form-group">
     <label>Category Description:</label>
     <textarea class="form-control" rows="4"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <button type="reset" class="btn btn-danger">Reset</button>
</form>`