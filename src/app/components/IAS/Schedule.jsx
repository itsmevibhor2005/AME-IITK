import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


const Schedule = () => {
    const schedule = [
      {
        day: "Day 1 (22nd March 2025)",
        events: [
          {
            time: "9:15-9:30 am",
            title: "Inauguration",
            venue: "Outreach Auditorium",
          },
          {
            time: "9:30-10:30 am",
            title: "RS Pandey Lecture",
            venue: "Outreach Auditorium",
          },
          { time: "10:30-11:00 am", title: "Tea" },
          {
            time: "11:00-01:00 pm",
            title: "Parallel Sessions A1, B1, C1",
            sessions: [
              {
                venue: "Outreach Video Conference Room",
                chair: "Dr. Rosy (IIT BHU)",
                coChair: "Prof. A.K. Saha",
                presentations: [
                  {
                    time: "11:00-11:35 am",
                    title:
                      "Dr. Rosy: The Role of Separators in Improving the Performance of Metal Batteries",
                  },
                  {
                    time: "11:35-11:50 am",
                    title:
                      "Himanshu: Stability of traveling pipes conveying fluid",
                  },
                  {
                    time: "11:50-12:05 pm",
                    title:
                      "Ishu Tomar: Effect of over and undercharging on intercalation induced stress in Lithium-Nickel-Manganese-Cobalt electrode",
                  },
                  {
                    time: "12:05-12:20 pm",
                    title:
                      "BIPIN KUMAR MISHRA: Effects of the propeller slipstream on a laminar boundary layer",
                  },
                  {
                    time: "12:20-12:45 pm",
                    title:
                      "Gunvir Singh Walia: Computation and numerical modeling of combustion in high-speed flows",
                  },
                  {
                    time: "12:45-1:00 pm",
                    title:
                      "Manish Raj : HeFAAL: a tool to analyse heliostat field on assorted terrain",
                  },
                ],
              },
              {
                venue: "PBCEC Big Class Room",
                chair: "Prof. Deepak Sharma (IITG)",
                coChair: "Prof. Shyam Gopalakrishnan",
                presentations: [
                  {
                    time: "11:00-11:35 am",
                    title:
                      "Prof. Deepak Sharma: Optimization Using Evolutionary Algorithms and Applications",
                  },
                  {
                    time: "11:35-11:50 am",
                    title:
                      "Retam Paul : Morphology of fracture profiles and toughness: competition between inter and transgranular fracture in two dimensional brittle solids",
                  },
                  {
                    time: "11:50-12:05 pm",
                    title:
                      "Subhadeep Sahana: : Vibration attenuation in tapered metabeam: Influence of curved resonators on elastic wave dispersion",
                  },
                  {
                    time: "12:05-12:20 pm",
                    title:
                      "Atul Anand: The Effect of Coupler System Wear on the Longitudinal Dynamics and Running Safety of Train Rakes",
                  },
                  {
                    time: "12:20-12:45 pm",
                    title:
                      "PRAMOD KUMAR PATEL : Understanding the micromechanics of deformation of glassy amorphous polymers through MD simulations",
                  },
                  {
                    time: "12:45-1:00 pm",
                    title:
                      "Randhir Kumar: Double-tuning the inlet and outlet extension lengths of a family of straight-flow expansion chamber mufflers for broadband attenuation",
                  },
                ],
              },
              {
                venue: "PBCEC Small Class Room",
                chair: "Dr. Prithviraj Mukhopadhyay (IITD)",
                coChair: "Prof. Arvind Kumar",
                presentations: [
                  {
                    time: "11:00-11:35 am",
                    title:
                      "Dr. Prithviraj Mukhopadhyay: Insights on joining of Superabrasives to metal for cutting tool applications",
                  },
                  {
                    time: "11:35-11:50 am",
                    title:
                      "SUJAN KUMAR DHALI: Trifocal SLAM: A dynamic SLAM based on three frame views",
                  },
                  {
                    time: "11:50-12:05 pm",
                    title:
                      "Sagathiya Naisarg Harishbhai: Texturing on thin-walled stainless steel tubes  using electrochemical machining for heat transfer application",
                  },
                  {
                    time: "12:05-12:20 pm",
                    title:
                      "ashok vishwakarma : 3D printing and mechanical characterization of bioactive glass scaffolds for bone tissue engineering",
                  },
                  {
                    time: "12:20-12:45 pm",
                    title:
                      "Nimesh Khandelwal : Compliant control of quadruped robots",
                  },
                  {
                    time: "12:45-1:00 pm",
                    title:
                      "Moloy Sarkar : Investigations into the interfacial characteristics of Inconel 718/stainless steel 316L fabricated by multi-material Laser Powder Bed Fusion.",
                  },
                ],
              },
            ],
          },
          { time: "1:00-1:30 pm", title: "Lunch", venue: "Outreach Lawn" },
          {
            time: "1:30-3:00 pm",
            title: "Poster Presentation",
            venue: "Hall of Fame",
          },
          { time: "3:00-3:15 pm", title: "Tea" },
          {
            time: "3:15-6:05 pm",
            title: "Parallel Sessions A2, B2, C2",
            sessions: [
              {
                venue: "Outreach Video Conference Room",
                chair: "Prof. Sandeep Saha (IITB)",
                coChair: "Prof. M.K. Das",
                presentations: [
                  {
                    time: "3:15-3:50 pm",
                    title:
                      "Prof. Sandeep Saha: Can Thermochemical Storage be used as seasonal space heating in India?",
                  },
                  {
                    time: "3:50-4:05 pm",
                    title:
                      "Narendra Kumar Chadalavada: Bubble formation during evaporative crystallization in multi-component saline droplets",
                  },
                  {
                    time: "4:05-4:20 pm",
                    title:
                      "Pavan Kumar Shakya : Heat operated solar desalination through nanophotonics-enabled membranes",
                  },
                  {
                    time: "4:20-4:35 pm",
                    title:
                      "Gyanesh Kumar : Combined influence of surface orientation and roughness on pool boiling heat transfer performance",
                  },
                  {
                    time: "4:35-4:50 pm",
                    title:
                      "BOYD WARREN FRANCIS CORREIA: Numerical investigation of tube-in-tube heat exchanger with supercritical nitrogen and hydrogen.",
                  },
                  {
                    time: "4:50-5:05 pm",
                    title:
                      "Gyanesh Kumar: Combined influence of surface orientation and roughness on pool boiling heat transfer performance",
                  },
                  {
                    time: "5:05-5:20 pm",
                    title:
                      "Challa Sumen : Global stability analysis of flow through stenosis: steady swirling flows",
                  },
                  {
                    time: "5:20-5:35 pm",
                    title:
                      "Gyanesh Kumar: Combined influence of surface orientation and roughness on pool boiling heat transfer performance",
                  },
                  {
                    time: "5:35-5:50 pm",
                    title:
                      "CHAKKA RAM GOPAL : Drop spreading characteristics over a micro-pillared surface and comparison with an equivalent flat surface",
                  },
                  {
                    time: "5:50-6:05 pm",
                    title:
                      "Waquar Raza : Real-time modeling of dropwise condensation of saturated water vapor on tubular surfaces",
                  },
                ],
              },
              {
                venue: "PBCEC Big Class Room",
                chair: "Prof. Abhijit Sarkar (IITM)",
                coChair: "Dr. Ushasi Roy",
                presentations: [
                  {
                    time: "3:15-3:50 pm",
                    title:
                      "Prof. Abhijit Sarkar: Geometric Foundations of Lagrangian and Hamiltonian Mechanics",
                  },
                  {
                    time: "3:50-4:05 pm",
                    title:
                      "Manish Kumar: A Kinematically Enriched Directed Continuum Damage Mechanics Approach to model Low-Velocity Impact induced Damage in Composites",
                  },
                  {
                    time: "4:05-4:20 pm",
                    title:
                      "Devesh Mishra: Co-simulation of quadruped robot with flexible links using AdamsFlex and Matlab",
                  },
                  {
                    time: "4:20-4:35 pm",
                    title:
                      "AMIT CHAUDHARY: Two-Scale Constitutive Law for Modeling Fibre Kinking-Driven Compressive Failure in Composites",
                  },
                  {
                    time: "4:35-4:50 pm",
                    title:
                      "Tanuj Gupta: Dynamic study of interlaced mechanical metastructure",
                  },
                  {
                    time: "4:50-5:05 pm",
                    title:
                      "MUKUL KUMAR SRIVASTAVA: Critical analysis of the Multi-Functional Performance of CNT-Reinforced CFRP Composites",
                  },
                  {
                    time: "5:05-5:20 pm",
                    title:
                      "Arun Kumar : Tribological and Rheological Insights into the Lubrication Potential of Eco-Friendly Thixotropic Silica Gels",
                  },
                  {
                    time: "5:20-5:35 pm",
                    title:
                      "Ajay Kumar: Process Optimization and Property Enhancement of UHMWPE Fiber via Gel Spinning",
                  },
                  {
                    time: "5:35-5:50 pm",
                    title:
                      "Kush Kumar: Nonlinear Dynamics of a Beam Subjected to a Moving Mass",
                  },
                  {
                    time: "5:50-6:05 pm",
                    title:
                      "Shubham Kumar : Computational aeroacoustics and phase-conjugation technique for localizing flow-induced noise sources",
                  },
                ],
              },
              {
                venue: "PBCEC Small Class Room",
                chair: "Prof. Ramesh Singh (IITB)",
                coChair: "Prof. J. Ramkumar",
                presentations: [
                  {
                    time: "3:15-3:50 pm",
                    title:
                      "Prof. Ramesh Singh: Fostering Innovation through Industry-Academia Collaboration",
                  },
                  {
                    time: "3:50-4:05 pm",
                    title:
                      "Mohammad Mudhasir: Perils of vibration RMS-based spindle health monitoring",
                  },
                  {
                    time: "4:05-4:20 pm",
                    title:
                      "Raj Kumar: 3D Printing of TPMS based PLA/BG composite Scaffold",
                  },
                  {
                    time: "4:20-4:35 pm",
                    title:
                      "Shashikumar Maurya: Effect of Permanent Magnetic Field Positioning on Microstructure and Mechanical Properties of Casted Al-Cu Alloy",
                  },
                  {
                    time: "4:35-4:50 pm",
                    title:
                      "PRATIK PARAG GHADSE: Multiphysics Numerical Simulation of Multitrack SLM Process of Ti6Al4V",
                  },
                  {
                    time: "4:50-5:05 pm",
                    title:
                      "Sumit Gusain: Surface integrity analysis on selective removal by EDM of near-circular shapes from deterministic lattice structures fabricated by LPBF",
                  },
                  {
                    time: "5:05-5:20 pm",
                    title:
                      "Vyankatesh Ashtekar : Development and Experimental Evaluation of a Digital Twin System for a Small Biped Robot based on Contact-aware Forward Dynamics",
                  },
                  {
                    time: "5:20-5:35 pm",
                    title:
                      "Dhayakiran Reddy Tirumala: Neural Network-Based Modeling of Quasi-Direct Drive Actuators for Quadruped Locomotion",
                  },
                  {
                    time: "5:35-5:50 pm",
                    title:
                      "Ranamay Saha: MEMS Based EIS Sensor for Rapid Detection of Viral Diseases",
                  },
                  {
                    time: "5:50-6:05 pm",
                    title:
                      "Amita Sahu: Fabrication and characterization of soft tissue-mimicking hydrogels.",
                  },
                ],
              },
            ],
          },

          { time: "7:00 pm", title: "Dinner", venue: "Outreach Lawn" },
        ],
      },
      
    ];
    const schedule2 = [
      {
        day: "Day 2 (23rd March 2025)",
        events: [
          { time: "8:30-9:00 am", title: "Tea" },
          {
            time: "9:00-12:00 pm",
            title: "Industry Experts",
            venue: "Outreach Auditorium",
            sessions: [
              {
                time: "9:00-9:25 am",
                title:
                  "**Dr. Chaitanya Sampara**: Emerging Trends in Advanced Manufacturing",
              },
              {
                time: "9:25-9:50 am",
                title:
                  "**Dr. Dhruv Chandel**: Industry Trends in Modern Engineering - The Rise of Autonomy and Software Integration",
              },
              {
                time: "9:50-10:15 am",
                title:
                  "**Dr. Avijit Mondal**: Application of Advanced NDE Tools for Health and Life Assessment of Critical Power Plant Components",
              },
              {
                time: "10:15-10:40 am",
                title:
                  "**Mr. Umamaheshwar**: Sustainable Aerospace – Moving Innovation Forward",
              },
              {
                time: "10:40-11:05 am",
                title:
                  "**Dr. Senthil Kumaran**: Silicon PV Industries: Present Status and Challenges in India",
              },
              {
                time: "11:05-11:30 am",
                title:
                  "**Mr. N. Rajesh Kumar**: Trends and Challenges in Asset Management: An Industry Perspective",
              },
              {
                time: "11:30-11:55 am",
                title:
                  "**Ms. Kajal Khan**: Accelerating Next-Gen Semiconductor Design & Fabrication with Structural Simulations",
              },
            ],
          },
          {
            time: "12:00-1:00 pm",
            title: "Industry-Academia Panel Discussion",
            venue: "Outreach Auditorium",
          },
          {
            time: "1:00-2:00 pm",
            title: "Lunch Break",
            venue: "Outreach Lawn",
          },
          {
            time: "2:00-4:30 pm",
            title: "Parallel Sessions A3, B3, C3",
            sessions: [
              {
                venue: "Outreach Video Conference Room",
                chair: "Prof. Gaurav Tomar (IISC)",
                coChair: "Dr. Tushar Sikroria",
                presentations: [
                  {
                    time: "2:00-2:35 pm",
                    title:
                      "**Prof. Gaurav Tomar**: Contact line instabilities in thin film flows on curved geometries",
                  },
                  {
                    time: "2:35-2:50 pm",
                    title:
                      "**Keshav Yadav**: Experimental study of bluff-body stabilized flames in lean premixed mode",
                  },
                ],
              },
              {
                venue: "PBCEC Big Class Room",
                chair: "Prof. Shantanu Bhattacharya (CSIR-CSIO)",
                coChair: "Prof. Dipayan Mukherjee",
                presentations: [
                  {
                    time: "2:00-2:35 pm",
                    title:
                      "**Prof. Shantanu Bhattacharya**: Disruptive Nanotechnology driven innovation for treatment of industrial textile wastewater",
                  },
                  {
                    time: "2:35-2:50 pm",
                    title:
                      "**Ravi Kumar**: Digital Twins framework: Convolutional Network for On-Board Diagnosis of Railway Rolling Stock",
                  },
                ],
              },
              {
                venue: "PBCEC Small Class Room",
                chair: "Dr. Sudarshan Ghosh (IITD)",
                coChair: "Prof. Sarvesh Mishra",
                presentations: [
                  {
                    time: "2:00-2:35 pm",
                    title:
                      "**Dr. Sudarshan Ghosh**: Sustainable methods in Manufacturing domain",
                  },
                  {
                    time: "2:35-2:50 pm",
                    title:
                      "**Sushil Kumar**: An underlying mechanism in plasma electrolytic polishing process",
                  },
                ],
              },
            ],
          },
          { time: "4:30-5:00 pm", title: "Tea" },
          {
            time: "5:00-5:30 pm",
            title: "Closing Ceremony",
            venue: "Outreach Auditorium",
          },
        ],
      },
    ];
  return (
    <>
      <motion.h1
        className="lg:text-6xl sm:text-4xl text-2xl m-10 text-center font-bold text-purple-700"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Schedule
      </motion.h1>
      <div className="flex justify-center items-center w-[100vw]">
        <motion.div
          className="grid grid-cols-2 text-left sm:w-[70vw] w-[90vw]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {schedule.map((day, index) => (
            <div
              key={index}
              className="mb-8 p-6 bg-white text-gray-900 shadow-xl rounded-lg"
            >
              <h2 className="lg:text-3xl sm:text-xl text-lg font-bold text-indigo-700 mb-4 italic">
                {day.day}
              </h2>
              <ul>
                {day.events.map((event, idx) => (
                  <li
                    key={idx}
                    className="mb-4 border-b pb-3 lg:text-lg sm:text-base text-sm"
                  >
                    <span className="font-bold text-indigo-600 italic">
                      {event.time}:
                    </span>{" "}
                    {event.title}{" "}
                    {event.venue && (
                      <span className="text-gray-500 italic">
                        ({event.venue})
                      </span>
                    )}
                    {event.sessions && (
                      <ul className="ml-4 mt-2 bg-gray-100 p-3 rounded-lg italic">
                        {event.sessions.map((session, sIdx) => (
                          <li key={sIdx} className="mt-2">
                            <span className="font-bold text-blue-600 italic">
                              {session.venue}
                            </span>{" "}
                            - Chair : {session.chair}, Co-Chair :{" "}
                            {session.coChair}
                            <ul className="ml-4 lg:text-sm sm:text-xs text-xs text-gray-700">
                              {session.presentations.map((pres, pIdx) => (
                                <li key={pIdx} className="mt-1 italic">
                                  <span className="font-bold text-indigo-600">
                                    {pres.time}:
                                  </span>{" "}
                                  {pres.title}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mb-8 p-6 bg-white text-gray-900 shadow-xl rounded-lg">
            <h2 className="lg:text-3xl sm:text-xl text-lg font-bold text-indigo-700 mb-4 italic">
              Day 2 (23rd March 2025)
            </h2>
            <ul>
              <li className="mb-4 border-b pb-3 lg:text-lg sm:text-base text-sm">
                <span className="font-bold text-indigo-600 italic">
                  8:30-9:00 am:
                </span>{" "}
                Tea
              </li>
              <li className="mb-4 border-b pb-3 lg:text-lg sm:text-base text-sm">
                <span className="font-bold text-indigo-600 italic">
                  9:00-12:00 pm:
                </span>{" "}
                Industry Experts{" "}
                <span className="text-gray-500 italic">
                  {" "}
                  (Outreach Auditorium)
                </span>
                <ul className="ml-4 mt-2 bg-gray-100 p-3 rounded-lg italic">
                  <li className="mt-2">
                    <span className="font-bold text-indigo-600 italic">
                      9:00-9:25 am:
                    </span>{" "}
                    Dr. Chaitanya Sampara
                  </li>
                  <li className="mt-2">
                    <span className="font-bold text-indigo-600 italic">
                      9:25-9:50 am:
                    </span>{" "}
                    Dr. Dhruv Chandel: Industry Trends in Modern Engineering -
                    The Rise of Autonomy and Software Integration
                  </li>
                  <li className="mt-2">
                    <span className="font-bold text-indigo-600 italic">
                      9:50-10:15 am:
                    </span>{" "}
                    Dr. Avijit Mondal: Application of Advanced NDE Tools for
                    Health and Life Assessment of Critical Power Plant
                    Components During the Flexible Operation Regime
                  </li>
                  <li className="mt-2">
                    <span className="font-bold text-indigo-600 italic">
                      10:15-10:40 am:
                    </span>{" "}
                    Mr. Umamaheshwar: Sustainable Aerospace – Moving Innovation
                    Forward
                  </li>
                  <li className="mt-2">
                    <span className="font-bold text-indigo-600 italic">
                      10:40-11:05 am:
                    </span>{" "}
                    Dr. Senthil Kumaran: Silicon PV Industries: Present Status
                    and Challenges in India
                  </li>
                  <li className="mt-2">
                    <span className="font-bold text-indigo-600 italic">
                      11:05-11:30 am:
                    </span>{" "}
                    Mr. N. Rajesh Kumar: Trends and Challenges in Asset
                    Management: An Industry Perspective
                  </li>
                  <li className="mt-2">
                    <span className="font-bold text-indigo-600 italic">
                      11:30-11:55 am:
                    </span>{" "}
                    Ms. Kajal Khan: Accelerating Next-Gen Semiconductor Design &
                    Fabrication with Structural Simulations
                  </li>
                </ul>
              </li>
              <li className="mb-4 border-b pb-3 text-lg">
                <span className="font-bold text-indigo-600 italic">
                  12:00-1:00 pm:
                </span>{" "}
                Industry-Academia Panel Discussion
                <ul className="ml-4 mt-2 bg-gray-100 p-3 rounded-lg italic">
                  <li className="mt-2">
                    <span className="font-bold text-blue-600 italic">
                      Outreach Auditorium
                    </span>{" "}
                    - Chair : Dr. Chaitanya Sampara, Co-Chair : Dr. Dhruv
                    Chandel
                  </li>
                </ul>
              </li>
              <li className="mb-4 border-b pb-3 text-lg">
                <span className="font-bold text-indigo-600 italic">
                  1:00-2:00 pm:
                </span>{" "}
                Lunch Break
                <span className="text-gray-500 italic"> (Outreach Lawn)</span>
              </li>
              <li className="mb-4 border-b pb-3 lg:text-lg sm:text-base text-sm">
                <span className="font-bold text-indigo-600 italic">
                  2:00-4:30 pm:
                </span>{" "}
                Parallel Sessions A3, B3, C3
                <ul className="ml-4 mt-2 bg-gray-100 p-3 rounded-lg italic">
                  <li className="mt-2">
                    <span className="font-bold text-blue-600 italic">
                      Outreach Video Conference Room
                    </span>{" "}
                    - Chair : Prof. Gaurav Tomar, Co-Chair : Dr. Tushar Sikroria
                    <ul className="ml-4 lg:text-sm text-xs text-gray-700">
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          2:00-2:35 pm:
                        </span>{" "}
                        Contact line instabilities in thin film flows on curved
                        geometries
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          2:35-2:50 pm:
                        </span>{" "}
                        Keshav Yadav: Experimental study of bluff-body
                        stabilized flames in lean premixed mode
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          2:50-3:05 pm:
                        </span>{" "}
                        AJAY PAWAR: Valorization of oily sludge from petroleum
                        industries based on bubbling fluidized bed pyrolysis
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:05-3:20 pm:
                        </span>{" "}
                        Darshilkumar N Chhatrodiya: Resistance model of a
                        composite MIEC material for oxygen transport membrane.
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:20-3:35 pm
                        </span>{" "}
                        Abhishek Kumar Gupta:Effect of Swirling Flow on Planar
                        Drop Sizing, Liquid Volume Fraction, and Velocity
                        Distribution in FB Spray
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:35-3:50 pm:
                        </span>{" "}
                        RADHIKA SARAWAGI: Solidification and melting of
                        salt-water phase change material
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:50-4:05 pm:
                        </span>{" "}
                        BIPIN KUMAR MISHRA: Effects of the propeller slipstream
                        on a laminar boundary layer
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    <span className="font-bold text-blue-600 italic">
                      PBCEC Big Class Room
                    </span>{" "}
                    - Chair : Prof. Shantanu Bhattacharya, Co-Chair : Prof.
                    Dipayan Mukherjee
                    <ul className="ml-4 lg:text-sm text-xs text-gray-700">
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          2:00-2:35 pm:
                        </span>{" "}
                        Disruptive Nanotechnology driven innovation for
                        treatment of industrial textile wastewater through
                        automated decision interventions
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          2:35-2:50 pm:
                        </span>{" "}
                        Ravi Kumar: Digital Twins framework: Convolutional
                        Network for On-Board Diagnosis of Railway Rolling Stock
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          2:50-3:05 pm:
                        </span>{" "}
                        Saptarshi Paul: Mechanics of Shells with Defects &
                        Computational Challenges Therein.
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:05-3:20 pm:
                        </span>{" "}
                        Arjun Singh Patel: Experimental analysis of the dynamics
                        of an impact damped boring bar
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:20-3:35 pm:
                        </span>{" "}
                        KAPIL KUMAR: Study of a coupled axial-torsional rotary
                        drilling system with integrated drive motor and hoisting
                        mechanism dynamics
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:35-3:50 pm:
                        </span>{" "}
                        Susheel Kumar : Study of adhesion between two
                        complementary rough elastomer (PDMS) surfaces
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:50-4:05 pm:
                        </span>{" "}
                        Shyam Sunder Nishad : Dimensional optimization of
                        single-DOF planar rigid link-flapping mechanisms for
                        high lift and low power
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    <span className="font-bold text-blue-600 italic">
                      PBCEC Small Class Room
                    </span>{" "}
                    - Chair : Dr. Sudarshan Ghosh, Co-Chair : Prof. Sarvesh
                    Mishra
                    <ul className="ml-4 lg:text-sm text-xs text-gray-700">
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          2:00-2:35 pm:
                        </span>{" "}
                        Dr. Sudarshan Ghosh : Sustainable methods in
                        Manufacturing domain
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          2:35-2:50 pm:
                        </span>{" "}
                        Sushil kumar: An underlying mechanism in plasma
                        electrolytic polishing process
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          2:50-3:05 pm:
                        </span>{" "}
                        Prachi Awasthi: Experimental Study of Adsorption of
                        Antibiotics from the Wastewater Using PVDF-BNNSs Mixed
                        Matrix Membrane
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:05-3:20 pm:
                        </span>{" "}
                        Shanti Mehra : Development and Experimental Evaluation
                        of Fuel Injection System for Dimethyl Ether fuelled
                        Engines
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:20-3:35 pm:
                        </span>{" "}
                        Noorul Huda : Effects of H2 premixedness on the dynamics
                        of lean-premixed swirl stabilized flames
                      </li>
                      <li className="mt-1 italic">
                        <span className="font-bold text-indigo-600">
                          3:35-3:50 pm:
                        </span>{" "}
                        Atul Kumar Harmukh: Evaluation of the biomechanical
                        response of helmeted head surrogate using conventional
                        and silica pad-based snowboarding helmets
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="mb-4 border-b pb-3 lg:text-lg sm:text-base text-sm">
                <span className="font-bold text-indigo-600 italic">
                  4:30-5:00 pm:
                </span>{" "}
                Tea
              </li>
              <li className="mb-4 border-b pb-3 lg:text-lg sm:text-base text-sm">
                <span className="font-bold text-indigo-600 italic">
                  5:00-5:30 pm:
                </span>{" "}
                Closing Ceremony
                <span className="text-gray-500 italic">
                  {" "}
                  (Outreach Auditorium)
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Schedule
