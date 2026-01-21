import React from "react";

type Project = {
  title: string;
  subtitle: string;
  image: string;
    url?: string;
};

const projects: Project[] = [
  {
    title: "TransIDf Web",
    subtitle: "Web Design",
    image: "/projects/project1.png", // à créer dans public/projects
    url : "https://transidf1.vercel.app/", // exemple de lien
  },
  {
    title: "Car N GO Rent Car",
    subtitle: "Web Design",
    image: "/projects/project2.png",
    url : "https://car-ngo.vercel.app/", // exemple de lien
  },
  {
    title: "Club Nautique Plage de Rabat",
    subtitle: "Web Design, App Design",
    image: "/projects/project3.png",
    url : "https://cnpr-amber.vercel.app/", // exemple de lien
  },
   {
    title: "Morrocain Sailing Website",
    subtitle: "Web Design",
    image: "/projects/project5.png",
    url : "https://marsailing.netlify.app/", // exemple de lien
  },

    {
    title: "My first Portfolio",
    subtitle: "Web Design",
    image: "/projects/project6.png",
    url : "https://mouadmouasseif.netlify.app/", // exemple de lien
    },
    {
    title: "SA Poseur Web Site ",
    subtitle: "App Design",
    image: "/projects/project7.png",
    url : "https://sa-poseur.netlify.app/", // exemple de lien
  },
  {
    title: "K.B.G (Keur Baye Gorgui) Website",
    subtitle: "App Design",
    image: "/projects/project8.png",
    url : "https://kbgsuarl.netlify.app/", // exemple de lien
  },
  {
    title: "Laila De Luxe Website",
    subtitle: "Web Design",
    image: "/projects/project9.png",
    url : "https://lailadeluxe.netlify.app/", // exemple de lien
  },
  {
    title: "MM Factu WebApp",
    subtitle: "Web App Design and Development",
    image: "/projects/project10.png",
    url : "https://lailadeluxe.netlify.app/", // exemple de lien
  },
    {
    title: "E-Pharma WebApp",
    subtitle: "Web App Design and Development",
    image: "/projects/project11.png",
    url : "https://E-Pharma.vercel.app/", // exemple de lien
  },
  {
    title: "Bank Loan Calculator",
    subtitle: "Bank Loan Calculator using Python",
    image: "/projects/project12.png",
    url : "https://github.com/mouadmouasseif/CALCULATEUR-DE-CR-DIT-BANCAIRE-EN-PYTHON", // exemple de lien 
  },
  {
    title: "School Manager",
    subtitle: "School Manager using Java, JavaFX for the user interface, and SQLite for database management.",
    image: "/projects/project13.png",
    url : "https://github.com/mouadmouasseif/gestion_etudiant.java",
  }
    
];

const RecentProjects: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center  py-20 text-white bg-gradient-to-br from-pink-600 via-black/70 to-blue-600 overflow-hidden">
      <div className="recent-header">
        <span className="recent-label">MY WORK</span>
        <h1 className=" text-3xl recent-title">Web PROJECT And APP</h1>
      </div>

      <div className="recent-cards ">
        {projects.map((project, index) => (
          <article className="recent-card bg-gray-400/90" key={index}>
            <div className="recent-card-image-wrapper ">
              <img
                src={project.image}
                alt={project.title}
                className="recent-card-image"
              />
            </div>
            <div className="recent-card-body ">
              <div>
                <h3 className="recent-card-title">{project.title}</h3>
                <p className="recent-card-subtitle">{project.subtitle}</p>
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button className="recent-card-button " aria-label="View project">
                <span>→</span>
              </button>
              </a>
            </div>
          </article>
        ))}
      </div>

   
    </section>
  );
};

export default RecentProjects;
