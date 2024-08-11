import bottomarrow from '../assets/contentIcons/bottomarrow.svg';
import rightarrow from '../assets/contentIcons/rightarrow.svg';
import tireslam from '../assets/contentIcons/blogicons/tireslam.svg';
import battlerope from '../assets/contentIcons/blogicons/battlerope.svg';
import jumpingjacks from '../assets/contentIcons/blogicons/jumpingjacks.svg';
import weightlifting from '../assets/contentIcons/blogicons/weighlifting.svg';
import kettlebell from '../assets/contentIcons/blogicons/kettlebell.svg';
import meditation from '../assets/contentIcons/blogicons/meditation.svg';
import gratitude from '../assets/contentIcons/blogicons/gratitude.svg';
import fruits from '../assets/contentIcons/blogicons/fruits.svg';
import protein from '../assets/contentIcons/blogicons/protein.svg';
import proteinpowder from '../assets/contentIcons/blogicons/proteinpowder.svg';
import alcohol from '../assets/contentIcons/blogicons/alcohol.svg';
import powerlifting from '../assets/contentIcons/blogicons/powelifting.svg';
import bicepcurlone from '../assets/contentIcons/blogicons/bicepcurlone.svg';
import bicepcurltwo from '../assets/contentIcons/blogicons/bicepcurltwo.svg';
import thirtymin from '../assets/contentIcons/blogicons/thirtymin.svg';
import injury from '../assets/contentIcons/blogicons/injury.svg';
import stretching from '../assets/contentIcons/blogicons/stretching.svg';
import yoga from '../assets/contentIcons/blogicons/yoga.svg';
import crunches from '../assets/contentIcons/blogicons/crunches.svg';
import liftingboxes from '../assets/contentIcons/blogicons/liftingboxes.svg';
import martialarts from '../assets/contentIcons/blogicons/martialarts.svg';
import pushups from '../assets/contentIcons/blogicons/pushups.svg';
import pullups from '../assets/contentIcons/blogicons/pullups.svg';
import barbellsquat from '../assets/contentIcons/blogicons/barbellsquat.svg';
import lunges from '../assets/contentIcons/blogicons/lunges.svg';
import pistolsquats from '../assets/contentIcons/blogicons/pistolsquat.svg';
import elbowpain from '../assets/contentIcons/blogicons/elbowpain.svg';
import burpees from '../assets/contentIcons/blogicons/burpees.svg';
import variety from '../assets/contentIcons/blogicons/variety.svg';
import gymnastring from '../assets/contentIcons/blogicons/gymnastrings.svg';
import dips from '../assets/contentIcons/blogicons/dips.svg';
import running from '../assets/contentIcons/blogicons/running.svg';
import swimming from '../assets/contentIcons/blogicons/swimming.svg';
import hiking from '../assets/contentIcons/blogicons/hiking.svg';
import jumprope from '../assets/contentIcons/blogicons/jumprope.svg';
import perfectform from '../assets/contentIcons/blogicons/perfectform.svg';
import varietyintraining from '../assets/contentIcons/blogicons/varietyintraining.svg';
import heavylightbalance from '../assets/contentIcons/blogicons/heavylightbalance.svg';

export const blogSections = [
    {
        key: 'cardio-health',
        title: "Cardiovascular Health:",
        points: [
            { key: 'hiit', text: "HIIT (High-intensity interval training)." },
            { key: 'crossfit', text: "Crossfit Metcons (as many reps as possible)." },
            { key: 'plyometrics', text: "Plyometrics / Explosive exercises." },
            { key: 'nutrient-foods', text: "Nutrient rich foods, more protein low carbs." },
            { key: 'meditation', text: "Meditation/Virtue (keeping stress away)." },
            { key: 'jogging', text: "Jogging/Short-Sprints/Running." },
            { key: 'jump-rope', text: "Jump Rope/Swimming/Hiking." },
            { key: 'alcohol', text: "Avoiding Alcohol / Binge Drinking." }
        ],
        heading: "Simplify Heart Health: Stay Active, Eat Well & Enjoy Life. Small Steps Matter.",
        content: [
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">HIIT, featuring exercises like tire slams, tire hammer swings, burpees, battle ropes, jump squats & jumping jacks</span>, enhances cardiovascular health by challenging strength + endurance.Tire slams involve lifting, slamming a heavy tire, tire strikes use a sledgehammer to hit a tire, elevating the heart rate to improve heart health.</p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={tireslam} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={battlerope} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={jumpingjacks} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>
                <p>
                    Burpees build strength & cardio, battle ropes enhance upper body endurance, jump squats boost explosive power, while HIIT sessions of 15-30 minutes maximize calorie burn. <span className="bg-red-100 font-medium text-black">Start with 1 HIIT session every two weeks & increase to 1-2 per week for best results.</span></p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">CrossFit metcons typically include Olympic lifts</span> & movements performed by Olympic lifters, integrating high-intensity workouts. Exercises like <span className="bg-red-100 font-medium text-black">snatches, clean and jerks & kettlebell swings.</span></p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={weightlifting} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={kettlebell} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>
                <p>
                    Often featured in <span className="bg-blue-100 font-medium text-black">AMRAP formats</span>, these workouts keep the heart rate high, boosting cardiovascular endurance & aerobic capacity. CrossFit metcons combine strength training with cardio, ultimately enhancing heart health.</p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Plyometrics</span> involve explosive workouts that <span className="bg-red-100 font-medium text-black">enhance power & explosiveness while improving heart health</span>. focusing on bodyweight movements but can also incorporate weights (kettlebells, medicine balls). Beginners should start with bodyweight exercises.The optimized progression for plyometrics is:
                </p>

                <div className="flex flex-col sm:flex-row items-center my-4">
                    <span className="text-black font-medium text-center">Original/Fundamental exercise</span>

                    {/* Right Arrow for larger screens */}
                    <img src={rightarrow} width="25" height="25" className="hidden sm:inline text-black shadow-neon-blue inline align-middle mx-4 rounded-3xl" />

                    {/* Down Arrow for mobile screens */}
                    <img src={bottomarrow} width="25" height="25" className="inline sm:hidden text-black shadow-neon-blue inline align-middle my-4 rounded-3xl" />

                    <span className="text-black font-medium text-center">Explosive Version of the Same Exercise</span>

                    {/* Right Arrow for larger screens */}
                    <img src={rightarrow} width="25" height="25" className="hidden sm:inline text-black shadow-neon-blue inline align-middle mx-4 rounded-3xl" />

                    {/* Down Arrow for mobile screens */}
                    <img src={bottomarrow} width="25" height="25" className="inline sm:hidden text-black shadow-neon-blue inline align-middle my-4 rounded-3xl" />

                    <span className="text-black font-medium text-center">Advanced Explosive Variations of the Exercise</span>
                </div>
                <p>
                    For example, start with standard push-ups, then progress to explosive push-ups, clapping push-ups & variations like incline, decline, wide grip & close grip clapping push-ups. Other <span className="bg-blue-100 font-medium text-black">exercises to try in a similar progression are Jump Squats, Box Jumps, Burpees, Lateral Bounds, Tuck Jumps, Medicine Ball Slams & Broad Jumps.</span></p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">In India, the prevalence of sugar, diabetes is rising</span>, largely <span className="bg-blue-100 font-medium text-black">due to diets that are high in carbohydrates, low in protein</span>. Our bodies need adequate protein intake, especially before bed, upon waking & after physical activity. <span className="bg-red-100 font-medium text-black">A carbohydrate-heavy diet leads to insulin resistance & increases risk of type 2 diabetes.</span></p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={fruits} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={protein} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={proteinpowder} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>
                <p>
                    Incorporate fish, eggs, chicken, or any other edible animal-based proteins to boost your protein, heathy fat intake. <span className="bg-blue-100 font-medium text-black">For vegetarians, whey protein</span> is an excellent choice, while <span className="bg-blue-100 font-medium text-black">vegans can opt for pea soy or rice protein as nutritious alternatives</span>. These supplements support overall well-being.</p>
            </>,
            <>
                <p>
                    <span className="bg-red-100 font-medium text-black">Young people are increasingly facing heart attacks, largely due to stress</span>. The solution is simple: meditate regularly, practice gratitude & embrace life’s challenges. In times of adversity, instead of asking, “Why me?” consider, “What can I learn from this?”</p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={meditation} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={gratitude} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Focusing on gratitude, consuming dark chocolate & living in the moment</span> can significantly reduce stress & improve heart health. Remember, comparison is the thief of joy.</p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Jogging offers a steady, moderate-intensity workout that strengthens the heart & improves circulation</span>. Adding short sprints increases heart rate through high-intensity intervals. Long-distance running enhances endurance & overall heart health by expanding the heart's capacity to pump blood.</p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={running} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>

                <p>
                    Together, these activities create a comprehensive cardiovascular fitness regimen, reducing heart disease risk & boosting stamina. <span className="bg-red-100 font-medium text-black">For optimal knee health, always choose a running track or park for these activities</span>.</p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Jump rope, swimming & hiking are excellent for improving cardiovascular health</span>. Jump rope offers a high-intensity workout that elevates the heart rate & enhances coordination, while swimming provides a full-body workout that builds endurance + lung capacity with minimal impact on joints.</p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={jumprope} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={swimming} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={hiking} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>

                <p><span className="bg-red-100 font-medium text-black">Hiking, especially on varied terrain, combines aerobic exercise with strength training, promoting heart health</span>.  Together, these activities support a healthy body.</p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">To maintain optimal heart health, it's best to avoid alcohol altogether</span>. If you choose to drink, avoid binge drinking, as excessive consumption leads to <span className="bg-red-100 font-medium text-black">hypertension, irregular heart rhythms, inflammation & blockage in the arteries</span>. Prioritizing moderation protects cardiovascular health.</p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={alcohol} width="60" height="60" className="shadow-neon-red inline align-middle my-4 mx-8 rounded-full" />
                </div>
                <p>
                    Alcohol, other addictive substances impact the brain, making it hard to quit. <span className="bg-blue-100 font-medium text-black">People with past issues may use alcohol to cope</span>, risking alcoholism & harm to mental, physical health. Addressing these challenges is essential for heart health.</p>
            </>
        ]
    },
    {
        key: 'bodybuilding-gems',
        title: "Bodybuilding Gems:",
        points: [
            { key: 'compound-movements', text: "Compound movements." },
            { key: 'time-under-tension', text: "Time Under Tension Training." },
            { key: 'perfect-form', text: "Perfect form for muscle fiber recruitment." },
            { key: 'recovery', text: "Adequate recovery for muscle repair & growth." },
            { key: 'concise-workouts', text: "Concise workouts, more energy." },
            { key: 'training-variety', text: "Variety in training to prevent plateaus." },
            { key: 'weights-balance', text: "Heavy weights - Light weight balance." },
            { key: 'stretching', text: "Importance of stretching." }
        ],
        heading: "Expert Tips for Natural Muscle Growth: Advanced Strategies from Legendary Bodybuilders.",
        content: [
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Compound movements involve multiple muscle groups working together, unlike isolated exercises</span>. Like (bench press, deadlift & squat). Powerlifters perform these to maintain strength & lift heavy. Compound movements build muscle & overall strength. Focus on strength & a solid frame first, then refine with isolated exercises.</p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={powerlifting} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Good form, strength are essential, with compound movements being key</span>. They build a solid fitness foundation, as endorsed by bodybuilders like Chris Bumstead.</p>
            </>,
            <>
                <p>
                    After building strength, focus on hypertrophy with time under tension (TUT) training. In both isolated, compound exercises, use weights at 50-60% of your maximum capacity, <span className="bg-blue-100 font-medium text-black"> hold the weight for 1-2 seconds during the concentric phase</span> (when the muscle shortens as it contracts) & <span className="bg-blue-100 font-medium text-black">lower it slowly during the eccentric phase</span> (when the muscle lengthens under tension) to maximize muscle growth.</p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={bicepcurlone} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={bicepcurltwo} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>
                <p>
                    The images demonstrate bicep exercises: the <span className="bg-blue-100 font-medium text-black">first shows the concentric movement</span> (lifting with resistance bands, can also be done with dumbbells, EZ bar, etc.) & the <span className="bg-blue-100 font-medium text-black">second illustrates the eccentric movement</span> (lowering). This time under tension principle applies to all muscle exercises.</p>
            </>,
            <>
                <p>
                    Proper form is crucial in training to reduce injury risk. To ensure optimal form, consider having a knowledgeable partner spot & provide feedback or record your sessions for self-analysis.</p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={perfectform} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>

                <p>
                    <span className="bg-blue-100 font-medium text-black">When trying new exercises you are not familiar with, always start with lighter weights to master the movement mechanics before progressing</span>. Prioritize form over weight to enhance performance & safety.</p>
            </>,
            <>
                <p>
                    Recovery is crucial for overall well-being. <span className="bg-red-100 font-medium text-black">Overtraining can hinder progress & raise the risk of injury</span>, so beginners should incorporate at least two rest days per week.</p>

                <div className="flex flex-row  justify-center items-center my-6">

                    <img src={injury} width="60" height="60" className="shadow-neon-red inline align-middle my-4 mx-8 rounded-lg" />

                </div>

                <p>
                    For hypertrophy, a consistent sleep schedule is crucial for muscle recovery & hormone regulation. <span className="bg-blue-100 font-medium text-black">The saying "Early to bed, early to rise" highlights the importance of disciplined routines</span>. Quality sleep boosts health & productivity. Prioritizing recovery is key for long-term fitness success.</p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Concise workouts</span> use high-intensity exercises to deliver quick, efficient results. This approach efficiently boosts energy and overall fitness. <span className="bg-blue-100 font-medium text-black">Shorter workouts for smaller muscle groups (e.g., biceps)</span> are effective as they need less volume to grow.</p>


                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={thirtymin} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-full" />

                </div>

                <p>
                    Exercises like bicep curls, hammer curls & concentration curls, <span className="bg-blue-100 font-medium text-black">performed for 4-5 sets or a maximum of 3 exercises, can wrap up your workout in just 30 minutes</span>. This approach builds biceps, improves performance, boosts energy & is perfect for busy schedules.</p>
            </>,
            <>
                <p>
                    To overcome plateaus and ensure steady progress, <span className="bg-blue-100 font-medium text-black">maintain high training intensity with reduced volume</span>, a method suggested by bodybuilder Mike Mentzer to break through stagnation. Add training variations to keep your routine engaging. For instance, <span className="bg-blue-100 font-medium text-black">If you usually do 4 sets, cut it down to 2, but give your maximum effort</span> in those remaining sets.</p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={varietyintraining} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>

                <p>
                    Remember, there's no benefit in 'saving your fuel'; focus on giving maximum effort in every set for optimal results. <span className="bg-blue-100 font-medium text-black">Updating your diet, workout plan every week or two helps you overcome plateaus</span>. frequently challenging your body with new variations promotes growth</p>
            </>,
            <>
                <p>
                    For optimal hypertrophy, use <span className="bg-blue-100 font-medium text-black">heavy weights with lower reps to build strength, size</span> & <span className="bg-blue-100 font-medium text-black">lighter weights with higher reps to enhance endurance</span>, promote growth. This approach targets different muscle fibers Type II for strength and Type I for endurance, while boosting key hormones like testosterone & growth hormone.</p>

                <div className="flex flex-row  justify-center items-center my-6">
                    <img src={heavylightbalance} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                </div>

                <p>
                    Varying intensity prevents plateaus and promotes adaptation. <span className="bg-blue-100 font-medium text-black">Techniques like drop sets, supersets further enhance results</span>, boosting strength, endurance & muscle size.</p>
            </>,
            <>
                <p>
                    Stretching is essential for maintaining healthy joints, muscles & ligaments. <span className="bg-blue-100 font-medium text-black">Dynamic stretching before workouts</span>, like leg swings, arm circles, enhances mobility, while <span className="bg-blue-100 font-medium text-black">static stretching after workouts</span>, such as hamstring and shoulder stretches, promotes flexibility & recovery. Incorporating both types reduces injury risk.</p>

                <div className="flex flex-row  justify-center items-center my-6">

                    <img src={stretching} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={yoga} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />

                </div>

                <p>
                    Yoga post-workout is effective for static stretching. For example, <span className="bg-blue-100 font-medium text-black">for shoulders, include standing arm swings</span> & resistance band lateral raises before training, <span className="bg-blue-100 font-medium text-black">finish with dead hangs, Balasana & cross-arm stretches</span> for recovery.</p>
            </>
        ]
    },
    {
        key: 'bodyweight-exercises',
        title: "Bodyweight Exercises:",
        points: [
            { key: 'no-equipment', text: "No Equipment Needed (Workout Anywhere)." },
            { key: 'functional-strength', text: "Functional Strength (Daily Activities)." },
            { key: 'pushups-pullups', text: "Push-Ups & Pull-Ups (Form, Mentality, Strength)." },
            { key: 'squats-lunges', text: "Squats & Lunges (Lower body strength)." },
            { key: 'calisthenics-planks', text: "Calisthenics & Planks (Core Strength)." },
            { key: 'burpees', text: "Burpees (strength + cardio)." },
            { key: 'exercise-variations', text: "Variations of the same exercises." },
            { key: 'dips-chinups', text: "Dips/Chin-Ups (muscle specific exercises)." }
        ],
        heading: "Unlock Your Fitness Potential: Calisthenics and Bodyweight Training Guide",
        content: [
            <>

                <p>
                    Bodyweight exercises can be performed anywhere. <span className="bg-blue-100 font-medium text-black">Athletes often rely on these versatile movement</span> while traveling or when gym access is limited. <span className="bg-blue-100 font-medium text-black">Benefits include convenience, functional strength, scalability for all fitness levels</span> & engagement of multiple muscle groups.</p>

                <div className="flex flex-row  justify-center items-center my-6">

                    <img src={crunches} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />

                </div>
                <p>
                    <span className="bg-blue-100 font-medium text-black">bodyweight Push-ups, Squats & crunches require no equipment</span> & can be easily modified. Incorporating bodyweight workouts into your routine offers a flexible & effective way to stay fit anywhere.
                </p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Bodyweight exercises are great for building functional strength needed for daily activities</span>. Example Push-ups for upper body strength, Squats for lower body power & Planks for core stability. These exercises improve balance, endurance, making everyday tasks like lifting, carrying & climbing easier.</p>

                <div className="flex flex-row  justify-center items-center my-6">

                    <img src={liftingboxes} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={martialarts} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />

                </div>
                <p>
                    <span className="bg-red-100 font-medium text-black">Athletes, martial artists/fighters & bodybuilders often use push-ups & pull-ups as top upper body bodyweight exercises</span>. Incorporating these movements into your routine enhances strength & functionality, making daily activities easier.</p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Push-ups target the chest, shoulders & triceps with variations like incline & decline</span>. Advanced techniques like explosive, one-arm push-ups add challenge. Proper form is crucial. <span className="bg-blue-100 font-medium text-black">Pull-ups target the back, biceps & forearms, enhancing pulling, grip strength</span>. Weighted pull-ups and muscle-ups boost explosiveness.</p>


                <div className="flex flex-row  justify-center items-center my-6">

                    <img src={pushups} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={pullups} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />

                </div>

                <p>
                    <span className="bg-red-100 font-medium text-black">Both exercises build mental toughness   </span> & improve mind control through focus & determination.
                </p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Incorporating squats, lunges into your fitness routine enhances lower body strength, muscular endurance & flexibility</span>. Variations like sumo & jump squats improve power, while forward, reverse & lateral lunges target different muscle groups for better stability. <span className="bg-blue-100 font-medium text-black">Exercises like step-ups & Bulgarian split squats challenges balance</span>, which are vital for functional fitness, especially as we age.</p>

                <div className="flex flex-row  justify-center items-center my-6">

                    <img src={barbellsquat} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={lunges} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />
                    <img src={pistolsquats} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-lg" />

                </div>
                <p>
                    <span className="bg-red-100 font-medium text-black">Once you’ve mastered weighted lunges, squats & Bulgarian split squats, challenge yourself with pistol squats to build truly bulletproof legs</span>. This advanced movement targets the entire lower body while engaging the core, stabilizing muscles & boosting overall athleticism.</p>
            </>,
            <>
                <p>
                    Calisthenics, planks are excellent for building core strength. <span className="bg-blue-100 font-medium text-black">Advance movements (Front lever, Back lever) challenge the core</span>, shoulders & back, enhancing strength, stability. Exercises like crunches, fluter kicks, leg raises engage the core, promoting functional strength. <span className="bg-blue-100 font-medium text-black">Other advanced calisthenics exercises are (muscle-ups, weighted dips & the planche)</span>. However, <span className="bg-red-100 font-medium text-black">These should only be done under expert guidance to ensure safety</span>.</p>

                <div className="flex flex-row  justify-center items-center my-6" >

                    <img src={elbowpain} width="60" height="60" className="shadow-neon-red inline align-middle my-4 mx-8 rounded-lg" />

                </div>
                <p>
                    <span className="bg-red-100 font-medium text-black">Negligent performance</span> of advanced calisthenics like the planche<span className="bg-red-100 font-medium text-black"> can result in  serious injuries (tennis elbow, elbow dislocation) due to improper technique, overuse</span>. To reduce risks, warm up properly, maintain good form, progress gradually, strengthen supporting muscles & include rest days. Consulting a trainer can improve safety.
                </p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Burpees are a highly effective full-body exercise that combines strength + cardio, engaging multiple muscle groups, including the legs, chest, arms & core</span>. They boost muscular strength, endurance & cardiovascular health, making them a valuable addition to any workout routine.</p>

                <div className="flex flex-row  justify-center items-center my-6" >

                    <img src={burpees} width="70" height="70" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-md" />

                </div>
                <p>
                    Easily modified for all fitness levels, <span className="bg-blue-100 font-medium text-black">burpees can be incorporated into HIIT, circuit training or quick sessions</span> to boost calorie burn & metabolism. Regular practice improves agility & functional strength, contributing to a healthier lifestyle.</p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Bodyweight exercises offer numerous advanced variations that challenge strength, balance, and coordination</span>, which are key for overcoming plateaus. Examples include Archer Push-Ups for lateral weight shifting, Clap Push-Ups for power & explosiveness, <span className="bg-blue-100 font-medium text-black">Pistol Squats for balance</span> & unilateral strength, <span className="bg-blue-100 font-medium text-black">Jump Squats to boost power + cardiovascular intensity</span>.</p>


                <div className="flex flex-row  justify-center items-center my-6" >

                    <img src={variety} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-md" />

                </div>

                <p>
                    Plank variations like Plank to Push-Up engage the core, while Side Plank with Leg Lift targets obliques, hip stability. Jumping Lunges improve cardiovascular fitness, lower body strength & Lateral Lunges work the inner, outer thighs. <span className="bg-blue-100 font-medium text-black">Adding advanced variations makes workout tougher & ensures continuous progress</span>.</p>
            </>,
            <>
                <p>
                    <span className="bg-blue-100 font-medium text-black">Dips and chin-ups are key bodyweight exercises for building upper body strength and promoting bicep, tricep & chest hypertrophy</span>. Chin-ups focus on biceps + lats, while dips target triceps + pectorals. Advance with progressive overload or variations like L-sit dips & wide-grip chin-ups.</p>



                <div className="flex flex-row  justify-center items-center my-6" >

                    <img src={gymnastring} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-md" />
                    <img src={dips} width="60" height="60" className="shadow-neon-blue inline align-middle my-4 mx-8 rounded-md" />

                </div>

                <p>
                    <span className="bg-blue-100 font-medium text-black">Gymnasts, known for their impressive bicep development, rely heavily on chin-ups, other bodyweight/calisthenics exercises that put significant pressure on the biceps</span>. Key exercises include ring work, one-arm pull-ups & chin-ups. These movements build bicep strength, improve upper body coordination & control, showcasing their effectiveness for functional mobility.</p>
            </>,

        ]
    }
];
