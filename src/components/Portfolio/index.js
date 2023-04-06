import React from 'react';

import PlaceHolderOne from "../../images/placeholders.jpg";
import MoodMixer from "../../images/mood-mixer.gif";
import WorkWrangler from "../../images/work-wrangler.png";
import VroomVroom from "../../images/vroom-vroom.png"

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={MoodMixer}
              alt="Mood Mixer"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/sieraford/mood-mixer" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://sieraford.github.io/mood-mixer/" target="_blank" rel="noreferrer">
                <button>Application</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={WorkWrangler}
              alt="Work Wrangler"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/srlevit94/Personal-Task-Manager" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://work-wrangler.herokuapp.com/login" target="_blank" rel="noreferrer">
                <button>Application</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={VroomVroom}
              alt="Placeholder"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/sjuan634/vROOM-vROOM" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://prj3-vroom-vroom.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Application</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderOne}
              alt="Placeholder"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/laboettcher" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>


  );
}

export default Portfolio;