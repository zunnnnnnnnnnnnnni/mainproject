import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import img1 from "C:/Users/Mcc/.gemini/antigravity/brain/9e5875b0-0f67-4f00-9dd8-aed1f62910c3/media__1777632529505.jpg";
import img2 from "C:/Users/Mcc/.gemini/antigravity/brain/9e5875b0-0f67-4f00-9dd8-aed1f62910c3/media__1777632667656.jpg";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Key <span>Achievements</span>
        </h2>
        <div className="work-flex">
          {[
            { title: "Global Reach", category: "Clientele", tools: "Instagram, Facebook, X", desc: "Successfully supported 1000+ clients globally", image: img1 },
            { title: "High Success Rate", category: "Recovery", tools: "Account Management", desc: "Maintained a high success rate in account recovery and issue resolution", image: img2 },
            { title: "Access Restoration", category: "Support", tools: "Security", desc: "Handled cases including account access issues and recovery", image: "/images/placeholder.webp" },
            { title: "Visibility Optimization", category: "Growth", tools: "Strategy", desc: "Delivered visibility and reach optimization", image: "/images/placeholder.webp" },
            { title: "Restriction Handling", category: "Compliance", tools: "Appeals", desc: "Specialized in restriction and limitation removal", image: "/images/placeholder.webp" },
            { title: "Diverse Clientele", category: "Reach", tools: "Brand Positioning", desc: "Consistent results across creators, businesses, and public profiles", image: "/images/placeholder.webp" }
          ].map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>{item.tools}</h4>
                <p>{item.desc}</p>
              </div>
              <WorkImage image={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
