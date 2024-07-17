const techIcon = document.querySelector(".tech-box > img")
const techName = document.querySelector("#tech-name")
const techDescription = document.querySelector("#tech-desc")

const launchBtn = document.querySelector("#launch-v")
const portBtn = document.querySelector("#space-port")
const spaceBtn = document.querySelector("#space-v")

let techData = {"technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]}.technology

const launchV = techData[0]
const spacePort = techData[1]
const spaceV = techData[2]

launchBtn.addEventListener("click", () => {
    setTech(launchV)
})

portBtn.addEventListener("click", () => {
    setTech(spacePort)
})

spaceBtn.addEventListener("click", () => {
    setTech(spaceV)
})


let setTech = (data) => {
    techName.innerHTML = data.name
    techDescription.innerHTML = data.description
    techIcon.src = data.images.landscape
}