const productList = document.getElementById("product-list");
const searchBar = document.getElementById("search-bar");
// Dữ liệu sản phẩm
let productS = [
  {
    id: 1,
    title: "Samsung Galaxy Book3 360 15",
    description:
      "Core™ i7-1360P, RAM 16GB, SSD 512GB. Màn hình cảm ứng xoay gập 360 độ, mỏng nhẹ thời thượng.",
    category: "laptops",
    price: 17990000,
    thumbnail:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    stock: 15,
    tags: ["laptops", "samsung", "2-in-1"],
    brand: "Samsung",
    sku: "SAM-GB3-360",
  },
  {
    id: 2,
    title: "Macbook Pro 14 M4 2024",
    description:
      "Apple M4 (10-CPU, 10-GPU), 16GB RAM, 512GB SSD. Hiệu năng đồ họa đỉnh cao cho người dùng chuyên nghiệp.",
    category: "laptops",
    price: 39990000,
    thumbnail:
      "https://images.unsplash.com/photo-1517336714460-457228377a7c?auto=format&fit=crop&w=800&q=80",
    stock: 20,
    tags: ["laptops", "apple", "macbook", "m4"],
    brand: "Apple",
    sku: "APP-MBP-14-M4",
  },
  {
    id: 3,
    title: "Asus ROG Strix G18 2025",
    description:
      "Core Ultra 9, RTX 5070 Ti, 32GB RAM, 1TB. Quái vật gaming với màn hình 18 inch 240Hz cực đại.",
    category: "laptops",
    price: 62990000,
    thumbnail:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    stock: 5,
    tags: ["laptops", "gaming", "asus", "rog"],
    brand: "ASUS",
    sku: "ASU-ROG-G18",
  },
  {
    id: 4,
    title: "Dell XPS 13 9340",
    description:
      "Ultra 7 155H, 16GB, 1TB. Thiết kế viền vô cực siêu mỏng, định nghĩa lại sự sang trọng.",
    category: "laptops",
    price: 42500000,
    thumbnail:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    stock: 8,
    tags: ["laptops", "dell", "xps", "ultrabook"],
    brand: "Dell",
    sku: "DEL-XPS-13",
  },
  {
    id: 5,
    title: "HP Spectre x360 14",
    description:
      "Core Ultra 7, 32GB RAM, 1TB SSD. Laptop văn phòng cao cấp nhất của HP với màn hình OLED 2.8K.",
    category: "laptops",
    price: 38500000,
    thumbnail:
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=800&q=80",
    stock: 10,
    tags: ["laptops", "hp", "spectre", "oled"],
    brand: "HP",
    sku: "HP-SPEC-14",
  },
  {
    id: 6,
    title: "Lenovo Legion Pro 7i",
    description:
      "i9-14900HX, RTX 4080, 32GB, 1TB. Khả năng tản nhiệt đỉnh cao, cân mọi tựa game AAA.",
    category: "laptops",
    price: 55900000,
    thumbnail:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    stock: 4,
    tags: ["laptops", "gaming", "lenovo", "legion"],
    brand: "Lenovo",
    sku: "LEN-LEG-P7",
  },
  {
    id: 7,
    title: "Microsoft Surface Pro 11 AI",
    description:
      "Snapdragon X Elite, 16GB, 512GB. Thế hệ Surface mới tích hợp chip xử lý AI chuyên dụng.",
    category: "laptops",
    price: 34900000,
    thumbnail:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
    stock: 12,
    tags: ["laptops", "surface", "microsoft", "ai"],
    brand: "Microsoft",
    sku: "MS-SUR-P11",
  },
  {
    id: 8,
    title: "Acer Predator Helios Neo 16",
    description:
      "i7-13700HX, RTX 4060, 16GB. Thiết kế đậm chất gaming với các ký tự ẩn hiện độc đáo.",
    category: "laptops",
    price: 29990000,
    thumbnail:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    stock: 15,
    tags: ["laptops", "gaming", "acer", "predator"],
    brand: "Acer",
    sku: "ACE-PRED-NEO",
  },
  {
    id: 9,
    title: "MSI Stealth 14 Studio",
    description:
      "i7-13620H, RTX 4060. Laptop gaming nhưng mỏng nhẹ như văn phòng, vỏ nhôm magie.",
    category: "laptops",
    price: 32900000,
    thumbnail:
      "https://images.unsplash.com/photo-1558864559-ed673ba3610b?auto=format&fit=crop&w=800&q=80",
    stock: 6,
    tags: ["laptops", "gaming", "msi", "stealth"],
    brand: "MSI",
    sku: "MSI-STE-14",
  },
  {
    id: 10,
    title: "LG Gram Pro 17 2024",
    description:
      "Core Ultra 7, 16GB, 1TB. Màn hình 17 inch siêu lớn nhưng trọng lượng chỉ 1.2kg.",
    category: "laptops",
    price: 36500000,
    thumbnail:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    stock: 7,
    tags: ["laptops", "lg", "gram", "lightweight"],
    brand: "LG",
    sku: "LG-GR-PRO17",
  },
  {
    id: 11,
    title: "Razer Blade 16",
    description:
      "i9-14900HX, RTX 4090, 32GB RAM. Đỉnh cao của giới laptop Windows, hoàn thiện cực kỳ tinh xảo.",
    category: "laptops",
    price: 95000000,
    thumbnail:
      "https://images.unsplash.com/photo-1525548064874-9a4d5d3ff444?auto=format&fit=crop&w=800&q=80",
    stock: 2,
    tags: ["laptops", "gaming", "razer", "luxury"],
    brand: "Razer",
    sku: "RAZ-BL-16",
  },
  {
    id: 12,
    title: "Gigabyte Aorus 15 2024",
    description:
      "i7-13700H, RTX 4070, 16GB. Màn hình QHD 165Hz màu sắc cực chuẩn cho đồ họa.",
    category: "laptops",
    price: 35900000,
    thumbnail:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    stock: 9,
    tags: ["laptops", "gaming", "gigabyte", "aorus"],
    brand: "Gigabyte",
    sku: "GIG-AOR-15",
  },
  {
    id: 13,
    title: "Samsung Galaxy Book4 Ultra",
    description:
      "Core Ultra 9, RTX 4070, 32GB. Sự kết hợp hoàn hảo giữa hiệu năng của máy gaming và sự mỏng nhẹ.",
    category: "laptops",
    price: 49900000,
    thumbnail:
      "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?auto=format&fit=crop&w=800&q=80",
    stock: 5,
    tags: ["laptops", "samsung", "ultra"],
    brand: "Samsung",
    sku: "SAM-GB4-ULT",
  },
  {
    id: 14,
    title: "Macbook Air 13 M3 2024",
    description:
      "Apple M3, 8GB RAM, 256GB SSD. Pin dùng cả ngày, không tiếng ồn, siêu mỏng.",
    category: "laptops",
    price: 26990000,
    thumbnail:
      "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?auto=format&fit=crop&w=800&q=80",
    stock: 25,
    tags: ["laptops", "apple", "air", "m3"],
    brand: "Apple",
    sku: "APP-MBA-13-M3",
  },
  {
    id: 15,
    title: "Dell Inspiron 14 7430",
    description:
      "i5-1335U, 16GB, 512GB. Laptop văn phòng 2-trong-1 giá tốt, bền bỉ.",
    category: "laptops",
    price: 16900000,
    thumbnail:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    stock: 18,
    tags: ["laptops", "dell", "inspiron"],
    brand: "Dell",
    sku: "DEL-INS-14",
  },
  {
    id: 16,
    title: "Asus Zenbook S 13 OLED",
    description:
      "i7-1355U, 16GB, 1TB. Laptop OLED 13 inch mỏng nhất thế giới, làm từ vật liệu bền vững.",
    category: "laptops",
    price: 31900000,
    thumbnail:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    stock: 11,
    tags: ["laptops", "asus", "zenbook", "oled"],
    brand: "ASUS",
    sku: "ASU-ZEN-S13",
  },
  {
    id: 17,
    title: "Lenovo Yoga Slim 7i Pro",
    description:
      "Core i7, 16GB, 512GB. Màn hình 2.8K 90Hz cực mượt, độ chuẩn màu cao.",
    category: "laptops",
    price: 24500000,
    thumbnail:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
    stock: 14,
    tags: ["laptops", "lenovo", "yoga", "pro"],
    brand: "Lenovo",
    sku: "LEN-YOG-7I",
  },
  {
    id: 18,
    title: "HP Victus 16 2024",
    description:
      "i5-13500H, RTX 4050, 16GB. Lựa chọn gaming quốc dân cho sinh viên.",
    category: "laptops",
    price: 20900000,
    thumbnail:
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=800&q=80",
    stock: 20,
    tags: ["laptops", "gaming", "hp", "victus"],
    brand: "HP",
    sku: "HP-VIC-16",
  },
  {
    id: 19,
    title: "Acer Swift Go 14 AI",
    description:
      "Ultra 5 125H, 16GB, 512GB. Tích hợp phím tắt Copilot, màn hình OLED rực rỡ.",
    category: "laptops",
    price: 18990000,
    thumbnail:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    stock: 16,
    tags: ["laptops", "acer", "swift", "ai"],
    brand: "Acer",
    sku: "ACE-SWI-GO",
  },
  {
    id: 20,
    title: "MSI Katana 17",
    description:
      "i7-13620H, RTX 4060, màn hình 17.3 inch 144Hz. Không gian hiển thị rộng rãi cho game thủ.",
    category: "laptops",
    price: 28500000,
    thumbnail:
      "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=800&q=80",
    stock: 8,
    tags: ["laptops", "gaming", "msi", "katana"],
    brand: "MSI",
    sku: "MSI-KAT-17",
  },
  {
    id: 21,
    title: "Lenovo ThinkPad X1 Carbon Gen 12",
    description: "Flagship cho doanh nhân, cực bền, siêu nhẹ.",
    category: "laptops",
    price: 45000000,
    thumbnail:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
    stock: 5,
    tags: ["business"],
    brand: "Lenovo",
    sku: "TP-X1-C12",
  },
  {
    id: 22,
    title: "Asus Vivobook S 15 AI",
    description: "Chip Snapdragon X, pin lên tới 18 tiếng.",
    category: "laptops",
    price: 27990000,
    thumbnail:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    stock: 10,
    tags: ["ai", "long-battery"],
    brand: "ASUS",
    sku: "ASU-VV-S15",
  },
  {
    id: 23,
    title: "Dell Latitude 5440",
    description: "Laptop bền bỉ cho doanh nghiệp, bảo mật cao.",
    category: "laptops",
    price: 19500000,
    thumbnail:
      "https://images.unsplash.com/photo-1593642634315-48f541e2456b?auto=format&fit=crop&w=800&q=80",
    stock: 30,
    tags: ["business"],
    brand: "Dell",
    sku: "DEL-LAT-5440",
  },
  {
    id: 24,
    title: "HP Envy 16 2024",
    description: "Core i9, RTX 4060. Sức mạnh trong thiết kế tối giản.",
    category: "laptops",
    price: 34900000,
    thumbnail:
      "https://images.unsplash.com/photo-1517336714460-457228377a7c?auto=format&fit=crop&w=800&q=80",
    stock: 6,
    tags: ["creative"],
    brand: "HP",
    sku: "HP-ENVY-16",
  },
  {
    id: 25,
    title: "Macbook Pro 16 M3 Max",
    description: "Khủng long hiệu năng cho editor phim chuyên nghiệp.",
    category: "laptops",
    price: 85000000,
    thumbnail:
      "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?auto=format&fit=crop&w=800&q=80",
    stock: 3,
    tags: ["m3max", "apple"],
    brand: "Apple",
    sku: "APP-MBP-16",
  },
  {
    id: 26,
    title: "Acer Nitro V 15",
    description: "RTX 4050, i5 Gen 13. Giá rẻ hiệu năng cao.",
    category: "laptops",
    price: 18500000,
    thumbnail:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    stock: 25,
    tags: ["gaming-budget"],
    brand: "Acer",
    sku: "ACE-NIT-V",
  },
  {
    id: 27,
    title: "MSI Prestige 16 AI",
    description: "Màn hình 4K OLED, chip Ultra 7 cực mạnh.",
    category: "laptops",
    price: 39900000,
    thumbnail:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    stock: 4,
    tags: ["luxury", "msi"],
    brand: "MSI",
    sku: "MSI-PRE-16",
  },
  {
    id: 28,
    title: "Lenovo Yoga Book 9i",
    description: "Hai màn hình OLED gập độc đáo.",
    category: "laptops",
    price: 48000000,
    thumbnail:
      "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&w=800&q=80",
    stock: 2,
    tags: ["innovation"],
    brand: "Lenovo",
    sku: "LEN-YOGA-DUAL",
  },
  {
    id: 29,
    title: "Asus TUF Gaming F15",
    description: "i7-12700H, RTX 4060. Siêu bền chuẩn quân đội.",
    category: "laptops",
    price: 25900000,
    thumbnail:
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=800&q=80",
    stock: 15,
    tags: ["gaming", "tuf"],
    brand: "ASUS",
    sku: "ASU-TUF-F15",
  },
  {
    id: 30,
    title: "Microsoft Surface Laptop 6",
    description: "Thiết kế nhôm nguyên khối, trackpad haptic.",
    category: "laptops",
    price: 31000000,
    thumbnail:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
    stock: 9,
    tags: ["surface"],
    brand: "Microsoft",
    sku: "MS-SL-6",
  },
  {
    id: 31,
    title: "Gigabyte G6 Gaming",
    description: "Màn hình 16 inch 165Hz, RTX 4060.",
    category: "laptops",
    price: 24500000,
    thumbnail:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    stock: 10,
    tags: ["gaming"],
    brand: "Gigabyte",
    sku: "GIG-G6",
  },
  {
    id: 32,
    title: "Razer Blade 14 Pink",
    description: "Phiên bản màu hồng cực hiếm cho nữ streamer.",
    category: "laptops",
    price: 55000000,
    thumbnail:
      "https://images.unsplash.com/photo-1525548064874-9a4d5d3ff444?auto=format&fit=crop&w=800&q=80",
    stock: 1,
    tags: ["pink", "razer"],
    brand: "Razer",
    sku: "RAZ-BL-14-P",
  },
  {
    id: 33,
    title: "Samsung Galaxy Book 2 Pro",
    description: "Siêu mỏng chỉ 0.8cm, màn hình AMOLED.",
    category: "laptops",
    price: 15900000,
    thumbnail:
      "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?auto=format&fit=crop&w=800&q=80",
    stock: 12,
    tags: ["amoled"],
    brand: "Samsung",
    sku: "SAM-GB-P2",
  },
  {
    id: 34,
    title: "HP Pavilion Aero 13",
    description: "Nhẹ hơn 1kg, chip Ryzen 7 mạnh mẽ.",
    category: "laptops",
    price: 14900000,
    thumbnail:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    stock: 20,
    tags: ["lightweight"],
    brand: "HP",
    sku: "HP-AERO-13",
  },
  {
    id: 35,
    title: "Dell G15 5530",
    description: "i7-13650HX, RTX 4060. Đậm chất hầm hố.",
    category: "laptops",
    price: 27500000,
    thumbnail:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    stock: 15,
    tags: ["gaming"],
    brand: "Dell",
    sku: "DEL-G15",
  },
  {
    id: 36,
    title: "Asus ROG Flow Z13",
    description: "Laptop gaming dạng tablet tháo rời phím.",
    category: "laptops",
    price: 42000000,
    thumbnail:
      "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?auto=format&fit=crop&w=800&q=80",
    stock: 4,
    tags: ["tablet-gaming"],
    brand: "ASUS",
    sku: "ASU-FLOW-Z13",
  },
  {
    id: 37,
    title: "MSI Pulse 15",
    description: "Thiết kế lấy cảm hứng từ phim viễn tưởng.",
    category: "laptops",
    price: 30500000,
    thumbnail:
      "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=800&q=80",
    stock: 7,
    tags: ["gaming"],
    brand: "MSI",
    sku: "MSI-PUL-15",
  },
  {
    id: 38,
    title: "Acer Swift Edge 16",
    description: "OLED 3.2K, mỏng nhẹ bậc nhất cho màn 16 inch.",
    category: "laptops",
    price: 26900000,
    thumbnail:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    stock: 5,
    tags: ["oled", "lightweight"],
    brand: "Acer",
    sku: "ACE-SWI-E16",
  },
  {
    id: 39,
    title: "Lenovo LOQ 15",
    description: "Dòng gaming giá rẻ mới thay thế IdeaPad Gaming.",
    category: "laptops",
    price: 19500000,
    thumbnail:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    stock: 18,
    tags: ["gaming"],
    brand: "Lenovo",
    sku: "LEN-LOQ-15",
  },
  {
    id: 40,
    title: "LG Gram Pro 16 2-in-1",
    description: "Màn hình 16 inch xoay gập, hỗ trợ bút.",
    category: "laptops",
    price: 38900000,
    thumbnail:
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=800&q=80",
    stock: 3,
    tags: ["2-in-1"],
    brand: "LG",
    sku: "LG-GR-16F",
  },
  {
    id: 41,
    title: "Samsung Galaxy Book 3 Ultra",
    description: "Màn hình Dynamic AMOLED 2X, i9, RTX 4070.",
    category: "laptops",
    price: 52000000,
    thumbnail:
      "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?auto=format&fit=crop&w=800&q=80",
    stock: 2,
    tags: ["ultra"],
    brand: "Samsung",
    sku: "SAM-GB-U3",
  },
  {
    id: 42,
    title: "Dell Precision 5480",
    description: "Máy trạm Workstation nhỏ nhất thế giới.",
    category: "laptops",
    price: 59000000,
    thumbnail:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
    stock: 4,
    tags: ["workstation"],
    brand: "Dell",
    sku: "DEL-PRE-5480",
  },
  {
    id: 43,
    title: "Apple MacBook Pro 14 M3",
    description: "Chip M3, pin 22 tiếng, màu Space Grey.",
    category: "laptops",
    price: 36500000,
    thumbnail:
      "https://images.unsplash.com/photo-1517336714460-457228377a7c?auto=format&fit=crop&w=800&q=80",
    stock: 15,
    tags: ["apple", "m3"],
    brand: "Apple",
    sku: "APP-MBP-14",
  },
  {
    id: 44,
    title: "HP Victus 15 2023",
    description: "i5-12450H, RTX 3050. Gaming rẻ nhất thị trường.",
    category: "laptops",
    price: 14500000,
    thumbnail:
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=800&q=80",
    stock: 20,
    tags: ["budget"],
    brand: "HP",
    sku: "HP-VIC-15",
  },
  {
    id: 45,
    title: "MSI Vector GP68",
    description: "i9, RTX 4080. Sức mạnh thuần túy không giới hạn.",
    category: "laptops",
    price: 54000000,
    thumbnail:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    stock: 5,
    tags: ["gaming"],
    brand: "MSI",
    sku: "MSI-VEC-68",
  },
  {
    id: 46,
    title: "Asus Zenbook 14 OLED 2024",
    description: "Màn hình 120Hz OLED, chip Ultra 5.",
    category: "laptops",
    price: 22900000,
    thumbnail:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    stock: 12,
    tags: ["oled"],
    brand: "ASUS",
    sku: "ASU-ZEN-14",
  },
  {
    id: 47,
    title: "Lenovo Slim 7i AI",
    description: "Nhôm nguyên khối màu xám, cực kỳ thanh lịch.",
    category: "laptops",
    price: 26000000,
    thumbnail:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
    stock: 8,
    tags: ["ai"],
    brand: "Lenovo",
    sku: "LEN-SLIM-7",
  },
  {
    id: 48,
    title: "Acer Nitro 16 Phoenix",
    description: "Sức mạnh từ chip Ryzen 7 và RTX 4060.",
    category: "laptops",
    price: 29500000,
    thumbnail:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    stock: 10,
    tags: ["gaming"],
    brand: "Acer",
    sku: "ACE-NIT-16",
  },
  {
    id: 49,
    title: "Microsoft Surface Laptop Go 3",
    description: "Nhỏ gọn 12 inch, dành cho sinh viên.",
    category: "laptops",
    price: 17500000,
    thumbnail:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
    stock: 20,
    tags: ["surface"],
    brand: "Microsoft",
    sku: "MS-SL-GO3",
  },
  {
    id: 50,
    title: "Razer Blade 18",
    description: "Thế thân cho máy tính để bàn mạnh nhất.",
    category: "laptops",
    price: 110000000,
    thumbnail:
      "https://images.unsplash.com/photo-1525548064874-9a4d5d3ff444?auto=format&fit=crop&w=800&q=80",
    stock: 1,
    tags: ["god-tier", "razer"],
    brand: "Razer",
    sku: "RAZ-BL-18",
  },
  {
    id: 1,
    title: "Samsung Galaxy Book3 360 15 (2023)",
    description: "Core i7-1360P, RAM 16GB, SSD 512GB, FHD",
    category: "laptops",
    price: 17990000,
    stock: 12,
    tags: ["samsung", "2-in-1"],
    brand: "Samsung",
    sku: "LAP-SAM-001",
    thumbnail:
      "https://lapvip.vn/upload/products/thumb_350x0/samsung-galaxy-book3-360-15-2023-1685608650.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy Book3 360 13 (2023)",
    description: "Core i7-1360P, RAM 16GB, SSD 512GB, AMOLED",
    category: "laptops",
    price: 17990000,
    stock: 10,
    tags: ["samsung", "amoled"],
    brand: "Samsung",
    sku: "LAP-SAM-002",
    thumbnail:
      "https://lapvip.vn/upload/products/thumb_350x0/samsung-galaxy-book3-360-13-2023-1695457355.jpg",
  },
  {
    id: 3,
    title: "Acer Swift AI",
    description: "Intel Core Ultra 7, 14 inch 3K OLED, 32GB RAM, 1TB SSD",
    category: "laptops",
    price: 17990000,
    stock: 8,
    tags: ["acer", "oled"],
    brand: "Acer",
    sku: "LAP-ACE-003",
    thumbnail: "https://anphat.com.vn/media/product/50928_swift_ai_sf14_51.jpg",
  },
  {
    id: 4,
    title: "MacBook Pro 14 M4 (2024)",
    description: "Apple M4, 16GB RAM, 512GB SSD",
    category: "laptops",
    price: 17990000,
    stock: 6,
    tags: ["apple", "macbook"],
    brand: "Apple",
    sku: "LAP-APP-004",
    thumbnail:
      "https://lapvip.vn/upload/filters_img/thumb_350x0/1144-0-1733283419.jpg",
  },
  {
    id: 5,
    title: "Acer Aspire 7 Gaming",
    description: "Core i5-12450H, RTX 3050, 144Hz, 16GB RAM",
    category: "gaming-laptops",
    price: 18690000,
    stock: 9,
    tags: ["gaming", "acer"],
    brand: "Acer",
    sku: "LAP-ACE-005",
    thumbnail:
      "https://anphat.com.vn/media/product/45836_acer_aspire_7_a715_76g_5806___nh_qmfsv_002_3s1.jpg",
  },
  {
    id: 6,
    title: "MSI Prestige 14 AI Evo",
    description: "Intel Core Ultra 5, 2.8K OLED, 16GB RAM",
    category: "laptops",
    price: 23990000,
    stock: 7,
    tags: ["msi", "oled"],
    brand: "MSI",
    sku: "LAP-MSI-006",
    thumbnail:
      "https://anphat.com.vn/media/product/51571_laptop_msi_prestige_14_ai_evo_c1mg_081vn__4_.jpg",
  },
  {
    id: 7,
    title: "MSI Vector 16",
    description: "Core Ultra 9, RTX 5080, 240Hz QHD+",
    category: "gaming-laptops",
    price: 63990000,
    stock: 4,
    tags: ["gaming", "msi"],
    brand: "MSI",
    sku: "LAP-MSI-007",
    thumbnail:
      "https://anphat.com.vn/media/product/51440_laptop_msi_vector_16_hx_ai_a2xwig_062vn__1_.jpg",
  },
  {
    id: 8,
    title: "ASUS ROG 18",
    description: "Core Ultra 9, RTX 5070 Ti, 32GB RAM",
    category: "gaming-laptops",
    price: 62990000,
    stock: 3,
    tags: ["asus", "gaming"],
    brand: "ASUS",
    sku: "LAP-ASU-008",
    thumbnail: "https://anphat.com.vn/media/product/53127_5.jpg",
  },
  {
    id: 9,
    title: "Lenovo ThinkPad X13 Gen 6",
    description: "Core Ultra 5, 32GB RAM, 13.3 inch WUXGA",
    category: "laptops",
    price: 32590000,
    stock: 5,
    tags: ["lenovo", "business"],
    brand: "Lenovo",
    sku: "LAP-LEN-009",
    thumbnail:
      "https://anphat.com.vn/media/product/53629_laptop_lenovo_thinkpad_x13_gen_6_21rk00alva__2_.jpg",
  },
  {
    id: 10,
    title: "ASUS Vivobook S14",
    description: "Core i5-13420H, 16GB RAM, 512GB SSD",
    category: "laptops",
    price: 16999000,
    stock: 14,
    tags: ["asus", "student"],
    brand: "ASUS",
    sku: "LAP-ASU-010",
    thumbnail:
      "https://anphat.com.vn/media/product/52455_laptop_asus_vivobook_s_14_s3407va_ly046w__1_.jpg",
  },
  {
    id: 10865,
    title: "Samsung Galaxy Book3 360 15 (2023)",
    description: "Core i7-1360P, RAM 16GB, SSD 512GB, FHD",
    category: "laptops",
    price: 17990000,
    stock: 10,
    brand: "Samsung",
    thumbnail:
      "https://lapvip.vn/upload/products/thumb_350x0/samsung-galaxy-book3-360-15-2023-1695457355.jpg",
    sku: "LAP-SAM-001",
  },
  {
    id: 2,
    title: "Samsung Galaxy Book3 360 13 (2023)",
    description: "Core i7-1360P, RAM 16GB, SSD 512GB, FHD AMOLED",
    category: "laptops",
    price: 17990000,
    stock: 8,
    brand: "Samsung",
    thumbnail:
      "https://lapvip.vn/upload/products/thumb_350x0/samsung-galaxy-book3-360-13-2023-1695457355.jpg",
    sku: "LAP-SAM-002",
  },
  {
    id: 3,
    title: "Laptop ACER Swift AI",
    description: "Intel Core Ultra 7 258V, 32GB RAM, 1TB SSD, 14 inch 3K OLED",
    category: "laptops",
    price: 17990000,
    stock: 6,
    brand: "Acer",
    thumbnail: "https://anphat.com.vn/media/product/50928_swift_ai_sf14_51.jpg",
    sku: "LAP-ACE-003",
  },
  {
    id: 4,
    title: "Macbook Pro 14 M4 2024",
    description: "Apple M4, 16GB RAM, 512GB SSD",
    category: "laptops",
    price: 17990000,
    stock: 12,
    brand: "Apple",
    thumbnail:
      "https://lapvip.vn/upload/filters_img/thumb_350x0/1144-0-1733283419.jpg",
    sku: "LAP-APP-004",
  },
  {
    id: 5,
    title: "Laptop Gaming Acer Aspire 7",
    description:
      "Core i5-12450H, RTX 3050, 15.6 inch FHD 144Hz, 16GB RAM, 512GB SSD",
    category: "laptops",
    price: 18690000,
    stock: 7,
    brand: "Acer",
    thumbnail:
      "https://anphat.com.vn/media/product/45836_acer_aspire_7_a715_76g_5806___nh_qmfsv_002_3s1.jpg",
    sku: "LAP-ACE-005",
  },
  {
    id: 78,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    description:
      "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    category: "laptops",
    price: 1999.99,

    stock: 24,
    tags: ["laptops", "apple"],
    brand: "Apple",
    sku: "LAP-APP-APP-078",
  },
  {
    id: 79,
    title: "Asus Zenbook Pro Dual Screen Laptop",
    description:
      "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
    category: "laptops",
    price: 1799.99,
    discountPercentage: 11.14,
    rating: 3.95,
    stock: 45,
    tags: ["laptops"],
    brand: "Asus",
    sku: "LAP-ASU-ASU-079",
    weight: 9,
    dimensions: { width: 16.6, height: 11.49, depth: 10.89 },
    warrantyInformation: "3 year warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Very happy with my purchase!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Michael Johnson",
        reviewerEmail: "michael.johnson@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly recommended!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Zoe Bennett",
        reviewerEmail: "zoe.bennett@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Mila Hernandez",
        reviewerEmail: "mila.hernandez@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7392988535158",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp",
  },
  {
    id: 80,
    title: "Huawei Matebook X Pro",
    description:
      "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
    category: "laptops",
    price: 1399.99,
    discountPercentage: 9.38,
    rating: 4.98,
    stock: 75,
    tags: ["laptops"],
    brand: "Huawei",
    sku: "LAP-HUA-HUA-080",
    weight: 9,
    dimensions: { width: 18.21, height: 22.83, depth: 17.26 },
    warrantyInformation: "No warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Evan Wright",
        reviewerEmail: "evan.wright@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very happy with my purchase!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Hunter Gordon",
        reviewerEmail: "hunter.gordon@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Not worth the price!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "William Gonzalez",
        reviewerEmail: "william.gonzalez@x.dummyjson.com",
      },
    ],
    returnPolicy: "60 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "0592296671061",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/3.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp",
  },
  {
    id: 81,
    title: "Lenovo Yoga 920",
    description:
      "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    category: "laptops",
    price: 1099.99,
    discountPercentage: 6.55,
    rating: 2.86,
    stock: 40,
    tags: ["laptops"],
    brand: "Lenovo",
    sku: "LAP-LEN-LEN-081",
    weight: 9,
    dimensions: { width: 20.84, height: 22.68, depth: 17.39 },
    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Bella Gonzalez",
        reviewerEmail: "bella.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great value for money!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Nathan Reed",
        reviewerEmail: "nathan.reed@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Great value for money!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Hazel Gardner",
        reviewerEmail: "hazel.gardner@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5506742916764",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/3.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp",
  },
  {
    id: 82,
    title: "New DELL XPS 13 9300 Laptop",
    description:
      "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
    category: "laptops",
    price: 1499.99,
    discountPercentage: 11.89,
    rating: 2.67,
    stock: 74,
    tags: ["laptops"],
    brand: "Dell",
    sku: "LAP-DEL-DEL-082",
    weight: 2,
    dimensions: { width: 13.76, height: 29, depth: 21.42 },
    warrantyInformation: "2 year warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 3,
        comment: "Poor quality!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Charlotte Lopez",
        reviewerEmail: "charlotte.lopez@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Alice Smith",
        reviewerEmail: "alice.smith@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Disappointing product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Ava Taylor",
        reviewerEmail: "ava.taylor@x.dummyjson.com",
      },
    ],
    returnPolicy: "60 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5963805976904",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp",
  },
];

const getProductsFromStorage = JSON.parse(localStorage.getItem("products"));
if (getProductsFromStorage && getProductsFromStorage.length > 0) {
  productS = getProductsFromStorage;
  console.log("không chạy cau lenh duoi");
} else {
  localStorage.setItem("products", JSON.stringify(productS));
  console.log("load product tư localstorage");
}

// Render sản phẩm
function renderProducts(list) {
  productList.innerHTML = "";

  list.forEach((product) => {
    productList.innerHTML += `
      <div class="card bg-base-100 shadow hover:shadow-lg cursor-pointer " onclick="goDetail(${product.id})">
        <figure class="p-4">
          <img src="${product.thumbnail}" class="h-40 object-contain">
        </figure>
        <div class="card-body">
          <h2 class="card-title text-sm">${product.title}</h2>
          <p class="font-bold text-purple-600">$${product.price}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary w-full " onclick="window.location.href='detail1.html?id=${product.id}'">
            Mua ngay
          </button>
        </
      </div>
    `;
  });
}

// RENDER LẦN ĐẦU
renderProducts(productS);

// TÌM KIẾM
searchBar.addEventListener("input", () => {
  const keyword = searchBar.value.toLowerCase();

  const result = productS.filter((product) =>
    product.title.toLowerCase().includes(keyword)
  );

  renderProducts(result);
});
