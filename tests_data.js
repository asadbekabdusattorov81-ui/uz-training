// GeoGAT Akademiya — Test Ma'lumotlari
// Barcha 529 ta savol 6 modulga bo'lingan

const GEOGAT_TESTS = {
  "m1": {
    "name": "Topografiya asoslari",
    "sections": [
      {
        "title": "KIRISH — test savollari",
        "questions": [
          {
            "q": "Topografiya, kartografiya va GAT fanlarining asosiy umumiy vazifasi nimadan iborat?",
            "A": "Faqat iqlim o‘zgarishini kuzatish",
            "B": "Yer yuzasini o‘lchash, tasvirlash, tahlil qilish va raqamli geoma’lumotlar bilan ishlash",
            "C": "Faqat statistik ma’lumotlar yig‘ish",
            "D": "Faqat tarixiy xaritalarni o‘rganish",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "GAT texnologiyalarining zamonaviy geografiya ta’limidagi asosiy ahamiyati nimada?",
            "A": "Faqat geologik namunalarni saqlashda",
            "B": "Faqat matnli hisobot yozishda",
            "C": "Faqat xaritalarni bezashda",
            "D": "Fazoviy ma’lumotlarni yig‘ish, saqlash, tahlil qilish va vizuallashtirishda",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Masofadan zondlash ma’lumotlari qaysi jarayonda ko‘proq qo‘llanadi?",
            "A": "Sun’iy yo‘ldosh tasvirlari orqali hududiy monitoringda",
            "B": "Faqat laboratoriya tajribalarida",
            "C": "Faqat arxiv hujjatlarini tartiblashda",
            "D": "Faqat adabiy matn tahlilida",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "“Topografik o‘lchov + kartografik tasvir + GIS tahlil” uyg‘unligi nimani shakllantiradi?",
            "A": "Hududiy masalalarni ilmiy asosda yechish kompetensiyasini",
            "B": "Faqat chizma chizish ko‘nikmasini",
            "C": "Faqat nazariy bilimni",
            "D": "Faqat tarixiy bilimni",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Darslikda fan mazmuni qaysi asosiy yo‘nalishlarni birlashtiradi?",
            "A": "Klassik topografiya, kartografiya, GIS, GPS va masofadan zondlashni",
            "B": "Faqat iqtisodiy geografiyani",
            "C": "Faqat meteorologiyani",
            "D": "Faqat geologiya va biologiyani",
            "correct": "A",
            "ball": 1
          },
        ]
      },
      {
        "title": "I-BOB. Topografiya va geodeziya asoslari — umumiy test",
        "questions": [
          {
            "q": "Topografiya va geodeziyaning asosiy obyekti nima?",
            "A": "Yer yuzasi va undagi obyektlarning fazoviy joylashuvi",
            "B": "Kimyoviy modda tarkibi",
            "C": "Tarixiy manbalar",
            "D": "Til birliklari",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Geodezik o‘lchashlar nima uchun zarur?",
            "A": "Faqat matn yozish uchun",
            "B": "Faqat rasmlar chizish uchun",
            "C": "Xarita va planlarni aniq tuzish uchun",
            "D": "Faqat ob-havoni aniqlash uchun",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Topografik xarita bilan ishlashda eng muhim ko‘nikmalardan biri qaysi?",
            "A": "Masofa, burchak, koordinata va balandliklarni aniqlash",
            "B": "Faqat rasm ko‘chirish",
            "C": "She’r yodlash",
            "D": "Faqat rang tanlash",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Geodeziya qaysi amaliy sohalar uchun tayanch hisoblanadi?",
            "A": "Qurilish, kadastr, yo‘l, irrigatsiya va GIS loyihalari",
            "B": "Faqat musiqa",
            "C": "Faqat adabiyot",
            "D": "Faqat sport",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Topografiya va geodeziya keyingi qaysi fanlarni o‘rganish uchun poydevor yaratadi?",
            "A": "Faqat botanika",
            "B": "Faqat tarix",
            "C": "Kartografiya, GIS va masofadan zondlash",
            "D": "Faqat falsafa",
            "correct": "C",
            "ball": 1
          },
        ]
      },
      {
        "title": "§1-mavzu. Kursning maqsadi va vazifalari. Yerning shakli va o‘lchamlari",
        "questions": [
          {
            "q": "Yerning haqiqiy shakli geodeziyada qanday tushuntiriladi?",
            "A": "Tekis yuza sifatida",
            "B": "Geoid va ellipsoid modellari orqali",
            "C": "Faqat silindr sifatida",
            "D": "Ideal shar sifatida",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Geoid nima?",
            "A": "Masshtab turi",
            "B": "Xarita ramkasi",
            "C": "O‘rtacha dengiz sathiga yaqin fizik sirt",
            "D": "Matematik tekislik",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Referens-ellipsoid nima uchun ishlatiladi?",
            "A": "Faqat rang berish uchun",
            "B": "Faqat rasm chizish uchun",
            "C": "Hisob-kitob, koordinata va proyeksiya ishlari uchun",
            "D": "Faqat matn yozish uchun",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Yer ellipsoidining yassiligi qanday formula bilan ifodalanadi?",
            "A": "f = a × b",
            "B": "f = b / h",
            "C": "f = (a − b) / a",
            "D": "f = a + b",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "GNSS qurilmalari odatda qaysi balandlikni beradi?",
            "A": "Faqat nisbiy balandlik",
            "B": "Ellipsoidal balandlik",
            "C": "Faqat mutlaq nol",
            "D": "Faqat dengiz chuqurligi",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Ortometrik balandlikni aniqlashda qaysi formula ishlatiladi?",
            "A": "H = L × n",
            "B": "H = h − N",
            "C": "H = a − b",
            "D": "H = h + N + a",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Yerning qutblar tomon yassilashishiga asosiy sabab nima?",
            "A": "Yerning aylanishi va markazdan qochma kuch",
            "B": "Tuproq turi",
            "C": "Yog‘in miqdori",
            "D": "O‘simliklar ta’siri",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Eratosten tajribasi geodeziya tarixida nima bilan muhim?",
            "A": "GIS dasturini yaratgani bilan",
            "B": "Teodolit yasagani bilan",
            "C": "Yer aylana uzunligini baholashga uringani bilan",
            "D": "Kompas ixtiro qilgani bilan",
            "correct": "C",
            "ball": 1
          },
        ]
      },
      {
        "title": "§2-mavzu. Plan, xarita va profillar. Masshtablar. Nomenklatura",
        "questions": [
          {
            "q": "Plan qanday hududni tasvirlaydi?",
            "A": "Faqat iqlim mintaqalarini",
            "B": "Faqat okeanlarni",
            "C": "Butun dunyoni",
            "D": "Kichik hududni yirik masshtabda va yuqori aniqlikda",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Xaritaning plandan asosiy farqi nimada?",
            "A": "Xarita kattaroq hududni proyeksiya asosida tasvirlaydi",
            "B": "Xarita faqat qo‘lda chiziladi",
            "C": "Plan doimo rangsiz bo‘ladi",
            "D": "Xarita faqat matndan iborat",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Profil nimani ko‘rsatadi?",
            "A": "Hududning vertikal kesimini",
            "B": "Faqat siyosiy chegarani",
            "C": "Faqat tuproq rangini",
            "D": "Faqat aholi sonini",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Masshtab nimani bildiradi?",
            "A": "Xarita masofasi bilan joydagi haqiqiy masofa nisbatini",
            "B": "Faqat legenda shaklini",
            "C": "Faqat hudud nomini",
            "D": "Faqat xarita rangini",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "1:10 000 masshtabda xaritadagi 1 sm joyda nechaga teng?",
            "A": "100 m",
            "B": "10 km",
            "C": "1 km",
            "D": "10 m",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "1:25 000 xaritada 4 sm masofa joyda qancha bo‘ladi?",
            "A": "1000 m",
            "B": "2500 m",
            "C": "100 m",
            "D": "500 m",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Chiziqli masshtabning afzalligi nimada?",
            "A": "Faqat sarlavha uchun kerak",
            "B": "Xarita nusxasi kattalashsa yoki kichrayganda ham amaliy o‘lchashga yordam beradi",
            "C": "Faqat matnni bezaydi",
            "D": "Faqat rang tanlaydi",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Ko‘ndalang masshtab qachon qo‘llanadi?",
            "A": "Faqat umumiy ko‘rinish uchun",
            "B": "Faqat siyosiy xaritada",
            "C": "Mayda ulushlarni aniq ajratish kerak bo‘lganda",
            "D": "Faqat rangli xaritada",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Nomenklatura nima?",
            "A": "Kompas turi",
            "B": "Profil chizig‘i",
            "C": "Xarita rangi",
            "D": "Xarita varag‘ining standart indeks tizimi",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Nomenklatura amaliyotda nima uchun kerak?",
            "A": "Faqat xaritani bezash uchun",
            "B": "Faqat matn qisqartirish uchun",
            "C": "Kerakli varaqni topish, qo‘shni varaqlarni aniqlash va xaritalarni tartiblash uchun",
            "D": "Faqat sarlavha yozish uchun",
            "correct": "C",
            "ball": 1
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 1. Masshtab turlari bo‘yicha mashqlar",
        "questions": [
          {
            "q": "1:10 000 xaritada 3,6 sm masofa joyda qancha bo‘ladi?",
            "A": "36 km",
            "B": "360 m",
            "C": "36 m",
            "D": "3,6 km",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "1:25 000 xaritada 7,2 sm masofa joyda qancha bo‘ladi?",
            "A": "180 m",
            "B": "720 m",
            "C": "1,8 km",
            "D": "18 km",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Joydagi 750 m masofa 1:25 000 xaritada necha sm bo‘ladi?",
            "A": "3 sm",
            "B": "1 sm",
            "C": "5 sm",
            "D": "2 sm",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "1:10 000 masshtabda 0,2 mm grafik xato joyda qancha xatoga teng?",
            "A": "0,2 m",
            "B": "200 m",
            "C": "20 m",
            "D": "2 m",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "1:50 000 masshtabda 0,2 mm grafik xato joyda qancha bo‘ladi?",
            "A": "1 m",
            "B": "5 m",
            "C": "10 m",
            "D": "50 m",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Xarita masofasini joy masofasiga aylantirishda asosiy shart nima?",
            "A": "Birliklarni bir xil qilish",
            "B": "Faqat kilometr ishlatish",
            "C": "Ranglarni solishtirish",
            "D": "Faqat santimetr ishlatish",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "1:10 000 masshtabda xaritada 2,4 sm × 1,8 sm to‘rtburchak joyda qanday o‘lchamga ega?",
            "A": "240 m × 180 m",
            "B": "2,4 km × 1,8 km",
            "C": "24 m × 18 m",
            "D": "2400 m × 1800 m",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Masshtab aniqligi nimani bildiradi?",
            "A": "Xarita o‘lchash xatosining joydagi haqiqiy xatoga aylanishini",
            "B": "Ranglar sonini",
            "C": "Sarlavha joylashuvini",
            "D": "Xarita nomining uzunligini",
            "correct": "A",
            "ball": 1
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 2. 1:10 000 karta varag‘i nomenklaturasini aniqlash",
        "questions": [
          {
            "q": "Karta nomenklaturasini aniqlash nimadan boshlanadi?",
            "A": "Millionlik varaq indeksini aniqlashdan",
            "B": "Rang tanlashdan",
            "C": "Profil chizishdan",
            "D": "Masshtabni o‘chirishdan",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "1:1 000 000 varaq ichida 1:100 000 varaqlar odatda nechta bo‘ladi?",
            "A": "4 ta",
            "B": "36 ta",
            "C": "12 ta",
            "D": "144 ta",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "1:100 000 varaq 1:50 000 uchun qanday bo‘linadi?",
            "A": "3 qismga",
            "B": "2 qismga",
            "C": "12 qismga",
            "D": "4 kvartalga",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "NW qisqartmasi nimani bildiradi?",
            "A": "Janubi-sharq",
            "B": "Shimoli-sharq",
            "C": "Janubi-g‘arb",
            "D": "Shimoli-g‘arb",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "NE qisqartmasi nimani bildiradi?",
            "A": "Janubi-sharq",
            "B": "Shimoli-sharq",
            "C": "Shimoli-g‘arb",
            "D": "Janubi-g‘arb",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Nuqtaning qaysi kvartalga tushishini aniqlashda qaysi ma’lumotlar kerak?",
            "A": "Faqat legenda",
            "B": "Nuqtaning kenglik va uzunlik bo‘yicha joylashuvi",
            "C": "Faqat xarita nomi",
            "D": "Faqat ranglar",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Yakuniy nomenklatura zanjiri qanday ketma-ketlikda tuziladi?",
            "A": "Faqat 1:50 000",
            "B": "Millionlik → 1:100 000 → 1:50 000 → 1:25 000 → 1:10 000",
            "C": "Faqat 1:10 000",
            "D": "1:10 000 → 1:25 000 → 1:50 000",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Nomenklatura bo‘yicha amaliy hisobotda nima ko‘rsatilishi kerak?",
            "A": "Faqat rangli chizma",
            "B": "Faqat rasm",
            "C": "Faqat sarlavha",
            "D": "Har bir bosqich bo‘yicha indeks, kvartal va yakuniy varaq",
            "correct": "D",
            "ball": 1
          },
        ]
      },
      {
        "title": "§3-mavzu. Topografiyada qo‘llaniladigan koordinatalar va balandliklar sistemalari",
        "questions": [
          {
            "q": "Geografik koordinatalar sistemasi nuqtani qanday ko‘rsatadi?",
            "A": "Faqat balandlik orqali",
            "B": "Kenglik va uzunlik orqali",
            "C": "Faqat rang orqali",
            "D": "Faqat masshtab orqali",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Geografik kenglik qaysi chiziqqa nisbatan o‘lchanadi?",
            "A": "Shimoliy qutbga",
            "B": "Ekvatorga",
            "C": "Xarita ramkasiga",
            "D": "Grinvich meridianiga",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Geografik uzunlik qaysi meridianga nisbatan aniqlanadi?",
            "A": "Qutb aylanasiga",
            "B": "Ekvatorga",
            "C": "Tropikka",
            "D": "Grinvich meridianiga",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Tekislik koordinatalari asosan qanday birlikda beriladi?",
            "A": "Gradusda",
            "B": "Foizda",
            "C": "Metrda",
            "D": "Kilogrammda",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Kilometr to‘ri xaritada nima uchun xizmat qiladi?",
            "A": "Shartli belgilarni almashtirish uchun",
            "B": "Nuqtaning tekislikdagi joylashuvini aniqlash uchun",
            "C": "Faqat xaritani bezash uchun",
            "D": "Relyefni ranglash uchun",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Ortometrik balandlik nimaga nisbatan olinadi?",
            "A": "Ellipsoid markaziga",
            "B": "Xarita ramkasiga",
            "C": "Magnit meridianga",
            "D": "Geoid yoki o‘rtacha dengiz sathiga",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Ellipsoidal balandlik ko‘proq qaysi texnologiyada uchraydi?",
            "A": "Faqat qog‘oz xaritada",
            "B": "Qo‘lda chizilgan profilda",
            "C": "Faqat atlaslarda",
            "D": "GNSS/GPS o‘lchovlarida",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Koordinata tizimlarini aralashtirib yuborish qanday xatoga olib keladi?",
            "A": "Xarita rangining o‘zgarishiga",
            "B": "Legenda kattalashishiga",
            "C": "Masshtab yo‘qolishiga",
            "D": "Nuqtaning noto‘g‘ri joylashuviga",
            "correct": "D",
            "ball": 1
          },
        ]
      },
      {
        "title": "§4-mavzu. Oriyentirlash burchaklari: azimut, direksion burchak, rumb",
        "questions": [
          {
            "q": "Azimut nimani bildiradi?",
            "A": "Shimol yo‘nalishidan obyekt yo‘nalishigacha o‘lchanadigan burchakni",
            "B": "Xarita maydonini",
            "C": "Masshtab maxrajini",
            "D": "Balandlik farqini",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Azimut odatda qanday oraliqda o‘lchanadi?",
            "A": "0°–360°",
            "B": "0°–45°",
            "C": "90°–180°",
            "D": "0°–90°",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Direksion burchak qaysi yo‘nalishga nisbatan olinadi?",
            "A": "Profil chizig‘iga",
            "B": "Koordinata to‘rining shimol yo‘nalishiga",
            "C": "Ekvatorga",
            "D": "Magnit janubga",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Rumb qanday burchak hisoblanadi?",
            "A": "Eng yaqin shimol yoki janub yo‘nalishidan sharq yoki g‘arbga qarab o‘lchanadigan burchak",
            "B": "Faqat balandlik belgisi",
            "C": "Faqat vertikal burchak",
            "D": "Faqat masshtab xatosi",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Magnit azimut bilan haqiqiy azimut orasidagi farq nimaga bog‘liq?",
            "A": "Magnit og‘ishga",
            "B": "Masshtab soniga",
            "C": "Gorizontallar soniga",
            "D": "Xarita rangiga",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "90° azimut qaysi asosiy yo‘nalishni bildiradi?",
            "A": "G‘arb",
            "B": "Shimol",
            "C": "Janub",
            "D": "Sharq",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "180° azimut qaysi yo‘nalishni bildiradi?",
            "A": "Sharq",
            "B": "G‘arb",
            "C": "Shimol",
            "D": "Janub",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Oriyentirlash burchaklari amaliyotda nima uchun kerak?",
            "A": "Xarita nomini tanlash uchun",
            "B": "Yo‘nalish, marshrut va syomka chiziqlarini aniqlash uchun",
            "C": "Relyefni bo‘yash uchun",
            "D": "Faqat matn yozish uchun",
            "correct": "B",
            "ball": 1
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 4. Gorizontallar bo‘yicha masalalar",
        "questions": [
          {
            "q": "Gorizontallar xaritada nimani ifodalaydi?",
            "A": "Yo‘l uzunligini",
            "B": "Aholi sonini",
            "C": "Xarita chegarasini",
            "D": "Bir xil balandlikdagi nuqtalarni tutashtiruvchi chiziqlarni",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Gorizontallar bir-biriga juda yaqin joylashsa, relyef qanday bo‘ladi?",
            "A": "Suvsiz",
            "B": "Botqoqli",
            "C": "Tikroq",
            "D": "Tekisroq",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Gorizontallar oralig‘i keng bo‘lsa, bu nimani bildiradi?",
            "A": "Qiyalik keskinligini",
            "B": "Daryo yo‘qligini",
            "C": "Qiyalik sustligini",
            "D": "Cho‘qqi borligini",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Ikki gorizontal orasidagi balandlik farqi nima deyiladi?",
            "A": "Kesim balandligi",
            "B": "Masshtab aniqligi",
            "C": "Rumb",
            "D": "Azimut",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Qiyalikni aniqlashda qaysi ikki ko‘rsatkich zarur?",
            "A": "Legenda va sarlavha",
            "B": "Balandlik farqi va gorizontal masofa",
            "C": "Xarita nomi va sana",
            "D": "Rang va belgi",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Gorizontallar yordamida qaysi amaliy masala bajariladi?",
            "A": "Faqat obyekt rangini tanlash",
            "B": "Faqat hudud nomini yozish",
            "C": "Qiyalik, balandlik va relyef shaklini aniqlash",
            "D": "Faqat koordinata tizimini o‘chirish",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Yopiq gorizontal ichida balandlik ortib borsa, bu nimani anglatadi?",
            "A": "Vodiy",
            "B": "Daryo",
            "C": "Tepalik yoki cho‘qqi",
            "D": "Tekislik",
            "correct": "C",
            "ball": 1
          },
        ]
      },
      {
        "title": "§5-mavzu. Yer relyefi va uni plan hamda xaritalarda tasvirlash",
        "questions": [
          {
            "q": "Relyef deganda nima tushuniladi?",
            "A": "Faqat o‘simlik qoplami",
            "B": "Faqat suv havzalari",
            "C": "Faqat aholi punktlari",
            "D": "Yer yuzasining baland-pastlik shakllari majmui",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Gorizontallar yordamida xaritada nima ko‘rsatiladi?",
            "A": "Relyef shakli va balandliklar",
            "B": "Transport turi",
            "C": "Aholi zichligi",
            "D": "Sanoat tarmoqlari",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Relyefni tasvirlashda balandlik belgisi nima uchun kerak?",
            "A": "Xarita rangini tanlash uchun",
            "B": "Nuqtaning absolyut balandligini bilish uchun",
            "C": "Masshtabni qisqartirish uchun",
            "D": "Matnni joylashtirish uchun",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Qiyalik kuchli bo‘lgan hudud xaritada qanday bilinadi?",
            "A": "Masshtab o‘zgaradi",
            "B": "Gorizontallar yo‘qoladi",
            "C": "Legenda kengayadi",
            "D": "Gorizontallar zichlashadi",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Vodiy yoki soy shakli gorizontallarda odatda qanday ko‘rinadi?",
            "A": "To‘g‘ri kvadrat orqali",
            "B": "Faqat rang orqali",
            "C": "V-simon egilishlar orqali",
            "D": "Doira ichidagi nuqta orqali",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Relyefni noto‘g‘ri o‘qish qanday oqibatga olib keladi?",
            "A": "Ranglar kamayishiga",
            "B": "Matn kattalashishiga",
            "C": "Trassa, qurilish yoki suv oqimi hisobida xatoga",
            "D": "Xarita chiroyli chiqishiga",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Topografik xaritada relyefni o‘qishda qaysi elementlar birgalikda tahlil qilinadi?",
            "A": "Faqat muallif nomi",
            "B": "Gorizontallar, balandlik belgisi, kesim balandligi va qiyalik",
            "C": "Faqat nashr yili",
            "D": "Faqat sarlavha",
            "correct": "B",
            "ball": 1
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 5. Teodolitni o‘rnatish va burchak o‘lchash",
        "questions": [
          {
            "q": "Teodolitni nuqtaga o‘rnatishda birinchi asosiy jarayon qaysi?",
            "A": "Masshtab tanlash",
            "B": "Markazlash",
            "C": "Xarita bo‘yash",
            "D": "Profil chizish",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Markazlash nimani ta’minlaydi?",
            "A": "Reyka uzunligini",
            "B": "Gorizontallar oralig‘ini",
            "C": "Xarita rangining aniqligini",
            "D": "Asbob vertikal o‘qining belgilangan nuqta ustiga kelishini",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Nivelirlash jarayoni teodolitda nima uchun bajariladi?",
            "A": "Masofani qisqartirish uchun",
            "B": "Koordinatani o‘chirish uchun",
            "C": "Relyefni tekislash uchun",
            "D": "Asbobni gorizontal holatga keltirish uchun",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Fokuslashning vazifasi nima?",
            "A": "Asbobni bo‘yash",
            "B": "Shtativni yig‘ish",
            "C": "Balandlikni kamaytirish",
            "D": "Obyekt va iplar to‘rini aniq ko‘rish",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "To‘la qabul usuli nimaga xizmat qiladi?",
            "A": "Gorizontal burchakni aniqroq o‘lchash va xatoni kamaytirishga",
            "B": "Faqat balandlik hisoblashga",
            "C": "Faqat masofa chizishga",
            "D": "Faqat xarita nomlashga",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Ruletka yoki lenta bilan o‘lchashda asosiy talab nima?",
            "A": "Faqat balandlik yozilishi",
            "B": "Lenta to‘g‘ri tortilishi va o‘lchov jurnalga qayd etilishi",
            "C": "Xarita katlanishi",
            "D": "Faqat rang tanlanishi",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Teodolit bilan ishlashda dala jurnali nima uchun zarur?",
            "A": "Faqat mavzu nomi yozish uchun",
            "B": "O‘lchov natijalarini rasmiy va tekshiriladigan shaklda qayd etish uchun",
            "C": "Faqat rasm qo‘yish uchun",
            "D": "Faqat chizma bezash uchun",
            "correct": "B",
            "ball": 1
          },
        ]
      },
      {
        "title": "§6-mavzu. Burchaklarni o‘lchash: teodolit",
        "questions": [
          {
            "q": "Teodolitning asosiy vazifasi nima?",
            "A": "Gorizontal va vertikal burchaklarni o‘lchash",
            "B": "Faqat xarita chop etish",
            "C": "Faqat masofa bo‘yash",
            "D": "Faqat suv chuqurligini aniqlash",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Gorizontal burchak qaysi tekislikda o‘lchanadi?",
            "A": "Gorizontal tekislikda",
            "B": "Xarita chetida",
            "C": "Vertikal kesimda",
            "D": "Profil chizig‘ida",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Vertikal burchak nimani ifodalaydi?",
            "A": "Gorizontallar zichligini",
            "B": "Nuqta nomini",
            "C": "Ko‘rish yo‘nalishining gorizontal tekislikka nisbatan og‘ishini",
            "D": "Xarita masshtabini",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Teodolit o‘lchovlarida xatoni kamaytirish uchun nima qilinadi?",
            "A": "Jurnal yuritilmaydi",
            "B": "Natija taxmin qilinadi",
            "C": "Takroriy o‘lchash va nazorat hisoblari bajariladi",
            "D": "Faqat bitta o‘lchov olinadi",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Teodolitning shtativga mahkam o‘rnatilishi nimani ta’minlaydi?",
            "A": "Xarita rangini",
            "B": "Matn hajmini",
            "C": "O‘lchov barqarorligi va aniqligini",
            "D": "Masshtab ko‘rinishini",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Teodolit bilan ishlashda iplar to‘ri nima uchun kerak?",
            "A": "Qog‘ozni kesish uchun",
            "B": "Nishonga aniq vizirlash uchun",
            "C": "Reykani yig‘ish uchun",
            "D": "Ranglarni ajratish uchun",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Burchak o‘lchash natijalarining ishonchliligi nimaga bog‘liq?",
            "A": "Faqat xarita hajmiga",
            "B": "Faqat kompyuter turiga",
            "C": "Faqat talaba soniga",
            "D": "Asbobni to‘g‘ri o‘rnatish, vizirlash va jurnal yuritishga",
            "correct": "D",
            "ball": 1
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 6. Teodolit syomkasi planini 1:1 000 masshtabda tuzish",
        "questions": [
          {
            "q": "Teodolit syomkasi planini tuzishda asosiy boshlang‘ich ma’lumotlar qaysilar?",
            "A": "Faqat sahifa raqami",
            "B": "Faqat rang",
            "C": "Burchak, masofa va stansiya nuqtalari",
            "D": "Faqat matn",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "1:1 000 masshtab nimani bildiradi?",
            "A": "1 sm joyda 1 km",
            "B": "Xaritadagi 1 sm joyda 10 m ga teng",
            "C": "1 sm joyda 1000 km",
            "D": "1 sm joyda 100 m",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Syomka planida tafsilotlar nima?",
            "A": "Faqat nashr yili",
            "B": "Joydagi obyektlar: bino, yo‘l, ariq, chegara va boshqalar",
            "C": "Faqat muallif nomi",
            "D": "Faqat sarlavha",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Plan rasmiylashtirishda nimalar bo‘lishi shart?",
            "A": "Faqat sahifa raqami",
            "B": "Faqat rang",
            "C": "Faqat rasm",
            "D": "Masshtab, shartli belgilar, shimol yo‘nalishi, nom va chizma aniqligi",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Teodolit syomkasi natijasi qanday hujjatga aylantiriladi?",
            "A": "Faqat fotosuratga",
            "B": "Faqat jadvalga",
            "C": "Topografik plan yoki syomka chizmasiga",
            "D": "Faqat insho matniga",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Plan tuzishda o‘lchov xatosi nima orqali nazorat qilinadi?",
            "A": "Hisob-kitob va yopilish tekshiruvi orqali",
            "B": "Faqat matn orqali",
            "C": "Faqat sarlavha orqali",
            "D": "Faqat ranglar orqali",
            "correct": "A",
            "ball": 1
          },
        ]
      },
      {
        "title": "§7-mavzu. Teodolit syomkasiga kirish",
        "questions": [
          {
            "q": "Teodolit syomkasi nima?",
            "A": "Joydagi obyektlarni burchak va masofalar asosida planga tushirish usuli",
            "B": "Faqat atlas tuzish",
            "C": "Faqat xarita bo‘yash",
            "D": "Faqat balandlik o‘lchash",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Teodolit yo‘li nima?",
            "A": "Faqat tog‘ tizmasi",
            "B": "Ketma-ket stansiyalar orqali hosil qilingan o‘lchov yo‘li",
            "C": "Faqat daryo yo‘li",
            "D": "Faqat masshtab chizig‘i",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Rekognossirovka deganda nima tushuniladi?",
            "A": "Xarita rangini tanlash",
            "B": "Profilni bo‘yash",
            "C": "Natijani chop etish",
            "D": "Syomkadan oldin joyni ko‘zdan kechirish va stansiyalarni tanlash",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Yopiq teodolit yo‘lining afzalligi nimada?",
            "A": "Hech qanday hisob talab qilmaydi",
            "B": "Koordinata kerak bo‘lmaydi",
            "C": "Faqat matn beradi",
            "D": "Yopilish xatosini tekshirish imkonini beradi",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Dala eskizi nima uchun tuziladi?",
            "A": "Faqat sahifa bezash uchun",
            "B": "Faqat qog‘oz to‘ldirish uchun",
            "C": "Syomka tafsilotlarini joyida tushunarli qayd etish uchun",
            "D": "Faqat rangli belgi chizish uchun",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Kamera ishlari qaysi bosqichda bajariladi?",
            "A": "Faqat laboratoriyada kimyoviy tahlilda",
            "B": "O‘lchovdan oldin faqat",
            "C": "Faqat xarita chopida",
            "D": "Dala o‘lchovlaridan keyin hisoblash va plan tuzish bosqichida",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Teodolit syomkasida poligon yo‘li nima uchun muhim?",
            "A": "Ranglar sonini kamaytiradi",
            "B": "Xarita nomini tanlaydi",
            "C": "Plan tuzish uchun geodezik tayanch yaratadi",
            "D": "Relyefni avtomatik tekislaydi",
            "correct": "C",
            "ball": 1
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 7. Nivelirlar bilan tanishish va geometrik nivelirlash",
        "questions": [
          {
            "q": "Nivelirning asosiy vazifasi nima?",
            "A": "Gorizontal burchak o‘lchash",
            "B": "Nuqtalar balandlik farqini aniqlash",
            "C": "Rumb hisoblash",
            "D": "Masshtab chizish",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Geometrik nivelirlashda qaysi jihoz asosiy hisoblanadi?",
            "A": "Teodolit va kompas",
            "B": "Nivelir va reyka",
            "C": "Faqat atlas",
            "D": "Faqat ruletka",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Reyka nima uchun ishlatiladi?",
            "A": "Profil qirqish uchun",
            "B": "Nivelir ko‘rish nuri bo‘yicha sanoq olish uchun",
            "C": "Magnit og‘ishni o‘lchash uchun",
            "D": "Xarita bo‘yash uchun",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Bekatda geometrik nivelirlashda asosiy sanoqlar qaysilar?",
            "A": "Faqat rang sanoqlari",
            "B": "Faqat azimutlar",
            "C": "Faqat koordinata raqamlari",
            "D": "Orqa va old sanoq",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Asbob gorizonti usuli nimani hisoblashga yordam beradi?",
            "A": "Masshtab maxrajini",
            "B": "Nuqtalar balandligini",
            "C": "Azimutni",
            "D": "Rumbni",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Nivelirlashda nazorat nima uchun kerak?",
            "A": "Faqat rang tanlash uchun",
            "B": "Faqat jadvalni bezash uchun",
            "C": "O‘lchash xatolarini aniqlash va kamaytirish uchun",
            "D": "Faqat xarita nomlash uchun",
            "correct": "C",
            "ball": 1
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 8. Trassa nivelirlash jurnalini ishlab chiqish",
        "questions": [
          {
            "q": "Trassa nivelirlash nima uchun bajariladi?",
            "A": "Faqat masshtab tanlash uchun",
            "B": "Chiziqli yo‘nalish bo‘ylab balandliklarni aniqlash uchun",
            "C": "Faqat xarita nomini yozish uchun",
            "D": "Faqat obyekt rangini belgilash uchun",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Bog‘lovchi nuqta qanday vazifani bajaradi?",
            "A": "Azimutni yo‘qotadi",
            "B": "Ranglarni ajratadi",
            "C": "Xarita ramkasini chizadi",
            "D": "Bekatlar orasida balandlik uzatishni ta’minlaydi",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Oraliq nuqtalar nima uchun olinadi?",
            "A": "Faqat nom berish uchun",
            "B": "Faqat shimolni ko‘rsatish uchun",
            "C": "Trassa bo‘ylab qo‘shimcha balandliklarni aniqlash uchun",
            "D": "Faqat masshtabni yozish uchun",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Nivelirlash jurnalida qaysi ma’lumotlar qayd etiladi?",
            "A": "Faqat muallif",
            "B": "Faqat rasm",
            "C": "Sanoq, nuqta nomi, asbob gorizonti va balandliklar",
            "D": "Faqat matn",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Balandlikni noto‘g‘ri hisoblash nimaga olib keladi?",
            "A": "Profil va loyiha chizig‘ida xatolikka",
            "B": "Legenda yo‘qolishiga",
            "C": "Sahifa sonining kamayishiga",
            "D": "Xarita rangining o‘zgarishiga",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Trassa nivelirlash natijasi qaysi keyingi ish uchun asos bo‘ladi?",
            "A": "Faqat atlas tahlili uchun",
            "B": "Bo‘ylama profil tuzish uchun",
            "C": "Faqat rumb chizish uchun",
            "D": "Faqat nomenklatura yozish uchun",
            "correct": "B",
            "ball": 1
          },
        ]
      },
      {
        "title": "§8-mavzu. Nivelirlash",
        "questions": [
          {
            "q": "Nivelirlashning asosiy maqsadi nima?",
            "A": "Faqat uzunlik o‘lchash",
            "B": "Faqat burchak hisoblash",
            "C": "Faqat xarita bezash",
            "D": "Nuqtalar orasidagi balandlik farqini aniqlash",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Absolyut balandlik nimaga nisbatan aniqlanadi?",
            "A": "Magnit shimolga",
            "B": "Masshtab chizig‘iga",
            "C": "Xarita sarlavhasiga",
            "D": "O‘rtacha dengiz sathiga",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Nisbiy balandlik nimani bildiradi?",
            "A": "Xarita uzunligini",
            "B": "Rumb qiymatini",
            "C": "Ikki nuqta balandliklari orasidagi farqni",
            "D": "Masshtab xatosini",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Nivelirlashda orqa sanoq odatda qanday vazifani bajaradi?",
            "A": "Xarita ramkasini chizadi",
            "B": "Ma’lum balandlikdan asbob gorizontini hisoblashga yordam beradi",
            "C": "Masshtabni kamaytiradi",
            "D": "Azimutni aniqlaydi",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Old sanoq nima uchun olinadi?",
            "A": "Faqat sarlavha yozish uchun",
            "B": "Faqat koordinata o‘chirish uchun",
            "C": "Keyingi nuqta balandligini aniqlash uchun",
            "D": "Faqat rang berish uchun",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Nivelirlash natijalari qaysi hujjatda rasmiylashtiriladi?",
            "A": "Faqat glossariyda",
            "B": "Faqat rasm ostida",
            "C": "Faqat xarita sarlavhasida",
            "D": "Nivelirlash jurnalida",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Bo‘ylama profil nima asosida tuziladi?",
            "A": "Faqat muallif nomi asosida",
            "B": "Faqat azimutlar asosida",
            "C": "Trassa bo‘ylab hisoblangan balandliklar asosida",
            "D": "Faqat xarita ranglari asosida",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Nivelirlashdagi yopilish xatosi nimani ko‘rsatadi?",
            "A": "Ranglar sonini",
            "B": "O‘lchov natijalarining aniqlik darajasini",
            "C": "Matn hajmini",
            "D": "Xarita o‘lchamini",
            "correct": "B",
            "ball": 1
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 9. Nivelirlash jurnalini ishlab chiqish va bo‘ylama profil tuzish",
        "questions": [
          {
            "q": "Nivelirlash jurnalining asosiy vazifasi nima?",
            "A": "O‘lchov natijalarini tizimli qayd etish va balandliklarni hisoblash",
            "B": "Legenda tuzish",
            "C": "Azimutni belgilash",
            "D": "Xarita ranglarini tanlash",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Bo‘ylama profil nimani ko‘rsatadi?",
            "A": "Xarita proyeksiyasini",
            "B": "Trassa bo‘ylab balandliklarning o‘zgarishini",
            "C": "Masshtab turini",
            "D": "Meridian yo‘nalishini",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Profil tuzishda gorizontal masshtab nimani ifodalaydi?",
            "A": "Balandlik qiymatlarini",
            "B": "Koordinata zonasini",
            "C": "Trassa bo‘ylab masofalarni",
            "D": "Rumb yo‘nalishini",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Profil tuzishda vertikal masshtab nimani ifodalaydi?",
            "A": "Azimutlarni",
            "B": "Uzunliklarni",
            "C": "Balandlik farqlarini",
            "D": "Xarita varaqlarini",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Vertikal masshtab ko‘pincha nima uchun yirikroq olinadi?",
            "A": "Masshtabni bekor qilish uchun",
            "B": "Koordinatani o‘chirish uchun",
            "C": "Relyef o‘zgarishini ko‘rinarli qilish uchun",
            "D": "Xarita nomini kattalashtirish uchun",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Nivelirlash jurnalidagi xato nimaga ta’sir qiladi?",
            "A": "Shartli belgi shakliga",
            "B": "Bo‘ylama profilning aniqligiga",
            "C": "Xarita rangiga",
            "D": "Sarlavha joyiga",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Bo‘ylama profil qaysi sohalarda muhim?",
            "A": "Faqat biologiyada",
            "B": "Faqat tarixda",
            "C": "Yo‘l, kanal, quvur va trassa loyihalashda",
            "D": "Faqat adabiyotda",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Profil chizishda nuqtalar orasidagi masofa qanday olinadi?",
            "A": "Trassa bo‘ylab o‘lchangan piket yoki oraliq masofalar asosida",
            "B": "Faqat rang bo‘yicha",
            "C": "Faqat taxmin bilan",
            "D": "Faqat xarita nomidan",
            "correct": "A",
            "ball": 1
          },
        ]
      },
    ]
  },
  "m2": {
    "name": "Kartografiya",
    "sections": [
      {
        "title": "Amaliy mashg‘ulot 10. Umumgeografik, mavzuli va maxsus kartalarning elementlarini o‘rganish",
        "questions": [
          {
            "q": "Umumgeografik karta asosan nimani tasvirlaydi?",
            "A": "Faqat zavodlar sonini",
            "B": "Faqat aholi yoshini",
            "C": "Faqat bitta mavzuni",
            "D": "Tabiiy va ijtimoiy obyektlarning umumiy joylashuvini",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Mavzuli karta nimaga bag‘ishlanadi?",
            "A": "Muayyan hodisa yoki jarayonni tasvirlashga",
            "B": "Faqat xarita ramkasiga",
            "C": "Faqat koordinata yozishga",
            "D": "Faqat masshtab chizishga",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Maxsus karta qanday maqsadda tuziladi?",
            "A": "Faqat rasm sifatida",
            "B": "Faqat bezak uchun",
            "C": "Faqat dars nomi uchun",
            "D": "Aniq amaliy, ilmiy yoki sohaviy vazifa uchun",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Kartaning legendasi nima vazifani bajaradi?",
            "A": "Shartli belgilar mazmunini tushuntiradi",
            "B": "Profil chizadi",
            "C": "Xarita rangini o‘chiradi",
            "D": "Masshtabni bekor qiladi",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Karta ramkasi nimani ko‘rsatishda yordam beradi?",
            "A": "Faqat muallifni",
            "B": "Faqat rasm joyini",
            "C": "Faqat sahifa raqamini",
            "D": "Hudud chegarasi va koordinata qiymatlarini",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Mavzuli kartada tasvirlash usuli noto‘g‘ri tanlansa nima bo‘ladi?",
            "A": "Hodisaning mazmuni noto‘g‘ri talqin qilinadi",
            "B": "Xarita avtomatik yaxshilanadi",
            "C": "Koordinata o‘zgaradi",
            "D": "Masshtab yo‘qoladi",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Kartani tahlil qilishda qaysi elementlar birgalikda ko‘riladi?",
            "A": "Faqat rang",
            "B": "Sarlavha, masshtab, legenda, proyeksiya, mazmun va manba",
            "C": "Faqat shrift",
            "D": "Faqat sahifa cheti",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Maxsus kartalarga qaysi biri misol bo‘la oladi?",
            "A": "Faqat devoriy rasm",
            "B": "Geologik, kadastr, harbiy yoki navigatsion karta",
            "C": "Faqat fotosurat",
            "D": "Faqat matnli jadval",
            "correct": "B",
            "ball": 1
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 11. Geografik globus va u bilan ishlash",
        "questions": [
          {
            "q": "Globus nimaning kichraytirilgan modeli hisoblanadi?",
            "A": "Faqat okeanning",
            "B": "Xarita ramkasining",
            "C": "Yer sharining",
            "D": "Faqat materikning",
            "correct": "C",
            "ball": 1
          },
          {
            "q": "Globusning xaritadan asosiy afzalligi nimada?",
            "A": "Har doim yirik masshtabli bo‘ladi",
            "B": "Faqat rangsiz bo‘ladi",
            "C": "Faqat siyosiy ma’lumot beradi",
            "D": "Yer shaklini kamroq buzilish bilan ko‘rsatadi",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Globusda meridianlar nimani bildiradi?",
            "A": "Faqat daryolarni",
            "B": "Qutblarni tutashtiruvchi uzunlik chiziqlarini",
            "C": "Ekvatorga parallel chiziqlarni",
            "D": "Faqat tog‘larni",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Globusda parallellar nimani bildiradi?",
            "A": "Ekvatorga parallel kenglik chiziqlarini",
            "B": "Qutblarni tutashtiruvchi chiziqlarni",
            "C": "Faqat yo‘llarni",
            "D": "Faqat chegara chiziqlarini",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Ekvator globusda qanday vazifani bajaradi?",
            "A": "Faqat xarita ramkasi bo‘ladi",
            "B": "Sharq va g‘arbga ajratadi",
            "C": "Faqat okeanlarni belgilaydi",
            "D": "Yer sharini shimoliy va janubiy yarimsharlarga ajratadi",
            "correct": "D",
            "ball": 1
          },
          {
            "q": "Globus yordamida qaysi ko‘nikma shakllanadi?",
            "A": "Geografik koordinatalar, masofa va yo‘nalishlarni tushunish",
            "B": "Faqat matn yozish",
            "C": "Faqat jadval tuzish",
            "D": "Faqat rasm bo‘yash",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Globusda ikki nuqta orasidagi eng qisqa yo‘l qanday tushuniladi?",
            "A": "Katta aylana yoyi orqali",
            "B": "Faqat parallel bo‘yicha",
            "C": "Faqat to‘g‘ri chiziq bilan",
            "D": "Faqat meridian bo‘yicha",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Globus bilan ishlash kartografiyada nima uchun muhim?",
            "A": "Faqat xarita bezash uchun",
            "B": "Faqat jadvalni to‘ldirish uchun",
            "C": "Yer shakli, koordinata tarmog‘i va proyeksiya buzilishlarini tushunish uchun",
            "D": "Faqat rang tanlash uchun",
            "correct": "C",
            "ball": 1
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 12. To‘g‘ri burchakli silindrik, qutbiy azimutal va konusli proyeksiyalarni oddiy usulda chizish",
        "questions": [
          {
            "q": "Kartografik proyeksiya nima?",
            "A": "Relyefni bo‘yash usuli",
            "B": "Yer sirtini tekislikda tasvirlash usuli",
            "C": "Faqat masshtab yozuvi",
            "D": "Faqat legenda turi",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Silindrik proyeksiyada Yer sirtini tasvirlash asosi nima?",
            "A": "Faqat qo‘lda chizish",
            "B": "Silindr sirtiga ko‘chirish",
            "C": "Konus sirtiga ko‘chirish",
            "D": "Tekislikka faqat qutbdan tushirish",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Qutbiy azimutal proyeksiya ko‘proq qaysi hududlarni tasvirlashda qulay?",
            "A": "Faqat daryolarni",
            "B": "Qutb atrofi hududlarini",
            "C": "Ekvator atrofini",
            "D": "Faqat tog‘larni",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Konusli proyeksiya qaysi hududlar uchun qulayroq?",
            "A": "O‘rta kengliklarda joylashgan hududlar uchun",
            "B": "Faqat qutblar uchun",
            "C": "Faqat okean chuqurligi uchun",
            "D": "Faqat shahar ko‘chalari uchun",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Har qanday proyeksiyada qanday holat muqarrar yuz beradi?",
            "A": "Buzilish paydo bo‘ladi",
            "B": "Masshtab yo‘qoladi",
            "C": "Yer mutlaqo buzilmaydi",
            "D": "Xarita o‘qilmaydi",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Proyeksiya tanlashda nimalar hisobga olinadi?",
            "A": "Hudud joylashuvi, xarita maqsadi va buzilish turi",
            "B": "Faqat sahifa raqami",
            "C": "Faqat shrift",
            "D": "Faqat rang",
            "correct": "A",
            "ball": 1
          },
          {
            "q": "Azimutal proyeksiyada tasvirlash asosi qanday?",
            "A": "Faqat balandlik hisoblash",
            "B": "Yer sirtini tekislikka proyeksiyalash",
            "C": "Faqat profil chizish",
            "D": "Yer sirtini faqat silindrga o‘rash",
            "correct": "B",
            "ball": 1
          },
          {
            "q": "Proyeksiyalarni oddiy chizish mashg‘ulotining asosiy maqsadi nima?",
            "A": "Proyeksiya turlarining geometrik mantiqini tushunish",
            "B": "Faqat rasmni chiroyli qilish",
            "C": "Faqat masshtabni yodlash",
            "D": "Faqat jadval to‘ldirish",
            "correct": "A",
            "ball": 1
          },
        ]
      },
      {
        "title": "Quyidagi format admin panelga mos:",
        "questions": [
          {
            "q": "Geofazoviy ma’lumotlar asosida hududiy qaror qabul qilishda topografiya, kartografiya va GAT fanlarining integratsion vazifasi qaysi javobda to‘g‘ri ifodalangan?",
            "A": "Faqat sun’iy yo‘ldosh rasmlarini ko‘rish",
            "B": "Joyni o‘lchash, xaritada tasvirlash, raqamli qatlamlarda tahlil qilish va natijani boshqaruv qaroriga aylantirish",
            "C": "Faqat relyef chizish",
            "D": "Faqat tayyor xaritalarni o‘qish",
            "correct": "B",
            "ball": 2
          },
          {
            "q": "GNSS qurilmasi h = 428,6 m ellipsoidal balandlikni ko‘rsatdi. Hududda geoid undulyatsiyasi N = 32,4 m bo‘lsa, muhandislik ishlarida ishlatiladigan ortometrik balandlik qanday bo‘ladi?",
            "A": "32,4 m",
            "B": "428,6 m",
            "C": "461,0 m",
            "D": "396,2 m",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Geoid va ellipsoid farqini amaliy geodezik ish nuqtayi nazaridan eng aniq izohlaydigan javobni belgilang.",
            "A": "Geoid hisoblash uchun, ellipsoid balandlik uchun ishlatiladi",
            "B": "Ellipsoid koordinata va proyeksiya hisoblari uchun matematik model, geoid esa balandliklar uchun fizik tayanch sirt",
            "C": "Geoid faqat xarita bezagi uchun kerak",
            "D": "Ikkalasi ham bir xil fizik sirt",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "1:25 000 masshtabli xaritada ikki nuqta orasidagi masofa 6,8 sm. Shu yo‘nalishda 0,2 mm grafik xato mavjud bo‘lsa, haqiqiy masofa va taxminiy xato qaysi javobda to‘g‘ri?",
            "A": "170 m; ±2 m",
            "B": "1,7 km; ±5 m",
            "C": "17 km; ±50 m",
            "D": "680 m; ±25 m",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Plan, xarita va profilni farqlashda ilmiy jihatdan eng asosiy mezonlar qaysilar?",
            "A": "Muallif, nashriyot, sahifa raqami",
            "B": "Rang, shrift, qog‘oz turi",
            "C": "Hudud kattaligi, Yer egriligining hisobga olinishi, umumlashtirish darajasi va vertikal kesim mavjudligi",
            "D": "Faqat masshtab turi",
            "correct": "C",
            "ball": 2
          },
          {
            "q": "1:10 000 xaritada to‘rtburchak maydon 3,2 sm × 2,5 sm. Joydagi maydonni toping.",
            "A": "8 000 m²",
            "B": "800 000 m²",
            "C": "80 000 m²",
            "D": "8 ga emas, 0,8 ga",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "1:1 000 000 varaq 12×12 bo‘linish orqali 1:100 000 varaqlarga ajratilganda, nuqtaning aniq varaq raqamini topish uchun qanday ketma-ketlik zarur?",
            "A": "Faqat koordinata zonasini bilish",
            "B": "Faqat joy nomini bilish",
            "C": "Faqat masshtabni bilish yetarli",
            "D": "Millionlik indeks, nuqtaning kenglik-uzunlik ofseti, satr-ustun o‘rni va varaq raqamini aniqlash",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Talaba GPSdan olingan koordinatani graduslarda, topografik xaritadagi kilometr to‘rini esa metrda ishlatib, ularni bevosita solishtirdi. Bunda asosiy metodik xato nimada?",
            "A": "Balandlik noto‘g‘ri yozilganida",
            "B": "Relyef hisobga olinmaganida",
            "C": "Geografik koordinata va tekislik koordinata tizimlari aralashtirilganida",
            "D": "Masshtab tanlanmaganida",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Haqiqiy azimut, magnit azimut va direksion burchak o‘rtasidagi farqni aniqlashda qaysi omillar asosiy hisoblanadi?",
            "A": "Faqat masshtab va legenda",
            "B": "Faqat xarita ramkasi",
            "C": "Faqat gorizontallar oralig‘i",
            "D": "Magnit og‘ish va meridianlar yaqinlashuvi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Gorizontallar orasidagi balandlik farqi 5 m, xaritada ikki gorizontal orasidagi masofa 4 mm, masshtab 1:10 000. Qiyalikning taxminiy nisbati qanday?",
            "A": "5 m / 400 m = 1,25%",
            "B": "5 m / 4 m = 125%",
            "C": "50 m / 400 m = 12,5%",
            "D": "5 m / 40 m = 12,5%",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Yopiq gorizontallar markazga qarab balandlashib borsa, lekin yonida soy chiziqlari V-simon shaklda pastga yo‘nalgan bo‘lsa, bu relyef qanday talqin qilinadi?",
            "A": "Faqat botqoqlik",
            "B": "Faqat sun’iy obyekt",
            "C": "Tepalik va undan pastga tushuvchi vodiy/soy tizimi",
            "D": "Tekis plato",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Teodolit nuqtaga o‘rnatilganda markazlash va gorizontlash yetarli bajarilmasa, bu xato qaysi natijaga bevosita ta’sir qiladi?",
            "A": "Faqat asbob rangiga",
            "B": "Gorizontal burchak va syomka nuqtalarining planli aniqligiga",
            "C": "Faqat reyka balandligiga",
            "D": "Faqat jurnal sarlavhasiga",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "1:1 000 masshtabli teodolit syomkasi planida 1 sm joyda nimaga teng va bu masshtab qanday amaliy ishlar uchun qulay?",
            "A": "100 m; regional tahlil uchun",
            "B": "10 m; kichik hudud, bino, yo‘l, ariq va chegaralarni aniq tushirish uchun",
            "C": "1 km; atlas tuzish uchun",
            "D": "1 m; faqat nivelirlash uchun",
            "correct": "B",
            "ball": 2
          },
          {
            "q": "To‘la qabul usulida burchak o‘lchashning ilmiy-amaliy afzalligi nimada?",
            "A": "Faqat masofa beradi",
            "B": "Vizirlash va limbdan o‘qishdagi ayrim xatolarni kamaytiradi, natijani nazorat qilish imkonini beradi",
            "C": "O‘lchashni tez tugatadi",
            "D": "Faqat vertikal profil chizadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Geometrik nivelirlashda orqa sanoq 1,642 m, old sanoq 0,984 m bo‘lsa, ikki nuqta balandlik farqi qanday?",
            "A": "+2,626 m",
            "B": "+0,658 m",
            "C": "−0,658 m",
            "D": "0,984 m",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Trassa nivelirlashda bog‘lovchi nuqtalar va oraliq nuqtalar farqi qaysi javobda aniq berilgan?",
            "A": "Ikkalasi bir xil",
            "B": "Bog‘lovchi nuqta balandlikni keyingi bekatga uzatadi, oraliq nuqta esa trassa relyefini batafsil ko‘rsatadi",
            "C": "Bog‘lovchi nuqta faqat xarita nomi",
            "D": "Oraliq nuqta asbob o‘rni",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Yopiq teodolit yo‘li ochiq yo‘lga nisbatan qaysi jihati bilan ishonchliroq?",
            "A": "Chizish osonligi bilan",
            "B": "Masshtabsiz ishlashi bilan",
            "C": "Nivelir talab qilmasligi bilan",
            "D": "Burchak va koordinata yopilish xatosini tekshirish imkoniyati bilan",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Bo‘ylama profilda vertikal masshtab gorizontal masshtabga nisbatan yirikroq olinadi. Bu holatning metodik xavfi nimada?",
            "A": "Balandlik hisoblanmaydi",
            "B": "Qiyaliklar ko‘zga sun’iy ravishda keskinroq ko‘rinishi mumkin",
            "C": "Masofa yo‘qoladi",
            "D": "Relyef umuman ko‘rinmaydi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Nivelirlashda yopilish xatosi ruxsat etilgan me’yordan oshib ketsa, eng to‘g‘ri amaliy qaror qaysi?",
            "A": "Natijani o‘zgartirmasdan qabul qilish",
            "B": "O‘lchov sxemasi, sanoqlar va bekatlarni tekshirib, zarur hollarda qayta nivelirlash",
            "C": "Faqat profilni chiroyli chizish",
            "D": "Jurnalni yopish",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Mavzuli kartani baholashda faqat rang va dizaynga qarash yetarli emas. Qaysi mezonlar ilmiy baholash uchun muhim?",
            "A": "Faqat shrift",
            "B": "Sarlavha, ma’lumot manbasi, tasvirlash usuli, masshtab, legenda, proyeksiya va mazmunning mosligi",
            "C": "Faqat sahifa raqami",
            "D": "Faqat rang",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Globus bilan ishlash proyeksiya mavzusiga qanday tayanch beradi?",
            "A": "Faqat okeanlarni ko‘rsatadi",
            "B": "Faqat davlat nomlarini yodlatadi",
            "C": "Globus xaritani almashtiradi",
            "D": "Yer shaklini buzilishsizroq tasavvur qilish, meridian-parallel tarmog‘i va proyeksiya deformatsiyasini anglashga yordam beradi",
            "correct": "D",
            "ball": 2
          },
          {
            "q": "Konusli proyeksiya qaysi holatda silindrik proyeksiyaga nisbatan maqsadga muvofiqroq bo‘ladi?",
            "A": "O‘rta kengliklarda g‘arb-sharq yo‘nalishida cho‘zilgan hududlarni tasvirlashda",
            "B": "Qutb markazli xaritada",
            "C": "Butun dunyoni ekvator bo‘yicha tasvirlashda",
            "D": "Faqat kichik bino planida",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kartografiyada “xarita — model” degan yondashuv nimani anglatadi?",
            "A": "Xarita faqat bezak",
            "B": "Xarita faqat matn",
            "C": "Xarita faqat rasm",
            "D": "Xarita hududiy obyekt va hodisalarning tanlangan, umumlashtirilgan, shartli belgilar orqali ifodalangan ilmiy modeli",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Atlas oddiy xaritalar yig‘indisidan nimasi bilan farq qiladi?",
            "A": "Sahifalari ko‘pligi bilan",
            "B": "Faqat muqovasi bilan",
            "C": "Xaritalar yagona maqsad, metodika, masshtab/proyeksiya tizimi va mazmuniy izchillik asosida tuzilgani bilan",
            "D": "Faqat rangli bo‘lgani bilan",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Kartografik tasvirlash usulini tanlashda eng muhim metodik talab qaysi?",
            "A": "Har doim bir xil rang ishlatish",
            "B": "Faqat doira belgilar ishlatish",
            "C": "Hodisa xarakteri tasvirlash usuliga mos bo‘lishi",
            "D": "Masshtabni ko‘rsatmaslik",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Umumgeografik va mavzuli kartani qiyosiy tahlil qilishda qaysi jihat asosiy farqlovchi mezon bo‘ladi?",
            "A": "Har ikkalasi bir xil",
            "B": "Qog‘oz sifati",
            "C": "Umumgeografik karta ko‘p obyektlarni umumiy ko‘rsatsa, mavzuli karta muayyan hodisa yoki jarayonni chuqurlashtirib tasvirlaydi",
            "D": "Faqat ranglar farq qiladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Xaritani matematik asosini tashkil etuvchi elementlar qaysi javobda to‘liqroq berilgan?",
            "A": "Faqat sarlavha va muallif",
            "B": "Faqat rang va legenda",
            "C": "Ellipsoid, koordinata tizimi, masshtab, proyeksiya, geodezik asos va koordinata to‘ri",
            "D": "Faqat shartli belgilar",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Proyeksiya tanlashda eng ilmiy yondashuv qaysi?",
            "A": "Eng chiroyli ko‘ringan proyeksiyani olish",
            "B": "Har doim qutbiy proyeksiyani tanlash",
            "C": "Hudud joylashuvi, shakli, xarita maqsadi va qaysi buzilish kamroq ahamiyatli ekanini hisobga olish",
            "D": "Har doim Merkatorni tanlash",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "GAT dasturida qatlam tushunchasi nimani anglatadi?",
            "A": "Bir xil turdagi fazoviy obyektlar va atribut ma’lumotlarining alohida ma’lumotlar to‘plami",
            "B": "Faqat rasm fayli",
            "C": "Faqat jadval nomi",
            "D": "Faqat xarita ramkasi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kartografik tasvirlash usullarida sifatli va miqdoriy hodisalarni farqlash nima uchun zarur?",
            "A": "Xarita nomini qisqartirish uchun",
            "B": "Hodisaga mos belgi, diagramma, kartogramma yoki izoliniya tanlash uchun",
            "C": "Ranglar sonini kamaytirish uchun",
            "D": "Proyeksiyani o‘chirish uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "GAT dasturlarini o‘rganishda atribut jadvali va fazoviy obyekt bog‘liqligi nimani ta’minlaydi?",
            "A": "Faqat fayl nomlashni",
            "B": "Faqat dizaynni",
            "C": "Xarita obyektlarini ma’lumotlar bazasi orqali so‘rash, tahlil qilish va tasniflashni",
            "D": "Faqat rang almashtirishni",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Relyefni kartografik tasvirlashda gorizontallar, gipsometrik bo‘yash va soyalashni birgalikda qo‘llashning afzalligi nimada?",
            "A": "Xarita murakkablashadi xolos",
            "B": "Faqat rang beradi",
            "C": "Balandlik, shakl va vizual plastiklikni birgalikda ko‘rsatadi",
            "D": "Faqat masshtabni almashtiradi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "GATga geografik ma’lumot kiritishda eng xavfli xatolardan biri qaysi?",
            "A": "Rang tanlash",
            "B": "Fayl nomini uzun yozish",
            "C": "Legendani joylashtirish",
            "D": "Koordinata tizimi noto‘g‘ri tanlanishi yoki qatlamlar turli CRSda bo‘lishi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Kartografik generalizatsiya nima uchun zarur?",
            "A": "Faqat rangni kamaytirish uchun",
            "B": "Faqat nomlarni o‘chirish uchun",
            "C": "Masshtab va xarita maqsadiga mos ravishda obyektlarni tanlash, soddalashtirish va umumlashtirish uchun",
            "D": "Barcha obyektlarni mayda detali bilan berish uchun",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Rastr va vektor ma’lumotlarining eng muhim farqi qaysi?",
            "A": "Vektor faqat rasm",
            "B": "Rastr piksel kataklariga, vektor esa nuqta, chiziq va poligon geometriyasiga asoslanadi",
            "C": "Rastr faqat matn",
            "D": "Ikkalasi bir xil",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Xarita loyihalashda “maqsad–auditoriya–masshtab–tasvirlash usuli” zanjiri nima uchun muhim?",
            "A": "Faqat muqova uchun",
            "B": "Faqat dizayn uchun",
            "C": "Faqat sahifa raqami uchun",
            "D": "Xaritaning ilmiy aniqligi, o‘qilishi va foydalanuvchi ehtiyojiga mosligini ta’minlash uchun",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Ma’lumotlar bazasi so‘rovi GATda qanday vazifani bajaradi?",
            "A": "Faqat rangni o‘chiradi",
            "B": "Faqat fayl ochadi",
            "C": "Atribut va fazoviy shartlar bo‘yicha obyektlarni tanlash, filtrlash va tahlil qilish imkonini beradi",
            "D": "Faqat xaritani bezaydi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Xaritalardan foydalanishda kartometrik va morfometrik tahlil farqi nimada?",
            "A": "Faqat legenda tahlili",
            "B": "Kartometrik tahlil masofa, maydon, burchak kabi o‘lchovlarga; morfometrik tahlil relyef shakli, qiyalik va balandlik xususiyatlariga qaratiladi",
            "C": "Farqi yo‘q",
            "D": "Ikkalasi faqat rang tahlili",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "ArcGISda qatlamlarni ustma-ust tahlil qilish qanday amaliy natija beradi?",
            "A": "Faqat rang o‘zgaradi",
            "B": "Jadval bekor qilinadi",
            "C": "Turli fazoviy omillar kesishmasi asosida yangi tahliliy xulosa chiqariladi",
            "D": "Xarita yo‘qoladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Xarita va atlasni ilmiy baholashda eng to‘liq mezonlar qaysilar?",
            "A": "Faqat chiroyli ko‘rinishi",
            "B": "Faqat muallif nomi",
            "C": "Maqsadga moslik, matematik asos, ma’lumot manbasi, generalizatsiya, tasvirlash usuli, aniqlik va o‘qiluvchanlik",
            "D": "Faqat rang va shrift",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "ArcMap muhitida qatlam, atribut jadvali va layout rejimi o‘rtasidagi bog‘liqlik qaysi javobda to‘g‘ri?",
            "A": "Faqat layout kerak",
            "B": "Faqat atribut jadvali kerak",
            "C": "Qatlam fazoviy obyektni, atribut jadvali uning tavsifini, layout esa yakuniy kartografik mahsulotni rasmiylashtirishni ta’minlaydi",
            "D": "Ular aloqasiz",
            "correct": "C",
            "ball": 3
          },
        ]
      },
    ]
  },
  "m3": {
    "name": "GAT (GIS) — ArcGIS/QGIS",
    "sections": [
      {
        "title": "§36-mavzugacha",
        "questions": [
          {
            "q": "ArcGISda mavzuli xarita komponovkasida legenda, masshtab, shimol belgisi va koordinata to‘ri noto‘g‘ri joylashtirilsa, eng asosiy metodik kamchilik nimada ko‘rinadi?",
            "A": "Ranglar avtomatik o‘zgaradi",
            "B": "Qatlamlar o‘chib ketadi",
            "C": "Kartaning o‘qilishi va ilmiy talqini buziladi",
            "D": "Fayl hajmi ortadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Aholi zichligi xaritasida absolyut aholi sonini rang intensivligi bilan berish qanday xatoga olib keladi?",
            "A": "Hudud maydoni farqlari hisobga olinmagani uchun noto‘g‘ri vizual xulosa beradi",
            "B": "Legenda keraksiz bo‘ladi",
            "C": "Masshtab kattalashadi",
            "D": "Proyeksiya yo‘qoladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "ArcGISda geografik ma’lumotlar bilan ishlaganda bir qatlam WGS 84, ikkinchisi mahalliy proyeksiyada bo‘lsa, eng avvalo nima tekshiriladi?",
            "A": "CRS/proyeksiya mosligi",
            "B": "Fayl nomi",
            "C": "Simvol shakli",
            "D": "Rang palitrasi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Raqamlashtirish jarayonida snapping yoqilmasa, chiziqli obyektlarda qanday muammo yuzaga kelishi mumkin?",
            "A": "Uzilish, kesishmaslik va topologik xatolar paydo bo‘ladi",
            "B": "Masshtab o‘zgaradi",
            "C": "Jadval yo‘qoladi",
            "D": "Ranglar qorayadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Overlay tahlilining ilmiy vazifasi qaysi javobda to‘g‘ri ifodalangan?",
            "A": "Faqat ranglarni almashtirish",
            "B": "Faqat atribut jadvalni yopish",
            "C": "Qatlamlarni faqat ko‘rinish uchun ustma-ust qo‘yish",
            "D": "Bir nechta fazoviy qatlam kesishmasidan yangi tahliliy natija olish",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Tabiiy xavf zonalarini aniqlashda DEM, qiyalik, aholi punkti va yo‘l qatlamlari birlashtirilsa, bu qaysi tahlil turiga yaqin?",
            "A": "Ko‘p mezonli geofazoviy tahlil",
            "B": "Faqat nomenklatura",
            "C": "Faqat matnli tavsif",
            "D": "Oddiy chizma",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Network analysis qaysi holatda eng maqbul qo‘llanadi?",
            "A": "Tuproq rangini aniqlashda",
            "B": "Eng qisqa marshrut, servis hududi yoki transport ulanishini baholashda",
            "C": "Gorizontallarni bo‘yashda",
            "D": "Rastr piksel rangini tanlashda",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Tadqiqot ma’lumotlarini GATda aks ettirishda klassifikatsiya noto‘g‘ri tanlansa, qanday oqibat bo‘ladi?",
            "A": "Fayl ochilmaydi",
            "B": "Masshtab yo‘qoladi",
            "C": "Xarita ilmiy xulosani noto‘g‘ri yo‘naltiradi",
            "D": "Kompyuter o‘chadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Elektron karta va bosma karta uchun dizayn tanlashda asosiy farq nimada?",
            "A": "Elektron kartada koordinata bo‘lmaydi",
            "B": "Elektron kartada interaktivlik, zoom va qatlam boshqaruvi hisobga olinadi",
            "C": "Farq yo‘q",
            "D": "Bosma kartada legenda kerak emas",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "O‘zbekiston Respublikasi aholi xaritasini tuzishda viloyatlar bo‘yicha aholining umumiy soni emas, zichligi berilsa, bu qanday metodik afzallik beradi?",
            "A": "Masshtab yo‘qoladi",
            "B": "Fayl kichrayadi",
            "C": "Ranglar kamayadi",
            "D": "Hudud maydoni farqlarini hisobga oladi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Aholi xaritasida klasslar soni haddan ortiq ko‘p tanlansa, qanday muammo paydo bo‘ladi?",
            "A": "Aniqlik doimo oshadi",
            "B": "Xarita o‘qilishi qiyinlashadi va guruhlar mazmuni yo‘qoladi",
            "C": "Legenda kerak bo‘lmaydi",
            "D": "CRS o‘zgaradi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "O‘zbekiston Milliy universiteti raqamli xaritasini yaratishda bino, yo‘l, yashil hudud va kirish nuqtalari qanday geometriya turlarida berilishi maqsadga muvofiq?",
            "A": "Bino–poligon, yo‘l–chiziq, kirish nuqtasi–nuqta",
            "B": "Hammasi faqat matn",
            "C": "Hammasi faqat rastr",
            "D": "Bino–nuqta, yo‘l–poligon, kirish–rastr",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Universitet raqamli xaritasida atribut jadvali nima uchun zarur?",
            "A": "Faylni o‘chirish uchun",
            "B": "Faqat rang tanlash uchun",
            "C": "Xarita ramkasini chizish uchun",
            "D": "Obyekt nomi, funksiyasi, raqami, qavati kabi ma’lumotlarni saqlash uchun",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "DEM va DTM farqini amaliy jihatdan to‘g‘ri ko‘rsating.",
            "A": "DEM umumiy balandlik sirtini, DTM esa yer sathining tozalangan modelini ifodalashi mumkin",
            "B": "Farqi yo‘q",
            "C": "Ikkalasi faqat jadval",
            "D": "DEM har doim faqat bino, DTM faqat suv",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "3D geofazoviy modelda balandlik ma’lumotlari noto‘g‘ri CRS yoki datumda bo‘lsa, nima yuz beradi?",
            "A": "Model chiroyliroq chiqadi",
            "B": "Obyektlarning vertikal va gorizontal joylashuvi noto‘g‘ri talqin qilinadi",
            "C": "Ranglar ortadi",
            "D": "Legenda o‘chadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "ArcGISda 3D xarita yaratishda DEM, bino qatlami va yo‘l tarmog‘i birlashtirilsa, qaysi natija olinadi?",
            "A": "Faqat rasm fayli",
            "B": "Hududning uch o‘lchovli fazoviy modeli",
            "C": "Oddiy matnli jadval",
            "D": "Faqat 2D diagramma",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "3D xaritada vertical exaggeration ehtiyotkor ishlatilmasa, qanday ilmiy xato yuz beradi?",
            "A": "Model aniqlashadi",
            "B": "Fayl kichrayadi",
            "C": "Koordinatalar to‘g‘rilanadi",
            "D": "Relyef sun’iy ravishda haddan tashqari tik yoki keskin ko‘rinadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Aqlli shahar loyihasida GATning asosiy vazifasi nimadan iborat?",
            "A": "Faqat matn saqlash",
            "B": "Faqat rasm chizish",
            "C": "Transport, infratuzilma, sensor, aholi va xizmatlarni fazoviy boshqaruv tizimiga birlashtirish",
            "D": "Faqat 3D binolarni chiroyli ko‘rsatish",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Smart city modelida IoT sensor ma’lumotlari GATga ulanmasa, qanday cheklov paydo bo‘ladi?",
            "A": "Xarita rangsiz bo‘ladi",
            "B": "Real vaqt monitoring va tezkor qaror qabul qilish imkoniyati kamayadi",
            "C": "Masshtab yo‘qoladi",
            "D": "Legendani o‘qib bo‘lmaydi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Animatsion xaritada vaqt omili noto‘g‘ri sozlansa, qanday xulosa xatosi yuz beradi?",
            "A": "Qatlamlar doimiy to‘g‘rilanadi",
            "B": "Fayl nomi o‘zgaradi",
            "C": "Hodisa dinamikasi noto‘g‘ri talqin qilinadi",
            "D": "Balandlik oshadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Transport oqimi yoki aholi migratsiyasini animatsion xaritada ko‘rsatishning afzalligi nimada?",
            "A": "Statik xaritada ko‘rinmaydigan vaqt bo‘yicha o‘zgarishni ko‘rsatadi",
            "B": "Proyeksiyani yo‘q qiladi",
            "C": "Masshtabni bekor qiladi",
            "D": "Jadvalni keraksiz qiladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Mobil GAT ilovasida dala ma’lumotlarini yig‘ishda eng muhim sifat nazorati qaysi?",
            "A": "Internet tezligi xolos",
            "B": "Telefon rangi",
            "C": "GPS aniqligi, vaqt belgisi, koordinata tizimi va atribut to‘liqligi",
            "D": "Faqat ekran yorqinligi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Offline rejimda yig‘ilgan mobil GAT ma’lumotlari keyin bazaga yuklanganda nimalar tekshirilishi kerak?",
            "A": "Faqat shrift",
            "B": "Faqat rang",
            "C": "Dublikat, koordinata siljishi, atribut yetishmasligi va sinxronlash xatolari",
            "D": "Faqat fayl nomi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Masofadan zondlashning GATdan farqli asosiy tomoni nimada?",
            "A": "U faqat qo‘lda chiziladi",
            "B": "U faqat matn yozadi",
            "C": "U koordinata ishlatmaydi",
            "D": "Obyekt haqida bevosita kontaktsiz, elektromagnit nurlanish orqali ma’lumot oladi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Multispektral tasvirlar oddiy fotosuratga nisbatan qanday afzallik beradi?",
            "A": "Faylni matnga aylantiradi",
            "B": "Faqat chiroyli rang beradi",
            "C": "Turli spektral diapazonlar orqali yer qoplami, o‘simlik va suv obyektlarini chuqurroq ajratadi",
            "D": "Masshtabni olib tashlaydi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Kosmik suratlarni GATga kiritishda ortorektifikatsiya nima uchun zarur?",
            "A": "Faqat fayl nomini o‘zgartirish uchun",
            "B": "Relyef va sensor geometriyasi sababli yuzaga kelgan siljishlarni tuzatish uchun",
            "C": "Tasvirni bezash uchun",
            "D": "Faqat rangni almashtirish uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "GPS ma’lumotlari va kosmik surat birlashtirilganda qaysi shart bajarilmasa, joylashuv xatosi yuzaga keladi?",
            "A": "Ikkalasi bir xil rangda bo‘lmasa",
            "B": "Fayl nomi uzun bo‘lsa",
            "C": "Legenda kichik bo‘lsa",
            "D": "Koordinata tizimi va datum mos kelmasa",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Aerokosmik suratlarni qayta ishlashda klassifikatsiya nima vazifani bajaradi?",
            "A": "Piksel yoki obyektlarni yer qoplami sinflariga ajratadi",
            "B": "Faqat koordinata chizadi",
            "C": "Faqat sarlavha yozadi",
            "D": "Faqat masshtab tanlaydi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Sun’iy yo‘ldosh tasvirida bulut, soyalar va geometrik siljishlar tuzatilmasa, qanday ilmiy xatolik yuz beradi?",
            "A": "Fayl hajmi kamayadi",
            "B": "Klassifikatsiya mukammal bo‘ladi",
            "C": "Xarita avtomatik yaxshilanadi",
            "D": "Yer qoplami va obyektlar noto‘g‘ri aniqlanishi mumkin",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Aerokosmik suratlarni qayta ishlashda “training sample” noto‘g‘ri tanlansa, natijaga qanday ta’sir qiladi?",
            "A": "Rastr vektorga avtomatik aylanadi",
            "B": "Proyeksiya yaxshilanadi",
            "C": "Masshtab ortadi",
            "D": "Klassifikatsiya aniqligi pasayadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Masofadan zondlash natijasini GAT tahliliga ulashda eng maqbul ketma-ketlik qaysi?",
            "A": "Faqat rasm ochish → chop etish",
            "B": "Tasvir → oldindan ishlov → georeferens/ortorektifikatsiya → klassifikatsiya → vektor/rastr tahlil → xarita/hisobot",
            "C": "Legenda → rang → sarlavha",
            "D": "Masshtab → matn → muqova",
            "correct": "B",
            "ball": 3
          },
        ]
      },
      {
        "title": "III-BOB boshidan,  §18-mavzudan",
        "questions": [
          {
            "q": "GAT, GPS va masofadan zondlash texnologiyalarining yagona tizimda qo‘llanishi qanday ilmiy-amaliy natija beradi?",
            "A": "Faqat xarita dizaynini yaxshilaydi",
            "B": "Geofazoviy ma’lumotni yig‘ish, aniqlash, tahlil qilish va qaror qabul qilishga xizmat qiladi",
            "C": "Faqat matnli hisobot tuzadi",
            "D": "Faqat joy nomlarini saqlaydi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "GATning oddiy elektron xaritadan asosiy farqi nimada?",
            "A": "Fazoviy obyektlar atribut ma’lumotlari bilan bog‘lanib, tahlil va so‘rovlar bajarilishida",
            "B": "Faqat rasm sifatida saqlanishida",
            "C": "Faqat rangli bo‘lishida",
            "D": "Faqat chop etilishida",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "GATda “qatlam” tushunchasi ilmiy jihatdan nimani anglatadi?",
            "A": "Faqat fon rasmi",
            "B": "Bir turdagi fazoviy obyektlar va ularning atributlaridan iborat ma’lumotlar to‘plami",
            "C": "Xaritaning bezak elementi",
            "D": "Faqat jadval nomi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Agar yo‘l, daryo va aholi punkti qatlamlari bitta umumiy xaritada tahlil qilinsa, bu GATning qaysi imkoniyatini ko‘rsatadi?",
            "A": "Matn tahrirlash",
            "B": "Rang almashtirish",
            "C": "Fayl siqish",
            "D": "Ko‘p qatlamli fazoviy integratsiya",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "GATda atribut jadvali noto‘g‘ri to‘ldirilsa, qanday muammo yuzaga keladi?",
            "A": "Xarita faqat rangsiz bo‘ladi",
            "B": "Fazoviy obyektlar bo‘yicha so‘rov, tasniflash va tahlil natijalari xato chiqadi",
            "C": "Masshtab avtomatik yo‘qoladi",
            "D": "Proyeksiya har doim to‘g‘rilanadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Vektor qatlamda obyekt geometriyasi to‘g‘ri, ammo atributlari noto‘g‘ri bo‘lsa, bu qanday xato hisoblanadi?",
            "A": "Grafik emas, semantik-atributiv xato",
            "B": "Faqat proyeksiya xatosi",
            "C": "Rastr xatosi",
            "D": "Masshtab xatosi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "GATda fazoviy tahlilni bajarish uchun eng zarur shart qaysi?",
            "A": "Qatlamlarning chiroyli rangda bo‘lishi",
            "B": "Qatlamlarning koordinata tizimi, geometriyasi va atributlari mos bo‘lishi",
            "C": "Faqat legenda bo‘lishi",
            "D": "Faqat fayl nomlari bir xil bo‘lishi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "ArcGISda mavzuli xarita komponovkasida legenda, masshtab, shimol belgisi va sarlavha bo‘lmasa, asosiy ilmiy kamchilik nimada?",
            "A": "Xarita fayli ochilmaydi",
            "B": "Qatlamlar o‘chadi",
            "C": "Xaritaning talqin qilinishi va mustaqil o‘qilishi qiyinlashadi",
            "D": "Ranglar avtomatik yo‘qoladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Aholi zichligi xaritasida absolyut aholi soni rang intensivligi bilan berilsa, qanday metodik xato yuzaga keladi?",
            "A": "Proyeksiya avtomatik tuzatiladi",
            "B": "Legenda kerak bo‘lmaydi",
            "C": "Hudud maydoni hisobga olinmagani sababli xulosa noto‘g‘ri bo‘lishi mumkin",
            "D": "Xarita aniqligi doim oshadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "ArcGIS layout rejimida xarita ramkasi va masshtab mos kelmasa, bu nimalarga ta’sir qiladi?",
            "A": "Kartometrik o‘qish, masofa baholash va umumiy ishonchlilikka",
            "B": "Faqat fayl hajmiga",
            "C": "Faqat rang tanloviga",
            "D": "Faqat shrift turiga",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Mavzuli xaritada klassifikatsiya oralig‘i noto‘g‘ri tanlansa, natija qanday buziladi?",
            "A": "Masshtab ortadi",
            "B": "Sarlavha o‘zgaradi",
            "C": "Hodisaning hududiy tafovuti sun’iy kuchayadi yoki yashirinib qoladi",
            "D": "Qatlamlar avtomatik tuzaladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "GATning geokodlash funksiyasi nimani amalga oshiradi?",
            "A": "Rastrni ranglaydi",
            "B": "Manzil yoki obyekt nomini koordinatali fazoviy nuqtaga aylantiradi",
            "C": "Faqat profil chizadi",
            "D": "Faqat jadvalni chop etadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Geomatika tushunchasi qaysi jarayonlarni birlashtiradi?",
            "A": "Faqat matn tahririni",
            "B": "Geodeziya, kartografiya, GAT, GPS, masofadan zondlash va fazoviy ma’lumotlarni boshqarishni",
            "C": "Faqat statistikani",
            "D": "Faqat xarita chizishni",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Shahar transportini optimallashtirishda GATdan foydalanishning eng asosiy afzalligi nimada?",
            "A": "Faqat xarita rangini o‘zgartiradi",
            "B": "Yo‘l nomlarini bezaydi",
            "C": "Faqat bino rasmini beradi",
            "D": "Marshrut, tirbandlik, xizmat hududi va masofa omillarini fazoviy tahlil qiladi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Favqulodda vaziyatlarda GAT qaysi vazifani eng samarali bajaradi?",
            "A": "Xavf zonasi, aholi punkti, yo‘l va evakuatsiya yo‘nalishlarini tezkor tahlil qiladi",
            "B": "Faqat fotosurat saqlaydi",
            "C": "Faqat hisobot sarlavhasini tuzadi",
            "D": "Faqat atlas yaratadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "ArcGISda turli manbalardan olingan qatlamlar ustma-ust tushmasa, birinchi tekshiriladigan sabab qaysi?",
            "A": "Koordinata tizimi va datum mosligi",
            "B": "Fayl nomining uzunligi",
            "C": "Rang palitrasi",
            "D": "Shrift turi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Raqamlashtirishda snapping funksiyasi yoqilmasa, qanday topologik xatolar yuzaga keladi?",
            "A": "Chiziqlar tutashmasligi, bo‘shliq, ustma-ust tushish va uzilishlar",
            "B": "Rang xatosi",
            "C": "Sarlavha xatosi",
            "D": "Legenda xatosi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Poligon qatlamida chegaralar kesishib ketgan bo‘lsa, bu qanday xato turiga kiradi?",
            "A": "Faqat orfografik xato",
            "B": "Faqat rang xatosi",
            "C": "Topologik xato",
            "D": "Faqat shrift xatosi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "ArcGISda atribut jadvalidagi “ID” maydoni nima uchun muhim?",
            "A": "Faqat bezak uchun",
            "B": "Masshtabni o‘zgartirish uchun",
            "C": "Har bir obyektni yagona identifikatsiya qilish va ma’lumotlar bog‘lanishini ta’minlash uchun",
            "D": "Rang tanlash uchun",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "O‘zbekiston Respublikasi aholi xaritasini tuzishda absolyut aholi sonidan ko‘ra aholi zichligini ko‘rsatishning afzalligi nimada?",
            "A": "Xarita faqat siyosiy bo‘ladi",
            "B": "Viloyatlar maydoni farqini hisobga oladi",
            "C": "Ranglar kamayadi",
            "D": "Proyeksiya kerak bo‘lmaydi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Aholi xaritasida tabiiy uzilishlar usuli bilan teng interval usuli turlicha natija bersa, bu nimani anglatadi?",
            "A": "Qatlam yo‘qolgan",
            "B": "Xarita ishlamaydi",
            "C": "Ma’lumot noto‘g‘ri degani",
            "D": "Klassifikatsiya usuli hududiy talqinga kuchli ta’sir qiladi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Aholi xaritasida ma’lumot yili ko‘rsatilmasa, qanday ilmiy kamchilik paydo bo‘ladi?",
            "A": "Masshtab avtomatik o‘zgaradi",
            "B": "Kartaning statistik ishonchliligi va dolzarbligini baholash qiyinlashadi",
            "C": "Rastr buziladi",
            "D": "Xarita chiroyli bo‘lmaydi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "GAT uchun ma’lumotlarni to‘plashda eng muhim talab qaysi?",
            "A": "Aniqlik, dolzarblik, koordinata tizimi, manba ishonchliligi va atribut to‘liqligi",
            "B": "Faqat fayl hajmi",
            "C": "Ma’lumotlarning chiroyli ko‘rinishi",
            "D": "Faqat rang",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "GPS, kosmik surat va statistik jadvaldan olingan ma’lumotlarni birlashtirishda eng xavfli muammo qaysi?",
            "A": "Ranglar soni kamligi",
            "B": "Kompyuter ekrani kichikligi",
            "C": "Fayl nomlari turlicha bo‘lishi",
            "D": "Format, koordinata tizimi, aniqlik va vaqt farqlarining mos kelmasligi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "GATga kiritilayotgan ma’lumotda metama’lumot bo‘lmasa, qanday muammo tug‘iladi?",
            "A": "Ma’lumot manbasi, sanasi, aniqligi va qo‘llash chegarasini baholash qiyinlashadi",
            "B": "Rang avtomatik o‘zgaradi",
            "C": "Poligon nuqtaga aylanadi",
            "D": "Fayl ochilmaydi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Universitet raqamli xaritasini yaratishda bino, yo‘l, daraxtzor va kirish nuqtalari uchun eng maqbul geometriya tanlovi qaysi?",
            "A": "Hammasi nuqta",
            "B": "Bino–poligon, yo‘l–chiziq, daraxtzor–poligon, kirish–nuqta",
            "C": "Hammasi rastr",
            "D": "Hammasi jadval",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Universitet raqamli xaritasida atribut jadvalida bino nomi, fakultet, qavat, kirish eshigi va funksiyasi berilsa, bu qanday imkoniyat yaratadi?",
            "A": "Faqat rangni o‘zgartiradi",
            "B": "Masshtabni bekor qiladi",
            "C": "Navigatsiya, qidiruv, tahlil va obyektlarni tasniflash imkonini beradi",
            "D": "Proyeksiyani o‘chiradi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Kampus xaritasida yo‘laklar chiziq sifatida, binolar poligon sifatida berilmasa, qanday metodik muammo yuzaga keladi?",
            "A": "Geometriya obyekt mazmuniga mos kelmaydi",
            "B": "Xarita avtomatik yaxshilanadi",
            "C": "Ranglar kamayadi",
            "D": "Ma’lumotlar bazasi kattalashadi",
            "correct": "A",
            "ball": 3
          },
        ]
      },
      {
        "title": "§21-mavzudan §24-mavzugacha",
        "questions": [
          {
            "q": "Rastr va vektor ma’lumotlarining asosiy farqi qaysi javobda ilmiy jihatdan to‘g‘ri berilgan?",
            "A": "Rastr piksel/katakchalar asosida, vektor esa nuqta, chiziq va poligon geometriyasi asosida ifodalanadi",
            "B": "Rastr faqat matn, vektor faqat rasm bo‘ladi",
            "C": "Vektor faqat sun’iy yo‘ldosh suratida bo‘ladi",
            "D": "Rastrda koordinata bo‘lmaydi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Yer qoplamasi turlarini sun’iy yo‘ldosh tasviri asosida ajratishda qaysi ma’lumot turi qulayroq?",
            "A": "Faqat jadval",
            "B": "Faqat chiziq",
            "C": "Faqat matn",
            "D": "Rastr",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Yo‘l tarmog‘i, daryo chizig‘i va ma’muriy chegaralarni aniq tahrirlash uchun qaysi ma’lumot turi maqsadga muvofiq?",
            "A": "Vektor",
            "B": "Rastr",
            "C": "Matnli fayl",
            "D": "Audio fayl",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Vektor ma’lumotlarda poligon geometriyasi qaysi obyektlar uchun mos?",
            "A": "Faqat balandlik pikseli",
            "B": "Faqat yo‘l markaziy chizig‘i",
            "C": "Aholi punkti hududi, yer uchastkasi, bino konturi",
            "D": "Faqat GPS nuqtasi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Rastr ma’lumotning fazoviy aniqligi asosan nimaga bog‘liq?",
            "A": "Fayl nomiga",
            "B": "Legendaning uzunligiga",
            "C": "Shrift turiga",
            "D": "Piksel o‘lchamiga",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "10 metrli pikselga ega kosmik suratda 1 piksel yer yuzasida qanday maydonni bildiradi?",
            "A": "10 m²",
            "B": "1000 m²",
            "C": "100 m²",
            "D": "1 km²",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Rastr tasvirda piksel o‘lchami yirik bo‘lsa, qanday muammo yuzaga keladi?",
            "A": "Aniqlik doim oshadi",
            "B": "Koordinata tizimi yo‘qoladi",
            "C": "Mayda obyektlar umumlashib ketadi yoki ko‘rinmaydi",
            "D": "Fayl doim kichraymaydi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Vektor ma’lumotlarda topologik xatolar qaysi holatda ko‘proq uchraydi?",
            "A": "Chiziqlar tutashmaganda, poligonlar ustma-ust tushganda yoki bo‘shliq qolganida",
            "B": "Fayl nomi uzun bo‘lganda",
            "C": "Matn kichik yozilganda",
            "D": "Rang ko‘k bo‘lganda",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Fotogrammetriyada bir nechta suratlar asosida uch o‘lchovli model olish qaysi prinsipga tayanadi?",
            "A": "Faqat ranglarni almashtirishga",
            "B": "Faqat masshtab yozishga",
            "C": "Bir xil obyektning turli nuqtalardan olingan tasvirlari orasidagi geometrik farqqa",
            "D": "Faqat jadval tuzishga",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "GPS yordamida olingan nuqtaviy koordinatalar vektor ma’lumotga aylantirilganda qaysi element majburiy bo‘ladi?",
            "A": "Faqat rang",
            "B": "Koordinata qiymatlari va atribut identifikatori",
            "C": "Faqat rasm sifati",
            "D": "Faqat sarlavha",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Bir xil hudud bo‘yicha DEM rastr, yo‘l vektori va aholi punkti poligoni birlashtirilsa, GATda qanday imkoniyat paydo bo‘ladi?",
            "A": "Faqat fayl siqish",
            "B": "Faqat chiroyli dizayn",
            "C": "Relyef, transport va joylashuv omillarini integratsion fazoviy tahlil qilish",
            "D": "Faqat matn tahrirlash",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Vektor ma’lumotni rastrga aylantirishda qanday yo‘qotish ehtimoli mavjud?",
            "A": "Atributlar avtomatik ko‘payadi",
            "B": "Geometrik aniqlik va obyekt chegaralarining silliqligi pasayishi mumkin",
            "C": "Koordinata tizimi mukammallashadi",
            "D": "Ma’lumot doim yaxshilanadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "ArcGISda 3 o‘lchamli xarita yaratishda DEM qatlamining asosiy vazifasi nima?",
            "A": "Faqat legenda chizish",
            "B": "Faqat sarlavha yozish",
            "C": "Faqat jadvalni yopish",
            "D": "Hududning balandlik asosini berish",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "3D xaritada bino poligonlariga balandlik atributi berilmasa, qanday cheklov paydo bo‘ladi?",
            "A": "Binolar hajmli ko‘rinishda to‘g‘ri ekstrudatsiya qilinmaydi",
            "B": "Xarita avtomatik o‘chadi",
            "C": "Masshtab yo‘qoladi",
            "D": "Rastr vektorga aylanadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "ArcGIS 3D modelida vertikal oshirish haddan tashqari katta tanlansa, ilmiy talqin qanday buziladi?",
            "A": "Yo‘llar avtomatik to‘g‘rilanadi",
            "B": "Balandliklar doim aniqroq bo‘ladi",
            "C": "Relyef real holatidan keskinroq ko‘rinadi",
            "D": "CRS tuzaladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "3D xaritada DEM va bino qatlami turli koordinata tizimida bo‘lsa, qanday muammo yuzaga keladi?",
            "A": "Qatlamlar fazoda mos tushmasligi mumkin",
            "B": "Ranglar kamayadi",
            "C": "Legenda kattalashadi",
            "D": "Fayl nomi o‘zgaradi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Raqamli relyef modeli asosida qiyalik xaritasi yaratish uchun qaysi boshlang‘ich ma’lumot zarur?",
            "A": "Balandlik qiymatlariga ega DEM",
            "B": "Faqat aholi soni",
            "C": "Faqat rasm sarlavhasi",
            "D": "Faqat yo‘l nomlari",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "3D xarita yaratishda “extrusion” funksiyasi nimaga xizmat qiladi?",
            "A": "Rastrni o‘chirishga",
            "B": "Jadvalni yopishga",
            "C": "2D obyektlarga balandlik qiymati berib, ularni hajmli ko‘rsatishga",
            "D": "Masshtabni yo‘qotishga",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "3D modelda ko‘rish burchagi va yorug‘lik noto‘g‘ri tanlansa, qanday muammo paydo bo‘ladi?",
            "A": "Relyef va obyektlar vizual talqini chalg‘itishi mumkin",
            "B": "Geometriya doim tuzaladi",
            "C": "Balandlik qiymati ortadi",
            "D": "Qatlamlar yo‘qolmaydi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "3D xarita natijasini ilmiy hisobotga kiritishda qaysi ma’lumot ko‘rsatilishi shart?",
            "A": "Faqat rang turi",
            "B": "Faqat fayl nomi",
            "C": "DEM manbasi, aniqligi, koordinata tizimi va ishlov berish usuli",
            "D": "Faqat kompyuter markasi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Internet manbalaridan geoma’lumot olishda eng muhim ilmiy talab qaysi?",
            "A": "Faqat nomi inglizcha bo‘lishi",
            "B": "Manbaning ishonchliligi, litsenziyasi, aniqligi va yangilangan sanasini tekshirish",
            "C": "Faqat rangli bo‘lishi",
            "D": "Faqat fayl tez yuklanishi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Ochiq geoma’lumotdan foydalanishda litsenziya shartlari nima uchun tekshiriladi?",
            "A": "Fayl rangini bilish uchun",
            "B": "Ma’lumotdan qonuniy va to‘g‘ri foydalanish chegarasini bilish uchun",
            "C": "Rastrni vektorga aylantirish uchun",
            "D": "Masshtabni avtomatik tuzatish uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Internetdan yuklangan shapefile qatlam GATda noto‘g‘ri joyda chiqsa, birinchi tekshiriladigan jihat qaysi?",
            "A": "Koordinata tizimi va proyeksiya fayli",
            "B": "Rang sifati",
            "C": "Jadvaldagi shrift",
            "D": "Fayl nomi uzunligi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "OpenStreetMap kabi manbalardan olingan yo‘l ma’lumotlarida qanday metodik cheklov bo‘lishi mumkin?",
            "A": "Ular GISga kiritilmaydi",
            "B": "Ular hech qachon koordinataga ega bo‘lmaydi",
            "C": "Ma’lumotlar to‘liqligi va yangiligi hududga qarab farq qilishi mumkin",
            "D": "Ular faqat rastr bo‘ladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Internet manbasidan olingan DEM qatlamini gidrologik tahlilda ishlatishdan oldin nima tekshiriladi?",
            "A": "Faqat fayl nomi",
            "B": "Faqat rang",
            "C": "Ruxsat etilgan aniqlik, piksel o‘lchami, bo‘sh qiymatlar va vertikal datum",
            "D": "Faqat shrift",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Turli internet manbalaridan olingan qatlamlar birlashtirilganda qaysi muammo eng ko‘p uchraydi?",
            "A": "Koordinata tizimi, masshtab, aniqlik va aktual sanalar mos kelmasligi",
            "B": "Atributlar mukammal to‘lishi",
            "C": "Hamma qatlam bir xil bo‘lishi",
            "D": "Fayllar avtomatik tekislanishi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Web-xarita servislaridan foydalanishda “tile” tushunchasi nimani bildiradi?",
            "A": "Faqat jadval qatorini",
            "B": "Xarita tasvirining kichik bo‘laklar ko‘rinishida yuklanishini",
            "C": "Faqat atribut maydonini",
            "D": "Faqat koordinata formulasini",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Internet geoma’lumotni ilmiy ishda ishlatishda metama’lumot bo‘lmasa, qanday xavf paydo bo‘ladi?",
            "A": "Ma’lumotning kelib chiqishi, aniqligi va qo‘llanish chegarasi noaniq bo‘ladi",
            "B": "Rastr doim aniqlashadi",
            "C": "Vektor poligonga aylanadi",
            "D": "Xarita avtomatik yaxshi chiqadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Masofadan zondlash ochiq ma’lumotlarini yuklashda bulutlilik ko‘rsatkichi nima uchun muhim?",
            "A": "Yer yuzasi obyektlari ko‘rinishini cheklashi mumkin",
            "B": "Koordinatani o‘chiradi",
            "C": "Fayl nomini o‘zgartiradi",
            "D": "Legendani kattalashtiradi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Internetdan olingan geoma’lumotni GAT loyihasiga kiritishda eng maqbul ketma-ketlik qaysi?",
            "A": "Fayl nomini o‘zgartirish → rang berish",
            "B": "Faqat jadvalni yopish",
            "C": "Yuklash → darhol chop etish",
            "D": "Yuklash → manba/metama’lumotni tekshirish → CRS moslash → sifat nazorati → tahlilga kiritish",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "GATda animatsion xarita tuzishda vaqt atributi noto‘g‘ri formatda bo‘lsa, qanday muammo yuzaga keladi?",
            "A": "Hodisa dinamikasi vaqt bo‘yicha noto‘g‘ri yoki umuman ko‘rsatilmaydi",
            "B": "Legendaga ehtiyoj qolmaydi",
            "C": "Xarita aniqligi doim oshadi",
            "D": "Rastr vektor bo‘ladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Aholi migratsiyasi animatsion xaritasida yillar oralig‘i notekis bo‘lsa, qanday metodik ehtiyot chorasi kerak?",
            "A": "Masshtab olib tashlanadi",
            "B": "Sarlavha yozilmaydi",
            "C": "Faqat rang almashtiriladi",
            "D": "Vaqt intervali va klassifikatsiya izohlanishi kerak",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Animatsion xaritada obyektlar harakati real yo‘l tarmog‘i bo‘yicha emas, to‘g‘ri chiziqlar bilan berilsa, qanday xato bo‘lishi mumkin?",
            "A": "Ma’lumot aniqligi ortadi",
            "B": "Harakatning haqiqiy marshrut mantiqi buziladi",
            "C": "Xarita mukammallashadi",
            "D": "Tarmoq tahlili avtomatik bajariladi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Vaqtli xaritalarda bir xil rang shkalasi saqlanmasa, qanday talqin xatosi yuz beradi?",
            "A": "Turli davrlarni taqqoslash noto‘g‘ri bo‘lishi mumkin",
            "B": "Fayl kichrayadi",
            "C": "Koordinata tizimi tuzaladi",
            "D": "Hamma davr aniqroq bo‘ladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Animatsion xarita oddiy statik xaritadan nimasi bilan ustun?",
            "A": "Hodisaning vaqt bo‘yicha o‘zgarish dinamikasini ko‘rsatadi",
            "B": "Masshtabni keraksiz qiladi",
            "C": "Koordinatani o‘chiradi",
            "D": "Atribut jadvalni bekor qiladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Transport oqimi animatsiyasida tezlik va yo‘nalish atributlari bo‘lmasa, qanday cheklov paydo bo‘ladi?",
            "A": "Fayl avtomatik tozalanadi",
            "B": "Xarita doim aniq bo‘ladi",
            "C": "Tarmoq tuzaladi",
            "D": "Harakat jarayonini to‘liq tahlil qilish qiyinlashadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Animatsion xarita yakunida vaqt legendasi bo‘lmasa, foydalanuvchi nimani aniqlay olmaydi?",
            "A": "Hodisa qaysi davrga tegishli ekanini",
            "B": "Fayl hajmini",
            "C": "Shrift nomini",
            "D": "Ranglar sonini",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Tabiiy ofat tarqalishini animatsion xaritada ko‘rsatishda qaysi omillar zarur?",
            "A": "Faqat nom",
            "B": "Faqat muallif",
            "C": "Vaqt belgisi, joylashuv, tarqalish chegarasi va intensivlik atributi",
            "D": "Faqat rasm",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Raqamlashtirish va vektorizatsiya jarayonining asosiy farqi qaysi javobda aniq berilgan?",
            "A": "Raqamlashtirish faqat rang berish",
            "B": "Farqi yo‘q",
            "C": "Vektorizatsiya faqat matn yozish",
            "D": "Raqamlashtirish obyektlarni qo‘lda yoki yarim avtomatik kiritish, vektorizatsiya esa rastrdagi shakllarni vektor obyektlarga aylantirish jarayonidir",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Topologiya GATda nima uchun zarur?",
            "A": "Faqat rang tanlash uchun",
            "B": "Obyektlar orasidagi fazoviy munosabatlar va geometrik yaxlitlikni nazorat qilish uchun",
            "C": "Faqat xaritani chop etish uchun",
            "D": "Faqat shriftni o‘zgartirish uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Poligon qatlamida “gap” va “overlap” xatolari nimani bildiradi?",
            "A": "Atribut to‘g‘ri ekanini",
            "B": "Rastr sifatini",
            "C": "Chegaralar orasida bo‘shliq va ustma-ust tushish mavjudligini",
            "D": "Fayl nomini",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Vektorizatsiya qilingan daryo chizig‘i oqim yo‘nalishiga teskari kiritilsa, qaysi tahlilda muammo tug‘iladi?",
            "A": "Faqat sarlavhada",
            "B": "Faqat sahifa raqamida",
            "C": "Faqat ranglashda",
            "D": "Gidrologik yoki tarmoq yo‘nalishi tahlilida",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Raqamlashtirishda minimal xaritalash birligi hisobga olinmasa, qanday muammo bo‘ladi?",
            "A": "Juda mayda obyektlar ortiqcha kiritilib, xarita ortiqcha murakkablashadi",
            "B": "Atributlar avtomatik to‘ladi",
            "C": "CRS yo‘qoladi",
            "D": "Aniqlik doim oshadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Skanerlangan xaritani raqamlashtirishdan oldin georeferensiyalash nima uchun kerak?",
            "A": "Rastr tasvirni real koordinata tizimiga bog‘lash uchun",
            "B": "Jadval ochish uchun",
            "C": "Rangni almashtirish uchun",
            "D": "Fayl nomini qisqartirish uchun",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Raqamlashtirishda obyekt sinflari oldindan belgilanmasa, qanday xatolik yuzaga keladi?",
            "A": "Rastr aniqlashadi",
            "B": "Xarita avtomatik umumlashadi",
            "C": "Ma’lumotlar semantik jihatdan tartibsiz va tahlilga yaroqsiz bo‘lishi mumkin",
            "D": "Legendaga ehtiyoj qolmaydi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Topologik qoidalar “must not overlap” va “must not have gaps” qaysi obyektlar uchun ayniqsa muhim?",
            "A": "Faqat rastr pikseli uchun",
            "B": "Ma’muriy chegaralar va yer uchastkalari poligonlari uchun",
            "C": "Faqat sarlavha uchun",
            "D": "Faqat nuqta nomlari uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Vektorizatsiya natijasini sifat nazoratidan o‘tkazishda nimalar tekshiriladi?",
            "A": "Faqat shrift",
            "B": "Faqat fayl nomi",
            "C": "Geometriya to‘liqligi, topologiya, atribut mosligi va koordinata aniqligi",
            "D": "Faqat rang",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Avtomatik vektorizatsiya natijasida keraksiz chiziqlar ham hosil bo‘lsa, nima qilish kerak?",
            "A": "Tahrirlash, tozalash va topologik tekshiruvdan o‘tkazish",
            "B": "Hammasini qabul qilish",
            "C": "Darhol yakuniy xarita qilish",
            "D": "CRSni o‘chirish",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Mobil GAT ilovasida dala ma’lumotlari yig‘ishda GPS aniqligi past bo‘lsa, qanday xatolik yuzaga keladi?",
            "A": "Rastr yo‘qoladi",
            "B": "Xarita masshtabsiz bo‘ladi",
            "C": "Atributlar avtomatik to‘g‘rilanadi",
            "D": "Obyekt joylashuvi real holatdan siljib ketadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Mobil GATda offline rejimda yig‘ilgan ma’lumotlar sinxronlanganda qaysi muammolar tekshiriladi?",
            "A": "Faqat rang",
            "B": "Faqat telefon modeli",
            "C": "Dublikatlar, koordinata siljishi, atribut yetishmasligi va vaqt belgisi",
            "D": "Faqat shrift",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Dala sharoitida obyekt fotosurati atributga biriktirilsa, bu qanday afzallik beradi?",
            "A": "Obyektni keyinchalik vizual tekshirish va verifikatsiya qilish imkonini beradi",
            "B": "Koordinatani o‘chiradi",
            "C": "Faylni doim kichraytiradi",
            "D": "Masshtabni bekor qiladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Mobil GATda oldindan tayyorlangan domen/ro‘yxatli atribut maydonlari nima uchun qulay?",
            "A": "Kiritish xatolarini kamaytiradi va ma’lumotni standartlashtiradi",
            "B": "Faqat xarita nomini o‘zgartiradi",
            "C": "Faqat rang beradi",
            "D": "GPSni o‘chiradi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Dala ma’lumotini yig‘ishda vaqt belgisi nima uchun muhim?",
            "A": "Faqat shrift uchun",
            "B": "Ma’lumot qachon olinganini va dolzarbligini aniqlash uchun",
            "C": "Faqat rang uchun",
            "D": "Faqat fayl nomi uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Mobil GATda bir obyekt bir necha marta kiritilsa, bu qanday muammo keltirib chiqaradi?",
            "A": "Rastr silliqlashadi",
            "B": "Aniqlik doim oshadi",
            "C": "Dublikat ma’lumot tahlil natijasini buzadi",
            "D": "Proyeksiya tuzaladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Mobil GAT orqali yig‘ilgan nuqtalar keyin poligon tahliliga qo‘shilsa, qaysi shart muhim?",
            "A": "Legendasi bo‘lmasligi",
            "B": "Fayl nomi qisqa bo‘lishi",
            "C": "Faqat rang bir xil bo‘lishi",
            "D": "Nuqtalar koordinata tizimi va atributlari tahlil qatlamlariga mos bo‘lishi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Dala ma’lumotlarini sifatli yig‘ish uchun eng maqbul nazorat zanjiri qaysi?",
            "A": "Faqat nom yozish",
            "B": "GPS aniqligi → atribut to‘liqligi → foto/verifikatsiya → sinxronlash → topologik/fazoviy tekshiruv",
            "C": "Faqat suratga olish",
            "D": "Faqat xaritani yopish",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Geoma’lumotlar bazasi oddiy fayllar yig‘indisidan nimasi bilan farq qiladi?",
            "A": "Faqat rasm saqlaydi",
            "B": "Faqat matn yozadi",
            "C": "Fazoviy obyektlar, atributlar, indekslar, munosabatlar va so‘rovlar tizimli boshqariladi",
            "D": "Faqat rang tanlaydi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "SQL GAT ma’lumotlar bazasida nima uchun ishlatiladi?",
            "A": "Faqat proyeksiya o‘chirish uchun",
            "B": "Faqat xarita bo‘yash uchun",
            "C": "Ma’lumotlarni so‘rash, filtrlash, guruhlash va tahlil qilish uchun",
            "D": "Faqat masshtab chizish uchun",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Fazoviy indeks nima uchun kerak?",
            "A": "Faylni matnga aylantirish uchun",
            "B": "Ranglarni ko‘paytirish uchun",
            "C": "Sarlavhani kattalashtirish uchun",
            "D": "Fazoviy qidiruv va tahlil tezligini oshirish uchun",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Geoma’lumotlar bazasida birlamchi kalit nima vazifani bajaradi?",
            "A": "Faqat rang beradi",
            "B": "Faqat faylni yopadi",
            "C": "Faqat koordinatani o‘chiradi",
            "D": "Har bir yozuv/obyektni yagona identifikatsiya qiladi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Aholi punkti jadvali bilan tumanlar poligoni bog‘lanishi uchun qaysi shart zarur?",
            "A": "Ranglar bir xil bo‘lishi",
            "B": "Umumiy identifikator yoki kalit maydon bo‘lishi",
            "C": "Sarlavha bir xil bo‘lishi",
            "D": "Fayllar bitta papkada bo‘lishi kifoya",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "SQLda WHERE population > 100000 sharti qanday vazifani bajaradi?",
            "A": "Koordinatani almashtiradi",
            "B": "Xarita rangini o‘zgartiradi",
            "C": "Barcha obyektlarni o‘chiradi",
            "D": "Aholisi 100 000 dan ortiq obyektlarni tanlaydi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Geoma’lumotlar bazasida atributlar noto‘g‘ri tipda saqlansa, masalan son matn sifatida bo‘lsa, qanday muammo chiqadi?",
            "A": "Hisoblash, saralash va statistik tahlil noto‘g‘ri yoki imkonsiz bo‘lishi mumkin",
            "B": "Xarita doim aniq bo‘ladi",
            "C": "CRS mukammallashadi",
            "D": "Rastr kattalashadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Geoma’lumotlar bazasida indekslash bo‘lmasa, katta hajmdagi qatlamlarda qanday cheklov yuz beradi?",
            "A": "Ranglar ko‘payadi",
            "B": "Legenda yo‘qoladi",
            "C": "Ma’lumot aniqligi doim oshadi",
            "D": "So‘rov va fazoviy tahlillar sekinlashadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Fazoviy so‘rovda “ma’lum poligon ichidagi barcha nuqtalarni topish” qaysi tahlilga yaqin?",
            "A": "Point-in-polygon fazoviy so‘rovi",
            "B": "Faqat matnli qidiruv",
            "C": "Faqat fayl nomlash",
            "D": "Faqat rang tanlash",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Ma’lumotlar bazasini loyihalashda normalizatsiya nima uchun kerak?",
            "A": "Faqat rangni kamaytirish uchun",
            "B": "Proyeksiyani o‘chirish uchun",
            "C": "Xarita ramkasini chizish uchun",
            "D": "Takroriylikni kamaytirish, izchillik va ma’lumot yaxlitligini ta’minlash uchun",
            "correct": "D",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy 29 dan Amaliy 35 gacha",
        "questions": [
          {
            "q": "GPS qurilmasida nuqtaviy koordinata olishda “fix quality” past bo‘lsa, qanday xatolik yuzaga keladi?",
            "A": "Nuqtaning joylashuvi real o‘rnidan siljishi mumkin",
            "B": "Poligon yopiladi",
            "C": "Rastr aniqligi ortadi",
            "D": "Atributlar avtomatik to‘g‘rilanadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "GPSda olingan koordinata qiymatlari GATga kiritilganda birinchi tekshiriladigan jihat qaysi?",
            "A": "Shrift turi",
            "B": "Koordinata tizimi va datum mosligi",
            "C": "Rang palitrasi",
            "D": "Fayl nomining uzunligi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Nuqtaviy obyekt uchun GPS koordinatasi bilan birga atribut ma’lumot ham kiritilishi nima uchun muhim?",
            "A": "Faqat xaritani bezash uchun",
            "B": "Masshtabni o‘chirish uchun",
            "C": "Obyektni keyingi tahlilda tavsiflash, tasniflash va qidirish uchun",
            "D": "Rastrni siqish uchun",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "GPS nuqtalarini dala sharoitida ketma-ket yig‘ishda vaqt belgisi yozilmasa, qanday muammo yuzaga keladi?",
            "A": "Fayl avtomatik tozalanadi",
            "B": "Koordinata doim aniq bo‘ladi",
            "C": "Ma’lumotlarning qachon olingani va dinamikasi aniqlanmaydi",
            "D": "Atributlar ko‘payadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "GPS nuqtalari zich joylashgan hududda dublikatlar tekshirilmasa, tahlil natijasiga qanday ta’sir qiladi?",
            "A": "CRS tuzaladi",
            "B": "Aniqlik ortadi",
            "C": "Legenda qisqaradi",
            "D": "Obyektlar soni sun’iy ortib, statistik va fazoviy tahlil buziladi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "GPS bilan nuqta olishda baland binolar, daraxtlar yoki tog‘ yonbag‘irlari qanday muammo keltiradi?",
            "A": "Rastr vektorga aylanadi",
            "B": "Atribut jadvali yo‘qoladi",
            "C": "Fayl nomi o‘zgaradi",
            "D": "Signal qaytishi yoki to‘silib, koordinata aniqligi pasayadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Nuqtaviy GPS ma’lumotlarini keyinchalik poligon hududlar bilan bog‘lash uchun qaysi tahlil qo‘llanadi?",
            "A": "Faqat masshtab chizish",
            "B": "Spatial join yoki point-in-polygon tahlili",
            "C": "Faqat rang almashtirish",
            "D": "Faqat sarlavha qo‘yish",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "GPSdan olingan koordinata daraja-daqiqa-soniya formatida, GAT esa decimal degrees formatida ishlasa, nima qilish kerak?",
            "A": "Formatni mos ko‘rinishga konvertatsiya qilish kerak",
            "B": "Legenda qo‘shish kifoya",
            "C": "Rastrga aylantirish kerak",
            "D": "Ma’lumotni o‘chirib tashlash kerak",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "MBBTning GATdagi asosiy vazifasi qaysi javobda to‘g‘ri berilgan?",
            "A": "Faqat proyeksiya tanlash",
            "B": "Faqat rasm ochish",
            "C": "Faqat xarita rangini belgilash",
            "D": "Fazoviy va atribut ma’lumotlarni tizimli saqlash, boshqarish, so‘rash va yangilash",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Ma’lumotlar bazasida birlamchi kalit noto‘g‘ri tanlansa, qanday muammo yuzaga keladi?",
            "A": "Fayl hajmi kamayadi",
            "B": "Xarita rangi o‘zgaradi",
            "C": "Proyeksiya avtomatik tuzaladi",
            "D": "Obyektlarni yagona identifikatsiya qilish va jadvallarni bog‘lash qiyinlashadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Relatsion ma’lumotlar bazasida “bir-ko‘p” munosabatga qaysi holat misol bo‘ladi?",
            "A": "Har bir qatlam faqat rasm bo‘lishi",
            "B": "Bitta tuman tarkibida bir nechta aholi punkti mavjud bo‘lishi",
            "C": "Har bir xarita faqat sarlavhadan iborat bo‘lishi",
            "D": "Har bir obyekt faqat rangga ega bo‘lishi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "MBBTda ma’lumot yaxlitligi buzilsa, GAT tahliliga qanday ta’sir qiladi?",
            "A": "So‘rovlar va fazoviy tahlil noto‘g‘ri natija beradi",
            "B": "Rastr sifatliroq bo‘ladi",
            "C": "Legendaga ehtiyoj qolmaydi",
            "D": "Xarita avtomatik aniqroq bo‘ladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Sonli maydon matn turi sifatida saqlansa, qaysi operatsiyada muammo chiqadi?",
            "A": "Sarlavha yozishda",
            "B": "Statistik hisoblash va tartiblashda",
            "C": "Rang tanlashda",
            "D": "Fayl nomlashda",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Ma’lumotlar bazasini normallashtirishning asosiy maqsadi nima?",
            "A": "Xarita fonini o‘zgartirish",
            "B": "Takrorlanishni kamaytirish va izchillikni ta’minlash",
            "C": "Rangni kuchaytirish",
            "D": "Proyeksiyani bekor qilish",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "GATda atribut jadvali bilan fazoviy obyekt o‘rtasidagi bog‘lanish uzilsa, nima bo‘ladi?",
            "A": "Rastr pikseli kattalashadi",
            "B": "CRS avtomatik almashtiriladi",
            "C": "Xarita doim aniq qoladi",
            "D": "Obyektni so‘rash, tasniflash va tahlil qilish imkoniyati pasayadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "MBBTda foydalanuvchi rollari va ruxsatlar nima uchun kerak?",
            "A": "Ma’lumot xavfsizligi va tahrirlash nazoratini ta’minlash uchun",
            "B": "Faqat rangni tanlash uchun",
            "C": "Faqat sarlavha yozish uchun",
            "D": "Faqat masshtab qo‘yish uchun",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "GPS orqali olingan nuqtalar GATga import qilinganda ular okean yoki boshqa noto‘g‘ri joyda ko‘rinsa, eng ehtimoliy sabab nima?",
            "A": "Koordinata formati yoki CRS noto‘g‘ri tanlangan",
            "B": "Shrift kichik",
            "C": "Rang noto‘g‘ri tanlangan",
            "D": "Legendada xato bor",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "CSV formatdagi GPS ma’lumotni import qilishda qaysi maydonlar majburiy hisoblanadi?",
            "A": "X/Y yoki latitude/longitude koordinatalari va obyekt identifikatori",
            "B": "Faqat muallif",
            "C": "Faqat sahifa raqami",
            "D": "Faqat rang nomi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "GPS nuqtalarini import qilgandan keyin atribut jadvali tekshirilmasa, qanday xato yashirin qolishi mumkin?",
            "A": "Proyeksiya mukammallashishi",
            "B": "Xarita o‘z-o‘zidan o‘chishi",
            "C": "Ranglar ko‘payishi",
            "D": "Nuqta nomi, turi, sanasi yoki o‘lchov aniqligi noto‘g‘ri bo‘lishi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "GPS nuqtalarini GATda tahlil qilishda “buffer” amali nimaga xizmat qiladi?",
            "A": "Nuqta atrofida ma’lum radiusli ta’sir yoki xizmat zonasini yaratishga",
            "B": "Nuqtani o‘chirishga",
            "C": "Rastrni chop etishga",
            "D": "Jadvalni yashirishga",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Import qilingan GPS nuqtalari yo‘l qatlamidan 30–50 m chetda chiqsa, qaysi tekshiruv mantiqiy?",
            "A": "Faqat legendani kattalashtirish",
            "B": "Faqat rangni almashtirish",
            "C": "GPS aniqligi, datum, CRS va ma’lumot yig‘ilgan sharoitni tekshirish",
            "D": "Faqat nomini o‘zgartirish",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "GPSdan olingan nuqtalarni klaster tahliliga berishda qanday ma’lumot muhim?",
            "A": "Faqat xarita ramkasi",
            "B": "Faqat fon rangi",
            "C": "Nuqtalar koordinatasi, obyekt turi va yig‘ilgan vaqt/atributlari",
            "D": "Faqat shrift",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "GPS importidan keyin “duplicate points” tekshiruvi nima uchun zarur?",
            "A": "Proyeksiyani o‘chirish uchun",
            "B": "Bir obyekt bir necha marta hisoblanib ketmasligi uchun",
            "C": "Rastr sifatini oshirish uchun",
            "D": "Masshtabni yo‘qotish uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "GPS ma’lumotlarini GATga import qilish va tahlil qilishning to‘g‘ri ketma-ketligi qaysi?",
            "A": "Import → darhol chop etish",
            "B": "Faqat faylni ochish",
            "C": "Format tekshirish → CRS belgilash → import → atribut nazorati → fazoviy tahlil",
            "D": "Rang → sarlavha → eksport",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Geovizuallashtirishning asosiy vazifasi nimadan iborat?",
            "A": "Faqat rang berish",
            "B": "Fazoviy ma’lumotni tushunarli, tahliliy va qaror qabul qilishga yaroqli kartografik ko‘rinishga keltirish",
            "C": "Faqat fayl saqlash",
            "D": "Faqat matn yozish",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Miqdoriy ma’lumotlarni geovizuallashtirishda noto‘g‘ri rang shkalasi tanlansa, qanday xato yuz beradi?",
            "A": "Ma’lumot aniqligi ortadi",
            "B": "CRS tuzaladi",
            "C": "Rastr tozalanadi",
            "D": "Hududiy tafovutlar noto‘g‘ri talqin qilinadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Aholi zichligi xaritasida teng interval va kvantil klassifikatsiyasi turli tasvir bersa, bu nimani ko‘rsatadi?",
            "A": "Legendani olib tashlash kerak",
            "B": "Klassifikatsiya usuli xulosa mazmuniga ta’sir qiladi",
            "C": "Ma’lumot butunlay yaroqsiz",
            "D": "Xarita kerak emas",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Geovizuallashtirishda “visual hierarchy” nima uchun kerak?",
            "A": "Xarita fonini o‘chirish uchun",
            "B": "Muhim obyekt va hodisalarni foydalanuvchi tez ajratishi uchun",
            "C": "Koordinatani almashtirish uchun",
            "D": "Faylni siqish uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Interaktiv geovizuallashtirish oddiy bosma xaritadan nimasi bilan farq qiladi?",
            "A": "Koordinatasizligi bilan",
            "B": "Masshtabsizligi bilan",
            "C": "Faqat rangsizligi bilan",
            "D": "Zoom, qatlam boshqaruvi, so‘rov va filtr imkoniyatlari mavjudligi bilan",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Geovizuallashtirishda ma’lumot manbasi va yili ko‘rsatilmasa, qanday ilmiy kamchilik yuzaga keladi?",
            "A": "Xarita aniqligi ortadi",
            "B": "Ranglar yaxshilanadi",
            "C": "Natijaning ishonchliligi va dolzarbligini baholash qiyinlashadi",
            "D": "Jadval avtomatik to‘ladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Kartogrammada absolyut sonlar emas, nisbiy ko‘rsatkichlardan foydalanish qachon muhim?",
            "A": "Hududlar maydoni yoki aholisi keskin farq qilganda",
            "B": "Fayl nomi uzun bo‘lganda",
            "C": "Rastr sifatsiz bo‘lganda",
            "D": "Har doim sarlavha bo‘lmaganda",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Geovizuallashtirishda haddan tashqari ko‘p sinf va rang ishlatilsa, qanday muammo yuzaga keladi?",
            "A": "Proyeksiya yaxshilanadi",
            "B": "Aniqlik doim ortadi",
            "C": "Xarita o‘qilishi qiyinlashadi va tahliliy xulosa susayadi",
            "D": "Ma’lumotlar avtomatik tozalanadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Skanerlangan xaritani georeferensiyalashda nazorat nuqtalari qayerdan tanlanishi maqsadga muvofiq?",
            "A": "Xaritaning aniq taniladigan, barqaror va hudud bo‘ylab teng tarqalgan joylaridan",
            "B": "Faqat rangli joylardan",
            "C": "Faqat bitta burchakdan",
            "D": "Faqat matn ustidan",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Georeferensiyalashda nazorat nuqtalari faqat xaritaning bir chetida joylashsa, qanday muammo paydo bo‘ladi?",
            "A": "Rastr avtomatik tozalanadi",
            "B": "Legendaga ehtiyoj qolmaydi",
            "C": "Aniqlik doim oshadi",
            "D": "Transformatsiya xatosi boshqa qismlarda ortishi mumkin",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "RMS xato yuqori chiqsa, qanday qaror to‘g‘ri bo‘ladi?",
            "A": "Rastr rangini o‘zgartirish",
            "B": "Sarlavhani kattalashtirish",
            "C": "Nazorat nuqtalarini tekshirish, noto‘g‘ri nuqtalarni olib tashlash yoki qayta tanlash",
            "D": "Natijani shunday qoldirish",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Eski skanerlangan xarita zamonaviy qatlam bilan mos tushmasa, qaysi sabablar bo‘lishi mumkin?",
            "A": "Faqat fayl nomi",
            "B": "Faqat rang xatosi",
            "C": "Proyeksiya, datum, skan deformatsiyasi yoki eski xarita aniqligi farqi",
            "D": "Faqat shrift xatosi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Georeferensiyalashda birinchi darajali affine transformatsiya qachon yetarli bo‘lishi mumkin?",
            "A": "Nazorat nuqtalari bo‘lmasa",
            "B": "CRS noma’lum bo‘lsa",
            "C": "Xarita kuchli deformatsiyalangan bo‘lsa",
            "D": "Rastrda cho‘zilish va burilish nisbatan oddiy bo‘lsa",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Georeferensiyalangan skaner xaritani raqamlashtirishdan oldin nima tekshiriladi?",
            "A": "Joylashuv mosligi, RMS xato, CRS va vizual moslik",
            "B": "Faqat sarlavha",
            "C": "Faqat rang",
            "D": "Faqat shrift",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Nazorat nuqtasi sifatida daryo o‘zanining o‘zgaruvchan joyini tanlash nega xavfli?",
            "A": "Vaqt o‘tishi bilan obyekt joylashuvi o‘zgargan bo‘lishi mumkin",
            "B": "U doim aniq bo‘ladi",
            "C": "Rastr tozalanadi",
            "D": "Fayl siqiladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Georeferensiyalash natijasida raster to‘g‘ri joylashsa, keyingi amaliy bosqich qaysi bo‘lishi mumkin?",
            "A": "Faylni o‘chirish",
            "B": "Legendani yashirish",
            "C": "CRSni olib tashlash",
            "D": "Raqamlashtirish, vektorizatsiya yoki qatlamlar bilan solishtirish",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Fazoviy modellashtirish GATda qanday vazifani bajaradi?",
            "A": "Faqat fayl nomlash",
            "B": "Faqat xarita bezash",
            "C": "Hududiy jarayon va hodisalarni matematik-fazoviy model asosida tahlil qilish va prognozlash",
            "D": "Faqat matn yozish",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Yer yuzasi tahlilida qiyalik modeli qaysi boshlang‘ich ma’lumotdan olinadi?",
            "A": "Faqat rasm sarlavhasi",
            "B": "DEM yoki balandlik modeli",
            "C": "Faqat yo‘l nomi",
            "D": "Faqat aholi jadvali",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Buffer modeli qaysi holatda samarali qo‘llanadi?",
            "A": "Obyekt atrofidagi ta’sir zonasini aniqlashda",
            "B": "Faqat matn tahrirlashda",
            "C": "Faqat rang tanlashda",
            "D": "Faqat proyeksiya almashtirishda",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Fazoviy modellashtirishda kiruvchi qatlamlarning aniqligi past bo‘lsa, natija qanday bo‘ladi?",
            "A": "Natija avtomatik yaxshilanadi",
            "B": "Xato yo‘qoladi",
            "C": "Model natijasi ham ishonchlilik jihatdan cheklanadi",
            "D": "CRS tuzaladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Ko‘p mezonli fazoviy model tuzishda og‘irlik koeffitsiyentlari noto‘g‘ri berilsa, qanday muammo bo‘ladi?",
            "A": "Ma’lumotlar ko‘payadi",
            "B": "Ranglar doim to‘g‘ri chiqadi",
            "C": "Topologiya mukammallashadi",
            "D": "Yakuniy moslik yoki xavf xaritasi noto‘g‘ri xulosa beradi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Eroziya xavfi modelida qaysi qatlamlar mantiqan zarur?",
            "A": "Faqat bino nomi",
            "B": "Faqat yo‘l rangi",
            "C": "Qiyalik, tuproq turi, yog‘in, o‘simlik qoplami va yer foydalanish",
            "D": "Faqat sahifa raqami",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Fazoviy modelni verifikatsiya qilish nima uchun kerak?",
            "A": "Sarlavhani o‘zgartirish uchun",
            "B": "Model natijasini real kuzatuv yoki mustaqil ma’lumot bilan solishtirish uchun",
            "C": "Faylni kichraytirish uchun",
            "D": "Faqat rang berish uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Fazoviy modellashtirishda “sensitivity analysis” nima uchun qo‘llanadi?",
            "A": "Parametrlar o‘zgarishi yakuniy natijaga qanday ta’sir qilishini baholash uchun",
            "B": "Faqat atributni o‘chirish uchun",
            "C": "Faqat rasm chizish uchun",
            "D": "Faqat masshtab qo‘yish uchun",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "ArcGISda raqamlashtirishni boshlashdan oldin qaysi tayyorgarlik bajarilishi kerak?",
            "A": "Faqat rang tanlanadi",
            "B": "Rastr/georeferens asos, qatlam geometriyasi, CRS va atribut sxemasi tayyorlanadi",
            "C": "Faqat sarlavha yoziladi",
            "D": "Faqat fayl yopiladi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Yo‘l qatlamini poligon sifatida emas, chiziq sifatida raqamlashtirish qachon maqsadga muvofiq?",
            "A": "Binoning maydonini hisoblash uchun",
            "B": "Transport tarmog‘i, uzunlik va marshrut tahlili uchun",
            "C": "Yer uchastkasini ajratish uchun",
            "D": "Hudud chegarasini bo‘yash uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Raqamlashtirishda “snap to vertex” nima uchun kerak?",
            "A": "Nuqtalar va chiziqlar tutashishini aniq ta’minlash uchun",
            "B": "Rang tanlash uchun",
            "C": "Rastrni o‘chirish uchun",
            "D": "Masshtabni yo‘qotish uchun",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Poligon raqamlashtirishda oxirgi nuqta birinchi nuqtaga yopilmasa, qanday xato yuz beradi?",
            "A": "Atributlar ko‘payadi",
            "B": "CRS yaxshilanadi",
            "C": "Poligon yopilmaydi va maydon hisoblashda muammo bo‘ladi",
            "D": "Rastr aniqlashadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Vektorizatsiyadan keyin atributlar kiritilmasa, qanday cheklov paydo bo‘ladi?",
            "A": "Fazoviy obyektlar semantik tahlil va so‘rovga yaroqsiz bo‘lib qoladi",
            "B": "Xarita avtomatik tuzaladi",
            "C": "Masshtab ortadi",
            "D": "Geometriya yo‘qoladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Raqamlashtirish natijasida chiziqlar ortiqcha segmentlarga bo‘linib ketsa, qanday muammo yuzaga keladi?",
            "A": "Fayl doim kichrayadi",
            "B": "Tarmoq tahlili va uzunlik hisoblarida ortiqcha/yolg‘on obyektlar paydo bo‘ladi",
            "C": "Legendaga ehtiyoj qolmaydi",
            "D": "Aniqlik doim ortadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Raqamlashtirilgan qatlam sifatini baholashda qaysi mezonlar tekshiriladi?",
            "A": "Geometriya, topologiya, atribut to‘liqligi, CRS va manba bilan moslik",
            "B": "Faqat rang",
            "C": "Faqat shrift",
            "D": "Faqat sarlavha",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Raqamlashtirishda minimal masshtab talabiga rioya qilinmasa, nima bo‘ladi?",
            "A": "CRS o‘zgaradi",
            "B": "Rastr avtomatik tozalanadi",
            "C": "Xarita doim aniq bo‘ladi",
            "D": "Mayda obyektlar haddan tashqari ko‘payib yoki muhim obyektlar yo‘qolib ketadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Atributiv jadvalda maydon turi noto‘g‘ri tanlansa, masalan sana matn sifatida kiritilsa, qanday muammo paydo bo‘ladi?",
            "A": "Rastr yaxshilanadi",
            "B": "CRS tuzaladi",
            "C": "Vaqt bo‘yicha filtrlash va tahlil qiyinlashadi",
            "D": "Xarita chiroyli bo‘ladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Atribut jadvalida “NULL” qiymatlar ko‘p bo‘lsa, qanday xulosa qilish mumkin?",
            "A": "Ma’lumot mukammal",
            "B": "Fayl kichik",
            "C": "Xarita avtomatik to‘g‘ri",
            "D": "Ma’lumot to‘liqligi past va tahlil natijasi cheklangan",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Domen yoki kodlangan qiymatlar atribut kiritishda nima uchun kerak?",
            "A": "Faylni siqish uchun",
            "B": "Ranglarni ko‘paytirish uchun",
            "C": "CRSni o‘chirish uchun",
            "D": "Bir xil standart qiymatlarni kiritish va xatolarni kamaytirish uchun",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "“Calculate Geometry” amali qaysi vazifani bajaradi?",
            "A": "Faqat sarlavha yozadi",
            "B": "Faqat qatlamni yashiradi",
            "C": "Obyekt maydoni, uzunligi yoki koordinata qiymatlarini hisoblaydi",
            "D": "Faqat rang tanlaydi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Atribut jadvalidagi “Join” amali qachon qo‘llanadi?",
            "A": "Rastrni kesishda",
            "B": "Rangni almashtirishda",
            "C": "Proyeksiyani o‘chirishda",
            "D": "Umumiy kalit maydon orqali boshqa jadval ma’lumotini qatlamga bog‘lashda",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Atribut ma’lumotlar yangilanganda metadata yangilanmasa, qanday kamchilik yuzaga keladi?",
            "A": "Fayl doim kichrayadi",
            "B": "Legendaga ehtiyoj qolmaydi",
            "C": "Ma’lumotning sanasi, manbasi va ishonchliligini baholash qiyinlashadi",
            "D": "Aniqlik avtomatik oshadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Atribut jadvalidagi obyekt nomlari turlicha yozilsa, masalan “Toshkent”, “Tashkent”, “Toshkent sh.”, qanday muammo chiqadi?",
            "A": "Ranglar yaxshilanadi",
            "B": "Guruhlash, qidirish va statistik tahlilda nomuvofiqlik paydo bo‘ladi",
            "C": "Rastr tiniqlashadi",
            "D": "Proyeksiya tuzaladi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Maydonlar bilan ishlashda keraksiz ustunlarni saqlab qolish qanday oqibatga olib keladi?",
            "A": "Aniqlik ortadi",
            "B": "Topologiya tuzaladi",
            "C": "Jadval ortiqcha murakkablashadi va tahlil samaradorligi pasayadi",
            "D": "CRS yaxshilanadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Fazoviy so‘rov atributiv so‘rovdan nimasi bilan farq qiladi?",
            "A": "Ikkalasi bir xil",
            "B": "Fazoviy so‘rov faqat matnda bo‘ladi",
            "C": "Fazoviy so‘rov obyektlarning joylashuv munosabatlariga, atributiv so‘rov esa jadvaldagi qiymatlarga asoslanadi",
            "D": "Atributiv so‘rov faqat rastrda bo‘ladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "“Aholisi 100 000 dan ortiq va daryodan 2 km masofada joylashgan aholi punktlari”ni topish qanday so‘rov turidir?",
            "A": "Faqat rang tanlash",
            "B": "Faqat sarlavha so‘rovi",
            "C": "Faqat proyeksiya",
            "D": "Kombinatsiyalangan atributiv va fazoviy so‘rov",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "“Select by Location” amali qachon ishlatiladi?",
            "A": "Faylni yopishda",
            "B": "Faqat nomga ko‘ra tanlashda",
            "C": "Obyektlarni boshqa qatlamga nisbatan joylashuviga ko‘ra tanlashda",
            "D": "Rangni o‘zgartirishda",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "SQLda AND operatori qanday mantiqni bildiradi?",
            "A": "Shart inkor qilinadi",
            "B": "Shartlardan biri bajarilsa yetarli",
            "C": "Jadval o‘chiriladi",
            "D": "Barcha shartlar bir vaqtda bajarilishi kerak",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "SQLda OR operatori qachon qo‘llanadi?",
            "A": "Barcha obyektlarni o‘chirish uchun",
            "B": "Barcha shartlarni majburiy qilish uchun",
            "C": "Proyeksiyani almashtirish uchun",
            "D": "Shartlardan kamida biri bajarilsa tanlash uchun",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Fazoviy so‘rov natijasini tekshirmasdan xulosa chiqarish qanday xavf tug‘diradi?",
            "A": "Aniqlik ortadi",
            "B": "Legendaga ehtiyoj qolmaydi",
            "C": "Fayl kichrayadi",
            "D": "Noto‘g‘ri tanlangan obyektlar asosida ilmiy xulosa xato bo‘lishi mumkin",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "“Within”, “intersect”, “contains” fazoviy munosabatlari nimani bildiradi?",
            "A": "Obyektlarning fazoda bir-biriga nisbatan joylashuv munosabatlarini",
            "B": "Faqat sarlavha uzunligini",
            "C": "Faqat ranglar nisbatini",
            "D": "Faqat fayl formatini",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Atributiv so‘rovda maydon turi noto‘g‘ri bo‘lsa, masalan son matn bo‘lsa, qanday muammo chiqadi?",
            "A": "Proyeksiya yaxshilanadi",
            "B": "Rastr tozalanadi",
            "C": "So‘rov mukammal bo‘ladi",
            "D": "Sonli solishtirish va tartiblash noto‘g‘ri ishlashi mumkin",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Topologik xatolarni aniqlash nima uchun zarur?",
            "A": "Faqat faylni siqish uchun",
            "B": "Faqat xarita rangini tanlash uchun",
            "C": "Faqat sarlavha yozish uchun",
            "D": "Fazoviy obyektlarning geometrik yaxlitligi va tahlil ishonchliligini ta’minlash uchun",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Poligonlar orasida bo‘shliq qolishi qaysi topologik xato hisoblanadi?",
            "A": "Overlap",
            "B": "Gap",
            "C": "Duplicate",
            "D": "Null",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Poligonlar bir-birining ustiga chiqib ketishi qanday xato?",
            "A": "Label",
            "B": "Snap",
            "C": "Gap",
            "D": "Overlap",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Yo‘l tarmog‘ida chiziqlar tutashmagan bo‘lsa, qaysi tahlil eng ko‘p zarar ko‘radi?",
            "A": "Faqat rang tanlash",
            "B": "Marshrut va tarmoq tahlili",
            "C": "Faqat sarlavha yozish",
            "D": "Faqat kartogramma",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Topologik qoidalarni belgilashda obyekt turi hisobga olinmasa, qanday muammo bo‘ladi?",
            "A": "Noto‘g‘ri qoidalar haqiqiy obyektlarni ham xato deb ko‘rsatishi mumkin",
            "B": "Aniqlik avtomatik oshadi",
            "C": "Rastr sifati yaxshilanadi",
            "D": "CRS mukammallashadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "“Must not overlap” qoidasi qaysi qatlam uchun ayniqsa muhim?",
            "A": "Faqat rasm fonlari",
            "B": "Faqat nuqta nomlari",
            "C": "Faqat matn jadvallari",
            "D": "Yer uchastkalari yoki ma’muriy poligonlar",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Topologik xatoni tuzatgandan keyin nima qilish zarur?",
            "A": "CRSni olib tashlash",
            "B": "Faqat rang berish",
            "C": "Qatlamni qayta validatsiya qilish va natijani tekshirish",
            "D": "Darhol hammasini o‘chirish",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Dublikat geometriyalar tahlilda qanday muammo keltiradi?",
            "A": "Obyekt soni, uzunlik yoki maydon hisoblari sun’iy ortib ketadi",
            "B": "Aniqlik ortadi",
            "C": "Rastr tozalanadi",
            "D": "Legendaga ehtiyoj qolmaydi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Topologik nazorat qilinmagan qatlamdan overlay tahlilda foydalanilsa, qanday xavf paydo bo‘ladi?",
            "A": "Kesishma va maydon hisoblari noto‘g‘ri chiqishi mumkin",
            "B": "Xarita doim yaxshilanadi",
            "C": "Fayl kichrayadi",
            "D": "Ranglar mukammallashadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Topologiya tuzatish jarayonida snapping tolerance haddan tashqari katta berilsa, qanday xato yuz beradi?",
            "A": "Alohida obyektlar noto‘g‘ri birlashib ketishi mumkin",
            "B": "Xatolar doim yo‘qoladi",
            "C": "Aniqlik mutlaq bo‘ladi",
            "D": "Rastr sifatli bo‘ladi",
            "correct": "A",
            "ball": 3
          },
        ]
      },
      {
        "title": "§28-mavzu. Geofazoviy tahlil tushunchasi va usullari (overlay, tarmoq, yer yuzasi tahlili)",
        "questions": [
          {
            "q": "Geofazoviy tahlilning oddiy xarita ko‘rishdan asosiy farqi nimada?",
            "A": "Fazoviy qatlamlar o‘rtasidagi munosabatlar asosida yangi ilmiy xulosa olinadi",
            "B": "Faqat chop etiladi",
            "C": "Faqat matn yoziladi",
            "D": "Faqat rang almashadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Overlay tahlili qaysi vazifani bajaradi?",
            "A": "Bir nechta qatlamni fazoviy kesishma asosida birlashtirib yangi natija hosil qiladi",
            "B": "Faqat rang tanlaydi",
            "C": "Faqat atributlarni o‘chiradi",
            "D": "Faqat xarita nomini o‘zgartiradi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Yer yuzasi tahlilida qiyalik, ekspozitsiya va balandlik qaysi boshlang‘ich ma’lumotdan olinadi?",
            "A": "DEM/DTM dan",
            "B": "Faqat yo‘l qatlamidan",
            "C": "Faqat GPS nuqtasidan",
            "D": "Faqat aholi jadvalidan",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Tarmoq tahlili qaysi sohada ayniqsa samarali?",
            "A": "Eng qisqa yo‘l, xizmat hududi va logistika masalalarida",
            "B": "Faqat legenda tuzishda",
            "C": "Faqat relyef bo‘yashda",
            "D": "Faqat skanerlashda",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Geofazoviy tahlilda qatlamlarning CRS mos bo‘lmasa, qanday oqibat yuz beradi?",
            "A": "Sarlavha yo‘qoladi",
            "B": "Fayl kichrayadi",
            "C": "Ranglar kuchayadi",
            "D": "Tahlil natijasi fazoviy jihatdan noto‘g‘ri chiqishi mumkin",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Ko‘p mezonli geofazoviy tahlilda og‘irlik koeffitsiyentlari noto‘g‘ri berilsa, nima bo‘ladi?",
            "A": "Yakuniy moslik yoki xavf xaritasi xato chiqadi",
            "B": "Rastr tozalanadi",
            "C": "Ma’lumot aniqligi ortadi",
            "D": "Topologiya tuzaladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Buffer tahlili qaysi vazifaga eng mos keladi?",
            "A": "Proyeksiyani o‘chirishga",
            "B": "Rastrni vektorga aylantirishga",
            "C": "Obyekt atrofida ta’sir yoki himoya zonasi yaratishga",
            "D": "Legendani avtomatik tuzishga",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Geofazoviy tahlilda manba qatlamlarning aniqligi past bo‘lsa, eng to‘g‘ri xulosa qaysi?",
            "A": "Natija avtomatik aniq bo‘ladi",
            "B": "Xatolar yo‘qoladi",
            "C": "Vizual ko‘rinish hamma narsani to‘g‘rilaydi",
            "D": "Natija ham cheklangan ishonchlilikka ega bo‘ladi",
            "correct": "D",
            "ball": 3
          },
        ]
      },
      {
        "title": "§29-mavzu. Tadqiqot ma’lumotlarini GATda aks ettirish (klassifikatsiya, hisobot, elektron karta, plotter)",
        "questions": [
          {
            "q": "Tadqiqot ma’lumotlarini GATda aks ettirishda klassifikatsiya noto‘g‘ri tanlansa, qanday xatolik yuz beradi?",
            "A": "Fayl ochilmaydi",
            "B": "CRS avtomatik tuzatiladi",
            "C": "Rastr sifati oshadi",
            "D": "Hududiy tafovut noto‘g‘ri talqin qilinadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Elektron karta bilan bosma karta o‘rtasidagi asosiy metodik farq nimada?",
            "A": "Bosma kartada legenda bo‘lmaydi",
            "B": "Farq yo‘q",
            "C": "Elektron kartada interaktivlik, qatlam boshqaruvi va zoom mavjud",
            "D": "Elektron kartada koordinata bo‘lmaydi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Plotter uchun tayyorlanadigan kartografik mahsulotda nimaga alohida e’tibor beriladi?",
            "A": "Faqat rang nomiga",
            "B": "Chop etish formati, rezolyutsiya va layout elementlarining o‘lchamiga",
            "C": "Faqat muallif ismiga",
            "D": "Faqat fayl hajmiga",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Hisobot xaritasida manba va ma’lumot yili ko‘rsatilmasa, qanday kamchilik yuzaga keladi?",
            "A": "Natijaning ilmiy ishonchliligi pasayadi",
            "B": "Rastr vektorga aylanadi",
            "C": "Masshtab kuchayadi",
            "D": "Topologiya tuzaladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Tadqiqot natijasini elektron xarita ko‘rinishida berishning afzalligi nimada?",
            "A": "Proyeksiya keraksiz bo‘ladi",
            "B": "Faqat chop etish osonlashadi",
            "C": "Faqat fayl kichrayadi",
            "D": "Foydalanuvchi qatlamlarni boshqarishi va ma’lumotni interaktiv tahlil qilishi mumkin",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Tematik xarita tayyorlashda klass soni haddan ortiq ko‘p bo‘lsa, qanday muammo tug‘iladi?",
            "A": "Aniqlik doim ortadi",
            "B": "CRS yaxshilanadi",
            "C": "Xarita o‘qilishi qiyinlashadi",
            "D": "Legendaga ehtiyoj qolmaydi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Hisobot xaritasida sarlavha, legenda va masshtab bo‘lmasa, eng katta muammo nimada?",
            "A": "Xarita mustaqil talqin qilinmaydi",
            "B": "Atribut jadvali to‘lib qoladi",
            "C": "GPS aniqligi tushadi",
            "D": "Relyef o‘zgaradi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Tadqiqot ma’lumotini GATda aks ettirishning to‘g‘ri ketma-ketligi qaysi?",
            "A": "Chop etish → import qilish",
            "B": "Sarlavha → CRS → yopish",
            "C": "Ma’lumot tayyorlash → klassifikatsiya → vizuallashtirish → layout/hisobot → eksport",
            "D": "Faqat rang tanlash",
            "correct": "C",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 36. Overlay operatsiyalari: intersect, union, clip va buffer",
        "questions": [
          {
            "q": "Intersect amali qanday natija beradi?",
            "A": "Faqat rangni o‘zgartiradi",
            "B": "Qatlamlarning umumiy kesishgan qismini yangi qatlam sifatida ajratadi",
            "C": "Faqat qatlamlardan birini qoldiradi",
            "D": "Hamma obyektni o‘chiradi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Union amali qaysi holatda qo‘llanadi?",
            "A": "Rastrni kesishda",
            "B": "Ikkita poligon qatlamining barcha hududlarini birlashtirib, kesishgan va kesishmagan qismlarni saqlashda",
            "C": "Faqat sarlavha birlashtirishda",
            "D": "Faqat nuqtalarni o‘chirishda",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Clip amali nimaga xizmat qiladi?",
            "A": "Qatlam rangini o‘zgartirishga",
            "B": "Faylni siqishga",
            "C": "Qatlamni berilgan maska/poligon chegarasi ichida kesib olishga",
            "D": "CRSni o‘chirishga",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Buffer amali qaysi tahlilda muhim?",
            "A": "Obyekt atrofidagi ma’lum masofali xizmat yoki himoya zonalarini aniqlashda",
            "B": "Faqat rasterlashda",
            "C": "Faqat georeferensiyada",
            "D": "Faqat atributni o‘chirishda",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Overlay operatsiyasidan oldin topologik xatolar tekshirilmasa, qanday muammo bo‘lishi mumkin?",
            "A": "Legendaga ehtiyoj qolmaydi",
            "B": "Maydon va kesishma natijalari noto‘g‘ri chiqadi",
            "C": "Rastr sifati oshadi",
            "D": "Ranglar bir xil bo‘ladi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Buffer masofasi noto‘g‘ri birlikda berilsa, natija qanday buziladi?",
            "A": "Tahlil tezlashadi",
            "B": "Fayl kichrayadi",
            "C": "Ta’sir zonasi real masofaga mos kelmaydi",
            "D": "CRS tuzaladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Intersect va clip farqi qaysi javobda to‘g‘ri?",
            "A": "Intersect atributlarni ikki qatlam bo‘yicha kesishma bilan saqlaydi, clip esa bir qatlamni ikkinchisining chegarasi bilan kesadi",
            "B": "Clip faqat rastrda ishlaydi",
            "C": "Intersect faqat rang bilan bog‘liq",
            "D": "Ikkalasi ham bir xil",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Overlay natijalarini ilmiy hisobotda to‘g‘ri talqin qilish uchun nimalar ko‘rsatilishi kerak?",
            "A": "Faqat ranglar",
            "B": "Faqat muallif",
            "C": "Faqat sarlavha",
            "D": "Manba qatlamlar, CRS, ishlatilgan amal va natijaning mazmuniy izohi",
            "correct": "D",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 37. Geofazoviy tahlilda masofa, maydon va perimetr o‘lchash",
        "questions": [
          {
            "q": "Maydon va masofa hisoblashdan oldin qaysi shart eng muhim?",
            "A": "Qatlam mos proyeksiyada va metrik birliklarda bo‘lishi",
            "B": "Sarlavha yozilgan bo‘lishi",
            "C": "Faqat rang tanlangan bo‘lishi",
            "D": "Atributlar yashirilgan bo‘lishi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Geografik koordinatada saqlangan qatlamda bevosita maydon hisoblash nega xatoli bo‘lishi mumkin?",
            "A": "GPSni o‘chiradi",
            "B": "Rastr yo‘qoladi",
            "C": "Gradus birliklari metrli maydonni to‘g‘ri bermaydi",
            "D": "Legendaga xalaqit qiladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Perimetr va maydon qiymatlari atribut jadvaliga avtomatik hisoblanib yozilsa, bu nima uchun qulay?",
            "A": "Keyingi statistik va fazoviy tahlillar uchun tayyor ko‘rsatkich bo‘ladi",
            "B": "Faqat rang o‘zgaradi",
            "C": "Fayl siqiladi",
            "D": "CRS bekor bo‘ladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Cho‘zilgan va notekis poligonlarda maydon hisoblash xatolari ko‘proq nimaga bog‘liq?",
            "A": "Sarlavha uslubiga",
            "B": "Fayl nomiga",
            "C": "Legendaning joyiga",
            "D": "Geometriya aniqligi va proyeksiya tanloviga",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Yo‘l chizig‘i uzunligini hisoblashda segmentlar uzilgan bo‘lsa, qanday muammo tug‘iladi?",
            "A": "Masshtab o‘zgaradi",
            "B": "Umumiy uzunlik noto‘g‘ri chiqadi",
            "C": "Rastr tiniqlashadi",
            "D": "Ranglar kamayadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Maydonni gektarda, perimetrni metrda ko‘rsatishning afzalligi nimada?",
            "A": "GPS tuzaladi",
            "B": "Legendaga ehtiyoj qolmaydi",
            "C": "CRS o‘chadi",
            "D": "Turli tahliliy ko‘rsatkichlar foydalanuvchi uchun qulay birlikda beriladi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Poligon maydoni kutilganidan ancha katta chiqsa, birinchi tekshiriladigan narsa nima?",
            "A": "Geometriya yopilganligi, proyeksiya va birliklar to‘g‘riligi",
            "B": "Faqat muallif nomi",
            "C": "Faqat rang shkalasi",
            "D": "Faqat sarlavha uzunligi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Masofa, maydon va perimetrni taqqoslash asosida qaysi tahlilni bajarish mumkin?",
            "A": "Faqat plotter sozlash",
            "B": "Hudud shakli, zichligi va obyektlar o‘rtasidagi fazoviy nisbatlarni baholash",
            "C": "Faqat matn yozish",
            "D": "Faqat georeferensiya",
            "correct": "B",
            "ball": 3
          },
        ]
      },
    ]
  },
  "m4": {
    "name": "Masofadan zondlash",
    "sections": [
      {
        "title": "§34-mavzu. Masofadan zondlash haqida umumiy ma’lumotlar",
        "questions": [
          {
            "q": "Masofadan zondlashning mohiyati nimada?",
            "A": "Faqat statistik jadval tuzishda",
            "B": "Obyekt haqida bevosita kontaktsiz elektromagnit nurlanish orqali ma’lumot olishda",
            "C": "Faqat GPS nuqta yozishda",
            "D": "Faqat qo‘lda chizishda",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Passiv sensor bilan aktiv sensor farqi nimada?",
            "A": "Farqi yo‘q",
            "B": "Passiv sensor tabiiy nurlanishni qabul qiladi, aktiv sensor esa o‘zi signal yuboradi",
            "C": "Aktiv sensor faqat matnli",
            "D": "Passiv sensor faqat rangli",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Multispektral tasvirlar oddiy rangli tasvirga nisbatan nimani yaxshiroq beradi?",
            "A": "Faqat sarlavhani ko‘paytiradi",
            "B": "Faqat fayl hajmini kamaytiradi",
            "C": "Faqat CRSni o‘chiradi",
            "D": "Yer qoplami va obyektlarni spektral xususiyatlariga ko‘ra ajratishni",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Fazoviy rezolyutsiya nimani bildiradi?",
            "A": "Piksel yer yuzasida qamrab oladigan minimal o‘lchamni",
            "B": "Faqat ranglar sonini",
            "C": "Faqat vaqt oralig‘ini",
            "D": "Faqat to‘lqin uzunligini",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Vaqt rezolyutsiyasi nima uchun muhim?",
            "A": "Bir hudud qanchalik tez-tez qayta suratga olinayotganini bildiradi",
            "B": "Faqat tasvir rangini",
            "C": "Faqat legendani",
            "D": "Faqat plotter tezligini",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Bulutlilik ko‘rsatkichi yuqori bo‘lgan tasvir qanday cheklov keltiradi?",
            "A": "GPS tuzaladi",
            "B": "Yer yuzasi obyektlari to‘liq ko‘rinmasligi mumkin",
            "C": "DEM yaratiladi",
            "D": "Aniqlik oshadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Masofadan zondlash ma’lumotlari qaysi sohalarda ayniqsa foydali?",
            "A": "Yer qoplami, qishloq xo‘jaligi, ekologiya, xavf monitoringi va shahar tahlilida",
            "B": "Faqat sportda",
            "C": "Faqat adabiyotda",
            "D": "Faqat fon dizaynida",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "MZ ma’lumotini GAT bilan birlashtirishning afzalligi nimada?",
            "A": "Faqat ranglarni almashtiradi",
            "B": "Spektral kuzatuv natijalarini fazoviy tahlil va boshqaruv bilan bog‘lash mumkin",
            "C": "Atributlarni o‘chiradi",
            "D": "Koordinatani keraksiz qiladi",
            "correct": "B",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 40. Tarmoq tahlili asosida eng qisqa yo‘l va optimal marshrutni aniqlash",
        "questions": [
          {
            "q": "Eng qisqa yo‘l tahlili uchun yo‘l qatlamida qaysi atribut ayniqsa muhim?",
            "A": "Faqat rang",
            "B": "Uzunlik, tezlik yoki xarajat maydoni",
            "C": "Faqat plotter formati",
            "D": "Faqat sarlavha",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Yo‘l tarmog‘ida tugunlar to‘g‘ri ulanmagan bo‘lsa, qanday muammo yuz beradi?",
            "A": "Marshrut noto‘g‘ri yoki uzilgan hisoblanadi",
            "B": "CRS tuzaladi",
            "C": "Rastr aniqlashadi",
            "D": "Legendaga ehtiyoj qolmaydi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Eng qisqa yo‘l har doim eng tez marshrut bo‘ladimi?",
            "A": "Faqat tog‘da",
            "B": "Ha, har doim",
            "C": "Faqat GPSda",
            "D": "Yo‘q, chunki tezlik, tirbandlik va yo‘l sifati ham hisobga olinishi mumkin",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "“Service area” tahlili nimaga xizmat qiladi?",
            "A": "Faqat balandlik hisoblashga",
            "B": "Faqat klassifikatsiyaga",
            "C": "Muayyan nuqtadan qamrov yoki yetib borish hududini aniqlashga",
            "D": "Faqat georeferensiyaga",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Optimal marshrut tanlashda “cost” tushunchasi nimani anglatadi?",
            "A": "Faqat perimetrni",
            "B": "Masofa, vaqt, yonilg‘i yoki boshqa xarajat ko‘rsatkichini",
            "C": "Faqat rangni",
            "D": "Faqat sarlavhani",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Tarmoq tahlilida bir tomonlama yo‘llar hisobga olinmasa, qanday xato chiqishi mumkin?",
            "A": "Qatlam yo‘qoladi",
            "B": "Real harakat mantiqiga zid marshrutlar paydo bo‘ladi",
            "C": "Rastr vektorga aylanadi",
            "D": "Ma’lumot ortadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Favqulodda xizmat mashinasining optimal marshrutini topishda qaysi omillar muhim?",
            "A": "Yo‘l tezligi, taqiq yo‘nalishlar, tirbandlik va xizmat zonasi",
            "B": "Faqat rangli ramka",
            "C": "Faqat chart dizayni",
            "D": "Faqat bino nomi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Tarmoq tahlili natijasini tekshirishning eng to‘g‘ri yo‘li qaysi?",
            "A": "Faqat sarlavha o‘qish",
            "B": "Faqat legendani kattalashtirish",
            "C": "Natijani real yo‘l mantiqi va atributlar bilan solishtirish",
            "D": "Faqat ko‘z bilan bir qarash",
            "correct": "C",
            "ball": 3
          },
        ]
      },
      {
        "title": "§35-mavzu. GATda kosmik suratlarni olish usullari (GPS)",
        "questions": [
          {
            "q": "Kosmik suratlarni GATga kiritishda GPS nuqtalari nima uchun foydali?",
            "A": "Faqat sarlavha yozadi",
            "B": "Faqat faylni siqadi",
            "C": "Faqat rang beradi",
            "D": "Georeferensiya va joylashuvni tekshirish uchun tayanch nuqta bo‘lib xizmat qiladi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Kosmik surat va GPS nuqtalari mos tushmasa, birinchi tekshiriladigan sabab nima?",
            "A": "Faqat shrift turi",
            "B": "Faqat rang shkalasi",
            "C": "Datum va koordinata tizimi farqi",
            "D": "Faqat plotter xatosi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Ground control points (GCP) nima uchun kerak?",
            "A": "Faqat nom berish uchun",
            "B": "Tasvirni real koordinata tizimiga aniq bog‘lash uchun",
            "C": "Faqat tasvirni bo‘yash uchun",
            "D": "Faqat jadvalni yopish uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Kosmik suratlarni olish usulini tanlashda qaysi omillar muhim?",
            "A": "Fazoviy, vaqt va spektral rezolyutsiya hamda maqsad",
            "B": "Faqat fayl kengaytmasi",
            "C": "Faqat muallif ismi",
            "D": "Faqat ranglar soni",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "GPS bilan olingan yer tayanch nuqtalari kam bo‘lsa, qanday muammo paydo bo‘ladi?",
            "A": "Tasvirni bog‘lash aniqligi pasayishi mumkin",
            "B": "CRS o‘chadi",
            "C": "Aniqlik doim oshadi",
            "D": "Rastr tozalanadi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kosmik suratlarning stereojufligini qo‘llash nimaga imkon beradi?",
            "A": "Faqat matn saqlashga",
            "B": "Faqat rang ko‘paytirishga",
            "C": "Faqat sarlavha tuzishga",
            "D": "Uch o‘lchovli yoki balandlikka doir ma’lumotlarni baholashga",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "GPS yordamida tekshirilgan kosmik tasvir natijasining afzalligi nimada?",
            "A": "Plotter keraksiz bo‘ladi",
            "B": "Atributlar yo‘qoladi",
            "C": "Legendaga ehtiyoj qolmaydi",
            "D": "Tasvirning fazoviy ishonchliligi oshadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "GATda kosmik suratlarni ishlatishda metadata nima uchun muhim?",
            "A": "Sensor, sana, rezolyutsiya va ishlov xususiyatlarini bilish uchun",
            "B": "Faqat shrift o‘zgartirish uchun",
            "C": "Faqat rang tanlash uchun",
            "D": "Faqat fayl nomlash uchun",
            "correct": "A",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 41. Masofadan zondlash materiallari bilan ishlash va kosmik suratlarni dasturga yuklash",
        "questions": [
          {
            "q": "Kosmik suratni dasturga yuklashdan oldin qaysi ma’lumot tekshiriladi?",
            "A": "Faqat muallif",
            "B": "Fayl formati, CRS, rezolyutsiya va metadata",
            "C": "Faqat rang palitrasi",
            "D": "Faqat fayl nomi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Tasvir GATga yuklangach birinchi amaliy nazorat nima?",
            "A": "Tasvirning joylashuvi va koordinata mosligini tekshirish",
            "B": "Faqat plotter tanlash",
            "C": "Faqat legendani o‘chirish",
            "D": "Faqat sarlavha yozish",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Multiband tasvirlar bilan ishlashning afzalligi nimada?",
            "A": "Faqat rang kamayadi",
            "B": "Faqat fayl kichrayadi",
            "C": "Har xil spektral kombinatsiyalar orqali obyektlarni ajratish mumkin",
            "D": "Faqat GPS o‘chadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Tasvir yuklanganda qora fon yoki noto‘g‘ri ko‘rinish paydo bo‘lsa, qanday sabab bo‘lishi mumkin?",
            "A": "Band kombinatsiyasi yoki statistik stretching noto‘g‘ri bo‘lishi mumkin",
            "B": "CRS har doim to‘g‘ri",
            "C": "Sarlavha uzunligi sababli",
            "D": "Bu faqat plotter muammosi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kosmik surat bilan ishlashda histogram yoki contrast stretching nima uchun kerak?",
            "A": "Faqat koordinatani o‘zgartirish uchun",
            "B": "Faqat rastrni vektorga aylantirish uchun",
            "C": "Obyektlarni vizual ajratishni yaxshilash uchun",
            "D": "Faqat jadval tuzish uchun",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Tasvirning bulutli qismlarini tahlildan chiqarish nima uchun muhim?",
            "A": "Noto‘g‘ri klassifikatsiya va obyekt tanib olish xatosini kamaytirish uchun",
            "B": "Ranglarni ko‘paytirish uchun",
            "C": "GPS aniqligini oshirish uchun",
            "D": "Atributlarni yo‘qotish uchun",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kosmik suratni GATga yuklash va tahlilga tayyorlashning to‘g‘ri ketma-ketligi qaysi?",
            "A": "Fayl nomi → legendani o‘chirish",
            "B": "Sarlavha → rang → chiqish",
            "C": "Faqat yuklash → chop etish",
            "D": "Yuklash → metadata/CRS tekshirish → vizual nazorat → kerak bo‘lsa oldindan ishlov → tahlil",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Kosmik tasvirda bandlar tartibi noto‘g‘ri berilsa, qanday muammo bo‘ladi?",
            "A": "Plotter ishlamaydi",
            "B": "GPS signali yo‘qoladi",
            "C": "Vizual talqin va spektral ajratish noto‘g‘ri bo‘lishi mumkin",
            "D": "CRS o‘chadi",
            "correct": "C",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 42. Skanerlangan xaritani georeferensiyalash",
        "questions": [
          {
            "q": "Skanerlangan xaritani georeferensiyalashda GCP tanlashda qaysi obyektlar maqsadga muvofiq?",
            "A": "Faqat soyali joylar",
            "B": "Faqat matn usti",
            "C": "Barqaror, aniq taniladigan burchak, yo‘l kesishmasi yoki geodezik nuqtalar",
            "D": "Faqat rangli maydonlar",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "RMS xatolik katta bo‘lsa, eng to‘g‘ri amaliy chora nima?",
            "A": "Plotter formatini almashtirish",
            "B": "Rangni o‘zgartirish",
            "C": "Noto‘g‘ri nuqtalarni qayta tekshirib, GCPni to‘g‘rilash",
            "D": "Natijani qabul qilish",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Georeferensiyalashda nazorat nuqtalari butun tasvir bo‘ylab tarqatilishi nega muhim?",
            "A": "Faqat legendani chiroyli qilish uchun",
            "B": "Atributni o‘chirish uchun",
            "C": "Transformatsiya sifatini hudud bo‘ylab barqaror qilish uchun",
            "D": "Rastrni kichraytirish uchun",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Eski xarita bilan zamonaviy sun’iy yo‘ldosh tasviri mos tushmasa, qaysi metodik izoh to‘g‘ri?",
            "A": "Faqat rang xatosi",
            "B": "Xarita eski, proyeksiya/datum boshqa yoki obyektlar vaqt o‘tib o‘zgargan bo‘lishi mumkin",
            "C": "Faqat muallif xatosi",
            "D": "Faqat shrift xatosi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Georeferensiyadan keyin raster vektor qatlamlar bilan solishtirilsa, bu nimaga xizmat qiladi?",
            "A": "Faqat sarlavha yozishga",
            "B": "Faqat jadvalni yopishga",
            "C": "Fazoviy moslikni tekshirish va keyingi raqamlashtirishga tayyorlashga",
            "D": "Faqat plotter sozlashga",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Affine transformatsiya qaysi holatda qulay?",
            "A": "GCP bo‘lmasa",
            "B": "Oddiy siljish, aylanish va cho‘zilish bilan ifodalanuvchi deformatsiyada",
            "C": "CRS noma’lum bo‘lsa ham",
            "D": "Juda murakkab notekis deformatsiyada",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Nazorat nuqtasi sifatida vaqtinchalik obyektni tanlashning xavfi nimada?",
            "A": "CRSni yaxshilaydi",
            "B": "U doim aniq bo‘ladi",
            "C": "Obyekt joylashuvi vaqt o‘tishi bilan o‘zgargan bo‘lishi mumkin",
            "D": "Topologiyani tuzatadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Georeferensiyalashdan keyingi asosiy sifat nazorati qaysi?",
            "A": "Faqat rang tanlash",
            "B": "RMS xato, vizual moslik va mustaqil qatlam bilan solishtirish",
            "C": "Faqat fayl hajmini ko‘rish",
            "D": "Faqat sarlavha tekshirish",
            "correct": "B",
            "ball": 3
          },
        ]
      },
      {
        "title": "§36-mavzu. GAT texnologiyalari asosida aerokosmik suratlarni qayta ishlash",
        "questions": [
          {
            "q": "Aerokosmik suratlarni qayta ishlashning birinchi bosqichlaridan biri qaysi?",
            "A": "Georeferensiya va oldindan ishlov berish",
            "B": "Faqat plotterga chiqarish",
            "C": "Faqat sarlavha yozish",
            "D": "Faqat masshtab o‘chirish",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Klassifikatsiya jarayonida “training samples” noto‘g‘ri tanlansa, qanday oqibat yuz beradi?",
            "A": "CRS tuzaladi",
            "B": "Rastr silliqlashadi",
            "C": "Yer qoplamasi sinflari noto‘g‘ri ajratiladi",
            "D": "GPS aniqligi oshadi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Supervised va unsupervised klassifikatsiya farqi nimada?",
            "A": "Supervised faqat matn uchun",
            "B": "Birinchisida sinflar oldindan o‘qitiladi, ikkinchisida algoritm o‘zi guruhlaydi",
            "C": "Ikkalasi bir xil",
            "D": "Unsupervised faqat plotter uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Atmosfera ta’siri tuzatilmasa, qanday muammo bo‘lishi mumkin?",
            "A": "Spektral qiymatlar real obyekt xususiyatini noto‘g‘ri aks ettirishi mumkin",
            "B": "Plotter ishlamaydi",
            "C": "Legendaga ehtiyoj qolmaydi",
            "D": "CRS yo‘qoladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Klassifikatsiya natijasining aniqligini baholash uchun nima kerak?",
            "A": "Ground truth yoki nazorat nuqtalari asosida accuracy assessment",
            "B": "Faqat sarlavha",
            "C": "Faqat ko‘z bilan qarash",
            "D": "Faqat muallif nomi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Aerokosmik suratlarni qayta ishlashda maskalash nimaga xizmat qiladi?",
            "A": "Rastrni vektorga aylantirishga",
            "B": "Plotter formatini tanlashga",
            "C": "Keraksiz qism, masalan bulut yoki qiziqmas hududni tahlildan chiqarishga",
            "D": "CRSni o‘chirishga",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Tasvir segmentatsiyasi qaysi holatda foydali?",
            "A": "Faqat perimetr hisoblashda",
            "B": "Obyektga asoslangan tahlilda tasvirni mazmunli bo‘laklarga ajratishda",
            "C": "Faqat legendani tuzishda",
            "D": "Faqat matn yozishda",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Aerokosmik suratlarni qayta ishlash natijasini GAT tahliliga ulashning afzalligi nimada?",
            "A": "GPS keraksiz bo‘ladi",
            "B": "Klassifikatsiya natijalari boshqa qatlamlar bilan integratsion tahlil qilinadi",
            "C": "Faqat ranglar o‘zgaradi",
            "D": "Atributlar yo‘qoladi",
            "correct": "B",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 43. Kosmik suratlar asosida yer qoplamasi turlarini ajratish va tematik xarita tuzish",
        "questions": [
          {
            "q": "Yer qoplamasi klassifikatsiyasida o‘rmon, suv va yalang‘och yer sinflari nima asosida ajratiladi?",
            "A": "Faqat sarlavha asosida",
            "B": "Faqat plotter asosida",
            "C": "Faqat obyekt nomi asosida",
            "D": "Spektral imzo va tasvir xususiyatlari asosida",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Tematik xarita tuzishda klassifikatsiya natijasini darhol qabul qilish nega xavfli?",
            "A": "Accuracy assessment qilinmasa, natija noto‘g‘ri bo‘lishi mumkin",
            "B": "CRS buni hal qiladi",
            "C": "Rang yetarli",
            "D": "Har doim to‘g‘ri bo‘ladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "NDVI kabi indekslar qaysi sinfni ajratishda ayniqsa foydali?",
            "A": "Faqat bino balandligini",
            "B": "O‘simlik qoplamasini",
            "C": "Faqat perimetrni",
            "D": "Faqat yo‘l tarmog‘ini",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Yer qoplamasi xaritasida suv sinfi noto‘g‘ri ajratilsa, qanday oqibat bo‘lishi mumkin?",
            "A": "Gidrologik va ekologik tahlillar xato chiqadi",
            "B": "Masshtab o‘zgaradi",
            "C": "Sarlavha yo‘qoladi",
            "D": "Plotter buziladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Klassifikatsiya natijasini silliqlash yoki filtrlash nima uchun kerak bo‘lishi mumkin?",
            "A": "Rastrni matnga aylantirish uchun",
            "B": "Legendani o‘chirish uchun",
            "C": "CRSni yo‘qotish uchun",
            "D": "Shovqinli, mayda tasodifiy piksel guruhlarini kamaytirish uchun",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Tematik xarita uchun legenda qanday bo‘lishi kerak?",
            "A": "Sinflar mazmuniga mos, aniq va foydalanuvchiga tushunarli",
            "B": "Faqat ranglar tartibsiz",
            "C": "Faqat matnsiz",
            "D": "Faqat sarlavhasiz",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Yer qoplamasi xaritasini boshqa statistik ma’lumotlar bilan bog‘lash nimaga imkon beradi?",
            "A": "Faqat chop etishga",
            "B": "Maydon ulushi, o‘zgarish va hududiy taqqoslashni bajarishga",
            "C": "Faqat plotter tanlashga",
            "D": "Faqat rang almashishga",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Tematik xarita natijasini tekshirish uchun qaysi manbalar foydali?",
            "A": "Faqat sarlavha",
            "B": "Faqat shrift",
            "C": "Dala ma’lumoti, yuqori aniqlikdagi tasvir va mavjud xaritalar",
            "D": "Faqat muqova",
            "correct": "C",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 44. Web-GAT va onlayn geoxizmatlardan foydalanib interaktiv xarita yaratish",
        "questions": [
          {
            "q": "Web-GATning oddiy bosma xaritadan asosiy ustunligi nimada?",
            "A": "Faqat plotterga chiqarilishi",
            "B": "Faqat rangli bo‘lishi",
            "C": "Interaktivlik, qatlam boshqaruvi va onlayn so‘rovlar mavjud",
            "D": "Faqat katta fayl bo‘lishi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Onlayn geoxizmatlardan foydalanishda internet manbasi ishonchliligi nega muhim?",
            "A": "Faqat muallif nomi uchun",
            "B": "Shrift almashtirish uchun",
            "C": "Noto‘g‘ri yoki eskirgan qatlamlar tahlilni chalg‘itishi mumkin",
            "D": "Rang tanlash uchun",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Interaktiv xaritada popup oynalar nima uchun foydali?",
            "A": "Rastrni kesish uchun",
            "B": "Obyektning atribut ma’lumotlarini tez ko‘rsatish uchun",
            "C": "Faqat fon rangini o‘zgartirish uchun",
            "D": "CRSni o‘chirish uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Web-GATda juda ko‘p og‘ir qatlam yuklansa, qanday muammo bo‘ladi?",
            "A": "Plotter avtomatik yoqiladi",
            "B": "Xarita sekin ishlaydi va foydalanuvchi tajribasi yomonlashadi",
            "C": "Aniqlik oshadi",
            "D": "Legendaga ehtiyoj qolmaydi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Interaktiv xarita yaratishda simvolika va ranglar nega standartlashtiriladi?",
            "A": "CRSni yashirish uchun",
            "B": "Faqat chiroyli ko‘rinish uchun",
            "C": "Atributlarni o‘chirish uchun",
            "D": "Foydalanuvchi mazmunni tez va bir xil talqin qilishi uchun",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Web-GATda ma’lumotlar xavfsizligi nimani anglatadi?",
            "A": "Faqat rangni tanlashni",
            "B": "Faqat sarlavha yozishni",
            "C": "Kim ko‘rishi, tahrirlashi yoki ulashishi mumkinligini nazorat qilishni",
            "D": "Faqat fayl nomini saqlashni",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Onlayn xaritada mobil foydalanuvchi uchun dizayn nega alohida o‘ylanishi kerak?",
            "A": "Faqat plotter uchun",
            "B": "Faqat CRS uchun",
            "C": "Faqat shrift uchun",
            "D": "Kichik ekran, tezkor yuklanish va soddalashtirilgan interfeys talab qilinadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Web-GAT mahsulotini ilmiy loyiha uchun to‘g‘ri rasmiylashtirishda nimalar zarur?",
            "A": "Faqat logo",
            "B": "Faqat fon rangi",
            "C": "Ma’lumot manbasi, yangilanish sanasi, legenda, qatlam tavsifi va foydalanish cheklovlari",
            "D": "Faqat muqova",
            "correct": "C",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 45. Tanlangan hudud bo‘yicha topografik-kartografik va GAT tahlili asosida kompleks elektron xarita yaratish",
        "questions": [
          {
            "q": "Kompleks elektron xarita yaratishda “kompleks” tushunchasi nimani anglatadi?",
            "A": "Bir nechta mavzu va qatlamlarni yagona fazoviy tizimda integratsiyalashni",
            "B": "Faqat matnli hisobotni",
            "C": "Faqat plotter sozlashni",
            "D": "Faqat bitta rang ishlatishni",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kompleks elektron xaritada topografik asos nega muhim?",
            "A": "Faqat fayl hajmi uchun",
            "B": "Faqat dizayn uchun",
            "C": "Faqat sarlavha uchun",
            "D": "Qolgan tematik qatlamlar uchun fazoviy tayanch vazifasini bajaradi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Hudud bo‘yicha turli manbalardan olingan qatlamlar birlashtirilganda qaysi bosqich majburiy?",
            "A": "Faqat rang tanlash",
            "B": "Faqat plotter formatini tanlash",
            "C": "Faqat logo qo‘yish",
            "D": "CRS, aniqlik va vaqt mosligini tekshirish",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Kompleks xaritada faqat ko‘p qatlam yig‘ish yetarlimi?",
            "A": "Yo‘q, qatlamlar orasidagi mantiqiy bog‘lanish va tahliliy maqsad aniq bo‘lishi kerak",
            "B": "Faqat ranglar muhim",
            "C": "Faqat sarlavha muhim",
            "D": "Ha, doim yetarli",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kompleks elektron xarita foydalanuvchi uchun qulay bo‘lishi uchun nima zarur?",
            "A": "Faqat muallif rasmi",
            "B": "Faqat ko‘p rang",
            "C": "Faqat katta fayl",
            "D": "Qatlam boshqaruvi, aniq legenda, qidiruv va o‘qilishi qulay interfeys",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Kompleks xarita natijasini ilmiy jihatdan asoslash uchun nimalar ko‘rsatiladi?",
            "A": "Manbalar, metodlar, CRS, tahlil bosqichlari va cheklovlar",
            "B": "Faqat plotter turi",
            "C": "Faqat rang palitrasi",
            "D": "Faqat sarlavha",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kompleks xaritada atributlar standartlashtirilmasa, qanday muammo tug‘iladi?",
            "A": "Legendaga ehtiyoj qolmaydi",
            "B": "So‘rov, filtr va tahlil natijalari chalkashadi",
            "C": "GPS tuzaladi",
            "D": "Relyef ortadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Tanlangan hudud bo‘yicha yakuniy elektron xarita sifatini baholashning eng to‘g‘ri yo‘li qaysi?",
            "A": "Faqat ko‘rinishiga qarash",
            "B": "Faqat sarlavhani o‘qish",
            "C": "Fazoviy aniqlik, mazmuniy to‘liqlik, o‘qiluvchanlik va amaliy foydalilik mezonlari bo‘yicha tekshirish",
            "D": "Faqat fayl hajmiga qarash",
            "correct": "C",
            "ball": 3
          },
        ]
      },
    ]
  },
  "m5": {
    "name": "Kadastr va geodeziya",
    "sections": [
      {
        "title": "Amaliy mashg‘ulot 37. Geofazoviy tahlilda masofa, maydon va perimetr o‘lchash",
        "questions": [
          {
            "q": "Maydon va masofa hisoblashdan oldin qaysi shart eng muhim?",
            "A": "Qatlam mos proyeksiyada va metrik birliklarda bo‘lishi",
            "B": "Sarlavha yozilgan bo‘lishi",
            "C": "Faqat rang tanlangan bo‘lishi",
            "D": "Atributlar yashirilgan bo‘lishi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Geografik koordinatada saqlangan qatlamda bevosita maydon hisoblash nega xatoli bo‘lishi mumkin?",
            "A": "GPSni o‘chiradi",
            "B": "Rastr yo‘qoladi",
            "C": "Gradus birliklari metrli maydonni to‘g‘ri bermaydi",
            "D": "Legendaga xalaqit qiladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Perimetr va maydon qiymatlari atribut jadvaliga avtomatik hisoblanib yozilsa, bu nima uchun qulay?",
            "A": "Keyingi statistik va fazoviy tahlillar uchun tayyor ko‘rsatkich bo‘ladi",
            "B": "Faqat rang o‘zgaradi",
            "C": "Fayl siqiladi",
            "D": "CRS bekor bo‘ladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Cho‘zilgan va notekis poligonlarda maydon hisoblash xatolari ko‘proq nimaga bog‘liq?",
            "A": "Sarlavha uslubiga",
            "B": "Fayl nomiga",
            "C": "Legendaning joyiga",
            "D": "Geometriya aniqligi va proyeksiya tanloviga",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Yo‘l chizig‘i uzunligini hisoblashda segmentlar uzilgan bo‘lsa, qanday muammo tug‘iladi?",
            "A": "Masshtab o‘zgaradi",
            "B": "Umumiy uzunlik noto‘g‘ri chiqadi",
            "C": "Rastr tiniqlashadi",
            "D": "Ranglar kamayadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Maydonni gektarda, perimetrni metrda ko‘rsatishning afzalligi nimada?",
            "A": "GPS tuzaladi",
            "B": "Legendaga ehtiyoj qolmaydi",
            "C": "CRS o‘chadi",
            "D": "Turli tahliliy ko‘rsatkichlar foydalanuvchi uchun qulay birlikda beriladi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Poligon maydoni kutilganidan ancha katta chiqsa, birinchi tekshiriladigan narsa nima?",
            "A": "Geometriya yopilganligi, proyeksiya va birliklar to‘g‘riligi",
            "B": "Faqat muallif nomi",
            "C": "Faqat rang shkalasi",
            "D": "Faqat sarlavha uzunligi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Masofa, maydon va perimetrni taqqoslash asosida qaysi tahlilni bajarish mumkin?",
            "A": "Faqat plotter sozlash",
            "B": "Hudud shakli, zichligi va obyektlar o‘rtasidagi fazoviy nisbatlarni baholash",
            "C": "Faqat matn yozish",
            "D": "Faqat georeferensiya",
            "correct": "B",
            "ball": 3
          },
        ]
      },
      {
        "title": "30-mavzu. GATda geofazoviy ma’lumotlarning 3 o‘lchovli tasviri (DEM/DTM)",
        "questions": [
          {
            "q": "DEM va DTM o‘rtasidagi eng muhim amaliy farq nimada?",
            "A": "Ikkalasi faqat jadval",
            "B": "DEM faqat yo‘l, DTM faqat bino",
            "C": "Farqi yo‘q",
            "D": "DEM umumiy balandlik sirtini, DTM esa yer sathining qayta ishlangan/tozalangan modelini ifodalaydi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "3D fazoviy modelda vertikal datum noto‘g‘ri bo‘lsa, qanday xatolik kuzatiladi?",
            "A": "Fayl ochilmaydi",
            "B": "Legendaga ta’sir qiladi xolos",
            "C": "Ranglar kamayadi",
            "D": "Balandliklar real holatga mos kelmaydi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "3D modelda DEMning piksel o‘lchami yirik bo‘lsa, qanday cheklov paydo bo‘ladi?",
            "A": "Aniqlik doim oshadi",
            "B": "Topologiya yaxshilanadi",
            "C": "Mayda relyef shakllari soddalashib ketadi",
            "D": "CRS avtomatik tuzatiladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "3D geovizualizatsiyada “vertical exaggeration” nima uchun ehtiyotkor qo‘llanadi?",
            "A": "CRSni o‘chirishi mumkin",
            "B": "Relyefni sun’iy ravishda keskin ko‘rsatib yuborishi mumkin",
            "C": "Rangni kamaytiradi",
            "D": "Atributlarni yashiradi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "DEM/DTM asosida qaysi ikkilamchi mahsulotlar olinadi?",
            "A": "Faqat aholi soni",
            "B": "Faqat sarlavha",
            "C": "Faqat plotter formati",
            "D": "Qiyalik, ekspozitsiya, soyalanish va gidrologik ko‘rsatkichlar",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "3D modelni muhandislikda qo‘llashning asosiy afzalligi nimada?",
            "A": "Faqat fayl siqadi",
            "B": "Koordinatani keraksiz qiladi",
            "C": "Relyef va obyektlarning fazoviy holatini aniqroq baholash imkonini beradi",
            "D": "Faqat rangli ko‘rinish beradi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "DEM bilan bino poligonlari birlashtirilsa, qanday imkoniyat paydo bo‘ladi?",
            "A": "Faqat sarlavha qo‘yish",
            "B": "Bino va yer sathining hajmli ko‘rinishini yaratish",
            "C": "Faqat matnli hisobot",
            "D": "Faqat rang o‘zgarishi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "3D tahlil natijasini ilmiy asoslash uchun qaysi ma’lumot ko‘rsatilishi kerak?",
            "A": "Faqat fayl hajmi",
            "B": "Faqat rang turi",
            "C": "Faqat karta nomi",
            "D": "DEM manbasi, aniqligi, rezolyutsiyasi, datum va ishlov bosqichlari",
            "correct": "D",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 38. DEM asosida balandlik, qiyalik va ekspozitsiya xaritalari yaratish",
        "questions": [
          {
            "q": "DEM asosida qiyalik xaritasi yaratishda natija qaysi birliklarda berilishi mumkin?",
            "A": "Faqat gektarda",
            "B": "Faqat tonnada",
            "C": "Gradus yoki foiz ko‘rinishida",
            "D": "Faqat kilometrda",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Ekspozitsiya xaritasi nimani ko‘rsatadi?",
            "A": "Yonbag‘irlarning qaysi yo‘nalishga qaraganini",
            "B": "Faqat perimetrni",
            "C": "Faqat maydonni",
            "D": "Faqat balandlik qiymatini",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Balandlik xaritasida klassifikatsiya noto‘g‘ri tanlansa, qanday muammo bo‘ladi?",
            "A": "CRS tuzaladi",
            "B": "Rastr vektorga aylanadi",
            "C": "DEM aniqligi oshadi",
            "D": "Relyef zonalari noto‘g‘ri talqin qilinadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Qiyalik xaritasi qaysi amaliy masalalarda muhim?",
            "A": "Faqat atlas muqovasida",
            "B": "Faqat matn tahlilida",
            "C": "Eroziya, qurilish, qishloq xo‘jaligi va xavf baholashda",
            "D": "Faqat shrift tanlashda",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Ekspozitsiya xaritasini iqlimiy tahlilda qo‘llashning sababi nima?",
            "A": "Atributni o‘chirish",
            "B": "CRS almashtirish",
            "C": "Faqat rang chiroyli bo‘lishi",
            "D": "Yonbag‘irlarning quyosh nuri va namlik sharoitiga ta’sirini baholash",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "DEM asosida hosil qilingan qiyalik xaritasi “shaxmat” ko‘rinishida chiqsa, eng ehtimoliy sabab nima?",
            "A": "Rezolyutsiya past yoki ma’lumot shovqinli bo‘lishi mumkin",
            "B": "Legendada xato",
            "C": "Fayl nomi uzun",
            "D": "Sarlavha qisqa",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Balandlik, qiyalik va ekspozitsiyani birgalikda tahlil qilish nimaga xizmat qiladi?",
            "A": "Faqat CRS o‘chirishga",
            "B": "Faqat faylni siqishga",
            "C": "Hududning relyef xususiyatlarini kompleks baholashga",
            "D": "Faqat ranglarni kamaytirishga",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "DEM asosida yaratilgan mahsulotlar natijasini tekshirishda qaysi usul maqsadga muvofiq?",
            "A": "Faqat sarlavha tekshirish",
            "B": "Faqat rang tanlash",
            "C": "Faqat vizual ko‘rish",
            "D": "Ma’lum nuqtalar yoki topografik ma’lumotlar bilan solishtirish",
            "correct": "D",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 39. Gidrografik tarmoq va relyef elementlarini tahlil qilish",
        "questions": [
          {
            "q": "Gidrografik tarmoq tahlilida oqim yo‘nalishini aniqlash uchun qaysi ma’lumot zarur?",
            "A": "DEM va undan hosil qilingan flow direction modeli",
            "B": "Faqat aholi soni",
            "C": "Faqat yo‘l chizig‘i",
            "D": "Faqat matnli jadval",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Oqim to‘planishi xaritasi nimani ko‘rsatadi?",
            "A": "Faqat perimetrni",
            "B": "Faqat transport yo‘nalishini",
            "C": "Faqat balandlikni",
            "D": "Suv oqimi qaysi yo‘nalishlarda ko‘proq jamlanishini",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "DEMda cho‘kma (sink)lar tuzatilmasa, gidrologik tahlilda qanday muammo tug‘iladi?",
            "A": "Oqim yo‘nalishi va tarmoq modeli xato chiqadi",
            "B": "Ranglar yo‘qoladi",
            "C": "GPS aniqligi ortadi",
            "D": "Relyef doim to‘g‘ri bo‘ladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Gidrografik tarmoqni relyef bilan birgalikda tahlil qilishning afzalligi nimada?",
            "A": "CRS keraksiz bo‘ladi",
            "B": "Faqat sarlavha ko‘payadi",
            "C": "Faqat chiroyli ko‘rinadi",
            "D": "Vodiy, suvayirg‘ich va eroziya yo‘nalishlarini tushunish mumkin",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Relyef elementlarini tahlilda suvayirg‘ich chegarasi noto‘g‘ri chiqsa, birinchi tekshiriladigan narsa nima?",
            "A": "Faqat legendaning joyi",
            "B": "Faqat rang palitrasi",
            "C": "DEM sifati va gidrologik oldindan ishlov bosqichlari",
            "D": "Faqat muallif nomi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Gidrografik tarmoqni avtomatik ajratishda threshold qiymati juda kichik tanlansa, nima bo‘ladi?",
            "A": "Barcha atributlar bir xil bo‘ladi",
            "B": "CRS o‘chadi",
            "C": "Tarmoq haddan tashqari zich va mayda chiqishi mumkin",
            "D": "Tarmoq yo‘qoladi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Daryo tarmog‘i va yo‘l tarmog‘ini kesishma tahlili nima uchun foydali?",
            "A": "Ko‘prik, xavfli nuqta yoki infratuzilma ehtiyojini baholash uchun",
            "B": "Faqat plotter sozlash uchun",
            "C": "Faqat georeferensiya uchun",
            "D": "Faqat rang tanlash uchun",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Gidrografik tahlil natijalarini tekshirish uchun qaysi manba foydali?",
            "A": "Faqat sahifa raqami",
            "B": "Faqat fayl nomi",
            "C": "Topografik xarita, kosmik surat yoki dala kuzatuvi",
            "D": "Faqat shrift ro‘yxati",
            "correct": "C",
            "ball": 3
          },
        ]
      },
      {
        "title": "§34-mavzu. Masofadan zondlash haqida umumiy ma’lumotlar",
        "questions": [
          {
            "q": "Masofadan zondlashning mohiyati nimada?",
            "A": "Faqat statistik jadval tuzishda",
            "B": "Obyekt haqida bevosita kontaktsiz elektromagnit nurlanish orqali ma’lumot olishda",
            "C": "Faqat GPS nuqta yozishda",
            "D": "Faqat qo‘lda chizishda",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Passiv sensor bilan aktiv sensor farqi nimada?",
            "A": "Farqi yo‘q",
            "B": "Passiv sensor tabiiy nurlanishni qabul qiladi, aktiv sensor esa o‘zi signal yuboradi",
            "C": "Aktiv sensor faqat matnli",
            "D": "Passiv sensor faqat rangli",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Multispektral tasvirlar oddiy rangli tasvirga nisbatan nimani yaxshiroq beradi?",
            "A": "Faqat sarlavhani ko‘paytiradi",
            "B": "Faqat fayl hajmini kamaytiradi",
            "C": "Faqat CRSni o‘chiradi",
            "D": "Yer qoplami va obyektlarni spektral xususiyatlariga ko‘ra ajratishni",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Fazoviy rezolyutsiya nimani bildiradi?",
            "A": "Piksel yer yuzasida qamrab oladigan minimal o‘lchamni",
            "B": "Faqat ranglar sonini",
            "C": "Faqat vaqt oralig‘ini",
            "D": "Faqat to‘lqin uzunligini",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Vaqt rezolyutsiyasi nima uchun muhim?",
            "A": "Bir hudud qanchalik tez-tez qayta suratga olinayotganini bildiradi",
            "B": "Faqat tasvir rangini",
            "C": "Faqat legendani",
            "D": "Faqat plotter tezligini",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Bulutlilik ko‘rsatkichi yuqori bo‘lgan tasvir qanday cheklov keltiradi?",
            "A": "GPS tuzaladi",
            "B": "Yer yuzasi obyektlari to‘liq ko‘rinmasligi mumkin",
            "C": "DEM yaratiladi",
            "D": "Aniqlik oshadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Masofadan zondlash ma’lumotlari qaysi sohalarda ayniqsa foydali?",
            "A": "Yer qoplami, qishloq xo‘jaligi, ekologiya, xavf monitoringi va shahar tahlilida",
            "B": "Faqat sportda",
            "C": "Faqat adabiyotda",
            "D": "Faqat fon dizaynida",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "MZ ma’lumotini GAT bilan birlashtirishning afzalligi nimada?",
            "A": "Faqat ranglarni almashtiradi",
            "B": "Spektral kuzatuv natijalarini fazoviy tahlil va boshqaruv bilan bog‘lash mumkin",
            "C": "Atributlarni o‘chiradi",
            "D": "Koordinatani keraksiz qiladi",
            "correct": "B",
            "ball": 3
          },
        ]
      },
    ]
  },
  "m6": {
    "name": "Amaliy loyiha",
    "sections": [
      {
        "title": "Amaliy mashg‘ulot 43. Kosmik suratlar asosida yer qoplamasi turlarini ajratish va tematik xarita tuzish",
        "questions": [
          {
            "q": "Yer qoplamasi klassifikatsiyasida o‘rmon, suv va yalang‘och yer sinflari nima asosida ajratiladi?",
            "A": "Faqat sarlavha asosida",
            "B": "Faqat plotter asosida",
            "C": "Faqat obyekt nomi asosida",
            "D": "Spektral imzo va tasvir xususiyatlari asosida",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Tematik xarita tuzishda klassifikatsiya natijasini darhol qabul qilish nega xavfli?",
            "A": "Accuracy assessment qilinmasa, natija noto‘g‘ri bo‘lishi mumkin",
            "B": "CRS buni hal qiladi",
            "C": "Rang yetarli",
            "D": "Har doim to‘g‘ri bo‘ladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "NDVI kabi indekslar qaysi sinfni ajratishda ayniqsa foydali?",
            "A": "Faqat bino balandligini",
            "B": "O‘simlik qoplamasini",
            "C": "Faqat perimetrni",
            "D": "Faqat yo‘l tarmog‘ini",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Yer qoplamasi xaritasida suv sinfi noto‘g‘ri ajratilsa, qanday oqibat bo‘lishi mumkin?",
            "A": "Gidrologik va ekologik tahlillar xato chiqadi",
            "B": "Masshtab o‘zgaradi",
            "C": "Sarlavha yo‘qoladi",
            "D": "Plotter buziladi",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Klassifikatsiya natijasini silliqlash yoki filtrlash nima uchun kerak bo‘lishi mumkin?",
            "A": "Rastrni matnga aylantirish uchun",
            "B": "Legendani o‘chirish uchun",
            "C": "CRSni yo‘qotish uchun",
            "D": "Shovqinli, mayda tasodifiy piksel guruhlarini kamaytirish uchun",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Tematik xarita uchun legenda qanday bo‘lishi kerak?",
            "A": "Sinflar mazmuniga mos, aniq va foydalanuvchiga tushunarli",
            "B": "Faqat ranglar tartibsiz",
            "C": "Faqat matnsiz",
            "D": "Faqat sarlavhasiz",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Yer qoplamasi xaritasini boshqa statistik ma’lumotlar bilan bog‘lash nimaga imkon beradi?",
            "A": "Faqat chop etishga",
            "B": "Maydon ulushi, o‘zgarish va hududiy taqqoslashni bajarishga",
            "C": "Faqat plotter tanlashga",
            "D": "Faqat rang almashishga",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Tematik xarita natijasini tekshirish uchun qaysi manbalar foydali?",
            "A": "Faqat sarlavha",
            "B": "Faqat shrift",
            "C": "Dala ma’lumoti, yuqori aniqlikdagi tasvir va mavjud xaritalar",
            "D": "Faqat muqova",
            "correct": "C",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 44. Web-GAT va onlayn geoxizmatlardan foydalanib interaktiv xarita yaratish",
        "questions": [
          {
            "q": "Web-GATning oddiy bosma xaritadan asosiy ustunligi nimada?",
            "A": "Faqat plotterga chiqarilishi",
            "B": "Faqat rangli bo‘lishi",
            "C": "Interaktivlik, qatlam boshqaruvi va onlayn so‘rovlar mavjud",
            "D": "Faqat katta fayl bo‘lishi",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Onlayn geoxizmatlardan foydalanishda internet manbasi ishonchliligi nega muhim?",
            "A": "Faqat muallif nomi uchun",
            "B": "Shrift almashtirish uchun",
            "C": "Noto‘g‘ri yoki eskirgan qatlamlar tahlilni chalg‘itishi mumkin",
            "D": "Rang tanlash uchun",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Interaktiv xaritada popup oynalar nima uchun foydali?",
            "A": "Rastrni kesish uchun",
            "B": "Obyektning atribut ma’lumotlarini tez ko‘rsatish uchun",
            "C": "Faqat fon rangini o‘zgartirish uchun",
            "D": "CRSni o‘chirish uchun",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Web-GATda juda ko‘p og‘ir qatlam yuklansa, qanday muammo bo‘ladi?",
            "A": "Plotter avtomatik yoqiladi",
            "B": "Xarita sekin ishlaydi va foydalanuvchi tajribasi yomonlashadi",
            "C": "Aniqlik oshadi",
            "D": "Legendaga ehtiyoj qolmaydi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Interaktiv xarita yaratishda simvolika va ranglar nega standartlashtiriladi?",
            "A": "CRSni yashirish uchun",
            "B": "Faqat chiroyli ko‘rinish uchun",
            "C": "Atributlarni o‘chirish uchun",
            "D": "Foydalanuvchi mazmunni tez va bir xil talqin qilishi uchun",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Web-GATda ma’lumotlar xavfsizligi nimani anglatadi?",
            "A": "Faqat rangni tanlashni",
            "B": "Faqat sarlavha yozishni",
            "C": "Kim ko‘rishi, tahrirlashi yoki ulashishi mumkinligini nazorat qilishni",
            "D": "Faqat fayl nomini saqlashni",
            "correct": "C",
            "ball": 3
          },
          {
            "q": "Onlayn xaritada mobil foydalanuvchi uchun dizayn nega alohida o‘ylanishi kerak?",
            "A": "Faqat plotter uchun",
            "B": "Faqat CRS uchun",
            "C": "Faqat shrift uchun",
            "D": "Kichik ekran, tezkor yuklanish va soddalashtirilgan interfeys talab qilinadi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Web-GAT mahsulotini ilmiy loyiha uchun to‘g‘ri rasmiylashtirishda nimalar zarur?",
            "A": "Faqat logo",
            "B": "Faqat fon rangi",
            "C": "Ma’lumot manbasi, yangilanish sanasi, legenda, qatlam tavsifi va foydalanish cheklovlari",
            "D": "Faqat muqova",
            "correct": "C",
            "ball": 3
          },
        ]
      },
      {
        "title": "Amaliy mashg‘ulot 45. Tanlangan hudud bo‘yicha topografik-kartografik va GAT tahlili asosida kompleks elektron xarita yaratish",
        "questions": [
          {
            "q": "Kompleks elektron xarita yaratishda “kompleks” tushunchasi nimani anglatadi?",
            "A": "Bir nechta mavzu va qatlamlarni yagona fazoviy tizimda integratsiyalashni",
            "B": "Faqat matnli hisobotni",
            "C": "Faqat plotter sozlashni",
            "D": "Faqat bitta rang ishlatishni",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kompleks elektron xaritada topografik asos nega muhim?",
            "A": "Faqat fayl hajmi uchun",
            "B": "Faqat dizayn uchun",
            "C": "Faqat sarlavha uchun",
            "D": "Qolgan tematik qatlamlar uchun fazoviy tayanch vazifasini bajaradi",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Hudud bo‘yicha turli manbalardan olingan qatlamlar birlashtirilganda qaysi bosqich majburiy?",
            "A": "Faqat rang tanlash",
            "B": "Faqat plotter formatini tanlash",
            "C": "Faqat logo qo‘yish",
            "D": "CRS, aniqlik va vaqt mosligini tekshirish",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Kompleks xaritada faqat ko‘p qatlam yig‘ish yetarlimi?",
            "A": "Yo‘q, qatlamlar orasidagi mantiqiy bog‘lanish va tahliliy maqsad aniq bo‘lishi kerak",
            "B": "Faqat ranglar muhim",
            "C": "Faqat sarlavha muhim",
            "D": "Ha, doim yetarli",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kompleks elektron xarita foydalanuvchi uchun qulay bo‘lishi uchun nima zarur?",
            "A": "Faqat muallif rasmi",
            "B": "Faqat ko‘p rang",
            "C": "Faqat katta fayl",
            "D": "Qatlam boshqaruvi, aniq legenda, qidiruv va o‘qilishi qulay interfeys",
            "correct": "D",
            "ball": 3
          },
          {
            "q": "Kompleks xarita natijasini ilmiy jihatdan asoslash uchun nimalar ko‘rsatiladi?",
            "A": "Manbalar, metodlar, CRS, tahlil bosqichlari va cheklovlar",
            "B": "Faqat plotter turi",
            "C": "Faqat rang palitrasi",
            "D": "Faqat sarlavha",
            "correct": "A",
            "ball": 3
          },
          {
            "q": "Kompleks xaritada atributlar standartlashtirilmasa, qanday muammo tug‘iladi?",
            "A": "Legendaga ehtiyoj qolmaydi",
            "B": "So‘rov, filtr va tahlil natijalari chalkashadi",
            "C": "GPS tuzaladi",
            "D": "Relyef ortadi",
            "correct": "B",
            "ball": 3
          },
          {
            "q": "Tanlangan hudud bo‘yicha yakuniy elektron xarita sifatini baholashning eng to‘g‘ri yo‘li qaysi?",
            "A": "Faqat ko‘rinishiga qarash",
            "B": "Faqat sarlavhani o‘qish",
            "C": "Fazoviy aniqlik, mazmuniy to‘liqlik, o‘qiluvchanlik va amaliy foydalilik mezonlari bo‘yicha tekshirish",
            "D": "Faqat fayl hajmiga qarash",
            "correct": "C",
            "ball": 3
          },
        ]
      },
    ]
  },
};

// Moduldan barcha savollarni olish
function getAllQuestions(moduleId) {
  const mod = GEOGAT_TESTS[moduleId];
  if (!mod) return [];
  return mod.sections.flatMap(s => s.questions);
}