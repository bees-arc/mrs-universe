export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  excerpt: string;
  content: string[];
  quote?: string;
}

export interface Track {
  id: string;
  slug: string;
  title: string;
  duration: string;
  releaseDate: string;
  tags: string[];
  image: string;
  description: string;
  lyrics: string[];
  inspiration: string;
}

export interface Show {
  id: string;
  date: string;
  month: string;
  year: string;
  title: string;
  venue: string;
  location: string;
  status: "Available" | "Selling Fast" | "Sold Out";
  href: string;
}

export const journalPosts: JournalPost[] = [
  {
    id: "1",
    slug: "the-feeling-i-could-not-put-words",
    title: "The Feeling I Could Not Put Words",
    subtitle: "Navigating quiet moments of reflection amid high-acuity healthcare environments.",
    author: "Maleka Morani",
    date: "May 22, 2026",
    readTime: "5 min read",
    image: "/images/drive/drive_image_14_15GqMOnh53e3hJn7Nj-4RoYCysoxk8rdy.jpg",
    category: "RECOLLECTIONS & HEALING",
    excerpt: "For over 15 years in ICU and emergency rooms, I witnessed moments where silence spoke louder than medicine. Here is how those quiet spaces shaped my journey to Mrs. Universe 2026.",
    quote: "True healing begins when we stop rushing to diagnose and start taking time to listen to what remains unsaid.",
    content: [
      "Working in intensive care units and emergency rooms for over a decade teaches you things no textbook can convey. You learn to read the rhythm of a room before you look at a monitor. You learn that beneath every clinical metric lies a human story waiting to be understood.",
      "There were night shifts where the world outside was asleep, and inside the unit, life hung in a delicate balance. In those quiet hours between checks and treatments, I found a profound emotional resonance that stayed with me long after I took off my scrubs.",
      "When I transitioned into mental health advocacy and aesthetics, and eventually stepped onto the international platform of Mrs. Universe 2026, I carried those unspoken feelings with me. Music and writing became my refuge—a way to give form to the emotions that words alone could never quite capture.",
      "To anyone standing in the quiet spaces of their own journey: your silent strength is heard, and your healing is valid."
    ]
  },
  {
    id: "2",
    slug: "living-between-noise-and-quiet-moments",
    title: "Living Between Noise And Quiet Moments",
    subtitle: "Balancing motherhood, advocacy, clinical service, and the international stage.",
    author: "Maleka Morani",
    date: "June 14, 2026",
    readTime: "6 min read",
    image: "/images/drive/drive_image_18_1C-T2M5XJnn4QdgdoPRTA_UmLJXfSgB42.jpg",
    category: "LIFE & RESILIENCE",
    excerpt: "Life rarely moves in a straight line. As a mother of two, a healthcare professional, and a cancer survivor, finding peace means learning to embrace both the noise and the stillness.",
    quote: "Resilience is not about avoiding the storm—it is about keeping your inner compass steady through every gale.",
    content: [
      "The demands of modern life can often feel overwhelming. Between raising my two children, Ariyana and Mikhail, serving patients in healthcare, and spearheading global advocacy campaigns against domestic violence, my calendar is filled with constant activity.",
      "Yet, I have discovered that resilience is cultivated in the gaps—the short quiet moments between commitments where we choose to reset, reflect, and reconnect with our core purpose.",
      "As a cancer survivor and a widow, I have known intense personal loss and hardship. But I have also learned that adversity does not define our destination; it refines our character and deepens our capacity for compassion.",
      "Stepping into the spotlight of Mrs. Universe 2026 is not about personal vanity—it is a microphone for survivors, mothers, healthcare workers, and everyday women who refuse to let their circumstances dictate their worth."
    ]
  },
  {
    id: "3",
    slug: "why-i-prefer-simplicity-over-complexity",
    title: "Why I Prefer Simplicity Over Complexity",
    subtitle: "Distilling life, artistry, and purpose down to what truly matters.",
    author: "Maleka Morani",
    date: "July 08, 2026",
    readTime: "4 min read",
    image: "/images/drive/drive_image_20_1inAr1DSxtCqLQ0RjiKXFkMm_yhadwt-s.jpg",
    category: "PHILOSOPHY & ARTISTRY",
    excerpt: "In a world enamored with noise and constant complexity, returning to authentic simplicity is an act of courage and grace.",
    quote: "Simplicity is not the lack of depth; it is the ultimate expression of clarity.",
    content: [
      "In healthcare, when a critical situation arises, the best response is rarely complicated. It is clear, direct, and grounded in essential principles. The same holds true for art, advocacy, and personal growth.",
      "When I write music or speak to young women about mental health, I strip away unnecessary pretense. People do not connect with perfection; they connect with authenticity, warmth, and shared vulnerability.",
      "My mission as Mrs. Universe 2026 is simple: to inspire women to recognize their innate strength, to demand safety in their relationships, and to prioritize holistic well-being.",
      "Thank you for walking this path with me. May you find clarity in simplicity and strength in your own story."
    ]
  }
];

export const musicTracks: Track[] = [
  {
    id: "1",
    slug: "midnight-air",
    title: "Midnight Air",
    duration: "3:46",
    releaseDate: "2026",
    tags: ["Indie", "Ambient", "Alternative"],
    image: "/images/drive/drive_image_10_1PTm409zqdRN7le74s7uKnLMt5hbelbCi.jpg",
    description: "A drifting, atmospheric piece carried by ambient tones and quiet piano melodies, reflecting late-night introspection after long clinical shifts.",
    inspiration: "Inspired by the serene quiet of late-night ICU shifts and the deep reflections that arise when the rest of the world is asleep.",
    lyrics: [
      "Standing by the window in the quiet night,",
      "Watching distant shadows catch the pale streetlight.",
      "Moments held in stillness, breath upon the glass,",
      "Waiting for the heavy storm to softly pass.",
      "",
      "In the midnight air, thoughts begin to drift,",
      "Every silent burden turns into a gift.",
      "Beyond the noise, beyond the crown we wear,",
      "We find our peace inside the midnight air."
    ]
  },
  {
    id: "2",
    slug: "before-the-light",
    title: "Before the Light",
    duration: "4:02",
    releaseDate: "2026",
    tags: ["Indie", "Acoustic", "Ambient"],
    image: "/images/drive/drive_image_11_14C-nzXMu7GLJonG1TfQsECsK46kdS72t.jpg",
    description: "An uplifting acoustic-driven anthem honoring survivors of domestic violence and cancer, celebrating the dark dawn right before hope breaks through.",
    inspiration: "Written for survivors facing their darkest hours, reminding them that dawn is always closest when the night seems longest.",
    lyrics: [
      "Cold wind blowing through an open door,",
      "Traces of a past you don't carry anymore.",
      "Every step was heavy, every scar was real,",
      "Now you take the time to breathe and start to heal.",
      "",
      "Just before the light breaks across the sky,",
      "You hold your head up high and learn to fly.",
      "Rising from the ashes, strong and unbroken,",
      "Your story lives on, no longer unspoken."
    ]
  },
  {
    id: "3",
    slug: "fading-lines",
    title: "Fading Lines",
    duration: "3:58",
    releaseDate: "2026",
    tags: ["Indie", "Alternative", "Dream Pop"],
    image: "/images/drive/drive_image_12_176R7jt93i6nAwWYvmq50qlGiNvt0H4UC.jpg",
    description: "A rich dream-pop composition exploring the blurring boundaries between memory, grief, love, and emotional reinvention.",
    inspiration: "Dedicated to the journey of grief, reinvention, and moving forward after profound personal loss while preserving sacred memories.",
    lyrics: [
      "Pictures on the wall, colors soft and low,",
      "Traces of a time we used to know.",
      "Lines begin to blur where the shadows fall,",
      "Yet your gentle memory echoes through it all.",
      "",
      "Fading lines, merging into grace,",
      "Finding strength inside a brand new space."
    ]
  },
  {
    id: "4",
    slug: "where-silence-stays",
    title: "Where Silence Stays",
    duration: "4:15",
    releaseDate: "2026",
    tags: ["Indie", "Ambient", "Experimental"],
    image: "/images/drive/drive_image_13_1TJZK6ce9uSoa163jhUIZ6uMwwOZ0vYm0.jpg",
    description: "A meditative instrumental and vocal soundscape celebrating inner sanctuary, mental health awareness, and peace.",
    inspiration: "Created to give listeners a restful space to pause, breathe, and find mental sanctuary away from daily stress.",
    lyrics: [
      "Close your eyes and let the ocean calm your mind,",
      "Leave the heavy noise of yesterday behind.",
      "Here inside the quiet, you are safe and whole,",
      "A peaceful sanctuary for your heart and soul."
    ]
  }
];

export const upcomingShows: Show[] = [
  {
    id: "1",
    date: "12",
    month: "AUG",
    year: "2026",
    title: "Mrs. Universe Advocacy Keynote & Live Session",
    venue: "Grand Ballroom, Jakarta",
    location: "Jakarta, ID",
    status: "Selling Fast",
    href: "/contact"
  },
  {
    id: "2",
    date: "25",
    month: "AUG",
    year: "2026",
    title: "Midnight Air Acoustic & Empowerment Showcase",
    venue: "Cultural Center Auditorium",
    location: "Yogyakarta, ID",
    status: "Available",
    href: "/contact"
  },
  {
    id: "3",
    date: "07",
    month: "SEP",
    year: "2026",
    title: "Before the Light – Mental Health & Survivors Gala",
    venue: "Grand Horizon Center",
    location: "Bandung, ID",
    status: "Selling Fast",
    href: "/contact"
  },
  {
    id: "4",
    date: "18",
    month: "SEP",
    year: "2026",
    title: "Echo Sessions Live – Youth Empowerment Forum",
    venue: "Metropolitan Hall",
    location: "Surabaya, ID",
    status: "Available",
    href: "/contact"
  }
];
