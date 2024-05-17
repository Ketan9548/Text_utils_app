import React from 'react';

export default function About(props) {
    // const [mystyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    let mystyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#0d2648' : 'white',
    }
    return (
        <>
            {/* <div className='text-center'>
                <h1 style={mystyle}> This is my page aobut the textUtilis Website</h1>
                <p style={mystyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum aliquid dolores maiores dolor quae, delectus impedit ad veniam explicabo, dolorum corporis mollitia atque reprehenderit, quasi voluptates cupiditate facere ea placeat numquam amet nihil. Possimus recusandae veritatis, tenetur sapiente nisi non autem itaque.</p>
            </div> */}
            <h1 className='text-center' style={mystyle}>About TextUtils</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Upper Case Hendler
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This site is for upper case handeling in text.</strong> You can also call uppercase letters capitals, caps, or if you want to be really formal, majuscules. In English, we use uppercase for so-called proper nouns, things like people's names (like Ruth Bader Ginsberg), place names (like Saskatchewan), formal titles (like Dr. Patel), and the the names of movies and books (like Pride and Prejudice). The first word in each sentence also begins with an uppercase letter. These letters are slightly taller than their lowercase counterparts. <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Lower Case Hendler
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div style={mystyle} className="accordion-body">
                            <strong>This site is use also Lower case handler.</strong>Lowercase letters are smaller and sometimes take a slightly different form than their uppercase counterparts.<code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Counted the Numerical Value in Text
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div style={mystyle} className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
