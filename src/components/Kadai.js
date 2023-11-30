// import React , { useEffect, useState, useRef }  from 'react';
// import { ReactBingmaps } from 'react-bingmaps';
// import 'https:';

// const Kadai = () => {
//   useEffect(() => {
//     const mapsInit = (position) => {
//       console.log(position, '取得');
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;

//       const mapElement = document.querySelector("#myMap");
//       const map = Bmap(mapElement);
//       map.startMap(lat, lon, "load", 20);
//       const pin = map.pin(lat, lon, "pink");
//       map.infobox(lat, lon, "おすすめスポット", "私のお気に入りの料理店です");
//     };

//     const mapsError = (error) => {
//       let e = "";
//       if (error.code === 1) {
//         e = "位置情報が許可されてません";
//       }
//       if (error.code === 2) {
//         e = "現在位置を特定できません";
//       }
//       if (error.code === 3) {
//         e = "位置情報を取得する前にタイムアウトになりました";
//       }
//       alert("エラー：" + e);
//     };

//     const set = {
//       enableHighAccuracy: true,
//       maximumAge: 20000,
//       timeout: 10000,
//     };

//     const GetMap = () => {
//       navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);
//     };

//     GetMap();
//   }, []);

  
//   return (
//     <div>
//       <div id="view"></div>
//       <div id="myMap" style={{ width: '50%', height: '50%' }}></div>
//     </div>
//   );
// };

// export default Kadai;