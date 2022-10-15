import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
function Card(pro){
    return(
        <>
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{pro.cvalue.type}</h5>
            <h6 className="card-price text-center">${pro.cvalue.price}<span className="period">/months</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
                pro.cvalue.feature.map((note)=>{
                  return note.test?<div className="font-card"><FontAwesomeIcon icon={faCheck} className="icon" /> <strong>{note.name1}</strong>{note.name}</div>:<div className="font-card text-muted"><FontAwesomeIcon icon={faXmark} className="icon" /> {note.name}</div>
                })
              }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}
export default Card