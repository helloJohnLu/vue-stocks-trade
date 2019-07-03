<template>
  <div class="container">
    <ul>
      <li>
        <router-link tag="li" to="/"><a>Home</a></router-link>
        <router-link tag="li" to="/portfolio"><a>Portfolio</a></router-link>
        <router-link tag="li" to="/stocks"><a>Stocks</a></router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>