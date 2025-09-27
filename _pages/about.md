---
permalink: /
title: "Hi there!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Ph.D. student in Computer Science at <a href="https://www.ubc.ca/" style="text-decoration:none" target="_blank">University of British Columbia</a> supervised by Dr. <a href="https://www.robertxiao.ca/" style="text-decoration:none" target="_blank">Robert Xiao</a>. My research interests are in telepresence, AR/VR interactive techniques, and Human-Computer Interaction (HCI).

My Ph.D. thesis revolves around making spatial telepresence more natural by enhancing three key aspects: *realism*, *interactivity*, and *collaborative awareness*. For *realism*, I investigated hyper-realistic scene representations (e.g., 360° video, NeRF, Gaussian Splatting) and spatial alignment across heterogeneous environments. For *interactivity*, I enable users to navigate remote spaces and share 2D and 3D physical objects across distance. My work also draws on groupware and proxemics literature to guide design and reflect on *collaborative awareness*. For more details, please see <a href="#selected-publications" style="text-decoration:none">selected publications</a>.

Beside my thesis work, I am also broadly interested in AR/VR interactive techniques and sensing. I have explored assembly tracking with RFID sensing, touch inputs on physical surfaces for AR, and gesture sensing through piezo signals. My research has let to publications in ACM CHI, UIST, Ubicomp/IMWUT, and IEEE TVCG. For a full list, please see <a href="/publications" style="text-decoration:none">publications</a>. 

Before UBC, I received my M.S. in Computer Science and Engineering at <a href="https://umich.edu/" style="text-decoration:none" target="_blank">University of Michigan</a>, advised by <a href="http://www.nikolabanovic.net/" style="text-decoration:none" target="_blank">Nikola Banovic</a> and <a href="https://www.alansonsample.com/" style="text-decoration:none" target="_blank">Alanson Sample</a>. Before that, I obtained my B.S. in Computer Science from <a href="https://shanghai.nyu.edu/" style="text-decoration:none" target="_blank">New York University Shanghai</a>.

 <!-- During my leisure time, I enjoy playing guitar and tennis. -->

<!-- ===================== Selected Publications ===================== -->
<style>
  .pubs { margin: 2rem 0 2.5rem; }
  .pubs h2 { margin-bottom: 1rem; }
  .pub-item {
    display: flex; gap: 1rem; align-items: flex-start;
    padding: 0.8rem; border-top: solid; border-width: 1px 0 0 0; border-color: var(--border, #e5e7eb);
    background: var(--bg, #fff);
    /* margin-bottom: 0.9rem; */
  }
  .pub-thumb {
    flex: 0 0 200px; width: 200px; height: 150px; overflow: hidden; border-radius: 10px;
    background: #f3f4f6;
  }
  .pub-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .pub-body { flex: 1; min-width: 0; }
  .pub-title {
    font-weight: 600; margin: 0 0 0.1rem; line-height: 1.25;
  }
  .pub-desc { margin: 0 0 0.1rem; }
  .pub-cite {
    font-size: 0.95em; color: #4b5563; margin: 0;
  }
  /* Light/Dark variables (optional)
  @media (prefers-color-scheme: dark) {
    .pub-item { --bg: #0b0f18; --border: #1f2937; }
    .pub-cite { color: #9ca3af; }
  } */
  /* Small screens */
  @media (max-width: 600px) {
    .pub-item { flex-direction: column; }
    .pub-thumb { width: 100%; height: 160px; }
  }
</style>

<div class="pubs" id="selected-publications">
  <h2>Selected Publications</h2>
  <p>Please see a full list of my publications <a href="/publications" style="text-decoration:none">HERE</a> or download my <a href="/files/xincheng_huang_cv.pdf" style="text-decoration:none">CV</a></p>

  <!-- GaussianNexus (UIST 2025) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/gaussiannexus">
      <img src="/images/thumbnails/gaussiannexus_tn.png" alt="GaussianNexus thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/gaussiannexus" style="text-decoration:none">GaussianNexus: Room-Scale Real-Time AR/VR Telepresence with Gaussian Splatting</a>
      </p>
      <p class="pub-desc"><u>Xincheng Huang</u>, Dieter Frehlich, Ziyi Xia, Peyman Gholami, and Robert Xiao. In Proc. UIST' 25. ACM, New York, NY, USA, 18 pages. [<a href="https://doi.org/10.1145/3746059.3747693">Publisher</a>] [<a href="/publications/gaussiannexus">Details</a>] [<a href="/files/7-gaussiannexus.pdf">PDF</a>]</p>
    </div>
  </div>

  <!-- VirtualNexus (UIST 2024) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/virtual-nexus">
      <img src="/images/thumbnails/virtualnexus_tn.png" alt="VirtualNexus thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/virtual-nexus" style="text-decoration:none">VirtualNexus: Enhancing 360-Degree Video AR/VR Collaboration with Environment Cutouts and Virtual Replicas</a>
      </p>
      <p class="pub-desc"><u>Xincheng Huang</u>, Michael Yin, Ziyi Xia, and Robert Xiao. In Proc. UIST' 24. ACM, New York, NY, USA, Article 55, 12 pages. [<a href="https://doi.org/10.1145/3654777.3676377">Publisher</a>] [<a href="/publications/virtual-nexus">Details</a>] [<a href="/files/4-virtualnexus.pdf">PDF</a>]</p>
    </div>
  </div>

  <!-- SurfShare (IMWUT 2023) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/surf-share">
      <img src="/images/thumbnails/surfshare_tn.jpeg" alt="SurfShare thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/surf-share" style="text-decoration:none">SurfShare: Lightweight Spatially Consistent Physical Surface and Virtual Replica Sharing with Head-Mounted Mixed Reality</a>
      </p>
      <p class="pub-desc"><u>Xincheng Huang</u> and Robert Xiao. PACM IMWUT. 7, 4, Article 162 (December 2023), 24 pages. [<a href="https://doi.org/10.1145/3631418">Publisher</a>] [<a href="/publications/surf-share">Details</a>] [<a href="/files/3-surfshare.pdf">PDF</a>]</p>
    </div>
  </div>

  <!-- VR Telepresence (TVCG 2023) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/vr-telepresence">
      <img src="/images/thumbnails/vrtelepresence_tb.png" alt="VR Telepresence thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/vr-telepresence" style="text-decoration:none">Virtual Reality Telepresence: 360-Degree Video Streaming with Edge-Compute Assisted Static Foveated Compression</a>
      </p>
      <p class="pub-desc"><u>Xincheng Huang</u>, James Riddell, and Robert Xiao. IEEE TVCG. 29, 11 (November 2023), 11 pages. [<a href="https://doi.org/10.1109/TVCG.2023.3320255">Publisher</a>] [<a href="/publications/vr-telepresence">Details</a>] [<a href="/files/2-vrtelepresence.pdf">PDF</a>]</p>
    </div>
  </div>

  <!-- StructureSense (IMWUT 2022) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/structuresense">
      <img src="/images/thumbnails/structuresense_tn.png" alt="StructureSense thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/structuresense" style="text-decoration:none">StructureSense: Inferring Constructive Assembly Structures from User Behaviors</a>
      </p>
      <p class="pub-desc"><u>Xincheng Huang</u>, Keylonnie L Miller, Alanson P. Sample, and Nikola Banovic. PACM IMWUT. 6, 4, Article 204 (December 2022), 25 pages. [<a href="https://doi.org/10.1145/3570343">Publisher</a>] [<a href="/publications/structuresense">Details</a>] [<a href="/files/1-structuresense.pdf">PDF</a>]</p>
    </div>
  </div>
</div>
<!-- =================== End Selected Publications =================== -->