export default function Portfolio(){
    return (
        <section id="portfolio">
            <div className="center">
                <h2>Portfolio</h2>
                <div className="portfolio-container">
                    <a href="https://github.com/Jay1194/Tech-Blog"><img src="/images/MVC.png" alt="" /></a>
                    <a href="https://github.com/Jay1194/Weather-Dashboard"><img src="/images/forcast.png" alt="" /></a>
                    <a href="https://github.com/Jay1194/Deep-Thoughts"><img src="/images/deep.png" alt="" /></a>
                   {/* <a href=""><img src="/images/placeholder.jpg" alt="" /></a>
                    <a href=""><img src="/images/placeholder.jpg" alt="" /></a>
                    <a href=""><img src="/images/placeholder.jpg" alt="" /></a>*/}
                </div>
                <div id="More">
            <a href="https://github.com/Jay1194">See All Projects</a>
            </div>
            </div>
        </section>
    );
}