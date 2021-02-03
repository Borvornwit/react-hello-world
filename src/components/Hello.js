import react from 'react';

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Vishwas</h1>
    //     </div>
    // )
    return react.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        react.createElement('h1',null, 'Hello Vishwas')
    );
}

export default Hello