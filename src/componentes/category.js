import React from "react";
import {LinkNav as Link} from "./styles.js"

export default function Category({ name, options = [] }) {
  return (
    <section>
      <h3 className="c-title">{name}</h3>
      <ul className="list-trends">
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}