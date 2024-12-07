import React from "react";
import "./Imagenav3.css";
import { Link, useNavigate } from "react-router-dom";
import imagenav3images from "./imgenav3json/imagenav3.json";
const Imagenav3 = () => {
  // const images=[
  //     {
  //         id:1,
  //         image:"https://th.bing.com/th?id=OIP.XW-8Cj7rafDWVl3xEpGxBAHaHa&w=250&h=250&c=8&rs=1&qlt=30&o=6&pid=3.1&rm=2",
  //         name:"Footwear",
  //     },
  //     {
  //         id:2,
  //         image:"https://th.bing.com/th/id/OIP.yfkOfdQPlIrIiT0NZdJ-BwHaEN?w=301&h=180&c=7&r=0&o=5&pid=1.7",
  //         name:"Accessories",
  //     },
  //     {
  //         id:3,
  //         image:"https://th.bing.com/th?q=Pune+Cosmetics&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
  //         name:"Gifts"
  //     },
  //     {
  //         id:4,
  //         image:"https://th.bing.com/th/id/OIP.UcUSTZmPgjBdtVp6ArUQ8gHaHa?w=164&h=180&c=7&r=0&o=5&pid=1.7",
  //         name:"Sport"
  //     },
  //     {
  //         id:5,
  //         image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0APwDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAgABAwUGBAf/xABJEAACAQMDAQQGCAIECwkAAAABAgMABBEFEiExBhNBUSJhcYGRoRQVMkJScrHBI5IzU6LwFiQ0Q0RUYmNzo9ElZIKDk8LS0+H/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAKxEAAgIBAwMDBAEFAAAAAAAAAAECEQMEITESE0EiMlEUM2FxI0KhweHw/9oADAMBAAIRAxEAPwDzoXQ6qSMjyxmpUvXQgoMkYJD8iq7vI1IwmRj8RFSJcwD7UMh/LKo/VaztPwEIw8lquq3vGEh96Nz/AGqk+tdR/wC7jjGO7/8A2q9L+BeU01X/AOLNK3yQKK6Y9ZljIKaRp/H4o5yfiXqt9ZoXZ8nfbXWrzuvc2ccrZBVo0lQqfAhg2BXodk941pam82/SjGO/2HK7ufHA9Wa89i7WaxEFxp9gAOg7uf8A+yra07Yak4HfaXA48DBJKh/tFqralyy7Hlw4+DbAnzohnzqms9f0652iRZrVzhSLgAx7j4d4v7gVdDwpUa45IzVxYQz50Qz50wowBTGNz50+TT0sUCFz50/PnSAp8UALmlz509LFMQ3PrpufM0WKWDSGDz50ufOnpc0ANz502fXT0jQMbJ86Yk+dKlQA3PnTHPnT03voAEk+dDz507U1IBs+uhJPnRU1AwCfXQ8+dEaGkM8SLSA/0cYxx9gZp1km8FUflUCrVoBfRNcRLicE718GAPHP71WhzBJux6Skgq3wIIrUqa3PPpjHvn5Ak+eKkjs76YgRQSyHwCAtn+XNXel6r2WhSP6Xp9wJlADSehcqT54dlI+Fam27R9mCFWO6MIA+zJbyxgfyqRVblJeDbDDifMjHW/ZvtDLhvoZVf96yx/InPyq4tuy+uZG57OEeeWlcewAAfOtPHrfZ5iANUs8k8bnZPm6gfOrSF4pkEkMkcsf44XSRfihIqtykaI4MPjcpLTs3GCr313c3bDHobu5g480j5PvNaJQAAB0AAHsFMKMdKRojGMdkqCFEP3pgKcfvQMenpqemA4p6YUVACpUqemIVLFOBT4oAAimwakxTYoAjxTEVIRTEGkOyOmoyDQkGgAaE0eDTEGkBG1NRGmoGDTU9NSAA0NGaEigZ5JYzSQ79pwTwOmM+fNdUtrHqSl+6KXCD7QBVJB4ZOMZqr2yGMEAkOWwAOWAOOKtXu3V7WxVjsiKNMwJBcqu4KfUK0vfg8/KDjTZWxx6ejMk8N1kHBCyquD6xtzVnb2miuGeI3alegMyt8sCgvIILoB0wkmMBh0/K1U5NxC5HpK6nkeVC/JHksLq3gDEbZBn7wkyGHnytT2VhcJiexupoJBkblLKQfItEQfkasOzllpusC4S/mna6h5SHvDGhh8XTbyTn7XP68XjdkrRSfo13eQA/dDhh8+fnVcpJbUa8emlOPUmcdh2svrJ1t9XT6RGPR+kQgd+vrYcBvkfbW2tri2uoYp7aVJYZBuSSM5Uj9c+YrLJ2Ns2BEl9dnI8BDwfepq70XR4tHhuIIrm4mSWUTYnKbYzjadioB18fZVe3g24o5YOp7otqempxQaBCnqaG3km3bdoC8ks2B7BQFNpIPUEg1KnVitXQwp6WKFpAkkCMMCbeit4CRRvCn2jOPZQDJKXSuWG+hnvdUskRwdO+jLPKxURs80ZlIX8o6k10q8ciq6MGRuVYZwR5jPhQRTTCp6EnGTngZJ9QHOazmvdqINKlls4Fhe8WAuZJ5US3il3IRCwPpFiCT4eHXwFuDdcmmpYrGaN2xkuZFj1OLZBIMQ3aW8qLJMW+ztXMe3wBDZPr61suQceI4NPgE7VofFLbT1Ioz8RQBCVqMririUR9wVEaAAcYAyD5561WMuKlKHSQx5OsgIoTUhFAwqstI8UJojQmkME0NFTUhgmhoqagZ5xHZxxzwRqPQiUBc9ePE1X3kfd6xdKOP4pZf/MjyP1rRJH/ABS1U+vxNFqVvMPszwwtn/aj/hn9vjUoPcxauC7e3gqPpMiDCnB6HHSiWUXG1JAO8H2HI/st6qHuVaQjJ5JGE5OfICu+HS5YpxBeRPC7xmVC+MFR5EcH11e6e3k5ii2rSIILi6s54p7dSk8Dhg3kw4IYeR6GvTtK1GDVLOK5jCq32J4wc91KBkrny8R6qyX1fbSxo3otLsOc+OOAQf1qTs/3+n6kAMC0uwIJxu9FZOe7cD28e+ozVov0uVwnXhm8UCjFAOKMVSdgKnFNmlmgDpgvdLgYx3N0kUjcKm2RiSAD1VSPEfGmd4jJKqNuCkHoQeRnBzWL13V7K2v7iIq7yWcKXE5JVI1EsaKqq3JLdONvjVjpXaO31W9vIo7aa3eDu96zSRSblZRjBj8fPirXJdFGaKl3W/DL51LpIiyMjMpAdMbkJ6MAaqtQvJBawKXWK8h1PS454t3Egkl2K8eedjEhgfDBB6c9d66xG3mSWOO5d+4gWYlIrokFhbySYwCf82T0PmCQaPtHPbTaZHcLHL9JR5VtyRslhntyk0ltOnsBJHhtyOuTUyeR0mwNCuo7hNcvLhJGW41u4lW0UBp7u4YAQwhScEIozzx1Y8JmtRELsBmumTvXIJiiH8KAfgViNxPmx6+QHA88sbu4EssWnl47nZP304wRZrcOTIYeo7yQ8KfWT0jG3baMII9O0+KKRXijjVN8bbwxDEO27xOc5NEWQw7oru1OoywWcthbx99LeW1yJ0ikAnjjAVlKocE5xzg5x5ZBrze6u9RupfrVfozSPAkU+90nZIwBGC8dwpPAABxnp8bHtXfifWpmurfElm4t3jSSTY8ceVV9wOR4HjzPNUQurBJ2dLFJY5VXbHc95Jtkzg90UI4Pr/ar4LyRyS3qyZWa1lF59NiKhlMX1ZKITFMFO1xHKgOBz0X4V612d1SDU9PiaGOdFt44Lc/SZUkmkIiHpvtAPPPOOfD1eSZALwiyht7eQOYWvlfcjEdO9jXeSOq599brsRfymW60z+FIkEMk8tzDl++maRQpkkPPC8KM8YPtpTJYuaN2DRNNFFsLk+k6qABk1HXHfyKgtdzKoMyjLEAc+2ox5RbLaLZo5JIO4DYfDAgY25BxVXuDgnyJB9oqd7q0a2jUXEBYYGBIpP61xwup37WVhublWDD4ir8yVGPTN20ORQEHmpTUbeNZjaQkc0JqQjrUZqJICmpzQ0hjGmp6GgZlY0Oc1xdo7UzWEc6j07Rt5/4b4VvhwatUTpXRLCksMkbDKujIw81YYIqKdOxTgpxcWeZpLsuYH6ASxMfZuGa9PvrOK+tVU8OoDxOPtI+OCDXmN9ay2NxNBIM7CQreDJ4MK9XtvStrUk5JhiOfaoq3J4aMWkVdUWYmWWa2fuJx3UqHCtyIpPWD4H5ezpUc9/cRruGcq6OyqQGJU7hgjwNa3UNMgvEKuvPOCOorJXmj3dordXhGSCOq+7y/v7Usj4ZHNpK9WM9JglSeKGZDlJo0lUjkEOAwIqcdKzXZC4kl0hYpM7rO5mtlJ/q/RkQe7OPdWlGaRtg+qKYYpGlRYoJnmvaaORtZ7QqOstha7fWdkJP71N2XRl1m/ckbZLe3PHPRVBrs7T6Zd/WL6gkkIilihi2tu3ArHsOR0qPs3bvHfNKZI2UwBCF3BgwI6hhWZzqVGiONOF/H/f5NVc6hYG11OK8tnc29vJJc2MqozzW6kZkiBO1kxzkHjHgRWb1bNi+mkztcabeTwtYzuwaTaImjNvcO5yQEcmNzzjKtnAK6i9trK+iEN0h2rnbIh2yRbhtLI3UevwPjXn9/NLDaS9nr0nvdNvGNnPtB7y0eF3ABPiPQZfUcfdrTyc3NaTs5ku5BbPY2ysTLdzBpU/pr6Q4RFJ8ERcD4+eD6JpNsLOxs7YH+hiVDg/fHLc+3NecWs8neNdRQtDK2II+74W2EgGyGDd6RlbO52PTOercehaQiW+nWUMbo6xxlS8bb1Z9xLnd4855oewtP+zB9roZbXWLtlyIb5hdLgYTD+i6EdODuPv8AXWcbdICneuIlA9KRQ7KwxwMYr0btFaw3cLCSPc0ZLRsOGTPXafXxmvPEXdcGAEBdzojspGeoAIq7HLYebHT/AGAFmYhZZ5jGGHd92CQ3GNw3EY4r0LsLBd29vcO2yO0kCiFFO4zy5w87HrjgKvvwOctlLfTfSDTupXJLIgOH9RJ8PdW80RsR4HAAAAHAAHAxUJ5L2RdiwdPqkakcipoYLaWRHliWRoiTGX5ClhgkDzrljY491dlmcs/5sfKpYt5KyGo2g6LDbHgDuo8flqrnighkHdRrHvLu4TgFjjJx5+dWmeKrb0/xIvXu/atGZLpMenb66I6Bh1p8imJrIdGiNhUZFSt41G1RAjIoaI0JpEgKanNDmgCmRBkV0hRjxqNRyamWokys1DQrDU9nf94pU/biID48Rkgj5VcxoqIiKMKiqijyVRgUwoqZGldjkA1G0KOCCoIPqqUUa0h3QNlaW1ojpBEqCSQyuFGNzkYya7lNQLUy00RJKljjeQkIMkDJHHT31FXZYuiTqrjKyZXgkHz4qcUm0mRm3GLaKnVtHu72IosbblOV5Xr8ardL7P6paTNJJCw42j0k+fpV6J9GhYAhjg+uoZo7aBSzsTgE7QcGr/pYN3ZkWumlVIw+smaFYGMNwywzZmNsyd6gwVyqnkke8HkEc5GB1e6F/smbEk9k/wBFmuIyI1urZ2bunZCAwPLL0I5xx0PoF3f/AEm1v7pIs5LsqpG821d2NxRWDkAcnBz5A9D5xq8lvcl5Ft4y6k7prSUvbybvvsjKHDefT1jPNZ1V7EtTfRuc1jIEksWuo+9hMs7RRyymGN3ZsM8sgycZ+0cEnbjwr0nS9S0+9QxWbGQW6LHM8cDw2yOAAEj7znnqBjp1xnnyyKBpSheZIosYLuSSoyTiNR1P9/CvR9BnsxBDa2sSxwRxgoxkQl2bnkIMbj1PpZ55A8JTohpbv8HZfW5kDcdQRWPuNNijn3NECQxdCRxu88edegMinarFQzKWVSRuZR1YDrj11XXdjauwEk0EbEFkEkkaMw8wGINUv8HTTXkyYTBAxWl0hGSNQfHmuZ7G3SRf40Geo/jRcjzHpVb2qRKFCvGfyuh/Q1Fck3wWcR4Fd1hy0v5/2FV69PhXfp/+d/P+1asPvRh1P22WR6Gqu++1B/4v2qzPQ1VX324Pa/7VpzexmLTfcRGDTk0IpGsR0xN41GaI+NBQIE0B8aI0BpDANCTRGozSArx1NSrUQqQUiRKKMUAohQAYqRaiFSA0xEq1MtQqalU0CJRUsRxNAfKRfnxUIo1I3RnydT86muRS4ZoFYgDmq7VJSltcv+GGVvghNdoPFVOtsRYXvrgdf5sL+9b5Oos5EFckigsY9tpEvjsXPtxWT7SWkTXBUxSI7qHSZFiZHPiJMKHH8xraW64hUeQrnulJUqDjPHxrmL5Ozlh1pxPMVhkVXi70b445JECdTuBXAPXPlWi0q01BXtWEncToI0UxlW7iIfdCbe7B684JyTzzzBF/jVxNcHLQLI8NuCPRKq2C+PM/36VpNPQbgceVEpXsZ8OmS9TNDaXOjWqMkiQmdjmaW5kVp5T5s8hz7B08qoe0ur2kdzaKOzenarD9HUrJcW8sjQuWOY0aNSMHg++lfaZJcv3iMAfEEZrh/wC2tOUxwXNzHGWLbYHdUJPUkDirY5+nlEp6VT3jIpGvdMlu7p37NaVb5EGy2drqPul7sZ2gELyck+j4/GabUIFAKaLpcYVSeI1bkcjk7T867HV7iaW4u+9lnm2maSQsWcqAoz7gB7qcWWnFlYwSZBDfbcDI5865+XNJzutjo4cEYwSb3L7szKZtGsHJySJyPIDvnwB6h0HsrTaf/nfzn9KptNiihgijiXbGqcDk4ydxyT6yaurDpL+c/pXR07uSZztUqg0d5PBqqvj/ABIfa/7VaE8Gqm/P8SD2v+1as3sZh033EBnimJpgeKVYjpiJ60NOaE0ACajNGxqNjSAEmo80RNRk80gOIVIKiH70YNImSijqMEUYoEGDRg1GKPwoAlU1MprnU1KppiOgUWentH61EpNSA1JCfBeqePdVRrn+RTjzMQ+Mq1aKfQHsFVWtf5I485YB/wAwGt2R+hnLwr+Vfs4IhiNfZTT2su0l45FUjqVIHxNHH/Rj2GtM5Kd2Rg+iAynkEYHBFY8WPrXJ0c+btVtyedLpSQIkUJIijGIx1wOuM1221vJHjnxrcGz025GWjRW8QVGPcaA6HZHlRjn7rMP3pvTSvZla1sPKM4ivRGBH6gVfnRYwfRZ/5h+4pvqkjoze8Kf0o7Eh/VYyg+iRfhHwpC0i/CPhV99Vyj7x/lP/AFpvq2b8S+8Gl2JfBL6qHyVaRBRxxXNPqk+nK2yFJctn02ZcfCrz6un80/tVR6zadyCkxAZ1LxkBiDzjqBQ4zgrWw4zx5X0t2cf+Fl30+gwf+pJU8eoS34jkeNE2k4CEnr5k1nXhGcAgnP8AfrVxp6Mkag1X3Zy2Zb2ccN4otVp6EHpTkimREfGgJpyajJoAZjURIzRMajJpACzKMklQACSWIVQPMk8VwHVtDBIOp2AIOCDOnBrrljjmjlhlUNHLG8Uin7yONpFeU6pYz6Xez2j+mqkNBJg/xIW+y3HwPrBqUY9RRnySx04qz0nPWjBqIGjB4qBqJgaMGoVqQGgCQGjHhUQNGD0oESCpFNQg0amgDpU1JniuZWqTdTFRfJJHsX0h9kePqqq1qWM2wG4ZM8AHr9LP7V2wzR9zGS6D0BnLqPD1mqbXLiB0tY0miZzdRNsSRGbCq+TtU5rZkl6Dm4Y/yr9kkXKJ68fOtJIQwHqrN23Jtx4l4x8WArRSssakkgAVHTcMt1r3SEvFSiZl+9j31Uy6hGucZ48cGuSTVYx1dF/PIi/qa0OaXLMaxyfg0X0xh40/0/pnbWTbWbUE5urUe2eL9mqP680/719aj2Sqf0qHdiT7E/g2P1gPJaX1gPwisadd0of6db/zn9hQHX9L/wBeg+Ln/wBtLuxH9PP4Np9YJ5LVJreq2dqLU3KQsl00kJ71WbbtAfKlOQaozr+mf6/B/wAz/wCNUOuappF+1rFKJruODe47h2iiLyYUh92CcADwqLzRonHTzs0Udz2fuiHiXaobkRRzPgjzLYqS5msj9EW3aTeJ0LKyMnoE4zg1gBHoEjBV02UZwObuVce5K0OlQ6faki2iCiTa7lpJZDuHTBkY1RLJFrZGuGGUXbf9/wDRpwaRNRK4IHspFuKqLgietRlqYtQE0AOTQE0LOqhmbO1VZjgFjhRk4Uck+VZeXttpKsyxWd9IFJG5mhi6HH2SSaaTfBCWSMPczTmoZIIJSGkijcgbQXVSQMk4GRVFB2w0GYhZRdWxPjNGHT+aIk/2auYbuxuEEsF1bSRngMs0eM+WCQflSaa5FHJCfDs5geTzUgNQA81ICaRcTA0YI4qIGjB6UiRKKPNRA0YPTrTAkBogfXUQPtogaBE4Prot1Qg0YNAjOdoI2cbgMhTzgedVekKRdoQOgPIFa24hSUEMAQfOoLeyihbKqB7BSLC2hdkRGUkMoBBHUEeIqm1rVNTlCo91Lhc42nZ1PiUxVuv2cVxXFjFKcsoPtp20qQqTdtGMlllcne8jfmZm/WotpP3D8DWv+rYAfsD4CjFhH+AfCoEzHCOQ9Eb4Gn7uX8D/AMprY/Qo/wAPypfQ4/w09wsx3dT/ANW/wNLupv6t/ga2P0RPwimNon4aNwsx3dTf1b/CpFs7h+iY9tas2ifhFGLdB4CjcRm4dOuMgkgVd2Nq0ZyzZNdgiAqRBimJs6EbAAoi1RCizUioct66EmmJqv1VtaW1Y6T3H0kHJEyhmZMdIt/obvaPh4hFulZ3FvXVRqOg6PqW95oe7nb/AEi3wkuf9r7p94rFzdou1sUkkM17cQyodrxvBDGy+7ZU1r2r7QwkGYw3aeIljUH+eHa361b25LdGR6nHL0yRDqfZzVNOLvGBdWo6SRr6YH+8j5I92apcR+KEH1HH6it3b9sNMmAW5gnt2PB2lZo8/JvlUcydj7yQzm6gUv1G6SLnzK7afckuUUSw4p7wkW4PqqRTUAPWpAaoOsTA0YPSogRRgikMlFGD0qIGizzQBLmiGai3AUQamBLmizUWaLNAhyaIUGaIEUDJlPFOaiBo80CERS5pZFNkUDHpqWRTZoGMaanOKGgLGOaakaVAWKnFDTigiFmlmhzSoIjmm5PhVNrn+E3dI2jSxqFB75FRPpLHzjeQEY9XHvzxhX1XtGZmSXUNSWVThlaaVGU+RXIqyMOoz5M6xummeialplhqcXdXUYLKD3Uq8Sxk/hb9R0rB3+h3+myMy/xYQfRkUeH+0B0rsiuu2KKhF/clCCctIr4AGTuMg/erC31DVnjzdXVtIjJkCSFDnPmUVePfVihOPBjyZsOT3KjNRSwekLuJ2GPR9HOPYR/1p2TR/RPeyqSuSoPAOT5g1c3FvFP6SRQo55YwyEJn8rA/rXGdPmzyEPwPzFFy8oocMf8ATI1oHX20YFKlWc7yJVFGBSpUhh4osUqVIQ4FEBSpUwCFHilSpjFiixSpUAPiixSpUxDililSoAWKbFKlQAiKHFKlQA2KRFKlSGhYpgOfjSpUERECoLt3itL+WNtskVrPJG2AdrqhIOCMUqVBGXBgp9S1nLMdTv8AdvK8TsowADwq4Hyqtn1PULgxi5lFwR0edEaQeH9IAH+dKlWppVZw1KTfJ3LqOoWyhI52aMrzHKFkTB4xhwa6XunuYojIkYBkG4RhkVucYIBxSpUoSfyTyRXwQ2c7fWLQKiLESw2gMcbQTkFyT86tpDhsYXoPClSq7wZT/9k=",
  //         name:"Beauty"
  //     },
  //     {
  //         id:6,
  //         image:"https://th.bing.com/th/id/OIP.4fSZuQZFnUS2ngBRi5HIxAHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7",
  //         name:"Home"
  //     },
  // ]

  return (
    //  onClick={()=>handleImageRedirect(item.name)}
    <>
      <div className="imagenav3container">
        <div className="imagenav3content">
          <div className="imagenav3title">
            <h2>Shop Your ICONIC Frenzy Favourites</h2>
          </div>
          <div className="imagenav3row">
            {imagenav3images.map((item) => {
              return (
                <Link className="imagenav3link" to={`/${item.name}`}>
                  <div className="imagenav3col">
                    <img src={`${item.image}`} alt="image" />
                    <div className="imagenav3name">{item.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagenav3;
