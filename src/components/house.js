import React from 'react';
class House extends React.Component {
    constructor(props)
    {
        super(props);
        console.log(document.getElementsByTagName("body")[0]);
        document.getElementsByTagName("body")[0].className="house";
    }
    render() {

       
        return (
            <>
            <div class="house">
            <div class="yabh"></div>
           
            <div class="house2"><h5>Ensuring your residences, residential community is a clean place to live, Earth Recycler handles your municipal waste safely and smartly through waste processing and recycling. 
            </h5></div>
            <div class="ho">
            <div class="hos">
            <div class="ho1">Customized Solutions for Your Community</div>
            </div>
           
            <div class="ho3">
            <div class="hoi1"><img src="assets/img/ho.jpg"/></div>
            <div class="ho2">No two communities are same thus waste  generation from every community is different. We offer tailor-made solutions to collect and  manage your waste. We offer a range of cost-effective, reliable and sustainable services. 
            Our reliable team can help you develop a customized plan that suits best to manage your community’s municipal waste. 90% of the household waste can be manged onsite and in case of space constraint your recyclables will be picked up at scheduled intervals to our yard for further processing.
            </div>
            <div class="hoi"><img src="assets/img/ho.jpg"/></div>

            </div>
            </div>
            <div class="brain">
            <div class="ele">E-Waste Recycling</div>
            
            <div class="brain1">
            <div class="hoi1"><img src="assets/img/brainfi.png"/></div> 
           <div class="elecon">We can help your community be more caring towards earth by keeping potentially harmful electronic waste out of the regular trash bins. We offer a convenient way to recycle all outdated electronic gadgets by organising electronics waste collection drives or placing drop off locations at regular intervals.
            </div>
            <div class="hoi3"><img src="assets/img/brainfi.png"/></div> 
            </div>
            </div>
            </div>
            </>
            );
        }
    }
    export default House; 
