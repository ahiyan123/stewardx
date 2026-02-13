import { SurvivalGuide, AffiliateProduct } from '../types';

const affiliateProducts: Record<string, AffiliateProduct[]> = {
  fireSafety: [
    {
      id: 'fire-ext-001',
      name: 'Multi-Purpose Fire Extinguisher',
      description: 'ABC rated, 5lb capacity. Essential for home/vehicle safety.',
      affiliateLink: 'https://amazon.com/dp/B00002ND64',
      imageUrl: 'https://images.pexels.com/photos/279979/pexels-photo-279979.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: '$45.99',
    },
    {
      id: 'smoke-mask-001',
      name: 'Emergency Smoke Hood',
      description: 'Fire escape mask with 15-minute protection. Compact design.',
      affiliateLink: 'https://amazon.com/dp/B07PDCCL2F',
      imageUrl: 'https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: '$39.99',
    },
  ],
  waterPurification: [
    {
      id: 'water-filter-001',
      name: 'Portable Water Filter',
      description: 'Removes 99.99% of bacteria. 1000L capacity.',
      affiliateLink: 'https://amazon.com/dp/B006QF3TW4',
      imageUrl: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: '$24.99',
    },
    {
      id: 'purification-tabs-001',
      name: 'Water Purification Tablets',
      description: 'Military-grade tablets. 50 tablet pack.',
      affiliateLink: 'https://amazon.com/dp/B0009I3T3S',
      imageUrl: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: '$12.99',
    },
  ],
  firstAid: [
    {
      id: 'first-aid-kit-001',
      name: 'Tactical First Aid Kit',
      description: 'Military-grade 250-piece kit. MOLLE compatible.',
      affiliateLink: 'https://amazon.com/dp/B07VFLD833',
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: '$49.99',
    },
    {
      id: 'tourniquet-001',
      name: 'CAT Tourniquet Gen 7',
      description: 'Combat-proven hemorrhage control. NSN approved.',
      affiliateLink: 'https://amazon.com/dp/B00HZ2DK4C',
      imageUrl: 'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: '$28.99',
    },
  ],
  shelter: [
    {
      id: 'emergency-tent-001',
      name: 'Emergency Survival Tent',
      description: 'Reflective mylar, 2-person capacity. Windproof.',
      affiliateLink: 'https://amazon.com/dp/B07QWLDQ4F',
      imageUrl: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: '$19.99',
    },
    {
      id: 'sleeping-bag-001',
      name: 'Tactical Sleeping Bag',
      description: 'All-weather, -10°F rated. Compression sack included.',
      affiliateLink: 'https://amazon.com/dp/B07MLCJVCV',
      imageUrl: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: '$64.99',
    },
  ],
};

export const survivalGuides: SurvivalGuide[] = [
  {
    id: 'fire-safety',
    title: 'FIRE SAFETY PROTOCOL',
    category: 'FIRE',
    content: `IMMEDIATE ACTION PROTOCOL:

1. ALERT STATUS
   - Activate building alarm immediately
   - Call emergency services (use SOS DIALER)
   - Never assume someone else has called

2. EVACUATION SEQUENCE
   - Stay low - heat and smoke rise
   - Check doors with back of hand before opening
   - Close doors behind you to slow fire spread
   - Use stairs NEVER elevators
   - Proceed to designated assembly point

3. IF TRAPPED
   - Close all doors between you and fire
   - Seal cracks with wet towels/clothing
   - Signal from window with bright cloth
   - Stay low where air is clearer

4. STOP, DROP, ROLL
   - If clothing catches fire
   - Cover face with hands
   - Drop to ground
   - Roll repeatedly until flames are out

5. EXTINGUISHER USE (PASS METHOD)
   - Pull pin
   - Aim at base of fire
   - Squeeze handle
   - Sweep side to side
   - Only fight small contained fires
   - Always maintain exit path

PREVENTION PROTOCOLS:
- Test smoke alarms monthly
- Keep extinguisher accessible
- Plan and practice escape routes
- Never leave cooking unattended
- Store flammables properly

REMEMBER: Your life is more valuable than any possession. Exit immediately if fire is spreading.`,
    requiredTools: affiliateProducts.fireSafety,
  },
  {
    id: 'water-purification',
    title: 'WATER PURIFICATION DOCTRINE',
    category: 'WATER',
    content: `WATER ACQUISITION & TREATMENT:

1. SOURCE IDENTIFICATION (Priority Order)
   - Fresh springs and moving streams
   - Rainwater collection
   - Morning dew collection
   - Clear still water (requires treatment)
   - Avoid: Stagnant water, water near dead animals

2. FILTRATION METHODS

   A. CLOTH PRE-FILTER
   - Layer clean cloth 3-4 times
   - Removes visible particles and debris
   - Essential first step before purification

   B. SAND/CHARCOAL FILTER
   - Layer from bottom: gravel, sand, charcoal, sand
   - Pour water through slowly
   - Repeat filtration 2-3 times

   C. PORTABLE FILTER
   - Follow manufacturer instructions
   - Pre-filter turbid water
   - Track filter lifespan

3. PURIFICATION METHODS

   A. BOILING (Most Reliable)
   - Rolling boil for 1 minute at sea level
   - Add 1 minute per 1000ft elevation
   - Let cool naturally
   - Aerate by pouring between containers

   B. CHEMICAL TREATMENT
   - Purification tablets: Follow package instructions
   - Bleach method: 2 drops per liter, wait 30 min
   - Double treatment time for cold/cloudy water

   C. UV PURIFICATION
   - Requires clear water
   - Battery dependent
   - 60-90 seconds per liter

4. STORAGE PROTOCOLS
   - Use clean, sealed containers
   - Protect from sunlight and heat
   - Rotate stock every 6 months
   - Mark purification date on container

FIELD INDICATORS:
- Safe: Clear, odorless, cool
- Unsafe: Cloudy, colored, foul odor, warm

RATIONING: 2 liters minimum per person per day in temperate climate. Double for hot/active conditions.`,
    requiredTools: affiliateProducts.waterPurification,
  },
  {
    id: 'first-aid-trauma',
    title: 'FIRST AID: TRAUMA RESPONSE',
    category: 'MEDICAL',
    content: `TRAUMA INTERVENTION PROTOCOL:

PRIMARY SURVEY (ABC Protocol)

A - AIRWAY
   - Check responsiveness
   - Open airway: head tilt-chin lift
   - Clear visible obstructions
   - If spinal injury suspected: jaw thrust method

B - BREATHING
   - Look, listen, feel for 10 seconds
   - If not breathing: Begin rescue breaths
   - Check for chest rise
   - Rate: 1 breath every 5-6 seconds

C - CIRCULATION
   - Check pulse: carotid (neck) or radial (wrist)
   - Control major bleeding immediately
   - Assess for shock symptoms

HEMORRHAGE CONTROL (Priority Order)

1. DIRECT PRESSURE
   - Apply firm pressure with clean cloth
   - Maintain pressure for 10 minutes minimum
   - DO NOT remove cloth if blood soaks through
   - Add additional layers on top

2. PRESSURE POINTS
   - Brachial artery (upper arm) for arm wounds
   - Femoral artery (groin) for leg wounds
   - Apply pressure between wound and heart

3. TOURNIQUET (Life-Threatening Bleeding Only)
   - Apply 2-3 inches above wound
   - Tighten until bleeding stops
   - Note time of application
   - DO NOT remove once applied
   - Seek immediate medical attention

SHOCK MANAGEMENT
   - Lay victim flat
   - Elevate legs 12 inches (unless spinal injury)
   - Maintain body temperature
   - Reassure victim
   - Monitor breathing and pulse

WOUND CARE
   - Clean with purified water
   - Apply antibiotic ointment if available
   - Dress with sterile gauze
   - Secure with medical tape
   - Change dressing daily

DO NOT:
   - Remove embedded objects
   - Give food/water to unconscious person
   - Move victim with suspected spinal injury
   - Apply tourniquet for minor bleeding

SEEK IMMEDIATE MEDICAL ATTENTION FOR:
   - Uncontrolled bleeding
   - Deep or large wounds
   - Animal/human bites
   - Signs of infection (redness, swelling, pus)
   - Chest or abdominal wounds`,
    requiredTools: affiliateProducts.firstAid,
  },
  {
    id: 'emergency-shelter',
    title: 'EMERGENCY SHELTER CONSTRUCTION',
    category: 'SHELTER',
    content: `SHELTER SITE SELECTION:

1. LOCATION CRITERIA
   - Elevated ground (flood protection)
   - Natural windbreak (trees, hills)
   - Avoid: valley bottoms, dry riverbeds
   - Access to water (but not too close)
   - Visible to rescuers if seeking help
   - Away from dead trees (widowmakers)

2. GROUND PREPARATION
   - Clear area of rocks and debris
   - Create drainage channels if needed
   - Layer ground with dry leaves/pine needles
   - Establish insulation barrier

SHELTER TYPES:

A. LEAN-TO SHELTER
   - Find sturdy fallen log or create ridgepole
   - Angle at 45 degrees
   - Layer branches closely
   - Cover with leaves, bark, or debris
   - Minimum 2ft of material for insulation

B. DEBRIS HUT
   - Create A-frame with ridgepole
   - Add ribbing branches on sides
   - Pile debris 2-3 feet thick
   - Fill interior with dry leaves
   - Blocks wind and retains heat

C. TARP/EMERGENCY TENT
   - Secure corners with stakes or rocks
   - Angle for water runoff
   - Ensure no pooling points
   - Seal edges from wind

3. INSULATION PRINCIPLES
   - Ground insulation critical (50% heat loss)
   - Dead air space creates warmth
   - Dry materials essential
   - Smaller enclosed space = warmer

4. WINTER MODIFICATIONS
   - Smaller entrance (heat retention)
   - Snow as insulation (igloo principle)
   - Ventilation hole essential
   - Entrance below sleeping platform

5. SIGNALING ELEMENTS
   - Bright colored items visible from air
   - Create ground signals (X, SOS)
   - Maintain signal fire materials
   - Mirror/reflective material ready

WEATHER CONSIDERATIONS:
   - Rain: Waterproofing and drainage critical
   - Wind: Low profile, windbreak
   - Heat: Shade, ventilation, elevated
   - Cold: Insulation, small space, heat retention

MAINTENANCE:
   - Reinforce daily
   - Replace wet materials
   - Expand as time permits
   - Create secondary shelter if possible`,
    requiredTools: affiliateProducts.shelter,
  },
];
