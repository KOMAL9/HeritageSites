
const mongoose = require('mongoose');
const HeritageSite = require('../models/HeritageSite');
const dotenv=require('dotenv');
const connectDB = require('../config/db');
dotenv.config();

const sampleHeritageSites = [
  {
    name: "Bull Temple (Nandi Temple)",
    location: "India",
    type: "Cultural",
    description: "A historic temple in Bangalore dedicated to Nandi, the sacred bull of Lord Shiva, featuring one of the largest monolithic Nandi statues in the world.",
    scientific_importance: "Showcases Vijayanagara-era Dravidian architecture and stone craftsmanship, reflecting the cultural and religious traditions of 16th-century Karnataka.",
    conservation_efforts: "Restoration efforts by ASI and local authorities focus on structural preservation and environmental impact control.",
    images: ["https://www.holidify.com/images/cmsuploads/compressed/3560_20190222111237jpg"],
    coordinates: { lat: 12.9437, lng: 77.5668 },
    established_date: "1537-01-01",
    tags: ["Karnataka", "Hinduism", "Pilgrimage", "Religious", "Medieval", "Archaeology"],
    moreInfo: [
      "The massive Nandi statue within the temple is carved from a single granite rock, showcasing exceptional stone craftsmanship.",
      "This monolithic structure is a remarkable feat of engineering and artistry, especially considering the tools available in the 16th century.",
      "The granite rock itself is millions of years old, offering insights into the geological history of the region.",
      "Studying the rock type, its age, and formation provides valuable knowledge about Earth's natural processes.",
     
      "Sustainability Initiatives: The temple has implemented initiatives to promote sustainability and environmental awareness.",
      " Infrastructure Improvements: Renovations and improvements have been made to enhance the visitor experience.",
      "Kadalekai Parishe: This annual groundnut fair, held near the Bull Temple, attracts thousands of visitors. The most recent event took place in 2024.",
      " Karthika Deepotsava: A major festival of lights celebrated at the Bull Temple in November or December."
    ]
  }
  
,
{
  name: "Angkor Wat",
  location: "Cambodia",
  type: "Cultural",
  description: "The largest religious monument in the world, originally built as a Hindu temple and later transformed into a Buddhist site.",
  scientific_importance: "Demonstrates advanced Khmer engineering, extensive water reservoirs, and urban planning techniques.",
  conservation_efforts: "Preserved under UNESCO, with international collaborations for restoration and environmental protection.",
  images: ["https://i.natgeofe.com/n/8f1866f3-6099-4efc-bcd5-7a1ccda22a9f/Angkor5.jpg"],
  coordinates: { lat: 13.4125, lng: 103.8667 },
  established_date: "1992-12-14",
  recent_developments: "Tourism regulations tightened to protect ancient structures from damage.",
  tags: ["Khmer Empire", "Cambodia", "Temple Complex", "Buddhist-Hindu"],
  moreInfo: [
    "Angkor Wat's intricate design, with its towering central towers, surrounding galleries, and extensive causeways, showcases the advanced engineering skills of the Khmer civilization.",
    "The temple's stability and longevity are testaments to their understanding of load distribution, material science, and construction techniques.",
    "The temple primarily uses sandstone, laterite, and brick, each chosen for its specific properties.",
    "Angkor Wat, a UNESCO World Heritage Site, is a site of ongoing preservation and research.",
    "Conservation and Restoration: The Apsara National Authority, in collaboration with international partners, is responsible for the ongoing conservation and restoration of Angkor Wat.",
    "Archaeological Research: Ongoing research continues to shed light on Angkor Wat's history, architecture, and cultural significance."
  ]
}
,
{
  name: "Taj Mahal",
  location: "India",
  type: "Cultural",
  description: "A white marble mausoleum built in memory of Mumtaz Mahal, the wife of Emperor Shah Jahan.",
  scientific_importance: "A masterpiece of Mughal architecture, combining Persian, Ottoman Turkish, and Indian styles.",
  conservation_efforts: "Ongoing preservation by the Indian government, with strict visitor regulations to reduce pollution damage.",
  images: [
    "https://treeofliferesorts.com/wp-content/uploads/2022/08/sylwia-bartyzel-eU4pipU_8HA-unsplash-2-scaled.jpg"
  ],
  coordinates: { lat: 27.1751, lng: 78.0421 },
  established_date: "1983-12-06",
  tags: ["Mughal Architecture", "Agra", "World Heritage", "Indian History"],
  moreInfo: [
    "The Taj Mahal, an ivory-white marble mausoleum on the south bank of the Yamuna River in Agra, is one of the world's most iconic structures.",
    "The Archaeological Survey of India (ASI) continuously monitors the monument's condition and takes necessary steps to protect it from environmental threats.",
    "The Supreme Court of India directed ASI in 2018 to conduct a comprehensive assessment of pollution affecting the Taj Mahal.",
    "In the early 2010s, an online ticketing system was introduced to manage crowds and reduce paper use.",
    "Since the early 2000s, there has been a gradual shift towards promoting electric vehicles around the monument, though full implementation is still in progress.",
    "After 2001, security measures were significantly increased due to terror threats, including bag checks and increased personnel."
  ]
}
,


{
  name: "Khajuraho Group of Monuments",
  location: "India",
  type: "Cultural",
  description: "A group of stunning temples in Madhya Pradesh, famous for intricate erotic sculptures and exquisite Nagara-style architecture.",
  scientific_importance: "Demonstrates advanced temple engineering and artistic mastery of the Chandela dynasty.",
  conservation_efforts: "ASI and UNESCO have taken measures to preserve sculptures and control environmental damage.",
  images: ["https://plus.unsplash.com/premium_photo-1697730370661-51bf72769ff6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2hhanVyYWhvfGVufDB8fDB8fHww"],
  coordinates: { lat: 24.852, lng: 79.919 },
  established_date: "1986-10-15",
  tags: ["Hinduism", "Pilgrimage", "Religious", "Medieval", "Archaeology"],
  moreInfo: [
    "The temples showcase the pinnacle of Nagara-style architecture, with their towering shikharas (spires) and complex layouts.",
    "The construction techniques used to create these massive structures without modern machinery highlight the advanced engineering skills of the time.",
    "Built with precise geometric measurements and alignments, the temples incorporate principles of Vastu Shastra, the traditional Hindu system of architecture.",
    "Ongoing conservation and restoration efforts focus on cleaning and repairing stone carvings, stabilizing structures, and protecting the temples from weathering and erosion.",
    "Digital documentation initiatives have been introduced to prevent further deterioration of the intricate carvings.",
    "The Khajuraho Dance Festival, held annually in February, showcases classical Indian dance forms against the stunning backdrop of the temples."
  ]
}
,
{
  name: "Kumbh Mela",
  location: "Prayagraj, India",
  type: "Cultural",
  description: "A massive Hindu pilgrimage festival held every 12 years, attracting millions of devotees.",
  scientific_importance: "Offers insights into Hindu religious practices, sociology, and large-scale crowd management.",
  conservation_efforts: "Efforts to preserve the spiritual and cultural heritage, with state support for infrastructure and safety.",
  images: [
    "https://images.news9live.com/wp-content/uploads/2024/11/Maha-Kumbh-Mela-2025-Shahi-Snan-dates-and-why-it-occur-only-after-12-years.png"
  ],
  coordinates: { lat: 25.4358, lng: 81.8463 },
  established_date: "Ancient",
  recent_developments: "Increased participation and modernization of facilities for better management.",
  tags: ["Hinduism", "Pilgrimage", "Religious Festival"],
  moreInfo: [
    "The Kumbh Mela's roots are ancient, with mentions in early Hindu scriptures. It is tied to the myth of the Samudra Manthan (churning of the cosmic ocean), where drops of amrita (nectar of immortality) fell at the Kumbh Mela locations.",
    "The Kumbh Mela is a massive pilgrimage for Hindus, held every 12 years at one of four sacred locations in India.",
    "The Maha Kumbh Mela, the largest of these, occurs every 144 years.",
    "The most recent Maha Kumbh Mela is currently underway in Prayagraj, Uttar Pradesh, India.",
  "Started on January 13th, 2025, and will continue until February 26th, 2025.The government has made significant efforts to improve infrastructure for the 2025 Maha Kumbh, including setting up temporary tent cities to accommodate pilgrims, improving sanitation and hygiene facilities, deploying security personnel to manage crowds and ensure safety, and providing transportation and communication facilities."
]
},
{
  name: "Belur",
  location: "India",
  type: "Cultural",
  description:
    "A prominent temple town famous for the Chennakeshava Temple, a masterpiece of Hoysala architecture.",
  scientific_importance:
    "Represents an architectural transition from Chalukyan to Hoysala styles, with intricate carvings.",
  conservation_efforts:
    "Protected under ASI with regular restoration work.",
  images: [
    "https://tanhadil.in/wp-content/uploads/2021/11/B23759ED-84CB-4F82-8761-E42399012F50_edited.jpg"
  ],
  coordinates: { lat: 13.1670, lng: 75.8656 },
  established_date: "1117-03-10",
  recent_developments:
    "Improved tourism facilities and restoration of temple sculptures.",
  tags: ["Hoysala", "Temple", "Architecture", "Karnataka"],
  moreInfo: [
    "The temple, built during the Hoysala dynasty, is a testament to the advanced architectural and engineering skills of the time.",
    "The intricate carvings, the precise fitting of stones, and the overall structural integrity of the temple demonstrate a deep understanding of materials, construction techniques, and load-bearing principles.",
    "The temple is primarily constructed from soapstone, a relatively soft stone that allows for detailed carving.",
    "There are ongoing efforts to improve the infrastructure around Belur to enhance the visitor experience. This includes road development, better amenities, and improved access to the temple.",
    "There have been discussions and efforts to nominate the Hoysala temples of Belur, Halebidu, and Somanathapura for inclusion in the UNESCO World Heritage Site list. This recognition would bring increased attention to these sites and potentially lead to more funding for preservation and research."
  ]
},
,
    
   
    
    
   
    {
      name: "Mahakaleshwar Temple",
      location: "India",
      type: "Cultural",
      description: "A sacred Jyotirlinga temple in Ujjain, Madhya Pradesh, revered in Hinduism for its unique Bhasma Aarti ritual.",
      scientific_importance: "Reflects the continuity of ancient Shaivism and spiritual practices for over a millennium.",
      conservation_efforts: "ASI and temple authorities undertake periodic structural reinforcements and crowd management solutions.",
      images: ["https://vajiram-prod.s3.ap-south-1.amazonaws.com/Mahakaleshwar_Temple_641be11f1c.webp"],
      coordinates: { lat: 23.182, lng: 75.768 },
      established_date: "Ancient",
      tags: ["Hinduism", "Pilgrimage", "Religious"],
      moreInfo: [
        "The temple's architecture, while primarily designed with religious symbolism, also showcases the engineering skills of the time.",
        "Constructed without modern machinery, its large and complex structure demonstrates a deep understanding of materials and structural principles.",
        "The temple's rituals and traditions, such as the Bhasma Aarti (ash ritual), have been preserved and practiced for centuries.",
        "Ongoing conservation efforts include cleaning, preservation, and structural repairs to maintain the integrity of the temple.",
        "The 'Mahakal Lok' Project is a major initiative aimed at expanding and enhancing the temple complex, improving facilities for pilgrims, and adding new cultural attractions.",
        "The second phase of the 'Mahakal Lok' project was inaugurated in February 2023, featuring additions such as the 'Mahakal Path,' a 'Garuda Stambh,' and other religious and cultural structures.",
        "New security systems and improved facilities have been installed to accommodate the increasing number of pilgrims."
      ]
    }
    ,
    {
      name: "Rameshwaram Temple",
      location: "India",
      type: "Cultural",
      description: "A historic Hindu temple in Tamil Nadu, known for its massive corridors and association with the Ramayana.",
      scientific_importance: "Showcases the finest Dravidian architecture and one of the longest temple corridors in the world.",
      conservation_efforts: "Government-funded conservation and coastal protection programs to mitigate climate impact.",
      images: ["https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/rameswaram-temple-1656167436_f2c551193bb7d4bc6f70.webp"],
      coordinates: { lat: 9.288, lng: 79.312 },
      established_date: "Ancient",
      tags: ["Hinduism", "Pilgrimage", "Religious", "Ancient City"],
      moreInfo: [
        "Rameswaram, a town on Pamban Island in Tamil Nadu, India, is renowned for its religious significance and natural beauty.",
        "It is home to the Ramanathaswamy Temple, one of the twelve Jyotirlinga shrines, making it a major pilgrimage destination for Hindus.",
        "The temple is known for its stunning Dravidian architecture, intricate carvings, and the longest temple corridors in the world.",
        "A sacred beach nearby is where pilgrims take a ritual dip to cleanse their sins.",
        "Dhanushkodi, a ghost town at the southeastern tip of the island, is believed to be the place where Lord Rama’s bridge to Lanka began.",
        "A digital queue system has been introduced to streamline pilgrim entry and darshan process.",
        "The New Pamban Railway Bridge, set to be inaugurated in March 2025, will replace the century-old bridge, improving connectivity to Rameswaram for both locals and tourists."
      ]
    }
,    
   
    {
      name: "Pushkar Camel Fair",
      location: "Pushkar, Rajasthan, India",
      type: "Cultural",
      description: "An annual camel fair featuring livestock trading, cultural shows, and traditional Rajasthani events.",
      scientific_importance: "Offers insights into desert animal husbandry, rural life, and traditional cultural expressions.",
      conservation_efforts: "Efforts to maintain traditional rural practices and promote sustainable tourism.",
      images: [
        "https://www.pushkaradventuredesertcamp.com/images/pushkar-fair-tour-1.jpg"
      ],
      coordinates: { lat: 26.4919, lng: 74.5527 },
      established_date: "Ancient",
      recent_developments: "Increasing international tourism, blending traditional with modern attractions.",
      tags: ["Camel Fair", "Rajasthan", "Cultural Festival"],
      moreInfo: [
        "The Rajasthan government actively promotes the Pushkar Fair as a major tourist attraction, both domestically and internationally.",
        "Efforts are made to improve infrastructure for visitors, including accommodation, transportation, and sanitation facilities.",
        "While embracing modernity, the fair strives to preserve its traditional character and showcase the unique culture of Rajasthan.",
        "The most recent Pushkar Fair was held from November 9th to 15th, 2024.",
        "This year's fair highlighted the rich cultural heritage of Rajasthan with events like traditional dance performances, folk music concerts, and art exhibitions.",
        "A new addition was the Sand Art Festival, featuring artists creating stunning sculptures and depictions on the sandy landscape.",
        "The fair continued its tradition as a major livestock market, with thousands of animals being traded."
      ]
    }
    
  ,
    {
      name: "Bhimbetka Rock Shelters",
      location: "India",
      type: "Cultural",
      description:
        "A UNESCO-listed prehistoric archaeological site with rock paintings dating back to over 30,000 years.",
      scientific_importance:
        "Provides insights into early human civilization and artistic expression.",
      conservation_efforts:
        "Managed by the Archaeological Survey of India with restricted access to prevent damage.",
      images: [
        "https://smarthistory.org/wp-content/uploads/2022/08/Bhimbetka_war_scene-1.jpg",
      ],
      coordinates: { lat: 22.9384, lng: 77.5938 },
      established_date: "2003-07-05",
      recent_developments: "New protective structures installed to prevent weathering.",
      tags: ["Prehistoric", "Rock Art", "Cave Paintings"],
      moreInfo: [
        "The shelters provide a window into the lives of early humans in India, dating back over 100,000 years. This makes Bhimbetka one of the most significant archaeological sites in South Asia for understanding the Paleolithic and Mesolithic periods.",
        "The rock art found within the shelters offers a visual record of human cultural evolution, spanning thousands of years.",
        "The depictions of animals in the paintings help scientists understand the types of fauna that existed in the region during different prehistoric periods.",
        "Recent Developments: Recent Fossil Discovery - In 2021, fossils of Dickinsonia, an ancient animal, were found at Bhimbetka. This discovery provides evidence that the area was once a shallow sea.Adds weight to the theory that India was once part of the Gondwanaland supercontinent.Opens new research possibilities into the link between geology and the evolution of complex life."
      ]
    }
    ,
 
  
    {
      name: "Chettinad Heritage and Cultural Festival",
      location: "Chettinad, India",
      type: "Cultural",
      description: "A festival celebrating the restoration of Chettinad's grand mansions and cultural traditions.",
      scientific_importance: "Highlights architectural conservation, regional cultural traditions, and culinary heritage.",
      conservation_efforts: "Revitalization of historic mansions into heritage hotels to preserve the region's heritage.",
      images: [
        "https://assets.cntraveller.in/photos/64ba6103b9660a556bb21968/16:9/w_5824,h_3276,c_limit/DSC08812.JPG"
      ],
      coordinates: { lat: 10.1499, lng: 78.6349 },
      established_date: "Ancient",
      recent_developments: "Transformation of mansions into heritage hotels and tourism growth.",
      tags: ["Architecture", "Heritage Hotels"],
      moreInfo: [
        "The Chettinad Heritage and Cultural Festival is a relatively new but rapidly growing event that celebrates the unique heritage and culture of the Chettinad region in Tamil Nadu, India.",
        "This region is known for its distinctive architecture, cuisine, and traditions, all of which are showcased during the festival.",
        "The festival aims to preserve and promote the unique cultural heritage of the Chettinad region, which is facing challenges due to modernization and migration.",
        "The most recent Chettinad Heritage and Cultural Festival took place from September 27th to 30th, 2024. This was the second edition of the festival, building on the success of the inaugural event.",
        "Traditional dance and music performances showcased the rich artistic heritage of Chettinad.",
        "The festival offered a chance to savor the unique flavors of Chettinad cuisine, known for its use of spices and intricate recipes."
      ]
    }
,    
  
  {
    name: "Dholavira",
    location: "Gujarat, India",
    type: "Cultural",
    description: "An ancient Harappan city known for its well-planned water conservation system.",
    scientific_importance: "Important for studying ancient water management and urban infrastructure.",
    conservation_efforts: "Declared a UNESCO World Heritage Site in 2021, with ongoing conservation work.",
    images: [
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/indus-valley-civilization-sites/dholavira/Dholavira-Banner.jpg"
    ],
    coordinates: { lat: 23.8859, lng: 70.3652 },
    established_date: "2500 BCE",
    recent_developments: "Improved accessibility for tourists and researchers.",
    tags: ["Indus Valley", "Gujarat", "Water Management"],
    moreInfo: [
      "Dholavira showcases some of the most sophisticated urban planning of the Indus Valley Civilization.",
      "The city was meticulously laid out with a complex system of fortifications, streets, and drainage, demonstrating a high level of engineering and organizational skills. This provides valuable insights into how these early urban centers functioned.",
      "Dholavira is renowned for its elaborate water harvesting and management system.",
      "The recent developments have been more about recognition and ongoing research,and Dholavira was officially inscribed on the UNESCO World Heritage List in July 2021."
    ]
  },
  
    
  {
    name: "Lothal",
    location: "India",
    type: "Cultural",
    description:
      "One of the most prominent cities of the ancient Indus Valley Civilization, known for its dockyard.",
    scientific_importance:
      "Significant for studying early urban planning, trade, and maritime activities.",
    conservation_efforts:
      "Maintained by the ASI, with recent archaeological excavations and preservation efforts.",
    images: [
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/lothal/Lothal-Banner.jpg"
    ],
    coordinates: { lat: 22.5211, lng: 72.2454 },
    established_date: "2400 BCE",
    recent_developments:
      "Digital reconstruction efforts to visualize the ancient city.",
    tags: ["Indus Valley", "Archaeology", "Gujarat", "Dockyard"],
    moreInfo: [
      "Lothal's well-planned layout, with a grid pattern of streets, a sophisticated drainage system, and a citadel, reflects the Indus people's urban planning and engineering expertise.",
      "The discovery of standardized weights and measures at Lothal indicates a sophisticated system of measurement and accounting.",
      "Lothal provides the earliest evidence of rice cultivation in the Indian subcontinent.",
      " While Lothal has been extensively excavated, recent research has shed new light on its dockyard and its connection to ancient trade routes.",
      "Confirmation of the Dockyard: A new study by IIT Gandhinagar (2024) has provided strong evidence confirming the existence of a dockyard at Lothal."
    ]
  },
  
  {
    name: "Harappa",
    location: "Pakistan",
    type: "Cultural",
    description: "A major urban center of the Indus Valley Civilization with advanced town planning and drainage systems.",
    scientific_importance: "Provides evidence of one of the world's earliest urban civilizations.",
    conservation_efforts: "Excavations continue under UNESCO's guidance, with preservation projects ongoing.",
    images: [
      "https://www.thoughtco.com/thmb/Dg2hBCNTThUKPfsXiv_H74dW6FY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IndusValleySeal-4d023acb287048068238ee55624855b3.jpg"
    ],
    coordinates: { lat: 30.6300, lng: 72.8758 },
    established_date: "2600 BCE",
    tags: ["Indus Valley", "Archaeology", "Pakistan"],
    moreInfo: [
      "Harappa showcases a highly sophisticated level of urban planning and engineering.",
      "The city was laid out in a grid pattern with well-defined streets, a complex drainage system, and a citadel.",
      "Artifacts such as pottery, seals, and bronze objects demonstrate the craftsmanship and technological skills in metallurgy of the Harappans.",
      "Recent conservation efforts include 3D mapping and preservation of eroded structures.",
     
      "Understanding Social Organization: Archaeologists are increasingly using scientific methods to analyze the social structure of Harappa.",
      "Technological Advancements: Researchers are utilizing advanced techniques such as ground-penetrating radar, satellite imagery, and DNA analysis to further study Harappa."
    ]
  }
  ,

  {
    name: "Mahabalipuram Shore Temple",
    location: "India",
    type: "Cultural",
    description:
      "A group of temples built during the Pallava dynasty, known for their intricate rock carvings.",
    scientific_importance:
      "One of the earliest structural temples in South India, showcasing Dravidian architecture.",
    conservation_efforts:
      "Managed by the ASI, with restoration efforts to protect against coastal erosion.",
    images: [
      "https://cdn.britannica.com/12/100812-050-27483D5E/Mamallapuram-Shore-Temple-Chennai-India-Tamil-Nadu.jpg"
    ],
    coordinates: { lat: 12.6178, lng: 80.1918 },
    established_date: "700 CE",
    recent_developments:
      "Coastal barriers installed to prevent seawater damage.",
    tags: ["Pallava", "Dravidian Architecture"],
    moreInfo: [
      "The Shore Temple, a UNESCO World Heritage Site in Mahabalipuram, Tamil Nadu, is a stunning example of Dravidian architecture from the Pallava dynasty.",
      "The temple complex consists of three shrines: two dedicated to Shiva and one to Vishnu.",
      "The temple showcases typical Dravidian features like a pyramidal tower (vimana), intricate carvings, and sculptures of deities.",
      " The Shore Temple has become India's first green energy archaeological site through the Green Heritage Project (September 2023).",
      "Clean drinking water from a solar-powered reverse osmosis (RO) plant and three water kiosks provide clean drinking water to tourists (September 2023).",
      "Electric vehicles have an exclusive parking structure with three charging stations to support sustainable transport (September 2023).",
      "Local women drive electric buggies to reduce the carbon impact of transportation (September 2023)."
    ]
  },
  
  
  {
    name: "Kalibangan",
    location: "India",
    type: "Cultural",
    description:
      "An important Indus Valley Civilization site known for its unique fire altars and early plowed field marks.",
    scientific_importance:
      "Provides archaeological evidence of early urban planning, irrigation systems, and ritualistic practices.",
    conservation_efforts:
      "Protected by the Archaeological Survey of India with ongoing research and preservation work.",
    images: [
      "https://cdn.britannica.com/22/196822-050-0E40EBC2/Ruins-city-Harappa-Pakistan-Punjab.jpg"
    ],
    coordinates: { lat: 29.4700, lng: 74.1330 },
    established_date: "1953-01-01",
    recent_developments:
      "Recent studies highlight advanced drainage systems and pottery artifacts.",
    tags: ["Indus Valley", "Archaeology", "Harappan Culture", "Rajasthan"],
    moreInfo: [
      "Kalibangan, located in Rajasthan, India, is a significant archaeological site from the Indus Valley Civilization.",
      "Kalibangan shows clear evidence of both pre-Harappan and Harappan settlements, providing valuable information about the transition to urban life.",
      "The city's grid layout and fortifications highlight the advanced planning skills of the Indus people.",
      "Early Development (Pre-Harappan): Around 3500 BCE, the area started as a small settlement.",
      "Early Harappan (c. 3300-2600 BCE): Kalibangan grew and showed the beginning of urban planning with mud-brick houses and a grid-like layout. Pottery styles and other artifacts indicate connections to the Sothi-Siswal culture.",
      "Harappan Period (c. 2600-1900 BCE): Kalibangan developed into a major city with a fortified citadel and a lower town. The city layout followed a grid pattern, similar to other Indus Valley cities like Mohenjo-daro and Harappa.",
      "Agriculture: Kalibangan is famous for the 'world's earliest attested ploughed field', dating back to around 2800 BCE, showing advanced agricultural practices and evidence of multiple crops being grown."
    ]
  }
,  
{
  name: "Halebeedu",
  location: "India",
  type: "Cultural",
  description: "The capital of the Hoysala Empire, known for its intricate temple carvings and architecture.",
  scientific_importance: "Showcases advanced Dravidian architecture and sculptural detailing from the 12th century.",
  conservation_efforts: "Maintained by the Archaeological Survey of India and UNESCO for structural preservation.",
  images: ["https://kevinstandagephotography.wordpress.com/wp-content/uploads/2016/05/ksp_8359.jpg"],
  coordinates: { lat: 13.2167, lng: 75.9869 },
  established_date: "1981-01-01",
  tags: ["Hoysala", "Temple Architecture", "Karnataka", "Heritage"],
  moreInfo: [
    "The temples are predominantly built from soapstone (steatite), a relatively soft stone that allows for intricate carving.",
    "The level of detail and precision achieved in the carvings is remarkable, especially considering the tools and techniques available at the time.",
    "Despite the intricate carvings and complex design, the temples have stood for centuries, demonstrating the structural soundness and engineering skills of the Hoysala builders.",
    "Recent restoration projects focus on preserving sculptures and temple structures to prevent further erosion.",
    "There has been a growing emphasis on sustainable tourism and conservation efforts at Halebeedu, including:",
    "Improving visitor facilities, such as restrooms, information centers, and accessibility features to enhance the visitor experience while minimizing site impact.",
    "Implementing better waste management to handle tourist-generated waste and prevent pollution around the temple complex."
  ]
}
,
{
  name: "Sanchi Stupa",
  location: "India",
  type: "Cultural",
  description: "A major Buddhist monument in Madhya Pradesh, built by Emperor Ashoka in the 3rd century BCE, featuring intricate toranas (gateways).",
  scientific_importance: "Earliest surviving example of a large-scale Buddhist stupa, reflecting Mauryan and post-Mauryan architectural evolution.",
  conservation_efforts: "UNESCO and ASI work on preservation efforts, including stone restoration.",
  images: ["https://www.thecitizen.in/h-upload/old_images/1500x900_157906-dc84725a2128de43d304dff0c91ba77b.webp"],
  coordinates: { lat: 23.479, lng: 77.739 },
  established_date: "1989-01-01",
  tags: ["Buddhist-Hindu", "Archaeology", "Ancient City", "Religious"],
  moreInfo: [
    "Sanchi Stupa is a significant Buddhist monument located in Madhya Pradesh, India.",
    "It is renowned for its intricate carvings and architectural grandeur, showcasing the evolution of Buddhist art and architecture from the 3rd century BCE to the 12th century CE.",
    "The stupa features a hemispherical dome, four ornamental gateways (toranas) adorned with intricate carvings, and a surrounding railing.",
    "The carvings on the toranas depict scenes from the life of Buddha, Jataka tales, and various Buddhist symbols, reflecting centuries of artistic evolution.",
    "Virtual reality tours have been introduced for better visitor engagement.",
    "In December 2022, a replica of the East Gate of the Sanchi Stupa was unveiled in front of the Humboldt Forum museum in Berlin, Germany.",
    "This 1:1 reproduction, standing approximately 10 meters high and 6 meters wide, and weighing around 150 tonnes, was created using 3D scanning, modern robotics, and the skills of both German and Indian sculptors."
  ]
}
,
    
    
    {
      name: "Mohenjo-daro",
      location: "Pakistan",
      type: "Cultural",
      description:
        "A major city of the Indus Valley Civilization, known for its advanced urban planning and drainage system.",
      scientific_importance:
        "Offers insights into one of the world's oldest civilizations and its urban infrastructure.",
      conservation_efforts:
        "Under threat from erosion and environmental changes; UNESCO and Pakistani authorities working on preservation.",
      images: [
        "https://eagleeye.com.pk/pttl/wp-content/uploads/2017/02/Remains-tower-Mohenjo-daro-province-Pakistan-Sindh.jpg"
      ],
      coordinates: { lat: 27.3294, lng: 68.1389 },
      established_date: "1922-01-01",
      recent_developments:
        "Excavation work continues to uncover more of the city's layout and artifacts.",
      tags: ["Indus Valley", "Archaeology", "Pakistan", "Ancient City"],
      moreInfo: [
        "Mohenjo-daro showcases a highly sophisticated level of urban planning and engineering.",
        "The city was laid out in a grid pattern with well-defined streets, a complex drainage system, and a citadel.",
        "The discovery of standardized weights and measures at Mohenjo-daro, like at other Indus sites, indicates a sophisticated system of measurement and accounting.",
        "Conservation and Preservation: The primary focus at Mohenjo-daro is on conserving and preserving what remains.",
        "Water Management: Efforts to control groundwater and salinity to protect the structures.",
        "Structural Stabilization: Reinforcing walls and foundations to prevent collapse."
      ]
    },
    
    {
      name: "Virupaksha Temple",
      location: "India",
      type: "Cultural",
      description: "An ancient temple dedicated to Lord Shiva, part of the Hampi ruins and a significant religious site.",
      scientific_importance: "Demonstrates Vijayanagara architectural brilliance with intricate carvings and structures.",
      conservation_efforts: "Protected by UNESCO and ASI, with ongoing restoration efforts.",
      images: ["https://s7ap1.scene7.com/is/image/incredibleindia/virupaksha-temple-hampi-karnataka-1-attr-hero?qlt=82&ts=1726721263787"],
      coordinates: { lat: 15.3350, lng: 76.4623 },
      established_date: "1336-01-01",
      recent_developments: "Restoration projects underway to maintain temple murals and gopuram.",
      tags: ["Hampi", "Temple", "Vijayanagara Empire", "Karnataka"],
      moreInfo: [
        "The temple, primarily built of granite, showcases the advanced engineering skills of the Vijayanagara artisans.",
        "The intricate carvings that adorn the temple walls, pillars, and ceilings are a testament to the artisans' mastery of stone carving techniques.",
        "The temple's design incorporates acoustic principles to enhance the resonance of chants and music within its halls.",
        "In May 2024, a portion of the temple's 'saalu mantapa' (pavilion) collapsed due to heavy rains. The Archaeological Survey of India (ASI) has initiated restoration work to address the damage and reinforce the structure.",
        "Ongoing efforts by the ASI focus on structural stabilization, groundwater management, and preserving the temple's intricate carvings to protect against environmental wear and human-induced challenges."
      ]
    },
    {
      name: "Petra",
      location: "Jordan",
      type: "Cultural",
      description: "An ancient rock-cut city known for its stunning architecture and Nabataean civilization.",
      scientific_importance: "Provides insights into ancient trade routes and advanced water management systems.",
      conservation_efforts: "Protected by UNESCO with restrictions on excavation to preserve structures.",
      images: ["https://i0.wp.com/www.touristjordan.com/wp-content/uploads/2023/02/shutterstock_1490981186-scaled.jpg?fit=4000%2C2751&ssl=1"],
      coordinates: { lat: 30.3285, lng: 35.4444 },
      established_date: "1985-12-06",
      recent_developments: "New conservation techniques introduced to prevent further erosion.",
      tags: ["Nabataean", "Rock-Cut Architecture", "Jordan", "Ancient City"],
      moreInfo: [
        "Petra, the 'Rose City,' is an ancient city located in present-day Jordan. Carved into sandstone cliffs, it's famous for its stunning architecture and intricate water systems.",
        "Petra is a remarkable testament to human ingenuity and a fascinating glimpse into the past. Its ongoing preservation and study ensure that this ancient city continues to captivate and inspire.",
        "Petra's strategic location made it an important trading center, connecting routes between Arabia, Egypt, and the Mediterranean.",
        "A new tourism development master plan was completed, aiming to promote sustainable tourism and enhance the visitor experience in 2024.",
        "Archaeologists discovered a tomb beneath the Treasury (Al-Khazneh), one of Petra's most iconic structures, in 2024.",
        "Ongoing efforts to preserve and protect Petra from the effects of erosion, tourism, and environmental factors."
      ]
    }
,    
    
    {
      name: "Acropolis of Athens",
      location: "Greece",
      type: "Cultural",
      description: "A symbol of ancient Greek civilization, featuring the Parthenon and other historical structures.",
      scientific_importance: "Significant for the study of Greek architecture, philosophy, and democracy.",
      conservation_efforts: "Extensive restoration projects undertaken by UNESCO and Greek authorities.",
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVacrsickYnW_3HzJgH1wigi0Z6i1bHCIwVg&s"],
      coordinates: { lat: 37.9715, lng: 23.7266 },
      established_date: "1987-09-20",
      recent_developments: "Ongoing structural reinforcement to prevent further decay.",
      tags: ["Ancient Greece", "Athens", "Parthenon", "Philosophy"],
      moreInfo: [
        "The Parthenon, the most iconic structure on the Acropolis, exemplifies the Greeks' mastery of architecture and engineering.",
        "Its use of Doric columns, precise proportions, and subtle optical corrections (like the entasis of the columns) demonstrate a deep understanding of structural mechanics and aesthetics.",
        "The Acropolis structures were primarily built using Pentelic marble, quarried from nearby Mount Pentelicus.",
        "The Acropolis Restoration Project is a long-term effort aiming to preserve and restore the monuments, focusing on structural stability and conservation.",
        "Recent structural stabilization efforts include reinforcing the foundations and walls of the Parthenon, Erechtheion, and other structures to protect them from earthquakes and weathering."
      ]
    },
    
    {
      name: "Lalibela Rock-Hewn Churches",
      location: "Ethiopia",
      type: "Cultural",
      description: "A group of monolithic rock-hewn churches built during the 12th and 13th centuries.",
      scientific_importance: "Represents an extraordinary engineering and religious heritage in African history.",
      conservation_efforts: "Monitored by UNESCO, with efforts to mitigate water damage and structural erosion.",
      images: ["https://images.squarespace-cdn.com/content/v1/56ec44b41d07c0db86a517e5/1474879971205-OSOQ0282KL0Y0YZ5Z3UH/rock-hewn-churches-lalibela-ethiopia"],
      coordinates: { lat: 12.0345, lng: 39.0420 },
      established_date: "1978-12-08",
      recent_developments: "New protective coverings installed to prevent weathering.",
      tags: ["Ethiopia", "Christianity", "Rock-Cut Architecture", "Medieval"],
      moreInfo: [
        "The Lalibela rock-hewn churches in Ethiopia are a remarkable UNESCO World Heritage Site, a complex of 11 monolithic churches carved out of solid rock in the 12th or 13th century.",
        "The churches were carved from top to bottom, a feat of engineering and artistry. Some are completely detached from the rock, while others are partially connected.",
        "Lalibela remains an important pilgrimage site for Ethiopian Orthodox Christians, with active worship and ceremonies taking place.",
        "Conservation efforts are ongoing as the churches face challenges from weathering, erosion, and earthquakes. Organizations like UNESCO and the World Monuments Fund have been actively involved.",
        "Structural stabilization, cleaning, and protection efforts are continuously being undertaken to preserve the fragile rock.",
        "Experts are working on finding more sustainable and less visually disruptive ways to protect the churches while maintaining their historic integrity."
      ]
    }
    
  ,
  {
    name: "Venice and its Lagoon",
    location: "Italy",
    type: "Cultural",
    description: "A historic city built on a network of canals, famous for its unique architecture, art, and cultural heritage.",
    scientific_importance: "A remarkable example of human adaptation to an aquatic environment, showcasing engineering marvels like canals and flood barriers.",
    conservation_efforts: "UNESCO and Italian authorities are working on controlling rising water levels and preserving historical buildings.",
    images: ["https://blackplatinumgold.com/wp-content/uploads/2022/11/5-19.jpg"],
    coordinates: { lat: 45.4408, lng: 12.3155 },
    established_date: "1987-12-10",
    recent_developments: "MOSE flood barriers installed to protect the city from rising sea levels.",
    tags: ["Italy", "Canals", "Renaissance", "Architecture"],
    moreInfo: [
      "Venice was founded in the 5th century AD on a group of 118 small islands in the Venetian Lagoon. It grew into a major maritime power, controlling trade routes in the Mediterranean for centuries.",
      "The city is built on these islands, with canals taking the place of roads. Gondolas and boats are the primary means of transportation.",
      "Venice is renowned for its stunning architecture, with a mix of styles reflecting its long history. Palaces, churches, and bridges line the canals, creating a picturesque cityscape.",
      "The challenges of rising sea levels and increased flooding (Acqua Alta) are a major focus.",
      "The MOSE project, a system of flood barriers, has been under development for decades and became partially operational in 2020. It's an ongoing process to refine and fully implement this system.",
      "Venice began experimenting with a day-tripper entry fee in 2024 to combat overtourism. This is a pilot program, and its future implementation is still being evaluated."
    ]
  }
,  
      {
        name: "Rani ki Vav",
        location: "India",
        type: "Cultural",
        description: "An intricately designed stepwell in Gujarat, known for its beautiful sculptures and historical significance.",
        scientific_importance: "Represents advanced water management systems in medieval India and showcases exquisite Maru-Gurjara architecture.",
        conservation_efforts: "UNESCO and ASI have undertaken restoration and water conservation measures.",
        images: ["https://thefloatingpebbles.com/wp-content/uploads/2023/09/RANI-KI-VAV-1-of-1.jpg"],
        coordinates: { lat: 23.8589, lng: 72.1017 },
        established_date: "2014-06-22",
        recent_developments: "Preservation projects launched to prevent structural degradation.",
        tags: ["Stepwell", "Gujarat", "Ancient Engineering", "Maru-Gurjara Architecture"],
        moreInfo: [
          "Rani ki Vav is a prime example of a sophisticated water management system.",
          "It showcases the ingenuity of the people who designed and built it, demonstrating their deep understanding of hydrogeology, water conservation, and hydraulic engineering.",
          "The stepwell was built to access groundwater in an arid region, highlighting the ability of ancient civilizations to adapt to their environment and develop sustainable water solutions.",
          "The Archaeological Survey of India (ASI) is responsible for the ongoing conservation and restoration of Rani ki Vav.",
          "As a UNESCO World Heritage Site, there is a focus on promoting sustainable tourism at Rani ki Vav.",
          "Scholars continue to study Rani ki Vav to better understand its history, architecture, and cultural significance."
        ]
      }
      ,
      {
        name: "Konark Sun Temple",
        location: "India",
        type: "Cultural",
        description: "A 13th-century temple dedicated to the Sun God, known for its stunning chariot-shaped design.",
        scientific_importance: "Exemplifies advanced astronomical knowledge and intricate stone carvings of the Kalinga architectural style.",
        conservation_efforts: "Regular maintenance by ASI and UNESCO to prevent erosion and structural damage.",
        images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1200px-Konarka_Temple.jpg"],
        coordinates: { lat: 19.8876, lng: 86.0945 },
        established_date: "1984-07-15",
        recent_developments: "New visitor guidelines to prevent overcrowding and reduce physical impact on the structure.",
        tags: ["Temple", "Odisha", "Sun Worship", "Kalinga Architecture"]
      },
     
      {
        name: "Ajanta Caves",
        location: "India",
        type: "Cultural",
        description: "Rock-cut Buddhist cave monuments in Maharashtra, featuring some of the finest surviving examples of ancient Indian painting.",
        scientific_importance: "Represents early Buddhist art and religious symbolism dating back to the 2nd century BCE.",
        conservation_efforts: "UNESCO and ASI conduct preservation projects, including humidity control inside caves.",
        images: ["https://s7ap1.scene7.com/is/image/incredibleindia/ajanta-caves-chhatrapati-sambhaji-nagar-maharashtra-attr-hero-2?qlt=82&ts=1727010576169"],
        coordinates: { lat: 20.551, lng: 75.700 },
        established_date: "1983-01-01",
        tags: ["Maharashtra", "Cave Paintings", "Rock-Cut", "Buddhist-Hindu", "Archaeology"],
        moreInfo: [
          "The Ajanta Caves, a UNESCO World Heritage Site in Maharashtra, are renowned for their exquisite murals and sculptures depicting the life of Buddha and Jataka tales.",
          "The caves are carved out of a horseshoe-shaped cliff face made of volcanic basalt rock.",
          "Comprising 30 caves, the excavation is an extraordinary feat given the time period (2nd century BCE to 5th century CE) and the primitive tools available.",
          "UNESCO and ASI have implemented preservation measures, such as controlling humidity levels inside the caves, to protect the delicate murals from deterioration.",
          "New visitor guidelines have been introduced to prevent excessive human impact on fragile paintings and sculptures.",
          "In February 2024, the Ministry of Tourism included Ajanta and Ellora Caves in the Swadesh Darshan Scheme 2.0, focusing on sustainable and responsible tourism development.",
          "While this scheme does not alter the caves themselves, it aims to improve visitor experience and infrastructure around the site."
        ]
      }
,      
      {
        name: "Leaning Tower of Pisa",
        location: "Italy",
        type: "Cultural",
        description: "A world-famous freestanding bell tower known for its unintended tilt due to unstable foundation soil.",
        scientific_importance: "A prime example of medieval Romanesque architecture and structural engineering challenges.",
        conservation_efforts: "Engineers have implemented stabilization techniques to reduce the tilt and prevent collapse.",
        images: ["https://cdn.britannica.com/88/80588-050-8D944BFE/Leaning-Tower-of-Pisa-Italy.jpg"],
        coordinates: { lat: 43.7230, lng: 10.3966 },
        established_date: "1987-12-06",
        recent_developments: "Advanced soil reinforcement techniques have stabilized the tower’s tilt, ensuring its safety for future generations.",
        tags: ["Italy", "Architecture", "Romanesque", "Historical Landmark"],
        moreInfo: [
          "The tower's lean is a direct result of the unstable subsoil on which it was built.",
          "The initial builders underestimated the compressibility of the clay and sand layers beneath the tower.",
          "The ongoing efforts to stabilize the tower have provided invaluable data and insights into soil mechanics, particularly concerning soft soils and their behavior under load.",
          "The tower is constantly monitored by engineers and experts.",
          "The primary goal is to ensure the tower's long-term stability and prevent any further significant leaning."
        ]
      }
      ,
      {
        name: "Nita Mukesh Ambani Cultural Centre (NMACC)",
        location: "Mumbai, India",
        type: "Cultural",
        description:
          "A state-of-the-art performing arts and cultural center showcasing Indian and global arts.",
        scientific_importance:
          "A hub for the promotion and preservation of Indian arts and culture.",
        conservation_efforts:
          "Focus on the preservation and display of traditional and modern art forms.",
        images: [
          "https://www.architectandinteriorsindia.com/cloud/2023/04/03/nita-mukesh-ambani-cultural-centre-facade-press-release-fullWidthMedia-19417002-fullWidthMedia-23905002-scaled.jpg"
        ],
        coordinates: { lat: 19.0760, lng: 72.8777 },
        established_date: "2023",
        recent_developments:
          "The inauguration of the venue has brought significant cultural attention to Mumbai.",
        tags: ["Performing Arts", "Cultural Hub", "Mumbai"],
        moreInfo: [
          "By providing a platform for traditional Indian arts, the NMACC contributes to the preservation and transmission of cultural knowledge.",
          "The NMACC aims to foster interdisciplinary collaboration between artists, scientists, and other professionals. This can lead to new and innovative approaches to art and culture, as well as new ways of thinking about science and technology.",
          "The NMACC has a strong focus on education and outreach. It offers a variety of programs for children, students, and adults, designed to promote an appreciation for the arts and culture.",
          "Performing Arts: The NMACC's theaters host a variety of performances, including music, dance, and drama. Recent highlights include the India debut of the musical 'The Phantom of the Opera' and performances by renowned artists like Akram Khan."
        ]
      }
      
    
  
  
];

const seedDB = async () => {
  try {
    await connectDB();
    console.log("✅ MongoDB Connected");

    // Clear existing data
    await HeritageSite.deleteMany({});
    console.log("Existing data cleared.");

    // Insert data with validation
    for (const site of sampleHeritageSites) {
      // Ensure the object is properly defined
      if (!site || !site.name) {
        console.error("⚠️ Skipping an undefined or malformed site entry:", site);
        continue; // Skip this entry
      }

      const newSite = new HeritageSite(site);
      const validationError = newSite.validateSync();

      if (!validationError) {
        await newSite.save();
        console.log(`✅ Inserted: ${newSite.name}`);
      } else {
        console.error(`❌ Validation failed for ${site.name}:`, validationError);
      }
    }

    console.log("🎉 Sample data inserted successfully!");
  } catch (error) {
    console.error("❌ Error inserting sample data:", error);
  } finally {
    mongoose.connection.close();
    console.log("🔌 MongoDB Disconnected.");
  }
};

seedDB();

