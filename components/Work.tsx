import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
const experiences = [
{
position: "Front-End Web Developer Intern",
company: "IZIDOOR",
location: "France",
dates: "Sep 2025 - Oct 2025",
},
{
position: "Administrative Assistant",
company: "TRANSIDF",
location: "Rabat, Morocco",
dates: "Jun 2025 - Oct 2025",
},
{
position: "Math Tutor",
company: "",
location: "",
dates: "September 2024 - June 2025",
},
{
position: "Full-Stack Web Developer Intern",
company: "Sophatour",
location: "Salé, Morocco",
dates: "Dec 2024 - Feb 2025",
},
{
position: "Front-End Developer & UX/UI Designer Intern",
company: "Alphastra IPHA Project",
location: "Rabat, Morocco",
dates: "Aug 2024 - Nov 2024",
},
{
position: "Graphic Design Intern",
company: "Boite Zehani",
location: "Salé, Morocco",
dates: "February 2024 - May 2024",
},
{
position: "Assistant Professor & Internal IT Administrator",
company: "Omar ben El Khayab College",
location: "Salé, Morocco",
dates: "Oct 2023 - Jun 2024",
},

{
position: "Web Development & Graphic Design Freelancer & Social Media Manager",
company: "Club Nautique Plage de Rabat",
location: "Rabat, Morocco",
dates: "Juillet  2019 - Decembre 2022",
},
{
position: "Graphic Design Intern",
company: "GAD ACADEMY",
location: "Morocco",
dates: "Jan 2023 - Aug 2023",
},
{
position: "Assistant Professor & Internal IT Administrator",
company: "Al Idrissi College",
location: "Skhirate, Morocco",
dates: "Feb 2024 - May 2024",
},
{
position: "Computer Science Teacher Intern",
company: "Lala Nazha High School",
location: "Rabat, Morocco",
dates: "Dec 2022 - Jan 2023",
},


{
position: "Math & Physics Tutor",
company: "",
location: "",
dates: "September 2022 - June 2023",
},
{
position: "Math Tutor",
company: "",
location: "",
dates: "September 2024 - June 2025",
},
{
position: "Web Development & Graphic Design Freelancer & Social Media Manager",
company: "Yacht Club Rabat",
location: "Salé, Morocco",
dates: "Juillet  2019 - Decembre 2022",
},
];

export default function WorkExperience() {
  return (
            <section className="relative flex flex-col items-center justify-center py-20 text-white bg-gradient-to-br from-blue-600 via-black/70 to-black overflow-hidden">

    <div className="w-full py-16 px-4 md:px-12 lg:px-24">
      <h1 className="text-4xl md:text-4xl font-bold text-center text-white mb-12 tracking-wide">
        Work Experience
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {experiences.map((item, index) => (
          <Card key={index} className="w-full bg-gradient-to-br from-white via-white/70  shadow-lg border-0 shadow-blue-700">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {item.position}
              </CardTitle>
              <CardDescription>
                {item.company && <span>{item.company}</span>}
                {item.location && <span> • {item.location}</span>}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-sm font-medium">{item.dates}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </section>  
  );
}
