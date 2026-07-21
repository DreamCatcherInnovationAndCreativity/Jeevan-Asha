// ----------------------------------------------
// Jeevan Asha Nursing Home interactive experience
// ----------------------------------------------

const departments = [
  {
    title: 'Cardiology',
    icon: 'fa-solid fa-heart-circle-plus',
    description: 'Advanced diagnostics and expert cardiac rehabilitation.'
  },
  {
    title: 'Orthopaedics',
    icon: 'fa-solid fa-bone',
    description: 'Joint care, sports injury treatment, and mobility programs.'
  },
  {
    title: 'Pediatrics',
    icon: 'fa-solid fa-baby',
    description: 'Child-friendly treatment plans and preventive wellness.'
  },
  {
    title: 'Neurology',
    icon: 'fa-solid fa-brain',
    description: 'Precision care for stroke, seizures, and neurological recovery.'
  },
  {
    title: 'Oncology',
    icon: 'fa-solid fa-ribbon',
    description: 'Comprehensive cancer support and coordinated treatment pathways.'
  },
  {
    title: 'Emergency',
    icon: 'fa-solid fa-truck-medical',
    description: 'Fast response units and trauma support, 24 hours every day.'
  }
];

const doctors = [
  {
    name: 'Dr. Asha Menon',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
    bio: 'Expert in preventive care and minimally invasive heart procedures.'
  },
  {
    name: 'Dr. Rohan Kapoor',
    specialty: 'Orthopaedics',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80',
    bio: 'Specialist in joint replacement and accelerated rehabilitation.'
  },
  {
    name: 'Dr. Meera Iyer',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80',
    bio: 'Trusted caregiver for children and adolescent wellness journeys.'
  },
  {
    name: 'Dr. Vijay Rao',
    specialty: 'Neurology',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80',
    bio: 'Renowned for stroke management and neurological rehabilitation.'
  }
];

const services = [
  {
    title: 'Advanced Diagnostics',
    icon: 'fa-solid fa-microscope',
    description: 'Digital imaging, pathology, and rapid test reporting.'
  },
  {
    title: 'Critical Care',
    icon: 'fa-solid fa-procedures',
    description: 'ICU support, ventilatory care, and post-operative monitoring.'
  },
  {
    title: 'Wellness Programs',
    icon: 'fa-solid fa-spa',
    description: 'Preventive screenings and long-term lifestyle support.'
  },
  {
    title: 'Home Nursing',
    icon: 'fa-solid fa-house-medical',
    description: 'A skilled team that brings compassionate care to your doorstep.'
  }
];

const packages = [
  {
    title: 'Basic Wellness',
    price: '₹2,500',
    details: 'Vitals, ECG, blood profile, and physician consultation.'
  },
  {
    title: 'Executive Screen',
    price: '₹5,999',
    details: 'Heart health, liver profile, diabetes screening, and lifestyle review.'
  },
  {
    title: 'Senior Care',
    price: '₹7,999',
    details: 'Mobility assessment, bone density, vision screening, and specialist review.'
  }
];

const testimonials = [
  {
    quote: 'The staff made our recovery journey calm, transparent, and deeply reassuring.',
    author: 'Nikhil & Family'
  },
  {
    quote: 'Appointments felt effortless, and the doctors were incredibly thoughtful and clear.',
    author: 'Priya S.'
  },
  {
    quote: 'From emergency admission to discharge, every step was handled professionally.',
    author: 'Arun V.'
  }
];

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'Yes. We work with leading insurers and help coordinate pre-authorizations where applicable.'
  },
  {
    question: 'Can I book a doctor online?',
    answer: 'Absolutely. Use the appointment form or call our reception team for same-day availability.'
  },
  {
    question: 'Is the emergency unit available 24/7?',
    answer: 'Yes. Ambulance support and trauma care are available at all hours.'
  }
];

const newsItems = [
  {
    title: 'New wellness screening program for seniors',
    summary: 'Our preventive care team has launched a home-friendly screening package for older adults.'
  },
  {
    title: 'Digital reports now available in the patient portal',
    summary: 'Patients can view summaries and downloadable documents directly from their secure dashboard.'
  }
];

const renderCards = (containerId, items, template) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(template).join('');
};

const createDepartmentMarkup = (department) => `
  <article class="card department-card reveal">
    <i class="${department.icon}"></i>
    <h3>${department.title}</h3>
    <p>${department.description}</p>
  </article>
`;

const createDoctorMarkup = (doctor) => `
  <article class="card doctor-card reveal">
    <img src="${doctor.image}" alt="${doctor.name}" />
    <div class="badge">${doctor.specialty}</div>
    <h3>${doctor.name}</h3>
    <p>${doctor.bio}</p>
  </article>
`;

const createServiceMarkup = (service) => `
  <article class="card service-card reveal">
    <i class="${service.icon}"></i>
    <h3>${service.title}</h3>
    <p>${service.description}</p>
  </article>
`;

const createPackageMarkup = (pkg) => `
  <article class="card package-card reveal">
    <h3>${pkg.title}</h3>
    <p class="badge">${pkg.price}</p>
    <p>${pkg.details}</p>
  </article>
`;

const createTestimonialMarkup = (item) => `
  <article class="card testimonial-card reveal">
    <p>“${item.quote}”</p>
    <h3>${item.author}</h3>
  </article>
`;

const createFaqMarkup = (item, index) => `
  <div class="faq-item ${index === 0 ? 'active' : ''}">
    <button class="faq-question" type="button" aria-expanded="${index === 0}">
      <span>${item.question}</span>
      <i class="fa-solid fa-plus"></i>
    </button>
    <div class="faq-answer">
      <p>${item.answer}</p>
    </div>
  </div>
`;

const createNewsMarkup = (item) => `
  <article class="news-item">
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
  </article>
`;

const populateContent = () => {
  renderCards('departmentsGrid', departments, createDepartmentMarkup);
  renderCards('servicesGrid', services, createServiceMarkup);
  renderCards('packagesGrid', packages, createPackageMarkup);
  renderCards('testimonialsGrid', testimonials, createTestimonialMarkup);
  renderCards('faqList', faqs, createFaqMarkup);
  renderCards('newsList', newsItems, createNewsMarkup);

  const doctorGrid = document.getElementById('doctorGrid');
  const filterSelect = document.getElementById('doctorFilter');
  const searchInput = document.getElementById('doctorSearch');

  const uniqueDepartments = [...new Set(doctors.map((doctor) => doctor.specialty))];
  filterSelect.innerHTML = `<option value="all">All departments</option>${uniqueDepartments
    .map((department) => `<option value="${department}">${department}</option>`)
    .join('')}`;

  const applyDoctorFilter = () => {
    const searchValue = searchInput.value.toLowerCase();
    const selectedDepartment = filterSelect.value;

    const filteredDoctors = doctors.filter((doctor) => {
      const matchesDepartment = selectedDepartment === 'all' || doctor.specialty === selectedDepartment;
      const matchesSearch = `${doctor.name} ${doctor.specialty} ${doctor.bio}`.toLowerCase().includes(searchValue);
      return matchesDepartment && matchesSearch;
    });

    doctorGrid.innerHTML = filteredDoctors.map(createDoctorMarkup).join('');
  };

  searchInput.addEventListener('input', applyDoctorFilter);
  filterSelect.addEventListener('change', applyDoctorFilter);
  applyDoctorFilter();
};

const setupNavigation = () => {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  navToggle?.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
};

const setupDarkMode = () => {
  const toggle = document.getElementById('darkModeToggle');
  const savedTheme = localStorage.getItem('jeevan-theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('jeevan-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
};

const setupRevealAnimations = () => {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
};

const setupFaq = () => {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('.faq-question');
    button?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach((entry) => entry.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
};

const setupForms = () => {
  const appointmentForm = document.getElementById('appointmentForm');
  const contactForm = document.getElementById('contactForm');
  const appointmentMessage = document.getElementById('formMessage');
  const contactMessage = document.getElementById('contactFormMessage');

  appointmentForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    appointmentMessage.textContent = 'Appointment request received. Our coordinator will contact you shortly.';
    appointmentForm.reset();
  });

  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    contactMessage.textContent = 'Thank you for reaching out. We will respond within one business day.';
    contactForm.reset();
  });
};

const setupBackToTop = () => {
  const button = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    button.style.display = window.scrollY > 500 ? 'flex' : 'none';
  });

  button?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

const setupChat = () => {
  const button = document.getElementById('chatBubble');
  button?.addEventListener('click', () => {
    alert('Our care team will be with you shortly. Please leave your contact details for a callback.');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  populateContent();
  setupNavigation();
  setupDarkMode();
  setupRevealAnimations();
  setupFaq();
  setupForms();
  setupBackToTop();
  setupChat();
});
