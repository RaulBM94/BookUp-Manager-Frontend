<template>
  <div>
    <div class="card-header">
      <h4 class="card-heading">Edit Profile</h4>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="mb-4">
          <label class="form-label">Nombre de la empresa: </label>
          <input class="form-control" type="text" placeholder="Nombre de la empresa">
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-4">
          <label class="form-label">Email: </label>
          <input class="form-control" type="email" placeholder="Email">
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-4">
          <label class="form-label">Nombre: </label>
          <input class="form-control" type="text" placeholder="Nombre">
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-4">
          <label class="form-label">Apellidos: </label>
          <input class="form-control" type="text" placeholder="Apellidos">
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-4">
          <label class="form-label">Dirección del local: </label>
          <input class="form-control" type="text" placeholder="Dirección del local">
        </div>
      </div>
    </div>
  </div>
</template>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&amp;display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

<script>
export default {

}
</script>

<style>
.row {
  background-color: #d6a8ec;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 1rem;
  text-align: center;
  position: relative;

}

.card-header:first-child {
  border-radius: 1rem
}

.card-header {
  position: relative;
  padding: 1rem 1rem;
  border-bottom: none;
  background-color: rgb(127, 43, 148);
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  z-index: 2;
  text-align: center;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: rgb(63, 16, 117);
  background-clip: border-box;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(235, 0, 0, 0.15);
  border-radius: 1rem;
}

body {
  font-family: 'Roboto' 
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {

  line-height: 1.2;
}

.text-muted {
  color: #6c757d !important;
}

.lead {
  font-size: 1.125rem;
  font-weight: 300;
}

.text-sm {
  font-size: .7875rem !important;
}

h3,
.h3 {
  font-size: 1.575rem;
}




</style>








<style scoped>