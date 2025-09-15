---
permalink: /
title: "Welcome!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Ph.D. student in Computer Science at <a href="https://www.ubc.ca/" style="text-decoration:none" target="_blank">University of British Columbia</a> supervised by Dr. <a href="https://www.robertxiao.ca/" style="text-decoration:none" target="_blank">Robert Xiao</a>. My research interests are in Human-Computer Interaction (HCI), with a focus on enhancing the reality and interactivity in AR/VR telepresence. For more realistic telepresence, I explore novel immersive media that promise photo-realistic fidelity, from the more common 360-degree video to the emerging differentiable rendering techniques such as NeRF and Gaussian Splatting. As I adapt them to AR/VR telepresence, I design and create novel interactive techniques that facilitate co-presence and collaborative awareness. My research has led to publications at UIST, CHI, Ubicomp, and TVCG (please see <a href="/publications" style="text-decoration:none">publications</a> for details). I hope my endeavor will make future telepresence experience more natural, seamless, and enjoyable. Before UBC, I received my M.S. in Computer Science and Engineering at <a href="https://umich.edu/" style="text-decoration:none" target="_blank">University of Michigan</a>, where I worked with Dr. <a href="http://www.nikolabanovic.net/" style="text-decoration:none" target="_blank">Nikola Banovic</a> and Dr. <a href="https://www.alansonsample.com/" style="text-decoration:none" target="_blank">Alanson Sample</a> to track assembly tasks (e.g., Lego, furniture) with UHF-RFID sensing and Bayesian inference. Before that, I obtained my B.S. in Computer Science (with a secondary major in Interactive Media Arts) from <a href="https://shanghai.nyu.edu/" style="text-decoration:none" target="_blank">New York University Shanghai</a>. During my leisure time, I enjoy playing guitar and tennis.

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
    flex: 0 0 160px; width: 160px; height: 120px; overflow: hidden; border-radius: 10px;
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

<div class="pubs">
  <h2>Selected Publications</h2>
  <p>Please see a full list of my publications <a href="/publications" style="text-decoration:none">here</a> or download my <a href="/files/xincheng_huang_cv.pdf" style="text-decoration:none">CV</a></p>

  <!-- GaussianNexus (UIST 2025) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/gaussiannexus">
      <img src="/assets/img/pubs/gaussiannexus-thumb.jpg" alt="GaussianNexus thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/gaussiannexus" style="text-decoration:none">GaussianNexus: Room-Scale Real-Time AR/VR Telepresence with Gaussian Splatting</a>
      </p>
      <p class="pub-desc"><u>Xincheng Huang</u>, Dieter Frehlich, Ziyi Xia, Peyman Gholami, and Robert Xiao. In UIST' 25. ACM, New York, NY, USA, 18 pages. <a href="https://doi.org/10.1145/3746059.3747693">https://doi.org/10.1145/3746059.3747693</a></p>
    </div>
  </div>

  <!-- VirtualNexus (UIST 2024) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/virtual-nexus">
      <img src="/assets/img/pubs/virtualnexus-thumb.jpg" alt="VirtualNexus thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/virtual-nexus" style="text-decoration:none">VirtualNexus: Enhancing 360-Degree Video AR/VR Collaboration with Environment Cutouts and Virtual Replicas</a>
      </p>
      <p class="pub-desc"><u>Xincheng Huang</u>, Michael Yin, Ziyi Xia, and Robert Xiao. In UIST' 24. ACM, New York, NY, USA, 12 pages. <a href="https://doi.org/10.1145/3654777.3676377">https://doi.org/10.1145/3654777.3676377</a></p>
    </div>
  </div>

  <!-- SurfShare (IMWUT 2023) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/surf-share">
      <img src="/assets/img/pubs/surfshare-thumb.jpg" alt="SurfShare thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/surf-share" style="text-decoration:none">SurfShare: Lightweight Spatially Consistent Physical Surface and Virtual Replica Sharing with Head-Mounted Mixed Reality</a>
      </p>
      <p class="pub-desc">Shares real surfaces and aligned virtual replicas with spatial consistency for quick collaboration.</p>
      <p class="pub-cite">
        Recommended citation: X. Huang <em>et&nbsp;al.</em> 2023. <em>SurfShare: Lightweight Spatially Consistent Physical Surface and Virtual Replica Sharing with Head-Mounted MR.</em> <strong>IMWUT</strong> 7(4).
      </p>
    </div>
  </div>

  <!-- VR Telepresence (TVCG 2023) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/vr-telepresence">
      <img src="/assets/img/pubs/vr-telepresence-thumb.jpg" alt="VR Telepresence thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/vr-telepresence" style="text-decoration:none">Virtual Reality Telepresence: 360-Degree Video Streaming with Edge-Compute Assisted Static Foveated Compression</a>
      </p>
      <p class="pub-desc">An edge-assisted, static-foveated 360° video pipeline that boosts quality-bandwidth trade-offs for VR telepresence.</p>
      <p class="pub-cite">
        Recommended citation: X. Huang <em>et&nbsp;al.</em> 2023. <em>Virtual Reality Telepresence: 360-Degree Video Streaming with Edge-Compute Assisted Static Foveated Compression.</em> <strong>IEEE TVCG</strong> (ISMAR SI).
      </p>
    </div>
  </div>

  <!-- StructureSense (IMWUT 2022) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/structuresense">
      <img src="/assets/img/pubs/structuresense-thumb.jpg" alt="StructureSense thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/structuresense" style="text-decoration:none">StructureSense: Inferring Constructive Assembly Structures from User Behaviors</a>
      </p>
      <p class="pub-desc">Infers assembly structures from user actions to support guidance and verification in construction tasks.</p>
      <p class="pub-cite">
        Recommended citation: X. Huang <em>et&nbsp;al.</em> 2022. <em>StructureSense: Inferring Constructive Assembly Structures from User Behaviors.</em> <strong>IMWUT</strong> 6(4).
      </p>
    </div>
  </div>
</div>
<!-- =================== End Selected Publications =================== -->