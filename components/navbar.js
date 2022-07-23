let  navbar = () => 
{

return  `
    
            
    <a href="index.html">
        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png" alt="">
    </a>
    <a href="findParking.html"> 
        <p id="link1">Find parking</p> </a>
    <a id="link2" href="login.html">Log in</a>
    <a id= "link3" href="./TalkToSales.html">Talk to Sales</a>
    `
       
    
}

let footer=()=>{

    return `
    <div>
            <p>21st Century Parking Operator</p>
            <div class="i">
                <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png"
                    alt="">
            </div>
            <div id="inner_foot">
                <div>
                    <p>Company</p>
                    <a href="./About.html">
                    <p>About</p>
                    </a>
                   
                    <a href="./careers.html">
                        <p>Careers</p>
                    </a>

                    <a href="./FAQ.html">
                    <p>FAQ</p>
                    </a>

                    <a href="./Contact.html">
                    <p>Contact us</p>
                    </a>
                   
                    <a href="./privacy.html">
                    <p>Privacy Policy</p>
                    </a>
                    
                </div>

                <div>
                    </a>
                    <p>Uses</p>
                    <a href="./TalkToSales.html">
                        <p>Hotels</p>
                    </a>
                    <a href="./TalkToSales.html">
                        <p>Garages</p>
                    </a>
                    <a href="./TalkToSales.html">
                        <p>Surface Lots</p>
                    </a>
                    <a href="./TalkToSales.html">
                        <p>Airports</p>
                    </a>
                </div>

                <div>
                    <p>Features</p>
                    <a href="./TalkToSales.html">
                        <p>Access control</p>
                    </a>
                    <a href="./TalkToSales.html">
                        <p>Parking management</p>
                    </a>
                    <a href="./TalkToSales.html">
                        <p>Payment collection</p>
                    </a>
                    <a href="./TalkToSales.html">
                        <p>Gate arm alternative</p>
                    </a>
                </div>

                <div>
                    <p>Find parking</p>
                    <a href="https://apps.apple.com/us/app/airgarage/id1382476659" target="_blank">
                        <p>on iOS app</p>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=airgarage.app&hl=en_US" target="_blank">
                        <p>on Android app</p>
                    </a>
                    <a href="./findParking.html">
                        <p>on Web</p>
                    </a>
                </div>
            </div>
        </div>
        <div id="line">
        </div>
        <div id="last">
            <p style="text-align:left;"> ©2022 AirGarage Inc</p>
        </div>
    
    
    `
}

export  {navbar,footer};