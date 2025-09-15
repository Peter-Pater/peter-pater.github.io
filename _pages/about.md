---
layout: single
classes: full
permalink: /
title: "Welcome!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- ===================== Selected Publications ===================== -->
<style>
  .main-columns {
    display: flex; 
    gap: 2rem;
    align-items: flex-start;
    margin-top: 1.5rem;
  }
  .main-left { flex: 1; }
  .main-right { flex: 0 0 200px; max-width: 200px; }
  /* Responsive: stack on small screens */
  @media (max-width: 900px) {
    .main-columns { flex-direction: column; }
    .main-right { max-width: 100%; }
  }
  .pubs { margin: 2rem 0 2.5rem; }
  .pubs h2 { margin-bottom: 1rem; }
  .pub-item {
    display: flex; gap: 1rem; align-items: flex-start;
    padding: 0.9rem; border-radius: 12px; border: 1px solid var(--border, #e5e7eb);
    background: var(--bg, #fff);
    margin-bottom: 0.9rem;
  }
  .pub-thumb {
    flex: 0 0 120px; width: 120px; height: 80px; overflow: hidden; border-radius: 10px;
    background: #f3f4f6;
  }
  .pub-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .pub-body { flex: 1; min-width: 0; }
  .pub-title {
    font-weight: 600; margin: 0 0 0.35rem; line-height: 1.25;
  }
  .pub-desc { margin: 0 0 0.35rem; }
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

<div class="main-columns">

  <!-- Left column: welcome + pubs -->
  <div class="main-left">

  <p>I am a Ph.D. student in Computer Science at <a href="https://www.ubc.ca/" style="text-decoration:none" target="_blank">University of British Columbia</a> supervised by Dr. <a href="https://www.robertxiao.ca/" style="text-decoration:none" target="_blank">Robert Xiao</a>. My research interests are in Human-Computer Interaction (HCI), with a focus on enhancing the reality and interactivity in AR/VR telepresence. For more realistic telepresence, I explore novel immersive media that promise photo-realistic fidelity, from the more common 360-degree video to the emerging differentiable rendering techniques such as NeRF and Gaussian Splatting. As I adapt them to AR/VR telepresence, I design and create novel interactive techniques that facilitate co-presence and collaborative awareness. My research has led to publications at UIST, CHI, Ubicomp, and TVCG (please see <a href="/publications" style="text-decoration:none">publications</a> for details). I hope my endeavor will make future telepresence experience more natural, seamless, and enjoyable. Before UBC, I received my M.S. in Computer Science and Engineering at <a href="https://umich.edu/" style="text-decoration:none" target="_blank">University of Michigan</a>, where I worked with Dr. <a href="http://www.nikolabanovic.net/" style="text-decoration:none" target="_blank">Nikola Banovic</a> and Dr. <a href="https://www.alansonsample.com/" style="text-decoration:none" target="_blank">Alanson Sample</a> to track assembly tasks (e.g., Lego, furniture) with UHF-RFID sensing and Bayesian inference. Before that, I obtained my B.S. in Computer Science (with a secondary major in Interactive Media Arts) from <a href="https://shanghai.nyu.edu/" style="text-decoration:none" target="_blank">New York University Shanghai</a>. During my leisure time, I enjoy playing guitar and tennis.</p>

  <div class="pubs">
  <h2>Selected Publications</h2>

  <!-- GaussianNexus (UIST 2025) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/gaussiannexus">
      <img src="/assets/img/pubs/gaussiannexus-thumb.jpg" alt="GaussianNexus thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/gaussiannexus" style="text-decoration:none">GaussianNexus: Room-Scale Real-Time AR/VR Telepresence with Gaussian Splatting</a>
      </p>
      <p class="pub-desc">Real-time AR/VR telepresence that fuses high-fidelity Gaussian Splatting scenes with live 360° video for natural collaboration.</p>
      <p class="pub-cite">
        Recommended citation: X. Huang <em>et&nbsp;al.</em> 2025. <em>GaussianNexus: Room-Scale Real-Time AR/VR Telepresence with Gaussian Splatting.</em> In <strong>UIST 2025</strong>.
      </p>
    </div>
  </div>

  <!-- HaloTouch (CHI 2025) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/halotouch">
      <img src="/assets/img/pubs/halotouch-thumb.jpg" alt="HaloTouch thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/halotouch" style="text-decoration:none">HaloTouch: Using IR Multi-Path Interference to Support Touch Interactions with General Surfaces</a>
      </p>
      <p class="pub-desc">Turns everyday surfaces into touch interfaces by harnessing IR multi-path interference with commodity sensors.</p>
      <p class="pub-cite">
        Recommended citation: X. Huang <em>et&nbsp;al.</em> 2025. <em>HaloTouch: Using IR Multi-Path Interference to Support Touch Interactions with General Surfaces.</em> In <strong>CHI 2025</strong>.
      </p>
    </div>
  </div>

  <!-- VibRing (PACMHCI / EICS 2025) -->
  <div class="pub-item">
    <a class="pub-thumb" href="/publications/vibring">
      <img src="/assets/img/pubs/vibring-thumb.jpg" alt="VibRing thumbnail">
    </a>
    <div class="pub-body">
      <p class="pub-title">
        <a href="/publications/vibring" style="text-decoration:none">VibRing: A Wearable Vibroacoustic Sensor for Single-Handed Gesture Recognition</a>
      </p>
      <p class="pub-desc">A ring-form factor sensor that recognizes rich single-hand gestures via vibroacoustic signals.</p>
      <p class="pub-cite">
        Recommended citation: X. Huang <em>et&nbsp;al.</em> 2025. <em>VibRing: A Wearable Vibroacoustic Sensor for Single-Handed Gesture Recognition.</em> <strong>PACM HCI</strong> (EICS 2025), 9(4).
      </p>
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
      <p class="pub-desc">Blends 360° video with interactive cutouts and replicas to improve co-presence and task coordination.</p>
      <p class="pub-cite">
        Recommended citation: X. Huang <em>et&nbsp;al.</em> 2024. <em>VirtualNexus: Enhancing 360-Degree Video AR/VR Collaboration with Environment Cutouts and Virtual Replicas.</em> In <strong>UIST 2024</strong>.
      </p>
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

  </div>
  <!-- Right column: news -->
  <div class="main-right">
    <h2>News</h2>
    <ul style="list-style:none; padding:0; margin:0;">
      <li>[Sept 2025] I will attend <a href="https://uist.acm.org/2025/" target="_blank">UIST 2025</a> …</li>
      <li>[Aug 2025] Our paper <a href="/publications/gaussiannexus">GaussianNexus</a> has been accepted …</li>
      <li>[April 2025] I attended <a href="https://chi2025.acm.org/">CHI 2025</a> in Yokohama …</li>
      <!-- keep adding items -->
    </ul>
  </div>

</div>
<!-- =================== End Main Layout =================== -->




<!-- # News
[Sept 2025] I will attend <a href="https://uist.acm.org/2025/" style="text-decoration:none" target="_blank">UIST 2025</a> from Sept 28th -- Oct 1st in Busan, Korea, to present <a href="/publications/gaussiannexus" style="text-decoration:none">GaussianNexus: Room-Scale Real-Time AR/VR Telepresence with Gaussian Splatting</a> and serve as a session chair.

[Aug 2025] Our paper <a href="/publications/gaussiannexus" style="text-decoration:none">GaussianNexus: Room-Scale Real-Time AR/VR Telepresence with Gaussian Splatting</a> has been accepted to <a href="https://uist.acm.org/2025/" style="text-decoration:none" target="_blank">UIST 2025</a>!

[April 2025] I attended <a href="https://chi2025.acm.org/" style="text-decoration:none">CHI 2025</a> in Yokohama, Japan.

[Jan 2025] I served as an Associate Chair (AC) on the Program Committee of <a href="https://chi2025.acm.org/for-authors/late-breaking-work/" style="text-decoration:none">CHI 2025 Late-Breaking Work (LBW)</a>.

[Jan 2025] Our paper <a href="/publications/halotouch" style="text-decoration:none">HaloTouch: Using IR Multi-Path Interference to Support Touch Interactions with General Surfaces</a>, has been accepted to <a href="https://chi2025.acm.org/" style="text-decoration:none">CHI 2025</a>!

[Dec 2024] Our paper <a href="/publications/vibring" style="text-decoration:none">VibRing: A Wearable Vibroacoustic Sensor for Single-Handed Gesture Recognition</a>, has been accepted to <a href="https://eics.acm.org/2025/" style="text-decoration:none">ACM EICS 2025</a>. (published in the <a href="https://dl.acm.org/journal/pacmhci/tracks/eics" style="text-decoration:none">PACM HCI, Volume. 9, Issue 4</a>).

[Oct 2024] I attended <a href="https://iss2024.acm.org/" style="text-decoration:none">ACM Interactive Surfaces and Spaces (ISS) 2024</a> as a Student Volunteer.

[Oct 2024] I presented <a href="/publications/surf-share" style="text-decoration:none">SurfShare</a> at <a href="https://www.ubicomp.org/ubicomp-iswc-2024/" style="text-decoration:none" target="_blank">Ubicomp 2024</a> in Melbourne, Australia!

[Aug 2024] Our paper <a href="/publications/virtual-nexus" style="text-decoration:none">VirtualNexus: Enhancing 360-Degree Video AR/VR Collaboration with Environment Cutouts and Virtual Replicas</a> has been accepted to <a href="https://uist.acm.org/2024/" style="text-decoration:none" target="_blank">UIST 2024</a>!

[Oct 2023] Our paper <a href="/publications/surf-share" style="text-decoration:none">SurfShare: Lightweight Spatially Consistent Physical Surface and Virtual Replica Sharing with Head-mounted Mixed-Reality"</a> has been accepted to <a href="https://dl.acm.org/journal/imwut" style="text-decoration:none" target="_blank">IMWUT</a> Vol. 7, No. 4!

[Oct 2023] Two memorable weeks! I presented <a href="/publications/structuresense" style="text-decoration:none">StructureSense</a> at Ubicomp 2023 (Cancun, Mexico) and <a href="/publications/vr-telepresence" style="text-decoration:none">Virtual Reality Telepresence</a> at ISMAR 2023 (Sydney, Australia).

[Jun 2023] Our paper <a href="/publications/vr-telepresence" style="text-decoration:none">Virtual Reality Telepresence: 360-Degree Video Streaming with Edge-Compute Assisted Static Foveated Compression"</a> has been accepted to <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=2945" style="text-decoration:none" target="_blank">IEEE TVCG</a> (special issue of ISMAR)!.

[Nov 2022] My first full paper <a href="/publications/structuresense" style="text-decoration:none">StructureSense: Inferring Constructive Assembly Structures from User Behaviors</a> as the first author has been accepted to <a href="https://dl.acm.org/journal/imwut" style="text-decoration:none" target="_blank">IMWUT</a> Vol. 6, No.4!. -->