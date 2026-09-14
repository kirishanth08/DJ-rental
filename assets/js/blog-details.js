/**
 * SonicDrop - Blog Details Dynamic Data & Renderer
 * Populates blog-details.html dynamically based on URL query parameter: ?id=<article-slug>
 */

(function () {
  'use strict';

  const blogData = {
    'sound-dispersion': {
      id: 'sound-dispersion',
      title: 'How to Calculate Sound Dispersion for Glass Atriums and Outdoor Venues',
      category: 'ACOUSTICS & ENGINEERING',
      readTime: '7 min read',
      date: 'September 14, 2026',
      authorName: 'Elena Rostova',
      authorRole: 'Lead Sound Engineer, SonicDrop Audio',
      authorInitials: 'ER',
      heroBg: 'https://images.unsplash.com/photo-1517230878791-4d28214057c2?auto=format&fit=crop&w=1920&q=80',
      featuredImg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
      featuredImgAlt: 'Digital audio mixing console faders with illuminated meters in live room',
      lead: 'Every audio engineer dreads hearing the words: "Our reception is in a modern architectural venue featuring 30-foot floor-to-ceiling glass windows and marble floors." Glass and polished stone possess sound absorption coefficients near zero, creating reverberation times exceeding 3.5 seconds.',
      bodyHtml: `
        <p style="color: var(--text-secondary); line-height: 1.8;">
          When guests at the back of a reverberant ballroom complain they cannot understand the wedding speeches or MC announcements, the instinctive reaction of inexperienced operators is simply to push the master faders higher. This is the single worst action possible: pushing volume into a reflective room merely injects more chaotic energy into boundary walls.
        </p>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Instead, modern acoustic engineering relies on <strong>directional wave shaping</strong> and <strong>distributed delay speaker zones</strong>. By positioning compact line columns closer to listeners and applying millisecond time-alignment delays, speech reaches guests directly before destructive room reflections arrive.
        </p>

        <div class="p-4 rounded-4 my-4" style="background: var(--surface-color); border-left: 4px solid var(--primary-color); border-top: 1px solid var(--border-color); border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
          <h5 class="fw-bold text-gradient mb-2"><i class="bi bi-lightbulb-fill me-2"></i> The Inverse-Square Law in Practice</h5>
          <p class="small text-secondary mb-0">In an open-air outdoor venue, sound pressure levels drop by 6 dB for every doubling of distance from the source. To cover 120 feet without deafening front-row guests, multiple satellite delay towers operating at moderate volume are mathematically required.</p>
        </div>

        <h3 class="h4 fw-bold mt-5 mb-3" style="color: var(--text-primary);">The Physics of Time Alignment</h3>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Sound travels through sea-level air at approximately 1,130 feet per second (344 meters per second), varying slightly with temperature. When placing a satellite delay speaker 60 feet down the hall from the main DJ stage, sound from the main stage takes approximately <strong>53 milliseconds</strong> to arrive:
        </p>
        <div class="p-3 rounded-3 my-3 text-center" style="background: var(--surface-elevated); border: 1px dashed var(--border-color); font-family: var(--font-mono); font-size: 1.05rem; color: #38bdf8;">
          Delay Time (ms) = (Distance in Feet / 1.13) = 60 / 1.13 ≈ 53.1 ms
        </div>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          If the satellite speaker plays sound instantly without a 53ms delay, listeners between the speakers hear an uncomfortable double-beat echo (the Haas Effect). By delaying the satellite speaker by 53ms, sound from both sources merges into one cohesive, pristine acoustic wave.
        </p>
      `,
      takeaways: [
        'Never boost master volume to overcome room echo—use directional dispersion instead.',
        'Deploy distributed column arrays with millisecond time-alignment every 45–60 feet.',
        'Outdoor venues require cardioid subwoofers to avoid 6dB per-distance bass loss.'
      ]
    },

    'wedding-sound': {
      id: 'wedding-sound',
      title: 'The 5 Costly Sound Mistakes Made at Wedding Ceremonies',
      category: 'WEDDINGS & CELEBRATIONS',
      readTime: '5 min read',
      date: 'September 18, 2026',
      authorName: 'Marcus Vance',
      authorRole: 'Senior DJ & Production Coordinator',
      authorInitials: 'MV',
      heroBg: 'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&w=1920&q=80',
      featuredImg: 'https://images.unsplash.com/photo-1516900557549-41557d405adf?auto=format&fit=crop&w=1200&q=80',
      featuredImgAlt: 'Outdoor wedding ceremony setup with white microphone podium and floral arbor',
      lead: 'You have invested thousands in photography, florals, and attire. Yet at 40% of outdoor weddings, guests in the fourth row cannot hear a single word of the vows due to wind buffeting, microphone feedback, or frequency dropouts.',
      bodyHtml: `
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Wedding ceremonies present unique acoustic challenges that typical party DJs are ill-equipped to handle. Ceremonies are quiet, emotionally vulnerable moments where speeches cannot be re-recorded. Here are the 5 critical mistakes to avoid:
        </p>

        <h4 class="h5 fw-bold mt-4 text-gradient">1. Handheld Mics Blocking the Couple's Faces in Photos</h4>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Asking nervous couples to hold heavy dynamic microphones creates awkward posture and blocks facial expressions in thousand-dollar wedding photos. Instead, we mic the officiant with a discrete flesh-colored omnidirectional lavalier that picks up both the officiant and the couple\'s vows cleanly from 2–3 feet away.
        </p>

        <h4 class="h5 fw-bold mt-4 text-gradient">2. Cheap Foam Windscreens in Coastal Breeze</h4>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Standard foam covers do nothing against 10mph ocean breezes. Professional outdoor setups require high-density synthetic fur "deadcat" windjammers that diffuse air turbulence without muffling speech clarity.
        </p>

        <h4 class="h5 fw-bold mt-4 text-gradient">3. Wi-Fi & Smartphone Frequency Interference</h4>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Budget wireless systems operate on congested 2.4GHz bands. When 150 guests sit down with smartphones searching for venue Wi-Fi, budget mics drop out immediately. Always demand UHF digital systems with automated frequency agility.
        </p>

        <h4 class="h5 fw-bold mt-4 text-gradient">4. Speakers Placed Behind the Ceremony Arbor</h4>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Placing PA speakers directly behind the microphone guarantees ear-piercing squeals the moment the officiant speaks. Speakers must be placed forward of the mic plane and angled away from boundary walls.
        </p>

        <h4 class="h5 fw-bold mt-4 text-gradient">5. No Battery Backup for Remote Lawn Ceremonies</h4>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Running 300 feet of orange extension cords across wet grass is a massive tripping hazard and causes dangerous voltage drops. Our ceremony packages utilize isolated pure-sine lithium battery power stations for complete wireless independence.
        </p>
      `,
      takeaways: [
        'Use high-sensitivity discrete lavaliers to keep microphones out of ceremony photos.',
        'Insist on UHF digital wireless systems to avoid guest smartphone Wi-Fi dropouts.',
        'Employ high-density deadcat windjammers for all coastal and outdoor ceremonies.'
      ]
    },

    'cardioid-subwoofers': {
      id: 'cardioid-subwoofers',
      title: 'Why Cardioid Subwoofer Arrays Change Everything for Dance Floors',
      category: 'ACOUSTICS & HARDWARE',
      readTime: '6 min read',
      date: 'September 10, 2026',
      authorName: 'Elena Rostova',
      authorRole: 'Lead Sound Engineer, SonicDrop Audio',
      authorInitials: 'ER',
      heroBg: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1920&q=80',
      featuredImg: 'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80',
      featuredImgAlt: 'High-excursion concert subwoofer cabinets arranged in cardioid configuration',
      lead: 'Standard subwoofers are omnidirectional: they radiate as much intense bass energy backwards into the DJ booth and VIP tables as they throw forward onto the dancers. Cardioid arrays use phase cancellation to silence the rear.',
      bodyHtml: `
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Low frequencies below 100Hz have physical wavelengths between 11 and 35 feet. Because the sound waves are so large compared to the subwoofer box itself, sound wraps completely around the cabinet in a spherical 360-degree pattern.
        </p>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          The result? Turntables jump from acoustic feedback, microphone preamps rumble, and guests seated 15 feet behind the DJ cannot hear themselves talk—even though dancers 30 feet in front wish the bass hit harder.
        </p>

        <div class="p-4 rounded-4 my-4" style="background: var(--surface-color); border: 1px solid var(--border-color);">
          <h5 class="fw-bold mb-3" style="color: var(--secondary-color);"><i class="bi bi-diagram-3-fill me-2"></i> How Cardioid Cancellation Works</h5>
          <p class="small text-secondary mb-0">By placing one rear-facing subwoofer cabinet between two front-facing cabinets, inverting its electrical phase by 180 degrees, and delaying its signal by milliseconds, the rear-propagating sound waves cancel each other out completely. In front of the array, the sound waves sum together constructively, producing up to <strong>+3 dB forward punch and -20 dB rear attenuation</strong>.</p>
        </div>

        <h3 class="h4 fw-bold mt-5 mb-3" style="color: var(--text-primary);">Benefits for Weddings and Luxury Galas</h3>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          With a cardioid sub array deployed, the dance floor feels like a high-energy European nightclub with chest-thumping kick drums, while catering staff, bartenders, and conversation zones just 15 feet behind remain tranquil and conversational.
        </p>
      `,
      takeaways: [
        'Standard subwoofers radiate sound in 360 degrees, overwhelming areas behind the DJ.',
        'Cardioid arrays cancel up to 20 dB of rear low-end energy using 180-degree phase delay.',
        'Protects turntables from stylus rumble while keeping dining tables comfortable.'
      ]
    },

    'dmx-lighting-101': {
      id: 'dmx-lighting-101',
      title: 'DMX Lighting 101: Moving Heads vs. Static Architectural Washes',
      category: 'LIGHTING & PRODUCTION',
      readTime: '4 min read',
      date: 'August 28, 2026',
      authorName: 'Damon Brooks',
      authorRole: 'Lighting Designer & Master Electrician',
      authorInitials: 'DB',
      heroBg: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?auto=format&fit=crop&w=1920&q=80',
      featuredImg: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=1200&q=80',
      featuredImgAlt: 'Moving head lighting fixtures throwing dynamic color beam sweeps onto venue ceiling',
      lead: 'A common misconception is that "more lights equal a better party." In reality, blinding guests with random strobes during dinner ruins the mood. Modern DMX lighting choreographs every fixture to match the event\'s timeline.',
      bodyHtml: `
        <p style="color: var(--text-secondary); line-height: 1.8;">
          DMX512 is the universal digital protocol that controls intelligent lighting. Instead of lights running on erratic "sound-active" microphone modes that flicker randomly, a lighting operator programs designated scenes for every phase of your evening.
        </p>

        <h4 class="h5 fw-bold mt-4" style="color: var(--amber-accent);">Phase 1: Ambient Architectural Washes (Dinner & Cocktails)</h4>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          During cocktail hour and dinner, moving heads remain completely stationary, functioning as elegant warm-white pin-spots on the floral centerpieces and cake. Perimeter uplighting washes walls in tailored color schemes that complement the room\'s architecture.
        </p>

        <h4 class="h5 fw-bold mt-4" style="color: var(--accent-color);">Phase 2: The First Dance Spotlight</h4>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          As the couple takes the floor, overhead room lights dim to 10%. Moving heads track smoothly onto the center of the dance floor, casting romantic custom lace or starlight breakup patterns through light haze.
        </p>

        <h4 class="h5 fw-bold mt-4" style="color: var(--primary-color);">Phase 3: High-Energy Dance Sweeps</h4>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          When the party peaks, robotic moving heads pan 540 degrees across the ceiling, casting rapid prism splits and rhythmic color pulses that synchronize with bass drops without blinding seated elders.
        </p>
      `,
      takeaways: [
        'DMX control allows seamless transitions between elegant dinner ambient and club energy.',
        'Avoid random "sound-active" flashing modes that cause visual fatigue.',
        'Pin-spots and perimeter washes transform venue photography dramatically.'
      ]
    },

    'corporate-audio-rider': {
      id: 'corporate-audio-rider',
      title: 'The Audio Rider Checklist for High-Stakes Corporate Summits',
      category: 'CORPORATE PRODUCTION',
      readTime: '5 min read',
      date: 'August 19, 2026',
      authorName: 'Sarah Chen',
      authorRole: 'Technical Director & Corporate AV Lead',
      authorInitials: 'SC',
      heroBg: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80',
      featuredImg: 'https://images.unsplash.com/photo-1481886756534-97af88ccb438?auto=format&fit=crop&w=1200&q=80',
      featuredImgAlt: 'Corporate podium microphone and audio visual distribution console in executive ballroom',
      lead: 'When Fortune 500 CEOs take the stage, a microphone squeal or dropped teleprompter feed is not just embarrassing—it damages brand reputation. Here is the technical checklist our team executes for zero-defect summits.',
      bodyHtml: `
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Corporate keynote audio demands 100% intelligibility and failsafe redundancy. Unlike musical concerts where slight distortion can be forgiven, spoken executive presentations require pristine clarity across every octave of human speech.
        </p>

        <div class="row g-3 my-4">
          <div class="col-md-6">
            <div class="p-3 rounded-3 h-100" style="background: var(--surface-color); border: 1px solid var(--border-color);">
              <h6 class="fw-bold text-info"><i class="bi bi-shield-lock-fill me-2"></i> Dual-Mic Podium Redundancy</h6>
              <p class="small text-secondary mb-0">Never rely on a single gooseneck microphone. Always deploy paired phase-matched cardioid elements connected to independent mixer channels.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-3 rounded-3 h-100" style="background: var(--surface-color); border: 1px solid var(--border-color);">
              <h6 class="fw-bold text-warning"><i class="bi bi-broadcast-pin me-2"></i> Press-Box Multi-Feed Splits</h6>
              <p class="small text-secondary mb-0">Transformer-isolated multi-channel press boxes prevent ground hum when media crews plug their broadcast cameras into your FOH feed.</p>
            </div>
          </div>
        </div>

        <h3 class="h4 fw-bold mt-4 mb-3" style="color: var(--text-primary);">Acoustic Speech Gating and Automixing</h3>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          When hosting an 8-person executive panel discussion, having 8 open microphones creates hollow phase cancellation. We utilize Dugan Speech Automixing algorithms that instantaneously attenuate inactive mics in real time, keeping the conversation crisp and feedback-free.
        </p>
      `,
      takeaways: [
        'Deploy redundant paired gooseneck microphones on all main executive podiums.',
        'Use Dugan automixing to prevent hollow comb-filtering on multi-person panels.',
        'Provide transformer-isolated distribution splits for media and broadcast feeds.'
      ]
    },

    'reading-the-room': {
      id: 'reading-the-room',
      title: 'Reading the Room: The Psychological Science of DJ Set Building',
      category: 'DJ STRATEGY',
      readTime: '6 min read',
      date: 'August 05, 2026',
      authorName: 'Marcus Vance',
      authorRole: 'Senior DJ & Production Coordinator',
      authorInitials: 'MV',
      heroBg: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1920&q=80',
      featuredImg: 'https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?auto=format&fit=crop&w=1200&q=80',
      featuredImgAlt: 'DJ overlooking vibrant dancing audience reading crowd energy on illuminated stage',
      lead: 'Any amateur can press play on Spotify\'s Top 50. But keeping a multi-generational crowd dancing for 4 consecutive hours requires mastery of emotional pacing, harmonic mixing, and body language psychology.',
      bodyHtml: `
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Crowd reading is the subtle art of observing micro-expressions on the dance floor. Are guests singing along? Are people nodding their heads at the bar? Or are dancers checking their watches?
        </p>

        <h4 class="h5 fw-bold mt-4 text-gradient">The "Peak-Valley" Energy Architecture</h4>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          A common rookie mistake is playing high-tempo 128 BPM festival bangers nonstop. Human physiology cannot sustain maximum cardiovascular exertion indefinitely. Without intentional musical "valleys," guests become exhausted and leave the dance floor for good.
        </p>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Master DJs program 20-minute energy waves: building from infectious funk and nostalgic throwback anthems to euphoric peak drops, followed by a mid-tempo singalong that lets guests catch their breath before launching the next climb.
        </p>

        <h4 class="h5 fw-bold mt-4 text-gradient">Bridging Generational Gaps</h4>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          At weddings, grandparents, parents, and college friends share the floor. We weave seamless harmonic bridges: transitioning from Motown classics (Stevie Wonder, Earth Wind & Fire) into contemporary Bruno Mars and Dua Lipa funk, uniting all ages in collective celebration.
        </p>
      `,
      takeaways: [
        'High-energy bangers must be balanced with 20-minute rhythmic energy waves.',
        'Harmonic key-mixing allows seamless transitions across disparate decades.',
        'Watch bar and perimeter body language to detect crowd fatigue before dance floors thin.'
      ]
    },

    'power-conditioning': {
      id: 'power-conditioning',
      title: 'Power Conditioning & Voltage Drop Protection for Outdoor Rigs',
      category: 'HARDWARE & SAFETY',
      readTime: '7 min read',
      date: 'July 22, 2026',
      authorName: 'Elena Rostova',
      authorRole: 'Lead Sound Engineer, SonicDrop Audio',
      authorInitials: 'ER',
      heroBg: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1920&q=80',
      featuredImg: 'assets/img/power-conditioning-rig.jpg',
      featuredImgAlt: 'Heavy duty electrical power distribution box and circuit breaker panel on stage',
      lead: 'Digital consoles and Class-D amplifiers are computers with speakers attached. A 10-volt brownout or dirty generator frequency fluctuation can instantly reset digital consoles mid-event. Here is how we ensure pristine power.',
      bodyHtml: `
        <p style="color: var(--text-secondary); line-height: 1.8;">
          When hosting events in remote vineyard settings, private ranches, or beachfront pavilions, power is often drawn from shared utility poles or construction-grade portable generators.
        </p>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          When catering crews turn on high-draw commercial ovens and coffee makers on shared circuits, voltage plummets from 120V to 102V. While incandescent light bulbs simply dim, digital audio processors crash and reboot—silencing the music for 45 awkward seconds.
        </p>

        <div class="p-4 rounded-4 my-4" style="background: var(--surface-color); border: 1px solid var(--border-color);">
          <h5 class="fw-bold text-warning mb-2"><i class="bi bi-cpu-fill me-2"></i> True Online Double-Conversion UPS</h5>
          <p class="small text-secondary mb-0">We route all delicate FOH consoles and wireless receivers through double-conversion Uninterruptible Power Supplies. These units continuously convert incoming AC power to DC battery power, then regenerate a pure, synthetic 120V 60Hz sine wave completely isolated from generator noise.</p>
        </div>

        <h3 class="h4 fw-bold mt-4 mb-3" style="color: var(--text-primary);">Heavy-Gauge Copper Cable Runs</h3>
        <p style="color: var(--text-secondary); line-height: 1.8;">
          Standard 16-gauge home extension cords create dangerous resistance over distance. For runs over 100 feet, we deploy heavy 10-gauge and 12-gauge SOOW industrial copper cables to guarantee zero voltage drop under heavy subwoofer peak demands.
        </p>
      `,
      takeaways: [
        'Never share electrical circuits with catering warmers or coffee brewers.',
        'Use double-conversion online UPS systems to regenerate clean pure-sine AC power.',
        'Deploy heavy 10-gauge SOOW power cabling for long distances to prevent voltage drop.'
      ]
    }
  };

  function getQueryArticleId() {
    const params = new URLSearchParams(window.location.search);
    const idParam = (params.get('id') || params.get('article') || '').toLowerCase().trim();
    if (idParam && blogData[idParam]) {
      return idParam;
    }
    return 'sound-dispersion'; // default
  }

  function renderArticle(articleKey) {
    const data = blogData[articleKey] || blogData['sound-dispersion'];

    // Document title
    document.title = `${data.title} | SonicDrop Insights`;

    // Hero Section
    const heroSec = document.getElementById('articleHero') || document.querySelector('.page-hero');
    if (heroSec && data.heroBg) {
      heroSec.style.backgroundImage = `url('${data.heroBg}')`;
    }

    const breadcrumbEl = document.getElementById('articleBreadcrumbActive');
    if (breadcrumbEl) breadcrumbEl.textContent = data.title;

    const catBadgeEl = document.getElementById('articleCategoryBadge');
    if (catBadgeEl) catBadgeEl.textContent = data.category;

    const readTimeEl = document.getElementById('articleReadTime');
    if (readTimeEl) readTimeEl.innerHTML = `<i class="bi bi-clock me-1"></i> ${data.readTime}`;

    const dateEl = document.getElementById('articleDate');
    if (dateEl) dateEl.innerHTML = `<i class="bi bi-calendar3 me-1"></i> ${data.date}`;

    const titleEl = document.getElementById('articleTitle');
    if (titleEl) titleEl.textContent = data.title;

    // Author
    const authorInitialsEl = document.getElementById('articleAuthorInitials');
    if (authorInitialsEl) authorInitialsEl.textContent = data.authorInitials;

    const authorNameEl = document.getElementById('articleAuthorName');
    if (authorNameEl) authorNameEl.textContent = data.authorName;

    const authorRoleEl = document.getElementById('articleAuthorRole');
    if (authorRoleEl) authorRoleEl.textContent = data.authorRole;

    // Featured Image & Lead
    const featImgEl = document.getElementById('articleFeaturedImg');
    if (featImgEl) {
      featImgEl.src = data.featuredImg;
      featImgEl.alt = data.featuredImgAlt;
    }

    const leadEl = document.getElementById('articleLead');
    if (leadEl) leadEl.textContent = data.lead;

    const bodyEl = document.getElementById('articleBodyContent');
    if (bodyEl) bodyEl.innerHTML = data.bodyHtml;

    // Takeaways
    const takeawaysList = document.getElementById('articleTakeawaysList');
    if (takeawaysList && data.takeaways) {
      takeawaysList.innerHTML = data.takeaways.map((item) => `
        <li><i class="bi bi-check2 text-info me-2"></i> ${item}</li>
      `).join('');
    }

    // Render Recent / Related Articles in Sidebar
    const relatedContainer = document.getElementById('sidebarRecentArticles');
    if (relatedContainer) {
      const otherArticles = Object.values(blogData).filter((a) => a.id !== data.id).slice(0, 4);
      relatedContainer.innerHTML = otherArticles.map((art) => `
        <a href="blog-details.html?id=${art.id}" class="d-flex gap-3 text-decoration-none article-switch-link ${art.id === data.id ? 'active' : ''}">
          <img src="${art.featuredImg}" alt="${art.title}" class="rounded-3" style="width: 70px; height: 60px; object-fit: cover;">
          <div>
            <h6 class="mb-1 text-primary-hover small fw-bold" style="color: var(--text-primary); line-height: 1.3;">
              ${art.title}
            </h6>
            <small class="text-muted"><i class="bi bi-clock"></i> ${art.readTime}</small>
          </div>
        </a>
      `).join('');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const currentId = getQueryArticleId();
    renderArticle(currentId);

    window.addEventListener('popstate', () => {
      renderArticle(getQueryArticleId());
    });

    // Intercept clicks on sidebar article switch links to provide instant transitions
    document.addEventListener('click', (e) => {
      const artLink = e.target.closest('.article-switch-link');
      if (artLink) {
        const href = artLink.getAttribute('href');
        if (href && href.includes('?id=')) {
          e.preventDefault();
          const targetId = href.split('?id=')[1];
          if (targetId && blogData[targetId]) {
            window.switchArticleView(targetId);
          }
        }
      }
    });
  });

  // Expose globally for interactive article clicks without full reload
  window.switchArticleView = function (articleId) {
    if (blogData[articleId]) {
      const url = new URL(window.location);
      url.searchParams.set('id', articleId);
      window.history.pushState({}, '', url);
      renderArticle(articleId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
})();
