import React from "react";
import { NavLink } from "react-router-dom";
import defaultImg from "../../../../img/spa_default_1.jpg";
import "./Provider.scss";
import { ratingPr } from "../../../../utils/RatingAverage";

function Provider({ provider, service }) {
  const reviews = provider.rating;
  const average = 3.5;
  const ratingProvider = ratingPr(reviews, average);

  return (
    <div className="provider-container">
      <NavLink className="navLink" to={`/providers/${provider._id}`}>
        <div className="provider-card">
          <div className="card-left">
            {provider.image ? (
              <img
                className="card-img"
                src={"provider.image"}
                alt="Service Image"
              ></img>
            ) : (
              <img
                className="card-img"
                src={"https://us.123rf.com/450wm/verpeya/verpeya1712/verpeya171200127/92112256-las-espadas-avatares-ilustraci%C3%B3n-vectorial-ilustraci%C3%B3n-vectorial-aislado-sobre-fondo-blanco-ilustrac.jpg?ver=6"}
                alt="Default Image"
              ></img>
            )}
            <div className="card-title">
              <h2 className="">{`${provider.firstName} ${provider.lastName}`}</h2>
              <h4>{`Calificación: ${ratingProvider}⭐`}</h4>
            </div>
          </div>
          <div className="card-options">
            <NavLink
              className="navLink card-button"
              to={`/providers/${provider._id}`}
            >
              Ver Perfil
            </NavLink>
            <NavLink
              className={
                provider.hasCalendar
                  ? "navLink card-button"
                  : "navlink card-button inactive"
              }
              to={
                provider.hasCalendar
                  ? `/services/providers/${service}/${provider._id}/calendar`
                  : `/services/providers/${service}`
              }
            >
              {provider.hasCalendar ? "Ver Agenda" : "Sin Agenda"}
            </NavLink>
            <NavLink
              className={
                provider.rating?.length
                  ? "navLink card-button"
                  : "navlink card-button inactive"
              }
              to={
                provider.rating?.length
                  ? `/providers/review/${provider._id}`
                  : `/services/providers/${service}`
              }
            >
              {provider.rating?.length ? "Ver Reseñas" : "Sin Reseñas"}
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Provider;
