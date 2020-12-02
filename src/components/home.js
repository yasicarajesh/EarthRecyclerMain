import React from 'react';
class Home extends React.Component {
    constructor(props)
    {
        super(props);
        console.log(document.getElementsByTagName("body")[0]);
        document.getElementsByTagName("body")[0].className="home";
    }
    render() {
        return (
            <>

            <div class="im"></div>
            <div class="ofef"></div>
        <section id="secst"></section>
        </>
            );
        }
    }
    export default Home; 