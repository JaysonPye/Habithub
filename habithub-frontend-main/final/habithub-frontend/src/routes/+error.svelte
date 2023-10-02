<script>
  import { goto } from "$app/navigation";
  import Button from "../components/Button.svelte";
  import { onMount } from "svelte";
  import { validateToken } from "../utils";


  let loggedIn = false;

  onMount(async () => {
    const validToken = await validateToken();
    if (validToken) {
      loggedIn = true;
    }
  })

  function buttonClick() {
    if (loggedIn) goto("/dashboard")
    else goto("/")
  }
</script>

<div class="body">
  <div class="stars" />
  <div class="stars2" />
  <div class="stars3" />
  <div class="content">
    <h1>404</h1>
    <h2>Oops!</h2>
    <p>
      Lost in the vastness of <s>SPACE</s>, this page may have strayed from its
      path, <br /> but with a click of the <b>Go Home</b> button, it's sure to find
      its way back.
    </p>
    <object
      title="Man lost in space"
      type="image/svg+xml"
      data="./images/moon.svg"
    >
      <img src="./images/moon.svg" alt="Man lost in space" />
    </object>
    <Button on:click={buttonClick}>
      <i class="bx bx-home" />
      Go Home
    </Button>
  </div>
</div>

<style lang="scss">
  .body {
    margin: -50px -10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
  }

  p {
    s {
      color: $red;
      font-size: 18px;
    }
  }

  h1 {
    font-size: 50px;
    margin: 0;
  }

  object {
    width: 30%;
    margin-bottom: 20px;
  }

  .body {
    margin-top: 0;
    background: $black;
    color: $white;
    overflow: hidden;
    height: 100vh;
  }

  .stars {
    width: 1px;
    height: 1px;
    background: transparent;
    position: fixed;
    z-index: 999999999999999999;
    box-shadow: 122px 1631px #fff, 1655px 1982px #fff, 1576px 1081px #fff,
      355px 844px #fff, 384px 1048px #fff, 288px 1502px #fff, 226px 462px #fff,
      1231px 9px #fff, 1514px 1703px #fff, 1997px 902px #fff, 1623px 624px #fff,
      796px 1879px #fff, 187px 1511px #fff, 224px 302px #fff, 682px 581px #fff,
      696px 1626px #fff, 957px 1090px #fff, 1858px 333px #fff, 667px 1328px #fff,
      14px 1540px #fff, 1558px 797px #fff, 762px 1795px #fff, 1754px 725px #fff,
      235px 616px #fff, 27px 1392px #fff, 1611px 1063px #fff, 936px 1459px #fff,
      328px 1101px #fff, 1221px 998px #fff, 611px 841px #fff, 1768px 1565px #fff,
      786px 1335px #fff, 1819px 242px #fff, 121px 614px #fff, 467px 256px #fff,
      1403px 353px #fff, 1634px 774px #fff, 654px 397px #fff, 1438px 194px #fff,
      1638px 507px #fff, 907px 1734px #fff, 1731px 201px #fff, 478px 51px #fff,
      1113px 1338px #fff, 1418px 1592px #fff, 419px 667px #fff,
      1374px 812px #fff, 459px 1937px #fff, 1687px 637px #fff, 601px 870px #fff,
      1646px 1269px #fff, 1185px 1173px #fff, 1896px 1472px #fff,
      1717px 561px #fff, 1830px 911px #fff, 1431px 317px #fff, 710px 152px #fff,
      1772px 2000px #fff, 987px 1264px #fff, 1386px 1495px #fff,
      1985px 737px #fff, 1171px 523px #fff, 270px 69px #fff, 920px 1430px #fff,
      1421px 446px #fff, 528px 53px #fff, 1432px 119px #fff, 1836px 1388px #fff,
      555px 350px #fff, 1323px 385px #fff, 86px 1601px #fff, 10px 1862px #fff,
      1706px 628px #fff, 1267px 263px #fff, 857px 1088px #fff, 975px 1529px #fff,
      1531px 766px #fff, 367px 185px #fff, 200px 525px #fff, 1209px 1239px #fff,
      216px 295px #fff, 1143px 526px #fff, 1000px 1232px #fff, 905px 1048px #fff,
      1079px 975px #fff, 483px 1688px #fff, 63px 598px #fff, 995px 1294px #fff,
      1223px 1986px #fff, 835px 265px #fff, 382px 671px #fff, 662px 1932px #fff,
      1891px 260px #fff, 120px 1353px #fff, 158px 227px #fff, 1272px 318px #fff,
      1001px 558px #fff, 762px 1369px #fff, 1525px 249px #fff,
      1340px 1658px #fff, 136px 1097px #fff, 796px 1353px #fff,
      1877px 1802px #fff, 1087px 1621px #fff, 955px 1817px #fff, 961px 43px #fff,
      1235px 977px #fff, 278px 1176px #fff, 1141px 1889px #fff,
      1171px 1623px #fff, 1172px 1479px #fff, 1547px 1367px #fff,
      879px 1010px #fff, 734px 208px #fff, 925px 1972px #fff, 119px 1776px #fff,
      1866px 1062px #fff, 548px 337px #fff, 1794px 276px #fff, 283px 1808px #fff,
      491px 266px #fff, 122px 1756px #fff, 1883px 1196px #fff, 901px 965px #fff,
      1939px 1215px #fff, 1592px 262px #fff, 1854px 1769px #fff,
      436px 174px #fff, 724px 717px #fff, 834px 1539px #fff, 515px 983px #fff,
      581px 969px #fff, 574px 332px #fff, 1732px 577px #fff, 1385px 1630px #fff,
      1476px 1765px #fff, 1219px 991px #fff, 1370px 1548px #fff,
      999px 1553px #fff, 918px 647px #fff, 1929px 1844px #fff, 1737px 164px #fff,
      1293px 488px #fff, 1705px 469px #fff, 419px 252px #fff, 1359px 667px #fff,
      1432px 988px #fff, 882px 903px #fff, 1138px 392px #fff, 1178px 1305px #fff,
      1272px 813px #fff, 1923px 1560px #fff, 1397px 1701px #fff,
      1335px 878px #fff, 495px 561px #fff, 741px 91px #fff, 202px 1050px #fff,
      1012px 1004px #fff, 1267px 962px #fff, 1491px 1891px #fff, 2px 924px #fff,
      570px 1169px #fff, 1874px 1320px #fff, 543px 1154px #fff, 869px 330px #fff,
      99px 465px #fff, 172px 746px #fff, 1114px 423px #fff, 987px 1226px #fff,
      1221px 1932px #fff, 732px 1463px #fff, 712px 1797px #fff,
      920px 1344px #fff, 1278px 1165px #fff, 869px 1069px #fff,
      1043px 333px #fff, 953px 1929px #fff, 861px 271px #fff, 1495px 663px #fff,
      812px 912px #fff, 1181px 116px #fff, 457px 919px #fff, 1512px 1468px #fff,
      393px 550px #fff, 308px 980px #fff, 8px 292px #fff, 1139px 1983px #fff,
      1677px 300px #fff, 1255px 1209px #fff, 973px 2px #fff, 643px 1354px #fff,
      650px 816px #fff, 394px 864px #fff, 1698px 685px #fff, 373px 1333px #fff,
      323px 437px #fff, 1005px 158px #fff, 90px 1484px #fff, 1518px 687px #fff,
      212px 1428px #fff, 942px 208px #fff, 9px 1985px #fff, 309px 83px #fff,
      408px 1691px #fff, 734px 449px #fff, 11px 1425px #fff, 1744px 1785px #fff,
      218px 1560px #fff, 1211px 1886px #fff, 856px 1549px #fff, 751px 971px #fff,
      720px 970px #fff, 1045px 1352px #fff, 1438px 824px #fff, 1341px 576px #fff,
      426px 981px #fff, 53px 1401px #fff, 1650px 1818px #fff, 85px 1069px #fff,
      466px 1101px #fff, 619px 607px #fff, 704px 447px #fff, 259px 1219px #fff,
      1861px 405px #fff, 982px 1176px #fff, 168px 1008px #fff,
      1662px 1389px #fff, 1621px 1375px #fff, 1986px 1856px #fff,
      1943px 1532px #fff, 1143px 1065px #fff, 1970px 745px #fff,
      1631px 957px #fff, 1719px 591px #fff, 1940px 291px #fff, 694px 1762px #fff,
      1887px 1363px #fff, 406px 259px #fff, 1648px 1143px #fff,
      1539px 1513px #fff, 1837px 329px #fff, 1726px 1692px #fff,
      1271px 1421px #fff, 741px 1408px #fff, 1219px 952px #fff,
      1401px 1399px #fff, 1626px 795px #fff, 641px 341px #fff, 182px 1811px #fff,
      1931px 1507px #fff, 872px 187px #fff, 1474px 1987px #fff, 30px 272px #fff,
      1644px 1504px #fff, 1749px 986px #fff, 847px 1975px #fff,
      502px 1287px #fff, 1691px 848px #fff, 1865px 1833px #fff,
      1459px 1619px #fff, 1362px 543px #fff, 1230px 1533px #fff,
      1301px 662px #fff, 1078px 703px #fff, 939px 1792px #fff, 1778px 981px #fff,
      554px 734px #fff, 1621px 1696px #fff, 1944px 1893px #fff, 735px 992px #fff,
      1343px 1243px #fff, 895px 1836px #fff, 1162px 1508px #fff,
      1336px 878px #fff, 91px 1377px #fff, 1366px 753px #fff, 416px 1901px #fff,
      698px 1964px #fff, 125px 115px #fff, 577px 198px #fff, 98px 1655px #fff,
      1021px 263px #fff, 1614px 1766px #fff, 1239px 1533px #fff,
      1420px 104px #fff, 186px 440px #fff, 1372px 1206px #fff,
      1037px 1401px #fff, 739px 1273px #fff, 746px 1687px #fff,
      1900px 1373px #fff, 1342px 1449px #fff, 926px 115px #fff,
      1185px 1138px #fff, 986px 1936px #fff, 267px 170px #fff, 64px 853px #fff,
      1306px 25px #fff, 451px 1717px #fff, 661px 355px #fff, 1400px 146px #fff,
      87px 68px #fff, 1835px 1513px #fff, 881px 1564px #fff, 1172px 844px #fff,
      1994px 682px #fff, 1364px 1472px #fff, 1089px 529px #fff,
      1525px 481px #fff, 642px 1543px #fff, 1560px 927px #fff, 359px 417px #fff,
      372px 1119px #fff, 1125px 509px #fff, 1043px 583px #fff,
      1325px 1712px #fff, 1386px 841px #fff, 1860px 1692px #fff,
      508px 941px #fff, 1497px 1341px #fff, 1764px 529px #fff, 112px 189px #fff,
      1682px 920px #fff, 1035px 1460px #fff, 1345px 31px #fff,
      1643px 1658px #fff, 1169px 1576px #fff, 1485px 604px #fff,
      823px 821px #fff, 689px 1088px #fff, 746px 783px #fff, 671px 1214px #fff,
      237px 159px #fff, 1637px 1398px #fff, 83px 1484px #fff, 1145px 1623px #fff,
      1103px 770px #fff, 1949px 648px #fff, 8px 867px #fff, 1290px 688px #fff,
      447px 1311px #fff, 1700px 746px #fff, 659px 1894px #fff, 579px 310px #fff,
      725px 1230px #fff, 138px 479px #fff, 731px 703px #fff, 978px 710px #fff,
      1143px 1802px #fff, 590px 1575px #fff, 1636px 1532px #fff,
      1449px 273px #fff, 1415px 1595px #fff, 1036px 588px #fff,
      1153px 1712px #fff, 335px 1893px #fff, 292px 262px #fff,
      1819px 1226px #fff, 574px 1813px #fff, 1572px 500px #fff,
      1028px 254px #fff, 707px 702px #fff, 541px 1915px #fff, 60px 995px #fff,
      1388px 317px #fff, 1074px 46px #fff, 1752px 1946px #fff, 947px 481px #fff,
      752px 158px #fff, 1581px 630px #fff, 1196px 1788px #fff, 298px 1513px #fff,
      1656px 86px #fff, 1112px 924px #fff, 584px 1609px #fff, 1411px 839px #fff,
      519px 850px #fff, 1840px 3px #fff, 1278px 1622px #fff, 1040px 214px #fff,
      1520px 628px #fff, 465px 413px #fff, 1632px 1106px #fff, 454px 596px #fff,
      1116px 1019px #fff, 1593px 755px #fff, 1182px 1908px #fff,
      310px 1127px #fff, 1925px 1510px #fff, 739px 184px #fff, 398px 1149px #fff,
      1759px 316px #fff, 781px 1906px #fff, 298px 1739px #fff, 1171px 112px #fff,
      1832px 998px #fff, 987px 704px #fff, 1674px 1478px #fff,
      1250px 1770px #fff, 1724px 1166px #fff, 1454px 260px #fff,
      1558px 1877px #fff, 1330px 275px #fff, 491px 1887px #fff, 835px 37px #fff,
      1372px 1249px #fff, 1120px 1488px #fff, 1819px 1534px #fff,
      407px 1227px #fff, 1058px 172px #fff, 760px 1654px #fff, 1367px 197px #fff,
      1918px 685px #fff, 473px 950px #fff, 756px 325px #fff, 1865px 1843px #fff,
      1752px 251px #fff, 438px 985px #fff, 1280px 1553px #fff, 798px 179px #fff,
      364px 1994px #fff, 1342px 338px #fff, 567px 826px #fff, 792px 1678px #fff,
      1711px 767px #fff, 1581px 1563px #fff, 1095px 1793px #fff,
      516px 411px #fff, 1074px 1044px #fff, 1594px 1334px #fff,
      751px 1229px #fff, 294px 849px #fff, 907px 443px #fff, 1370px 908px #fff,
      245px 554px #fff, 1983px 1367px #fff, 1084px 354px #fff, 818px 1146px #fff,
      1368px 766px #fff, 1128px 638px #fff, 1917px 531px #fff, 1060px 334px #fff,
      801px 1269px #fff, 1510px 860px #fff, 1094px 657px #fff,
      1829px 1125px #fff, 105px 1640px #fff, 244px 342px #fff, 939px 1989px #fff,
      193px 696px #fff, 210px 1665px #fff, 948px 1949px #fff, 487px 354px #fff,
      1812px 1020px #fff, 744px 241px #fff, 1964px 1816px #fff,
      700px 1162px #fff, 1673px 357px #fff, 663px 1240px #fff, 1287px 262px #fff,
      1509px 705px #fff, 1962px 1426px #fff, 1034px 68px #fff, 1743px 296px #fff,
      889px 1510px #fff, 1387px 1668px #fff, 1772px 988px #fff,
      267px 1818px #fff, 227px 1727px #fff, 301px 188px #fff, 1292px 660px #fff,
      1296px 1409px #fff, 129px 1161px #fff, 1709px 1818px #fff,
      642px 669px #fff, 1250px 317px #fff, 1310px 243px #fff, 1168px 1670px #fff,
      248px 5px #fff, 112px 101px #fff, 1788px 959px #fff, 125px 416px #fff,
      344px 588px #fff, 273px 1817px #fff, 126px 1229px #fff, 1779px 1825px #fff,
      1965px 1496px #fff, 1723px 843px #fff, 1347px 1192px #fff,
      1600px 369px #fff, 111px 322px #fff, 1742px 1998px #fff, 783px 322px #fff,
      1568px 657px #fff, 96px 895px #fff, 1542px 787px #fff, 657px 1214px #fff,
      1545px 857px #fff, 1732px 1907px #fff, 884px 955px #fff, 1028px 400px #fff,
      906px 1721px #fff, 1549px 373px #fff, 846px 1851px #fff, 411px 663px #fff,
      7px 929px #fff, 1781px 1767px #fff, 739px 1747px #fff, 1695px 398px #fff,
      437px 1674px #fff, 1858px 46px #fff, 1335px 161px #fff, 247px 1885px #fff,
      1834px 1838px #fff, 1712px 1656px #fff, 1024px 1318px #fff,
      422px 262px #fff, 1795px 901px #fff, 652px 1325px #fff, 192px 755px #fff,
      331px 1331px #fff, 57px 1108px #fff, 985px 347px #fff, 1969px 1874px #fff,
      1261px 1266px #fff, 662px 1805px #fff, 1428px 1850px #fff,
      859px 998px #fff, 848px 753px #fff, 1744px 187px #fff, 294px 1480px #fff,
      1083px 1591px #fff, 1750px 1971px #fff, 1874px 1252px #fff,
      1203px 237px #fff, 809px 1248px #fff, 693px 1515px #fff, 987px 984px #fff,
      624px 390px #fff, 742px 1949px #fff, 1664px 1401px #fff,
      1902px 1067px #fff, 1px 48px #fff, 1045px 459px #fff, 217px 289px #fff,
      54px 666px #fff, 501px 1738px #fff, 710px 1641px #fff, 639px 1673px #fff,
      1572px 597px #fff, 537px 1035px #fff, 1532px 1882px #fff,
      1567px 1948px #fff, 814px 852px #fff, 1601px 1439px #fff, 812px 662px #fff,
      610px 1394px #fff, 164px 1117px #fff, 147px 1939px #fff,
      1711px 1236px #fff, 801px 1100px #fff, 41px 1995px #fff,
      1909px 1067px #fff, 1045px 1607px #fff, 234px 1469px #fff,
      611px 444px #fff, 370px 1154px #fff, 271px 58px #fff, 865px 1164px #fff,
      1923px 1779px #fff, 1152px 1647px #fff, 1615px 862px #fff,
      1560px 1514px #fff, 879px 841px #fff, 1175px 1326px #fff,
      330px 1768px #fff, 288px 1288px #fff, 329px 1687px #fff, 579px 988px #fff,
      1431px 300px #fff, 1707px 1939px #fff, 655px 97px #fff, 459px 1860px #fff,
      14px 1505px #fff, 1783px 1297px #fff, 651px 1475px #fff, 1397px 589px #fff,
      1038px 1777px #fff, 653px 1028px #fff, 1474px 1018px #fff,
      824px 1456px #fff, 273px 1465px #fff, 1620px 131px #fff,
      1226px 1359px #fff, 1026px 1794px #fff, 604px 348px #fff,
      1291px 734px #fff, 1403px 60px #fff, 1530px 338px #fff, 1323px 212px #fff,
      418px 1525px #fff, 619px 444px #fff, 1534px 520px #fff, 351px 802px #fff,
      1494px 1954px #fff, 778px 424px #fff, 962px 191px #fff, 1600px 1056px #fff,
      966px 240px #fff, 986px 1123px #fff, 154px 1538px #fff, 1273px 719px #fff,
      1089px 264px #fff, 1763px 253px #fff, 1557px 1493px #fff, 918px 488px #fff,
      1293px 1867px #fff, 1970px 1491px #fff, 218px 494px #fff, 32px 589px #fff,
      1158px 1993px #fff, 875px 1573px #fff, 1313px 913px #fff,
      418px 1126px #fff, 826px 1284px #fff, 486px 1623px #fff, 310px 440px #fff,
      922px 364px #fff, 497px 806px #fff, 227px 1410px #fff, 329px 861px #fff,
      1984px 2px #fff, 1652px 1152px #fff, 758px 150px #fff, 515px 408px #fff,
      100px 1168px #fff, 1672px 559px #fff, 475px 345px #fff, 22px 931px #fff,
      1830px 599px #fff, 342px 749px #fff, 1793px 1155px #fff, 716px 1475px #fff,
      739px 1351px #fff, 1038px 286px #fff, 667px 1101px #fff, 1123px 562px #fff,
      1256px 1225px #fff, 1314px 873px #fff, 137px 325px #fff, 743px 1972px #fff,
      151px 1287px #fff, 87px 567px #fff, 1118px 147px #fff, 1108px 1567px #fff,
      1596px 814px #fff, 944px 585px #fff, 568px 37px #fff, 230px 1464px #fff,
      540px 57px #fff, 683px 1507px #fff, 210px 437px #fff, 493px 363px #fff,
      895px 636px #fff, 1752px 871px #fff, 994px 1911px #fff, 1901px 1567px #fff,
      21px 1291px #fff, 724px 1863px #fff, 1424px 439px #fff, 998px 1861px #fff,
      189px 1231px #fff, 1814px 1185px #fff, 1023px 607px #fff, 823px 160px #fff,
      1092px 1858px #fff, 1724px 434px #fff, 1690px 1756px #fff,
      644px 1533px #fff, 1140px 1279px #fff, 417px 1482px #fff, 853px 440px #fff,
      720px 1041px #fff, 1359px 183px #fff, 889px 1419px #fff, 836px 1571px #fff,
      1903px 1036px #fff, 1989px 568px #fff, 1792px 1866px #fff,
      1023px 1512px #fff, 962px 1200px #fff, 393px 185px #fff,
      1531px 1222px #fff, 1488px 364px #fff, 446px 1733px #fff,
      1169px 276px #fff, 1908px 1609px #fff, 34px 307px #fff, 333px 645px #fff,
      385px 1878px #fff;
    animation: animStar 50s linear infinite;
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: 122px 1631px #fff, 1655px 1982px #fff, 1576px 1081px #fff,
        355px 844px #fff, 384px 1048px #fff, 288px 1502px #fff, 226px 462px #fff,
        1231px 9px #fff, 1514px 1703px #fff, 1997px 902px #fff,
        1623px 624px #fff, 796px 1879px #fff, 187px 1511px #fff,
        224px 302px #fff, 682px 581px #fff, 696px 1626px #fff, 957px 1090px #fff,
        1858px 333px #fff, 667px 1328px #fff, 14px 1540px #fff,
        1558px 797px #fff, 762px 1795px #fff, 1754px 725px #fff,
        235px 616px #fff, 27px 1392px #fff, 1611px 1063px #fff,
        936px 1459px #fff, 328px 1101px #fff, 1221px 998px #fff,
        611px 841px #fff, 1768px 1565px #fff, 786px 1335px #fff,
        1819px 242px #fff, 121px 614px #fff, 467px 256px #fff, 1403px 353px #fff,
        1634px 774px #fff, 654px 397px #fff, 1438px 194px #fff,
        1638px 507px #fff, 907px 1734px #fff, 1731px 201px #fff, 478px 51px #fff,
        1113px 1338px #fff, 1418px 1592px #fff, 419px 667px #fff,
        1374px 812px #fff, 459px 1937px #fff, 1687px 637px #fff,
        601px 870px #fff, 1646px 1269px #fff, 1185px 1173px #fff,
        1896px 1472px #fff, 1717px 561px #fff, 1830px 911px #fff,
        1431px 317px #fff, 710px 152px #fff, 1772px 2000px #fff,
        987px 1264px #fff, 1386px 1495px #fff, 1985px 737px #fff,
        1171px 523px #fff, 270px 69px #fff, 920px 1430px #fff, 1421px 446px #fff,
        528px 53px #fff, 1432px 119px #fff, 1836px 1388px #fff, 555px 350px #fff,
        1323px 385px #fff, 86px 1601px #fff, 10px 1862px #fff, 1706px 628px #fff,
        1267px 263px #fff, 857px 1088px #fff, 975px 1529px #fff,
        1531px 766px #fff, 367px 185px #fff, 200px 525px #fff,
        1209px 1239px #fff, 216px 295px #fff, 1143px 526px #fff,
        1000px 1232px #fff, 905px 1048px #fff, 1079px 975px #fff,
        483px 1688px #fff, 63px 598px #fff, 995px 1294px #fff,
        1223px 1986px #fff, 835px 265px #fff, 382px 671px #fff,
        662px 1932px #fff, 1891px 260px #fff, 120px 1353px #fff,
        158px 227px #fff, 1272px 318px #fff, 1001px 558px #fff,
        762px 1369px #fff, 1525px 249px #fff, 1340px 1658px #fff,
        136px 1097px #fff, 796px 1353px #fff, 1877px 1802px #fff,
        1087px 1621px #fff, 955px 1817px #fff, 961px 43px #fff,
        1235px 977px #fff, 278px 1176px #fff, 1141px 1889px #fff,
        1171px 1623px #fff, 1172px 1479px #fff, 1547px 1367px #fff,
        879px 1010px #fff, 734px 208px #fff, 925px 1972px #fff,
        119px 1776px #fff, 1866px 1062px #fff, 548px 337px #fff,
        1794px 276px #fff, 283px 1808px #fff, 491px 266px #fff,
        122px 1756px #fff, 1883px 1196px #fff, 901px 965px #fff,
        1939px 1215px #fff, 1592px 262px #fff, 1854px 1769px #fff,
        436px 174px #fff, 724px 717px #fff, 834px 1539px #fff, 515px 983px #fff,
        581px 969px #fff, 574px 332px #fff, 1732px 577px #fff,
        1385px 1630px #fff, 1476px 1765px #fff, 1219px 991px #fff,
        1370px 1548px #fff, 999px 1553px #fff, 918px 647px #fff,
        1929px 1844px #fff, 1737px 164px #fff, 1293px 488px #fff,
        1705px 469px #fff, 419px 252px #fff, 1359px 667px #fff,
        1432px 988px #fff, 882px 903px #fff, 1138px 392px #fff,
        1178px 1305px #fff, 1272px 813px #fff, 1923px 1560px #fff,
        1397px 1701px #fff, 1335px 878px #fff, 495px 561px #fff, 741px 91px #fff,
        202px 1050px #fff, 1012px 1004px #fff, 1267px 962px #fff,
        1491px 1891px #fff, 2px 924px #fff, 570px 1169px #fff,
        1874px 1320px #fff, 543px 1154px #fff, 869px 330px #fff, 99px 465px #fff,
        172px 746px #fff, 1114px 423px #fff, 987px 1226px #fff,
        1221px 1932px #fff, 732px 1463px #fff, 712px 1797px #fff,
        920px 1344px #fff, 1278px 1165px #fff, 869px 1069px #fff,
        1043px 333px #fff, 953px 1929px #fff, 861px 271px #fff,
        1495px 663px #fff, 812px 912px #fff, 1181px 116px #fff, 457px 919px #fff,
        1512px 1468px #fff, 393px 550px #fff, 308px 980px #fff, 8px 292px #fff,
        1139px 1983px #fff, 1677px 300px #fff, 1255px 1209px #fff,
        973px 2px #fff, 643px 1354px #fff, 650px 816px #fff, 394px 864px #fff,
        1698px 685px #fff, 373px 1333px #fff, 323px 437px #fff,
        1005px 158px #fff, 90px 1484px #fff, 1518px 687px #fff,
        212px 1428px #fff, 942px 208px #fff, 9px 1985px #fff, 309px 83px #fff,
        408px 1691px #fff, 734px 449px #fff, 11px 1425px #fff,
        1744px 1785px #fff, 218px 1560px #fff, 1211px 1886px #fff,
        856px 1549px #fff, 751px 971px #fff, 720px 970px #fff,
        1045px 1352px #fff, 1438px 824px #fff, 1341px 576px #fff,
        426px 981px #fff, 53px 1401px #fff, 1650px 1818px #fff, 85px 1069px #fff,
        466px 1101px #fff, 619px 607px #fff, 704px 447px #fff, 259px 1219px #fff,
        1861px 405px #fff, 982px 1176px #fff, 168px 1008px #fff,
        1662px 1389px #fff, 1621px 1375px #fff, 1986px 1856px #fff,
        1943px 1532px #fff, 1143px 1065px #fff, 1970px 745px #fff,
        1631px 957px #fff, 1719px 591px #fff, 1940px 291px #fff,
        694px 1762px #fff, 1887px 1363px #fff, 406px 259px #fff,
        1648px 1143px #fff, 1539px 1513px #fff, 1837px 329px #fff,
        1726px 1692px #fff, 1271px 1421px #fff, 741px 1408px #fff,
        1219px 952px #fff, 1401px 1399px #fff, 1626px 795px #fff,
        641px 341px #fff, 182px 1811px #fff, 1931px 1507px #fff,
        872px 187px #fff, 1474px 1987px #fff, 30px 272px #fff,
        1644px 1504px #fff, 1749px 986px #fff, 847px 1975px #fff,
        502px 1287px #fff, 1691px 848px #fff, 1865px 1833px #fff,
        1459px 1619px #fff, 1362px 543px #fff, 1230px 1533px #fff,
        1301px 662px #fff, 1078px 703px #fff, 939px 1792px #fff,
        1778px 981px #fff, 554px 734px #fff, 1621px 1696px #fff,
        1944px 1893px #fff, 735px 992px #fff, 1343px 1243px #fff,
        895px 1836px #fff, 1162px 1508px #fff, 1336px 878px #fff,
        91px 1377px #fff, 1366px 753px #fff, 416px 1901px #fff,
        698px 1964px #fff, 125px 115px #fff, 577px 198px #fff, 98px 1655px #fff,
        1021px 263px #fff, 1614px 1766px #fff, 1239px 1533px #fff,
        1420px 104px #fff, 186px 440px #fff, 1372px 1206px #fff,
        1037px 1401px #fff, 739px 1273px #fff, 746px 1687px #fff,
        1900px 1373px #fff, 1342px 1449px #fff, 926px 115px #fff,
        1185px 1138px #fff, 986px 1936px #fff, 267px 170px #fff, 64px 853px #fff,
        1306px 25px #fff, 451px 1717px #fff, 661px 355px #fff, 1400px 146px #fff,
        87px 68px #fff, 1835px 1513px #fff, 881px 1564px #fff, 1172px 844px #fff,
        1994px 682px #fff, 1364px 1472px #fff, 1089px 529px #fff,
        1525px 481px #fff, 642px 1543px #fff, 1560px 927px #fff,
        359px 417px #fff, 372px 1119px #fff, 1125px 509px #fff,
        1043px 583px #fff, 1325px 1712px #fff, 1386px 841px #fff,
        1860px 1692px #fff, 508px 941px #fff, 1497px 1341px #fff,
        1764px 529px #fff, 112px 189px #fff, 1682px 920px #fff,
        1035px 1460px #fff, 1345px 31px #fff, 1643px 1658px #fff,
        1169px 1576px #fff, 1485px 604px #fff, 823px 821px #fff,
        689px 1088px #fff, 746px 783px #fff, 671px 1214px #fff, 237px 159px #fff,
        1637px 1398px #fff, 83px 1484px #fff, 1145px 1623px #fff,
        1103px 770px #fff, 1949px 648px #fff, 8px 867px #fff, 1290px 688px #fff,
        447px 1311px #fff, 1700px 746px #fff, 659px 1894px #fff,
        579px 310px #fff, 725px 1230px #fff, 138px 479px #fff, 731px 703px #fff,
        978px 710px #fff, 1143px 1802px #fff, 590px 1575px #fff,
        1636px 1532px #fff, 1449px 273px #fff, 1415px 1595px #fff,
        1036px 588px #fff, 1153px 1712px #fff, 335px 1893px #fff,
        292px 262px #fff, 1819px 1226px #fff, 574px 1813px #fff,
        1572px 500px #fff, 1028px 254px #fff, 707px 702px #fff,
        541px 1915px #fff, 60px 995px #fff, 1388px 317px #fff, 1074px 46px #fff,
        1752px 1946px #fff, 947px 481px #fff, 752px 158px #fff,
        1581px 630px #fff, 1196px 1788px #fff, 298px 1513px #fff,
        1656px 86px #fff, 1112px 924px #fff, 584px 1609px #fff,
        1411px 839px #fff, 519px 850px #fff, 1840px 3px #fff, 1278px 1622px #fff,
        1040px 214px #fff, 1520px 628px #fff, 465px 413px #fff,
        1632px 1106px #fff, 454px 596px #fff, 1116px 1019px #fff,
        1593px 755px #fff, 1182px 1908px #fff, 310px 1127px #fff,
        1925px 1510px #fff, 739px 184px #fff, 398px 1149px #fff,
        1759px 316px #fff, 781px 1906px #fff, 298px 1739px #fff,
        1171px 112px #fff, 1832px 998px #fff, 987px 704px #fff,
        1674px 1478px #fff, 1250px 1770px #fff, 1724px 1166px #fff,
        1454px 260px #fff, 1558px 1877px #fff, 1330px 275px #fff,
        491px 1887px #fff, 835px 37px #fff, 1372px 1249px #fff,
        1120px 1488px #fff, 1819px 1534px #fff, 407px 1227px #fff,
        1058px 172px #fff, 760px 1654px #fff, 1367px 197px #fff,
        1918px 685px #fff, 473px 950px #fff, 756px 325px #fff,
        1865px 1843px #fff, 1752px 251px #fff, 438px 985px #fff,
        1280px 1553px #fff, 798px 179px #fff, 364px 1994px #fff,
        1342px 338px #fff, 567px 826px #fff, 792px 1678px #fff,
        1711px 767px #fff, 1581px 1563px #fff, 1095px 1793px #fff,
        516px 411px #fff, 1074px 1044px #fff, 1594px 1334px #fff,
        751px 1229px #fff, 294px 849px #fff, 907px 443px #fff, 1370px 908px #fff,
        245px 554px #fff, 1983px 1367px #fff, 1084px 354px #fff,
        818px 1146px #fff, 1368px 766px #fff, 1128px 638px #fff,
        1917px 531px #fff, 1060px 334px #fff, 801px 1269px #fff,
        1510px 860px #fff, 1094px 657px #fff, 1829px 1125px #fff,
        105px 1640px #fff, 244px 342px #fff, 939px 1989px #fff, 193px 696px #fff,
        210px 1665px #fff, 948px 1949px #fff, 487px 354px #fff,
        1812px 1020px #fff, 744px 241px #fff, 1964px 1816px #fff,
        700px 1162px #fff, 1673px 357px #fff, 663px 1240px #fff,
        1287px 262px #fff, 1509px 705px #fff, 1962px 1426px #fff,
        1034px 68px #fff, 1743px 296px #fff, 889px 1510px #fff,
        1387px 1668px #fff, 1772px 988px #fff, 267px 1818px #fff,
        227px 1727px #fff, 301px 188px #fff, 1292px 660px #fff,
        1296px 1409px #fff, 129px 1161px #fff, 1709px 1818px #fff,
        642px 669px #fff, 1250px 317px #fff, 1310px 243px #fff,
        1168px 1670px #fff, 248px 5px #fff, 112px 101px #fff, 1788px 959px #fff,
        125px 416px #fff, 344px 588px #fff, 273px 1817px #fff, 126px 1229px #fff,
        1779px 1825px #fff, 1965px 1496px #fff, 1723px 843px #fff,
        1347px 1192px #fff, 1600px 369px #fff, 111px 322px #fff,
        1742px 1998px #fff, 783px 322px #fff, 1568px 657px #fff, 96px 895px #fff,
        1542px 787px #fff, 657px 1214px #fff, 1545px 857px #fff,
        1732px 1907px #fff, 884px 955px #fff, 1028px 400px #fff,
        906px 1721px #fff, 1549px 373px #fff, 846px 1851px #fff,
        411px 663px #fff, 7px 929px #fff, 1781px 1767px #fff, 739px 1747px #fff,
        1695px 398px #fff, 437px 1674px #fff, 1858px 46px #fff,
        1335px 161px #fff, 247px 1885px #fff, 1834px 1838px #fff,
        1712px 1656px #fff, 1024px 1318px #fff, 422px 262px #fff,
        1795px 901px #fff, 652px 1325px #fff, 192px 755px #fff,
        331px 1331px #fff, 57px 1108px #fff, 985px 347px #fff,
        1969px 1874px #fff, 1261px 1266px #fff, 662px 1805px #fff,
        1428px 1850px #fff, 859px 998px #fff, 848px 753px #fff,
        1744px 187px #fff, 294px 1480px #fff, 1083px 1591px #fff,
        1750px 1971px #fff, 1874px 1252px #fff, 1203px 237px #fff,
        809px 1248px #fff, 693px 1515px #fff, 987px 984px #fff, 624px 390px #fff,
        742px 1949px #fff, 1664px 1401px #fff, 1902px 1067px #fff, 1px 48px #fff,
        1045px 459px #fff, 217px 289px #fff, 54px 666px #fff, 501px 1738px #fff,
        710px 1641px #fff, 639px 1673px #fff, 1572px 597px #fff,
        537px 1035px #fff, 1532px 1882px #fff, 1567px 1948px #fff,
        814px 852px #fff, 1601px 1439px #fff, 812px 662px #fff,
        610px 1394px #fff, 164px 1117px #fff, 147px 1939px #fff,
        1711px 1236px #fff, 801px 1100px #fff, 41px 1995px #fff,
        1909px 1067px #fff, 1045px 1607px #fff, 234px 1469px #fff,
        611px 444px #fff, 370px 1154px #fff, 271px 58px #fff, 865px 1164px #fff,
        1923px 1779px #fff, 1152px 1647px #fff, 1615px 862px #fff,
        1560px 1514px #fff, 879px 841px #fff, 1175px 1326px #fff,
        330px 1768px #fff, 288px 1288px #fff, 329px 1687px #fff,
        579px 988px #fff, 1431px 300px #fff, 1707px 1939px #fff, 655px 97px #fff,
        459px 1860px #fff, 14px 1505px #fff, 1783px 1297px #fff,
        651px 1475px #fff, 1397px 589px #fff, 1038px 1777px #fff,
        653px 1028px #fff, 1474px 1018px #fff, 824px 1456px #fff,
        273px 1465px #fff, 1620px 131px #fff, 1226px 1359px #fff,
        1026px 1794px #fff, 604px 348px #fff, 1291px 734px #fff,
        1403px 60px #fff, 1530px 338px #fff, 1323px 212px #fff,
        418px 1525px #fff, 619px 444px #fff, 1534px 520px #fff, 351px 802px #fff,
        1494px 1954px #fff, 778px 424px #fff, 962px 191px #fff,
        1600px 1056px #fff, 966px 240px #fff, 986px 1123px #fff,
        154px 1538px #fff, 1273px 719px #fff, 1089px 264px #fff,
        1763px 253px #fff, 1557px 1493px #fff, 918px 488px #fff,
        1293px 1867px #fff, 1970px 1491px #fff, 218px 494px #fff,
        32px 589px #fff, 1158px 1993px #fff, 875px 1573px #fff,
        1313px 913px #fff, 418px 1126px #fff, 826px 1284px #fff,
        486px 1623px #fff, 310px 440px #fff, 922px 364px #fff, 497px 806px #fff,
        227px 1410px #fff, 329px 861px #fff, 1984px 2px #fff, 1652px 1152px #fff,
        758px 150px #fff, 515px 408px #fff, 100px 1168px #fff, 1672px 559px #fff,
        475px 345px #fff, 22px 931px #fff, 1830px 599px #fff, 342px 749px #fff,
        1793px 1155px #fff, 716px 1475px #fff, 739px 1351px #fff,
        1038px 286px #fff, 667px 1101px #fff, 1123px 562px #fff,
        1256px 1225px #fff, 1314px 873px #fff, 137px 325px #fff,
        743px 1972px #fff, 151px 1287px #fff, 87px 567px #fff, 1118px 147px #fff,
        1108px 1567px #fff, 1596px 814px #fff, 944px 585px #fff, 568px 37px #fff,
        230px 1464px #fff, 540px 57px #fff, 683px 1507px #fff, 210px 437px #fff,
        493px 363px #fff, 895px 636px #fff, 1752px 871px #fff, 994px 1911px #fff,
        1901px 1567px #fff, 21px 1291px #fff, 724px 1863px #fff,
        1424px 439px #fff, 998px 1861px #fff, 189px 1231px #fff,
        1814px 1185px #fff, 1023px 607px #fff, 823px 160px #fff,
        1092px 1858px #fff, 1724px 434px #fff, 1690px 1756px #fff,
        644px 1533px #fff, 1140px 1279px #fff, 417px 1482px #fff,
        853px 440px #fff, 720px 1041px #fff, 1359px 183px #fff,
        889px 1419px #fff, 836px 1571px #fff, 1903px 1036px #fff,
        1989px 568px #fff, 1792px 1866px #fff, 1023px 1512px #fff,
        962px 1200px #fff, 393px 185px #fff, 1531px 1222px #fff,
        1488px 364px #fff, 446px 1733px #fff, 1169px 276px #fff,
        1908px 1609px #fff, 34px 307px #fff, 333px 645px #fff, 385px 1878px #fff;
    }
  }

  .stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 229px 927px #fff, 1206px 791px #fff, 535px 1914px #fff,
      98px 1522px #fff, 786px 289px #fff, 1198px 1533px #fff, 838px 759px #fff,
      1291px 1820px #fff, 1315px 1975px #fff, 134px 721px #fff,
      549px 1235px #fff, 389px 1014px #fff, 961px 1792px #fff, 550px 2px #fff,
      1660px 1231px #fff, 324px 1738px #fff, 1652px 1905px #fff, 651px 51px #fff,
      1664px 722px #fff, 1793px 900px #fff, 1786px 1305px #fff,
      1425px 882px #fff, 1088px 1337px #fff, 1700px 606px #fff, 785px 345px #fff,
      323px 410px #fff, 300px 1975px #fff, 1912px 1631px #fff,
      1702px 1925px #fff, 1579px 925px #fff, 1946px 1701px #fff, 63px 205px #fff,
      756px 1607px #fff, 1274px 1326px #fff, 1816px 984px #fff,
      1999px 772px #fff, 1982px 1645px #fff, 1573px 277px #fff,
      184px 1461px #fff, 523px 1315px #fff, 1911px 67px #fff, 368px 530px #fff,
      1981px 1639px #fff, 1685px 565px #fff, 1309px 1158px #fff,
      1248px 1317px #fff, 1774px 1789px #fff, 813px 1271px #fff, 510px 8px #fff,
      718px 346px #fff, 1343px 27px #fff, 282px 144px #fff, 1888px 1917px #fff,
      1891px 479px #fff, 367px 293px #fff, 1366px 1977px #fff, 1682px 241px #fff,
      1298px 721px #fff, 1847px 677px #fff, 1539px 1350px #fff, 526px 70px #fff,
      1078px 1854px #fff, 1200px 1092px #fff, 519px 90px #fff, 1842px 423px #fff,
      852px 360px #fff, 400px 1034px #fff, 1825px 1052px #fff,
      1682px 1071px #fff, 1973px 1632px #fff, 620px 320px #fff, 269px 1px #fff,
      404px 43px #fff, 1715px 1091px #fff, 1297px 1232px #fff, 1774px 835px #fff,
      1888px 1939px #fff, 825px 294px #fff, 1190px 1891px #fff,
      1412px 1424px #fff, 1121px 589px #fff, 902px 126px #fff, 623px 1394px #fff,
      243px 1588px #fff, 1535px 1244px #fff, 125px 927px #fff,
      1416px 1116px #fff, 1337px 1151px #fff, 232px 1191px #fff,
      1522px 1229px #fff, 358px 1091px #fff, 1305px 295px #fff,
      1206px 984px #fff, 886px 1890px #fff, 592px 958px #fff, 1297px 1765px #fff,
      1902px 759px #fff, 1388px 1784px #fff, 1154px 484px #fff,
      1281px 1156px #fff, 1716px 53px #fff, 730px 1901px #fff,
      1979px 1517px #fff, 1203px 1719px #fff, 1384px 1437px #fff,
      1893px 894px #fff, 1003px 261px #fff, 1405px 832px #fff,
      1825px 1023px #fff, 1456px 729px #fff, 12px 495px #fff, 1095px 483px #fff,
      1057px 656px #fff, 1350px 684px #fff, 290px 1815px #fff, 1391px 836px #fff,
      1285px 1850px #fff, 364px 513px #fff, 792px 1733px #fff, 551px 1379px #fff,
      993px 1294px #fff, 1173px 1767px #fff, 955px 956px #fff, 1749px 986px #fff,
      1581px 584px #fff, 1861px 1589px #fff, 1831px 1139px #fff,
      1626px 16px #fff, 615px 1089px #fff, 824px 12px #fff, 1813px 1564px #fff,
      1199px 146px #fff, 1146px 885px #fff, 330px 515px #fff, 203px 742px #fff,
      1579px 1579px #fff, 993px 617px #fff, 111px 455px #fff, 90px 1263px #fff,
      1936px 450px #fff, 761px 1213px #fff, 1066px 848px #fff, 7px 519px #fff,
      1650px 356px #fff, 1068px 1385px #fff, 421px 1875px #fff,
      1968px 229px #fff, 475px 515px #fff, 1335px 1387px #fff, 423px 1070px #fff,
      734px 1129px #fff, 1157px 719px #fff, 1288px 850px #fff, 120px 23px #fff,
      1127px 1531px #fff, 1514px 53px #fff, 1501px 1139px #fff, 618px 213px #fff,
      701px 272px #fff, 201px 1838px #fff, 267px 1560px #fff, 1550px 356px #fff,
      1182px 1429px #fff, 1411px 1316px #fff, 1766px 620px #fff,
      1856px 1111px #fff, 19px 199px #fff, 59px 974px #fff, 1463px 921px #fff,
      1462px 1199px #fff, 562px 1465px #fff, 637px 429px #fff, 1200px 538px #fff,
      230px 1398px #fff, 22px 1668px #fff, 586px 185px #fff, 968px 1328px #fff,
      804px 951px #fff, 1620px 823px #fff, 1511px 1804px #fff, 1883px 933px #fff,
      766px 1144px #fff, 1285px 522px #fff, 1236px 357px #fff, 181px 1425px #fff,
      59px 1004px #fff, 1782px 1876px #fff, 1600px 1444px #fff,
      1437px 547px #fff, 167px 1829px #fff, 1878px 1154px #fff,
      1647px 1552px #fff, 821px 718px #fff, 1773px 1330px #fff, 40px 1213px #fff,
      1266px 1780px #fff, 179px 1828px #fff, 340px 174px #fff,
      1515px 1162px #fff, 1173px 1881px #fff;
    animation: animStar 100s linear infinite;
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: 229px 927px #fff, 1206px 791px #fff, 535px 1914px #fff,
        98px 1522px #fff, 786px 289px #fff, 1198px 1533px #fff, 838px 759px #fff,
        1291px 1820px #fff, 1315px 1975px #fff, 134px 721px #fff,
        549px 1235px #fff, 389px 1014px #fff, 961px 1792px #fff, 550px 2px #fff,
        1660px 1231px #fff, 324px 1738px #fff, 1652px 1905px #fff,
        651px 51px #fff, 1664px 722px #fff, 1793px 900px #fff,
        1786px 1305px #fff, 1425px 882px #fff, 1088px 1337px #fff,
        1700px 606px #fff, 785px 345px #fff, 323px 410px #fff, 300px 1975px #fff,
        1912px 1631px #fff, 1702px 1925px #fff, 1579px 925px #fff,
        1946px 1701px #fff, 63px 205px #fff, 756px 1607px #fff,
        1274px 1326px #fff, 1816px 984px #fff, 1999px 772px #fff,
        1982px 1645px #fff, 1573px 277px #fff, 184px 1461px #fff,
        523px 1315px #fff, 1911px 67px #fff, 368px 530px #fff,
        1981px 1639px #fff, 1685px 565px #fff, 1309px 1158px #fff,
        1248px 1317px #fff, 1774px 1789px #fff, 813px 1271px #fff,
        510px 8px #fff, 718px 346px #fff, 1343px 27px #fff, 282px 144px #fff,
        1888px 1917px #fff, 1891px 479px #fff, 367px 293px #fff,
        1366px 1977px #fff, 1682px 241px #fff, 1298px 721px #fff,
        1847px 677px #fff, 1539px 1350px #fff, 526px 70px #fff,
        1078px 1854px #fff, 1200px 1092px #fff, 519px 90px #fff,
        1842px 423px #fff, 852px 360px #fff, 400px 1034px #fff,
        1825px 1052px #fff, 1682px 1071px #fff, 1973px 1632px #fff,
        620px 320px #fff, 269px 1px #fff, 404px 43px #fff, 1715px 1091px #fff,
        1297px 1232px #fff, 1774px 835px #fff, 1888px 1939px #fff,
        825px 294px #fff, 1190px 1891px #fff, 1412px 1424px #fff,
        1121px 589px #fff, 902px 126px #fff, 623px 1394px #fff,
        243px 1588px #fff, 1535px 1244px #fff, 125px 927px #fff,
        1416px 1116px #fff, 1337px 1151px #fff, 232px 1191px #fff,
        1522px 1229px #fff, 358px 1091px #fff, 1305px 295px #fff,
        1206px 984px #fff, 886px 1890px #fff, 592px 958px #fff,
        1297px 1765px #fff, 1902px 759px #fff, 1388px 1784px #fff,
        1154px 484px #fff, 1281px 1156px #fff, 1716px 53px #fff,
        730px 1901px #fff, 1979px 1517px #fff, 1203px 1719px #fff,
        1384px 1437px #fff, 1893px 894px #fff, 1003px 261px #fff,
        1405px 832px #fff, 1825px 1023px #fff, 1456px 729px #fff,
        12px 495px #fff, 1095px 483px #fff, 1057px 656px #fff, 1350px 684px #fff,
        290px 1815px #fff, 1391px 836px #fff, 1285px 1850px #fff,
        364px 513px #fff, 792px 1733px #fff, 551px 1379px #fff,
        993px 1294px #fff, 1173px 1767px #fff, 955px 956px #fff,
        1749px 986px #fff, 1581px 584px #fff, 1861px 1589px #fff,
        1831px 1139px #fff, 1626px 16px #fff, 615px 1089px #fff, 824px 12px #fff,
        1813px 1564px #fff, 1199px 146px #fff, 1146px 885px #fff,
        330px 515px #fff, 203px 742px #fff, 1579px 1579px #fff, 993px 617px #fff,
        111px 455px #fff, 90px 1263px #fff, 1936px 450px #fff, 761px 1213px #fff,
        1066px 848px #fff, 7px 519px #fff, 1650px 356px #fff, 1068px 1385px #fff,
        421px 1875px #fff, 1968px 229px #fff, 475px 515px #fff,
        1335px 1387px #fff, 423px 1070px #fff, 734px 1129px #fff,
        1157px 719px #fff, 1288px 850px #fff, 120px 23px #fff,
        1127px 1531px #fff, 1514px 53px #fff, 1501px 1139px #fff,
        618px 213px #fff, 701px 272px #fff, 201px 1838px #fff, 267px 1560px #fff,
        1550px 356px #fff, 1182px 1429px #fff, 1411px 1316px #fff,
        1766px 620px #fff, 1856px 1111px #fff, 19px 199px #fff, 59px 974px #fff,
        1463px 921px #fff, 1462px 1199px #fff, 562px 1465px #fff,
        637px 429px #fff, 1200px 538px #fff, 230px 1398px #fff, 22px 1668px #fff,
        586px 185px #fff, 968px 1328px #fff, 804px 951px #fff, 1620px 823px #fff,
        1511px 1804px #fff, 1883px 933px #fff, 766px 1144px #fff,
        1285px 522px #fff, 1236px 357px #fff, 181px 1425px #fff,
        59px 1004px #fff, 1782px 1876px #fff, 1600px 1444px #fff,
        1437px 547px #fff, 167px 1829px #fff, 1878px 1154px #fff,
        1647px 1552px #fff, 821px 718px #fff, 1773px 1330px #fff,
        40px 1213px #fff, 1266px 1780px #fff, 179px 1828px #fff,
        340px 174px #fff, 1515px 1162px #fff, 1173px 1881px #fff;
    }
  }

  .stars3 {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 1349px 716px #fff, 1554px 1677px #fff, 1395px 1162px #fff,
      1807px 1757px #fff, 1113px 1625px #fff, 587px 708px #fff,
      1110px 1743px #fff, 1432px 1553px #fff, 1555px 1481px #fff,
      275px 104px #fff, 306px 853px #fff, 1794px 1711px #fff, 1520px 1410px #fff,
      91px 916px #fff, 1737px 780px #fff, 1852px 1882px #fff, 1499px 1083px #fff,
      1786px 462px #fff, 1756px 1488px #fff, 192px 86px #fff, 344px 51px #fff,
      653px 791px #fff, 1148px 1988px #fff, 1376px 947px #fff,
      1632px 1925px #fff, 1285px 718px #fff, 448px 1934px #fff,
      515px 1716px #fff, 1544px 1161px #fff, 1188px 773px #fff,
      1517px 1540px #fff, 65px 1339px #fff, 201px 1589px #fff, 772px 1845px #fff,
      1933px 332px #fff, 1606px 1262px #fff, 223px 1186px #fff, 521px 140px #fff,
      983px 298px #fff, 1861px 98px #fff, 1893px 1977px #fff, 1038px 471px #fff,
      1540px 1079px #fff, 677px 993px #fff, 598px 798px #fff, 794px 1823px #fff,
      1412px 151px #fff, 1774px 39px #fff, 989px 18px #fff, 1087px 1207px #fff,
      207px 1983px #fff, 1338px 1329px #fff, 824px 1388px #fff,
      336px 1341px #fff, 481px 1807px #fff, 1562px 1895px #fff,
      632px 1908px #fff, 732px 1137px #fff, 141px 1906px #fff, 1941px 752px #fff,
      830px 1911px #fff, 1996px 972px #fff, 1464px 1436px #fff,
      1020px 1903px #fff, 1249px 421px #fff, 982px 1944px #fff,
      646px 1950px #fff, 1880px 1050px #fff, 908px 788px #fff,
      1860px 1748px #fff, 368px 370px #fff, 1691px 584px #fff,
      1692px 1460px #fff, 1572px 116px #fff, 1819px 1124px #fff,
      917px 859px #fff, 823px 826px #fff, 896px 1171px #fff, 1924px 1902px #fff,
      339px 864px #fff, 1154px 1586px #fff, 156px 910px #fff, 1487px 562px #fff,
      1279px 1201px #fff, 1218px 1906px #fff, 1285px 1534px #fff,
      1693px 935px #fff, 651px 1655px #fff, 1437px 1267px #fff,
      1199px 476px #fff, 1798px 1877px #fff, 1135px 1634px #fff,
      1868px 1259px #fff, 971px 1047px #fff, 1653px 1723px #fff,
      784px 1087px #fff, 706px 1959px #fff, 1070px 1349px #fff, 298px 111px #fff,
      1697px 1106px #fff;
    animation: animStar 150s linear infinite;
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: 1349px 716px #fff, 1554px 1677px #fff, 1395px 1162px #fff,
        1807px 1757px #fff, 1113px 1625px #fff, 587px 708px #fff,
        1110px 1743px #fff, 1432px 1553px #fff, 1555px 1481px #fff,
        275px 104px #fff, 306px 853px #fff, 1794px 1711px #fff,
        1520px 1410px #fff, 91px 916px #fff, 1737px 780px #fff,
        1852px 1882px #fff, 1499px 1083px #fff, 1786px 462px #fff,
        1756px 1488px #fff, 192px 86px #fff, 344px 51px #fff, 653px 791px #fff,
        1148px 1988px #fff, 1376px 947px #fff, 1632px 1925px #fff,
        1285px 718px #fff, 448px 1934px #fff, 515px 1716px #fff,
        1544px 1161px #fff, 1188px 773px #fff, 1517px 1540px #fff,
        65px 1339px #fff, 201px 1589px #fff, 772px 1845px #fff,
        1933px 332px #fff, 1606px 1262px #fff, 223px 1186px #fff,
        521px 140px #fff, 983px 298px #fff, 1861px 98px #fff, 1893px 1977px #fff,
        1038px 471px #fff, 1540px 1079px #fff, 677px 993px #fff,
        598px 798px #fff, 794px 1823px #fff, 1412px 151px #fff, 1774px 39px #fff,
        989px 18px #fff, 1087px 1207px #fff, 207px 1983px #fff,
        1338px 1329px #fff, 824px 1388px #fff, 336px 1341px #fff,
        481px 1807px #fff, 1562px 1895px #fff, 632px 1908px #fff,
        732px 1137px #fff, 141px 1906px #fff, 1941px 752px #fff,
        830px 1911px #fff, 1996px 972px #fff, 1464px 1436px #fff,
        1020px 1903px #fff, 1249px 421px #fff, 982px 1944px #fff,
        646px 1950px #fff, 1880px 1050px #fff, 908px 788px #fff,
        1860px 1748px #fff, 368px 370px #fff, 1691px 584px #fff,
        1692px 1460px #fff, 1572px 116px #fff, 1819px 1124px #fff,
        917px 859px #fff, 823px 826px #fff, 896px 1171px #fff,
        1924px 1902px #fff, 339px 864px #fff, 1154px 1586px #fff,
        156px 910px #fff, 1487px 562px #fff, 1279px 1201px #fff,
        1218px 1906px #fff, 1285px 1534px #fff, 1693px 935px #fff,
        651px 1655px #fff, 1437px 1267px #fff, 1199px 476px #fff,
        1798px 1877px #fff, 1135px 1634px #fff, 1868px 1259px #fff,
        971px 1047px #fff, 1653px 1723px #fff, 784px 1087px #fff,
        706px 1959px #fff, 1070px 1349px #fff, 298px 111px #fff,
        1697px 1106px #fff;
    }
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
</style>
