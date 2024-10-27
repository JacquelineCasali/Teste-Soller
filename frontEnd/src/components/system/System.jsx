
import "./System.css";
import propTypes from "prop-types";
export default function System({test} ) {
  

  return (
    <section className="singup">
       <div className="lefts"  >
        <div className="top">
          <h6>{test[0].titlePrincipal}</h6>
          <h1>{test[0].titleSecundario}</h1>
          <p className="paragrafo">{test[0].paragrafo}</p>
        </div>
     
          <div className="row">
            {test.map((item) => (
              <div className="contenbox" key={item.id}>
                <p className="icon"></p>

                <h6>{item.name}</h6>
                <p className="paragrafo">{item.text}</p>
              </div>
            ))}
          </div>
       
    
      </div>
      <div className="rectangle">
        {<img
          className="rectangle15"
          src={test[0].image}
          alt=""
          style={{ objectFit: "cover" }}
        /> ? (
          <img
            className="rectangle15"
            src={test[0].image}
            alt=""
            style={{ objectFit: "cover" }}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
System.propTypes = {
    data: propTypes.shape({}),
  }.isRequired;