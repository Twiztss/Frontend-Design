const fullName = document.querySelector("#full-name")
const role = document.querySelector("#role")
const bio = document.querySelector("#bio")
const pfp = document.querySelector(".crew-box > img")
const pfpMobile = document.querySelector(".crew-box-mobile")

const commanderBtn = document.querySelector("#commander")
const specialistBtn = document.querySelector("#specialist")
const pilotBtn = document.querySelector("#pilot")
const engineerBtn = document.querySelector("#engineer")

const crewData = {"crew": [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]}.crew

const commander = crewData[0]
const specialist = crewData[1]
const pilot = crewData[2]
const engineer = crewData[3]

commanderBtn.addEventListener("click", ( )=> {
    removeActive(specialistBtn, pilotBtn, engineerBtn)
    setCrew(commander)
    setActive(commanderBtn)
})

specialistBtn.addEventListener("click", () => {
    removeActive(commanderBtn, pilotBtn, engineerBtn)
    setCrew(specialist)
    setActive(specialistBtn)
})

pilotBtn.addEventListener("click", () => {
    removeActive(commanderBtn, specialistBtn, engineerBtn)
    setCrew(pilot)
    setActive(pilotBtn)
})

engineerBtn.addEventListener("click", () => {
    removeActive(commanderBtn, specialistBtn, pilotBtn)
    setCrew(engineer)
    setActive(engineerBtn)
})


let setCrew = (data) => {
    role.innerHTML = data.role
    fullName.innerHTML = data.name
    bio.innerHTML = data.bio
    pfp.src = data.images.png
    pfpMobile.style.content = "url(" + data.images.png + ")"
}

let setActive = (elem) => {
  elem.classList.add("active")
}

let removeActive = (elem1, elem2, elem3) => {
  elem1.classList.remove("active")
  elem2.classList.remove("active")
  elem3.classList.remove("active")
}





