window.addEventListener('load', function () {
    const header = `
    <div id = "header">
    <nav class = "navbar navbar-expand-sm justify-content-center">
        <ul class = "navbar nav">
            <li>
                <h5 class = "company-title nav-item">
                    <em>James' & Nikki's Provision Delivery Services</em>
                </h5>
            <li>
            <li class = "nav-item">
                <a href = "#" class = "nav-link">Available Provisions</a>
            </li>
            <li class = "nav-item">
                <a class="nav-link" href = "deliver.html">Our delivery Services</a>
            </li>
            <li class = "nav-item">
                <a href = "cakes&pasteries.html" class = "nav-link">Nikki's Cakes & Pasteries</a>
            </li>
            <li class = "nav-item">
                <a href = "#" class = "nav-link">Why Us</a>
            </li>
            
        </ul>
    </nav>
    </div>
    `;
    document.getElementById('header').innerHTML = header;

    const footer = `
    <div class = "flex-container">
        <div>
        <h5>contact</h5>
        <ul>
            <li><span><i class = "fas fa-phone text-primary "></i>Tel</span>:+237</li>
            <li><span><i class = "fab fa-google text-primary"></i>mail</span>:</li>
            <li><span><i class = "fab fa-facebook"></i>aceBook</span>:like our page</li>
            <li><span><i class = "fab fa-instagram text-primary w-5x"></i>instagram</span>:follow us</li>
            <li><span><i class = "fab fa-twitter text-primary w-5x"></i>twitter</span>:follow us on</li>
            <li><span><i class = "fab fa-youtube text-primary w-5x"></i></span></li>
        </ul>
        </div>
        <div>
        <h5>Location</h5>
        <p>Located at the Bamenda main Market. <br>Shirt number</p>
        </div>
        <div>
        <h5>Help and Support</h5>
        </div>
        <div>
            <h5>Links to Recipe Sites</h5>
            <a>food2fork.com</a>
        </div>
    </div>
    `;
    this.document.getElementById('footer').innerHTML = footer;
})
