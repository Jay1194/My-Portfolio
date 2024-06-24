import {useState} from 'react';
export default function Skills() {
    const[extraClasses, setExtraClasses] = useState('')
    return(
        <section id='skills'>
            <div className="center">
            <h2>Skills</h2>
            <div className={extraClasses + 'skills-container'}>
                <div className='skill-box'><img src='/images/git.svg' alt=''/><span>Git</span></div>
                <div className='skill-box'><img src='/images/vscode.svg' alt=''/><span>VSCode</span></div>
                <div className='skill-box'><img src='/images/html-5.png' alt=''/><span>HTML</span></div>
                <div className='skill-box'><img src='/images/css.svg' alt=''/><span>CSS</span></div>
                <div className='skill-box'><img src='/images/js.png' alt=''/><span>JavaScript</span></div>
                <div className='skill-box'><img src='/images/mongodb.png' alt=''/><span>MongoDb</span></div>
                <div className='skill-box'><img src='/images/express.svg' alt=''/><span>Express</span></div>
                <div className='skill-box'><img src='/images/react.png' alt=''/><span>React</span></div>
                <div className='skill-box'><img src='/images/node-js.png' alt=''/><span>Node</span></div>
                <div className='skill-box'><img src='/images/sql.svg' alt=''/><span>SQL</span></div>
                <div className='skill-box'><img src='/images/graphql.svg' alt=''/><span>GraphQl</span></div>
                <div className='skill-box'><img src='/images/apollo.svg' alt=''/><span>Apollo</span></div>
            </div>
           </div>
        </section>
    );
}