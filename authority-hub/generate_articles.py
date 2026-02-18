import os
import re

# Base paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_PATH = os.path.join(BASE_DIR, 'article-template.html')

# Article Data
articles = [
    {
        "id": 1,
        "title": "Critical Protocols: Post-Accident Management",
        "slug": "post-accident-management",
        "category": "Strategic Safety",
        "date": "18 Feb 2026",
        "date_iso": "2026-02-18",
        "read_time": "7 min read",
        "hero_alt": "Post-accident safety protocols",
        "featured": True,
        "raw_content": """The first 15 minutes following a road accident are the most critical. Your actions during this brief window can mean the difference between a manageable situation and a catastrophic outcome. Whether you're involved in a minor fender-bender in Westville or a serious collision on the N3, mastering these protocols ensures driver safety, protects vehicle integrity, and establishes the foundation for insurance and legal processes.

Minutes 1-3: Immediate Safety Assessment
The moment impact occurs, your brain floods with adrenaline. Fight the urge to panic. Take three deep breaths, then immediately assess the situation. Are you injured? Can you move? Check yourself first – you cannot help others if you're incapacitated. Check all passengers systematically, starting with children and elderly occupants.
Quickly evaluate your vehicle's position. Are you in active traffic lanes? Is there smoke or fuel leaking? Can you see clearly around your vehicle? This 60-second assessment determines your next critical decisions.

Minutes 3-5: Secure the Scene
If your vehicle is drivable and you're in a dangerous position (highway lane, blind curve, intersection), move it immediately to the shoulder or nearest safe area. Turn off the engine and activate hazard lights. This is not about preserving evidence – it's about preventing secondary collisions that cause more injuries and fatalities than initial accidents.
If you cannot move your vehicle safely, everyone should remain inside with seatbelts fastened, especially on high-speed roads like the N3 or M13. Modern vehicles provide significant protection during secondary impacts. Standing on a highway shoulder or in traffic is exponentially more dangerous.
Deploy warning triangles or reflectors at least 45 meters (approximately 50 large steps) behind your vehicle on the same side of the road. On highways, increase this to 100 meters. If visibility is poor due to weather, curves, or hills, place warnings even further back.

Minutes 5-8: Emergency Communications
Contact emergency services immediately if anyone is injured, vehicles are blocking traffic, or hazardous materials are involved. Dial 10177 (national emergency) or 112 from your mobile phone. Provide clear, calm information: exact location (use highway markers, GPS coordinates, or landmarks), number of vehicles involved, injuries, and any immediate dangers (fire, fuel spills, trapped occupants).
This is where technology becomes your ally. The Millaz Towing Spotter App allows you to report accidents with a single tap, automatically transmitting your GPS location and dispatching the nearest response team. First reporters even receive compensation for their rapid response – turning witnesses into heroes who help secure KZN's roads.

Minutes 8-12: Medical Triage
If trained in first aid, check injured persons systematically. Do not move anyone unless they're in immediate danger (fire, traffic). Moving injured people can worsen spinal injuries or internal trauma. Keep injured persons warm, calm, and still until medical professionals arrive.
Watch for signs of shock: pale skin, rapid breathing, confusion, or loss of consciousness. Shock can be life-threatening and may not appear immediately. Anyone exhibiting shock symptoms needs urgent medical attention.

Minutes 12-15: Evidence Documentation
Once safety is secured and emergency services are contacted, begin documenting the scene. This evidence is crucial for insurance claims and potential legal proceedings.
Photograph everything from multiple angles:
- All vehicles involved (four sides of each vehicle)
- Damage close-ups
- License plates clearly visible
- Street signs, traffic signals, and road markings
- Skid marks, debris patterns, and fluid spills
- Weather and road conditions
- Vehicle positions relative to road features

Information Exchange
Exchange essential information with all involved parties:
- Full names and contact numbers
- Driver's license numbers
- Vehicle registration and license plates
- Insurance company names and policy numbers
- Vehicle make, model, and color
Write down witness names and contact information. Witnesses often leave quickly, and their statements can be invaluable later.

Critical Don'ts
Don't admit fault – even if you believe you caused the accident. Say "I'm sorry this happened," not "I'm sorry I caused this." Official fault determination involves many factors you may not understand in the moment.
Don't sign anything except official police or emergency documents. Never sign blank forms or documents you haven't read thoroughly.
Don't leave the scene until all official procedures are complete, unless medical emergencies require it. Leaving prematurely can result in criminal charges.

The Bottom Line
The first 15 minutes after an accident set the trajectory for everything that follows. Mastering these critical protocols protects lives, preserves evidence, and ensures you receive the support you need. Stay calm, follow the sequence, and remember that professional help – whether emergency services, insurance providers, or trusted towing companies like Millaz Towing – is there to support you through the process."""
    },
    {
        "id": 2,
        "title": "How the Spotter App is Securing KZN Roads",
        "slug": "spotter-app-kzn-roads",
        "category": "Community",
        "date": "15 Feb 2026",
        "date_iso": "2026-02-15",
        "read_time": "6 min read",
        "hero_alt": "Spotter App road safety",
        "featured": True,
        "raw_content": """Road safety has entered a new era. While traditional emergency response systems rely on delayed reporting and fragmented communication, technology now enables instant, community-driven solutions. The Millaz Towing Spotter App represents this evolution – transforming every driver into an active participant in securing KwaZulu-Natal's roads while revolutionizing how accidents, hazards, and traffic incidents are managed.

The Problem with Traditional Accident Response
When accidents occur on KZN's roads – whether on the busy N3, in Pinetown's commercial districts, or along Hillcrest's winding routes – critical minutes are lost. Victims struggle to call multiple emergency numbers. Dispatchers work to pinpoint exact locations. Response teams navigate to incidents based on vague descriptions.
This fragmented approach costs time, and in emergencies, time costs lives. Delayed medical response worsens injuries. Extended road blockages create dangerous secondary accidents. Unclear information leads to inefficient resource deployment.

Enter the Spotter App: A Millaz Towing First
The Spotter App is Millaz Towing's innovative solution to these challenges – a comprehensive platform that puts road safety in every driver's hands. This isn't just another traffic app; it's a complete ecosystem connecting drivers, emergency responders, and road authorities in real-time.
The concept is elegantly simple: empower every driver to become a "spotter" – someone who can instantly report accidents, hazards, and traffic incidents while receiving live updates about road conditions across KZN.

Instant Accident Reporting with GPS Precision
The app's core feature eliminates confusion and delay from accident reporting. When you witness or are involved in an accident, a single tap on the "Report Accident" button initiates a coordinated response. The app automatically captures your precise GPS coordinates, eliminating the "near the big tree past the garage" vagueness that plagues traditional reports.
Your report includes essential details: number of vehicles involved, injury indicators, hazard type (fire, fuel spill, blocked lanes), and optional photos. This rich information helps response teams prepare appropriately before arrival.

Immediate Response Team Dispatch
Traditional systems route through multiple call centers and dispatch offices. The Spotter App connects you directly to Millaz Towing's response network. Your accident report triggers immediate notifications to the nearest available response units – whether towing vehicles, medical teams, or traffic management personnel.
You receive real-time updates: "Response team dispatched – estimated arrival 12 minutes," "Team is 5 minutes away," "Team has arrived at scene." This transparency reduces anxiety during stressful situations.

Compensating First Reporters
Here's where the Spotter App breaks new ground. First reporters – the people who spot and report accidents or hazards – receive compensation for their rapid response. This innovative feature transforms passive witnesses into active safety participants.
Why compensate reporters? Because rapid reporting saves lives and reduces road chaos. Someone who witnesses an accident 30 seconds after it occurs can alert response teams five or ten minutes faster than if waiting for involved parties to make calls. Those minutes matter enormously.

Live Traffic Updates
Beyond accident reporting, the Spotter App provides comprehensive real-time traffic intelligence. The integrated navigation system shows:
- Accidents and Incidents: See where accidents have occurred, including user-reported incidents updated in real-time.
- Roadblocks and Road Closures: Whether it's planned maintenance, police roadblocks, or emergency closures.
- Traffic Congestion Levels: Color-coded routes show you traffic flow intensity.
- Hazard Warnings: Potholes, debris in road, broken traffic lights, dangerous conditions.

How Community Reporting Works
The Spotter App's power lies in its community-driven approach. Every user contributes to and benefits from collective intelligence:
- See something? Report it. Accident ahead? Tap the accident button. Massive pothole? Report the hazard.
- Verify reports. When multiple users report the same incident, the app verifies it as confirmed.
- Update in real-time. As situations change – accidents are cleared, roadblocks end – the app updates automatically.

Join the Movement
The Spotter App isn't just technology – it's a movement toward collective responsibility for road safety. Every download, every report, every shared piece of information makes KZN's roads safer for everyone.
Whether you're a daily commuter navigating Pinetown's busy streets, a long-distance traveler on the N3, or a parent driving children around Westville and Hillcrest, the Spotter App gives you tools to protect yourself and help others.
Download the Millaz Towing Spotter App today. Drive safer, navigate smarter, and join thousands of KZN drivers who are transforming how we share our roads."""
    },
    {
        "id": 3,
        "title": "Understanding Towing Regulations in KZN",
        "slug": "towing-regulations-kzn",
        "category": "Regulations",
        "date": "12 Feb 2026",
        "date_iso": "2026-02-12",
        "read_time": "5 min read",
        "hero_alt": "Towing regulations and rights",
        "featured": False,
        "raw_content": """Whether you're a daily commuter on the N3 or navigating the roads around Pinetown and Westville, understanding towing regulations in KwaZulu-Natal is essential for every motorist. These regulations protect both drivers and towing operators, ensuring fair practices during stressful roadside situations.

Key Towing Regulations in KZN
The South African National Road Traffic Act outlines specific requirements for towing operations. In KZN, all towing companies must be registered and display valid operating licenses. When your vehicle breaks down or is involved in an accident, you have the right to choose your preferred towing service – no one can force you to use a specific provider.

Your Rights as a Motorist
You're entitled to a clear breakdown of towing costs before service begins. Towing operators must provide itemized invoices and cannot hold your vehicle hostage for payment disputes. Storage fees are regulated and must be reasonable. If you're on a major route like the N3 or M13, traffic authorities may designate specific towing zones, but your choice of provider remains protected.

What to Expect During a Tow
Professional towing services like Millaz Towing follow strict protocols. Operators should present identification, explain the towing process, document your vehicle's condition, and provide you with contact information for vehicle retrieval. Always ask for estimated costs and timeframes upfront.

Dispute Resolution
If you encounter issues with a towing service, the Road Traffic Management Corporation (RTMC) handles complaints. Keep all documentation, including invoices and communications. Reputable companies maintain transparent practices and work to resolve concerns quickly.
For emergency towing services in the Pinetown, Westville, Hillcrest, and Kloof areas, having a trusted provider's contact information saved can save valuable time. Stay informed, know your rights, and drive safely on KZN's roads."""
    },
    {
        "id": 4,
        "title": "What to Do After a Road Accident: A Complete Guide",
        "slug": "what-to-do-after-road-accident",
        "category": "Safety Guide",
        "date": "10 Feb 2026",
        "date_iso": "2026-02-10",
        "read_time": "6 min read",
        "hero_alt": "Post-accident guide",
        "featured": False,
        "raw_content": """Road accidents are traumatic experiences that can leave even experienced drivers feeling overwhelmed. Knowing the correct steps to take immediately after an accident can protect your safety, legal rights, and insurance claims. Here's your comprehensive guide for handling accidents on KZN roads.

Immediate Safety First
The moments after an accident are critical. If possible, move vehicles to the side of the road to prevent further collisions, especially on busy routes like the N3 or M13. Turn on hazard lights immediately and set up warning triangles at least 45 meters behind your vehicle. Check yourself and passengers for injuries – if anyone is hurt, call emergency services (10177 or 112 from mobile) without delay.

Secure the Scene
On highways around Pinetown and Hillcrest, accidents can create dangerous situations for other motorists. If your vehicle cannot be moved safely, remain inside with seatbelts fastened until help arrives. Never stand in the road or attempt repairs in traffic lanes. Contact traffic authorities to report the accident and request assistance. Use the Spotter App for instant response team dispatch and GPS-precise location sharing.

Document Everything
Once safe, gather critical information. Exchange details with other drivers including names, contact numbers, license plate numbers, driver's license numbers, and insurance information. Take photographs of all vehicles from multiple angles, capturing damage, license plates, and the surrounding scene. Note road conditions, weather, time, and exact location. If there are witnesses, collect their contact details.

Contact Your Insurance
Report the accident to your insurance company within 24 hours. Provide factual information without admitting fault or speculating about causes. Your insurer will guide you through their claims process and may recommend approved towing services or repair facilities.

Arrange Safe Vehicle Removal
If your vehicle isn't drivable, you'll need professional towing. Choose a reputable service that won't further damage your vehicle. For accidents in the Westville, Kloof, and surrounding areas, having a reliable towing company's contact information readily available ensures quick, professional assistance during stressful moments.

Follow-Up Steps
Visit a doctor even if you feel fine – some injuries manifest hours or days later. Keep all medical records and repair estimates. File a police report at your nearest station within 24 hours if required by your insurance. Maintain a file with all accident-related documents.
Remember: Stay calm, prioritize safety, and take systematic steps. Being prepared makes a difficult situation more manageable."""
    },
    {
        "id": 5,
        "title": "Top 5 Causes of Vehicle Breakdowns on the N3",
        "slug": "top-5-causes-vehicle-breakdowns-n3",
        "category": "Road Safety",
        "date": "05 Feb 2026",
        "date_iso": "2026-02-05",
        "read_time": "5 min read",
        "hero_alt": "N3 breakdown causes",
        "featured": False,
        "raw_content": """The N3 highway is KwaZulu-Natal's major transport artery, connecting Durban to Johannesburg through challenging terrain including the steep inclines around Pietermaritzburg and the Drakensberg. Understanding common breakdown causes can help you avoid becoming stranded on this busy route.

1. Battery Failure
Dead batteries top the breakdown list, especially during cold Midlands mornings or after vehicles sit idle. Batteries typically last 3-5 years, but extreme temperatures and electrical system demands accelerate wear. Warning signs include slow engine cranking, dimming lights, and electrical malfunctions. Have your battery tested during routine services and replace it proactively.

2. Tire Failures
The N3's long distances and varied conditions take their toll on tires. Blowouts often result from underinflation, overloading, or worn treads. Before long trips between Durban and inland destinations, check tire pressure (including the spare), inspect for damage, and verify tread depth exceeds 1.6mm legal minimum. Rotate tires regularly and replace them before they become dangerously worn.

3. Engine Overheating
Climbing from sea level to higher elevations puts enormous stress on cooling systems. Overheating frequently stems from low coolant levels, leaking hoses, faulty thermostats, or failing water pumps. Never ignore the temperature gauge – if it rises toward the red zone, pull over safely and let the engine cool before investigating. Regular cooling system maintenance prevents most overheating incidents.

4. Fuel System Problems
Running out of fuel is surprisingly common on the N3, where service stations can be spaced far apart, especially at night. Other fuel system issues include contaminated fuel, clogged filters, and pump failures. Keep your tank above quarter-full on long journeys, use reputable fuel stations, and replace fuel filters according to your vehicle's service schedule.

5. Electrical System Faults
Modern vehicles depend on complex electrical systems. Alternator failures leave you without battery charging, while starter motor problems prevent engine starting. Loose connections, corroded terminals, and damaged wiring also cause electrical gremlins. Dashboard warning lights shouldn't be ignored – they're early indicators of developing problems.

Prevention is Key
Most N3 breakdowns are preventable through regular maintenance. Follow your vehicle manufacturer's service schedule, address warning signs promptly, and conduct pre-trip inspections before long journeys. Keep emergency contacts, including reliable towing services for the Pinetown to Pietermaritzburg corridor, stored in your phone."""
    },
    {
        "id": 6,
        "title": "Emergency Road Safety Tips for KZN Motorists",
        "slug": "emergency-road-safety-tips-kzn",
        "category": "Safety Tips",
        "date": "01 Feb 2026",
        "date_iso": "2026-02-01",
        "read_time": "4 min read",
        "hero_alt": "Road safety tips",
        "featured": False,
        "raw_content": """KwaZulu-Natal's roads present unique challenges – from coastal humidity affecting vehicle systems to mountainous terrain testing brakes and engines. Whether you're commuting through Westville or traveling long distances, these emergency safety tips could save your life.

Before Emergencies Happen
Preparation prevents panic. Maintain a vehicle emergency kit containing: warning triangles, reflective vest, first aid supplies, flashlight with extra batteries, basic tools, jumper cables, fire extinguisher, and emergency contact numbers. Keep your fuel tank above quarter-full and ensure your spare tire is properly inflated. Service your vehicle regularly and address mechanical issues immediately.

When Your Vehicle Breaks Down
Move to the safest possible location – the road shoulder on highways or a parking area if available. Activate hazard lights immediately and set up warning triangles 45 meters behind your vehicle (further on high-speed roads). If you cannot move your vehicle safely, everyone should remain inside with seatbelts fastened. On busy routes around Pinetown and Hillcrest, exiting your vehicle into traffic is extremely dangerous.

Staying Visible and Safe
Wear your reflective vest if you must exit the vehicle. At night or in poor weather, visibility is severely limited – other drivers need maximum warning. If you're on a highway shoulder, stand well away from the road behind the barrier if possible. Never attempt repairs in traffic lanes. Call for professional assistance rather than risking your safety.

Adverse Weather Conditions
KZN experiences intense thunderstorms, heavy fog in inland areas, and occasional flooding. When weather deteriorates, reduce speed, increase following distance, and use headlights. If visibility becomes severely limited, exit the highway safely and wait for conditions to improve. Don't attempt to drive through standing water – road surfaces underneath may be damaged or washed away.

Accident Scenarios
After any collision, prioritize safety over vehicle damage. Check for injuries, call emergency services if needed, and secure the scene. Exchange information with other drivers but avoid discussing fault. Document everything with photographs.

Communication is Critical
Always carry a charged mobile phone. If you're traveling through areas with poor signal, inform someone of your route and expected arrival time. When calling for help, provide your exact location – use highway markers, GPS coordinates, or nearby landmarks. The more information you give, the faster assistance arrives.

Trust Professional Help
Don't accept assistance from unmarked vehicles or unknown individuals claiming to offer towing services. Use reputable providers you've researched beforehand. For breakdowns in the Kloof, Hillcrest, and surrounding areas, having a trusted towing service's contact information ensures you receive professional, honest assistance during emergencies."""
    },
    {
        "id": 7,
        "title": "How to Choose a Reliable Towing Service",
        "slug": "how-to-choose-reliable-towing-service",
        "category": "Consumer Guide",
        "date": "28 Jan 2026",
        "date_iso": "2026-01-28",
        "read_time": "5 min read",
        "hero_alt": "Reliable towing service",
        "featured": False,
        "raw_content": """When your vehicle breaks down or you're involved in an accident, the towing service you choose can make the difference between a resolved situation and a nightmare. Not all towing companies provide equal service, and making an informed choice protects both your vehicle and your wallet.

Research Before You Need Help
The worst time to choose a towing service is during an emergency when you're stressed and pressured to make quick decisions. Research reputable providers in your area now – for KZN motorists, this means companies servicing routes you regularly travel, from Durban through Pinetown, Westville, Hillcrest, and Kloof. Save multiple contacts in your phone so you're never without options.

Essential Credentials
Legitimate towing companies must hold proper licensing and insurance. Ask about their credentials, including registration with relevant authorities and liability coverage. This protects you if your vehicle is damaged during towing. Reputable operators display credentials proudly and answer questions without hesitation.

Service Coverage and Response Times
Verify the company services your regular routes and understands local roads. A provider familiar with N3 traffic patterns, M13 congestion points, and alternative routes through the upper highway areas can navigate efficiently to reach you. Ask about average response times – reliable services should reach you within 30-45 minutes in urban areas.

Transparent Pricing
Trustworthy towing companies provide clear pricing information upfront. Expect charges based on distance, vehicle type, and time of day (after-hours service typically costs more). Be wary of companies that refuse to discuss costs until after towing your vehicle – this is a major red flag. Request itemized invoices and understand what's included in the base rate versus additional fees.

Medical and Equipment Capabilities
Different vehicles require different towing equipment. Flatbed towing is safest for most vehicles, preventing wheel or transmission damage. Wheel-lift towing suits specific situations. The company should have properly maintained equipment and trained operators. Ask about their fleet and capabilities.

Customer Reviews and Reputation
Online reviews reveal patterns. While every business occasionally receives negative feedback, consistently poor reviews about hidden fees, vehicle damage, or unprofessional behavior indicate problems. Look for companies with strong local reputations, positive testimonials, and evidence of community involvement.

Your Rights
Remember, you always have the right to choose your towing provider. No one can force you to use a specific company, regardless of who arrives first at an accident scene. Take time to call your preferred provider even if another is present.

Building a Relationship
Consider establishing a relationship with a local towing provider before emergencies arise. Some companies offer membership programs or priority service for regular customers. Knowing you have a trusted provider reduces stress during already difficult situations."""
    },
    {
        "id": 8,
        "title": "The Importance of Regular Vehicle Maintenance",
        "slug": "importance-of-vehicle-maintenance",
        "category": "Maintenance",
        "date": "20 Jan 2026",
        "date_iso": "2026-01-20",
        "read_time": "5 min read",
        "hero_alt": "Vehicle maintenance",
        "featured": False,
        "raw_content": """Your vehicle is likely one of your most significant investments, and regular maintenance is the key to protecting that investment while ensuring your safety on KZN's roads. Understanding why maintenance matters helps you prioritize it even when life gets busy.

Safety First
Vehicle maintenance isn't just about avoiding breakdowns – it's about preventing accidents. Worn brake pads increase stopping distances. Underinflated tires reduce grip and handling. Failed lights make you invisible to other drivers. Regular inspections catch these safety issues before they cause collisions. When you're navigating busy routes through Pinetown or climbing hills around Hillcrest, every safety system needs to function perfectly.

Preventing Expensive Repairs
Neglected minor issues become major expensive problems. A small oil leak, ignored, leads to engine damage costing thousands. Worn brake pads damage rotors, multiplying repair costs. Maintenance catches problems early when fixes are simple and affordable. The cost of regular service is a fraction of major repair bills or vehicle replacement.

Reliability When You Need It
Breaking down on your way to an important meeting, leaving you stranded during family trips, or creating emergencies during commutes – these scenarios stem from ignored maintenance. Regular service keeps your vehicle reliable, reducing the stress and inconvenience of unexpected failures. For commuters depending on their vehicles daily, reliability isn't optional.

Fuel Efficiency
Well-maintained vehicles run more efficiently. Clean air filters, properly inflated tires, fresh spark plugs, and optimal fluid levels reduce fuel consumption. With fuel costs constantly rising, the money saved at the pump helps offset maintenance expenses. A poorly maintained vehicle can consume 10-20% more fuel than necessary.

Resale Value
Complete service records significantly boost resale value. Buyers pay premium prices for vehicles with documented maintenance histories, knowing they're purchasing well-cared-for cars. Neglected vehicles sell for less and take longer to find buyers. Every service you complete is an investment in future resale value.

Key Maintenance Components
Oil changes are fundamental, lubricating engine parts and removing contaminants. Timing varies by vehicle and oil type, but every 5,000-10,000 kilometers is typical. Tire rotations extend tire life and maintain even wear. Brake inspections catch wear before dangerous failures. Fluid checks (coolant, brake fluid, transmission fluid, power steering fluid) prevent system failures. Air filter replacement maintains engine efficiency. Battery testing prevents unexpected failures.

Finding Trustworthy Service Providers
Choose service centers with qualified technicians, transparent pricing, and good reputations. While dealerships offer manufacturer expertise, independent mechanics often provide excellent service at lower costs. Ask friends and family for recommendations.

The Peace of Mind Factor
Beyond tangible benefits, regular maintenance provides peace of mind. You can travel confidently knowing your vehicle is roadworthy. You're not gambling with safety or reliability. When emergency situations arise, proper maintenance ensures your vehicle responds correctly.
Maintenance isn't an expense – it's an investment in safety, reliability, and longevity. Whether you're a daily commuter around Westville and Kloof or making regular long-distance trips, maintaining your vehicle properly keeps you moving safely and confidently on KZN's roads."""
    }
]

def format_content(raw_text):
    """Parses raw text into HTML with H2, P, Lists, etc."""
    lines = raw_text.split('\n')
    html_parts = []
    
    current_list_type = None # 'ul' or 'ol'
    list_items = []

    def flush_list():
        nonlocal current_list_type, list_items
        if current_list_type:
            html_parts.append(f'<{current_list_type}>')
            for item in list_items:
                html_parts.append(f'<li>{item}</li>')
            html_parts.append(f'</{current_list_type}>')
            current_list_type = None
            list_items = []

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Check for headings or main keys
        # Simple heuristic: Lines less than 60 chars ending in colon or no punctuation, not list items
        if (':' in line and len(line) < 65 and not line.startswith('-')) or (len(line) < 50 and not line.endswith('.') and not line.startswith('-') and not line[0].isdigit()):
             flush_list()
             html_parts.append(f'<h2>{line}</h2>')
        
        # Check for list items
        elif line.startswith('- '):
            if current_list_type != 'ul':
                flush_list()
                current_list_type = 'ul'
            list_items.append(line[2:])
        
        elif len(line) > 2 and line[0].isdigit() and line[1] == '.': # 1. something
            if current_list_type != 'ol':
                flush_list()
                current_list_type = 'ol'
            list_items.append(line.split('.', 1)[1].strip())
            
        # Regular paragraph
        else:
            flush_list()
            html_parts.append(f'<p>{line}</p>')
            
    flush_list()
    return '\n'.join(html_parts)

def generate_page(article, prev_article, next_article):
    with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Placeholders
    replacements = {
        '[ARTICLE_TITLE]': article['title'],
        '[ARTICLE_SLUG]': article['slug'],
        '[ARTICLE_DESCRIPTION]': f"Read about {article['title']} - essential guide for KZN motorists.",
        '[ARTICLE_CATEGORY]': article['category'],
        '[ARTICLE_DATE]': article['date'],
        '[ARTICLE_DATE_ISO]': article['date_iso'],
        '[READ_TIME]': article['read_time'],
        '[HERO_IMAGE_SRC]': '', # Leave empty to use fallback placeholder
        '[HERO_IMAGE_ALT]': article['hero_alt'],
        '[PREV_ARTICLE_TITLE]': prev_article['title'],
        '[PREV_ARTICLE_HREF]': prev_article['slug'] + '.html',
        '[NEXT_ARTICLE_TITLE]': next_article['title'],
        '[NEXT_ARTICLE_HREF]': next_article['slug'] + '.html',
    }

    for key, value in replacements.items():
        content = content.replace(key, value)

    # Content Body
    body_content = format_content(article['raw_content'])
    
    # regex to find the article-main-heading div content
    # We want to replace everything inside <div class="article-content" id="article-main-heading"> ... </div>
    # The template has comments inside, we can just target the inner HTML of that div.
    
    start_tag = '<div class="article-content" id="article-main-heading">'
    end_tag = '<!-- ── Social Share Row ── -->' # reliable anchor after the content div closing tag isn't great.
    
    # Better approach: Find the div, then find the closing div that matches indentation? No, HTML parsing is hard with regex.
    # But we know the template structure. The content ends before <div class="article-share">.
    # Actually, the template has a closing </div> for article-content before social share.
    
    # Let's rely on the explicit comments I saw in the template file:
    # <!-- ═══════════════════════════════════════════════════
    #      ARTICLE CONTENT STARTS HERE
    
    # <!-- ═══════════════════════════════════════════════════
    #      ARTICLE CONTENT ENDS HERE
    
    pattern = r'(<!-- ═══════════════════════════════════════════════════\s*ARTICLE CONTENT STARTS HERE[\s\S]*?ARTICLE CONTENT ENDS HERE\s*═══════════════════════════════════════════════════ -->)'
    
    if re.search(pattern, content):
        content = re.sub(pattern, body_content, content)
    else:
        print(f"Warning: Content placeholder block not found for {article['slug']}")
        # Fallback to older method if comments missing or changed
        pass

    # Feature badge injection if featured
    if article['featured']:
        # Inject badge before h1
        # target the specific span before h1
        content = content.replace('<span class="hub-tag">', '<span class="hub-tag" style="background:#FF6B2B; margin-right:8px;">FEATURED</span><span class="hub-tag">', 1)

    # Write file
    output_path = os.path.join(BASE_DIR, article['slug'] + '.html')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Generated {article['slug']}.html")

# Main Loop
for i, article in enumerate(articles):
    # Circular buffer logic for prev/next
    prev_idx = (i - 1) % len(articles)
    next_idx = (i + 1) % len(articles)
    
    generate_page(article, articles[prev_idx], articles[next_idx])

print("All 8 articles generated successfully.")
