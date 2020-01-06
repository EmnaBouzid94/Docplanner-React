import React from 'react';

import './App.css';


import Header from './Components/Header'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Footer from './Components/Footer'


const card = [{title:"For patients" ,body:'Find a doctor, book a visit and solve any health-related doubt',img:"https://www.docplanner.com/img/screen-marketplace@2x.png",class:"div1-section3",classimg:"img-pc-1"},{title:'For doctors',body:"Save time managing visits and cut no-shows by half",img:"https://www.docplanner.com/img/screen-saas@2x.png",class:"div2-section3",classimg:"img-pc-2"}] 
const logo=["ZnanyLekarz","Doctoralia","MioDottore","DoktorTakvimi","ZnamyLekar"]
const cadre =[{img:"https://www.docplanner.com/img/flag@2x.png",title:"Leader in 10 countries",body:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",classdiv:"div2-section5",classimg:"flag"},{img:"https://www.docplanner.com/img/visits@2x.png",title:"1.5 million appointments",body:"booked last month",classdiv:"div3-section5",classimg:"plan"},{img:"https://www.docplanner.com/img/patients.png",title:"30 million unique patients",body:"visit us every month",classdiv:"div4-section5",classimg:"people"},{img:"https://www.docplanner.com/img/doctors@2x.png",title:"2 million active doctors",body:"trust in our solutions",classdiv:"div5-section5",classimg:"doc"}]
const carte=[{url:"https://www.docplanner.com/images/warsaw.png",name:"Warsaw"},{url:"https://www.docplanner.com/images/barcelona.png",name:"Barcelona"},{url:"https://www.docplanner.com/images/istanbul.png",name:"Istanbul"},{url:"https://www.docplanner.com/images/rome.png",name:"Rome"},{url:"https://www.docplanner.com/images/mexico-city.png",name:"Mexico City"},{url:"https://www.docplanner.com/images/curitiba.png",name:"Curitiba"}]
const link=[{url:"https://www.znanylekarz.pl/?_ga=2.23269114.1723386032.1576486711-1370081947.1576486711",name:" Poland",p:", "},{url:"https://www.doktortakvimi.com/?_ga=2.23269114.1723386032.1576486711-1370081947.1576486711",name:"Turkey",p:", "},{url:"https://www.doctoralia.es/",name:"Spain",p:", "},{url:"https://www.miodottore.it/?_ga=2.78695252.1723386032.1576486711-1370081947.1576486711",name:"Italy",p:", "},{url:"https://www.znamylekar.cz/",name:"Czech Republic",p:", "},{url:"https://www.doctoralia.com.mx/",name:"Mexico",p:", "},{url:"https://www.doctoralia.co/",name:"Colombia",p:", "},{url:"http://www.doctoralia.com.br/",name:"Brazil",p:", "},{url:"http://www.doctoraliar.com/",name:"Argentina",p:" and "},{url:"http://www.doctoralia.cl/",name:"Chile",p:"."}]
const select=[{url:"",name:"CHOOSE COUNTRY"},{url:"",name:"ARGENTINA"},{url:"https://www.doctoralia.com.au",name:"AUSTRALIA"},{url:"https://www.doctoralia.com.br",name:"BRAZIL"},{url:"https://www.doctoralia.com.cl",name:"CHILE"},{url:"https://www.doctoralia.com.co",name:"COLOMBIA"},{url:"https://www.doctoralia.com.cz",name:"CEZCH"},{url:"https://www.doctoralia.com.fr",name:"FRANCE"},{url:"https://www.doctoralia.com.it",name:"ITALY"},{url:"https://www.doctoralia.com.mx",name:"MEXICO"},{url:"https://www.doctoralia.com.pe",name:"PERU"},{url:"https://www.znanylekarz.pl",name:"POLAND"},{url:"https://www.doctoralia.com.pt",name:"PORTUGAL"},{url:"https://www.doctoralia.com.es",name:"SPAIN"},{url:"https://www.doctoralia.com.tr",name:"TURKEY"},{url:"https://www.doctoralia.co.uk",name:"UK"}]

function App() {
  return (
    <div className="App">
      <Header/>
      <Section1 card={card} logo={logo} select={select}/>
      <Section2 cadre={cadre}/>
      <Section3 carte={carte}/>
      <Footer link={link}/>
    </div>
  );
}

export default App;
