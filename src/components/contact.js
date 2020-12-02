import React from 'react';
class Contact extends React.Component {
 render() {
      
        return (
          
            <>
            <div class="conh">
             <div class="conh1">Contact Us<i class="fa fa-recycle"/><div class="lineh"></div></div>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.244803410793!2d80.27485241435467!3d13.083665715950453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f555e583b4f%3A0xec99624dcc5e103a!2s10%2C+Stringer+St%2C+Edapalaiyam%2C+George+Town%2C+Chennai%2C+Tamil+Nadu+600003!5e0!3m2!1sen!2sin!4v1454574401527"></iframe>
             <div class="con1">
              <div class="con2">
                <div class="con21"><p>Head Office</p></div>
                <div class="con22">Chennai</div>
                <div class="con23">No.10/29, Stringer Street, Broadway, Chennai, Tamil Nadu, India 600108</div>
                <div class="con24">Phone : 91-99627-77755</div>
                <div class="con25">Email : info@earthrecycler.com </div>
                </div>
            <div class="con3">
            <div class="con21"><p>Branch Office</p></div>
            <div class="con22">Bengaluru</div>
            <div class="con23">494,first floor,15th main Sector 4,HRS layout,Bangalore-560102.</div>
            <div class="con24">Phone : 91-99627-77755</div>
            <div class="con25">Email : info@earthrecycler.com </div>
            </div>
            <form method="post" name="myemailform" action="index.php">
          <div class="con4">
            <div class="in1"><input type="text" id="fname" name="name" placeholder="Your name.."/></div>
          
           <div class="in2">
             <div><input type="text" id="email" name="email" placeholder="Your Email ID"/></div>
            <div><input type="text" id="ph" name="ph" placeholder="Your Phone No"/></div>
            </div>
            <div class="in3"> <input type="text" id="sb" name="sub" placeholder="Subject"/></div>

            <div class="in3"><input type="text" id="query" name="query" placeholder="Your Query"/></div>

            <input type="submit" value="Submit"/>
            </div></form>

            </div>  
            </div>
          
            </>
            );
        }
    }
    export default Contact;