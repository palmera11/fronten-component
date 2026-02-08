const ContactCard = () => {
  return (
    <div className="contact-card-wrapper section-animated visible">
      <div className="contact-card">
        
        <div className="contact-card-face front">
          <div className="avatar-placeholder">
            
          </div>
          <div  />
          <br />
          <h3>Alvaro Ibanez Vazquez</h3>
         <br />
          <p>Desarrollador Web <br /> Junior Full Stack</p>
        </div>

        
        <div className="contact-card-face back">
          <br />
          <p>📧 minipecas5@gmail.com</p>
          
          <p>📞 +34 605 32 91 72</p>
          
          <p>📍 Malaga, Spain</p>
<br />
          <div className="contact-links">
            <div className="DivGit" ></div>
            <a href="#" target="_blank" rel="noreferrer"></a>
            <br />
           
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
