import React from 'react';
import '../../components/pages/Courses.css';
import imageSrc from '../../components/pages/cse.jpeg';
import imgeSrc from '../../components/pages/it.jpeg';
import imagSrc from '../../components/pages/ece.jpg';
import iagSrc from '../../components/pages/eee.jpeg';
import imeSrc from '../../components/pages/civil.jpeg';
import immageSrc from '../../components/pages/mech1.jpeg';
import iageSrc from'../../components/pages/ae.jpeg';
function Courses() {
    return (
      <div>
        <h1>Courses</h1>
       
       
        <h2>COMPUTER SCIENCE ENGINEERING(CSE)</h2>
        <img src={imageSrc} alt="cse" />
        <p>
        Computer Science Engineering (CSE) is an academic programme that integrates the field of Computer Engineering and Computer Science. It is one of the most sought-after courses among engineering students. The course contains a plethora of topics but emphasises the basics of computer programming and networking. The topics covered in the course are computation, algorithms, programming languages, program design, computer software, computer hardware and others. Computer science engineers are involved in many aspects of computing, from the design of individual microprocessors, personal computers, and supercomputers to circuit designing and writing software that powers them. 
       </p>
       
       
        <h3>INFORMATION TECHNOLOGY(IT)</h3>
        <img src={imgeSrc} alt='it'/>
        <p>
        B.Tech IT (Information Technology) is a 4-year Under Graduate (UG) engineering course where students are taught and trained in the concepts of software development. B.Tech IT is on par with the BCA course. However, the career prospects may vary for BCA and B.Tech IT. If you are looking for a bright career in the field of Software Engineering/ Development, this course is the best option. As IT is one of the dominant industries in India, the scope of career prospects are high with this degree. Students aspiring to study an IT course at B.Tech course must note that a good knowledge of Mathematics and Physics is required to excel. All the details about the B.Tech IT course such as eligibility, admission process, fees, career prospects, fees etc can be checked here.
        </p>
       

        <h4>ELECTRONICS AND COMMUNICATION ENGINEERING(ECE)</h4>
        <img src={imagSrc} alt="ece"/>
        <p>
        Electronics and Communications Engineering (ECE) involves researching, designing, developing, and testing electronic equipment used in various systems. Electronics and Communications engineers also conceptualise and oversee the manufacturing of communications and broadcast systems. This stream of engineering deals with analogue transmission, basic electronics, microprocessors, solid-state devices, digital and analogue communication, analogue integrated circuits, microwave engineering, satellite communication, antennae, and wave progression. It also deals with the manufacturing of electronic devices, circuits, and communications equipment. In India, Electronics and Communications Engineering is offered by various colleges at the UG as well as PG level leading to BTech (4 years) and MTech (2 years) degrees respectively. 
        </p>

          
         <h5>ELECTRICAL AND ELECTRONICS ENGINEERING(EEE)</h5>
         <img src={iagSrc} alt='eee'/>
         <p>
         Electrical and Electronics Engineering is an integrated branch of engineering. This course deals with the technological aspects of electricity, especially the design and application of circuitry and electronic equipment. It also includes the concept of power generation and distribution, communication and machine control. This engineering branch focuses on the practical application of electricity. It also specializes in design, construction and uses of electrical systems in our lives. Electrical and electronics engineering is offered in various professional courses such as Diploma, B.Tech, B.E. and M.Tech. E.E.E. (Electrical and Electronics Engineering) incorporates fundamental knowledge in core disciplines such as control systems, communications, signal processing, micro-processors, radio frequency design, electric machines and power generation. In this course students are taught about everything ranging from semiconductors, analog electronics, and power systems to big transmission lines, digital electronics, electrical machines (AC and DC) and control systems.
         </p>
         
         
         <h6>CIVIL ENGINEERING</h6>
         <img src={imeSrc} alt='civil'/>
         <p>
         One of the oldest and broadest Engineering disciplines, Civil Engineering involves planning, designing, constructing, maintaining and supervising infrastructures which include facilities essential to modern life like highways, bridges and tunnels, schools, hospitals, airports and other buildings, sewage systems and water treatment facilities. Subsequently, the course also involves protecting the public and environmental health as well as improving existing infrastructure. Construction activities are one of the main core industries of Indian Economy and therefore an indispensable part of our economy. It generates millions of job opportunities across all sectors and employ trained and semi-skilled professionals. According to a new research report by Global Market Insights, Inc, the Civil Engineering Market size is expected to grow up to USD 11.72 trillion by 2025. Various colleges in India offer Civil Engineering at the UG and PG levels, thus leading to BTech and MTech degrees respectively.
         </p>

         <h6>MECHANICAL ENGINEERING</h6>
        <img src={immageSrc} alt='mech1'/>
        <p>
        Mechanical Engineering is a four-year BTech programme that teaches the students a basic understanding and knowledge of how heavy tools and machinery work. A student pursuing a Mechanical Engineering programme will acquire knowledge about designing automobiles, electric motors, aircraft and other heavy vehicles. Mechanical engineers design everything from new batteries, and athletic equipment to medical devices and from personal computers, air conditioners, and automobile engines to electric power plants. These engineers also design machines that produce these innovations. The scope of Mechanical Engineering in India and abroad is huge because every aspect of our lives is touched by Mechanical Engineering course in one way or the other. Spanning multiple industries, the career opportunities for students pursuing the programme are huge. 
        </p>

        <h6>AUTOMOBILE ENGINEERING</h6>
        <img src={iageSrc} alt='ae'/>
        <p>
        Automobile Engineering is the branch of engineering which deals with designing, manufacturing, mechanical mechanisms as well operations of automobiles. It is also an introduction to vehicle engineering which includes cars, motorcycles, trucks and buses etc.  It is an advanced branch of engineering which deals with the investigation of repairs and their reconstruction. Professionals called as Automobile Engineers are responsible for designing heavy-duty vehicles such as trucks, vans and pick-up carriages for long-distance transportation. This course is offered in undergraduate and postgraduate levels and across various specialisations such as Chassis, Aerodynamics, Electronic Vehicles, Motorsport etc. 
        </p>


        </div>
    );
  }
  export default Courses;
