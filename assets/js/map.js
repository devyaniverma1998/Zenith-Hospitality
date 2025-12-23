// Coordinates (approximate - updated and verified for accuracy)
const cityCoordinates = {
  Ahmedabad: { latitude: 23.0225, longitude: 72.5714 },
  Amritsar: { latitude: 31.6340, longitude: 74.8723 },
  Anand: { latitude: 22.5531, longitude: 72.9515 },
  Bangalore: { latitude: 12.9716, longitude: 77.5946 },
  Bhubaneswar: { latitude: 20.2961, longitude: 85.8245 },
  Chandigarh: { latitude: 30.7333, longitude: 76.7794 },
  Chennai: { latitude: 13.0827, longitude: 80.2707 },
  Coimbatore: { latitude: 11.0168, longitude: 76.9558 },
  Goa: { latitude: 15.2993, longitude: 74.1240 }, // Panaji
  Guwahati: { latitude: 26.1445, longitude: 91.7362 },
  Hyderabad: { latitude: 17.3850, longitude: 78.4867 },
  Indore: { latitude: 22.7196, longitude: 75.8577 },
  Jaipur: { latitude: 26.9124, longitude: 75.7873 },
  Jalandhar: { latitude: 31.3260, longitude: 75.5762 },
  Kolkata: { latitude: 22.5726, longitude: 88.3639 },
  Lucknow: { latitude: 26.8467, longitude: 80.9462 },
  Ludhiana: { latitude: 30.9010, longitude: 75.8573 },
  Mumbai: { latitude: 19.0760, longitude: 72.8777 },
  "Noida Sector 18": { latitude: 28.5708, longitude: 77.3261 }, // Near Sector 18 Metro / Atta Market
  "Noida Sector 59": { latitude: 28.6080, longitude: 77.3676 }, // Central B Block area
  Patna: { latitude: 25.5941, longitude: 85.1376 },
  Pune: { latitude: 18.5204, longitude: 73.8567 },
  Rajkot: { latitude: 22.3039, longitude: 70.8022 },
  Ranchi: { latitude: 23.3441, longitude: 85.3096 },
  Rudrapur: { latitude: 28.9875, longitude: 79.4144 },
  Siliguri: { latitude: 26.7271, longitude: 88.3953 },
  Surat: { latitude: 21.1702, longitude: 72.8311 },
  Thane: { latitude: 19.2183, longitude: 72.9781 },
  Vadodara: { latitude: 22.3072, longitude: 73.1812 },
  Vijayawada: { latitude: 16.5062, longitude: 80.6480 },
  Visakhapatnam: { latitude: 17.6868, longitude: 83.2185 },
  Warangal: { latitude: 17.9689, longitude: 79.5941 },
  Delhi: { latitude: 28.6139, longitude: 77.2090 },
};

// Full addresses for each location
const cityAddresses = {
  Ahmedabad: "Unit No. 104, 1st floor 3 Eye Building, Opposite Centre Point, Panchvati Cross Road, C.G. Road, Ahmedabad - 380006",
  Amritsar: "Shop No. 6, Deep Complex, First Floor, Opposite Doaba Automobiles, Court Road, Amritsar, Punjab - 143001",
  Anand: "Plot No- 81/K/F/3,4, First Floor, Opp.- Ajay Book Stall, Near Mota Bazar Char Rasta, Mota Bazar, Vallabh Vidyanagar, Anand, Gujarat - 388120",
  Bangalore: "104, Mota Chambers, Millers Road, Opp. Cunningham Road Police Station, Bangalore - 560052",
  Bhubaneswar: "Shop No.02, Arihant Plaza, Plot No. B-15, Sahid Nagar, Bhubaneswar, Odisha - 751007",
  Chandigarh: "Suite 203, 2nd Floor, SCO 169-170, Sector 8 C, Chandigarh - 160009",
  Chennai: "A-1, 6th Floor, Tower-3, Shakti Tower, 766, Anna Salai, Chennai - 600002",
  Coimbatore: "Door No. 135, Near Sri Krishna Sweets, 1st Floor, D.B. Road, RS Puram, Coimbatore, Tamil Nadu - 641002",
  Goa: "G-56, Ground Floor, PMC House No.12/135/56, Block B, Alfran Plaza, Panaji, Goa - 403001",
  Guwahati: "Shop No G3, F- Fort Complex, Ground Floor, Kachari Basti Road, South Sarania, Ulubari, Guwahati, Assam - 781007",
  Hyderabad: "Unit No 201, H. No 6-2-976, Pavani Estates, Khairatabad, Hyderabad, Telangana - 500004",
  Indore: "211, Shivom Building 578 MG Road Opp Treasure Island Next To Punjab Jewellers, Indore - 452001",
  Jaipur: "2916, Tiwari Building, Opp. To Niros Restaurant, M.I. Road, Jaipur, Rajasthan - 302001",
  Jalandhar: "Shop no-401, 2nd Floor, 483 Karan Chamber, Garha Road, Jalandhar, Punjab - 144001",
  Kolkata: "Landmark Kwality, BF- 97, Salt Lake Rd., Sector 1, Kolkata, West Bengal - 700064",
  Lucknow: "1st Floor, Awadh Tower, Nawal Kishor Road Hazratganj, Lucknow, Uttar Pradesh - 226001",
  Ludhiana: "Sco-7, 1st Floor, Mezzanine Floor, Near PNB Bank, Feroze Gandhi Market, Ludhiana, Punjab - 141001",
  Mumbai: "608 - Shivai Plaza, Plot No 79/A-3, Marol Industrial Co-op Society Ltd, Andheri (E), Mumbai - 400059",
  "Noida Sector 18": "J-4, Sector 18, Noida, Uttar Pradesh - 201301",
  "Noida Sector 59": "B-2, B Block, Sector 59, Noida, Uttar Pradesh - 201301",
  Patna: "Patna Branch Shop No-A2 Grand Plaza, Fraser Road, Patna, Bihar - 800001",
  Pune: "Office no 74 - C Wing, FC Road, Paduka Chowk Shivajinagar Pune, Maharashtra - 411004",
  Rajkot: "Office No. 212A, Second Floor, Near Astorn Chowk, Above ICICI Bank, Rajkot, Gujarat - 360007",
  Ranchi: "Shop No. 301, 3rd Floor, Bansal Arcade, Pee Pee Compound, Ranchi, Jharkhand - 834001",
  Rudrapur: "Shop No. 6, Ground Floor, Suncity Plaza, Plot No. 4, Ward No. 13, Rudrapur, Uttarakhand - 263153",
  Siliguri: "2nd Floor, Plot No. 2499, Hillkart Road, Mauza - Siliguri J.L. No.110, Pargana - Baikunthapur, Siliguri, West Bengal - 734001",
  Surat: "UC 6 Chancellor Apartment, Opp Old RTO Office, Ring Road, Surat - 395001",
  Thane: "Shop No.3, Ground Floor, Abhiman 1 Building, L.B.S. Marg, Naupada Forest Office, Thane West, Maharashtra - 400602",
  Vadodara: "Trivia Complex, Office No. 26, Ground Floor, Near Natubhai Circle, Race Course, Vadodara, Gujarat - 390007",
  Vijayawada: "Door No.- 39-1-53, 1st Floor, Labbipet M.G. Road, Vijayawada, Andhra Pradesh - 520010",
  Visakhapatnam: "Das Arcade, 30-15-133/1 Main Road, Dhaba gardens, Visakhapatnam, Andhra Pradesh - 530020",
  Warangal: "1st Floor Shop No-26, GMR & GS Complex Kishanpura Hanamakonda, Warangal Telangana - 506001",
  Delhi: "1106, Pragati Tower, 26 Rajendra Place, New Delhi - 110008",
};
// SVG path of Bootstrap icon "geo-alt-fill"
const geoAltFillSVGPath =
  "M12 0c-4.97 0-9 4.03-9 9 0 6.08 9 15 9 15s9-8.92 9-15c0-4.97-4.03-9-9-9zM12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z";
// ... (cityCoordinates and cityAddresses remain the same as previous version)
// ... (cityCoordinates and cityAddresses remain unchanged)

am5.ready(function () {
  let root = am5.Root.new("indiaMap");

  root.setThemes([am5themes_Animated.new(root)]);

  let chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "none",
      panY: "none",
      wheelY: "none",
      projection: am5map.geoMercator(),
    })
  );

  // India map background
  chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_indiaLow,
      fill: am5.color(0xD3D3D3),
      stroke: am5.color(0xffffff),
      strokeWidth: 1,
    })
  );

  let pointSeries = chart.series.push(
    am5map.MapPointSeries.new(root, {})
  );

  // Marker icon
  function createGeoAltMarker(root) {
    return am5.Graphics.new(root, {
      svgPath: geoAltFillSVGPath,
      fill: am5.color(0x0d6efd),
      stroke: am5.color(0xffffff),
      strokeWidth: 1.5,
      scale: 1.5,
      centerX: am5.p50,
      centerY: am5.p100,
      cursorOverStyle: "pointer",
    });
  }

  function addMarker(city) {
    pointSeries.data.setAll([]);

    const coords = cityCoordinates[city];
    const address = cityAddresses[city] || "Address not available";

    if (!coords) return;

    pointSeries.data.push({
      geometry: { type: "Point", coordinates: [coords.longitude, coords.latitude] },
      title: city,
      address: address,
    });
  }

  // Pin marker
  pointSeries.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: createGeoAltMarker(root),
    });
  });

  // Label with actual city name and full address
  pointSeries.bullets.push(function (root, series, dataItem) {
    let label = am5.Label.new(root, {
      text: "[bold fontSize:16px]" + dataItem.dataContext.title + "[/]\n" + dataItem.dataContext.address,
      fill: am5.color(0x000000),
      centerX: am5.p50,
      centerY: am5.p0,
      paddingTop: 15,
      textAlign: "center",
      maxWidth: 300,
      oversizedBehavior: "wrap",
      background: am5.RoundedRectangle.new(root, {
        fill: am5.color(0xffffff),
        fillOpacity: 0.95,
        stroke: am5.color(0xcccccc),
        strokeWidth: 1,
        cornerRadiusTL: 10,
        cornerRadiusTR: 10,
        cornerRadiusBL: 10,
        cornerRadiusBR: 10,
      }),
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      paddingBottom: 10,
    });

    return am5.Bullet.new(root, {
      sprite: label,
    });
  });

  // Tooltip fallback
  pointSeries.set("tooltip", am5.Tooltip.new(root, {}));
  pointSeries.get("tooltip").label.set("text", "[bold]{title}[/]\n{address}");

  // Initial marker
  addMarker("Delhi");

  // Click handler
  document.querySelectorAll(".location-item").forEach((el) => {
    el.addEventListener("click", function () {
      document
        .querySelectorAll(".location-item")
        .forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      const city = this.getAttribute("data-city");
      addMarker(city);

      chart.zoomToGeoPoint(
        {
          longitude: cityCoordinates[city].longitude,
          latitude: cityCoordinates[city].latitude,
        },
        4,
        true
      );
    });
  });
});