<script lang="ts">
  import Sidebar from "./components/lading/Sidebar.svelte";
  import Footer from "./shared/Footer.svelte";
  import BaseLayout from "./layouts/BaseLayout.svelte";
  import About from "./pages/about.svelte";
</script>

<main>
  <BaseLayout>
    <div class="2xl:max-w-7xl mx-auto">
      <div class="grid  lg:grid-cols-2">
        <Sidebar />
        <About></About>
      </div>
    </div>
  </BaseLayout>
  <Footer></Footer>
</main>
