---
title: "GaussianNexus: Room-Scale Real-Time AR/VR Telepresence with Gaussian Splatting"
collection: publications
permalink: /publications/gaussiannexus
excerpt: "A Room-scale real-time AR/VR telepresence system with Gaussian Splatting. Our system provides 2D live updates with rectified video stream captured by the 360° camera. It then offers 3D live updates by tracking the movements of individual physical objects pre-selected by the users."
date: 2025-9-21
venue: "The 38th Annual ACM Symposium on User Interface Software and Technology (UIST ’25)"
paperurl: 'https://doi.org/10.1145/3746059.3747693'
citation: "Xincheng Huang, Dieter Frehlich, Ziyi Xia, Peyman Gholami, and Robert Xiao. 2025. GaussianNexus: Room-Scale Real-Time AR/VR Telepresence with Gaussian Splatting. In <i>The 38th Annual ACM Symposium on User Interface Software and Technology (UIST ’25), September 28-October 1, 2025, Busan, Korea</i>. ACM, New York, NY, USA, 17 pages."
---
<b>Abstract</b>: Telepresence systems with AR/VR immerse a remote user in a local physical environment, enabling virtual travel, remote guidance, and collaborative design. Contemporary systems typically rely on 360° video or RGB-D reconstruction -- each with trade-offs between visual fidelity and spatial perception. Emerging rendering techniques like Gaussian Splatting unify these strengths, offering photo-realistic scene representations with spatial interactivity. However, due to the long training times required, updating such scenes in real-time is still largely infeasible. We present GaussianNexus, a system that applies Gaussian Splatting to room-scale telepresence. Our system uses Gaussian Splatting as the primary scene representation medium, and a 360° camera to stream and track 2D and 3D dynamic changes. For live 2D interaction, the system overlays rectified video onto user-selected surfaces. For live 3D interaction, users identify dynamic objects in the environment, which are then segmented, tracked and synchronized as real-time updates to the Gaussian Splatting environment, enabling smooth, low-latency telepresence without retraining. We demonstrate the utility of GaussianNexus through 2 example applications and evaluate it in a usability test.
<br/>

**Paper**: Coming Soon :-)

<b>Video Preview</b>:
<iframe width="560" height="315" src="https://www.youtube.com/embed/gCcnKlEnRGA?si=o2umIF6i2cnSxY5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br/>

<b>Demo</b>:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ghq1xLEmyvE?si=-3NLC-D5VDnFwM66" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br/>