
const mainElement = document.querySelector("main")

const team = [

    {
       name: 'Wayne Barnett',
       role: 'Founder & CEO',
       pic: 'wayne-barnett-founder-ceo.jpg'
    },
 
    {
       name: 'Angela Caroll ',
       role: 'Chief Editor',
       pic: 'angela-caroll-chief-editor.jpg'
    },
    {
       name: 'Walter Gordon',
       role: 'Office Manager',
       pic: 'walter-gordon-office-manager.jpg'
    },
    {
       name: 'Angela Lopez',
       role: 'Social Media',
       pic: 'angela-lopez-social-media-manager.jpg'
    },
    {
       name: 'Scott Estrada',
       role: 'Graphic Designer',
       pic: 'scott-estrada-developer.jpg'
    },
 
    {
       name: 'Barbara Ramos',
       role: 'Developer',
       pic: 'barbara-ramos-graphic-designer.jpg'
    },

 ];

for (let index = 0; index < team.length; index++) {
    const member = team[index];
    const divElement = document.createElement("div")
    mainElement.append(divElement)
    divElement.append(member.name + " " , member.role + " " , member.pic + " ")
    
    console.log(member)
}