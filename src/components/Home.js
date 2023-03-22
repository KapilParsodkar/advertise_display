import React from 'react'
import p from "../assets/2.jpeg"
import { AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,} from "react-icons/ai"



const Home = () => {
  return (
    <>
    <div className="home" id="home">

    <main>
        <h1>FitCzar</h1>
        <p>WorkHard Gain Hard</p>
    </main>
    </div>

  <div className="home2nd">
   <img src={p} alt="photos"/>
   <div>
    <p>
    If you do not make time for exercise, you will probably have to make time for illness.
    </p>
   </div>
  </div>
  <div className="home3rd" id="about">
  <diV>
  <br></br>
  <br></br>
  <br></br>
     <h1> Fitczar</h1>
     <p>
     Gymnasia apparatus like barbells, jumping boards, running paths, tennis-balls, cricket fields, and fencing areas are used for exercises. In safe weather, outdoor locations are the most conducive to health.[2] Gyms were popular in ancient Greece. Their curricula included self-defense, gymnastics medica, or physical therapy to help the sick and injured, and for physical fitness and sports, from boxing to dancing to skipping rope.[3]

Gymnasia also had teachers of wisdom and philosophy. Community gymnastic events were done as part of the celebrations during various village festivals. In ancient Greece there was a phrase of contempt, "He can neither swim nor write." After a while, however, Olympic athletes began training in buildings specifically designed for them.[4] Community sports never became as popular among ancient Romans as it had among the ancient Greeks. Gyms were used more as a preparation for military service or spectator sports. During the Roman Empire, the gymnastic art was forgotten. In the Dark Ages there were sword fighting tournaments and of chivalry; and after gunpowder was invented sword fighting began to be replaced by the sport of fencing, as well as schools of dagger fighting and wrestling and boxing.[5]

In the 18th century, Salzmann, a German clergyman, opened a gym in Thuringia teaching bodily exercises, including running and swimming. Clias and Volker established gyms in London, and in 1825, Doctor Charles Beck, a German immigrant, established the first gymnasium in the United States. It was found that gym pupils lose interest in doing the same exercises, partly because of age. Variety in exercises included skating, dancing, and swimming. Some gym activities can be done by 6 to 8-year-olds, while age 16 has been considered mature enough for boxing and horseback riding.[6]

In Ancient Greece, the gymnasion (γυμνάσιον) was a locality for both physical and intellectual education of young men. The latter meaning of intellectual education persisted in 

Nowadays, it represents a common area where people, from all ranges of experience, exercise and work out their muscles. You can also usually find people doing cardio exercises or pilates.
     </p>
     
     </diV>
  </div>

  <div className='home4th' id="brands">
  <div>
    <h1>
      Brands
    </h1>
    <article>
    <div>
      <AiFillGoogleCircle/>
      <p>Google</p>
      </div>


      <div>
      <AiFillAmazonCircle/>
      <p>Amazon</p>
      </div>

      <div>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
    </article>
   
  </div>

  </div>
    </>
  )
}

export default Home