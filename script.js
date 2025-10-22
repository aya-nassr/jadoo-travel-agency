const toggleBtn = document.getElementById('darkModeToggle'); 
const darkIcon = document.getElementById('darkModeIcon'); 
const body = document.body; 
const htmlTag = document.documentElement; 
const bootstrapCss = document.getElementById('bootstrap-css'); 
const bootstrapRtlCss = document.getElementById('bootstrap-rtl-css'); 
const currentLangDisplay = document.getElementById('currentLangDisplay'); 

 
const translations = { 
  'en': { 
    'page-title': 'Travel Agency',
    'nav-destinations': 'Destinations', 
    'nav-hotels': 'Hotels', 
    'nav-flights': 'Flights', 
    'nav-bookings': 'Bookings', 
    'nav-login': 'Login', 
    'nav-signup': 'Sign up', 
    'header-subtitle': 'BEST DESTINATIONS AROUND THE WORLD', 
    'header-title': 'Travel, enjoy and live a new and full life', 
    'header-description': 'It\'s an invitation to break free from the ordinary, immerse yourself in diverse cultures, and embrace the beauty of the world around you.', 
    'header-find-more': 'Find out more', 
    'header-play-demo': 'Play Demo', 
    'services-category': 'CATEGORY', 
    'services-title': 'We Offer Best Services', 
    'service-weather-title': 'Calculated Weather', 
    'service-weather-description': 'Built Wicket longer admire do barton vanity itself do in it.', 
    'service-flights-title': 'Best Flights', 
    'service-flights-description': 'Engrossed listening. Park gate sell they west hard for the.', 
    'service-events-title': 'Local Events', 
    'service-events-description': 'Barton vanity itself do in it. Preferd to men it engrossed listening.', 
    'service-customization-title': 'Customizations', 
    'service-customization-description': 'We deliver outsourced aviation services for military customers.', 
    'top-selling-subtitle': 'TOP SELLING', 
    'top-selling-title': 'Top Destinations', 
    'rome-title': 'Rome, Italy', 
    'rome-days': '10 Days Trip', 
    'london-title': 'London, UK', 
    'london-days': '12 Days Trip', 
    'europe-title': 'Full Europe', 
    'europe-days': '28 Days Trip', 
    'booking-subtitle': 'EASY & FAST', 
    'booking-title': 'Book Your Next Trip In 3 Easy Steps', 
    'booking-step1-title': 'Choose Destination', 
    'booking-step1-description': 'Choose your dream destination from our curated selection.', 
    'booking-step2-title': 'Make Payment', 
    'booking-step2-description': 'Secure your adventure through our streamlined payment process.', 
    'booking-step3-title': 'Reach Airport',
    'booking-step3-description': 'Arrive at the airport on your selected date ready to embark.', 
    'ongoing-trip-to-greece': 'Trip To Greece', 
    'ongoing-trip-date': '14-29 June | by Robbin jo', 
    'ongoing-trip-people': '24 people going', 
    'ongoing-trip': 'Ongoing', 
    'ongoing-trip-title': 'Trip to Rome', 
    'ongoing-trip-progress': '40% completed',
    'testimonials-subtitle': 'TESTIMONIALS',
    'testimonials-title': 'What People Say <br>About Us.',
    'client-1': 'Booking my trips through this platform has been a game-changer! From the intuitive interface to the seamless booking process, I\'ve never felt more excited to explore new destinations.',
    'client-2': 'As a busy professional, time is of the essence. This website made planning my vacation a breeze, allowing me to focus on what matters most: making memories with my family.',
    'client-3': 'I\'ve been using this service for years, and it never disappoints. The convenience of booking my flights, accommodations, and activities all in one place saves me time and stress every trip.',
    'role-enthusiast': 'Travel Enthusiast',
    'role-executive': 'Business Executive',
    'role-flyer': 'Frequent Flyer',
    'carousel-prev': 'Previous',
    'carousel-next': 'Next',
    'subscribe-title': 'Subscribe to get information, latest news and other interesting offers about Jadoo',
    'subscribe-email-placeholder': 'Your email',
    'subscribe-button': 'Subscribe',
    'footer-description': 'Book your trip in minute, get full Control for much longer.',
    'footer-company': 'Company',
    'footer-about': 'About',
    'footer-careers': 'Careers',
    'footer-mobile': 'Mobile',
    'footer-contact': 'Contact',
    'footer-help': 'Help/FAQ',
    'footer-press': 'Press',
    'footer-affiliates': 'Affiliates',
    'footer-more': 'More',
    'footer-fees': 'Airlinefees',
    'footer-airline': 'Airline',
    'footer-tips': 'Low fare tips',
    'footer-app-title': 'Discover our app',
    'footer-copyright': 'All rights reserved@jadoo.co'
  }, 
  'ar': { 
    'page-title': 'وكالة سفر',
    'nav-destinations': 'الوجهات', 
    'nav-hotels': 'الفنادق', 
    'nav-flights': 'الرحلات', 
    'nav-bookings': 'الحجوزات', 
    'nav-login': 'تسجيل الدخول', 
    'nav-signup': 'التسجيل', 
    'header-subtitle': 'أفضل الوجهات حول العالم', 
    'header-title': 'سافر، استمتع وعش حياة جديدة ومليئة', 
    'header-description': 'إنها دعوة للتحرر من الروتين، والانغماس في ثقافات متنوعة، واحتضان جمال العالم من حولك.', 
    'header-find-more': 'اكتشف المزيد', 
    'header-play-demo': 'تشغيل العرض التوضيحي', 
    'services-category': 'الفئة', 
    'services-title': 'نقدم أفضل الخدمات', 
    'service-weather-title': 'الطقس المحسوب', 
    'service-weather-description': 'بنيت ويكيت أطول تعجب تفعل بارتون الغرور نفسه يفعل ذلك فيه.', 
    'service-flights-title': 'أفضل الرحلات الجوية', 
    'service-flights-description': 'الاستماع المستغرق. بوابة الحديقة تبيع هم الغرب بجد من أجل.', 
    'service-events-title': 'الأحداث المحلية', 
    'service-events-description': 'غرور بارتون نفسه يفعل ذلك فيه. يفضل الرجال الاستماع المستغرق.', 
    'service-customization-title': 'التخصيصات', 
    'service-customization-description': 'نحن نقدم خدمات الطيران الخارجية للعملاء العسكريين.', 
    'top-selling-subtitle': 'الأكثر مبيعاً', 
    'top-selling-title': 'أفضل الوجهات', 
    'rome-title': 'روما، إيطاليا', 
    'rome-days': 'رحلة 10 أيام', 
    'london-title': 'لندن، المملكة المتحدة', 
    'london-days': 'رحلة 12 يومًا', 
    'europe-title': 'أوروبا بالكامل', 
    'europe-days': 'رحلة 28 يومًا', 
    'booking-subtitle': 'سهل وسريع', 
    'booking-title': 'احجز رحلتك القادمة في 3 خطوات سهلة', 
    'booking-step1-title': 'اختر الوجهة', 
    'booking-step1-description': 'اختر وجهة أحلامك من مجموعتنا المختارة.', 
    'booking-step2-title': 'قم بالدفع', 
    'booking-step2-description': 'أكمل حجزك بأمان من خلال خيارات الدفع السهلة لدينا.',
    'booking-step3-title': 'الوصول إلى المطار في التاريخ المحدد',
    'booking-step3-description': 'وصل إلى المطار في التاريخ الذي اخترته وابدأ مغامرتك.',
    'ongoing-trip-to-greece': 'رحلة إلى اليونان', 
    'ongoing-trip-date': '14-29 يونيو | بقلم روبن جو', 
    'ongoing-trip-people': '24 شخصا يذهبون', 
    'ongoing-trip': 'مستمرة', 
    'ongoing-trip-title': 'رحلة إلى روما', 
    'ongoing-trip-progress': 'اكتمل 40%',
    'testimonials-subtitle': 'آراء العملاء',
    'testimonials-title': 'ماذا يقول <br>الناس عنا.',
    'client-1': 'كان حجز رحلاتي من خلال هذه المنصة بمثابة تغيير قواعد اللعبة! من الواجهة البديهية إلى عملية الحجز السلسة، لم أشعر أبدًا بمزيد من الحماس لاستكشاف وجهات جديدة.',
    'client-2': 'كمحترف مشغول، الوقت جوهري. جعل هذا الموقع تخطيط عطلتي نسيمًا، مما أتاح لي التركيز على ما يهم أكثر: صنع الذكريات مع عائلتي.',
    'client-3': 'لقد كنت أستخدم هذه الخدمة لسنوات، ولم تخيب أبدًا. توفر الراحة في حجز رحلاتي الجوية والإقامة والأنشطة كلها في مكان واحد لي الوقت والتوتر في كل رحلة.',
    'role-enthusiast': 'عاشق السفر',
    'role-executive': 'مدير تنفيذي',
    'role-flyer': 'مسافر دائم',
    'carousel-prev': 'السابق',
    'carousel-next': 'التالي',
    'subscribe-title': 'اشترك للحصول على معلومات وآخر الأخبار والعروض المثيرة الأخرى حول Jadoo',
    'subscribe-email-placeholder': 'بريدك الإلكتروني',
    'subscribe-button': 'اشترك',
    'footer-description': 'احجز رحلتك في دقائق، واحصل على تحكم كامل لفترة أطول بكثير.',
    'footer-company': 'الشركة',
    'footer-about': 'من نحن',
    'footer-careers': 'الوظائف',
    'footer-mobile': 'تطبيق الموبايل',
    'footer-contact': 'اتصل بنا',
    'footer-help': 'المساعدة/الأسئلة الشائعة',
    'footer-press': 'الصحافة',
    'footer-affiliates': 'الشركاء',
    'footer-more': 'المزيد',
    'footer-fees': 'رسوم الطيران',
    'footer-airline': 'الخطوط الجوية',
    'footer-tips': 'نصائح الأسعار المنخفضة',
    'footer-app-title': 'اكتشف تطبيقنا',
    'footer-copyright': 'جميع الحقوق محفوظة @jadoo.co'
  } 
}; 
 

function applyDarkMode(isDark) { 
  if (isDark) { 
    body.classList.add('dark-mode'); 
    darkIcon.classList.remove('bi-moon-fill'); 
    darkIcon.classList.add('bi-sun-fill'); 
    localStorage.setItem('darkMode', 'enabled'); 
  } else { 
    body.classList.remove('dark-mode'); 
    darkIcon.classList.remove('bi-sun-fill'); 
    darkIcon.classList.add('bi-moon-fill'); 
    localStorage.setItem('darkMode', 'disabled'); 
  } 
} 
 
const savedMode = localStorage.getItem('darkMode'); 
if (savedMode === 'enabled') { 
  applyDarkMode(true); 
} else { 
  applyDarkMode(false); 
} 
 
toggleBtn.addEventListener('click', () => { 
  const isDark = !body.classList.contains('dark-mode'); 
  applyDarkMode(isDark); 
}); 
 
function applyLanguage(lang) { 
  
  if (lang === 'ar') { 
    htmlTag.setAttribute('lang', 'ar'); 
    htmlTag.setAttribute('dir', 'rtl'); 
    bootstrapCss.setAttribute('disabled', 'true'); 
    bootstrapRtlCss.removeAttribute('disabled'); 
    currentLangDisplay.textContent = 'عربي'; 
  } else { 
    htmlTag.setAttribute('lang', 'en'); 
    htmlTag.setAttribute('dir', 'ltr'); 
    bootstrapRtlCss.setAttribute('disabled', 'true'); 
    bootstrapCss.removeAttribute('disabled'); 
    currentLangDisplay.textContent = 'EN'; 
  } 
 
  document.querySelectorAll('[data-lang-key]').forEach(element => { 
    const key = element.getAttribute('data-lang-key'); 
    const translatedText = translations[lang][key]; 
 
    if (translatedText) { 
     
      if (element.tagName === 'TITLE' || key === 'testimonials-title') { 
        element.innerHTML = translatedText; 
      } 

      else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) { 
        element.setAttribute('placeholder', translatedText); 
      } 
  
      else { 
        element.textContent = translatedText; 
      } 
    } 
  }); 
   
  localStorage.setItem('language', lang); 
} 
 
const savedLanguage = localStorage.getItem('language'); 
if (savedLanguage) { 
  applyLanguage(savedLanguage); 
} else { 
  applyLanguage('en'); 
} 
 
document.querySelectorAll('.lang-switch').forEach(item => { 
  item.addEventListener('click', (e) => { 
    e.preventDefault(); 
    const newLang = item.getAttribute('data-lang'); 
    applyLanguage(newLang); 
  }); 
});