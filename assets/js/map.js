const cityCoordinates = {
  Ahmedabad: { latitude: 23.0225, longitude: 72.5714 },

  Amritsar: { latitude: 31.6340, longitude: 74.8723 },

  Anand: { latitude: 22.5531, longitude: 72.9515 },

  Bangalore: [
    { latitude: 12.9716, longitude: 77.5946, name: "Millers Road" },
    { latitude: 12.9345, longitude: 77.6109, name: "Jayanagar" }
  ],

  Batala: { latitude: 31.8186, longitude: 75.2051 },

  Bhubaneswar: { latitude: 20.2961, longitude: 85.8245 },

  Chandigarh: [
    { latitude: 30.7333, longitude: 76.7794, name: "Sector 8C" },
    { latitude: 30.7050, longitude: 76.8000, name: "Sector 35D" }
  ],

  Chennai: [
    { latitude: 13.0827, longitude: 80.2707, name: "Anna Salai" },
    { latitude: 13.0209, longitude: 80.2214, name: "Adyar" }
  ],

  Coimbatore: { latitude: 11.0168, longitude: 76.9558 },

  Cochin: { latitude: 9.9816, longitude: 76.2999, name: "Kadavanthara" },

  Goa: { latitude: 15.4909, longitude: 73.8278, name: "Panaji" },

  Guwahati: { latitude: 26.1445, longitude: 91.7362 },

  Gurgaon: { latitude: 28.4595, longitude: 77.0266, name: "MG Road / Sahara Mall" },

  Hyderabad: [
    { latitude: 17.3850, longitude: 78.4867, name: "Khairatabad" },
    { latitude: 17.3616, longitude: 78.4747, name: "Chaitanyapuri" }
  ],

  Indore: { latitude: 22.7196, longitude: 75.8577 },

  Jaipur: { latitude: 26.9124, longitude: 75.7873 },

  Jalandhar: { latitude: 31.3260, longitude: 75.5762 },

  Karnal: { latitude: 29.6857, longitude: 76.9905 },

  Kolkata: [
    { latitude: 22.5726, longitude: 88.3639, name: "Salt Lake Sector 1" },
    { latitude: 22.5143, longitude: 88.3610, name: "Lake Gardens / Tollygunge" },
    { latitude: 22.5389, longitude: 88.3686, name: "AJC Bose Road" },
    { latitude: 22.5764, longitude: 88.4333, name: "Sector V" },
    { latitude: 22.5177, longitude: 88.3833, name: "Ballygunge" }
  ],

  Lucknow: { latitude: 26.8467, longitude: 80.9462 },

  Ludhiana: { latitude: 30.9010, longitude: 75.8573 },

  Mumbai: [
    { latitude: 19.0760, longitude: 72.8777, name: "Andheri East (Marol)" },
    { latitude: 19.1185, longitude: 72.9164, name: "Andheri East (Makwana Rd)" }
  ],

  "New Delhi": [
    { latitude: 28.6143, longitude: 77.0318, name: "Janakpuri (District Centre)" },
    { latitude: 28.6360, longitude: 77.0986, name: "Vikaspuri" },
    { latitude: 28.5802, longitude: 77.1945, name: "Vasant Vihar (Basant Lok)" },
    { latitude: 28.6340, longitude: 77.2200, name: "Rajendra Place" },
    { latitude: 28.6143, longitude: 77.0318, name: "Janakpuri (2nd Branch)" }, // Approximate same as first Janakpuri
    { latitude: 28.6289, longitude: 77.0795, name: "Connaught Place" }
  ],

  Noida: [
    { latitude: 28.6080, longitude: 77.3676, name: "Sector 59" },
    { latitude: 28.5708, longitude: 77.3261, name: "Sector 18" }
  ],

  Patna: { latitude: 25.5941, longitude: 85.1376 },

  Pune: [
    { latitude: 18.5204, longitude: 73.8567, name: "FC Road / Shivajinagar" },
    { latitude: 18.5027, longitude: 73.8225, name: "Deccan Gymkhana" }
  ],

  Rajkot: { latitude: 22.3039, longitude: 70.8022 },

  Ranchi: { latitude: 23.3441, longitude: 85.3096 },

  Raipur: { latitude: 21.2333, longitude: 81.6333, name: "Telibandha" },

  Rudrapur: { latitude: 28.9875, longitude: 79.4144 },

  Siliguri: { latitude: 26.7271, longitude: 88.3953 },

  Surat: { latitude: 21.1702, longitude: 72.8311 },

  Thane: { latitude: 19.2183, longitude: 72.9781 },

  Vadodara: { latitude: 22.3072, longitude: 73.1812 },

  Vijayawada: { latitude: 16.5062, longitude: 80.6480 },

  Visakhapatnam: { latitude: 17.6868, longitude: 83.2185 },

  Warangal: { latitude: 17.9689, longitude: 79.5941 },
};

const cityAddresses = {
  Ahmedabad: { address: "Unit No. 104, 1 floor 3 Eye Building, Opposite Centre Point, Panchvati Cross Road, C.G. Road, Ahmedabad - 380006" },

  Amritsar: { address: "Shop No. 6, Deep Complex, First Floor, Opposite Doaba Automobiles, Court Road, Amritsar, Punjab - 143001" },

  Anand: { address: "Plot No 81/K/F/3,4, First Floor, Opp.- Ajay Book Stall, Near Mots Bazar Char Rasta, Mota Bazar, Vallabh Vidyanagar, Anand, Gujarat - 388120" },

  Bangalore: [
    { address: "104, Mota Chambers, Millers Road, Opp. Cunningham Road Police Station, Bangalore - 560052", name: "Millers Road" },
    { address: "No. 159, 2nd Floor, 36th Cross Road, 5th Block, Jayanagar, Opp. M.E.S. Ground, Bangalore, Karnataka - 560043", name: "Jayanagar" }
  ],

  Batala: { address: "Shop No. 1, Chuman Complex, Fawara Chowk, Jalandhar Road, Batala, Punjab - 143505" },

  Bhubaneswar: { address: "Shop No.02, Arihant Plaza, Plot No. B-15, Sahid Nagar, Bhubaneswar, Odisha - 751007" },

  Chandigarh: [
    { address: "Suite 203, 2nd Floor, Sco 169-170, Sector 8C, Chandigarh - 160009", name: "Sector 8C" },
    { address: "SCO 291, Sector 35D, Chandigarh - 160035", name: "Sector 35D" }
  ],

  Chennai: [
    { address: "A-1, 6 Floor, Tower-3, Shakti Tower, 766, Anna Salai, Chennai - 600002", name: "Anna Salai" },
    { address: "57, Kaba Plaza, L.B. Road, 2C, 2nd Floor, Next to Adyar Police Station Building, Adyar, Chennai, Tamil Nadu - 600040", name: "Adyar" }
  ],

  Coimbatore: { address: "Door No. 135, Near Sri Krishna Sweets, 1st Floor, D.B. Road, R.S. Puram, Coimbatore, Tamil Nadu - 641002" },

  Cochin: { address: "1117/ 1320, Kannadisseril House Kadavanthara kaloor Road, Cochin – 682017", name: "Kadavanthara" },

  Goa: { address: "C-56, Ground Floor, PMC House No. 12/135/56, Block B, Alfran Plaza, Panaji, Goa - 403001", name: "Panaji" },

  Guwahati: { address: "Shop No G3, F- Fort Complex, Ground Floor, Kachari Basti Road, South Sarania, Ulubari Guwahati, Assam - 781007" },

  Gurgaon: { address: "S 113 Ist floor, Sahara Mall MG Road, Gurgaon", name: "MG Road / Sahara Mall" },

  Hyderabad: [
    { address: "Unit No 201, H. No 6-2-976, Pavani Estates, Khairatabad, Hyderabad, Telangana - 500004", name: "Khairatabad" },
    { address: "Shop No. 25, Rajiniganda Complex, Metro Pillar No. A5563, Chaitanyapuri, Hyderabad Telangana - 500060", name: "Chaitanyapuri" }
  ],

  Indore: { address: "211 Shivom Building 578 Mg Road Opp Treasure Island Next To Punjab Jewellers, Indore - 452001" },

  Jaipur: { address: "2916, Tiwari Building, Opp. To Niros Resturant, M.I. Road, Jaipur, Rajasthan - 302001" },

  Jalandhar: { address: "Shop no-401, 2 floor, 483 Karan Chamber, Garha Road, Jalandhar, Punjab - 144001" },

  Karnal: { address: "Shop No.-84, Scheme No. 34 Extn Ff, Old Mugalcanal Karnal, Haryana - 132001" },

  Kolkata: [
    { address: "Landmark Kwality, BE- 97, Salt Lake Rd., Sector 1, Kolkata, West Bengal - 700064", name: "Salt Lake Sector 1" },
    { address: "Shop No. 378, Lake Gardens Rd., South City Complex, Tollygunge, Kolkata, West Bengal - 700045", name: "Lake Gardens / Tollygunge" },
    { address: "234/3A, A.J.C. Bose Road, Unit A-3, 4th Floor, Kolkata, West Bengal - 700020", name: "AJC Bose Road" },
    { address: "Ground Floor, Kariwala Tower, EP Block, Sector V, Bidhan Nagar, Kolkata, West Bengal - 700091", name: "Sector V" },
    { address: "68, Ballygunge Circular Rd, Annapurna Apartment, Kolkata, West Bengal - 700019", name: "Ballygunge" }
  ],

  Lucknow: { address: "1st Floor, Awadh Tower, Nawal Kishor Road Hazaratganj, Lucknow, Uttar Pradesh - 226001" },

  Ludhiana: { address: "Sco-7, 1st Floor, Mezzanine Floor, Near PNB Bank, Feroze Gandhi Market, Ludhiana, Punjab - 141001" },

  Mumbai: [
    { address: "608 Shival Plaza, Plot No 79/A-3, Marol Industrial Co-op Society Ltd, Andheri (E) Mumbai - 400059", name: "Andheri East (Marol)" },
    { address: "7th Floor, Timmy Arcado, Jal Antariksha Commercial Building, Makwana Rd., Gamdhari, Marol, Andheri East, Mumbai, Maharashtra - 400059", name: "Andheri East (Makwana Rd)" }
  ],

  "New Delhi": [
    { address: "401, DDA Building 5, 4 Floor District Centre, Janakpuri, New Delhi - 110058", name: "Janakpuri (District Centre)" },
    { address: "Unit No. 101, 1st Floor, Block-E, Local shopping centre, Vikaspuri, New Delhi - 110018", name: "Vikaspuri" },
    { address: "1st floor of 5 Community Centre, Basant Lok, Vasant Vihar, New Delhi - 110057", name: "Vasant Vihar (Basant Lok)" },
    { address: "1106, Pragati Tower, 26 Rajendra Place, New Delhi - 110008", name: "Rajendra Place" },
    { address: "305, DDA Building 5, 3 Floor District Centre, Janakpuri, New Delhi - 110058", name: "Janakpuri (2nd Branch)" },
    { address: "Flat No- 308, Competent House No. 14, Connaught Place New Delhi - 110001", name: "Connaught Place" }
  ],

  Noida: [
    { address: "B-2, B Block, Sector 59, Noida, Uttar Pradesh 201301", name: "Sector 59" },
    { address: "34, Sector18, Noida, Uttar Pradesh 201301", name: "Sector 18" }
  ],

  Patna: { address: "Patna Branch Shop No-A2 Grand Plaza, fraser Road, Patna, Bihar - 800001" },

  Pune: [
    { address: "Office no 74-C Wing, FC Road, Paduka Chowk Shivajinagar Pune, Maharashtra - 411004", name: "FC Road / Shivajinagar" },
    { address: "Bhandarkar Rd., Shreeman Society, Deccan Gymkhana, Pune, Maharashtra - 411004", name: "Deccan Gymkhana" }
  ],

  Rajkot: { address: "Office No. 212A, Second Floor, Near Astorn Chowk, Above ICICI Bank, Rajkot, Gujarat - 360007" },

  Ranchi: { address: "Shop No. 301, 3rd Floor, Bansal Arcade, Pee Pee Compound, Ranchi, Jharkhand - 834001" },

  Raipur: { address: "Office No. 08, 3rd Floor, Quorum Complex, Telibandha, Raipur, Chhattisgarh - 492006", name: "Telibandha" },

  Rudrapur: { address: "Shop No. 6, Ground Floor, Suncity Plaza, Plot No. 4, Ward No. 13, Rudrapur, Uttarakhand - 263153" },

  Siliguri: { address: "2 Floor, Plot No. 2499, Hillkart Road, Mauza- Siliguri J.L. No.110, Pargana - Baikunthapur, Siliguri, West Bengal - 734001" },

  Surat: { address: "UC 6 Chancellor Apartament, Opp Old RTO Office, Ring Road, Surat - 395001" },

  Thane: { address: "Shop No.3, Ground Floor, Abhiman 1 Building, L.B.S. Marg, Naupada Forest Office, Thane West, Maharashtra - 400602" },

  Vadodara: { address: "Trivia Complex, Office No. 26, Ground Floor, Near Natubhai Circle, Race Course, Vadodara, Gujarat - 390007" },

  Vijayawada: { address: "Door No. -39-1-53, 1st Floor, Labbipet M.G. Road, Vijayawada, Andhra Pradesh - 520010" },

  Visakhapatnam: { address: "Das Arcade, 30-15-133/1 Main Road, Dhaba gardens, Visakhapatnam, Andhra Pradesh - 530020" },

  Warangal: { address: "1st Floor Shop No-26, GMR & GS Complex Kishanpura Hanamakonda, Warangal Telangana - 506001" },
};

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

  // Marker icon (Bootstrap geo-alt-fill)
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

  // Updated addMarker to support multiple branches (using data-index)
  function addMarker(city, index = 0) {
    pointSeries.data.setAll([]);

    let locations = cityCoordinates[city];
    let addresses = cityAddresses[city];

    if (!locations) return;

    // Handle both single object and array cases
    if (!Array.isArray(locations)) {
      locations = [locations];
      addresses = [addresses];
    }

    // Use the selected branch (by index)
    const selectedLocation = locations[index];
    const selectedAddressObj = addresses[index] || addresses[0]; // fallback

    const fullAddress = selectedAddressObj.address || selectedAddressObj || "Address not available";
    const branchName = selectedLocation.name || selectedAddressObj.name || "";

    // City title to show on label
    const title = branchName ? `${city} - ${branchName}` : city;

    pointSeries.data.push({
      geometry: { type: "Point", coordinates: [selectedLocation.longitude, selectedLocation.latitude] },
      title: title,
      address: fullAddress,
      city: city,
      index: index,
    });
  }

  // Pin marker
  pointSeries.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: createGeoAltMarker(root),
    });
  });

  // Label with city name + branch + full address
  pointSeries.bullets.push(function (root, series, dataItem) {
    let label = am5.Label.new(root, {
      text: "[bold fontSize:16px]" + dataItem.dataContext.title + "[/]\n" + dataItem.dataContext.address,
      fill: am5.color(0x000000),
      centerX: am5.p50,
      centerY: am5.p0,
      paddingTop: 20,
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

  // Initial marker (default: Kolkata - first branch)
  addMarker("Kolkata", 0);

  // Click handler for location items
  document.querySelectorAll(".location-item").forEach((el) => {
    el.addEventListener("click", function () {
      // Remove active from all
      document
        .querySelectorAll(".location-item")
        .forEach((item) => item.classList.remove("active"));

      // Add active to clicked
      this.classList.add("active");

      const city = this.getAttribute("data-city");
      const indexAttr = this.getAttribute("data-index");
      const index = indexAttr !== null ? parseInt(indexAttr) : 0;

      addMarker(city, index);

      // Zoom to the selected location
      const locations = cityCoordinates[city];
      if (!locations) return;

      const coords = Array.isArray(locations) ? locations[index] : locations;

      chart.zoomToGeoPoint(
        {
          longitude: coords.longitude,
          latitude: coords.latitude,
        },
        5, // Slightly higher zoom for better visibility
        true
      );
    });
  });

  // Optional: Trigger click on the active item on load
  const activeItem = document.querySelector(".location-item.active");
  if (activeItem) {
    activeItem.dispatchEvent(new Event("click"));
  }
});