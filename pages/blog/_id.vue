<template>
  <div class="container">
    <div class="card m-1">
      <div class="card-body">
        <h1>{{ articulo.title }}</h1>
        <p class="small"><strong>Autor: {{ articulo.nombreAutor }}</strong></p>
        <p>{{ articulo.body }}</p>
        <nuxt-link to="/blog" class="btn btn-primary">Atrás</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
    }
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

      const articulo = res.data

      const resUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)

      articulo.nombreAutor = resUser.data.name
      console.log(articulo)

      return { articulo }

    } catch (error) {
      console.log(error)
      return {error:error}
    }
  },
}
</script>
