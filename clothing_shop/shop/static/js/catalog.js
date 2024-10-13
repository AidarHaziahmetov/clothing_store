const products = [
    {
        name: "Куртка осень",
        price: "5 490 ₽",
        images: [
            "https://sun9-5.userapi.com/s/v1/ig2/6wf5pwqw5_rSsLZ6or3tpdf9dry93yB9RjagDj5DGxZN8WSU_j0aNvyV_wyu69-jRvLT32lECR2h9hNEiQSt0dRc.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=BtSKtbu5s0ZwQJFIIcM_1Zy3T4gHmSJfLktZm6JXA9c&cs=510x680",
            "https://sun9-32.userapi.com/s/v1/ig2/sqYbwZiT6kkj2a2pEpmuExCxY9mAmT1qvWmgqQ_3zpaLF-Z9J9-K4zmiKwaey7gskuyO9jf_sHt49IFIBhcIswp6.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=_nWzDQpwz9KbWCiI1LRfzv1gOrlAQmZ3DlbXg8fG0h0&cs=510x680"
        ]
    },
    {
        name: "Куртка осень",
        price: "5 690 ₽",
        images: [
            "https://sun9-40.userapi.com/s/v1/ig2/k3c_9vV4IPSsT_b0YaJ6H-QnyZuRMM-X4e-vIhEEezhEkZ0NH6-nAm2paBH8xs8_vZllFiS73QXZ2pRUEsuJYWI2.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=04wtp20UgFMYmSRUncYkKKPNRlfygtZPTeVAyBSEZkY&cs=510x680",
            "https://sun9-62.userapi.com/s/v1/ig2/MJNGwM5Q70-OH5l-gYAArgOc6AoM5I24J1EfEreMCpiQM4Yj1XZCKQoo7HmgcYV5VyJhMuxGHm57rzuyaHD3zpF8.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=d9Iq_mKRuwbri1j1yc_cn8eECEeDfsVysjYP3f_a9C8&cs=510x680",
            "https://sun9-76.userapi.com/s/v1/ig2/GnXx2dczb0mon7SieoEOgemP1j17ulO3_uSI5DfpWTKV8qxaLWR4Hd9nSnKl1mtrXhX9t7yJ94piHro9iHjNFP96.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=o5IpPyUivQEXEb3looBiAlNiMYNTkfR5G2aoW0TnDvw&cs=510x680",
            "https://sun9-16.userapi.com/s/v1/ig2/5WnLvRxSJaoLIFYwt2EItHRnPyqFHuYLu9NUXxN5W7lCp_-jbbRLbya4C0AG81WuKIacnfmBOXhO4bF3Y6_ODpY2.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=1D0dsQzjbr5VdapzcQ3nbklIZoKW0vnhndMw5-FK-YY&cs=510x680"
        ]
    },
    {
        name: "Пальто",
        price: "2 632 ₽",
        images: [
            "https://sun9-76.userapi.com/s/v1/ig2/Qqw9ZlCEgSH36wPLpNealqMCw9R9XQAlCECJBWTYZczeyBt7CaEp0NJO810vX6QGN3r1NAHTim5daXfXTP2y-R0R.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&u=1V9g88DDOidBserFmnkd-YjHEyacQZ7bg8bqF2_J-o4&cs=510x510",
            "https://sun9-68.userapi.com/s/v1/ig2/mw7aGi9bokTs8jakSM5UlBLYsWEQ9JcGGc_k0fzydsd_17tdFomCVJGOHG7o3HgVz2j9pg6v_3m6-xpRMbySNAp1.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&u=ksdLqOiYy9VSgbkxQ6Y4ammwzhm2Mb416xE1odtSyxg&cs=510x680",
            "https://sun9-77.userapi.com/s/v1/ig2/FwpvGX-NSUYP3ZqJ5Tvv0yePMy6qXv_1sYvznafKDPZihFDiV43Uq1U-X0bd7qn2JfoppVTjf8ehzYrLyR6WmIuM.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&u=NhO3ZxdyJcodDrG3sdyUDxBgCSOrtZDvO4cxkO5qrJw&cs=510x680"
        ]
    },
    {
        name: "Брюки ",
        price: "2 511 ₽",
        images: [
            "https://sun9-11.userapi.com/s/v1/ig2/8wIKwQgrQkLSPo0tzP5eAOvkMeA2PMsb92-tOnsxQqFG81feJS50sb3HLEMa4td57x456CgWxn4ecqy7k66TDndP.jpg?quality=95&as=32x50,48x75,72x112,108x168,160x250,240x374,360x561,480x749,540x842,640x998,720x1123,1006x1569&from=bu&u=OZws8yFmYTcELZHE7z9_h_mTUXTS8ac9fT77pdIwyLw&cs=510x795",
            "https://sun9-24.userapi.com/s/v1/ig2/rpONhAhB84zN7ESKYgTp-4silu2VZn6GNQnBHQ85onvmHfxlRLl2Y2C7Q2kZacSnXmeo7topXq6FqOXs7-91tL9G.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=j3iD6HqhHcJ2enhcQBWDP_RPSBM80Qpmu5FaFnf3EAg&cs=510x680"
        ]
    },
    {
        name: "Рубашка",
        price: "1 690 ₽",
        images: [
            "https://sun9-73.userapi.com/s/v1/ig2/chqpfUH6A7uyAlq6R-sszoJSjEa9u_1nH06gybf1HUtmDBPkvgHtvUKk3fpeQPb0KEzVQM6koM7AmULUAuw79rwC.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=swY6pA1NYReE_AXwRV4aUPDsK_GafkdZywwHUVs84Bc&cs=510x680",
            "https://sun9-19.userapi.com/s/v1/ig2/IIT3wfhE15IsJ1u6nOugqy0y9suE4vZs3Nsz6frEzW13f6ZpbR2dvagM0ssKhzy8IGbVGGI_K7JHrOrFWrRCy5cU.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=0oRT02IG9kH7gbtUlWTwiGuxjdrP8fVOMUC4L2RIfwE&cs=510x680",
            "https://sun9-39.userapi.com/s/v1/ig2/MG_RQyedYK8NORANYO3d1MZn_48Tqd5sLl09G81bpnmJysDQZ4-8hzyMesmpXeg5ytmQ3-N1JDEM-SRGxU_imAFi.jpg?quality=95&as=32x63,48x94,72x142,108x212,160x315,240x472,360x708,480x944,540x1062,640x1259,720x1416,1080x2124,1169x2299&from=bu&u=dEec5C17Mp28HVRwL8yvv5bdlXBquUhsz2BT10Bk-8c&cs=510x900"
        ]
    },
    {
        name: "Брюки",
        price: "2 190 ₽",
        images: [
            "https://sun9-77.userapi.com/s/v1/ig2/pUVxkgKD_H_UBVolm8aKkBTwtkBtJini8Zjc4eRCsNkQZfGCeBf-FHKRylfb_J5FtfCrBE2VLh8_62XJR2IYIsvb.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=_5_Vtd6tRfyCo4-FbhnM9sm_-_uLPCBIUzGlET9xArI&cs=510x680",
            "https://sun9-77.userapi.com/s/v1/ig2/CSuqDIIeC2Gwx5g0iV0GmnW808T5IUEXdcyQ__NlX6qCiZuW9PIzJshnXJtDbHdHimkg3WTbi-vWh52Jpc87yAOB.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=cCIEM8uuU-aLBsyz37SD4dlPAx1uAdS8euZ4ma9fxik&cs=510x680",
            "https://sun9-8.userapi.com/s/v1/ig2/Nq-BIJ3adVnK01l4DSeF2EnWSryy7Gv2eH9mIJapA8AZ1tHM1z4hgahyFMOmbVEM7Stu_fMkWUCxk609d4aR2paD.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=bbxPthT-W1OWV4H2b7BEyUQMc2FL91buEww0vUzicJ8&cs=510x680",
            "https://sun9-44.userapi.com/s/v1/ig2/pw2u7UlpKK0Dw5aheP5CIAi1SFPsk6BLadK9lXGJtd7NLuj7yKdooKh9T8uGcAWcuNUL8h_TQSQEDk57j56EzCM1.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1170x1170&from=bu&u=eKErk92A_QHbnOiyPCdlJICXjeLO8cNttBUu0EQs5_Y&cs=510x510"
        ]
    },
    {
        name: "Свитер",
        price: "1 791 ₽",
        images: [
            "https://sun9-65.userapi.com/s/v1/ig2/16yn8oYcL-vjoDuvgYM6B8fdPWj_JJGt68GSlH-VbwT0SQDezGppOSX6HqtEj1uOYIraO9mIpRpWcKWrVAf9k_DP.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&u=xM0YdU-RgXS-FYWbR1lJ0Gs7TRNlqZCGXSpyhga4NQk&cs=510x680",
            "https://sun9-52.userapi.com/s/v1/ig2/50ofQ-yVXot8PUsNBCkOZXtLnZwyjr1oyeN5x1MIViG064tRXdbJksYA2NXZuQuhC0Q10-vmESAnera4i7t4KRW4.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&u=1yS4Z3XXDH_MxAem1YEqKrPsBOre0NnJzeYDMG8z4D0&cs=510x680"
        ]
    },
    {
        name: "Брюки",
        price: "2 601 ₽",
        images: [
            "https://sun9-23.userapi.com/s/v1/ig2/1cw98AWzcQsj63a0pEPv3R4ahBaS7QW_pWL9TmaU4ilXVXke-ezp8jij4JL5q3ALT_K4tz1gi7-olfu0bXO2--DS.jpg?quality=95&as=32x44,48x66,72x99,108x149,160x221,240x331,360x497,480x663,540x746,640x884,720x994,1080x1491,1280x1767,1440x1988,1854x2560&from=bu&u=vZ-zXyccBC3GdODlSdZkkGO_vOPhCRK08icfjDOnFE0&cs=510x704",
            "https://sun9-78.userapi.com/s/v1/ig2/dvU_mb4VflX6BkCS8_VmUdLEs4mz5GaSCdaAy9344m4Yy9mQQS0IyewglxwrlTVn3m6CXFtcJ0DLp8uzgC96qLc1.jpg?quality=95&as=32x47,48x71,72x106,108x159,160x236,240x354,360x531,480x708,540x796,640x943,720x1061,1023x1508&from=bu&u=gISNm1wo8lm-DFE42NQNFUFpI5QxoxIS1JyK0te9Hog&cs=510x752"
        ]
    },
    {
        name: "Джинсы",
        price: "3 190 ₽",
        images: [
            "https://sun9-3.userapi.com/s/v1/ig2/nfup_23_56MQq-i-BYJSsr2ZTPB6Ta6AQVVySJnh9QmcnS-F9Ef-u0RVyCDjutgHTDgbugdopDyWB3t5AueGBSMC.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=_wdUAW2GlpJwntXr9x7kTUfwUjag4NbDFwJK01qeuNM&cs=510x680",
            "https://sun9-9.userapi.com/s/v1/ig2/Dy_tiN-od9IJxOXW6erm56efvNvVxC1Q4uO07tTtJ9m959LkN01MCV0ejccc3pOF9LFTKRu-KktvEvf9LYW21eH7.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=EVYJycQw9zAKlujZEdW-tzP1_kMVBonEU4TaeXVNmf8&cs=510x680"
        ]
    },
    {
        name: "Лонгслив",
        price: "990 ₽",
        images: [
            "https://sun9-6.userapi.com/s/v1/ig2/9oxZydvIza_U03IaiGCkk9MCSdWm2PqqFB7Y7fAjDrzDhN6-tA4Dcsq6jmvfL4RIAZlGGoatvpv19IQww642q9Ss.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=xjsfbNLe9-4gxp5ryc6rzq4s2vw1mjPY_l5y3uY7oDk&cs=510x680",
            "https://sun9-21.userapi.com/s/v1/ig2/4oF2hGF_xgC45yF05BOBrX_5hwEURlx56b0hg627AtbqBl5K72Q-UfDsNSBAMtC0VuKL8d5mKkfRqQyQXC5uPqSv.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=a6e-0B_K4bf3iPmXcQ0qWUam9ZZIYat2XMieVIKwtXc&cs=510x680"
        ]
    },
    {
        name: "Джинсы",
        price: "4 190 ₽",
        images: [
            "https://sun9-27.userapi.com/s/v1/ig2/PowaPZJU3jRi2sGUG-Yf-wOk1FcFSJmRlpif8tQejPVhnhwTBsRGhew7Oyc8ZrBKQoks4zNExXiizetIqQ3mlYjK.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=aCl3gU2WVZsS7KhJTOOD9Md5p80QczHukfbDuJ6As9Y&cs=510x680",
            "https://sun9-65.userapi.com/s/v1/ig2/qlK3YAxilcHqO2EAM73pJ2_7i9o2PeMSPs2Z-wnkuwcrcqfi_9-2YLnoPly9zRhvGJqoRH0KNzY7IJNK2KxxxEW6.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=D8lgkkp4GIkN4mUOZ4sMZV58lc7sQJPyXZq6kFzCUXo&cs=510x680",

        ]
    },
    {
        name: "Рубашка",
        price: "1 590 ₽",
        images: [
            "https://sun9-61.userapi.com/s/v1/ig2/yKSLDM70keK7tYhSDwNWy6R0a-GNbprQtQCsYDLJ7U9z-2GhF9BzZW2zru9BDLo7ZqQiokkPjKf5y43iesqRjZ1j.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=-on3saVWZftRToz1wPvUtNG7AvGTFPnnxQNSWdm-e6o&cs=510x680",
            "https://sun9-56.userapi.com/s/v1/ig2/vryWswPzYIE61Gb1FA_B6lXrL-bhgbvJZk55pShrFjvJW0ymMFNkxjY501Q2XcV6uCd1R5W8YWxfZv63JGb7WQqw.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=oT3x4L57uhOWzoipv7m2rmzx_zturAsfh3CSnJfJaIo&cs=510x680"
        ]
    },
    {
        name: "Сумка",
        price: "1 990 ₽",
        images: [
            "https://sun9-2.userapi.com/s/v1/ig2/JQKt-yo-EA_gLf4KOPmVs38tK61TwByVec87uB0VLC83g1UqPmXw-jqN_G6vgSwD8VsKBLimAB3rejb5hG4OcHx0.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&from=bu&u=RC-IZflgUAnUnNd2_4OumkGm-MvRG4QYSrj-vda9u98&cs=510x510",
        ]
    },
    {
        name: "Свитшот",
        price: "3 051 ₽",
        images: [
            "https://sun9-1.userapi.com/s/v1/ig2/YAY6p4GXQgaYUWUH6kVFCnlT0klumGQo2V59QuKxMeB9ZlxwMWqmGCJuyz7Fvrj3ntLok6k9nTx9GvlZFhsoPMJZ.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&u=01oxTWg_L78kcUQ9pLGK3E_ZnHP9fBwB8q1W3v238Hg&cs=510x510",
            "https://sun9-58.userapi.com/s/v1/ig2/DNxt-SQYyNNsqWtmjHh5_qp-ZNAnjm8yULLAelwpBwWw0yUR6HJVa5wKd-pmG-gedfp5Zqsmg8L4ZstqMrHSGBTG.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&u=14iwkMF8-2zYutMBj_xbIubwj_ZuKuTGx7SABFfZaeg&cs=510x510",
            "https://sun9-18.userapi.com/s/v1/ig2/VX3zp01CQQStotkroBoNjrW5bx69h4vkapjD3EK61C7rre062WLjC28TQcs9du2NyoohWnz3XdThUY3-bPiWtriS.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&u=72cFjkIEs12grcYDHTTZMs9uSwlNnYLhfQfk5utbOSA&cs=510x680"
        ]
    },
    {
        name: "Джемпер",
        price: "1 791 ₽",
        images: [
            "https://sun9-10.userapi.com/s/v1/ig2/MvP82BIkQS5FcNPjLiL9uYQCBGczRQnxg64Ay76dT_jsE-Dyl9KM8F411d2Se8PswRPWrEQAe5AJ34D9Phf4sJ4M.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&u=_hegjtciT0yJ596rq-8rvm_DKXM9eve05UMdhRvc_oo&cs=510x680"
        ]
    },
    {
        name: "Джинсы",
        price: "2 490 ₽",
        images: [
            "https://sun9-54.userapi.com/impg/t9yOG6kRtm8F8cV5fOoStok_4NvYyz3kHR3CLw/csrz_oflv0A.jpg?size=1620x2160&quality=95&sign=85b4cbb82a67e350fdcab1dcabff455a&type=album",
            "https://sun9-74.userapi.com/impg/LJatijrG7mC9psokj7sWhjnb6ASFi8xV--unCg/T-aPInbzYBs.jpg?size=1620x2160&quality=95&sign=048116b8c38e174e08dd5a481adbf767&type=albumttps://sun9-56.userapi.com/s/v1/ig2/vryWswPzYIE61Gb1FA_B6lXrL-bhgbvJZk55pShrFjvJW0ymMFNkxjY501Q2XcV6uCd1R5W8YWxfZv63JGb7WQqw.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=oT3x4L57uhOWzoipv7m2rmzx_zturAsfh3CSnJfJaIo&cs=510x680"
        ]
    },
    {
        name: "Джемпер",
        price: "1 590 ₽",
        images: [
            "https://sun9-50.userapi.com/s/v1/ig2/O0eXN1UA3Q2Cdz3jnBzBGh08dvkzARElppNrkJaKRjmLyA1wigauwQKeLpPDxg_UpaCbMGgezieTTrNoaXqvi4o_.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1706,1440x1920,1909x2545&from=bu&u=yG-NlLBeGuNuc9TKfL1nr6pdx8LrU1NszvKwCS1aPKE&cs=510x680",
            "https://sun9-31.userapi.com/s/v1/ig2/AmmzKUKlhlRizEa29RNSpctvKz18kcff304FWS6ZYApypJ5lwrP2GsPJ9OB2EPXYtup_qLgon0y1tK6CwD7gbtqc.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=z4DQq2euEMpRaVMClHO3aH9mTFl6I1Ls_B_jUmGR3QQ&cs=510x6800"
        ]
    },
    {
        name: "Спортивный костюм",
        price: "3 843 ₽",
        images: [
            "https://sun9-53.userapi.com/s/v1/ig2/jw9bWVuvP0oTRcWpS4S1xILSzHMh6LZF4G76kCf0bCEs1JLYF7M0wlBw65DcVTsCUFSkCavOuYA_CpdfC7QW2iVQ.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&u=bG9dFc3Btm56Rtmr1TlmzPaTWAjF2LsXfQdTqeEx6z0&cs=510x680",
            "https://sun9-33.userapi.com/s/v1/ig2/cTzijgaKuSnKHa4GbsDpHJybVm465EatKFpYLMrnu9-zXTeyZ3l6ZTA_NreTD9h-cFRFfnYBab07BspB_9Cn7K7y.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&u=Aeus29BXpwBhPM2jC8XsbZa7_ON5nR_Rac9wJ2MjYRQ&cs=510x680",
            "https://sun9-80.userapi.com/s/v1/ig2/WsGXGknOysW-3lZGEXCcTKXbkMLqugxpFjZU3G_WODf2-3FxVd_vwE5oOuQPq7GC8B4GrmECFEEW0baEyqFAQ2hG.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&u=z4riYridN8U69rRh-UfSGjxBeAsh5I8BYQb8SDgHSlc&cs=510x680"
        ]
    },
    {
        name: "Сумка",
        price: "1 690 ₽",
        images: [
            "https://sun9-64.userapi.com/s/v1/ig2/03hRnTLZo3pcXKof9FXSHYsnVuspWoujBrA_Dff1UncPlDRF6qecFUPEkr1iZg44jNN3SCuw8G6jwS-glQ432VZT.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=4sdpvWX89kj0NqNIucxv-rluSvq8SCrkJUmR-Vi5xgM&cs=510x680",
            "https://sun9-24.userapi.com/s/v1/ig2/pwTGWSrGrP1ji1mMvojp1lpPGif7J94p1ljOPbJghgikzal3d7SpZVFNaLC6EngZxfVyYxwbyWznEggFHRSE-Nc7.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=1JdMcguwFXUdGg3ODbdFByySDfF-eqNS1fwEQRm5VQo&cs=510x680",
            "https://sun9-27.userapi.com/s/v1/ig2/UMSYpj29DOWhW4_CZmGtLFSgsgo-8WE6KDLQBPm3Fe5bwBUmh02Wiq4kkfN5xtXAcH6W6_49gXCElVJ6uRwI61LQ.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=-pCV-5sevhgSOxxG75SEVCfb3tvAjHvKmDTZ2jXQS1o&cs=510x680"
        ]
    },
    {
        name: "Спортивный костюм",
        price: "4 890 ₽",
        images: [
            "https://sun9-22.userapi.com/s/v1/ig2/pselKuFmOtHA5MMzl7bIrOE3JJM-LE5eyctSp1pwcyCgpAKXHVPwfDCtNGq2NPCo56JnTB8sYMYiwG3p8Q-lsYGG.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1536x2048&from=bu&u=dmQZZbAzzf-UCGHg127zH5AnV7SEjAUh9oB2H7IeLkk&cs=510x680",
            "https://sun9-12.userapi.com/s/v1/ig2/0UU56J-31KCt_-1T2wJKCg15XZjVzKhklI2tZhORGz5ODan2Oc_F5cd_wGlsKahpkI5QEQkR4w17cyWaDpgy0d55.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1536x2048&from=bu&u=ZuiLZi98NdgfMBIuvnOIKz_TAdlBtnfY0nRzNWaHJS0&cs=510x680",
            "https://sun9-62.userapi.com/s/v1/ig2/Kpj-YuL-bzyavj5sDeo7pMpOpU16EBzwC3nWDt2oeL7S2yZcKT0QUAQ-_dYDJ9lvN6047xmSEd8jjRVuATrQAt3c.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1536x2048&from=bu&u=zLSIC-LKXa5uQQJCYWxtMpgIThsHMCEf00Q0pP_6R4M&cs=510x680",
            "https://sun9-3.userapi.com/s/v1/ig2/UbosI-hes6tXBw_R_zMtwrO_71I5qiw3LJTSehczKzNspn_QsqCgmgGlLKZgQpfrCwjKQuCq4HSEPPRQgY7Hx92x.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1536x2048&from=bu&u=0GNa1bLb0Iur-YB2sBEMHwJa1QKcoP4Bi9wFr_GzyP4&cs=510x680"
        ]
    },
    {
        name: "Юбка",
        price: "1 791 ₽",
        images: [
            "https://sun9-39.userapi.com/s/v1/ig2/5Hw7I2caM4H8BJ8_PBveEW6LapboQZEYS4l8lwmVxLnVQrmMeDVSPD8g42FlGtgSIDjXuqL25vpSYBi05_vznssF.jpg?quality=96&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1620x2160&from=bu&u=CRNeoFXaUpRgAvO0Io73M5kUm4bIma2hQwRjNydQCJY&cs=510x680"
        ]
    },
    {
        name: "Джинсы",
        price: "2 490 ₽",
        images: [
            "https://sun9-35.userapi.com/s/v1/ig2/QDMfuxc4w8GBbMcJhMuz-lB5zMUuvBmmfsnRQms0MQKszenNaLdS20a9shC6-npWgPdww4JFWqIkw2kWWyyWPX-C.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&from=bu&u=ThVpF-DyKcUSagj9x2_WKhkZGDuA2jq-FTOCKhTQmEo&cs=510x510",
            "https://sun9-14.userapi.com/s/v1/ig2/1fssHFMkYPpkCMclBw2ZUqPTBcBmn1p4rS7uJxawX17SksfHtiskElY1eKHQUxqAr6th9tSrTtC8U9FTfrvzGRJo.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&from=bu&u=YPxJIKgtCtP4wv2VI36MeXSdJ8DdL3vlSifAaps8yoU&cs=510x510",
            "https://sun9-63.userapi.com/s/v1/ig2/NqASeAU8lqgHJp4RVfe48k0txWI7yhHYZHSsUuir_EddCp1B2HoZ4QEBWblZxkm2oxizLZBYlwkC_HcVwHZp0MGL.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,960x1280&from=bu&u=lQRKAeemP_KCYHiwstQrOrnEsq7KMxyeOHKVvwJ8U5k&cs=510x680"
        ]
    },
    {
        name: "Юбка",
        price: "990 ₽",
        images: [
            "https://sun9-62.userapi.com/s/v1/ig2/Ps-t7Oj80v9j0NDeIxXGQydnv0I3SlxbPCy_H35ZKE4gY2hrosJub6FjxVQU6R9YjZL62HtiyRPW-FNDkcScQBDO.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2072x2072&from=bu&u=RGWMuId3Di6HOrVpCArOysBk2-UnO6DeHq8WH9Cglm8&cs=510x510",
            "https://sun9-8.userapi.com/s/v1/ig2/ylfNTJSsxT9BWVHwRwNI-w1JXlUqcJqHN8JejnNV3IO5xM7laa8uV9dsYCvS9tlC_JwTPYn8WD2DP_Cz1Vc_ey1M.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&u=CXZVuLgNR7ko3FSHngk44zHYdRmu9z-w8VIdNbituZo&cs=510x510"
        ]
    },
];
