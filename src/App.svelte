<script lang="ts">
  import Sidebar from "./components/lading/Sidebar.svelte";
  import Footer from "./components/shared/Footer.svelte";
  import BaseLayout from "./layouts/BaseLayout.svelte";
</script>

<main>
  <BaseLayout>
    <div class="2xl:max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-4">
        <Sidebar />
      </div>
    </div>
  </BaseLayout>
  <Footer></Footer>
</main>
