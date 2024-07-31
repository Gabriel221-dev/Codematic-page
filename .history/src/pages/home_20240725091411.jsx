import "./Home.css";
import { AiOutlineCloudSync } from "react-icons/ai";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { FaDatabase } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";

function home() {
  return (
    <div className="Home">
      <section className="Home-1">
        <a href="" alt="" className="academy-1">
          <mark className="mark">Codematic Academy</mark>Join the Academy ➡
        </a>
        <container>
          <content>
            <div className="heading-sub-1">
              <div className="heading-1">
                {" "}
                Empowering Africa&apos;s best talents with modern technology
                skills and access to global opportunities{" "}
              </div>
              <div className="sub-heading-1">
                we are training 1,000,000 african youths in cloud technology ,
                AI, and Open source by 2034 , unlocking global opportunities and
                fostering innovation.{" "}
              </div>
            </div>
            <div className="action">
              <a href="" alt="" className="apply-heading">
                Apply Now
              </a>
              <a href="" alt="" className="learn-heading">
                Learn More
              </a>
            </div>
          </content>
        </container>
        <div className="frame">
          <img src="/public/Images/Frame 2353new.jpg" alt="" />
        </div>
      </section>
      <section className="Home-2">
        <container>
          <content className="home-chair">
            <div className="heading-sub-2">
              <div className="sub-heading-2">About us</div>
              <div className="heading-2">Why we started Codematic Academy</div>
              <article className="text-2">
                <p>
                  {" "}
                  Codematic Group provides software development, technology
                  consulting and cloud managed services for organisations in
                  Africa and the rest of the world. Although headquartered in
                  the United Kingdom, we maintain a satellite office in Lagos,
                  Nigeria, where many of its employees are based.
                </p>
                <p>
                  Our operations in Nigeria revealed a large skill gap between
                  African youths and their counterparts in developed markets in
                  Europe and the US. This severely limits economic growth and
                  access to job opportunities, which are already scarce in
                  Africa.
                </p>
                <p>
                  Therefore, we created the Codematic Academy as a non-profit
                  arm of Codematic Group. Through the Academy, we resolved to
                  bridge the skill and opportunity gap, while preparing Africa’s
                  youth for the future of work
                </p>
              </article>
              <button className="apply-now-2">Apply Now ➡</button>
            </div>
          </content>
        </container>
        <div className="img">
          <img src="/public/Images/Image.png" alt="" />
        </div>
      </section>
      <section className="Home-3">
        <container>
          <content>
            <article className="heading-sub-3">
              <div className="sub-3">Our Goals</div>
              <div className="heading-3">We do things differently...</div>
              <div className="text-3">
                To rigorously train and create employment opportunities for
                1,000,000 brilliant youths in Africa (starting with Nigeria), in
                Cloud Technology, Artificial Intelligence and Open Source
                Technology By 2034
              </div>
            </article>
          </content>
        </container>
        <div>
          <img src="/public/Images/Metrics.png" alt="" />
        </div>
      </section>
      <section className="Home-4">
        <container>
          <content>
            <div>
              <article className="header-sub-4">
                <div className="sub-header-4">Our Technovation Focus</div>
                <div className="header-4">Our Areas of Focus</div>
                <div className="text-4">
                  We are dedicated to empowering Africa&apos;s youth by focusing
                  on four key areas:
                </div>
              </article>
            </div>
          </content>
          <content>
            <div>
              <article>
                <div className="cloud">
                  <AiOutlineCloudSync />
                </div>
                <div className="header-text-4">
                  Google Cloud & Open Source Development
                </div>
                <div className="text-4">
                  Harness the power of open source technologies on the scalable
                  and secure infrastructure of Google Cloud. Unlock new
                  possibilities with robust tools and seamless integrations.
                </div>
              </article>
              <article>
                <div className="circle">
                  <HiOutlineViewfinderCircle />
                </div>
                <div>Artificial intelligence on Google Cloud</div>
                <div>
                  Leverage Google&apos;s cutting-edge artificial intelligence
                  technologies to drive innovation and efficiency. With powerful
                  AI and machine learning tools, automate processes, and deliver
                  personalized experiences at scale.
                </div>
              </article>
              <article>
                <div className="data">
                  <FaDatabase />
                </div>
                <div>Data Analytics/Business Intelligence on Google Cloud</div>
                <div>
                  Transform raw data into actionable insights with scalable,
                  secure, and intuitive solutions. From real-time analytics to
                  predictive modeling, drive smarter decisions, optimize
                  operations, and uncover new opportunities.
                </div>
              </article>
              <article>
                <div>
                  <SiMaterialdesignicons />
                </div>
                <div>UI/UX Design</div>
                <div>
                  Create intuitive and engaging interfaces that captivate your
                  audience and drive user satisfaction. Through innovative UI/UX
                  design, transform complex ideas into seamless, user-friendly
                  experiences.
                </div>
              </article>
            </div>
          </content>
        </container>
      </section>
      <section className="Home-5">
        <container>
          <content>
            <div>
              <img src="/public/Images/ImageYinka.png" alt="" />
            </div>
            <article>
              <div>
                <h1>Meet Our Founder</h1>
                <div>
                  <p>
                    Yinka is a senior business and technology leader, formerly
                    at Google and Goldman Sachs.
                  </p>
                  <p>
                    Yinka co-founded the Codematic Group to bridge the
                    technology gap in Africa, and transform how organisations
                    operate. He has an unwavering belief in Africa’s potential
                    and envisions its youth as the most sought-after tech
                    talents globally.
                  </p>
                </div>
              </div>
            </article>
          </content>
        </container>
      </section>
      <section className="Home-6">
        <container>
          <content>
            <div>Testimonials</div>
            <div></div>
            <div></div>
          </content>
          <content>
            <div>
              <div></div>
            </div>
          </content>
        </container>
      </section>
      <section className="Home-7"> go</section>
    </div>
  );
}

export default home;
