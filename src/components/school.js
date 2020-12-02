import React from 'react';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./item";

class School extends React.Component {
 

    constructor(props)
    {
        super(props);
        console.log(document.getElementsByTagName("body")[0]);
        document.getElementsByTagName("body")[0].className="house";
    }
      
   
    render() {
        
         
        return (
            <>
     
             <div class="sch1">
           <div class="sc">
             <div class="sch2"></div></div>
              <div class="indus12"><p>Why Choose Us</p>
              <div class="indus9">
              <div class="indus10"><img src="assets/img/school.png"></img></div><div class="indus11">Earth Recycler helps manage the waste generated in schools, colleges and universities. Our waste management services to educational institutions are dependable, efficient and environmentally responsible.
           </div></div></div>
           <div class="sch9">
           <div class="sch10">Our systematic approach to sustainable waste  management model is based on best practices derived from our expertise of serving various organisations in Chennai.
           </div></div>
          <div class="scco">
           <div class="sch11"><p>Implementation and Inculcating Essence of Green Goals</p>
           </div>

           <div class="servy" id="section">
           <div class="servicey1">
               <div class="servicey2"><img src="assets/img/new1.jpg"/></div>
              
               <div class="content3">
                   <div class="yasu"><i class="fa fa-check"></i> Establish sustainability goals</div>
                   <div class="yasu"><i class="fa fa-check"></i> Conduct a campus-wide assessment</div>
                   <div class="yasu"><i class="fa fa-check"></i> Identify which material streams are being consumed and how they’re being handled.</div>
                   <div class="yasu"><i class="fa fa-check"></i> Develop environmental programs</div>
               </div>
           </div>
           <div class="servicey3">
               <div class="servicey4"><img src="assets/img/new2.jpg"/></div>
               
               <div class="content3">
                   <div class="yasu"><i class="fa fa-check"></i> Create a plan for diverting as many materials as possible through recycling, organic programs, material donations and more.</div>
                   <div class="yasu"><i class="fa fa-check"></i> Implement environmentally conscious improvements</div>
                   <div class="yasu"><i class="fa fa-check"></i> Work cooperatively with students, staffs, vendors, facilities personnel and others to create a united effort that draws on best practices in every sphere.</div>
                   </div>
           </div>
           <div class="servicey5">
               <div class="servicey6"><img src="assets/img/new3.jpg"/></div>
              
               <div class="content3">
                   <div class="yasu"> Measure and report</div>
                   <div class="yasu"><i class="fa fa-check"></i> Track and document every material that enters or leaves your campus. Reports on the effectiveness of Source Segregation</div>
                   <div class="yasu"><i class="fa fa-check"></i> Evaluate and improve</div>
                   <div class="yasu"><i class="fa fa-check"></i>Continually enhance your environmental programs both operationally and through educational training. Set ongoing benchmarks for improvement.</div>
                   </div>
                   </div>
           </div>
           </div>













           
            </div>
              
            </>
        );
        
        
    }
}
export default School;        