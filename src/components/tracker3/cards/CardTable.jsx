import './cardTable.css'

export const CardTable = ({flag, country, updated}) => {
    return (
        <div className="card custom-card d-flex align-items-center justify-content-between p-3 mb-3">
          <img src={flag} alt={`${country} flag`} className="custom-flag me-3" />
          <div className="d-flex flex-column text-end">
            <h5 className="card-title mb-1">{country}</h5>
            <p className="card-text fw-bold custom-cases">{updated}</p>
          </div>
        </div>
      );
    };