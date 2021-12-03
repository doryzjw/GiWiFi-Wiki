/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b67837f97ba65e0c623f178f9634a0f4"
  },
  {
    "url": "assets/css/0.styles.69d7c718.css",
    "revision": "2e6e84e970b8cb1fd0c1532f55fb6374"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2a740a37.js",
    "revision": "dc8e2ff29985f3cfe778499c5439c91d"
  },
  {
    "url": "assets/js/11.533a0724.js",
    "revision": "3eb127c5e57ac416ba84966283669bcb"
  },
  {
    "url": "assets/js/12.e3aa3a77.js",
    "revision": "a22bfbea10ed2ca5e0371ef666ab7938"
  },
  {
    "url": "assets/js/13.9e6178b9.js",
    "revision": "356b8938b1693b5fdf044697108bb847"
  },
  {
    "url": "assets/js/14.bdf1ed90.js",
    "revision": "040cfd69d646b3f60eae38336167fb75"
  },
  {
    "url": "assets/js/15.c28294f1.js",
    "revision": "cc1964c9d6165d21794ab5b58fbff09f"
  },
  {
    "url": "assets/js/16.46f1d49a.js",
    "revision": "e830e4e7710af8ee30f0cf9238cc9d2e"
  },
  {
    "url": "assets/js/17.55668361.js",
    "revision": "e3c53cc551c13a42734fb5229852f20f"
  },
  {
    "url": "assets/js/18.8b0c3223.js",
    "revision": "8948dd4361d2a037b1c0a14c3f338a7f"
  },
  {
    "url": "assets/js/19.4ec103b4.js",
    "revision": "553c173c0c67e915b5300d3699c6dabf"
  },
  {
    "url": "assets/js/20.57060a7e.js",
    "revision": "e345e3a7fcca1cfe7cdc0787f8bd0330"
  },
  {
    "url": "assets/js/21.9819ce7a.js",
    "revision": "645502383469a4fe5a8ea8847ec7961a"
  },
  {
    "url": "assets/js/22.be8ebe0a.js",
    "revision": "750cf0daed4351fd191cfc1778074ca0"
  },
  {
    "url": "assets/js/23.f67a80cd.js",
    "revision": "a9356b6b9c14bb0f80a12d0aa04221b8"
  },
  {
    "url": "assets/js/24.11a1e6be.js",
    "revision": "06f56e90de4bb27b62eb393168982ead"
  },
  {
    "url": "assets/js/25.db686a7f.js",
    "revision": "b75fa9d7f1d09ba8f6104921374c03e8"
  },
  {
    "url": "assets/js/26.d42063f6.js",
    "revision": "aa63507f1a5632b71d90092dcfb3d334"
  },
  {
    "url": "assets/js/27.eac94836.js",
    "revision": "aa238612da630deb0f724b0da69d861f"
  },
  {
    "url": "assets/js/28.22523d0b.js",
    "revision": "01658594e06c60d38643084026322d55"
  },
  {
    "url": "assets/js/29.f5057a0d.js",
    "revision": "e58c19b7395e4f73c57a59fb5a4ba492"
  },
  {
    "url": "assets/js/3.b29cf9a5.js",
    "revision": "04fb1a80d9d8101fe01173225a6116da"
  },
  {
    "url": "assets/js/30.31e826b9.js",
    "revision": "2a241b4c44ebc1448ffbe7de6995f376"
  },
  {
    "url": "assets/js/31.6e165fc3.js",
    "revision": "fd63df74d4361cce70297f2c42c26879"
  },
  {
    "url": "assets/js/32.c741675a.js",
    "revision": "3fe05cb08b1482ca0e499f7e2fcba698"
  },
  {
    "url": "assets/js/33.1bb19d94.js",
    "revision": "9b7105ee0d7bd15fa9cfab74ef61373a"
  },
  {
    "url": "assets/js/4.74aa3a98.js",
    "revision": "e7037a3df7098a981bca527d3c45f5d5"
  },
  {
    "url": "assets/js/5.e3f1d9f6.js",
    "revision": "a65dc6de8fc3987eb66856b6050ba55c"
  },
  {
    "url": "assets/js/6.69038822.js",
    "revision": "4408268f6fcd02aeeacde52ced2bd5cb"
  },
  {
    "url": "assets/js/7.60cddba7.js",
    "revision": "2c6f2c2759338fac08c7033ac72bd780"
  },
  {
    "url": "assets/js/8.35e5121c.js",
    "revision": "a232919587d91cf8e2b7cfb9f03f3f0f"
  },
  {
    "url": "assets/js/9.06bc0e66.js",
    "revision": "6bce9a00368266b8262a9f13b0758ed2"
  },
  {
    "url": "assets/js/app.f7d26087.js",
    "revision": "f789a7891361f48d2bee28ce07c56bec"
  },
  {
    "url": "assets/js/vendors~docsearch.3b3aacb0.js",
    "revision": "7b402129a64720452cc78848ba7bec3a"
  },
  {
    "url": "blog/index.html",
    "revision": "aaa82b08a69423e9f1ddccd2822d5f99"
  },
  {
    "url": "img/general-128-128.png",
    "revision": "d36f9d3d785443b43cf4793e0041d5a4"
  },
  {
    "url": "img/general-16-16.png",
    "revision": "c4b622f7b32d2636af981175c9e157fe"
  },
  {
    "url": "img/general-256-256.png",
    "revision": "ba88591a057b1b9e67a848abb63e3596"
  },
  {
    "url": "img/general-32-32.png",
    "revision": "83f778451654a93d77279332ff9ed4c8"
  },
  {
    "url": "img/general-48-48.png",
    "revision": "f2889f73712dba6250c3ebd243ecc577"
  },
  {
    "url": "img/general-64-64.png",
    "revision": "d22fa82a5bfa00194a640424cc09b160"
  },
  {
    "url": "img/general-90-90.png",
    "revision": "e9ffbe0d10b7488544b10752d0058ab2"
  },
  {
    "url": "img/marketplace-128-128.png",
    "revision": "d36f9d3d785443b43cf4793e0041d5a4"
  },
  {
    "url": "img/marketplace-512-512.png",
    "revision": "50529c682ce62b8443e5a67fdea2caf3"
  },
  {
    "url": "index.html",
    "revision": "e3a7c329e9bf46078b12e963e516261d"
  },
  {
    "url": "markmap/01.html",
    "revision": "dd371c2f62cb9d9271072fece34c9ad4"
  },
  {
    "url": "pages/0fc1d2/index.html",
    "revision": "914179b82ffc3ecc0c2393b2ca6fd3e6"
  },
  {
    "url": "pages/1b12ed/index.html",
    "revision": "e88a6fc3e2ede53eac20390aec2701fb"
  },
  {
    "url": "pages/22640f/index.html",
    "revision": "6c97a599a7bbecb8144ced0886373da7"
  },
  {
    "url": "pages/2f674a/index.html",
    "revision": "d5b8b9a4c41d8e6bf632106622f904e0"
  },
  {
    "url": "pages/33d574/index.html",
    "revision": "2dc22f6ca54be17d5ecbf6b936c1dd17"
  },
  {
    "url": "pages/3a4bef/index.html",
    "revision": "83db14afe6128683bd16c038cc105333"
  },
  {
    "url": "pages/3e7666/index.html",
    "revision": "b79314899682df1c4312480ecb4f549a"
  },
  {
    "url": "pages/514a88/index.html",
    "revision": "8e91a38b777a399d7ef3645c420fb4db"
  },
  {
    "url": "pages/52d5c3/index.html",
    "revision": "737047305cfada6ec913d152c0cdf236"
  },
  {
    "url": "pages/5dfce5/index.html",
    "revision": "5bb6907cb148bc64c456dc3b8f958fa9"
  },
  {
    "url": "pages/793dcb/index.html",
    "revision": "84541a1d42be2817da2836f68522cf2a"
  },
  {
    "url": "pages/9cc27d/index.html",
    "revision": "7e5425c30d9b9b92d20c8776d37aaa99"
  },
  {
    "url": "pages/a20ce8/index.html",
    "revision": "c91522950e610f609511927f77c7f8c8"
  },
  {
    "url": "pages/a2f161/index.html",
    "revision": "caad21a0972c8f59a722fedaad91b277"
  },
  {
    "url": "pages/c791f0/index.html",
    "revision": "def7c7f6436d6682c2f30bc0a2178a49"
  },
  {
    "url": "pages/db78e2/index.html",
    "revision": "f400fa1c924b14e8cb0ebd1cac10fb30"
  },
  {
    "url": "pages/dd027d/index.html",
    "revision": "adc0c2c1ad7bd5fad8cbeed14a9defb6"
  },
  {
    "url": "pages/e42d5f/index.html",
    "revision": "7f90d45bbec5f1d6cca91e5fc902e66b"
  },
  {
    "url": "pages/ed7f92/index.html",
    "revision": "7000a3083a28e800ffcad750500f14aa"
  },
  {
    "url": "pages/f14bdb/index.html",
    "revision": "7beed28b2488e5bfcbce2d3b07a11904"
  },
  {
    "url": "pages/zhet/index.html",
    "revision": "d68953ab1cf5bdd79d85bd3fead39e33"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
