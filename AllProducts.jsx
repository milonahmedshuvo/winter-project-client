const allProducts = [
    { "id": "1",
      "image": "https://s.alicdn.com/@sc04/kf/H23441090ccb44171bbda2f2f6c00188eT.jpg_250x250xz.jpg",
      "title": "Cartoon School Bag large capacity waterproof Cartoon",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/Hc0499fd7259f4568b5a083a2287ecc86S.jpg_100x100xz.jpg","https://s.alicdn.com/@sc04/kf/H989da516392640b292ceb44c8e05e047S.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H877b1568148242e8a0d3cf178410eacfB.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H05867d6d45f94461bad1651f9df088f6T.jpg_100x100xz.jpg" ],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "2000"
    },
    { "id": "2",
      "image": "https://s.alicdn.com/@sc04/kf/Hf0daa23042af438b8034ca80692ae35cY.jpg_250x250xz.jpg",
      "title": "High Quality Cartoon Print School",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/Hf0daa23042af438b8034ca80692ae35cY.jpg_250x250xz.jpg", "https://s.alicdn.com/@sc04/kf/H84d9cd4c61ec4106ab9ac7e7e5e2949eR.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H9fe8e19aed4d487e96345e090a75f1fc8.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hf0daa23042af438b8034ca80692ae35cY.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "5000"
    },
    { "id": "3",
      "image": "https://s.alicdn.com/@sc04/kf/Ha84c04034ee743669e941b4a532333dbL.jpg_220x220.jpg",
      "title": "Custom Waterproof School",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/Ha84c04034ee743669e941b4a532333dbL.jpg_220x220.jpg","https://s.alicdn.com/@sc04/kf/H3cd86a6959634a9fa73d6e1deaafce05C.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/He8259d85663a4b28a15f7dd58636db62P.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H3cd86a6959634a9fa73d6e1deaafce05C.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "1000,00"
    },
    { "id": "4",
      "image": "https://s.alicdn.com/@sc04/kf/Hfa59f6e33e60485796bd0cc2de06b061j.jpg_250x250xz.jpg",
      "title": "",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/Hfa59f6e33e60485796bd0cc2de06b061j.jpg_250x250xz.jpg", "https://s.alicdn.com/@sc04/kf/Hbe97a1b074e64f5fbe1791e9cfe65f5aM.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/He0bc542cf4f94a7a96dd49fbbe2db3ce0.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hbe97a1b074e64f5fbe1791e9cfe65f5aM.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "2300"
    },
    { "id": "5",
      "image": "https://s.alicdn.com/@sc04/kf/H190a2f7765c1413fae3449109114dba6B.jpg_100x100xz.jpg",
      "title": "Artificial Plants Artificial Zamiifolia",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/H190a2f7765c1413fae3449109114dba6B.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/He7382c207a3440ecbc56bfb42be339644.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hbdc5572c32fe4f4199a4ab18ea8117a6O.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/He7382c207a3440ecbc56bfb42be339644.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "6454"
    },
    { "id": "6",
      "image": "https://s.alicdn.com/@sc04/kf/Hb76c33422dee45d5a84f1bfed8025b8bW.jpg_100x100xz.jpg",
      "title": "Free Sample Bar European Antique Style ",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/Hb76c33422dee45d5a84f1bfed8025b8bW.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hf0266cd1e75548c39551c5dca6a98b83p.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hc6d7a64108414666a214e2588cbbd7bac.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hf0266cd1e75548c39551c5dca6a98b83p.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "2343"
    },
    { "id": "7",
      "image": "https://s.alicdn.com/@sc04/kf/H358c97bb7f5d48adb76665110c29916aZ.jpg_100x100xz.jpg",
      "title": "Free Sample Bar European",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/H358c97bb7f5d48adb76665110c29916aZ.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hd58f2b19b4e04302b87690b1b84d2f61n.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/He067bc276cdd4b11b11238b4302e7706c.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hd58f2b19b4e04302b87690b1b84d2f61n.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "1000"
    },
    { "id": "8",
      "image": "https://s.alicdn.com/@sc04/kf/H6907bcea372a445e98c5eac70af691bcN.jpg_100x100xz.jpg",
      "title": "Sack Newborn 0-12 Months Baby",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/H6907bcea372a445e98c5eac70af691bcN.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H3225082f378a4160aa35dfc6756d8399j.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H0b2ea3765eac4b56bb694d62df9b5528U.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H3225082f378a4160aa35dfc6756d8399j.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "4032"
    },
    { "id": "9",
      "image": "https://s.alicdn.com/@sc04/kf/H9e43e3e75fce4636968b65cc5220f64bW.jpg_100x100xz.jpg",
      "title": "2023 Hot Sale Q12 Smartwatch",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/H9e43e3e75fce4636968b65cc5220f64bW.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hf7253d139dca448ca8d06e58ead18fd0N.jpg_100x100xz.jpg","https://s.alicdn.com/@sc04/kf/Hd5898d2fe46d42348db62c19771a306eZ.jpg_100x100xz.jpg","https://s.alicdn.com/@sc04/kf/Hf7253d139dca448ca8d06e58ead18fd0N.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "2300"
    },
    { "id": "10",
      "image": "https://s.alicdn.com/@sc04/kf/Hea29ff739eba4e6c98c707032171ef2fe.jpg_100x100xz.jpg",
      "title": "OEM ODM 2022 New Luxury",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/Hea29ff739eba4e6c98c707032171ef2fe.jpg_100x100xz.jpg","https://s.alicdn.com/@sc04/kf/H5ecdb45027154d37abe535190338bf7f8.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H5cc9f15cb7d84015b5b83e35e96761dfa.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H5cc9f15cb7d84015b5b83e35e96761dfa.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "2499"
    },
    { "id": "11",
      "image": "https://s.alicdn.com/@sc04/kf/H2159ba0ed95f4905bd104f29210ccb44f.jpg_100x100xz.jpg",
      "title": "student export popular low price fashion",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/H2159ba0ed95f4905bd104f29210ccb44f.jpg_100x100xz.jpg","https://s.alicdn.com/@sc04/kf/H8d17e99ce583435ca60687ceb5067b1fV.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hcc45f70095aa4eaa9cc260e9abe6e8d5H.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H8d17e99ce583435ca60687ceb5067b1fV.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "9475"
    },
    { "id": "12",
      "image": "https://s.alicdn.com/@sc04/kf/Hcb7c63237f6540eeb74f614c91c604a49.jpg_100x100xz.jpg",
      "title": "2023 Hot Sale Q12 Smartwatch",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/Hcb7c63237f6540eeb74f614c91c604a49.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H017219b0bfe444199bb687c55be8503eC.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H9c52468407534634ad77993725b4ccb2X.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H017219b0bfe444199bb687c55be8503eC.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "4643"
    },
    { "id": "13",
      "image": "https://s.alicdn.com/@sc04/kf/Ha0ace1dd90e14095a1b78a66abb1103dj.jpg_100x100xz.jpg",
      "title": "Eco friendly Handmade",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/Ha0ace1dd90e14095a1b78a66abb1103dj.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H263e107138bf4e898bc7e6945e74049ek.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hcd2f3f57bfa44415827fad435ce9d3174.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H263e107138bf4e898bc7e6945e74049ek.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "1007"
    },
    { "id": "14",
      "image": "https://s.alicdn.com/@sc04/kf/Ha22a4199618848728d72891669957e3bc.jpg_100x100xz.jpg",
      "title": "",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/Ha22a4199618848728d72891669957e3bc.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H18b516dfca17454b9a9e62985f532a827.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H57648126756941afb42f12f1dcf09e88F.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/H18b516dfca17454b9a9e62985f532a827.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "1445"
    },
    { "id": "15",
      "image": "https://s.alicdn.com/@sc04/kf/A2f8bd6c208e849d48f5420ad48e25b049.jpg_100x100xz.jpg",
      "title": "",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/A2f8bd6c208e849d48f5420ad48e25b049.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Ae5830ab75734407cb0065df5af460cf2e.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Acfbb9573ff8b43299f6e3e2db033fcebl.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Ae5830ab75734407cb0065df5af460cf2e.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "2463"
    },
    { "id": "16",
      "image": "https://s.alicdn.com/@sc04/kf/Had1d367894f94e318035eb26445e83bbN.jpg_100x100xz.jpg",
      "title": "Baby wrap swaddle blanket baby swaddle",
      "catagoryImage": ["https://s.alicdn.com/@sc04/kf/Had1d367894f94e318035eb26445e83bbN.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/He42490533d83470dbe94612a91941ecfO.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/Hc1c8f5fc9b6747779e8d27fd67b780b76.jpg_100x100xz.jpg", "https://s.alicdn.com/@sc04/kf/He42490533d83470dbe94612a91941ecfO.jpg_100x100xz.jpg"],
      "discription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "option": [
        "Direct Full Array",
        "Quantum Dot Technology",
        "Ambient Mode",
        "One Remote Control"
      ],
      "price": "2043"
    }
    
  ]



  export default allProducts;