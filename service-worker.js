if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const f=e=>a(e,d),b={module:{uri:d},exports:c,require:f};s[d]=Promise.all(i.map((e=>b[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-a4f7703e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"e7b3cc88fbfddd1a281acb4afae68120"},{url:"about/index.html",revision:"ab723963ef44a63747e466e068ca0dc7"},{url:"assets/0c1fb2d65e7c4e53a58a1d6d003cf6e5-k6fxj-DJ.jpeg",revision:"cdaef0c74c625228056d34e1c11e079a"},{url:"assets/1-1bpHsARR.png",revision:"88ce114b6e9ae52f2e733b05a3209f0e"},{url:"assets/1-sxH-Yy_l.js",revision:"0065b582ced1a250faaaafe8b3ccc0d4"},{url:"assets/1-XdnAwupS.png",revision:"9714328b3234822c5a180bcd5bbc146a"},{url:"assets/2-Iv2ilUVn.jpeg",revision:"5a493adbad990c4cb35d110cbbb9149c"},{url:"assets/2-JWEWUDFu.jpeg",revision:"84bdf8e691bd403e0c0fe84868a79f5b"},{url:"assets/2-YKyWLga5.png",revision:"9e71271e56a058bed4689d4f80a31f34"},{url:"assets/2018-2019.html-O6UaNpX7.js",revision:"3aee36c4ce4fd0e749ff0e56268b71c0"},{url:"assets/2019-2020.html-1yGl3UNH.js",revision:"7b80fac857adff558887458685b81a81"},{url:"assets/2020-2021.html-Kx7WIvtK.js",revision:"9399014128d40aeb9a995d5b396ff281"},{url:"assets/2021-2022.html-V_PHf9Aq.js",revision:"26a9837b6cb15f7179e96a5442a1efd2"},{url:"assets/2021.html-mvtVvjGD.js",revision:"f3f190a7dc4e3d45e660b47f2d8969eb"},{url:"assets/2021fall.html-Ys_0yAQY.js",revision:"3be48f32482e4a2a643b649beae1e6aa"},{url:"assets/2022-2023.html-Tk9xkyH6.js",revision:"5b239c499b14e8b90d38628053467069"},{url:"assets/2023-2024.html-LwYcLeXK.js",revision:"670dac1e9e3e994a571574f28f215358"},{url:"assets/2024-1-K-N-4Dns.jpg",revision:"0098ac0189b371c77dc16e35b59d5dfa"},{url:"assets/2024-2-6-k1Ksfe.jpg",revision:"b65f4dbeaffd958124c4ec7421d9be78"},{url:"assets/2024-2-ff0UB5i-.js",revision:"f6ddb5ae46776cdfcfd9b7951c5c1548"},{url:"assets/2d474998994c4bdea64fc0c20e468e4e-NkU-1ZgV.jpeg",revision:"e4a1b7c5411dcb75f08149b65e1b3729"},{url:"assets/3-_OP0ErxB.jpeg",revision:"eaed9d1e262741e211ece970181ed20d"},{url:"assets/3-wJ5wenVd.png",revision:"002e32ac9b9c62ad02b4622042350f9a"},{url:"assets/31d2011305ae4d6680b5c6ebe16c4aa2-9vxfcCpa.jpeg",revision:"faf76256301e34da0f0b32b02e0daba9"},{url:"assets/4-6aZcFcyC.png",revision:"9bd705a242b672e9e4f525996494645a"},{url:"assets/4-bpwjiTPR.jpeg",revision:"4c996b17bdef99e089b5bdbad31d963a"},{url:"assets/404.html-2X50tT5b.js",revision:"5634351521acc14e59a8d131d16ee25c"},{url:"assets/5-ORniMUH3.jpeg",revision:"ec3af9d6714bce3057fe6b0d71d1efd2"},{url:"assets/5-Wuazp14Y.png",revision:"e00bf46a7a4e9051aed01312be106835"},{url:"assets/59cf84079d9ff4f9-ujShyhGG.jpg",revision:"c3cb86428ca95ea7809e4d036b128f88"},{url:"assets/5e3cf29b0f8a445c94d7446cc68f0e8c-hSCmkTvA.png",revision:"a58ad2673846eafdfd72b36f51d10e37"},{url:"assets/6-IyBvI-Hj.jpeg",revision:"a49b1da11c1d62f651b5b54181184ba4"},{url:"assets/6-N_UgIkBF.png",revision:"91496331de028d9811cca378310a9501"},{url:"assets/7-lalB6z06.jpeg",revision:"666a0b6c4ef82d8a3d2e3d5119c64d71"},{url:"assets/8-vfo3aBpN.jpeg",revision:"f9490d9bcea796c88df7d8846de8338b"},{url:"assets/880086e6cc0a4858822011a636f7cd2d-a5hvlW6l.jpeg",revision:"0d29ae9ad97e90ef0ff9410753c2202f"},{url:"assets/8851f3bf244d4a8681ac4a1a15364221-mXGr-557.jpeg",revision:"2ff728c94455ef7f601f2dd550746f21"},{url:"assets/8d99f0bb36194313a3855fc657cb54c2-eFMjR6kC.jpeg",revision:"b60ce2f67adaec659e8de42487a255fb"},{url:"assets/add1-AkpP_MP1.png",revision:"3b0eb6fd1e19998ae07b2fdda0d18b47"},{url:"assets/add2-48WTTQlO.png",revision:"48f229d5b0bd038dfbece7976c43dedd"},{url:"assets/add3-pPq4YNGb.png",revision:"16924c71bf4b945a9112a3ba55f30f99"},{url:"assets/adt.html-SVMS8m08.js",revision:"5c6201c7b1747208164ea52cd6220e16"},{url:"assets/advice-on-study.html-b6jNU4cI.js",revision:"145cd1ffac215d9a8a9e193d34f9603e"},{url:"assets/afbd3cddd2d945bf852c2fec15fc6519-J2YbBzwM.jpeg",revision:"88748a8ebc1a4cd3f324c4f870d8aeb9"},{url:"assets/apply-DKs9a8UR.png",revision:"28a537cd708e65a5d834b9e37c4747ec"},{url:"assets/bb-due-gcal-3HDioHdf.png",revision:"e5c077e040e029439b4683b77e1f269c"},{url:"assets/bb-due-macos-UHdW8Lz3.png",revision:"1528a39b7e152972bd7d6efcb733fa91"},{url:"assets/building-11-elevator.html-Lsdyc6mn.js",revision:"e5a05c80d8da40649e2e35b0c390a3c2"},{url:"assets/busline2-E9shBAlJ.png",revision:"9f2098efc99139a5cac2fc22c86bf436"},{url:"assets/busline2-MmQkur0r.js",revision:"869eb3755964f2197bf73752aa8cf506"},{url:"assets/bustimer-old.html-On3HGHKk.js",revision:"2a13c872a6ae3b717d9c00d1c8715a03"},{url:"assets/bustimer-wx.html-Ol6NliJc.js",revision:"1865bee5ec28110f59eadbb85c201f89"},{url:"assets/bustimer.html-f4cjN4qN.js",revision:"4ff3ef92ba141abf24cd87b46672fa22"},{url:"assets/c31235e66edd43d69202f54f3c0aed46-qyFsav7g.jpeg",revision:"1b4a14c2b582bc2e4fe9860a34f1f9a0"},{url:"assets/c49bd903118a448eba26fed3624dadc6-hipp77FF.jpeg",revision:"a84f52a5ba12f2aaf0befd38f46d8ed4"},{url:"assets/canteen-wx.html-gES5CwP6.js",revision:"b85eb51a6f84c6c5c637d87bf8ab02dd"},{url:"assets/cas-login--EGDNo6t.png",revision:"dfbae961438fb4f789ee70f463722b1e"},{url:"assets/CC-BY-SA_icon-k0NOr8lx.js",revision:"48136b89c00f83816f13f9e33b526726"},{url:"assets/CC-BY-SA_icon-OV5rpqYe.svg",revision:"af17d52ad72e6d1015d183d060e68046"},{url:"assets/chrome-browser-desktop-2ZoGLkFF.png",revision:"e1f4ef5cf06ca958ec117aca49c74b98"},{url:"assets/copy-1-J6k3XspF.jpeg",revision:"d1179d13dadd129e538969f331d12c19"},{url:"assets/copy-2-_0fTm8Mu.jpeg",revision:"93c70e3ce5a88a41be3bc48fbb8fd1a8"},{url:"assets/copy-3-Ce_cOVMe.jpeg",revision:"f2a2463b987942bb98f2c494193d7662"},{url:"assets/copy-4-w3mR318j.jpeg",revision:"75679705724e0880efb6619a40b5e799"},{url:"assets/copy-5-hKktSqSx.jpeg",revision:"d09dcb21d3fb931a2835def7933d4a28"},{url:"assets/database-TrGuD1Xs.png",revision:"ff3c4edfbf324af9136e6ea8d0df7ed2"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/dorm-floor-plan.html-Dotj84-h.js",revision:"1cb1582738a482b3eacc51ec25f5cad0"},{url:"assets/english-vocabulary-daka-L7m3h5KE.png",revision:"be106d43bcc04ec57a0c2a30f2d3d96f"},{url:"assets/facdf1031d8e47ecaba7e9bf2fda59ba-pvyAPNPL.jpeg",revision:"b7a02f4ff8ac61c5c0f540772da224cc"},{url:"assets/get-link-mulcz4lU.png",revision:"1b5d1f7ebe1db58a46500502648b0b38"},{url:"assets/holiday.html-fnttXL3b.js",revision:"3835f5f9569f5284fa0afb1104b710be"},{url:"assets/ics-url-4aQtz63O.png",revision:"d32d371c2de86a4f5d528421cb2cb09a"},{url:"assets/image-1-enLCWUG_.png",revision:"46f6f9581a6cdd3a17bf33a344fedc88"},{url:"assets/image-10-1024x161-5FprX9av.png",revision:"169e95fcca2c31d71fd9f90cce5b718e"},{url:"assets/image-11-1024x983-w1eSTSoW.png",revision:"afe1381b3fbbd1bc0dbef79f97e9c060"},{url:"assets/image-12-lKG68wdA.png",revision:"7e63d831c7782dd450695e4c369d481c"},{url:"assets/image-13-1024x530-vyIsUyfj.png",revision:"32b9089552ed4c6985299ac25b72eb2b"},{url:"assets/image-14-1024x783-YCwUlyLm.png",revision:"095f8fed3a82cdd55a118f45be230bcb"},{url:"assets/image-15-1024x173-BLa4ZQw3.png",revision:"d2142657fa0d8529b211e11d7f5a0e5f"},{url:"assets/image-16-1024x538-VeFxW03J.png",revision:"fa1f9b8148e1466c515c984e8f37be66"},{url:"assets/image-18-N2AY0YpI.png",revision:"7fbe76bff1249166b06eed7f453b3455"},{url:"assets/image-2-E5XuMcaW.png",revision:"05ea34f382aec7274935aaf9cea9d6c4"},{url:"assets/image-3-lxfxCfrp.png",revision:"d4dc8c8aa38580ebcb53624313936927"},{url:"assets/image-4-1024x143-r1AdkDak.png",revision:"48c9960603158762b19ce500b291d3ca"},{url:"assets/image-5-1024x257-Ebc34T6H.png",revision:"a7107bf39605a9ae2934ed69841f03a7"},{url:"assets/image-6-1024x333-xBg4nvNU.png",revision:"7e141f1da324e1d5911cf48316d7469f"},{url:"assets/image-7-A3UB4PVN.png",revision:"88315b90a5d1b58c7ab912f814f89554"},{url:"assets/image-8-1024x484-FUvhPpZ8.png",revision:"17112dd0cb8dee9df4a02ec190e537c1"},{url:"assets/image-9-1024x435-HEkG9ILK.png",revision:"a03d62f74e00e2cb3fc2a9269dc219f9"},{url:"assets/image-Tn--NV9Q.png",revision:"8fa622832eb86cc09ba6f257414fd9ce"},{url:"assets/image1-6Fjhx_zj.png",revision:"3a9d3f2a27f31a5c0b3d20c292afb2af"},{url:"assets/image1-BAlMJleB.jpeg",revision:"8235a6fb607b8c4d1791e452db001b4b"},{url:"assets/image1-bJBZ0pkL.png",revision:"40aaac119c732b7218c2c372673ab8ed"},{url:"assets/image10-bO1AUMjh.png",revision:"77f45859d0bc211abb52870c13f794ce"},{url:"assets/image10-iLhAvEhP.jpeg",revision:"40545fdd7501a69ce06bed7db4dc8f0f"},{url:"assets/image11-MQx0qaX8.png",revision:"921c0239561e7c04b1a45681e4094bd4"},{url:"assets/image12-kPYX3u_3.png",revision:"9b71e81bcf639044b5b138b731bd49b7"},{url:"assets/image13-du6ak7nw.png",revision:"99ae177b614219e55d1eacd5feda2a3c"},{url:"assets/image14-oP2DJprQ.png",revision:"ae5bc294787b3c0e4b4ef576182704e3"},{url:"assets/image14-UXFuwDO3.jpeg",revision:"9ff29bfa03d6ce3e2218745ec6741ba3"},{url:"assets/image15-DlYLI3if.jpeg",revision:"14ed8d3bc61d06420e886064569f17f7"},{url:"assets/image15-Uq4mFIQn.png",revision:"daf9fe4c1e5687c5e2ab0aa81b92f95d"},{url:"assets/image16-YCWUyFK0.png",revision:"ef7219747866ab2ba1eeda5d61e47b9a"},{url:"assets/image17-7F4JGb2E.jpeg",revision:"ffbcd3434452db099d06fd6b6ea8990a"},{url:"assets/image17-8F3lPeMq.png",revision:"2738fb392ca991b2e3447ce5a6d5a059"},{url:"assets/image18-qgf4P8El.jpeg",revision:"485b26317f2f70a0721b65ba0d1aed27"},{url:"assets/image18-UbgSNUxV.png",revision:"a263ebd5f1540b731286af3e32abe558"},{url:"assets/image19-OCVupc78.png",revision:"1c83c4a046aa5d15922ce1bef77eb603"},{url:"assets/image19-xkgbzVNw.jpeg",revision:"999f1268eae0e63810bd6b12dfcd286a"},{url:"assets/image2-9kNPnG7_.jpeg",revision:"cd433df72e6c5ae47647bc7668c1d12d"},{url:"assets/image2-cQVqPC0N.png",revision:"f165f93417ab1d5275013bff8ead5c41"},{url:"assets/image2-ncmbwAtN.jpeg",revision:"3d21b69014dd3e52f7d63aed35a21f80"},{url:"assets/image2-puCIP2Aa.jpeg",revision:"ae4aeab8e46ed8f090570ed32e06f2e4"},{url:"assets/image20-Jpuia5Wc.png",revision:"46a7323f521bbe3f38409d24587a57d1"},{url:"assets/image20-sMhsqFof.jpeg",revision:"f0b59d151d96fc689f72462441658301"},{url:"assets/image21-bSsrLDkB.jpeg",revision:"07ff7baa74f8c29c73580e52223c53a1"},{url:"assets/image21-d2lalF_V.png",revision:"6b9270fb15a7eb7aae09ff1ecb3bb95e"},{url:"assets/image22-Rn0Ef2lx.jpeg",revision:"83b17e4de92751d826c5e7e2e680ec66"},{url:"assets/image23-b8xdYFve.jpeg",revision:"d596c1276dabc4a33d52eb8679bd5674"},{url:"assets/image23-djmm4kYz.jpeg",revision:"b610ff8bcb53f2ae9c5c80e4d24b127c"},{url:"assets/image24-uVzhkywk.jpeg",revision:"38bc96a407522dcef0406a8f16a9fa28"},{url:"assets/image24-yqO-pdxZ.png",revision:"ae8e5c82a7484c73be5e5700e18822cd"},{url:"assets/image25-FVHpj2Ac.png",revision:"c6c920c65495bb724701eb5351dde232"},{url:"assets/image26-fyeNqCV0.jpeg",revision:"d6693cba649c260f2a68fc80a9f87bc4"},{url:"assets/image27-rpxje01-.png",revision:"08f102b7007f81974fb55cf8760256e0"},{url:"assets/image28-AAba_U7P.png",revision:"42af982aa48eb79754f8239009e76faa"},{url:"assets/image28-XzrhDrhU.jpeg",revision:"fa1509ee9c3c1edeab4989b0674ec1b7"},{url:"assets/image29-eDyz4ueq.jpeg",revision:"74345258882e0cf2fac01db733816aa5"},{url:"assets/image29-yqNso8bD.png",revision:"f76516eb9d25d46d0ea0f073f2dddbf5"},{url:"assets/image3-fAP9ugQs.jpeg",revision:"3005f1d93aeca2740a71cf2f35db55e4"},{url:"assets/image3-Jxzzco2D.jpeg",revision:"1f1088a38589c785fe9075fcb6e3eff5"},{url:"assets/image3-uIzqPPMv.jpeg",revision:"32a44948f4ff53e19651649a2f7e2a5b"},{url:"assets/image30-qTcBKf7n.jpeg",revision:"965d42575743cc4f94a0337d9a096112"},{url:"assets/image30-S0N2s1FP.png",revision:"dfbe5f3af1ceb2ed170a7bee655f9acc"},{url:"assets/image31-ClOstKqs.png",revision:"8fa0435a0b78dcdc3f473654097ebe54"},{url:"assets/image31-i6z-wWh4.jpeg",revision:"36f9ee373b8c13c1e90b5db477e79b52"},{url:"assets/image32-5rxGR0Xz.png",revision:"3f8ec73f2a3ec2e5c862700b63b1ed73"},{url:"assets/image32-I7-vuVl-.jpeg",revision:"18152b38dd7f49ecff4d0a1eaa3e8093"},{url:"assets/image33-WqqQQMxS.png",revision:"ddb724a98fc6186ef2063ae4907be91b"},{url:"assets/image34--I77aB8o.png",revision:"a2a7e7ba3bd149ff48a0edb15ea718c7"},{url:"assets/image34-8Gpzvf0j.jpeg",revision:"b4a5f3ab3c45ddab5f21fd489c1861ce"},{url:"assets/image35-GcKIW6ZB.jpeg",revision:"155d771c351cd609fc5c7a5e2f0f8282"},{url:"assets/image35-o-wl3Q49.png",revision:"4832256bc6d20b6de50ffb14ee51f165"},{url:"assets/image36-666HLBk6.png",revision:"06e45fdf728001dc83e1a28f8278e691"},{url:"assets/image36-w7LH7wQd.jpeg",revision:"4bd1f77940197c343d2c14ddc4da8393"},{url:"assets/image37-zaSW9pnh.png",revision:"ccdc654fe0ab341951ad9da56fd211f3"},{url:"assets/image37-zT_pB_1b.jpeg",revision:"1feb2c658fa5229a5faab6301e701b73"},{url:"assets/image38-Pv8vRwVd.jpeg",revision:"5d8d4c86fd9a8c9d417632c15c8096e8"},{url:"assets/image38-XupIoys2.png",revision:"9535f305fecb9683b431a600867dce63"},{url:"assets/image39-_2gQNdV-.png",revision:"8b9a43a29b221dc5447d42f559304613"},{url:"assets/image39-oEuJhZOK.jpeg",revision:"45009cbe94d93633438195dd74e430fd"},{url:"assets/image4-DRFs6paZ.jpeg",revision:"645e847a1bacb377a89e4a2b19c27759"},{url:"assets/image4-UiDUe49T.jpeg",revision:"6b903b619243b7030e003f981db87b8b"},{url:"assets/image4-wZpv8ax-.jpeg",revision:"26011bf9505009273e9019cfc765de5e"},{url:"assets/image40-SdIJEvzm.jpeg",revision:"5b27f472ca46c4116eaafea4385f894e"},{url:"assets/image40-wzORGks0.png",revision:"8ccfd6957fb60f894f9d3a4dc68568e3"},{url:"assets/image41-jTUVWrwE.jpeg",revision:"21e705d79fe9985ccbc4e3138a78ec00"},{url:"assets/image41-s9nOr_AW.png",revision:"562b36ced783e5dc6ab392973a7043b7"},{url:"assets/image42-XClEGlJp.png",revision:"02e85352aed35deebe312bc86db0203d"},{url:"assets/image42-yNYlX8fz.jpeg",revision:"a531e78a1d28f05e1f0438df58403691"},{url:"assets/image43-LoeOtrqz.png",revision:"6e50958f53eb9c5b2cc13a85b616a065"},{url:"assets/image44-IGm-aJZi.png",revision:"f6e2e712c077a2f4918180aabcd582fe"},{url:"assets/image45-n9U3aXb9.jpeg",revision:"315d1c97dc73482cc9373c12070ca25b"},{url:"assets/image46-aQAaQJ7T.png",revision:"6cf01f3ef3adc45dff32c3986a5efe1e"},{url:"assets/image46-sx_87zP8.jpeg",revision:"bf3e8f494ae7f1b4a5dfda48231d7419"},{url:"assets/image47-fy3e6xVe.png",revision:"dd0194ba6b962a8856f4e9ad0ad7bfb5"},{url:"assets/image47-wBXkt7Hw.jpeg",revision:"4f64e744cd995b612deb3cac1c5f209e"},{url:"assets/image48-j1D_M810.jpeg",revision:"286dca8547acbd5444dfb842b73daa74"},{url:"assets/image48-KSI9TtFQ.png",revision:"ea268da19ede1ed4b42f5e844312ef52"},{url:"assets/image49-HlJhspDL.png",revision:"857dde3604cdb81a28aa91d0defb1c23"},{url:"assets/image5-2K8STqff.jpeg",revision:"b31d007edf94462445ca42f7c0a5d2a6"},{url:"assets/image5-LasjrymB.jpeg",revision:"d2bcd6795b53f8df2905a366414bec82"},{url:"assets/image5-ltQRRJZL.png",revision:"69103437d485a9661164ef8146dbf8ba"},{url:"assets/image5-nu8ECIhb.jpeg",revision:"43dae6d9cdb272746cd52f7a45841b45"},{url:"assets/image50-gRxKrinX.jpeg",revision:"43d00e896004917ced35701d09eebd98"},{url:"assets/image51-Q8qUZ4N1.jpeg",revision:"824a6ddd10a995d8f88eef1582ea77bf"},{url:"assets/image52-B0Mf3Tf4.jpeg",revision:"33b218ca1fa960d5604fe0098f27eea1"},{url:"assets/image53-xWmeCqly.jpeg",revision:"5a752b06ebe6cd4db762e90aa76fa680"},{url:"assets/image54-CRTw9ewM.jpeg",revision:"f2654e7cc580df0b4d64690006677b05"},{url:"assets/image55-gZrK6Mq8.jpeg",revision:"44e22cb4eb959acf6a211fcbbc848a1a"},{url:"assets/image56-HZl-UlmQ.jpeg",revision:"164f48a306c68fee81fab939a0cc0d00"},{url:"assets/image57-PjlK7WRC.jpeg",revision:"f91f5d3fb2e8759daa3e356485ff85c1"},{url:"assets/image58-p824Kebg.jpeg",revision:"5ec34a83a7afe903853d6ea829c6347d"},{url:"assets/image59-IMrkSnML.jpeg",revision:"2428f29c19145b3c2770b9f914b5bfec"},{url:"assets/image6-2epYrBsD.png",revision:"e394cbfd1151aa7ba1936940258c7817"},{url:"assets/image6-4cYa-6Nk.jpeg",revision:"d69760aa1696c38b8d93bb867f9eff34"},{url:"assets/image6-p8MZpc0y.jpeg",revision:"6f772320176c69ff1258634bcc910d14"},{url:"assets/image6-vo_42VAg.jpeg",revision:"167b3b62f21a59a693de55f3402961c7"},{url:"assets/image60-Qg9sBUAE.jpeg",revision:"6cfb352158aa0c876eef6ea123e9410c"},{url:"assets/image61-WykWbjBb.jpeg",revision:"cebaa1d51267660421a09de64e0c907b"},{url:"assets/image62-sGCpUaai.jpeg",revision:"d1540ef6fd0278e0102e4cfa0c79b22b"},{url:"assets/image64-DzkcnLzf.jpeg",revision:"3157f670d63595f9f0858f0cbf4e9304"},{url:"assets/image65-Q1qf9ytS.jpeg",revision:"cdf78e05add5ae088d147cb1c9eca15a"},{url:"assets/image67-eZmwTQtV.jpeg",revision:"9d33339be6af37b3472fd94920aef597"},{url:"assets/image68-R-KjoHsS.jpeg",revision:"4ec1bad98713cfb2670811b8199217d0"},{url:"assets/image7-1LZ5K7Ow.png",revision:"0d3498f2659575aa00c3edb13fe7981f"},{url:"assets/image7-fTrFkX8i.jpeg",revision:"e9cb0f7bc800d01f873f6205bf162a8a"},{url:"assets/image8-8p-TehjD.jpeg",revision:"9786ab6b1563010cea21391aa9225d5a"},{url:"assets/image8-odgYWEnu.png",revision:"448e52cc8ee0c55c72d314be1de0714f"},{url:"assets/image9-pl_ZtQAo.jpeg",revision:"131be173e296727a83506b7347c3faf6"},{url:"assets/IMG_20210123_205049-cPc0bUDM.jpg",revision:"50b3774914c541b0bf82c53bbf7babd6"},{url:"assets/IMG_20210126_195515-j5iDfCtq.jpg",revision:"6e5798e838b6316c0d63516bf2217f14"},{url:"assets/IMG_20210126_195546-M6kBcnJJ.jpg",revision:"64da6a297e623bba762e4611a17e307b"},{url:"assets/IMG_20210126_195856-18hfvpFY.jpg",revision:"50b26fe4593d88ec4236396acf71ccac"},{url:"assets/IMG_20210126_195932-nD6GLouo.jpg",revision:"cc16b5b6cc7b5d3b418cb6ef3b59f00c"},{url:"assets/IMG_20210126_200439_edit_7106211807769-r72WW1j6.jpg",revision:"679c984e3cc616f2a894b628a7da95b0"},{url:"assets/IMG_20210126_205402-YGDH55As.jpg",revision:"5b5d2cc105685e7f0fc1ad80559701cc"},{url:"assets/IMG_20210126_205908-ncwgn3B3.jpg",revision:"73ed6cb55530f8bd19980029946ca663"},{url:"assets/IMG_20210126_210458-maa6HknS.jpg",revision:"2062dad8c05bf3a6dd2ac50c61f734a6"},{url:"assets/IMG_20210126_210550-oND9JUxH.jpg",revision:"b0ee9b5ac13f8c02b4bf84f11bef0e73"},{url:"assets/IMG_20210126_210622-FpsRcWyI.jpg",revision:"042c5b47ddbb72825795dfe663af5eec"},{url:"assets/IMG_20210126_211345-SA56pTHu.jpg",revision:"589c64df659620fda62d9d557cdd4680"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index-wx.html-plypHLC-.js",revision:"0533e883a5117a15b079d062f2a186d5"},{url:"assets/index.html-_Yrvqf4E.js",revision:"85da7b744c7d46a95a8693eff12964bb"},{url:"assets/index.html--vIiSDxn.js",revision:"e8089aaea8cda169f2b34fb0add7cc40"},{url:"assets/index.html-2H_v7hfC.js",revision:"8d5684caf4fe7727414e2b1c820a6dc4"},{url:"assets/index.html-317U07oz.js",revision:"219765637488c92516f18fb90a7d0156"},{url:"assets/index.html-3LgI9Q5X.js",revision:"97165b004dcf123e8eaef05481bc8986"},{url:"assets/index.html-5-_E-wnT.js",revision:"7ea9173d76ea808d1bccdf82facc715e"},{url:"assets/index.html-6aG1M2L5.js",revision:"fd1d76446670b5a52e8ff7edcad9b1d9"},{url:"assets/index.html-aKes91u9.js",revision:"2ba67083eae23c259ed044063c596adb"},{url:"assets/index.html-aNUtkDpg.js",revision:"994bfde26861dedaa450f41ec8b9e4e7"},{url:"assets/index.html-aSmFtwz3.js",revision:"ecc43788f9afe6e553d3dce597be72a8"},{url:"assets/index.html-aupmhpgO.js",revision:"964cd0d02c3a1492852e0755c77d31cd"},{url:"assets/index.html-BahB4EF3.js",revision:"457893c57d4f4ae75b88290fea8b5b75"},{url:"assets/index.html-bSpe5HsO.js",revision:"37f44a33131db97319b0aa34262c65f8"},{url:"assets/index.html-cC2us4N3.js",revision:"096f21e3d442efa752804763b9fb811c"},{url:"assets/index.html-cSmyemlJ.js",revision:"9949932ed752d44397524057fa93701e"},{url:"assets/index.html-d0XQOT64.js",revision:"32052893b5d6afbcb5f9b6d886aa08cd"},{url:"assets/index.html-dY1Stgcd.js",revision:"c985037d98d3f0621d2df8d59af95bbb"},{url:"assets/index.html-elQClPtM.js",revision:"d1a47c06a146cce6494444c8ee511c18"},{url:"assets/index.html-ER46NLvj.js",revision:"8123c6e1c07f03202e500325e81fa217"},{url:"assets/index.html-fw6bm7uM.js",revision:"edefdfeb9f3a945bed8af49dec920324"},{url:"assets/index.html-GhKxxnNy.js",revision:"1641c9a5620a140c07957b81de135755"},{url:"assets/index.html-gtHaH2Ae.js",revision:"711cf75584cab64436fa660b37735741"},{url:"assets/index.html-I_vuPdwO.js",revision:"198e008c792760c951f02f7c4b3e1901"},{url:"assets/index.html-iiYQQDa-.js",revision:"e6e435c8ae700dcc219e63166a3f56b5"},{url:"assets/index.html-JPqwimbN.js",revision:"b150cb06889327e428f4a7d548c06673"},{url:"assets/index.html-kohnQjuV.js",revision:"5a8a954e217a1f0639b905ff98a68502"},{url:"assets/index.html-LIEMrp0i.js",revision:"b09e1083b53ae4ac1988628f89a40bfd"},{url:"assets/index.html-lOe2s54J.js",revision:"7aa46811548d0f831148eba75aa9c659"},{url:"assets/index.html-LZz2x4lE.js",revision:"482fc382e62e5414ebb17b7a16811434"},{url:"assets/index.html-moBAp1iY.js",revision:"5b954aa397ce3620bfbd399fb29b63a8"},{url:"assets/index.html-MqleogDK.js",revision:"9c7dc1283ba0b8c31cd0aa5a7e291b42"},{url:"assets/index.html-MtOGlrn3.js",revision:"803fb76b80e890b8cfd448de8f34d01d"},{url:"assets/index.html-nlNn1f3f.js",revision:"0d99906b20bc7f83b26a2aca4f993672"},{url:"assets/index.html-S7srqPVU.js",revision:"ce663beecb544932aaeec41a4f14d60a"},{url:"assets/index.html-STugj8N_.js",revision:"f86510ff173cd480d85febc5e55b59f6"},{url:"assets/index.html-TSmm3-Aa.js",revision:"5961c78c0f9155e26abb227c010d395d"},{url:"assets/index.html-u76XlZk4.js",revision:"01b21d453fd87eda28939ca1e68f6be0"},{url:"assets/index.html-V8JqSS3F.js",revision:"4f414ec73d1ef779935b91f1597972bf"},{url:"assets/index.html-VMIYO9pI.js",revision:"227198b6d80d51a85c4cbbe7549a4471"},{url:"assets/index.html-xgUP4kAz.js",revision:"5ce19bfb6487534d1e78cad8ec3cefe5"},{url:"assets/index.html-YCNLw5IJ.js",revision:"9e0fdeb19af36fb6e4cdd2b40e8ae712"},{url:"assets/index.html-YMb95JFn.js",revision:"eaf5b3f1ebbd563a6e97078b365f73b7"},{url:"assets/index.html-Yq9-vXgu.js",revision:"64c726afb4f9a6dae8a03e8790e45ade"},{url:"assets/index.html-YTS0QE2K.js",revision:"da7437091ef78c9b193a8288ac471545"},{url:"assets/index.html-yuA5Sz9c.js",revision:"13a35ac36e3849e384c34476f0db1017"},{url:"assets/index.html-yV5eYdDx.js",revision:"7f0779ec9bdcae455f096da6172d315c"},{url:"assets/index.html-z2imfTZR.js",revision:"42425ad4630e51c6688b19d3e8d5f3f0"},{url:"assets/index.html-zFozv9_H.js",revision:"c3198f6f36fc4f0c1fa219df46650de0"},{url:"assets/info-on-study.html-zAB22uQv.js",revision:"b2294737f1031d46d8685879b2b8ce0f"},{url:"assets/innovative-project.html-WIq_EsQH.js",revision:"d692eb269c4eecde9de9bd8816d3e553"},{url:"assets/interior-KIYZNKgg.jpg",revision:"e8186b41f73e27f8554f9988ead92470"},{url:"assets/ios-yMidMOnr.png",revision:"6e324d4040e2d29fcc549444a2add317"},{url:"assets/major-overview-rA60NGfB.png",revision:"69f3f2bd127892b13703668e936b73aa"},{url:"assets/matlab-6g9-imFB.png",revision:"6a9a3ca471ac2e10c6f3d350d1bd8e8d"},{url:"assets/matlab1-7dEAoyTc.png",revision:"018a0124c9d67f0fe8c543dda354a7f7"},{url:"assets/matlab2-dVpy0Rho.png",revision:"85b350811cd6417c96ee3d74c78998fa"},{url:"assets/paper-tools.html-WXhEj242.js",revision:"a34df914c81e32e31c37107344c7c893"},{url:"assets/pms-p1-HqscRncN.png",revision:"12c730374f927c65fb768448b6e989bc"},{url:"assets/pms-p2-OzA2_Nu_.png",revision:"12d975d67dd7cdb7bea9e4189222858c"},{url:"assets/pms-p3-lnwKkcsW.png",revision:"11e3f07b95aa8f46f1fab215964ab121"},{url:"assets/pms-p4-G4KBqnVq.png",revision:"67a1db118a754ad93762668b411a3865"},{url:"assets/pms-p6-BZrD9Ugs.png",revision:"2d9b9cf817025086eb32b742e2770c1c"},{url:"assets/pms-p7-DY-A_oFG.png",revision:"9279b34c1880a78f5e7c63c6c620ea66"},{url:"assets/pms-p8-pPNg_pVJ.png",revision:"dc5ff77c7232225de4f72cd986547755"},{url:"assets/print-1-3wmHB-f5.jpeg",revision:"8902bf97cbc83b9f2a3158d11b1eda0e"},{url:"assets/print-2-m8eNSzoT.jpeg",revision:"e9461c36834331858f4b0a2ad3c4a700"},{url:"assets/print-3-ipovTwCB.jpeg",revision:"9838ff941e662f46b79806025aa25b7b"},{url:"assets/print-4-4uTQn0p0.jpeg",revision:"5c5882e8656470e0dbd8d53f638a964b"},{url:"assets/print-5-jT5e6jii.jpeg",revision:"b5a75bea7870bd0f6aec19c11de265f0"},{url:"assets/print-6kGhpibK.png",revision:"ed9d4bc42a8226325e3849a683d8a984"},{url:"assets/reader-service-6d9pxofn.png",revision:"0c0368aaf3a1423f0441e1f2728d0d9d"},{url:"assets/redirect.html-NJ4Dw2G-.js",revision:"f23058f5d16e0ac5ff39571ae7957ef6"},{url:"assets/registered-organization-2019.html-vfiNQ4Nq.js",revision:"6e1fcb1d1f1956230daf6b55d6e4ea7a"},{url:"assets/registered-organization-2020.html-WaruiWoY.js",revision:"cceebd093d9223579ca293957e543c74"},{url:"assets/registered-organization-2021.html-0xwMi7G9.js",revision:"842f9752fb08fde3ad6f1f4f890644f3"},{url:"assets/sakai-1-gdIu9juD.png",revision:"9434888c9903637674a80eb1acd56248"},{url:"assets/sakai-2-ZZGlPs7t.png",revision:"b1ee04633413694907cfd5ddd1b8061a"},{url:"assets/sakai-3-yJEYBaFd.png",revision:"675e389c8d6a658aca6f0e363ce88557"},{url:"assets/sakai-4-NMHOlmrU.png",revision:"000dd5749f386829df97c37217d9ce86"},{url:"assets/sakai-5-cj7Fmjqo.png",revision:"f244a3a419620ac52ea8a1e63e14ff8f"},{url:"assets/scan-2-0-KFLwn75T.jpeg",revision:"1bf9e6b7f13351ecb87300c17f04ced5"},{url:"assets/scan-2-1-5nSBK4Tj.jpeg",revision:"303453b48a1feb7e2d35ed91e191d23e"},{url:"assets/scan-2-4-SitOkdDi.jpeg",revision:"712fafef765953fb853a0cbd450576a5"},{url:"assets/schedule-2gA_GM7X.png",revision:"abad98f699a0ee9a82c7c5eff0d3ac6f"},{url:"assets/Screenshot_20210128_114248_com.MobileTicket-1oAQbIdG.jpg",revision:"b64a9636ad938d85cb54a89e599c7c36"},{url:"assets/send-receive-email-by-proxy.html-_DGCfO47.js",revision:"6ffc32528b4231ae152a0ccab66f575b"},{url:"assets/streetview-TzWISs--.svg",revision:"1827283dd10029f62907c30200d911b5"},{url:"assets/style-v3804vm3.css",revision:"8a5ed758deee63208b122dc7304aaf66"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/unifound-1-H9l9OSVW.jpeg",revision:"4fc26bc067ff1b178e7c9f6d0e9fd22f"},{url:"assets/unifound-2-NKKRBwHt.jpeg",revision:"f8330e2761ddaa20d77c26dec687c213"},{url:"assets/unifound-3-NG1hd-77.jpeg",revision:"e57013fa465673457e84fd49f63b9b9d"},{url:"assets/unifound-5-x_jt3FzV.jpeg",revision:"aae7e2e80661c5e94c074a86a74994bb"},{url:"assets/unifound-6-olNh-qAZ.jpeg",revision:"ef5f24ab859fb25b31843238882bb53d"},{url:"assets/unifound-7-NcPipp4R.jpeg",revision:"22b69a1fae5b8174bcd3da791b61ba4f"},{url:"assets/unifound-8-Bp45vDhW.jpeg",revision:"3855edb91e2079cc340263fdbfeeebc5"},{url:"assets/unifound-9-Fnq6Wd7h.jpeg",revision:"fc160ae6b837df0d5ae448f5d826724b"},{url:"assets/unifound-home-KwZl9eOQ.png",revision:"0e1673b82b15322a2296223af80247f4"},{url:"assets/vehicle-charger.html-oo0biMXj.js",revision:"57a4c830156756d3f5c4e720a7f3b8f8"},{url:"assets/workday.html-0nGJOZ7P.js",revision:"9bcb99ec052a5a33da067ce31ae93058"},{url:"assets/新生攻略之学习篇.html-5ofBXRi3.js",revision:"a6cccfa0c0c9688442d956311a9d073c"},{url:"assets/新生攻略之宿舍生活篇.html-YTsGnCBK.js",revision:"29d4033cb02a305d286de431b04282ef"},{url:"assets/新生攻略之校内介绍篇.html-vQ92hYZo.js",revision:"fedafbb4db4ae85c8771be907fceb4ad"},{url:"assets/新生攻略之社团篇.html-9A8DpT7j.js",revision:"419901dc1769147686d3a61125cf4bf0"},{url:"baidu_verify_yQSeRkHJla.html",revision:"e34a6f863c56b8f0ccc227edb4e462b0"},{url:"calendar/2018-2019.html",revision:"4004974fe7ca4cd8b14b1c2b76ad54d1"},{url:"calendar/2019-2020.html",revision:"fc4290ca82093623e02006bb51d78a45"},{url:"calendar/2020-2021.html",revision:"eff4fe2a637ebf9f2e0200965b65070b"},{url:"calendar/2021-2022.html",revision:"3e0cd83bba3db92ec19946db0ac2f560"},{url:"calendar/2021fall.html",revision:"029b8f798f51318e532f1cae89265276"},{url:"calendar/2022-2023.html",revision:"998805c7eb3eb68e7b7b5d0760e4b1c0"},{url:"calendar/2023-2024.html",revision:"024568b2651b3917010252b9cd99e262"},{url:"calendar/index.html",revision:"8acff7dc616ab86891561f4c8ea5950b"},{url:"canteen/canteen-wx.html",revision:"0d237d5c9bc3bf6a0831c487326e6c9f"},{url:"canteen/index.html",revision:"e2be8f8c4c92b17439ee8f622609fc18"},{url:"contact/index.html",revision:"f9997c687742c9df23e9e4a903cc0618"},{url:"emergency/index.html",revision:"2e1cf5bfb243665a0fc20141b4e6bd21"},{url:"facility/building-11-elevator.html",revision:"d1ceb40dccd33f686e4824aaafbae30a"},{url:"facility/index.html",revision:"cbd039c931759bd0c54c67c0223ade9b"},{url:"facility/panolens/index.html",revision:"74e373e78d97d4ffe080837d41191505"},{url:"if-you-are-a-freshman/2021.html",revision:"617f1a5f72b50bb0c8dd0c8bc3fdbc20"},{url:"if-you-are-a-freshman/index.html",revision:"ac428f6d087ecc3d005a5aab72208dd9"},{url:"if-you-are-a-freshman/preview/index.html",revision:"cc7e9df9a2bb91d34b67905afc2eb428"},{url:"index-wx.html",revision:"789dddc9f4b867f2a3f38bd930148185"},{url:"index.html",revision:"10a4086432803e0a8921eb847595aee1"},{url:"life/by-zhicheng-college/新生攻略之宿舍生活篇.html",revision:"edae489436b03c5816c5ea49887cec47"},{url:"life/by-zhicheng-college/新生攻略之校内介绍篇.html",revision:"7f009b67527f93c9ec7cd09b5402093e"},{url:"life/by-zhicheng-college/新生攻略之社团篇.html",revision:"0ec2240936d6b4b50153549e93834aea"},{url:"life/catering/index.html",revision:"318df0bfeb980f13de53893c9acc9cdf"},{url:"life/dormitory/dorm-floor-plan.html",revision:"84b07199c647444ec4b00fdfedf79c91"},{url:"life/dormitory/index.html",revision:"af0cc5cd5ea93853ba6fa8ea3be6ea43"},{url:"life/freshman-register/index.html",revision:"6368c7eea53544c10b3f779bd9078978"},{url:"life/index.html",revision:"d949c992b3e538215df7c08a270f4b3f"},{url:"life/sports-facility/index.html",revision:"8c6f090b6af213ab09181b39c9e6ef7f"},{url:"life/vehicle-charger.html",revision:"1cc18af307146386dfbcb4d6b0935a40"},{url:"logo-assets/touch/homescreen144.png",revision:"51742628b96a4d2c587eab560373962b"},{url:"logo-assets/touch/homescreen168.png",revision:"741edd656b98963d2ef2881ff00a7610"},{url:"logo-assets/touch/homescreen192.png",revision:"7182aab7d4c78e800943f2c59e57e5a0"},{url:"logo-assets/touch/homescreen48.png",revision:"34bcad7cabc11efd8a6859f4cc6d2526"},{url:"logo-assets/touch/homescreen512.png",revision:"0206c3548fcda8dd59055f45eb2f3f35"},{url:"logo-assets/touch/homescreen72.png",revision:"e93cd5bbf2dc0ad83e2e37938d0120ee"},{url:"logo-assets/touch/homescreen96.png",revision:"cd04040f900f20c8a4e2e204218a1c57"},{url:"media/index.html",revision:"3176ddc246b1b96b1ee37caf78a15ea5"},{url:"miniapp/index.html",revision:"40d99ae4b8d7acc21959318281a78b97"},{url:"news/index.html",revision:"8b6bf836dc3f63e016d248dc059d738f"},{url:"organizations/index.html",revision:"ba47bd97f55481d6e76e00b1995423c0"},{url:"organizations/registered-organization-2019.html",revision:"dcefa665b7d4b2e87dfc46186a490bc0"},{url:"organizations/registered-organization-2020.html",revision:"2688e8183a456f530328a364f2e25849"},{url:"organizations/registered-organization-2021.html",revision:"76680b039f3b521a9432fe81543e29df"},{url:"qr-code.jpg",revision:"ccaefe4a0f839087e7ded77788a6e2df"},{url:"service/blackboard/retrive-ics-url/index.html",revision:"bf045cd95236a2c525a69cf6720198c2"},{url:"service/campus-card/index.html",revision:"f9a65e500c1ce9c238e26f1657742111"},{url:"service/email/index.html",revision:"587eb58828baaf878278c33d7445b00c"},{url:"service/email/send-receive-email-by-proxy.html",revision:"b971cd118ebf0b39b1774926b187101a"},{url:"service/index.html",revision:"f499ea9b027e92f73bc86b844839893d"},{url:"service/mail-and-express/index.html",revision:"d79eafdbbccebbaa4a0ed5980e588806"},{url:"service/matlab/index.html",revision:"23d359404f161026600c4e8b9ae0a7f4"},{url:"service/medical-treatment/index.html",revision:"17457bede457a6e16b81aa24467db038"},{url:"service/network/apply-for-vpn/index.html",revision:"92bbe69540f22b9e4485a0e85e1c53ac"},{url:"service/network/choose-a-pad/index.html",revision:"eb8b53d778797193a22122a57594c942"},{url:"service/network/choose-a-router/index.html",revision:"90bcf109526461f1581913be69005c35"},{url:"service/network/eduroam/index.html",revision:"302c9097e8a0a71b0e9ff49a7ec25f27"},{url:"service/network/index.html",revision:"2f5349f797f75aa55e276123687d897f"},{url:"service/network/ipv6/index.html",revision:"3c24ff48bd3aafc5327e0b94a0557e69"},{url:"service/network/remote-desktop/index.html",revision:"4d1f14ec97e9cfda7e9776dbb491af40"},{url:"service/network/use-vpn/index.html",revision:"4a1d37b6e803753a62c0dbee72b73418"},{url:"service/sakai/index.html",revision:"5bcad106b9a9eee435e2ee37cee40675"},{url:"service/sid/index.html",revision:"172e13159a28d8b2daaea0275987b059"},{url:"service/ssc/index.html",revision:"f756f7d7642b4e062bf9ae19bb1728ec"},{url:"service/student-train-ticket/index.html",revision:"370069a3da9bf689cf905bb353cf72bd"},{url:"service/tax/index.html",revision:"c88ae19cea10114b9b5bc6fe9651cc03"},{url:"service/unifound/index.html",revision:"9b80447a4367bb71a1f28158fd033cce"},{url:"service/work-wechat/index.html",revision:"0f98ec47220bd5d95f9b1af96cfc4761"},{url:"site-help/adt.html",revision:"f8e73d3e134b401e291adb0ee5c5e3f1"},{url:"site-help/index.html",revision:"251f1b2534f650589a23f199e113dda8"},{url:"study/book-list-by-prof-yuan/2018/index.html",revision:"f5058dca446490fe6b18b2b625c246fd"},{url:"study/borrow-books/index.html",revision:"3e5085706f2130f18e71abd8803ed2d5"},{url:"study/by-shude-college/advice-on-study.html",revision:"98dbbd33d81bce282376a2d0cb5369f1"},{url:"study/by-shude-college/info-on-study.html",revision:"53c3acc2cf12ed64308a9cf715c09ba9"},{url:"study/by-zhicheng-college/新生攻略之学习篇.html",revision:"016290e4e6c36bab79cc6a01bfab5de8"},{url:"study/cse/innovative-project.html",revision:"f247d7aaa0524585c1c4fdfcc878bce0"},{url:"study/index.html",revision:"6bda2126c7886bbcaa1db62bd44b90e2"},{url:"study/paper-tools.html",revision:"74d9ee3763b892284c42a5e88522fe8a"},{url:"surroundings/index.html",revision:"201e7e10f151ee57f3a83549cb2a1749"},{url:"transport/bustimer-old.html",revision:"cb98d19bd464688ba34afbb3c04936f5"},{url:"transport/bustimer-wx.html",revision:"c70546532c46ad9c4ccceaeab06c1aea"},{url:"transport/bustimer.html",revision:"88cddacac59950589860398d99ee145d"},{url:"transport/holiday.html",revision:"71854523a07abc253bfca50f91068f32"},{url:"transport/index.html",revision:"465c40a3550cc5ef9112966c81a071bd"},{url:"transport/redirect.html",revision:"dc2b71110d985c8cd3caee19be84528f"},{url:"transport/workday.html",revision:"34f1b0a0e5ae7314bf8a1151ac1b5e3a"},{url:"wx_helper.js",revision:"ae5796a0770fb4529273541aec77ad1d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute((({url:e})=>"https://sustech.online"===e.origin),new e.NetworkFirst({cacheName:"web-cache",networkTimeoutSeconds:5,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({request:e})=>"image"===e.destination),new e.StaleWhileRevalidate({cacheName:"images-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.initialize({})}));
