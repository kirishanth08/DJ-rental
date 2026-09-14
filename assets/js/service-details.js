/**
 * SonicDrop - Service Details Dynamic Data & Renderer
 * Populates service-details.html dynamically based on URL query parameter: ?service=<id>
 */

(function () {
  'use strict';

  const servicesData = {
    dj: {
      id: 'dj',
      name: 'Professional DJ Booking',
      breadcrumb: 'DJ Booking Service',
      heroTitle: 'Professional <span class="text-gradient">DJ Booking Service</span>',
      heroLead: 'Resident club talent, seamless multi-genre transitions, and concert-grade audio consoles tailored to your crowd\'s unique energy.',
      heroBg: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=1920&q=80',
      tag: 'TALENT & ARTISTRY',
      telemetry: '320kbps WAV // DUAL CDJ',
      overviewBadgeIcon: 'bi-vinyl',
      overviewBadgeText: 'Pure Live Mixing',
      overviewHeading: 'Artistry Behind <span class="text-gradient">The Decks</span>',
      overviewImg: 'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Professional DJ controller console with illuminated jog wheels and headphones',
      matchImg: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'High-energy DJ performance with vibrant laser lights and dancing party crowd',
      overviewP1: 'A truly memorable celebration requires more than pushing play on a streaming playlist. Our resident DJs possess over 8 years of live crowd-reading mastery, harmonic key-mixing, and instantaneous tempo transitions.',
      overviewP2: 'Whether you want sophisticated deep house for cocktail hour, upbeat motown and retro classics during dinner, or festival-grade EDM and hip-hop to pack the dance floor late into the night, we curate every track to fit your exact vision.',
      feature1Icon: 'bi-music-note-beamed text-info',
      feature1Title: 'Multi-Genre Flow',
      feature1Desc: 'Top 40, House, Disco, Hip-Hop & Latin',
      feature2Icon: 'bi-mic text-gradient',
      feature2Title: 'MC Certified',
      feature2Desc: 'Polished, tasteful ceremony & reception hosting',
      inclusionsHeading: 'What Every <span class="text-gradient">DJ Booking Includes</span>',
      inclusionsSub: 'No hidden fees, no surprise rental add-ons. Our DJ booking service comes fully self-contained with complete sound and lighting infrastructure.',
      inclusions: [
        {
          icon: 'bi-disc',
          color: 'var(--primary-color)',
          title: 'Flagship DJ Booth Rig',
          desc: 'Pioneer CDJ-3000 multiplayers and DJM-A9 digital mixer in a sleek custom facade that completely conceals cabling.'
        },
        {
          icon: 'bi-speaker',
          color: 'var(--secondary-color)',
          title: 'Full PA Sound Rig',
          desc: 'Two 15" high-definition active tops plus an 18" subwoofer tuned for warm, chest-thumping bass without ear fatigue.'
        },
        {
          icon: 'bi-mic-fill',
          color: 'var(--accent-color)',
          title: 'Dual Wireless Microphones',
          desc: 'Shure digital wireless hand-held microphones for toasts, speeches, announcements, and ceremony officiants.'
        },
        {
          icon: 'bi-lightbulb',
          color: 'var(--amber-accent)',
          title: 'Dance Floor Wash Lighting',
          desc: 'Two sound-active intelligent LED lighting fixtures that bathe the dance floor in synchronized movement.'
        },
        {
          icon: 'bi-clipboard2-check',
          color: '#10b981',
          title: 'Music Planning Portal',
          desc: 'Pre-event online consultation to submit your must-play anthems, do-not-play list, and timeline milestones.'
        },
        {
          icon: 'bi-shield-check',
          color: '#8b5cf6',
          title: 'Hot-Swappable Backup Gear',
          desc: 'A complete duplicate mixer and backup audio laptop remain on-site in flight cases for 100% peace of mind.'
        }
      ],
      idealTitle: 'Ideal Event Types for <span class="text-gradient">Our DJ Service</span>',
      idealDesc: 'Our artists tailor their visual presentation, volume dynamics, and musical style to harmonize with the formality of your occasion.',
      accordions: [
        {
          id: 'match1',
          icon: 'bi-suit-heart-fill text-danger',
          title: 'Weddings & Anniversaries',
          body: 'Discreet cocktail acoustic sets, seamless grand entrance cues, dinner background ambience, and high-energy dance sets spanning all generations.'
        },
        {
          id: 'match2',
          icon: 'bi-briefcase-fill text-info',
          title: 'Corporate Galas & Product Launches',
          body: 'Sophisticated ambient lounge, walk-up stingers for award recipients, executive speech clarity, and upbeat celebration dance floors.'
        },
        {
          id: 'match3',
          icon: 'bi-balloon-fill text-warning',
          title: 'Milestone Birthdays & Private Parties',
          body: 'Customized retro throwback sets (80s, 90s, 2000s) or current club bangers tailored strictly to the guest of honor\'s favorite genres.'
        }
      ]
    },

    sound: {
      id: 'sound',
      name: 'Sound System Rental',
      breadcrumb: 'Concert Sound Rental',
      heroTitle: 'Concert-Grade <span class="text-gradient">Sound System Rental</span>',
      heroLead: 'Touring active line arrays, high-excursion subwoofers, and digital stage boxes delivering up to 138 dB of crystal-clear acoustic fidelity.',
      heroBg: 'https://images.unsplash.com/photo-1520523839898-5071282543e1?auto=format&fit=crop&w=1920&q=80',
      tag: 'CONCERT ACOUSTICS',
      telemetry: '138 dB SPL // ZERO FEEDBACK',
      overviewBadgeIcon: 'bi-soundwave',
      overviewBadgeText: 'Precision Acoustic Modeling',
      overviewHeading: 'Warm Bass, <span class="text-gradient">Pristine Vocals</span>',
      overviewImg: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Professional multi-channel digital audio mixing console with lit faders',
      matchImg: 'assets/img/sound-system-rig.jpg',
      matchImgAlt: 'Concert stage stacked subwoofers and active line array sound system',
      overviewP1: 'Bad sound ruins good events. Muffled speeches, screeching feedback, and thin bass diminish the guest experience. Our sound rigs utilize calibrated digital signal processing (DSP) to deliver concert-level punch on the dance floor while maintaining comfortable speech intelligibility everywhere else.',
      overviewP2: 'From intimate 100-guest ballroom galas to 5,000-attendee outdoor festivals, our sound engineers calculate venue cubic volume, surface reflections, and crowd absorption to deploy the ideal speaker count and delay tower positioning.',
      feature1Icon: 'bi-speaker-fill text-info',
      feature1Title: 'Active Line Arrays',
      feature1Desc: 'Curved vertical arrays for even throw without dead zones',
      feature2Icon: 'bi-reception-4 text-gradient',
      feature2Title: 'RF Digital Wireless',
      feature2Desc: 'Shure Axient & Sennheiser frequency-coordinated racks',
      inclusionsHeading: 'What Every <span class="text-gradient">Sound Rental Includes</span>',
      inclusionsSub: 'Complete turnkey audio infrastructure including certified technicians, transport, and on-site acoustic calibration.',
      inclusions: [
        {
          icon: 'bi-speaker',
          color: 'var(--secondary-color)',
          title: 'High-Output Array Tops',
          desc: 'Touring active point-source and curved line arrays providing flat frequency response from 50Hz to 20kHz.'
        },
        {
          icon: 'bi-soundwave',
          color: 'var(--primary-color)',
          title: 'High-Excursion Subwoofers',
          desc: '18" and dual 21" cardioid subwoofer arrays delivering visceral bass down to 28Hz without shaking the DJ booth.'
        },
        {
          icon: 'bi-sliders',
          color: 'var(--amber-accent)',
          title: 'Digital Mixing Console',
          desc: 'Allen & Heath / Pioneer digital consoles with wireless iPad remote control for real-time adjustments anywhere in the room.'
        },
        {
          icon: 'bi-mic-fill',
          color: '#10b981',
          title: 'Frequency-Coordinated RF Mics',
          desc: 'Multi-channel wireless handheld and lavalier microphones with zero interference or dropouts.'
        },
        {
          icon: 'bi-tools',
          color: 'var(--accent-color)',
          title: 'FOH Sound Engineer On-Site',
          desc: 'Dedicated sound technician on-site throughout your event to manage volume levels, EQ, and speech cues.'
        },
        {
          icon: 'bi-shield-check',
          color: '#8b5cf6',
          title: '100% Signal Redundancy',
          desc: 'Dual Dante network lines and analog failover paths ensuring uninterrupted sound delivery under all conditions.'
        }
      ],
      idealTitle: 'Ideal Applications for <span class="text-gradient">Our Audio Rigs</span>',
      idealDesc: 'Engineered for events requiring absolute vocal clarity and dance-floor impact.',
      accordions: [
        {
          id: 'soundMatch1',
          icon: 'bi-building text-info',
          title: 'Large Ballrooms & Reverberant Atriums',
          body: 'Directional acoustic dispersion overcomes reflective marble and glass, ensuring every word of speeches is crystal-clear.'
        },
        {
          id: 'soundMatch2',
          icon: 'bi-tree-fill text-success',
          title: 'Outdoor Festivals & Estate Lawns',
          body: 'High-throw line arrays distribute high-SPL music evenly across open fields without neighborhood boundary noise bleed.'
        },
        {
          id: 'soundMatch3',
          icon: 'bi-mic-fill text-warning',
          title: 'Concerts & Live Band Performances',
          body: 'Multi-input digital stage boxes, multi-monitor wedge feeds, and in-ear monitor transmitter support.'
        }
      ]
    },

    lighting: {
      id: 'lighting',
      name: 'Intelligent Lighting & FX',
      breadcrumb: 'Lighting & Visual FX',
      heroTitle: 'Intelligent <span class="text-gradient">Lighting & Ambiance</span>',
      heroLead: 'Choreographed DMX moving heads, architectural wireless battery uplighting, and sound-reactive dance floor lighting environments.',
      heroBg: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?auto=format&fit=crop&w=1920&q=80',
      tag: 'VISUAL ATMOSPHERE',
      telemetry: 'DMX512 // 16M COLORS',
      overviewBadgeIcon: 'bi-lightbulb',
      overviewBadgeText: 'Dynamic Color Choreography',
      overviewHeading: 'Illuminating Your <span class="text-gradient">Celebration</span>',
      overviewImg: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Intelligent stage moving beam lighting and laser effects across dance floor',
      matchImg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'Intelligent DMX moving light beams on dance floor',
      overviewP1: 'Lighting dictates emotion. When guests enter your reception, warm amber and rose architectural uplighting sets a welcoming, luxury tone. Later, when the dance floor opens, synchronized beam sweeps and strobes pulse to the music.',
      overviewP2: 'Our lighting designers utilize wireless DMX controllers to program bespoke lighting scenes that evolve throughout the night, seamlessly shifting from elegant dinner glow to high-energy nightclub energy at the flick of a fader.',
      feature1Icon: 'bi-cpu text-warning',
      feature1Title: 'Sound-Reactive DMX',
      feature1Desc: 'Moving heads synchronized live to beat drops and musical builds',
      feature2Icon: 'bi-battery-charging text-gradient',
      feature2Title: '100% Wireless Uplights',
      feature2Desc: 'Battery-powered RGBAW fixtures without ugly wall cords',
      inclusionsHeading: 'What Every <span class="text-gradient">Lighting Package Includes</span>',
      inclusionsSub: 'Complete visual design with wireless fixtures, custom color matching, and live scene control.',
      inclusions: [
        {
          icon: 'bi-lightbulb-fill',
          color: 'var(--amber-accent)',
          title: 'Robotic Moving Head Beams',
          desc: 'High-output LED moving heads throwing crisp gobos, prism splits, and dynamic aerial beam patterns.'
        },
        {
          icon: 'bi-palette-fill',
          color: 'var(--accent-color)',
          title: 'Architectural Uplighting',
          desc: 'Up to 24 wireless battery RGBAW+UV uplights placed along perimeter walls and pillars in your exact wedding colors.'
        },
        {
          icon: 'bi-stars',
          color: 'var(--primary-color)',
          title: 'Pin-Spot Cake & Head Table Focus',
          desc: 'Narrow magnetic beam lights highlighting the wedding cake, floral arrangements, and sweetheart table.'
        },
        {
          icon: 'bi-cloud-haze2',
          color: 'var(--secondary-color)',
          title: 'Water-Based Continuous Hazer',
          desc: 'Ultra-fine odorless atmospheric haze that makes lighting beams razor-sharp without triggering fire alarms.'
        },
        {
          icon: 'bi-sliders',
          color: '#10b981',
          title: 'Dedicated Lighting Operator',
          desc: 'Live lighting technician orchestrating scenes for grand entrance, dinner, speeches, first dance, and open dancing.'
        },
        {
          icon: 'bi-shield-check',
          color: '#8b5cf6',
          title: 'Safety Flight Case Infrastructure',
          desc: 'Heavy-duty baseplates, safety steel aircraft cables on all overhead fixtures, and low-profile cable ramps.'
        }
      ],
      idealTitle: 'Transforming <span class="text-gradient">Every Setting</span>',
      idealDesc: 'Lighting adapts to any architecture, indoor ballroom, tent, or historic venue.',
      accordions: [
        {
          id: 'lightMatch1',
          icon: 'bi-gem text-info',
          title: 'Luxury Hotel Ballrooms & Tents',
          body: 'Converts plain white drapery and neutral walls into immersive custom color palettes matching your floral and decor palette.'
        },
        {
          id: 'lightMatch2',
          icon: 'bi-building text-warning',
          title: 'Industrial Warehouses & Lofts',
          body: 'Highlights raw brickwork, metal columns, and vaulted ceilings with dramatic architectural contrast.'
        },
        {
          id: 'lightMatch3',
          icon: 'bi-moon-stars text-primary',
          title: 'Outdoor Courtyards & Garden Parties',
          body: 'IP65 weather-rated uplighting illuminates ancient trees, stone fountains, and pergolas after dusk.'
        }
      ]
    },

    fx: {
      id: 'fx',
      name: 'Celebration Special FX',
      breadcrumb: 'Special FX & Clouds',
      heroTitle: 'Celebration <span class="text-gradient">Special Effects & Clouds</span>',
      heroLead: 'Create picture-perfect first dances and dramatic grand exits with dancing-on-clouds dry ice fog and indoor-safe cold spark fountains.',
      heroBg: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80',
      tag: 'PHOTO HIGHLIGHTS',
      telemetry: 'COLD-TOUCH // ZERO RESIDUE',
      overviewBadgeIcon: 'bi-stars',
      overviewBadgeText: 'Safe & Breath-Taking FX',
      overviewHeading: 'Unforgettable <span class="text-gradient">Visual Moments</span>',
      overviewImg: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Indoor cold spark fountain sparklers and atmospheric celebration effects',
      matchImg: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'Dancing on clouds and cold sparks special effects at party',
      overviewP1: 'Your wedding first dance, corporate product unveiling, or midnight countdown deserves a breathtaking centerpiece moment. Our celebration effects produce viral, editorial-worthy photos and video memories that leave guests in awe.',
      overviewP2: 'Safety is our highest priority. Our cold spark machines are completely non-pyrotechnic, cool to the touch, and 100% indoor-approved. Our "dancing on clouds" fog uses genuine solid CO2 dry ice that stays strictly knee-level without rising or triggering venue smoke sensors.',
      feature1Icon: 'bi-fire text-warning',
      feature1Title: 'Non-Hazardous Cold Sparks',
      feature1Desc: 'Zero smoke, zero odor, safe to touch, and venue-approved',
      feature2Icon: 'bi-cloud-fill text-info',
      feature2Title: 'Genuine Dry Ice Clouds',
      feature2Desc: 'Heavy ground fog that dissipates cleanly without damp residue',
      inclusionsHeading: 'What Every <span class="text-gradient">FX Package Includes</span>',
      inclusionsSub: 'Complete technician-operated deployment with full venue permits, fire marshal compliance, and timing rehearsal.',
      inclusions: [
        {
          icon: 'bi-stars',
          color: 'var(--amber-accent)',
          title: 'Dual or Quad Cold Spark Machines',
          desc: 'Indoor-rated titanium-alloy spark machines shooting adjustable 6ft to 12ft golden fountain streams.'
        },
        {
          icon: 'bi-cloud-haze-fill',
          color: 'var(--secondary-color)',
          title: 'High-Capacity Dry Ice Fogger',
          desc: 'Genuine hot-water dry ice chamber generating thick, pure white knee-high clouds covering up to 2,500 sq ft.'
        },
        {
          icon: 'bi-controller',
          color: 'var(--primary-color)',
          title: 'Wireless DMX Cue Controller',
          desc: 'Instant push-button trigger synchronized to the exact musical crescendo or dip during your first dance.'
        },
        {
          icon: 'bi-person-badge',
          color: '#10b981',
          title: 'Certified FX Technician',
          desc: 'Trained operator handling loading, dry ice temperature monitoring, cleanup, and live firing.'
        },
        {
          icon: 'bi-file-earmark-check',
          color: 'var(--accent-color)',
          title: 'Venue Compliance Certificate',
          desc: 'Full documentation and $2M liability policy naming your venue as additional insured.'
        },
        {
          icon: 'bi-camera-video',
          color: '#8b5cf6',
          title: 'Photographer Coordination',
          desc: 'Pre-dance sync with your photo and video team to ensure optimal angles and camera exposure settings.'
        }
      ],
      idealTitle: 'Iconic Moments for <span class="text-gradient">Special FX</span>',
      idealDesc: 'Tailored for milestone milestones that demand unforgettable photography.',
      accordions: [
        {
          id: 'fxMatch1',
          icon: 'bi-heart-fill text-danger',
          title: 'The Wedding First Dance',
          body: 'Float across the floor surrounded by rolling white clouds as golden cold spark fountains shoot upward on the musical bridge.'
        },
        {
          id: 'fxMatch2',
          icon: 'bi-door-open-fill text-warning',
          title: 'Grand Entrances & Farewell Exits',
          body: 'Dramatic spark runway lining your grand entrance into the ballroom or creating a dazzling send-off tunnel at midnight.'
        },
        {
          id: 'fxMatch3',
          icon: 'bi-megaphone-fill text-info',
          title: 'Award Galas & Stage Keynotes',
          body: 'Powerful bursts when celebrating annual awards winners, unveiling new products, or launching concert encores.'
        }
      ]
    },

    hybrid: {
      id: 'hybrid',
      name: 'Live Musician & DJ Hybrid',
      breadcrumb: 'Live Fusion Sets',
      heroTitle: 'Live Musician & <span class="text-gradient">DJ Hybrid Fusion</span>',
      heroLead: 'Elevate your celebration with charismatic roaming saxophonists, percussionists, and vocalists improvising live alongside our resident club DJs.',
      heroBg: 'assets/img/hybrid-dj-musician.jpg',
      tag: 'LIVE ENTERTAINMENT',
      telemetry: 'LIVE SAX + CDJ // WIRELESS ROAM',
      overviewBadgeIcon: 'bi-music-note-list',
      overviewBadgeText: 'The Best of Both Worlds',
      overviewHeading: 'Club Beats Meet <span class="text-gradient">Live Instrumentation</span>',
      overviewImg: 'https://images.unsplash.com/photo-1525994886773-080587e161c2?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Live saxophonist and jazz musician improvising with energetic live lighting',
      matchImg: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'Live musician and DJ performing together in front of guests',
      overviewP1: 'Why choose between a DJ and a live band when you can have the best elements of both? Our Live Musician Hybrid sets blend the infinite song selection and continuous energy of a top club DJ with the electric visual showmanship of live instrumentalists.',
      overviewP2: 'Equipped with wireless horn transmitters, our saxophonists and bongo players roam freely through your crowd, performing right next to guests on the dance floor and improvising soaring solos over house, funk, disco, and contemporary chart hits.',
      feature1Icon: 'bi-broadcast text-info',
      feature1Title: 'Wireless Freedom',
      feature1Desc: 'Musicians roam directly into the crowd without restrictive instrument cables',
      feature2Icon: 'bi-lightning-charge-fill text-gradient',
      feature2Title: 'Organic Improvisation',
      feature2Desc: 'Live riffs harmonized in real time with the DJ\'s active track selection',
      inclusionsHeading: 'What Every <span class="text-gradient">Hybrid Set Includes</span>',
      inclusionsSub: 'Complete musical collaboration, backline wireless audio channels, and sound check integration.',
      inclusions: [
        {
          icon: 'bi-disc',
          color: 'var(--primary-color)',
          title: 'Resident Open-Format DJ',
          desc: 'Master DJ handling track transitions, crowd pacing, baseline mixing, and audio balance.'
        },
        {
          icon: 'bi-music-player-fill',
          color: 'var(--secondary-color)',
          title: 'Selected Live Soloist(s)',
          desc: 'Your choice of live alto/tenor saxophonist, energetic Latin percussionist, or electric violinist.'
        },
        {
          icon: 'bi-mic-fill',
          color: 'var(--accent-color)',
          title: 'Shure Instrument Wireless Systems',
          desc: 'Studio-grade clip-on wireless microphones providing flawless mobility across the entire venue.'
        },
        {
          icon: 'bi-earbuds',
          color: 'var(--amber-accent)',
          title: 'In-Ear Monitoring Systems',
          desc: 'Synchronized headphone feeds ensuring the musician and DJ stay in flawless harmonic and rhythmic lock.'
        },
        {
          icon: 'bi-sliders',
          color: '#10b981',
          title: 'Sub-Mix Stage Audio Console',
          desc: 'Dedicated sound channels EQed specifically to let the live instrument pierce through the mix cleanly.'
        },
        {
          icon: 'bi-shield-check',
          color: '#8b5cf6',
          title: 'Cocktail + Dance Floor Sets',
          desc: 'Includes romantic acoustic jazz sets during drinks followed by high-energy party jamming on the dance floor.'
        }
      ],
      idealTitle: 'Perfect Settings for <span class="text-gradient">Hybrid Fusion</span>',
      idealDesc: 'Creates unforgettable guest engagement and elevated celebration luxury.',
      accordions: [
        {
          id: 'hybridMatch1',
          icon: 'bi-glass-champagne text-warning',
          title: 'Sunset Cocktail Hours',
          body: 'Warm, breezy saxophone improvisations over soulful deep house and bossa nova while guests sip signature cocktails.'
        },
        {
          id: 'hybridMatch2',
          icon: 'bi-fire text-danger',
          title: 'Peak Dance Floor Celebrations',
          body: 'Live bongo rhythms and sax solos driving the crowd wild during upbeat 90s retro jams and electronic club anthems.'
        },
        {
          id: 'hybridMatch3',
          icon: 'bi-award-fill text-info',
          title: 'High-End Brand Launches & VIP Galas',
          body: 'Sophisticated modern presentation that feels like a luxury Ibiza day club or upscale Manhattan rooftop lounge.'
        }
      ]
    },

    production: {
      id: 'production',
      name: 'Full Event Production',
      breadcrumb: 'Stage & Event Production',
      heroTitle: 'Full Event <span class="text-gradient">Production & Rigging</span>',
      heroLead: 'Complete event infrastructure encompassing aluminum box trussing, power distribution generators, staging decks, and on-site certified audio/visual engineers.',
      heroBg: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1920&q=80',
      tag: 'TURNKEY INFRASTRUCTURE',
      telemetry: 'GLOBAL TRUSS // FOH CREW',
      overviewBadgeIcon: 'bi-building-gear',
      overviewBadgeText: 'Turnkey Stage Engineering',
      overviewHeading: 'Festival-Grade <span class="text-gradient">Infrastructure</span>',
      overviewImg: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Massive outdoor festival stage production rigging with aluminum box trusses and crowd',
      matchImg: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'Concert stage rigging, LED video panels, and production equipment',
      overviewP1: 'When your event scales to hundreds or thousands of attendees, you need more than mobile speakers. You require architectural stage rigging, multi-circuit power distribution, acoustic delay towers, and dedicated front-of-house (FOH) engineers.',
      overviewP2: 'We handle the entire production lifecycle: from structural CAD diagrams and venue load-in logistics to acoustical modeling, power load balancing, and coordinated live show execution.',
      feature1Icon: 'bi-shield-shaded text-info',
      feature1Title: 'Certified Riggers',
      feature1Desc: 'TUV-certified aluminum box trussing with structural engineering stamps',
      feature2Icon: 'bi-lightning-fill text-warning',
      feature2Title: 'Clean Power Distro',
      feature2Desc: 'Ultra-quiet mobile generators with isolated audio/video power circuits',
      inclusionsHeading: 'What Every <span class="text-gradient">Production Contract Includes</span>',
      inclusionsSub: 'Complete infrastructure oversight from initial venue site survey to late-night strike and logistics.',
      inclusions: [
        {
          icon: 'bi-grid-3x3',
          color: 'var(--amber-accent)',
          title: 'Aluminum Box Truss Structures',
          desc: 'Goalpost, ground-support, and 4-post boxed truss systems for mounting audio, LED screens, and moving lights.'
        },
        {
          icon: 'bi-layers-fill',
          color: 'var(--primary-color)',
          title: 'Modular Stage Decks & Facades',
          desc: 'Staging platforms with adjustable legs, safety railings, black skirting, and ADA-compliant accessibility ramps.'
        },
        {
          icon: 'bi-plug-fill',
          color: 'var(--secondary-color)',
          title: '3-Phase Power Distribution',
          desc: 'Cam-Lok distribution panels, whisper-quiet diesel generators, and dedicated power drops for catering and bar.'
        },
        {
          icon: 'bi-tv-fill',
          color: '#10b981',
          title: 'High-Brightness LED Video Walls',
          desc: 'P3.9 indoor and outdoor IP65 LED modular video panels for live camera feeds, sponsor reels, and custom visuals.'
        },
        {
          icon: 'bi-people-fill',
          color: 'var(--accent-color)',
          title: 'Full Technical Crew On-Site',
          desc: 'Stage manager, FOH audio lead, lighting director (LD), and stagehands overseeing real-time operations.'
        },
        {
          icon: 'bi-shield-check',
          color: '#8b5cf6',
          title: 'Safety Permits & Structural Insurance',
          desc: '$5M comprehensive production liability insurance, municipal permit filings, and wind-safety monitoring.'
        }
      ],
      idealTitle: 'Ideal Scale for <span class="text-gradient">Full Production</span>',
      idealDesc: 'Engineered for large-capacity, complex, high-visibility event productions.',
      accordions: [
        {
          id: 'prodMatch1',
          icon: 'bi-music-note-beamed text-info',
          title: 'Music Festivals & Multi-Stage Events',
          body: 'Continuous performance capabilities across main stages, VIP lounges, and acoustic satellite tents.'
        },
        {
          id: 'prodMatch2',
          icon: 'bi-briefcase-fill text-warning',
          title: 'Corporate Conventions & Product Expos',
          body: 'Massive keynote stages with ultra-crisp LED screen backdrops, broadcast live-streaming, and executive teleprompters.'
        },
        {
          id: 'prodMatch3',
          icon: 'bi-trophy-fill text-danger',
          title: 'Charity Galas & Sporting Arenas',
          body: 'Full-arena sound coverage ensuring every auction call, video tribute, and live anthem is heard with goosebump-inducing clarity.'
        }
      ]
    },

    weddings: {
      id: 'weddings',
      name: 'Weddings & Receptions',
      breadcrumb: 'Weddings & Receptions',
      heroTitle: 'Weddings & <span class="text-gradient">Luxury Receptions</span>',
      heroLead: 'From heartfelt ceremony vows and romantic cocktail ambience to a packed dance floor celebrating with three generations — bespoke musical artistry and ambient elegance.',
      heroBg: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80',
      tag: 'ROMANTIC & JOYFUL',
      telemetry: 'CEREMONY TO RECEPTION // 50 - 500 GUESTS',
      overviewBadgeIcon: 'bi-heart-fill text-danger',
      overviewBadgeText: 'Bespoke Wedding Production',
      overviewHeading: 'Soundtrack To Your <span class="text-gradient">Happily Ever After</span>',
      overviewImg: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Romantic bride in lace wedding gown and groom smiling together at bespoke wedding celebration',
      matchImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'Romantic wedding couple dancing together at elegant reception celebration',
      overviewP1: 'Your wedding day is a once-in-a-lifetime celebration of love. From the quiet tear when the bride walks down the aisle to the euphoric rush of the final encore dance, our wedding production is engineered with flawless timing, crystal speech clarity, and magnetic musical transitions.',
      overviewP2: 'We coordinate closely with your wedding planner, photographer, and venue captains to ensure every milestone cue hits with precision: ceremony processional, grand entrance fanfare, parent dances, cake cutting, and high-energy open dancing spanning multi-generational favorites.',
      feature1Icon: 'bi-heart-fill text-danger',
      feature1Title: 'Ceremony & Cocktail Audio',
      feature1Desc: 'Discreet wireless lapel mics & acoustic prelude',
      feature2Icon: 'bi-stars text-warning',
      feature2Title: 'Milestone Cue Sync',
      feature2Desc: 'Grand entrance fanfare, parent dances & toasts',
      inclusionsHeading: 'What Every <span class="text-gradient">Wedding Package Includes</span>',
      inclusionsSub: 'Turnkey ceremony and reception audio infrastructure with wireless microphones, architectural uplighting, and pre-event music planning.',
      inclusions: [
        {
          icon: 'bi-mic-fill',
          color: 'var(--primary-color)',
          title: 'Dedicated Ceremony PA & Lapel Mics',
          desc: 'Shure wireless bodypack for officiant, wireless handheld for vows/readers, and battery-powered setup for outdoor vows.'
        },
        {
          icon: 'bi-speaker',
          color: 'var(--secondary-color)',
          title: 'Multi-Zone Cocktail & Ballroom Sound',
          desc: 'Separate satellite audio systems so guests enjoy patio cocktail music without blasting dining tables.'
        },
        {
          icon: 'bi-person-badge',
          color: 'var(--accent-color)',
          title: 'Master Wedding DJ & Polished MC',
          desc: 'Experienced wedding talent who conducts tasteful, polished announcements with zero cheesy interruptions.'
        },
        {
          icon: 'bi-lightbulb-fill',
          color: 'var(--amber-accent)',
          title: 'Custom Color Architectural Uplighting',
          desc: 'Up to 16 wireless battery uplights dialed in to your exact wedding palette and venue architecture.'
        },
        {
          icon: 'bi-clipboard2-check',
          color: '#10b981',
          title: 'Music Planning Portal & Do-Not-Play',
          desc: 'Online consultation to specify your must-plays, cocktail jazz vibes, first dance version, and strict do-not-play list.'
        },
        {
          icon: 'bi-cloud-haze-fill',
          color: '#8b5cf6',
          title: 'Clouds & Cold Sparks Compatibility',
          desc: 'Fully compatible with low-lying dry ice fog and indoor-safe cold spark fountains for breathtaking photo memories.'
        }
      ],
      idealTitle: 'Wedding Celebration <span class="text-gradient">Timeline & Flow</span>',
      idealDesc: 'How we structure and orchestrate your wedding day from guest arrival to the grand send-off.',
      accordions: [
        {
          id: 'wedMatch1',
          icon: 'bi-heart-fill text-danger',
          title: 'Ceremony Sound & Prelude Music',
          body: 'Discreet column speakers, wind-resistant lapel mics, and romantic acoustic prelude as guests arrive.'
        },
        {
          id: 'wedMatch2',
          icon: 'bi-cup-straw text-warning',
          title: 'Cocktail & Dinner Elegance',
          body: 'Soulful acoustic covers, bossa nova, and modern piano jazz at comfortable conversational volume.'
        },
        {
          id: 'wedMatch3',
          icon: 'bi-mic-fill text-info',
          title: 'Grand Entrance, Toasts & First Dance',
          body: 'Feedback-free wireless mic handing for speeches, walk-up fanfare stingers, and first dance coordination.'
        },
        {
          id: 'wedMatch4',
          icon: 'bi-fire text-gradient',
          title: 'High-Energy Reception Dance Floor',
          body: 'Seamless blending from Motown, 80s/90s classics, and 2000s throwbacks to current chart hits that pack the floor.'
        }
      ],
      bookingHeading: 'Lock In Your Wedding Date',
      bookingSub: 'Prime wedding weekends book 6 to 12 months in advance. Submit your date for immediate availability check.',
      bookingBtnText: 'Request Wedding Availability & Quote',
      defaultEventType: 'Wedding Reception'
    },

    birthdays: {
      id: 'birthdays',
      name: 'Birthdays & Anniversaries',
      breadcrumb: 'Birthdays & Anniversaries',
      heroTitle: 'Birthdays & <span class="text-gradient">Milestone Celebrations</span>',
      heroLead: 'Warm room-filling bass, sound-reactive party lights, and custom genre sets spanning EDM, 90s/00s throwbacks, Hip-Hop, House, and Latin chart-toppers tailored to your favorites.',
      heroBg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80',
      tag: 'HIGH-ENERGY PARTY',
      telemetry: 'CUSTOM GENRE SETS // 30 - 300 GUESTS',
      overviewBadgeIcon: 'bi-stars text-warning',
      overviewBadgeText: 'Non-Stop Celebration Vibe',
      overviewHeading: 'The Ultimate Party <span class="text-gradient">Experience</span>',
      overviewImg: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Festive colorful birthday balloons floating with ribbons at party celebration',
      matchImg: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'Friends raising celebratory champagne toast at birthday party gathering',
      overviewP1: 'Whether celebrating a sweet 16, a legendary 21st, a milestone 30th, 40th or 50th, or a golden wedding anniversary, great parties live and die by music selection and room energy.',
      overviewP2: 'We build the night around the guest of honor\'s favorite anthems — from 90s hip-hop and 2000s pop throwbacks to current festival EDM, Latin reggaeton, and classic funk rock. No generic radio playlists; everything is live-mixed with seamless drops.',
      feature1Icon: 'bi-speaker-fill text-info',
      feature1Title: 'Heavy Bass Rigs',
      feature1Desc: 'Subwoofers calibrated for punch without ear fatigue',
      feature2Icon: 'bi-lightning-charge-fill text-warning',
      feature2Title: 'Sound-Reactive Lights',
      feature2Desc: 'Moving heads & wash lights synced to beat drops',
      inclusionsHeading: 'What Every <span class="text-gradient">Birthday Package Includes</span>',
      inclusionsSub: 'Everything needed for an epic celebration: club-grade sound, dynamic lighting, wireless mic for toasts, and tailored music sets.',
      inclusions: [
        {
          icon: 'bi-speaker',
          color: 'var(--secondary-color)',
          title: 'Touring-Grade DJ Sound System',
          desc: 'Dual 15" active tops and 18" subwoofer delivering warm, chest-vibrating sound without distortion.'
        },
        {
          icon: 'bi-lightbulb',
          color: 'var(--amber-accent)',
          title: 'Club-Style Intelligent Lighting Rig',
          desc: 'Moving head wash lights, strobe effects, and multi-color laser sweeps synchronized to the music.'
        },
        {
          icon: 'bi-vinyl',
          color: 'var(--primary-color)',
          title: 'Guest of Honor Custom Setlist',
          desc: 'Dedicated pre-event music consultation focusing on your favorite genres, throwback jams, and artist staples.'
        },
        {
          icon: 'bi-mic-fill',
          color: '#10b981',
          title: 'Wireless Toast & Speech Microphone',
          desc: 'Shure wireless microphone for birthday toasts, roast speeches, and group singalongs.'
        },
        {
          icon: 'bi-sliders',
          color: 'var(--accent-color)',
          title: 'Live Guest Request Integration',
          desc: 'On-the-fly crowd reading and tasteful request filtering that fits the party energy.'
        },
        {
          icon: 'bi-shield-check',
          color: '#8b5cf6',
          title: 'Backup Gear & Cable Concealment',
          desc: 'Clean black DJ facade concealing all wires with duplicate backup audio gear on site.'
        }
      ],
      idealTitle: 'Party Flow & <span class="text-gradient">Music Progression</span>',
      idealDesc: 'How our DJs build the energy throughout your party from cocktail warmup to peak midnight dance floor.',
      accordions: [
        {
          id: 'bdayMatch1',
          icon: 'bi-cup-straw text-warning',
          title: 'Welcome & Lounge Warmup',
          body: 'Upbeat retro soul, chill house, or lo-fi hip-hop as guests arrive and mingle.'
        },
        {
          id: 'bdayMatch2',
          icon: 'bi-cake2-fill text-danger',
          title: 'Toast, Speeches & Cake Cut',
          body: 'Dramatic music swell for cake presentation and crisp wireless mic for heartfelt toasts.'
        },
        {
          id: 'bdayMatch3',
          icon: 'bi-fire text-primary',
          title: 'Peak Midnight Dance Floor',
          body: 'Non-stop high-energy club anthems, crowd singalong classics, and rapid transition mixing.'
        }
      ],
      bookingHeading: 'Lock In Your Birthday Party Rig',
      bookingSub: 'Let us know your date, guest count, and favorite genres for an instant custom quote.',
      bookingBtnText: 'Request Birthday Party Quote',
      defaultEventType: 'Birthday Celebration'
    },

    corporate: {
      id: 'corporate',
      name: 'Corporate Galas & Summits',
      breadcrumb: 'Corporate Galas & Summits',
      heroTitle: 'Corporate Galas & <span class="text-gradient">Executive Summits</span>',
      heroLead: 'Crisp speech audio for keynote addresses and executive awards, discreet presentation AV switching, and sophisticated cocktail background music that transitions into an energetic celebration.',
      heroBg: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1920&q=80',
      tag: 'POLISHED & SHARP',
      telemetry: 'ZERO-FEEDBACK AUDIO // 100 - 1,500 GUESTS',
      overviewBadgeIcon: 'bi-briefcase-fill text-info',
      overviewBadgeText: 'Corporate Audio Excellence',
      overviewHeading: 'Flawless Precision for <span class="text-gradient">High-Stakes Events</span>',
      overviewImg: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Broadcast-grade audio mixing equipment and wireless microphones for corporate summits',
      matchImg: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'Executive conference auditorium stage with clear audio presentation system',
      overviewP1: 'In executive conferences and awards galas, there is zero tolerance for audio feedback, muted microphones, or awkward presentation dead-air. SonicDrop provides corporate clients with broadcast-grade audio reliability and discreet, sophisticated event hosting.',
      overviewP2: 'Our corporate engineers manage frequency-coordinated RF wireless systems, presentation video playback audio, live walk-up stingers for award recipients, and smooth acoustic transitions into evening celebrations.',
      feature1Icon: 'bi-mic-fill text-info',
      feature1Title: 'Broadcast Speech Clarity',
      feature1Desc: 'Directional podium & lavalier mics with zero feedback',
      feature2Icon: 'bi-award-fill text-warning',
      feature2Title: 'Award Walk-Up Stingers',
      feature2Desc: 'High-impact musical cues timed to stage arrivals',
      inclusionsHeading: 'What Every <span class="text-gradient">Corporate Package Includes</span>',
      inclusionsSub: 'Enterprise-grade sound and lighting infrastructure with dedicated on-site technicians and comprehensive insurance.',
      inclusions: [
        {
          icon: 'bi-mic',
          color: 'var(--primary-color)',
          title: 'Multi-Channel Wireless RF Mic Rack',
          desc: 'Digital podium mics, wireless handhelds, and discreet omnidirectional lavaliers with zero interference.'
        },
        {
          icon: 'bi-speaker',
          color: 'var(--secondary-color)',
          title: 'Balanced Line-Array Audio Distribution',
          desc: 'Curved line arrays for uniform vocal intelligibility across every table in the ballroom without hot spots.'
        },
        {
          icon: 'bi-laptop',
          color: 'var(--accent-color)',
          title: 'AV Presentation Integration',
          desc: 'Seamless DI audio feeds for laptops, video playback, Zoom conferences, and video walls.'
        },
        {
          icon: 'bi-palette-fill',
          color: 'var(--amber-accent)',
          title: 'Subtle Architectural Brand Uplighting',
          desc: 'Clean wireless uplighting dialed in to your exact corporate hex brand colors.'
        },
        {
          icon: 'bi-person-gear',
          color: '#10b981',
          title: 'Dedicated FOH Sound Engineer On-Site',
          desc: 'Certified technician managing microphone gain, compressor/limiters, and cue tracks throughout the event.'
        },
        {
          icon: 'bi-file-earmark-check',
          color: '#8b5cf6',
          title: 'Full Event Insurance & Safety Filings',
          desc: '$5M comprehensive liability policy with venue endorsement certificate and safety filings.'
        }
      ],
      idealTitle: 'Corporate Event <span class="text-gradient">Acoustic Standards</span>',
      idealDesc: 'Tailored solutions for executive conferences, annual galas, brand expos, and corporate milestones.',
      accordions: [
        {
          id: 'corpMatch1',
          icon: 'bi-mic-fill text-info',
          title: 'Keynote Addresses & Panel Discussions',
          body: 'Ultra-clean voice projection with background noise cancellation and feedback suppression.'
        },
        {
          id: 'corpMatch2',
          icon: 'bi-trophy-fill text-warning',
          title: 'Award Ceremonies & Walk-Up Stingers',
          body: 'Energetic 15-second musical bursts celebrating each award recipient as they approach the stage.'
        },
        {
          id: 'corpMatch3',
          icon: 'bi-cup-hot text-primary',
          title: 'Networking Cocktail Hours',
          body: 'Sophisticated deep house, acoustic covers, or modern jazz creating an upscale networking atmosphere.'
        },
        {
          id: 'corpMatch4',
          icon: 'bi-stars text-danger',
          title: 'Gala Celebration & After-Party',
          body: 'Transitioning smoothly from formal corporate tone to full-energy celebration and dancing.'
        }
      ],
      bookingHeading: 'Request Corporate Event Proposal',
      bookingSub: 'Submit your conference or gala specs for an itemized RFP breakdown and technical rider.',
      bookingBtnText: 'Request Corporate Event Proposal',
      defaultEventType: 'Corporate Gala'
    },

    vip: {
      id: 'vip',
      name: 'Private VIP & Pool Parties',
      breadcrumb: 'Private VIP & Pool Parties',
      heroTitle: 'Private VIP & <span class="text-gradient">Luxury Pool Parties</span>',
      heroLead: 'Sleek minimalist gear footprints, stylish DJ facades that complement your decor, warm pool uplighting, and personalized music curation from tropical chillout to late-night club beats.',
      heroBg: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1920&q=80',
      tag: 'BOUTIQUE & EXCLUSIVE',
      telemetry: 'MINIMAL FOOTPRINT // 20 - 150 GUESTS',
      overviewBadgeIcon: 'bi-gem text-primary',
      overviewBadgeText: 'Boutique Aesthetic & Audio',
      overviewHeading: 'Intimate Luxury, <span class="text-gradient">Immense Energy</span>',
      overviewImg: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Upscale VIP lounge with sleek ambient mood lighting and boutique DJ space',
      matchImg: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'Luxury private villa oceanfront infinity pool terrace at golden hour sunset',
      overviewP1: 'Private estates, luxury penthouses, and yacht decks demand high-performance sound without bulky, industrial gear cluttering your curated decor. Our VIP rigs feature compact, ultra-clean aesthetic lines and discreet, room-filling acoustic distribution.',
      overviewP2: 'From daytime Mediterranean pool beats and deep organic house to late-night private club bangers, our DJs tailor the soundtrack dynamically to match the mood of your circle.',
      feature1Icon: 'bi-gem text-primary',
      feature1Title: 'Minimalist Architectural Rig',
      feature1Desc: 'Discreet column speakers & stylish custom facade',
      feature2Icon: 'bi-water text-info',
      feature2Title: 'IP65 Water-Resistant Audio',
      feature2Desc: 'Safe outdoor garden and poolside audio distribution',
      inclusionsHeading: 'What Every <span class="text-gradient">VIP Package Includes</span>',
      inclusionsSub: 'White-glove private event setup with boutique DJ booth, discreet audio columns, and pool lighting.',
      inclusions: [
        {
          icon: 'bi-gem',
          color: 'var(--primary-color)',
          title: 'Bespoke Designer DJ Booth Facade',
          desc: 'Luxury matte-black, white leather, or custom acrylic facade concealing all cabling.'
        },
        {
          icon: 'bi-speaker',
          color: 'var(--secondary-color)',
          title: 'Column Array Sound Reinforcement',
          desc: 'Slim line-array columns with built-in subwoofers providing hi-fi clarity without visual bulk.'
        },
        {
          icon: 'bi-water',
          color: 'var(--accent-color)',
          title: 'Weather-Resistant Poolside Uplighting',
          desc: 'Wireless battery-operated waterproof fixtures illuminating water features and landscaping.'
        },
        {
          icon: 'bi-disc',
          color: 'var(--amber-accent)',
          title: 'Boutique Music Curation',
          desc: 'Ibiza sunset house, Afrobeats, melodic techno, Nu-Disco, or custom VIP guest-curated tracks.'
        },
        {
          icon: 'bi-music-note-beamed',
          color: '#10b981',
          title: 'Live Roaming Sax / Percussion Option',
          desc: 'Optional wireless instrumentalist improvising live alongside the DJ in the crowd.'
        },
        {
          icon: 'bi-shield-check',
          color: '#8b5cf6',
          title: 'Discreet Setup & Strike Protocol',
          desc: 'White-glove arrival, whisper-quiet load-in, and zero trace left on private property.'
        }
      ],
      idealTitle: 'VIP Party <span class="text-gradient">Vibe Curation</span>',
      idealDesc: 'Seamless musical evolution throughout your private villa or estate gathering.',
      accordions: [
        {
          id: 'vipMatch1',
          icon: 'bi-sun text-warning',
          title: 'Afternoon Sun & Pool Lounging',
          body: 'Tropical house, chilled Balearic beats, and soul-stirring vocal grooves.'
        },
        {
          id: 'vipMatch2',
          icon: 'bi-sunset text-danger',
          title: 'Golden Hour Sunset Drinks',
          body: 'Organic house, Afro-house, and upbeat melodic rhythms as the sun dips.'
        },
        {
          id: 'vipMatch3',
          icon: 'bi-moon-stars text-primary',
          title: 'Late Night Villa Club Session',
          body: 'Deep basslines, peak-time tech house, or throwback singalongs under the stars.'
        }
      ],
      bookingHeading: 'Book Your VIP Villa Experience',
      bookingSub: 'Discreet private consultations for luxury residences, estates, and exclusive venues.',
      bookingBtnText: 'Request VIP Event Consultation',
      defaultEventType: 'Private Party'
    },

    college: {
      id: 'college',
      name: 'College & Campus Festivals',
      breadcrumb: 'College & Campus Festivals',
      heroTitle: 'College & <span class="text-gradient">Campus Festivals</span>',
      heroLead: 'Powerful concert-grade sound distribution that fills open campus grounds, paired with synchronized light sweeps and high-energy DJs who know how to pump up thousands of students.',
      heroBg: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1920&q=80',
      tag: 'MASSIVE HYPE',
      telemetry: 'CONCERT SOUND DISTRIBUTION // 500 - 3,000 GUESTS',
      overviewBadgeIcon: 'bi-lightning-charge-fill text-warning',
      overviewBadgeText: 'Campus-Wide Audio Power',
      overviewHeading: 'Pumping Energy For <span class="text-gradient">The Whole Campus</span>',
      overviewImg: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Massive college festival crowd cheering with hands raised at live stage show',
      matchImg: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'Open-air campus festival lawn stage with high-output sound arrays and student crowd',
      overviewP1: 'Campus homecomings, spring fests, Greek galas, and welcome weeks need serious sonic muscle. Muffled sound and low-energy pacing can deflate a festival crowd in minutes. Our rigs deliver concert-grade audio pressure that reaches every corner of the quad.',
      overviewP2: 'Our open-format DJs specialize in fast-transition mixing: seamlessly blending viral TikTok anthems, high-octane EDM builds, trap bangers, early-2000s singalongs, and Latin chart-toppers to maintain an electrifying atmosphere from gates-open to the finale.',
      feature1Icon: 'bi-broadcast text-warning',
      feature1Title: 'Concert Line Arrays',
      feature1Desc: 'Long-throw vertical speaker arrays that cover expansive lawns',
      feature2Icon: 'bi-fire text-danger',
      feature2Title: 'High-BPM Festival Drops',
      feature2Desc: 'Rapid-fire mixing that keeps large crowds energized',
      inclusionsHeading: 'What Every <span class="text-gradient">Campus Package Includes</span>',
      inclusionsSub: 'High-SPL sound reinforcement, festival stage lighting, safety ramps, and campus-experienced DJs.',
      inclusions: [
        {
          icon: 'bi-speaker',
          color: 'var(--primary-color)',
          title: 'High-Output Concert Line Array System',
          desc: 'Curved active array towers throwing clean, distortion-free sound across large lawns.'
        },
        {
          icon: 'bi-soundwave',
          color: 'var(--secondary-color)',
          title: 'Cardioid Subwoofer Quad Array',
          desc: 'High-excursion 18" subwoofers tuned for chest-rattling bass drops across the crowd.'
        },
        {
          icon: 'bi-lightbulb-fill',
          color: 'var(--amber-accent)',
          title: 'Automated Moving Head Light Show',
          desc: 'DMX moving beams, high-intensity strobes, and blinders for night festival hype.'
        },
        {
          icon: 'bi-shield-shaded',
          color: '#10b981',
          title: 'Campus-Approved Crowd Safety Rigging',
          desc: 'Heavy-duty yellow-jacket cable ramps and safety-stamped trussing with wind monitoring.'
        },
        {
          icon: 'bi-mic-fill',
          color: 'var(--accent-color)',
          title: 'Live DJ + Student MC Integration',
          desc: 'Wireless microphone channels for campus hosts, student union leaders, and guest artists.'
        },
        {
          icon: 'bi-tools',
          color: '#8b5cf6',
          title: 'Certified On-Site Production Crew',
          desc: 'Audio engineers and stage techs monitoring decibel limits, EQ, and weather safety.'
        }
      ],
      idealTitle: 'Campus Scale & <span class="text-gradient">Event Formats</span>',
      idealDesc: 'Engineered for high-attendance student body gatherings, lawn concerts, and indoor arenas.',
      accordions: [
        {
          id: 'colMatch1',
          icon: 'bi-flag-fill text-info',
          title: 'Quad Stage & Homecoming Fests',
          body: 'Outdoor daytime festival sets transitioning into high-energy evening parties.'
        },
        {
          id: 'colMatch2',
          icon: 'bi-mortarboard-fill text-warning',
          title: 'Greek Formals & Campus Galas',
          body: 'High-energy multi-genre dance sets with club lighting and instant crowd response.'
        },
        {
          id: 'colMatch3',
          icon: 'bi-stars text-danger',
          title: 'Orientation & Welcome Weeks',
          body: 'Upbeat, friendly, high-energy festival atmosphere introducing new students to campus life.'
        }
      ],
      bookingHeading: 'Lock In Your Campus Festival Rig',
      bookingSub: 'We work directly with student activities boards (SAB) and Greek life committees with vendor-approved invoicing.',
      bookingBtnText: 'Request Campus Festival Quote',
      defaultEventType: 'Birthday Celebration'
    },

    concerts: {
      id: 'concerts',
      name: 'Live Concerts & Festivals',
      breadcrumb: 'Live Concerts & Festivals',
      heroTitle: 'Live Concerts & <span class="text-gradient">Music Festivals</span>',
      heroLead: 'Touring-grade active line arrays, multi-channel stage boxes, certified sound directors, and dramatic stage lighting designed to deliver an unforgettable arena-scale musical showcase.',
      heroBg: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1920&q=80',
      tag: 'ARENA SOUND',
      telemetry: 'TOURING LINE ARRAY // 1,000+ GUESTS',
      overviewBadgeIcon: 'bi-broadcast text-info',
      overviewBadgeText: 'Arena-Scale Production',
      overviewHeading: 'Engineering The Sound of <span class="text-gradient">Live Music</span>',
      overviewImg: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
      overviewImgAlt: 'Full-scale concert arena stage with synchronized lighting beams and line arrays',
      matchImg: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80',
      matchImgAlt: 'Live concert stage production with active line arrays and arena crowd',
      overviewP1: 'Live music performance demands acoustic perfection. From touring DJs and headline artists to full live bands, our concert production delivers pristine instrument separation, crisp vocal presence, and visceral low-end authority.',
      overviewP2: 'We supply complete Front-of-House (FOH) and monitor mixing infrastructure: 32+ channel digital stage boxes, Shure Axient wireless microphone systems, in-ear monitor transmitters, and acoustic delay towers tailored to arena or festival scale.',
      feature1Icon: 'bi-cpu-fill text-info',
      feature1Title: 'Touring-Spec Hardware',
      feature1Desc: 'Pioneer, Allen & Heath, Shure, and RCF touring arrays',
      feature2Icon: 'bi-person-badge-fill text-warning',
      feature2Title: 'Dedicated Sound Director',
      feature2Desc: 'FOH engineer managing front-of-house sound balance and stage wedges',
      inclusionsHeading: 'What Every <span class="text-gradient">Concert Package Includes</span>',
      inclusionsSub: 'Touring line arrays, cardioid subwoofers, digital stage boxes, artist monitors, and full FOH engineering.',
      inclusions: [
        {
          icon: 'bi-speaker',
          color: 'var(--secondary-color)',
          title: 'Dual Line Array Flying Towers',
          desc: 'High-power multi-box vertical arrays providing consistent SPL from front barricade to rear.'
        },
        {
          icon: 'bi-soundwave',
          color: 'var(--primary-color)',
          title: 'Sub-Bass Cardio Array System',
          desc: 'Cardioid subwoofer configurations delivering punch to the crowd while keeping the stage clean.'
        },
        {
          icon: 'bi-hdd-network',
          color: 'var(--amber-accent)',
          title: 'Multi-Channel Digital Stage Box & Snake',
          desc: 'Cat6 Dante digital audio networks with 32 inputs and 16 stage returns.'
        },
        {
          icon: 'bi-earbuds',
          color: '#10b981',
          title: 'Artist In-Ear & Wedge Monitoring',
          desc: 'Coaxial stage floor wedges and stereo wireless in-ear monitor transmitters.'
        },
        {
          icon: 'bi-reception-4',
          color: 'var(--accent-color)',
          title: 'RF Frequency Management & Coordination',
          desc: 'Interference-free wireless microphone and instrument beltpack coordination.'
        },
        {
          icon: 'bi-lightning-fill',
          color: '#8b5cf6',
          title: 'Turnkey Rigging & Power Generator',
          desc: 'Complete aluminum ground support, heavy-duty chain hoists, and clean 3-phase power drops.'
        }
      ],
      idealTitle: 'Live Production <span class="text-gradient">Capabilities</span>',
      idealDesc: 'Acoustic precision and stage management for touring artists, civic festivals, and arena tours.',
      accordions: [
        {
          id: 'conMatch1',
          icon: 'bi-disc text-primary',
          title: 'Multi-Artist Festivals',
          body: 'Rapid stage changeovers with saved digital recall scenes for every performing act.'
        },
        {
          id: 'conMatch2',
          icon: 'bi-music-player-fill text-warning',
          title: 'Headline DJ & Electronic Showcases',
          body: 'Sub-bass performance down to 28Hz and synchronized DMX lighting integration.'
        },
        {
          id: 'conMatch3',
          icon: 'bi-broadcast-pin text-info',
          title: 'Outdoor Civic & Arena Concerts',
          body: 'Long-distance acoustic modeling ensuring full venue coverage with zero echo distortion.'
        }
      ],
      bookingHeading: 'Request Live Concert Production Specs',
      bookingSub: 'Submit your technical rider or event scope for full equipment inventory availability and site survey.',
      bookingBtnText: 'Request Live Production Specs',
      defaultEventType: 'Corporate Gala'
    }
  };

  const keyAliases = {
    wedding: 'weddings',
    weddings: 'weddings',
    birthday: 'birthdays',
    birthdays: 'birthdays',
    anniversary: 'birthdays',
    anniversaries: 'birthdays',
    corporate: 'corporate',
    'corporate-events': 'corporate',
    'corporate-galas': 'corporate',
    gala: 'corporate',
    galas: 'corporate',
    vip: 'vip',
    'vip-parties': 'vip',
    private: 'vip',
    'pool-parties': 'vip',
    college: 'college',
    campus: 'college',
    concert: 'concerts',
    concerts: 'concerts',
    festival: 'concerts',
    festivals: 'concerts',
    dj: 'dj',
    sound: 'sound',
    lighting: 'lighting',
    fx: 'fx',
    clouds: 'fx',
    hybrid: 'hybrid',
    fusion: 'hybrid',
    production: 'production',
    stage: 'production'
  };

  function getQueryService() {
    const params = new URLSearchParams(window.location.search);
    const rawKey = (params.get('event') || params.get('service') || params.get('id') || params.get('type') || '').toLowerCase().trim();
    if (rawKey && keyAliases[rawKey] && servicesData[keyAliases[rawKey]]) {
      return keyAliases[rawKey];
    }
    if (rawKey && servicesData[rawKey]) {
      return rawKey;
    }
    return 'dj'; // default
  }

  function renderService(serviceKey) {
    const data = servicesData[serviceKey] || servicesData.dj;

    // Document Title
    document.title = `${data.name} | SonicDrop DJ & Audio Production`;

    // Hero Section
    const heroSec = document.getElementById('serviceHero') || document.querySelector('.page-hero');
    if (heroSec && data.heroBg) {
      heroSec.style.backgroundImage = `url('${data.heroBg}')`;
    }

    const breadcrumbEl = document.getElementById('serviceBreadcrumbActive');
    if (breadcrumbEl) breadcrumbEl.textContent = data.breadcrumb;

    const heroTitleEl = document.getElementById('serviceHeroTitle');
    if (heroTitleEl) heroTitleEl.innerHTML = data.heroTitle;

    const heroLeadEl = document.getElementById('serviceHeroLead');
    if (heroLeadEl) heroLeadEl.textContent = data.heroLead;

    // Badges
    const tagBadgeEl = document.getElementById('serviceTelemetryTag');
    if (tagBadgeEl) tagBadgeEl.innerHTML = `<span class="status-dot-live"></span> ${data.tag}`;

    const telemBadgeEl = document.getElementById('serviceTelemetrySpec');
    if (telemBadgeEl) telemBadgeEl.textContent = data.telemetry;

    // Overview Section
    const ovImgEl = document.getElementById('serviceOverviewImg');
    if (ovImgEl) {
      ovImgEl.src = data.overviewImg;
      ovImgEl.alt = data.overviewImgAlt;
    }

    const ovBadgeEl = document.getElementById('serviceOverviewBadge');
    if (ovBadgeEl) {
      ovBadgeEl.innerHTML = `<i class="bi ${data.overviewBadgeIcon}"></i> ${data.overviewBadgeText}`;
    }

    const ovHeadingEl = document.getElementById('serviceOverviewHeading');
    if (ovHeadingEl) ovHeadingEl.innerHTML = data.overviewHeading;

    const ovP1El = document.getElementById('serviceOverviewP1');
    if (ovP1El) ovP1El.textContent = data.overviewP1;

    const ovP2El = document.getElementById('serviceOverviewP2');
    if (ovP2El) ovP2El.textContent = data.overviewP2;

    // Overview 2 Features
    const feat1El = document.getElementById('serviceFeature1');
    if (feat1El) {
      feat1El.innerHTML = `
        <h6 class="fw-bold mb-1"><i class="bi ${data.feature1Icon} me-1"></i> ${data.feature1Title}</h6>
        <small class="text-muted">${data.feature1Desc}</small>
      `;
    }

    const feat2El = document.getElementById('serviceFeature2');
    if (feat2El) {
      feat2El.innerHTML = `
        <h6 class="fw-bold mb-1"><i class="bi ${data.feature2Icon} me-1"></i> ${data.feature2Title}</h6>
        <small class="text-muted">${data.feature2Desc}</small>
      `;
    }

    // Inclusions
    const incHeadingEl = document.getElementById('serviceInclusionsHeading');
    if (incHeadingEl) incHeadingEl.innerHTML = data.inclusionsHeading;

    const incSubEl = document.getElementById('serviceInclusionsSub');
    if (incSubEl) incSubEl.textContent = data.inclusionsSub;

    const incContainer = document.getElementById('serviceInclusionsContainer');
    if (incContainer && data.inclusions) {
      incContainer.innerHTML = data.inclusions.map((item) => `
        <div class="col-md-6 col-lg-4">
          <div class="pulse-card h-100">
            <div class="card-icon-box" style="color: ${item.color};">
              <i class="bi ${item.icon}"></i>
            </div>
            <h5>${item.title}</h5>
            <p class="small text-secondary mb-0">${item.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // Ideal For / Accordions
    const idealTitleEl = document.getElementById('serviceIdealTitle');
    if (idealTitleEl) idealTitleEl.innerHTML = data.idealTitle;

    const idealDescEl = document.getElementById('serviceIdealDesc');
    if (idealDescEl) idealDescEl.textContent = data.idealDesc;

    const accordionEl = document.getElementById('serviceMatchAccordion');
    if (accordionEl && data.accordions) {
      accordionEl.innerHTML = data.accordions.map((acc, idx) => `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button ${idx > 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#${acc.id}" aria-expanded="${idx === 0 ? 'true' : 'false'}">
              <i class="bi ${acc.icon} me-2"></i> ${acc.title}
            </button>
          </h2>
          <div id="${acc.id}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" data-bs-parent="#serviceMatchAccordion">
            <div class="accordion-body">
              ${acc.body}
            </div>
          </div>
        </div>
      `).join('');
    }

    // Section 4 Match Section Image
    const matchImgEl = document.getElementById('serviceMatchImg');
    if (matchImgEl) {
      matchImgEl.src = data.matchImg || data.overviewImg;
      matchImgEl.alt = data.matchImgAlt || data.overviewImgAlt || data.name;
    }

    // Update active state in sidebar / quick switcher (Events & Services)
    const eventKeys = ['weddings', 'birthdays', 'corporate', 'vip', 'college', 'concerts'];
    const serviceKeys = ['dj', 'sound', 'lighting', 'fx', 'hybrid', 'production'];

    const serviceToEventMap = {
      dj: 'weddings',
      sound: 'concerts',
      lighting: 'corporate',
      fx: 'weddings',
      hybrid: 'vip',
      production: 'concerts'
    };

    const eventToServiceMap = {
      weddings: 'dj',
      birthdays: 'dj',
      corporate: 'dj',
      vip: 'hybrid',
      college: 'sound',
      concerts: 'production'
    };

    const activeEvent = eventKeys.includes(serviceKey) ? serviceKey : (serviceToEventMap[serviceKey] || 'weddings');
    const activeService = serviceKeys.includes(serviceKey) ? serviceKey : (eventToServiceMap[serviceKey] || 'dj');

    const switcherLinks = document.querySelectorAll('.service-switch-link');
    switcherLinks.forEach((link) => {
      const linkKey = link.getAttribute('data-service-key');
      const isActive = eventKeys.includes(linkKey) ? (linkKey === activeEvent) : (linkKey === activeService);
      if (isActive) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    // Update booking form texts and preselect event type
    const bookingForm = document.getElementById('quickBookingForm');
    if (bookingForm) {
      const formHeading = bookingForm.parentElement.querySelector('h3');
      const formSub = bookingForm.parentElement.querySelector('p.text-secondary');
      const formBtn = bookingForm.querySelector('button[type="submit"]');
      const eventTypeSelect = document.getElementById('eventType');

      if (formHeading && data.bookingHeading) {
        formHeading.textContent = data.bookingHeading;
      }
      if (formSub && data.bookingSub) {
        formSub.textContent = data.bookingSub;
      }
      if (formBtn && data.bookingBtnText) {
        formBtn.innerHTML = `<i class="bi bi-calendar2-check"></i> ${data.bookingBtnText}`;
      }
      if (eventTypeSelect && data.defaultEventType) {
        let matched = false;
        for (let i = 0; i < eventTypeSelect.options.length; i++) {
          if (eventTypeSelect.options[i].value === data.defaultEventType) {
            eventTypeSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched) {
          const opt = new Option(data.defaultEventType, data.defaultEventType, true, true);
          eventTypeSelect.add(opt);
        }
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const currentService = getQueryService();
    renderService(currentService);

    // Support back/forward browser history
    window.addEventListener('popstate', () => {
      renderService(getQueryService());
    });

    // Intercept clicks on .service-switch-link to provide smooth instant transitions
    document.addEventListener('click', (e) => {
      const switchBtn = e.target.closest('.service-switch-link');
      if (switchBtn) {
        const key = switchBtn.getAttribute('data-service-key');
        const canonical = keyAliases[key] || key;
        if (canonical && servicesData[canonical]) {
          e.preventDefault();
          window.switchServiceView(canonical);
        }
      }
    });
  });

  // Expose globally for interactive switcher clicks without full reload
  window.switchServiceView = function (serviceKey) {
    const canonical = keyAliases[serviceKey] || serviceKey;
    if (servicesData[canonical]) {
      const eventKeys = ['weddings', 'birthdays', 'corporate', 'vip', 'college', 'concerts'];
      const url = new URL(window.location);
      if (eventKeys.includes(canonical)) {
        url.searchParams.delete('service');
        url.searchParams.set('event', canonical);
      } else {
        url.searchParams.delete('event');
        url.searchParams.set('service', canonical);
      }
      window.history.pushState({}, '', url);
      renderService(canonical);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
})();
